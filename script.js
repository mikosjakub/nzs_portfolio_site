const options = { threshold: 0.1 },
  cssTemplateString =
    ".list li {\n  opacity: 0;\n  animation: none;\n}.grid-item {transform: scale(0.9);}.list li:nth-child(odd) {\n  transform: translateX(-10%);\n}.list li:nth-child(even) {\n  transform: translateX(10%);\n}";

window.addEventListener("load", (e) => {
  const liArr = document.querySelectorAll("li"),
    styleEl = document.createElement("style");
  // gridItemArr = document.querySelectorAll(".grid-item"),

  (styleEl.innerHTML = cssTemplateString),
    document.head.insertAdjacentElement("beforeend", styleEl),
    (observerLi = new IntersectionObserver((e) => {
      e.forEach((e) => {
        e.intersectionRatio > 0.1
          ? (e.target.style.animation = "0.4s liAppear forwards 0.2s")
          : null;
      });
    }, options)),
    // (observerGridItem = new IntersectionObserver((e) => {
    //   e.forEach((e) => {
    //     e.intersectionRatio > 0.3 &&
    //       (e.target.style.animation = "0.3s gridItemAppear forwards 0.3s");
    //   });
    // }, options)),
    liArr.forEach((e) => {
      observerLi.observe(e);
    });
  // gridItemArr.forEach((e) => {
  //   observerGridItem.observe(e);
  // });
});
