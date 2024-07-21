function sendMail(contactForm) {
    let servicesSelected = [];
    contactForm.querySelectorAll('input[name="services-selecionado"]:checked').forEach((checkbox) => {
        servicesSelected.push(checkbox.value);
    });

    const templateParams = {
        from_name: contactForm.name.value,
        from_email: contactForm.emailaddress ? contactForm.emailaddress.value : '', // Se o campo for incluído no HTML
        telephone: contactForm.telephone.value,
        services: servicesSelected.join(', '),
        message: contactForm["additional-info"].value,
        how_did_you_hear: contactForm.querySelector('input[name="rede-social"]:checked').value
    };

    emailjs.send('gmail', 'template_bxmumuo', templateParams)
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // Para bloquear o carregamento de uma nova página
}