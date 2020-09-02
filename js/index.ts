(() => {
  let yOffset = 0;
  let prevScrollHeight = 0;
  let currentScene = 0;
  let enterNewScene = false;
  const left_split_0 = document.querySelector(".beer ") as HTMLElement;
  const left_split_1 = document.querySelector(".introduce ") as HTMLElement;
  const right_description = document.querySelector(
    ".split-right"
  ) as HTMLElement;

  function setLayout() {
    const left_split_0_height = left_split_0.offsetHeight;
    console.log(left_split_0_height);
  }
})();
