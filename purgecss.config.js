module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: {
    standard: ["show", "copied"],
    deep: [
      /^cv-/,
      /^info-/,
      /^timeline-/,
      /^publication-/,
      /^abstract-/,
      /^bibtex-/,
      /^copy-bibtex/,
      /^profile-photo/,
      /^research-list/,
      /^cv-social/,
      /^contact-icons/,
    ],
    greedy: [/data-theme/],
  },
};
