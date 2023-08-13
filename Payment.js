const body=document.querySelector("body"),
      nav=document.querySelector("nav"),
      siderbarOpen=document.querySelector(".sidebarOpen"),
      siderbarClose=document.querySelector(".siderbarClose");

// js code for toggle sidebar
siderbarOpen.addEventListener("click" , () => {
    nav.classList.add("active");
});

body.addEventListener("click" , e => {
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

//get references to the interactive elements
const tvsladultOutput = document.getElementById("sadultc3");
const tvslchildtOutput = document.getElementById("schildc3");
const tvfladultOutput = document.getElementById("fadultc3");
const tvfchildOutput = document.getElementById("fchildc3");
const tvsumsum = document.getElementById("tot3");
const dateElement = document.getElementById("datec2");
const timeOutput = document.getElementById("timec2");

//Summary Output
dateElement.innerHTML=localStorage.getItem("Date");
//duration cell
const hoursSum = JSON.parse(localStorage.getItem('TimeframeSelections'));
const sum = hoursSum.reduce((acc, value) => acc + value, 0);
const sumValueCell = document.getElementById('durc2');
sumValueCell.textContent = sum + ' hours';

var storedSelections = localStorage.getItem('ticketSelections');

var selectionsObj = JSON.parse(storedSelections);

document.getElementById('sadultc2').textContent = selectionsObj["slAdult"]
document.getElementById('schildc2').textContent = selectionsObj["slChild"]
document.getElementById('fadultc2').textContent = selectionsObj["foreignerAdult"]
document.getElementById('fchildc2').textContent = selectionsObj["foreignerChild"]
document.getElementById('inf2').textContent = selectionsObj["infant"]

tvsladultOutput.innerHTML="$ "+localStorage.getItem("SL Adult Value");
tvslchildtOutput.innerHTML="$ "+localStorage.getItem("SL Child Value");
tvfladultOutput.innerHTML="$ "+localStorage.getItem("F Adult Value");
tvfchildOutput.innerHTML="$ "+localStorage.getItem("F Child Value");
tvsumsum.innerHTML="$ "+localStorage.getItem("SUM");

//payment details js

// Disable past dates in the date picker
const today = new Date().toISOString().split('T')[0];
expiryDate.setAttribute('min', today); 

document.getElementById('payButton').addEventListener('click', function() {
 const cardNumber = document.getElementById('cardNumber').value;
 const expiryDate = document.getElementById('expiryDate').value;
 const cvc = document.getElementById('cvc').value;
 const nameOnCard = document.getElementById('nameOnCard').value;

 

if (cardNumber && expiryDate && cvc && nameOnCard) {
   const paymentData = {
     cardNumber: cardNumber,
     expiryDate: expiryDate,
     cvc: cvc,
     nameOnCard: nameOnCard
   };

   // Store payment data in local storage
   localStorage.setItem('paymentData', JSON.stringify(paymentData));

   // Redirect to the next page or perform other actions
   // Replace 'next-page.html' with the actual URL
   window.location.href = './Confirmation.html';
} else {
   alert('Please fill in all fields.');
}
});

