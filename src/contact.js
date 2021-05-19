import loadServices from "./services";

const homebtn = document.querySelector('.home');
const servicesbtn = document.querySelector('.services');
const contactbtn = document.querySelector('.contact-us');

function contactCreate() {
    const contact = document.createElement('div');
    contact.classList.add('contactContent');

    const h1Create = document.createElement('h1');
    h1Create.classList.add('contact-h1');
    h1Create.textContent = "Interested? Reach out to us:"

    const ulCreate = document.createElement('ul');
    ulCreate.classList.add('icons-list');
    const aCreate = document.createElement('a');
    aCreate.href = "https://www.facebook.com/speq.auto/"
    aCreate.target = "_blank"
    const liCreate = document.createElement('li');
    const iCreate = document.createElement('i');
    iCreate.classList.add('fab')
    iCreate.classList.add('fa-facebook')
    aCreate.appendChild(iCreate)
    liCreate.appendChild(aCreate);
    ulCreate.appendChild(liCreate);


    const divCreate = document.createElement('div');
    divCreate.classList.add('call-div')
    const h1Create2 = document.createElement('h1');
    h1Create2.classList.add('call-h1');
    h1Create2.textContent = "(63) 9952325613";
    const iCreate2 = document.createElement('i');
    iCreate2.classList.add('fas');
    iCreate2.classList.add('fa-phone');
    divCreate.appendChild(iCreate2);
    divCreate.appendChild(h1Create2);

    const pCreate = document.createElement('p');
    pCreate.classList.add('google-map');
    const iframeCreate = document.createElement('iframe');
    iframeCreate.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.9184166703767!2d121.12627948721158!3d14.199555136286415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9bb3a2fa082b0d2!2sLAGUNA%20BUENAVISTA%20EXEC%20HOMES!5e0!3m2!1sen!2sph!4v1621446977608!5m2!1sen!2sph"
    iframeCreate.width = "600";
    iframeCreate.height = "450";
    iframeCreate.style.border = "0";
    iframeCreate.allowFullscreen = "";
    iframeCreate.loading = "lazy";
    pCreate.appendChild(iframeCreate);


    contact.appendChild(h1Create);
    contact.appendChild(ulCreate);
    contact.appendChild(divCreate);
    contact.appendChild(pCreate);

    return contact;
}

function contactStyle() {
    homebtn.classList.remove("selected");
    servicesbtn.classList.remove("selected");
    contactbtn.classList.add("selected");
}

function loadContact() {
    contactbtn.addEventListener('click', () => {
        const content = document.querySelector('.content');
        while(content.firstChild) {
            content.removeChild(content.lastChild);
        }
        content.appendChild(contactCreate());
        contactStyle(); 
    })
}

export default loadContact();