var lastScrollTop = 0;
  site_header = document.getElementById("site_header");
window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    site_header.style.top="-80px";
  } else{
    site_header.style.top = "0";
  }
  lastScrollTop = scrollTop;
})
