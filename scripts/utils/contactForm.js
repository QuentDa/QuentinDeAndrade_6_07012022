const modalbg = document.querySelector(".bground");



function displayModal() {
    const modal = document.getElementById("contact_modal");
    modalbg.style.display = "block";
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modalbg.style.display = "none";
    modal.style.display = "none";
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal()
    }
})



// DOM Elements
const firstname = document.querySelector("#first");
const lastname = document.querySelector("#last");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

const form = document.querySelector('form');

// regex to verify email in case HTML5 doesn't work
const checkEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

//Création de fonction pour preventdefault le bouton submit
form.addEventListener('submit', function (e){
    e.preventDefault();
    let removeError = document.querySelectorAll('.errorDiv');
    removeError.forEach(error => {
        error.remove();
    })
    validate();
});

// on click submit button
function validate () {
    let errors = 0;
    if (firstname.value.length < 2) {
        let error = document.createElement('div');
        error.className = 'errorDiv';
        firstname.parentNode.appendChild(error);
        error.innerHTML = "Merci de renseigner votre prénom";
        errors++;
    }
    if (lastname.value.length < 2){
        let error = document.createElement('div');
        error.className = 'errorDiv';
        lastname.parentNode.appendChild(error);
        error.innerHTML = "Merci de renseigner nom de famille";
        errors++;
    }
    if (!checkEmail.test(email.value)) {
        //ne rentre pas dedans car l'HTML5 prend le dessus, fonctionne en type text
        let error = document.createElement('div');
        error.className = 'errorDiv';
        email.parentNode.appendChild(error);
        error.innerHTML = "Le format de l'e-mail n'est pas correct";
        errors++;
    }
    if (message.value.length < 10){
        let error = document.createElement('div');
        error.className = 'errorDiv';
        message.parentNode.appendChild(error);
        error.innerHTML = "Merci de bien vouloir formuler votre demande";
        errors++;
    }
    
    if (errors === 0){
        closeModal();
        // let alertsuccess = document.querySelector('.alertsuccess');
        // alertsuccess.style.opacity = 1;

        // setTimeout(function (){
        //     alertsuccess.style.opacity = 0;
        // }, 2300)
    }
}
