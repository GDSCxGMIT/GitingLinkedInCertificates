// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, ref, push, child} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js"
import { createToast } from "../toast/script.js"

const firebaseConfig = {
  databaseURL: "https://giting-719b7-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const certificatelist = ref(database, "Certificates")

const emailid = document.getElementById("emailid");
const linkedin = document.getElementById("linkedin");
const portfolio = document.getElementById("portfolio");
const submit = document.getElementById("submit");


submit.addEventListener("click", function(e) {
    e.preventDefault();
    if(emailid.value!='' && linkedin.value!='' && portfolio.value!='') {
        push(certificatelist, {Email:emailid.value, LinkedIn: linkedin.value, Portfolio: portfolio.value})
        createToast("success", "Certificate is on the way!!")
        clearInputFieldEl()
    } else {
        clearInputFieldEl()
        createToast("error", "Enter values")
    }
})


function clearInputFieldEl() {
    emailid.value=""
    linkedin.value=""
    portfolio.value=""
}