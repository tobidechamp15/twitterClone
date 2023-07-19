function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
  const homePage = document.querySelector(".home");
  homePage.style.backgroundColor = "rgb(63, 61, 61)";
  // var overlay = document.getElementById("overlay");
  // overlay.style.display = "block";
}
const menu = document.querySelector(".user-img");
menu.addEventListener("click", toggleSidebar);

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("active");
  const homePage = document.querySelector(".home");
  homePage.style.backgroundColor = "black";
  // var overlay = document.getElementById("overlay");
  // overlay.style.display = "none";
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

const bird = document.querySelector(".bird")
bird.addEventListener("click",  () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


const posts = document.querySelector("body");
posts.addEventListener("keypress", (e) => {
  // console.log(e.key);
});


// jquery for beginner
$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(".sidebar").toggleClass("active");
  });
});



$("#tweet-cancel").on("click", () => {
  const $section = $("#panel");
  $section.slideToggle();
})
$("#flip").on("click", () => {
  const $section = $("#panel");
  $section.slideToggle({
    duration: 500,
    start: function() {
      // Log height when animation starts
      console.log('Animating...'); 
    },
    done: function() {
      // Log height after animation
      console.log('End Height: ' + $section.height());
    }
  });
  // $sectionHeight = $("panel").height();

  console.log($section.height());

  if ($section.height()==0) {
    console.log('height is 0');
    $(".home").css("background-color", "black");
  } else if ($section.height() == 515) {
    console.log('height is 515');
    $(".home").css("background-color", "rgb(63, 61, 61)");
    alert('height is 515')
  }
  else {
    return 1;
  }
  
});







const active = $(".tweet-type").css("bottom");
// console.log(active);
if (active == "-365.594px") {
  $(".tweet-page").css("background-color", "rgb(63, 61, 61)");
} else if (active == "0px") {
  $(".tweet-page").css("background-color", "black");
}
$(".drop-down").click(() => {
  $(".tweet-type").toggleClass("tweet-type-active");
  // const homePage = document.querySelector(".home");
  // homePage.style.backgroundColor = "rgb(63, 61, 61)";
  // $(".tweet-page").css("background-color", "rgb(63, 61, 61)");
  const active = $(".tweet-type").css("bottom");
  // console.log(active);
  if (active == "-365.594px") {
    $(".tweet-page").css("background-color", "rgb(63, 61, 61)");
    $(".home").css("background-color", "rgb(63, 61, 61)");
  } else if (active == "0px") {
    $(".tweet-page").css("background-color", "black");
    $(".home").css("background-color", "black");
  } else {
    // console.log("amazing");
  }
});
// $(document).ready(function () {
//   $('input[name="myRadio"] ').change(function () {
//     $("#result").text("Everyone");
//     const selectedValue = $('input[name="myRadio"]:checked').val();
//     $("#selectedValue").text(selectedValue);
//   });
//   if (selectedValue == "Everyone") {
//     // console.log("everyone")
//   } else {
//     // console.log("noto");
//   }
// });
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


//function to display none .select-drop when an myRadio is seleted
// $(document).ready(function () {
//   $("#selectedValue").change(function () {
//     // console.log(kok);
//     $(".select-drop").hide();
//   });
// });

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

       // Do something with the captured speech (e.g., send it to a server for processing, etc.)
       // Replace this line with your custom logic
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
 

// <!-- HTML -->
// <img src="click-me.jpg" alt="Click me" id="clickImage">
// <span id="targetSpan"></span>





document.addEventListener("DOMContentLoaded", () => {
  const fileImage = document.getElementById("fileImage");
  const fileButton = document.getElementById("fileButton");
  const selectedImage = document.getElementById("selectedImage");
  const imageContainer = document.getElementById("imageContainer");

  // Add an event listener to handle the image click
  fileImage.addEventListener("click", () => fileButton.click());

  // Add an event listener to handle the image selection
  fileButton.addEventListener("change", handleImageSelection);

  function handleImageSelection(event) {
    const file = event.target.files[0];

    // Check if a file was selected
    if (file) {
      const reader = new FileReader();

      // Read the file and convert it to a data URL
      reader.readAsDataURL(file);

      // Event triggered when the reading operation is completed
      reader.onload = function () {
        // Set the data URL as the source of the image element
        selectedImage.src = reader.result;
        selectedImage.style.display = "inline"; // Display the image element

        // Add the image as a child element to the span
        imageContainer.appendChild(selectedImage);
      };
    }
  }
});