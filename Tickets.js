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

// Disable past dates in the date picker
const today = new Date().toISOString().split('T')[0];
datePicker.setAttribute('min', today);

//Date

const dateElement = document.getElementById("datec2");

function displayDate() {
	const dateInput = document.getElementById("datePicker");
	const datec2 = dateInput.value;

	//display date
	dateElement.innerHTML = datec2;

	//store date in LS
	dateChoices = document.getElementById("datePicker").value;

	dateinput = localStorage.setItem("Date", dateChoices);
}



//get references to the interactive elements
const tvsladultOutput = document.getElementById("sadultc3");
const tvslchildtOutput = document.getElementById("schildc3");
const tvfladultOutput = document.getElementById("fadultc3");
const tvfchildOutput = document.getElementById("fchildc3");
const tvsumsum = document.getElementById("tot3");

const sadultInput = document.getElementById("slAdult");
const schildInput = document.getElementById("slChild");
const fadultInput = document.getElementById("foreignerAdult");
const fchildInput = document.getElementById("foreignerChild");

//categories js

//get refarances

const seloutsa = document.getElementById("sadultc2");
const seloutsc = document.getElementById("schildc2");
const seloutfa = document.getElementById("fadultc2");
const seloutfc = document.getElementById("fchildc2");
const seloutin = document.getElementById("inf2");


// Add event listeners for input changes
var inputElements = document.querySelectorAll('.ticket-category input');
inputElements.forEach(function(inputElement) {
    inputElement.addEventListener('input', function() {
        updateSelectionsInLocalStorage();
    });
});

// Update the selections in local storage
function updateSelectionsInLocalStorage() {
    var selections = {};
    inputElements.forEach(function(inputElement) {
        var ticketType = inputElement.getAttribute('id');
        var ticketCount = parseInt(inputElement.value) || 0;
        selections[ticketType] = ticketCount;
    });
    localStorage.setItem('ticketSelections', JSON.stringify(selections));
    
    selcat = document.getElementById("slAdult").value;
    selcat1 = document.getElementById("slChild").value;
    selcat2 = document.getElementById("foreignerAdult").value;
    selcat3 = document.getElementById("foreignerChild").value;
    selcat4 = document.getElementById("infant").value;

    var storedSelections = localStorage.getItem('ticketSelections');

    var selectionsObj = JSON.parse(storedSelections);

    document.getElementById('sadultc2').textContent = selectionsObj["slAdult"]
    document.getElementById('schildc2').textContent = selectionsObj["slChild"]
    document.getElementById('fadultc2').textContent = selectionsObj["foreignerAdult"]
    document.getElementById('fchildc2').textContent = selectionsObj["foreignerChild"]
    document.getElementById('inf2').textContent = selectionsObj["infant"]
}

//js for timeframe

// Add an event listener to the timeframe selection
document.getElementById('timeframe').addEventListener('change', function() {
    // Get the selected time frames
    var timeframeSelect = document.getElementById('timeframe');
    var selectedOptions = Array.from(timeframeSelect.selectedOptions).map(option => parseInt(option.value));
  
    // Store the selections in local storage
    localStorage.setItem('TimeframeSelections', JSON.stringify(selectedOptions));
  
    // Update the selected duration display
    var durc2 = selectedOptions.reduce((total, hours) => total + hours, 0);
    document.getElementById('durc2').textContent = durc2 + ' hours';
  });
  
const timeOutput = document.getElementById("timec2");
  
function selectfun(){
    selectChoices = document.getElementById("timeframe").value;
  
    timeinput = localStorage.setItem("Time", selectChoices);
  
    timeOutput.innerHTML=localStorage.getItem("Time");

    //calculation input
    let sadult = parseInt(sadultInput.value);
    let schild = parseInt(schildInput.value);
    let fadult = parseInt(fadultInput.value);
    let fchild = parseInt(fchildInput.value);


    if(selectChoices == "1. 07.00 am - 08.00 am"){
        let vadult=(sadult)*4;
        tvsladultOutput.innerText=`$ ${vadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Adult Value", vadult);
        let vchild=(schild)*2;
        tvslchildtOutput.innerText=`$ ${vchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Child Value", vchild);
        let vfadult=(fadult)*10;
        tvfladultOutput.innerText=`$ ${vfadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Adult Value", vfadult);
        let vfchild=(fchild)*5;
        tvfchildOutput.innerText=`$ ${vfchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Child Value", vfchild);
        //sum
        let sumcal = vadult + vchild + vfadult + vfchild;
        sumout = localStorage.setItem("SUM", sumcal);
      
        //display
        tvsumsum.innerText=`$ ${sumcal}`
      }else if(selectChoices == "1. 08.00 am - 09.00 am"){
        let vadult=(sadult)*4;
        tvsladultOutput.innerText=`$ ${vadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Adult Value", vadult);
        let vchild=(schild)*2;
        tvslchildtOutput.innerText=`$ ${vchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Child Value", vchild);
        let vfadult=(fadult)*10;
        tvfladultOutput.innerText=`$ ${vfadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Adult Value", vfadult);
        let vfchild=(fchild)*5;
        tvfchildOutput.innerText=`$ ${vfchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Child Value", vfchild);
        //sum
        let sumcal = vadult + vchild + vfadult + vfchild;
        sumout = localStorage.setItem("SUM", sumcal);
      
        //display
        tvsumsum.innerText=`$ ${sumcal}`
      }else if(selectChoices == "1. 09.00 am - 10.00 am"){
        let vadult=(sadult)*4;
        tvsladultOutput.innerText=`$ ${vadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Adult Value", vadult);
        let vchild=(schild)*2;
        tvslchildtOutput.innerText=`$ ${vchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Child Value", vchild);
        let vfadult=(fadult)*10;
        tvfladultOutput.innerText=`$ ${vfadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Adult Value", vfadult);
        let vfchild=(fchild)*5;
        tvfchildOutput.innerText=`$ ${vfchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Child Value", vfchild);
        //sum
        let sumcal = vadult + vchild + vfadult + vfchild;
        sumout = localStorage.setItem("SUM", sumcal);
      
        //display
        tvsumsum.innerText=`$ ${sumcal}`
      }else if(selectChoices == "1. 01.00 pm - 02.00 pm"){
        let vadult=(sadult)*4;
        tvsladultOutput.innerText=`$ ${vadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Adult Value", vadult);
        let vchild=(schild)*2;
        tvslchildtOutput.innerText=`$ ${vchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Child Value", vchild);
        let vfadult=(fadult)*10;
        tvfladultOutput.innerText=`$ ${vfadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Adult Value", vfadult);
        let vfchild=(fchild)*5;
        tvfchildOutput.innerText=`$ ${vfchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Child Value", vfchild);
        //sum
        let sumcal = vadult + vchild + vfadult + vfchild;
        sumout = localStorage.setItem("SUM", sumcal);
      
        //display
        tvsumsum.innerText=`$ ${sumcal}`
      }else if(selectChoices == "1. 02.00 pm - 03.00 pm"){
        let vadult=(sadult)*4;
        tvsladultOutput.innerText=`$ ${vadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Adult Value", vadult);
        let vchild=(schild)*2;
        tvslchildtOutput.innerText=`$ ${vchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Child Value", vchild);
        let vfadult=(fadult)*10;
        tvfladultOutput.innerText=`$ ${vfadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Adult Value", vfadult);
        let vfchild=(fchild)*5;
        tvfchildOutput.innerText=`$ ${vfchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Child Value", vfchild);
        //sum
        let sumcal = vadult + vchild + vfadult + vfchild;
        sumout = localStorage.setItem("SUM", sumcal);
      
        //display
        tvsumsum.innerText=`$ ${sumcal}`
      }else{
        let vvadult=(sadult)*6;
        tvsladultOutput.innerText=`$ ${vvadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Adult Value", vvadult);
        let vvchild=(schild)*3;
        tvslchildtOutput.innerText=`$ ${vvchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Child Value", vvchild);
        let vvfadult=(fadult)*13;
        tvfladultOutput.innerText=`$ ${vvfadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Adult Value", vvfadult);
        let vvfchild=(fchild)*8;
        tvfchildOutput.innerText=`$ ${vvfchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Child Value", vvfchild);
        //sum
        let sumcal = vvadult + vvchild + vvfadult + vvfchild;
        sumout = localStorage.setItem("SUM", sumcal);
      
        //display
        tvsumsum.innerText=`$ ${sumcal}`
      }
}


