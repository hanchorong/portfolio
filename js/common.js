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
const $topButton = document.querySelector(".topBtn");
// const $mainArticle = document.querySelector(".main_wrap article");
const $about_back = document.querySelector(".about_back");
const $about_wrap = document.querySelector(".about_wrap");
const $info_wrap = document.querySelector(".info_wrap");

const $section_main = document.querySelector("#main");
const $section_about = document.querySelector("#about");
const $section_information = document.querySelector("#information");
const $section_project = document.querySelector("#project");
const $section_contact = document.querySelector("#contact");

const $sections = document.querySelectorAll("section");

// console.log($section_information);
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
  console.log($section_information.offsetTop, scroll_Y + 600);

  // if ($section_about.offsetTop < scroll_Y + 400) {
  //   //이미충족됨
  //   console.log("section_about");
  //   $about_wrap.classList.add("fadeIn");

  // } else if ($section_information.offsetTop < scroll_Y + 600) {
  //   $info_wrap.classList.add("fadeIn");
  //   console.log("---");
  // }

  $sections.forEach(function (section_) {
    // console.log(section_); //0, 703, 1486, 2189
    // sections들의 최상단 단위를 받아와서 지금 윈도우 높이 + 스크롤 높이 - 200
    // console.log(
    //   "section_.offsetTop",
    //   section_.offsetTop,
    //   "window.innerH",
    //   window.innerHeight,
    //   "scroll_Y",
    //   scroll_Y
    // );

    const test = section_.querySelector(":nth-child(1)");

    console.log(test);
    if (section_.offsetTop < window.innerHeight + scroll_Y + 100) {
      test.classList.add("fadeIn");
    } else {
      // $mainArticle.classList.remove("fadeout");
    }
  });

  $about_back.style.transform = `translateY(${-scroll_Y}px) translateZ(0px)`;
}

window.addEventListener("scroll", checkWindowHeight);
window.addEventListener("resize", checkWindowHeight);

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
