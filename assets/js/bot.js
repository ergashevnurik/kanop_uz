/* Bot Configuration goes here */
document.querySelector('.submit-btn').onclick = function() {
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let phoneNumber = document.querySelector('#phoneNumber').value;
    let addPhoneNumber = document.querySelector('#addPhoneNumber').value;
    let details = document.querySelector('#details').value;

    if (firstName === "" && firstName.length < 1) {
        alert("Please fill the first name input");
    } else if (phoneNumber.length <= 1) {
        alert("Please fill the email input");
    } else if (addPhoneNumber.length <= 1 && addPhoneNumber === "") {
        alert("Please fill the phone input");
    } else {
        let xHttp = new XMLHttpRequest();
        let message = "Имя: " + firstName + " " + "Фамилия: " + lastName + " " + "Номер: " + phoneNumber + " " + "Доп Номер: " + addPhoneNumber + " " + "Детали: " + details;

        const token = "5952448521:AAEKbvVJuPsvj_WJ1-L4YZ6eMCoX3d9-I3g";
        const chatId = "972931399";
        let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chatId + '&text=' + message;
        xHttp.open("GET", url, true);
        xHttp.send();

        alert('Successfully sent');
    }

}
/* Bot configuration ends here */

/*Get updates */
/* https://api.telegram.org/bot5952448521:AAEKbvVJuPsvj_WJ1-L4YZ6eMCoX3d9-I3g/getUpdates */