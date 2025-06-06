let btn = document.getElementById("myBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
