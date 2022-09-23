

import Contact from "./Contact.js"
// var number = 46;
// let name = "Steve";

// number = 12;
// name = Kerry;

//writing to the Doc
// document.writeln(name + number);

const formInfo = document.getElementById("formInfo");

let hasJob = true;
if(hasJob) {
    //I have a job.
    showMessage("Thanks for visiting, I'm currently working at the best company in the world.");
} else {
    //I need a job.
    showMessage("Please look around, I'm currently looking for a position.");
}

let today = new Date();
let dayOfWeek = today.getDay();
if(dayOfWeek === 0 || dayOfWeek ===6) {
    showMessage("Since it is the weekend, I'm going tubing");
}

function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "</p>";
}

function clearMessage() {
    formInfo.innerHTML = "";
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const contact = new Contact(contactForm);
    contact.send();
});

const experiences = document.getElementsByClassName("experience");
for(let x = 0; x < experiences.length; x++) {
    const item = experiences[x];
    item.addEventListener("mouseenter", function (event){
        event.target.style = "background-color: #999999;"
    });
    item.addEventListener("mouseleave", function (event){
        event.target.style = "";
    });
}











