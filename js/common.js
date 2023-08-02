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
const section_two = window.innerHeight;
const $mainArticle = document.querySelector(".main_wrap article");
const $about_back = document.querySelector(".about_back");
const $about_wrap = document.querySelector(".about_wrap");

function checkWindowHeight() {
  const scroll_Y = window.scrollY;

  if (scroll_Y > section_two) {
    $topButton.classList.remove("display_none");
    $topButton.classList.add("display_block");
  } else {
    $topButton.classList.remove("display_block");
    $topButton.classList.add("display_none");
  }

  if (scroll_Y + 400 > section_two) {
    $mainArticle.classList.add("fadeout");
    $about_wrap.classList.add("fadeIn");
  } else {
    $mainArticle.classList.remove("fadeout");
  }

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
        console.log("else", li);
        li.classList.add("display_none");
        li.classList.remove("display_block");
      }
    });
  });
});
