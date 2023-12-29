window.addEventListener("mousemove", function (details) {
  var rect = this.document.querySelector("#rect");

  var xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
    details.clientX
  );

  gsap.to("#rect", {
    left: xval + "px",
    ease: Power3,
  });

  var yval = gsap.utils.mapRange(
    0,
    window.innerHeight,
    100 + rect.getBoundingClientRect().height / 2,
    window.innerHeight - (100 + rect.getBoundingClientRect().height / 2),
    details.clientY
  );

  gsap.to("#rect", {
    left: xval + "px",
    top: yval + "px",
    ease: Power3,
  });
});
