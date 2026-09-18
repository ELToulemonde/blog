(() => {
  "use strict";

  document.querySelectorAll("[data-tag-filters]").forEach((filters) => {
    const portfolio = filters.closest(".portfolio");
    const options = filters.querySelector("[data-tag-options]");
    const reset = filters.querySelector("[data-tag-reset]");
    const status = filters.querySelector("[data-tag-status]");
    const language = filters.dataset.lang === "en" ? "en" : "fr";
    const selected = new Set();
    const available = new Map();
    const normalize = (text) => text.normalize("NFC").trim().replace(/\s+/g, " ");
    const keyFor = (text) => normalize(text).toLocaleLowerCase(language);

    // Only a list explicitly introduced by "Tags :" in Markdown is a tag list.
    // Other lists (slides, coauthors, contents...) must never become filters.
    const entries = Array.from(portfolio.querySelectorAll(".portfolio-section:not([data-portfolio-toc])"), (section) => {
      const marker = section.querySelector("[data-tag-marker]");
      const list = marker && marker.nextElementSibling;
      const tags = new Set();
      if (list && list.tagName === "UL") {
        Array.from(list.children).forEach((item) => {
          const label = normalize(item.textContent);
          const key = keyFor(label);
          if (!key) return;
          tags.add(key);
          if (!available.has(key)) available.set(key, label);
        });
      }
      return { section, tags };
    });

    if (!available.size) return;

    const toc = portfolio.querySelector("[data-portfolio-toc]");
    const targets = new Map();
    entries.forEach(({ section }) => {
      section.querySelectorAll("[id]").forEach((heading) => {
        targets.set(heading.id.normalize("NFC"), section);
      });
    });
    const tocItems = toc ? Array.from(toc.querySelectorAll("li"), (item) => {
      const link = item.querySelector('a[href^="#"]');
      let target;
      if (link) {
        try {
          target = targets.get(decodeURIComponent(link.getAttribute("href").slice(1)).normalize("NFC"));
        } catch {
          // Keep malformed or outdated anchors as-is when showing all content.
        }
      }
      return { item, target };
    }) : [];

    const buttons = new Map();
    const update = () => {
      let visible = 0;
      entries.forEach(({ section, tags }) => {
        const matches = selected.size === 0 || Array.from(selected).some((tag) => tags.has(tag));
        section.hidden = !matches;
        if (matches) visible += 1;
      });
      buttons.forEach((button, key) => button.setAttribute("aria-pressed", String(selected.has(key))));
      reset.setAttribute("aria-pressed", String(selected.size === 0));
      status.textContent = language === "en"
        ? `${visible} of ${entries.length} ${entries.length === 1 ? "result" : "results"}`
        : `${visible} ${visible === 1 ? "résultat" : "résultats"} sur ${entries.length}`;

      // The contents list must not link to sections hidden by the filters.
      tocItems.forEach(({ item, target }) => {
        item.hidden = selected.size > 0 && (!target || target.hidden);
      });
      if (toc) toc.hidden = tocItems.length > 0 && tocItems.every(({ item }) => item.hidden);
    };

    Array.from(available).sort((a, b) => a[1].localeCompare(b[1], language)).forEach(([key, label]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-controls", "portfolio-content");
      button.addEventListener("click", () => {
        if (selected.has(key)) selected.delete(key);
        else selected.add(key);
        update();
      });
      buttons.set(key, button);
      options.appendChild(button);
    });

    reset.addEventListener("click", () => {
      selected.clear();
      update();
    });
    update();
    filters.hidden = false;
    filters.closest("[data-tag-sidebar]").hidden = false;
  });
})();
