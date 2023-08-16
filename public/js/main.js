window.onload = function () {
  // Replace 'popup.html' with the URL of the popup content you want to display
  clearInvites();

  const urlParams = new URLSearchParams(window.location.search);
  const nameParam = urlParams.get('name');

  document.getElementById("modal-backdrop").style.display = "flex";
  document.getElementById("search-name-input").focus();

  if (nameParam) {
    var name = nameParam.replace("_", " ");
    document.getElementById("search-name-input").value = name;
    // Replace 'popup.html' with the URL of the popup content you want to display

    // Once the popup is opened, set "name" in local storage to avoid reopening it on subsequent visits
    if (nameParam) {
      searchName(name);
    }
  }

  document.getElementById('schloss-video').playbackRate = 0.6;
  document.getElementById('proposal-video').playbackRate = 1.1;

  const targetImage = document.getElementById("proposal-knee-image");
  const targetVideo = document.getElementById("proposal-video");

  let previousScroll = window.pageYOffset || document.documentElement.scrollTop;

  function adjustDivHeight() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const heightLimit = mediaQuery.matches ? 600 : 850;
    if(currentScroll <= heightLimit){
      const scrollDifference = currentScroll - previousScroll;
      if(targetVideo.style.display === "none"){
        const newImageHeight = Math.min(heightLimit, Math.max(targetImage.clientHeight - scrollDifference, 100)); // Adjust the minimum height as needed
        targetImage.style.height = newImageHeight + "px";

      }else{
        const newVideoHeight = Math.min(heightLimit, Math.max(targetVideo.clientHeight - scrollDifference, 100)); // Adjust the minimum height as needed
        targetVideo.style.height = newVideoHeight + "px";

      }


      previousScroll = currentScroll;
    }

  }

  window.addEventListener("scroll", adjustDivHeight);
};

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

var bachelorPartyGuests = ["drew schwartz", "scottie dent", "michael dent", "scott resetar", "will kornreich", "adam kaz", "robbie ernst", "steven abraham", "saul rodríguez", "kyle nixon", "robert zajac", "divij nagpaul", "arturo woodward-montes"];
var bachelorettePartyGuests = ["victoria dent", "jenny dent", "willa stevenson", "anna kornreich", "jenny kornreich", "caroline kornreich", "taylor leen", "ava folloni", "jenna schwartz", "molly kaz", "brittany lau", "emily diener", "alex schroeder", "kelly cerniglia", "abby o'connor", "emma pire", "julia papanek", "peyton moore", "nora reimer", "riley maloney", "mia bertaud", "cordelia grob", "callie rukavania", "lucy", "kari hafer", "chelsea bass", "jennifer chou"];
var ceremonyGuests = ["drew schwartz", "victoria dent", "debbie dent", "thomas dent", "scottie dent", "jenny dent", "michael dent", "scott resetar", "willa stevenson", "karen kornreich", "dave kornreich", "will kornreich", "anna kornreich", "bill annybf", "jenny kornreich", "caroline kornreich", "gail chelius", "steven schwartz", "denise schwartz", "jenna schwartz", "molly kaz", "david kaz", "jill kaz", "anita kaz", "earl schwartz", "pauline schwartz", "debra schwartz", "emily diener", "alex schroeder", "kelly cerniglia", "abby o'connor", "jacob gibbons", "colin kenny", "robbie ernst", "cordelia grob", "steven abraham", "saul rodríguez", "liz sanchez", "kyle nixon", "molly konefes", "robert zajac", "divij nagpaul"];

var receptionGuests = ["drew schwartz", "victoria dent", "debbie dent", "thomas dent", "scottie dent", "jenny dent", "michael dent", "scott resetar", "willa stevenson", "karen kornreich", "dave kornreich", "will kornreich", "anna kornreich", "bill annybf", "jenny kornreich", "caroline kornreich", "gail chelius", "mike chelius", "mike's gf", "jean leen", "kevin leen", "taylor leen", "cam leen", "cam's gf", "larry folloni", "michael folloni", "jimmie folloni", "bobby folloni", "ava folloni", "michael davis", "bernie kolasa", "steven schwartz", "denise schwartz", "jenna schwartz", "adam kaz", "molly kaz", "david kaz", "jill kaz", "anita kaz", "earl schwartz", "pauline schwartz", "debra schwartz", "susan ludwig", "alan ludwig", "amy denenberg", "greg denenberg", "rebecca lipson", "cheryl schwartz", "lisa mandl", "lezlie breezin", "todd breezin", "paul ludwig", "daphna ludwig", "danny schwartz", "jo schwartz", "susan lipson", "brittany lau", "emily diener", "alex schroeder", "kelly cerniglia", "abby o'connor", "jacob gibbons", "colin kenny", "robbie ernst", "emma pire", "frank bond", "julia papanek", "peyton moore", "dylan bragers", "nora reimer", "adam boik", "riley maloney", "mia bertaud", "evan patel", "nathan pitchaikani", "charlie huang", "victoria ludolph", "nicholas ludolph", "cordelia grob", "henry grob", "david grob", "elizabeth grob", "clarice shin", "kim schroeder", "kevin schroeder", "alec schroeder", "christian schroeder", "karen diener?", "mr. diener?", "emily's brother?", "mr. cerniglia?", "nicole cerniglia?", "mrs. cerniglia?", "jane pire", "tim pire", "abby pire", "renny pire", "callie rukavania", "ben (callie's fiancé)", "candace liu", "santiago maitret rodríguez", "ricardo bastin", "dr. danny lazar", "mara lazar", "ari lazar", "cami lazar", "emma lazar", "ryan (emma's boyfriend)", "michael pfeifer", "jennifer pfeifer", "jordan pfeifer", "michelle pfeifer", "david pfeifer", "david pfeifer guest?", "amy birtman", "scott birtman", "norma berg (oldest family friend)", "chris bagat?", "betty bagat?", "steven abraham", "saul rodríguez", "liz sanchez", "kyle nixon", "molly konefes", "robert zajac", "divij nagpaul", "arturo woodward-montes", "laurel chamberlin", "lucy lastname", "kari hafer", "chelsea bass", "chris bass", "jennifer chou", "logan cebrzynski", "arianna bastys", "charlie swarts"];

var bridalShowerGuests = ["drew schwartz", "victoria dent", "debbie dent", "jenny dent", "willa stevenson", "karen kornreich", "anna kornreich", "jenny kornreich", "caroline kornreich", "gail chelius", "jean leen", "taylor leen", "ava folloni", "denise schwartz", "jenna schwartz", "molly kaz", "jill kaz", "anita kaz", "pauline schwartz", "debra schwartz", "susan ludwig", "brittany lau", "emily diener", "alex schroeder", "kelly cerniglia", "abby o'connor", "emma pire", "julia papanek", "peyton moore", "nora reimer", "riley maloney", "mia bertaud", "victoria ludolph", "cordelia grob", "kiim schroeder", "callie rukavania", "candace liu", "lucy", "kari hafer", "chelsea bass", "jennifer chou"]
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
      var lowerCaseName = results[0].split(" ")[0];
      document.getElementById("welcome-name").innerHTML = "Welcome " + lowerCaseName + "!";
      document.getElementById("change-name").innerHTML = "Not " + lowerCaseName + "? Click here";

      setImage(results[0].toLowerCase());

      setInvites(results[0]);

      const currentUrl = window.location.href;
      const url = new URL(currentUrl);
      url.searchParams.set("name", results[0].replace(" ", "_"));
      window.history.replaceState({}, "", url.toString());

      document.getElementById("modal-backdrop").style.display = "none";

    } else if (results.length > 1) {
      var resultsHTML = "<hr/>";
      results.map(match => {
        resultsHTML += `<p class="name-result">${match}</p><hr class="results-split-line"/>`
      })
      document.getElementById("name-search-results").innerHTML = resultsHTML;

      var clickableElements = document.querySelectorAll(".name-result");

      clickableElements.forEach(function (element) {
        element.addEventListener("click", function () {
          var lowerCaseName = element.innerHTML.split(" ")[0];

          // var name = element.innerHTML.charAt(0).toUpperCase() + element.innerHTML.slice(1);
          document.getElementById("welcome-name").innerHTML = "Welcome " + lowerCaseName + "!";
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
    //   if (guests[name.toLowerCase()]) {
    //     setImage(name.toLowerCase());
    //
    //     name = name.charAt(0).toUpperCase() + name.slice(1);
    //     document.getElementById("welcome-name").innerHTML = "Welcome " + name + "!";
    //     document.getElementById("change-name").innerHTML = "Not " + name + "? Click here";
    //     setInvites();
    //     //
    //     // switch (guests[name.toLowerCase()]) {
    //     //   case "G":
    //     //     document.getElementById("bachelorette-party-invite").style.display = "none";
    //     //     document.getElementById("bridal-shower-invite").style.display = "none";
    //     //     break;
    //     //   case "B":
    //     //     document.getElementById("bachelor-party-invite").style.display = "none";
    //     //     break;
    //     //
    //     //   case "C":
    //     //     document.getElementById("bachelor-party-invite").style.display = "none";
    //     //     document.getElementById("bachelorette-party-invite").style.display = "none";
    //     //     document.getElementById("bridal-shower-invite").style.display = "none";
    //     //
    //     //     break;
    //     //   case "S":
    //     //     document.getElementById("bachelor-party-invite").style.display = "none";
    //     //     document.getElementById("bachelorette-party-invite").style.display = "none";
    //     //     document.getElementById("ceremony-invite").style.display = "none";
    //     //     break;
    //     //   case "R":
    //     //     document.getElementById("bachelor-party-invite").style.display = "none";
    //     //     document.getElementById("bachelorette-party-invite").style.display = "none";
    //     //     document.getElementById("bridal-shower-invite").style.display = "none";
    //     //     document.getElementById("ceremony-invite").style.display = "none";
    //     //     break;
    //     // }
    //
    //     document.getElementById("modal-backdrop").style.display = "none";
    //   } else {
    //     document.getElementById("not-found").style.display = "block";
    //     document.getElementById("bachelor-party-invite").style.display = "none";
    //     document.getElementById("bachelorette-party-invite").style.display = "none";
    //     document.getElementById("bridal-shower-invite").style.display = "none";
    //     document.getElementById("ceremony-invite").style.display = "none";
    //     document.getElementById("reception-invite").style.display = "none";
    //
    //   }
    // }
  }
}

function setImage(name) {
  var imageName = name.toLowerCase().replace(" ", "_").replace("'", "");
  var imageUrl = "img/friends/" + imageName + ".jpeg";
  checkImageExists(
    imageUrl,
    function () {
      document.getElementById("friend-image").style.display = "block";
      document.getElementById("friend-image").src = imageUrl;

    },
    function () {
      document.getElementById("friend-image").style.display = "none";

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
  }

  if (bachelorettePartyGuests.includes(name.toLowerCase())) {
    document.getElementById("bachelorette-party-invite").style.display = "block";
  }

  if (bridalShowerGuests.includes(name.toLowerCase())) {
    document.getElementById("bridal-shower-invite").style.display = "block";
  }

  if (ceremonyGuests.includes(name.toLowerCase())) {
    document.getElementById("ceremony-invite").style.display = "block";
  }

  if (receptionGuests.includes(name.toLowerCase())) {
    document.getElementById("reception-invite").style.display = "block";
  }
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
  document.getElementById("search-name-input").focus();
  document.getElementById("search-name-input").select();

  clearInvites();
}


function clearInvites() {
  document.getElementById("not-found").style.display = "none";
  document.getElementById("friend-image").style.display = "none";

  document.getElementById("bachelor-party-invite").style.display = "none";
  document.getElementById("bachelorette-party-invite").style.display = "none";
  document.getElementById("bridal-shower-invite").style.display = "none";
  document.getElementById("ceremony-invite").style.display = "none";
  document.getElementById("reception-invite").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("proposal-video");
  const image = document.getElementById("proposal-knee-image");

  video.addEventListener("ended", function () {
    video.style.display = "none";
    image.style.display = "block";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const images = carousel.querySelectorAll("img");
  let currentIndex = 0;

  function showSlide(index) {
    // carousel.style.transform = `translateX(-${index * 100}%)`;
    carousel.style.transform = `translateX(-${index * images[0].clientWidth}px)`;

  }

  function nextSlide() {
    if (currentIndex + 1 >= carousel.children.length - 2) {
      currentIndex = 0;
    } else {
      currentIndex = (currentIndex + 1) % (carousel.children.length);

    }
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 3500); // Automatically change slide every 3 seconds
});

document.getElementById("ceremony-invite").onclick = function(){
  smoothScroll("ceremony-section");
}

document.getElementById("bridal-shower-invite").onclick = function(){
  smoothScroll("bridal-section");
}

document.getElementById("reception-invite").onclick = function(){
  smoothScroll("ceremony-section");
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


function smoothScroll(sectionId){
  isNormalScrolling = false;
  var start = document.documentElement.scrollTop;
  var currentPos = start;
  var end = findPos(document.getElementById(sectionId))+1;
  if(end > 60){
    end -= 60;
  }

  var velocity = 1;
  var acc = 5;
  var j = 10;

  var direction = 1;
  if(start > end){
    direction = -1;
  }

  var lastY = start;
  var t = 0;
  var maxFrames = 80;

  var isSlowing = false;
  var animation = setInterval(function(){
    maxFrames--;
    window.scroll(0,currentPos);
    t += 0.05;

    if(isSlowing){
      velocity -= acc;
      currentPos += velocity;
    }else{
      currentPos += direction * (velocity*t + acc*t*t/2 + j*t*t*t/6);
    }
    lastY = currentPos;

    if(direction*currentPos >= direction*end || maxFrames <= 0){
      window.scroll(0,end);
      isNormalScrolling = true;
      clearInterval(animation);
    }
  }, 10);
}
