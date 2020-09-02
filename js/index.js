(() => {
  let yOffset = 0;
  let prevScrollHeight = 0;
  let currentScene = 0;
  let enterNewScene = false;
  const left_split_0 = document.querySelector(".beer ");
  const left_split_1 = document.querySelector(".introduce ");
  const right_description = document.querySelector(".split-right");
  const left_container = document.querySelector(".split-left");
  function setLayout() {
    const left_split_0_height = left_split_0.offsetHeight;
    const left_split_1_heihgt = left_split_1.offsetHeight;
    const right_description_height = right_description.offsetHeight;
    const left_container_height = left_container.offsetHeight;
    yOffset = window.pageYOffset;
    if (yOffset <= left_split_0_height - 10) {
      currentScene = 0;
    } else if (yOffset > left_split_0_height) {
      currentScene = 1;
    } else if (yOffset > left_container.offsetHeight * 1.1) {
      currentScene = 2;
    }
  }
  function scrollLoop() {
    switch (currentScene) {
      case 0:
        left_split_1.classList.remove("fixed");
        left_split_1.classList.add("sticky");
        break;
      case 1:
        left_split_1.classList.add("fixed");
        left_split_1.classList.remove("sticky");
        break;
      case 2:
        left_split_1.classList.remove("fixed");
        left_split_1.classList.add("sticky");
        break;
    }
  }
  window.addEventListener("scroll", () => {
    console.log(currentScene);
    scrollLoop();
  });
  window.addEventListener("resize", setLayout);
  setLayout();

  window.addEventListener("load", () => {
    scrollTo(0, 0);
    setLayout();
  });
})();
