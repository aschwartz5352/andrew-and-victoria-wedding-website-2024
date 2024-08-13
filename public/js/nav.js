

//
// document.getElementById("mobile-reception-link").onclick = function () {
//   smoothScroll("ceremony-section");
//   document.getElementById("mobile-nav-links-wrapper").style.display = "none";
// }
//
//
// document.getElementById("mobile-faq-link").onclick = function () {
//   smoothScroll("faq-section");
//   document.getElementById("mobile-nav-links-wrapper").style.display = "none";
// }
//
//
//
// document.getElementById("mobile-registry-link").onclick = function () {
//   smoothScroll("registry-section");
//   document.getElementById("mobile-nav-links-wrapper").style.display = "none";
// }

document.getElementById("mobile-nav-button").onclick = function () {
  let mobileNavButton = document.getElementById("mobile-nav-links-wrapper");
  if (mobileNavButton.style.display === 'block') {
    // document.getElementById("mobile-reception-link").classList.add('bounce');
    // document.getElementById("mobile-faq-link").classList.add('bounce');
    // document.getElementById("mobile-wedding-party-link").classList.add('bounce');
    // document.getElementById("mobile-registry-link").classList.add('bounce');

    mobileNavButton.style.display = "none";
  } else {
    mobileNavButton.style.display = "block";
  }

}

