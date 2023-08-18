//nav
const $hamburgerBtn = document.querySelector(".hamburgerBtn");
const mobile_ul = document.querySelector(".mobile_ul");
const btnStatus = document.querySelector(".hamburgerBtn>i");

$hamburgerBtn.addEventListener("click", () => {
  mobile_ul.classList.add("display_block");
  mobile_ul.classList.remove("display_none");

  if (btnStatus.className === "fa-solid fa-bars") {
    btnStatus.className = "fa-regular fa-circle-xmark";
  } else {
    btnStatus.className = "fa-solid fa-bars";
    mobile_ul.classList.add("display_none");
    mobile_ul.classList.remove("display_block");
  }
});

//scroll event
// const $section_main = document.querySelector("#main");
const $section_about = document.querySelector("#about");
// const $section_information = document.querySelector("#information");
// const $section_project = document.querySelector("#project");
// const $section_contact = document.querySelector("#contact");
const $sections = document.querySelectorAll("section");
const $topButton = document.querySelector(".topBtn");
// const $about_back = document.querySelector(".about_back");
// const $mainArticle = document.querySelector(".main_wrap article");
// const $about_wrap = document.querySelector(".about_wrap");
// const $info_wrap = document.querySelector(".info_wrap");

function checkWindowHeight() {
  const scroll_Y = window.scrollY;

  //topBTN display
  if ($section_about.offsetTop < scroll_Y) {
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

    if (section_.offsetTop < window.innerHeight + scroll_Y) {
      section_wrap.classList.add("fadeIn");
      // section_wrap.classList.remove("fadeout");
      // console.log(section_.offsetTop, window.innerHeight, scroll_Y);
      if ($title) {
        $title.classList.add("title_anim");
      }
      if ($about_back) {
        $about_back.style.transform = "translateY(" + (-scroll_Y - 500) + "px)";
      }
    }
  });
}

window.addEventListener("scroll", checkWindowHeight);
window.addEventListener("resize", checkWindowHeight);
window.addEventListener("orientationchange", checkWindowHeight);

$topButton.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// project select category
const $category_list_li = document.querySelectorAll(".category_list li");
const project_list_li = document.querySelectorAll(".project_list li");

$category_list_li.forEach((li) => {
  li.addEventListener("click", function () {
    $category_list_li.forEach((item) => (item.style.color = "#e2c49c"));
    this.style.color = "#000";

    // show project list
    project_list_li.forEach((li) => {
      if (this.className === "all") {
        li.classList.add("display_block");
        li.classList.remove("display_none");
      } else if (this.className === li.id) {
        li.classList.add("display_block");
        li.classList.remove("display_none");
      } else {
        li.classList.add("display_none");
        li.classList.remove("display_block");
      }
    });
  });
});
