//nav
const $hamburgerBtn = document.querySelector(".hamburgerBtn");
const mobile_ul = document.querySelector(".mobile_ul");
const btnStatus = document.querySelector(".hamburgerBtn>i");

function onClickHamburgerBtn() {
  mobile_ul.classList.add("display_block");
  mobile_ul.classList.remove("display_none");

  if (btnStatus.className === "fa-solid fa-bars") {
    btnStatus.className = "fa-regular fa-circle-xmark";
  } else {
    btnStatus.className = "fa-solid fa-bars";
    mobile_ul.classList.add("display_none");
    mobile_ul.classList.remove("display_block");
  }
}

if ($hamburgerBtn) {
  $hamburgerBtn.addEventListener("click", onClickHamburgerBtn);
}

//scroll event
const $sections = document.querySelectorAll("section");
const $topButton = document.querySelector(".topBtn");
const $section_two = $sections[1];

function checkWindowHeight() {
  const scroll_Y = window.scrollY;

  //topBTN display
  if ($section_two.offsetTop < scroll_Y) {
    $topButton.classList.remove("display_none");
    $topButton.classList.add("display_block");
  } else {
    $topButton.classList.remove("display_block");
    $topButton.classList.add("display_none");
  }

  $sections.forEach(function (section_) {
    const section_wrap = section_.querySelector(":nth-child(1)");
    const $title = section_.querySelector(".title");
    const $about_back = section_.querySelector(".about_back");
    const $project_list = section_.querySelector(".project_list");

    if (section_.offsetTop < window.innerHeight + scroll_Y) {
      console.log(window.innerHeight + scroll_Y);
      section_wrap.classList.add("fadeIn");
      section_wrap.classList.remove("fadeout");

      if ($title) {
        $title.classList.add("title_anim");
      }
      if ($about_back) {
        $about_back.style.transform = "translateY(" + (-scroll_Y - 500) + "px)";
      }
      if ($project_list) {
        $project_list.classList.add("transformList");
      }
    } else {
      section_wrap.classList.add("fadeout");
      section_wrap.classList.remove("fadeIn");
    }
  });
}

window.addEventListener("scroll", checkWindowHeight);
window.addEventListener("resize", checkWindowHeight);
window.addEventListener("orientationchange", checkWindowHeight);

$topButton.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
