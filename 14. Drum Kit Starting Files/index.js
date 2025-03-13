// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {  // 0 to 7
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {  // assign click event to each button
//     alert("I got clicked! " + this.innerHTML);
//   });

// }

document.addEventListener("keydown", function(event) {
  // alert("Key was pressed! " + event.key);
  // var drumButton = document.querySelectorAll(".drum");
  // drumButton.style.borderColor = "white";
  // setTimeout(function() {
  //   drumButton.style.borderColor = "";
  // }, 100);
  if (event.key === "w") {
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
    
  }
  else if (event.key === "a") {
    var audio = new Audio('./sounds/tom-2.mp3');
    audio.play();
  }
  else if (event.key === "s") {
    var audio = new Audio('./sounds/tom-3.mp3');
    audio.play();
  }
  else if (event.key === "d") {
    var audio = new Audio('./sounds/tom-4.mp3');
    audio.play();
  }
  else if (event.key === "j") {
    var audio = new Audio('./sounds/snare.mp3');
    audio.play();
  }
  else if (event.key === "k") {
    var audio = new Audio('./sounds/crash.mp3');
    audio.play();
  }
  else if (event.key === "l") {
    var audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();
  }
  else {
    console.log("Error");
  }
});

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {  // 0 to 6
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {  // assign click event to each button
    if (this.innerHTML === "w") { // if the button clicked is w
      var audio = new Audio('./sounds/tom-1.mp3');
      audio.play();
    }
    else if (this.innerHTML === "a") {
      var audio = new Audio('./sounds/tom-2.mp3');
      audio.play();
    }
    else if (this.innerHTML === "s") {
      var audio = new Audio('./sounds/tom-3.mp3');
      audio.play();
    }
    else if (this.innerHTML === "d") {
      var audio = new Audio('./sounds/tom-4.mp3');
      audio.play();
    }
    else if (this.innerHTML === "j") {
      var audio = new Audio('./sounds/snare.mp3');
      audio.play();
    }
    else if (this.innerHTML === "k") {
      var audio = new Audio('./sounds/crash.mp3');
      audio.play();
    }
    else if (this.innerHTML === "l") {
      var audio = new Audio('./sounds/kick-bass.mp3');
      audio.play();
    }
    else {
      console.log("Error");
    }


  });

}