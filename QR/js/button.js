const tabsBtns = document.querySelectorAll(".tabs_nav button");

const tabsItem = document.querySelectorAll(".tabs_item");
function hideTabs() {
  tabsItem.forEach((item) => item.classList.add("hide"));
  tabsBtns.forEach((item) => item.classList.remove("active"));
}
function showTab(index) {
  tabsItem[index].classList.remove("hide");
  tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
  })
);
//....................FAQ...........//

let answers = document.querySelectorAll(".answer");

answers.forEach((el, index) => {
  el.addEventListener("click", () => {
    answers.forEach((item, itemIndex) => {
      let btn = item.childNodes[3];
      let span = item.childNodes[5];
      if (index !== itemIndex) {
        // Close all other dropdowns
        span.style.maxHeight = "0";
        item.style.background = "";
        btn.style.transform = "rotate(0deg)";
      }
    });

    let btn = el.childNodes[3];
    let span = el.childNodes[5];

    if (span.style.maxHeight === "0px" || !span.style.maxHeight) {
      span.style.maxHeight = span.scrollHeight + "px";
      el.style.background = "#fff";
      btn.style.transform = "rotate(180deg)";
    } else {
      span.style.maxHeight = "0";
      el.style.background = "";
      btn.style.transform = "rotate(0deg)";
    }
  });
});
