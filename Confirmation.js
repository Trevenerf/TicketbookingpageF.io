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

var storedData = localStorage.getItem('formData');

var selectionsObj = JSON.parse(storedData);

document.getElementById('namec2').textContent = selectionsObj["fullName"]
document.getElementById('mobc1').textContent = selectionsObj["countryCode"]
document.getElementById('mobc2').textContent = selectionsObj["mobileNumber"]
document.getElementById('emailc2').textContent = selectionsObj["email"]
document.getElementById('Genc2').textContent = selectionsObj["gender"]
