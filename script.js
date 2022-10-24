function sendEmail() {

    let firstName = document.querySelector('[name="FirstName"]').value;
    let lastName = document.querySelector('[name="lastName"]').value;
    let email = document.querySelector('[name="email"]').value;
    let message = document.querySelector('[name="messageContent"]').value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "",
        Password: "",
        From: "",
        To: "",
        Subject: `${firstName} ${lastName} שלח/ה לך הודעה מהאתר`,
        Body: `
        <b>הודעה מאת:</b> ${firstName} ${lastName}
         <br>
         <br>
         <b>כתובת איימיל של השולח:</b> ${email}
         <br>
         <br>
         <b>נשלח בתאריך:</b> ${date}
         <br>
         <br>
         <b>תוכן ההודעה:</b>
         <br>
       ${message}
       `
    });


}