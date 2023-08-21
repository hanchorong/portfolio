// textarea auto scroll height
const $textarea = document.querySelectorAll("textarea");

if ($textarea) {
  $textarea.forEach(function (text) {
    text.style.height = "auto";
    text.style.height = text.scrollHeight + "px";
  });
}
