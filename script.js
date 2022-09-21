let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add('active-tab');
}

// for manubar  
let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}


// <!-- contact form from google sheet  --> 
const scriptURL = 'https://script.google.com/macros/s/AKfycbz-o2o1bR4ZIGorGsjruJwIVCP66SsiHixBrqk6lf9jSOGmgPa1UsnJJ0Tz3m2nWuqFvQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent Successfully"
            setTimeout(() => {
                msg.innerHTML = ""
            }, 5000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
}) 
