window.onload = function () {

  const triggerDiv = document.getElementById('invite-wrapper');

  // Replace 'popup.html' with the URL of the popup content you want to display
  clearInvites();

  const urlParams = new URLSearchParams(window.location.search);
  const nameParam = urlParams.get('name');
  const view = urlParams.get('view');
  const mode = urlParams.get('mode');


  if (mode && mode === "public") {
    console.log(mode)

    setDefaultInvites();
  } else {
    document.getElementById("modal-backdrop").style.display = "flex";
    document.getElementById("search-name-input").focus();

    if (nameParam) {

      const name = nameParam.replace("_", " ");
      document.getElementById("search-name-input").value = name;
      // Replace 'popup.html' with the URL of the popup content you want to display

      // Once the popup is opened, set "name" in local storage to avoid reopening it on subsequent visits
      if (nameParam) {
        searchName(name);
      }
    }
  }

  if(view && view === "qa"){
    smoothScroll("faq-section")
  }

  // document.getElementById('schloss-video').playbackRate = 0.6;
  document.getElementById('proposal-video').playbackRate = 1.1;

  const targetImage = document.getElementById("proposal-knee-image");
  const targetVideo = document.getElementById("proposal-video");

  let previousScroll = window.pageYOffset || document.documentElement.scrollTop;

  function adjustDivHeight() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const heightLimit = mediaQuery.matches ? 600 : 850;
    if (currentScroll <= heightLimit) {
      const scrollDifference = Math.floor(currentScroll - previousScroll);
      if (targetVideo.style.display === "none") {
        const newImageHeight = Math.min(heightLimit, Math.max(targetImage.clientHeight - scrollDifference, 100)); // Adjust the minimum height as needed
        targetImage.style.height = newImageHeight + "px";
        targetVideo.style.height = newImageHeight + "px";

      } else {
        const newVideoHeight = Math.min(heightLimit, Math.max(targetVideo.clientHeight - scrollDifference, 100)); // Adjust the minimum height as needed
        targetVideo.style.height = newVideoHeight + "px";
        targetImage.style.height = newVideoHeight + "px";

      }


      previousScroll = currentScroll;
    }

    // if (isInViewport(triggerDiv)) {
    //   // Trigger animations when the trigger div is in the viewport
    //   // Remove the event listener to prevent re-triggering
    //   // window.removeEventListener('scroll', handleScroll);
    // }

  }

  window.addEventListener("scroll", adjustDivHeight);


// Function to start staggered animations


// Call the function to start staggered animations
  startStaggeredAnimations();

}

function startStaggeredAnimations() {
  const inviteDivs = document.querySelectorAll('.visible-invite');

  inviteDivs.forEach((div, index) => {
    // Delay each animation by 0.5 seconds times the index
    const delay = index * 150; // 500 milliseconds = 0.5 seconds
    setTimeout(() => {
      // Apply animation class to each div
      div.classList.add('bounce');
    }, delay);
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


// G -> bachelor party, ceremony, reception
// B -> bachelorette party, ceremony, bridal shower, reception
// S -> shower, ceremony, reception
// C -> ceremony, reception
// R -> reception
var guests = {
  "steven": "G",
  "abby": "B",
  "coridilia": "S",
  "denise": "MOM",
  "david": "C",
  "charlie": "R",
};

var bachelorPartyGuests = ["drew schwartz", "scottie dent", "jenna schwartz", "michael dent", "scott resetar", "will kornreich", "adam kaz", "robbie ernst", "steven abraham", "saul rodríguez", "kyle nixon", "robert zajac", "divij nagpaul", "arturo woodward-montes"];
var bachelorettePartyGuests = ["victoria dent", "jenny dent", "willa stevenson", "anna kornreich", "jenny kornreich", "caroline kornreich", "taylor leen", "ava folloni", "jenna schwartz", "molly kaz", "brittany lau", "emily diener", "alex schroeder", "kelly cerniglia", "abby o'connor", "emma pire", "julia papanek", "peyton moore", "nora reimer", "riley maloney", "mia bertaud", "cordelia grob", "callie rukavania", "lucy lewis", "kari hafer", "chelsea bass", "jennifer chou"];
// var ceremonyGuests = ["drew schwartz", "victoria dent", "debbie dent", "thomas dent", "scottie dent", "jenny dent", "michael dent", "scott resetar", "willa stevenson", "karen kornreich", "dave kornreich", "will kornreich", "anna kornreich", "bill matthews", "jenny kornreich", "caroline kornreich", "gail chelius", "steve schwartz", "denise schwartz", "jenna schwartz", "molly kaz", "david kaz", "jill kaz", "anita kaz", "earl schwartz", "pauline schwartz", "debra schwartz", "emily diener", "alex schroeder", "kelly cerniglia", "abby o'connor", "jacob gibbons", "colin kenny", "robbie ernst", "cordelia grob", "steven abraham", "saul rodríguez", "liz sanchez", "kyle nixon", "molly konefes", "robert zajac", "divij nagpaul"];

var receptionGuests = ["jessi doyle", "june castro", "drew schwartz", "victoria dent", "debbie dent", "thomas dent", "scottie dent", "jenny dent", "michael dent", "scott resetar", "willa stevenson", "karen kornreich", "dave kornreich", "will kornreich", "anna kornreich", "bill matthews", "jenny kornreich", "caroline kornreich", "gail chelius", "mike chelius", "mike's gf", "jean leen", "kevin leen", "taylor leen", "cam leen", "cam's gf", "larry folloni", "michael folloni", "jimmie folloni", "bobby folloni", "ava folloni", "michael davis", "bernie kolasa", "steve schwartz", "denise schwartz", "jenna schwartz", "adam kaz", "molly kaz", "david kaz", "jill kaz", "anita kaz", "earl schwartz", "pauline schwartz", "debra schwartz", "susan ludwig", "alan ludwig", "amy denenberg", "greg denenberg", "rebecca lipson", "cheryl schwartz", "lisa mandl", "lezlie breezin", "todd breezin", "paul ludwig", "daphna ludwig", "danny schwartz", "jo schwartz", "susan lipson", "brittany lau", "emily diener", "alex schroeder", "kelly cerniglia", "abby o'connor", "jacob gibbons", "colin kenny", "robbie ernst", "emma pire", "frank bond", "julia papanek", "peyton moore", "dylan bragers", "nora reimer", "adam boik", "riley maloney", "mia bertaud", "evan patel", "nathan pitchaikani", "charlie huang", "victoria ludolph", "nicholas ludolph", "cordelia grob", "henry grob", "david grob", "elizabeth grob", "clarice shin", "kim schroeder", "kevin schroeder", "alec schroeder", "christian schroeder", "karen diener?", "mr. diener?", "emily's brother?", "mr. cerniglia?", "nicole cerniglia?", "mrs. cerniglia?", "jane pire", "tim pire", "abby pire", "renny pire", "callie rukavania", "ben (callie's fiancé)", "candace liu", "santiago maitret rodríguez", "ricardo bastin", "dr. danny lazar", "mara lazar", "ari lazar", "cami valencia", "emma lazar", "ryan (emma's boyfriend)", "michael pfeifer", "jennifer pfeifer", "jordan pfeifer", "michelle pfeifer", "david pfeifer", "david pfeifer guest?", "amy birtman", "scott birtman", "norma berg (oldest family friend)", "chris bagat?", "betty bagat?", "steven abraham", "saul rodríguez", "liz sanchez", "kyle nixon", "molly konefes", "robert zajac", "divij nagpaul", "arturo woodward-montes", "laurel chamberlin", "lucy lewis", "kari hafer", "chelsea bass", "chris bass", "jennifer chou", "logan cebrzynski", "arianna bastys", "charlie swarts", "erik beutil", "molly lennon", "isabel fudali"
,"sarahrose lesmann", "pau burgoa", "fia foti", "anne pizzini", "tammy luu", "teddy english"];
var bridalShowerDeniseGuests = ["victoria dent","jenna schwartz","thomas dent","debroah dent","denise schwartz","victoria ludolph","anita kaz","jill kaz","molly kaz","pauline schwartz","mara lazar","emma lazar","cami lazar","jennifer pfeifer","michelle pfeifer","amy birtman","susan ludwig","steve schwartz","susan lipson","jo schwartz","norma berg","debra schwartz"];
// var bridalShowerDeniseGuests = ["drew schwartz", "victoria dent", "debbie dent", "jenny dent", "willa stevenson", "karen kornreich", "anna kornreich", "jenny kornreich", "caroline kornreich", "gail chelius", "jean leen", "taylor leen", "ava folloni", "denise schwartz", "jenna schwartz", "molly kaz", "jill kaz", "anita kaz", "pauline schwartz", "debra schwartz", "susan ludwig", "brittany lau", "emily diener", "alex schroeder", "kelly cerniglia", "abby o'connor", "emma pire", "julia papanek", "peyton moore", "nora reimer", "riley maloney", "mia bertaud", "victoria ludolph", "cordelia grob", "kiim schroeder", "callie rukavania", "candace liu", "lucy lewis", "kari hafer", "chelsea bass", "jennifer chou"]
var bridalShowerKarenGuests = ["victoria dent","jenna schwartz","emily diener","kelly cerniglia","alexandra schroeder","abby o'connor","caroline kornreich","jenny kornreich","anna kornreich","chelsea bass","willa stevenson","jennifer chou","kari hafer","lucy lewis","brittany lau","anne pizzini","nora reimer","candace liu","callie rukavania","peyton moore","julia papanek","jenny resetar","karen kornreich","gail chelius","ava folloni","jean leen","taylor leen","kim schroeder","thomas dent","debroah dent","denise schwartz","william kornreich", "scott dent", "michael dent"];
var guestImages = {
  "abby o'connor": "abby.jpeg",
  "arturo woodward-montes": "arturo.jpeg",
  "scottie dent": "scott.jpeg",
  "kyle nixon": "kyle.jpeg",
  "denise schwartz": "denise.jpeg"
};
var guestMessages = {
  "abby o'connor": ""
}


document.getElementById("search-name-input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    var name = document.getElementById("search-name-input").value;

    searchName(name);
  }
})

document.getElementById("search-name-button").onclick = function () {
  // get text from input box
  var name = document.getElementById("search-name-input").value;
  searchName(name);
}




//new function
function searchName(name) {
  if (name.length > 1) {

    var results = findGuest(name.toLowerCase());
    if (results.length == 1) {
      var name = results[0];
      var lowerCaseName = name.split(" ")[0];

      if (results[0] == "abby o'connor") {
        name = "abby o'Connor";
      }else if (results[0] == "erik beutil") {
        name = "erik beütil";
      }

      clearInvites();


      document.getElementById("welcome-name").innerHTML = "Welcome " + name + "!";
      document.getElementById("change-name").innerHTML = "Not " + lowerCaseName + "? Click here";

      setImage(results[0].toLowerCase());

      setInvites(results[0]);

      const currentUrl = window.location.href;
      const url = new URL(currentUrl);

      const params = new URLSearchParams(url.search);
      params.set("name", results[0].replace(" ", "_"));
      params.delete('view');
      params.delete('mode');
      console.log(url)
      // window.history.replaceState({}, "", url.toString());
      url.search = params.toString();
      window.history.replaceState({}, '', url);

      document.getElementById("modal-backdrop").style.display = "none";

      // var guestLink = rsvpIds[name];
      // console.log(name, guestLink);
      // document.getElementById("rsvp-link-1").href = "https://withjoy.com/victoria-and-drew-2024/rsvp?ecard=true&personId=" + guestLink;
      // document.getElementById("rsvp-link-2").href = "https://withjoy.com/victoria-and-drew-2024/rsvp?ecard=true&personId=" + guestLink;


    } else if (results.length > 1) {
      var resultsHTML = "<hr/>";
      results.map(match => {
        resultsHTML += `<p class="name-result">${match}</p><hr class="results-split-line"/>`
      })
      document.getElementById("name-search-results").innerHTML = resultsHTML;

      var clickableElements = document.querySelectorAll(".name-result");

      clickableElements.forEach(function (element) {
        element.addEventListener("click", function () {
          var name = element.innerHTML;
          var lowerCaseName = name.split(" ")[0];
          if (name === "abby o'connor") {
            name = "abby o'Connor";
          }
          // var name = element.innerHTML.charAt(0).toUpperCase() + element.innerHTML.slice(1);
          document.getElementById("welcome-name").innerHTML = "Welcome " + name + "!";
          document.getElementById("change-name").innerHTML = "Not " + lowerCaseName + "? Click here";

          setImage(element.innerHTML.toLowerCase());

          setInvites(element.innerHTML);

          const currentUrl = window.location.href;
          const url = new URL(currentUrl);
          url.searchParams.set("name", element.innerHTML.replace(" ", "_"));
          window.history.replaceState({}, "", url.toString());

          document.getElementById("modal-backdrop").style.display = "none";
        });
      });


    } else {
      document.getElementById("not-found").style.display = "block";

    }
    return;
  }
}

function setImage(name) {
  var imageName = name.toLowerCase().replace(" ", "_").replace("'", "");
  var imageUrl = "img/friends/" + imageName + ".jpeg";
  checkImageExists(
    imageUrl,
    function () {
      document.getElementById("friend-image-wrapper").style.display = "block";
      document.getElementById("friend-image").src = imageUrl;

    },
    function () {
      document.getElementById("friend-image-wrapper").style.display = "none";

    }
  );

  // if (guestImages[imageName]) {
  //
  // } else {
  // }
}

function checkImageExists(imageUrl, successCallback, errorCallback) {
  const img = new Image();
  img.onload = function () {
    successCallback();
  };
  img.onerror = function () {
    errorCallback();
  };
  img.src = imageUrl;
}


function setInvites(name) {
  if (bachelorPartyGuests.includes(name.toLowerCase())) {
    document.getElementById("bachelor-party-invite").style.display = "block";
    document.getElementById("bachelor-party-invite").classList.add("visible-invite");
  }

  if (bachelorettePartyGuests.includes(name.toLowerCase())) {
    document.getElementById("bachelorette-party-invite").style.display = "block";
    document.getElementById("bachelorette-party-invite").classList.add("visible-invite");
  }

  if (bridalShowerKarenGuests.includes(name.toLowerCase())) {
    document.getElementById("bridal-shower-karen-invite").style.display = "block";
    document.getElementById("bridal-shower-karen-invite").classList.add("visible-invite");
  }

  if (bridalShowerDeniseGuests.includes(name.toLowerCase())) {
    document.getElementById("bridal-shower-denise-invite").style.display = "block";
    document.getElementById("bridal-shower-denise-invite").classList.add("visible-invite");
  }

  if (receptionGuests.includes(name.toLowerCase())) {
    document.getElementById("ceremony-invite").style.display = "block";
    document.getElementById("ceremony-invite").classList.add("visible-invite");
  }

  if (receptionGuests.includes(name.toLowerCase())) {
    document.getElementById("reception-invite").style.display = "block";
    document.getElementById("reception-invite").classList.add("visible-invite");
  }

  startStaggeredAnimations();
}

function setDefaultInvites() {

  document.getElementById("ceremony-invite").style.display = "block";
  document.getElementById("ceremony-invite").classList.add("visible-invite");

  document.getElementById("reception-invite").style.display = "block";
  document.getElementById("reception-invite").classList.add("visible-invite");

  startStaggeredAnimations();
}

function findGuest(name) {
  if (receptionGuests.includes(name)) {
    return [name];
  }

  var splitQueryName = name.trim().split(" ");
  if (splitQueryName.length == 2) {
    return fullNameSearch(splitQueryName[0], splitQueryName[1]);
  } else if (splitQueryName.length == 1) {
    return singleNameSearch(splitQueryName[0]);
  }

  return [];
}


function fullNameSearch(firstName, lastName) {
  var matches = [];
  receptionGuests.map(guestName => {
      var splitName = guestName.toLowerCase().split(" ");
      if (isSimilar(splitName[0], firstName) || isSimilar(splitName[1], lastName)) {
        matches.push(guestName);
      }
    }
  )
  return matches;
}

function singleNameSearch(name) {
  var matches = [];
  receptionGuests.map(guestName => {

      var splitName = guestName.toLowerCase().split(" ");
      if (isSimilar(splitName[0], name) || isSimilar(splitName[1], name)) {
        matches.push(guestName);
      }
    }
  )
  return matches;
}

function isSimilar(a, b) {
  if (a.length < 2 || b.length < 2) {
    return false;
  }
  return a.includes(b) || b.includes(a);
}

document.getElementById("change-name").onclick = function () {
  document.getElementById("modal-backdrop").style.display = "flex";
  document.getElementById("modal").style.display = "block";
  document.getElementById("monday-itinerary-modal").style.display = "none";
  document.getElementById("search-name-input").focus();
  document.getElementById("search-name-input").select();

  // clearInvites();
}


function clearInvites() {
  document.getElementById("not-found").style.display = "none";
  document.getElementById("friend-image-wrapper").style.display = "none";

  document.getElementById("bachelor-party-invite").style.display = "none";
  document.getElementById("bachelorette-party-invite").style.display = "none";
  document.getElementById("bridal-shower-karen-invite").style.display = "none";
  document.getElementById("bridal-shower-denise-invite").style.display = "none";
  document.getElementById("ceremony-invite").style.display = "none";
  document.getElementById("reception-invite").style.display = "none";

  document.getElementById("bachelor-party-invite").classList.remove("visible-invite");
  document.getElementById("bachelorette-party-invite").classList.remove("visible-invite");
  document.getElementById("bridal-shower-karen-invite").classList.remove("visible-invite");
  document.getElementById("bridal-shower-denise-invite").classList.remove("visible-invite");
  document.getElementById("reception-invite").classList.remove("visible-invite");
  document.getElementById("ceremony-invite").classList.remove("visible-invite");
}


document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("proposal-video");
  const image = document.getElementById("proposal-knee-image");
  let fadeIn = false;

  video.addEventListener("ended", function () {
    image.style.opacity = 0;
    image.style.display = "block";
    fadeIn = true;

    let opacity = 0;
    var videoTransitionInterval = setInterval(function () {
      opacity += 0.03;
      if (opacity >= 0.98) {
        image.style.opacity = 1;
        clearInterval(videoTransitionInterval);
        video.style.display = "none";
        fadeIn = false;
      } else {
        image.style.opacity = opacity;
      }
    }, 10);

  });

  document.getElementById("behind-video-spacer").addEventListener("click", function (event) {
    if (!fadeIn) {
      video.play();
      video.style.display = "block";
      let opacity = 1;
      var videoTransitionInterval = setInterval(function () {
        opacity -= 0.03;
        if (opacity <= 0.01) {
          image.style.display = "none";
          image.style.opacity = 1;
          clearInterval(videoTransitionInterval);
        } else {
          image.style.opacity = opacity;
        }
      }, 10);
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const images = carousel.querySelectorAll("img");


  let currentIndex = 0;

  function showSlide(index) {
    carousel.style.transform = `translateX(-${index * images[0].clientWidth}px)`;
  }

  function nextSlide(slide) {
    if (slide >= carousel.children.length - 2) {
      currentIndex = 0;
    } else {
      currentIndex = (currentIndex + 1) % (carousel.children.length);

    }
    showSlide(currentIndex);
  }

  function autoNextSlide() {
    if (currentIndex >= carousel.children.length - 3) {
      currentIndex = 0;
    } else {
      currentIndex = (currentIndex + 1) % (carousel.children.length);
    }
    showSlide(currentIndex);
  }

  function prevSlide(slide) {
    if (slide <= 0) {
      currentIndex = 0;
    } else {
      currentIndex--;
      showSlide(currentIndex);
    }
  }

  var interval = setInterval(autoNextSlide, 3500); // Automatically change slide every 3 seconds

  let startX = 0;
  let endX = 0;

  for (var i = 0; i < images.length; i++) {
    let slideNum = i;
    images[i].addEventListener('touchend', () => {

      endX = event.changedTouches[0].clientX;
      if (Math.abs(endX - startX) < 20) {
        return;
      }
      if (endX > startX) {
        prevSlide(slideNum);
      } else {
        nextSlide(slideNum);
      }
      clearInterval(interval);
    });

    images[i].addEventListener('touchstart', () => {
      startX = event.touches[0].clientX;
    });

    images[i].addEventListener('click', () => {
      nextSlide(slideNum);
      clearInterval(interval);
    });
  }
  ;
});

document.getElementById("ceremony-invite").onclick = function () {
  smoothScroll("ceremony-section");
}

document.getElementById("bridal-shower-karen-invite").onclick = function () {
  smoothScroll("bridal-section");
}

document.getElementById("explore-link").onclick = function () {
  smoothScroll("text-over-map");
  document.getElementById("mobile-nav-links-wrapper").style.display = "none";
}

document.getElementById("reception-invite").onclick = function () {
  smoothScroll("ceremony-section");
  document.getElementById("mobile-nav-links-wrapper").style.display = "none";
}

document.getElementById("mobile-reception-link").onclick = function () {
  smoothScroll("ceremony-section");
  document.getElementById("mobile-nav-links-wrapper").style.display = "none";
}


document.getElementById("mobile-faq-link").onclick = function () {
  smoothScroll("faq-section");
  document.getElementById("mobile-nav-links-wrapper").style.display = "none";
}



document.getElementById("monday-itinerary-link").onclick = function () {
  document.getElementById("modal-backdrop").style.display = "flex";
  document.getElementById("monday-itinerary-modal").style.display = "block";
  document.getElementById("modal").style.display = "none";
}



document.getElementById("mobile-wedding-party-link").onclick = function () {
  smoothScroll("wedding-party-section");
  document.getElementById("mobile-nav-links-wrapper").style.display = "none";
}


document.getElementById("mobile-registry-link").onclick = function () {
  smoothScroll("registry-section");
  document.getElementById("mobile-nav-links-wrapper").style.display = "none";
}

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


function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
    return curtop;
  }
}


function smoothScroll(sectionId) {
  isNormalScrolling = false;
  var start = document.documentElement.scrollTop;
  var currentPos = start;
  var end = findPos(document.getElementById(sectionId)) + 1;
  if (end > 60) {
    end -= 60;
  }

  var velocity = 1;
  var acc = 5;
  var j = 10;

  var direction = 1;
  if (start > end) {
    direction = -1;
  }

  var lastY = start;
  var t = 0;
  var maxFrames = 80;

  var isSlowing = false;
  var animation = setInterval(function () {
    maxFrames--;
    window.scroll(0, currentPos);
    t += 0.05;

    if (isSlowing) {
      velocity -= acc;
      currentPos += velocity;
    } else {
      currentPos += direction * (velocity * t + acc * t * t / 2 + j * t * t * t / 6);
    }
    lastY = currentPos;

    if (direction * currentPos >= direction * end || maxFrames <= 0) {
      window.scroll(0, end);
      isNormalScrolling = true;
      clearInterval(animation);
    }
  }, 10);
}

let barryCode = "";

document.getElementById("b-button").onclick = function () {
  barryCode = "b";
}

document.getElementById("a-button").onclick = function () {
  if (barryCode === "b") {
    barryCode = "ba";
  } else {
    barryCode = "";
  }

}

document.getElementById("r-button").onclick = function () {
  if (barryCode === "ba") {
    barryCode = "bar";
  } else if (barryCode === "bar") {
    barryCode = "barr";
  } else {
    barryCode = "";
  }
}


let mouseDownTarget = null;

document.getElementById('modal-backdrop').addEventListener('mousedown', function(event) {
  mouseDownTarget = event.target;
});

document.getElementById("y-button").onclick = function () {
  if (barryCode === "barr") {
    barryCode = "barry";
    document.getElementById("modal-backdrop").style.display = "flex";
    document.getElementById("modal").style.display = "none";
    document.getElementById("barry-modal").style.display = "flex";
  } else {
    barryCode = "";
  }
}

document.getElementById("modal-backdrop").onclick = function () {
  if (document.getElementById("barry-modal").style.display === "flex") {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-backdrop").style.display = "none";
    document.getElementById("barry-modal").style.display = "none";
  } else{
    if (mouseDownTarget === event.target && event.target === this) {
      this.style.display = 'none';
    }

  }

}
