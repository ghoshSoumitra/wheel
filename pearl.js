let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);
let modal = document.getElementById("modal");
let modalTitle = document.getElementById("modal-title");
let modalMessage = document.getElementById("modal-message");
let closeButton = document.getElementsByClassName("close")[0];

function showModal(title, message, image) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = "block";
  
    let modalImage; 
  
    if (image) {
      modalImage = document.createElement("img");
      modalImage.src = image;
      modalMessage.appendChild(modalImage);
    }
  
    closeButton.onclick = function () {
      modal.style.display = "none";
      if (image && modalImage) { 
        modalMessage.removeChild(modalImage);
      }
    };
  
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        if (image && modalImage) { 
          modalMessage.removeChild(modalImage);
        }
      }
    };
  }
  
  

var clicks=0;
let prizes = [
    { text: "Try your luck once more.", image: "https://static9.depositphotos.com/1431107/1135/i/950/depositphotos_11359051-stock-photo-sorry-emoticon.jpg "},
    { text: "10% off coupon",  image: "https://images.squarespace-cdn.com/content/v1/5d4443c1512325000143a96e/1589226324205-5DWRFX6NYPQZ2F50IRHQ/clipart-hurrah.jpg" },
    { text: "15% off coupon",  image: "https://images.squarespace-cdn.com/content/v1/5d4443c1512325000143a96e/1589226324205-5DWRFX6NYPQZ2F50IRHQ/clipart-hurrah.jpg" },
    { text: "20% off coupon",  image: "https://images.squarespace-cdn.com/content/v1/5d4443c1512325000143a96e/1589226324205-5DWRFX6NYPQZ2F50IRHQ/clipart-hurrah.jpg" },
    { text: "25% off coupon",  image: "https://images.squarespace-cdn.com/content/v1/5d4443c1512325000143a96e/1589226324205-5DWRFX6NYPQZ2F50IRHQ/clipart-hurrah.jpg" },
    { text: "30% off coupon",  image: "https://images.squarespace-cdn.com/content/v1/5d4443c1512325000143a96e/1589226324205-5DWRFX6NYPQZ2F50IRHQ/clipart-hurrah.jpg" },
    { text: "40% off coupon",  image: "https://images.squarespace-cdn.com/content/v1/5d4443c1512325000143a96e/1589226324205-5DWRFX6NYPQZ2F50IRHQ/clipart-hurrah.jpg" },
    { text: "50% off coupon",  image: "https://images.squarespace-cdn.com/content/v1/5d4443c1512325000143a96e/1589226324205-5DWRFX6NYPQZ2F50IRHQ/clipart-hurrah.jpg" },
  ];



btn.onclick = function () {
  clicks += 1;
  if (clicks === 1) {
    let startAngle = 2500; 
    let endAngle = 2540; 
    let landedtryagain = prizes[0];
    // Calculate a random angle within the specified range
    let randomAngle = Math.floor(Math.random() * (endAngle - startAngle + 1)) + startAngle;
    console.log(randomAngle)
    container.style.transform = "rotate(" + randomAngle + "deg)";
    setTimeout(function () {
        showModal("Sorry, bad luck!", "Try your luck once more.",landedtryagain.image);
      }, 5000); 
  } else if (clicks > 1) {
    number += Math.ceil(Math.random() * 10000);
    container.style.transform = "rotate(" + number + "deg)";
    console.log(number);
    setTimeout(function () {
        let segmentAngle = 360 / prizes.length;
        let segmentIndex = Math.round((number % 360) / segmentAngle); // Calculate the index of the landed segment
        console.log("segmentindex"+segmentIndex);
        let landedSegment = prizes[segmentIndex];
      
        if(segmentIndex===0||segmentIndex>7){
            let landedtryagain = prizes[0];
            showModal("Sorry, bad luck!", "Try your luck once more.",landedtryagain.image);
            console.log(landedtryagain.text);
            console.log(landedtryagain.image)
        }
       else{
        showModal("Congratulations!", "You have won: " + landedSegment.text,landedSegment.image);
        console.log(landedSegment.text);
        console.log(landedSegment.image)
       }
        
      }, 5000);
  }
};


