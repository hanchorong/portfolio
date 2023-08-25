// project select category
const $category_list_li = document.querySelectorAll(".category_list li");
const project_list_li = document.querySelectorAll(".project_list li");

$category_list_li.forEach((li) => {
  // category color
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

// section - project li category name
const prj_list = document.querySelectorAll(".project_list li");

prj_list.forEach((li) => {
  const category_name = li.querySelector(".category_name");
  category_name.textContent = `${li.id}`;
});
