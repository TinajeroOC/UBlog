document.addEventListener("click", event => {
  if (event.target.classList.contains("alert-close")) {
    event.target.closest(".alert")?.remove();
  }

  if (event.target.id === "bannerButton") {
    document.getElementById("bannerUpload").click();
  }

  if (event.target.id === "pictureButton") {
    document.getElementById("pictureUpload").click();
  }
});