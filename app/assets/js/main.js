// YOUR CODE GOES HERE:
document.addEventListener("click", event => {
  const target = event.target.parentElement.parentElement
  if (target.classList.contains("alert")) {
    target.remove()
  }
});