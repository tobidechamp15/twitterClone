function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
  const homePage = document.querySelector(".home");
  homePage.style.backgroundColor = "rgb(63, 61, 61)";
}
const menu = document.querySelector(".user-img");
menu.addEventListener("click", toggleSidebar);

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("active");
  const homePage = document.querySelector(".home");
  homePage.style.backgroundColor = "black";
});

const screens = document.querySelector(".screen");
screens.addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("active");
  const homePage = document.querySelector(".home");
  homePage.style.backgroundColor = "black";
});
const screns = document.querySelector(".scren");
screns.addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("active");
});

const bird = document.querySelector(".bird");
bird.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const posts = document.querySelector("body");
posts.addEventListener("keypress", (e) => {});

// jquery for beginner
$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(".sidebar").toggleClass("active");
  });
});

$("#tweet-cancel").on("click", () => {
  const $section = $("#panel");
  $section.slideToggle();
});
$("#flip").on("click", () => {
  const $section = $("#panel");
  $section.slideToggle({
    duration: 500,
    start: function () {
      console.log("Animating...");
    },
    done: function () {
      console.log("End Height: " + $section.height());
    },
  });
  // $sectionHeight = $("panel").height();

  console.log($section.height());

  if ($section.height() == 0) {
    console.log("height is 0");
    $(".home").css("background-color", "black");
  } else if ($section.height() == 515) {
    console.log("height is 515");
    $(".home").css("background-color", "rgb(63, 61, 61)");
    alert("height is 515");
  } else {
    return 1;
  }
});

const active = $(".tweet-type").css("bottom");

if (active == "-365.594px") {
  $(".tweet-page").css("background-color", "rgb(63, 61, 61)");
} else if (active == "0px") {
  $(".tweet-page").css("background-color", "black");
}
$(".drop-down").click(() => {
  $(".tweet-type").toggleClass("tweet-type-active");

  const active = $(".tweet-type").css("bottom");

  if (active == "-365.594px") {
    $(".tweet-page").css("background-color", "rgb(63, 61, 61)");
    $(".home").css("background-color", "rgb(63, 61, 61)");
  } else if (active == "0px") {
    $(".tweet-page").css("background-color", "black");
    $(".home").css("background-color", "black");
  } else {
  }
});
$(document).ready(function () {
  $('input[name="myRadio"]').change(function () {
    $("#result").text("Everyone");
    const selectedValue = $('input[name="myRadio"]:checked').val();
    $("#selectedValue").text(selectedValue);

    if (selectedValue == "Everyone") {
      // console.log("everyone")
    } else {
      // console.log("noto");
    }
  });
});

const dropDown = document.querySelector(".drop-down");
dropDown.addEventListener("click", changeImage);
function changeImage() {
  var imageElement = document.querySelector(".drop-down");

  if (imageElement.src.endsWith("drop-down-arrow.png")) {
    // Replace image1.jpg with image2.jpg
    imageElement.src = "assets/des-ass/up-arrow.png";
    imageElement.alt = "Image 2";
  } else {
    // Replace image2.jpg with image1.jpg
    imageElement.src = "assets/des-ass/drop-down-arrow.png";
    imageElement.alt = "Image 1";
  }
}

function startSpeechRecognition() {
  // Check if the browser supports the SpeechRecognition API
  if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();

    // Add event listener to handle the result of speech recognition
    recognition.onresult = function (event) {
      const result = event.results[0][0].transcript;
      console.log("You said:", result);
    };

    // Add event listener to handle errors
    recognition.onerror = function (event) {
      console.error("Speech recognition error occurred:", event.error);
    };

    // Start the speech recognition
    recognition.start();
  } else {
    console.error("SpeechRecognition API is not supported in this browser.");
  }
}

// Add a click event listener to the image
const microphoneImage = document.getElementById("microphoneImage");
microphoneImage.addEventListener("click", startSpeechRecognition);

const inputElement = document.getElementById("tweet-comment");
console.log(inputElement);
const tweetButton = document.getElementById("tweet-btn");

inputElement.addEventListener("input", () => {
  // Check if the input has a value
  if (inputElement.value.trim() !== "") {
    // Enable the button if the input has a value
    tweetButton.disabled = false;
  } else {
    // Disable the button if the input is empty
    tweetButton.disabled = true;
  }
});

// JavaScript code
const fileButton = document.getElementById("fileButton");
const fileSection = document.getElementById("fileSection");

// Handle the click event on the image
fileButton.addEventListener("click", function () {
  // Trigger the click event on the hidden file input
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*"; // Allow only image files

  fileInput.addEventListener("change", function () {
    // When a file is selected, read it and append it to the section
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const imageUrl = event.target.result;
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageElement.style.width = "100%";

        // Append the selected image to the section
        fileSection.appendChild(imageElement);
      };

      reader.readAsDataURL(selectedFile);
    }
  });

  fileInput.click(); // Trigger the file input dialog
});


tweetButton.addEventListener("click", () => {
  console.log(document.getElementById("fileSection").el);
})
// Download intel.zip

// Extract to desktop
