function toggleAbstract(button) {
  const content = button.parentElement.querySelector(".abstract-content");
  if (content.classList.contains("show")) {
    content.classList.remove("show");
    button.textContent = "Show Abstract";
  } else {
    content.classList.add("show");
    button.textContent = "Hide Abstract";
  }
}

function toggleBibtex(button) {
  const content = button.parentElement.querySelector(".bibtex-content");
  if (content.classList.contains("show")) {
    content.classList.remove("show");
    button.textContent = "Show BibTeX";
  } else {
    content.classList.add("show");
    button.textContent = "Hide BibTeX";
  }
}

function copyBibtex(button) {
  const bibtexContent = button.parentElement.textContent.replace(button.textContent, "").trim();

  navigator.clipboard
    .writeText(bibtexContent)
    .then(() => {
      const originalHTML = button.innerHTML;
      button.innerHTML = "<span>\u2713</span> Copied!";
      button.classList.add("copied");

      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.classList.remove("copied");
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
      button.innerHTML = "<span>\u2717</span> Failed";
      setTimeout(() => {
        button.innerHTML = "<span>\ud83d\udccb</span> Copy";
      }, 2000);
    });
}
