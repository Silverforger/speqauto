const homebtn = document.querySelector('.home');
const servicesbtn = document.querySelector('.services');
const contactbtn = document.querySelector('.contact-us');

function servicesCreate() {
    const services = document.createElement('div');
    services.classList.add('servicesContent');

    const h1Create = document.createElement('h1');
    h1Create.classList.add('auto-body-h1');
    h1Create.textContent = "AUTO BODY & PAINT SERVICES";

    const ulCreate = document.createElement('ul');
    ulCreate.classList.add('auto-body-list');
    for (let i = 0; i<6; i++) {
        const liCreate = document.createElement('li');
        switch (i) {
            case 0:
                liCreate.textContent = "Car Painting";
                break;
            case 1:
                liCreate.textContent = "Motorcycle Painting";
                break;
            case 2:
                liCreate.textContent = "Washover Painting";
                break;
            case 3:
                liCreate.textContent = "Car Body Repair";
                break;
            case 4:
                liCreate.textContent = "Car & Motorcycle Detailing";
                break;
            case 5:
                liCreate.textContent = "1 Day Paint Job"
                break;
            default:
        }
        ulCreate.appendChild(liCreate);    
    }

    const h1Create2 = document.createElement('h1');
    h1Create2.classList.add('detailing-h1');
    h1Create2.textContent = "DETAILING SERVICES";

    const ulCreate2 = document.createElement('ul');
    ulCreate2.classList.add('detailing-list');
    for (let i = 0; i<8; i++) {
        const liCreate = document.createElement('li');
        switch (i) {
            case 0:
                liCreate.textContent = "Ceramic Coating/Paint Protection";
                break;
            case 1:
                liCreate.textContent = "Door Glass Cleaning";
                break;
            case 2:
                liCreate.textContent = "Windshield Cleaning";
                break;
            case 3:
                liCreate.textContent = "Interior Detailing";
                break;
            case 4:
                liCreate.textContent = "Engine Detailing";
                break;
            case 5:
                liCreate.textContent = "Undercoating"
                break;
            case 6:
                liCreate.textContent = "Bodywax Application";
                break;
            case 7:
                liCreate.textContent = "Nano Ceramic Coating";
                break;
            default:
        }
        ulCreate2.appendChild(liCreate);    
    }

    const h1Create3 = document.createElement('h1');
    h1Create3.classList.add('disinfection-h1');
    h1Create3.textContent = "DISINFECTION PRODUCTS";

    const ulCreate3 = document.createElement('ul');
    ulCreate3.classList.add('disinfection-list');
    for (let i = 0; i<2; i++) {
        const liCreate = document.createElement('li');
        switch (i) {
            case 0:
                liCreate.textContent = "Vehicle Disinfection";
                break;
            case 1:
                liCreate.textContent = "Home Disinfection";
                break;
            default:
        }
        ulCreate3.appendChild(liCreate);    
    }

    const h1Create4 = document.createElement('h1');
    h1Create4.classList.add('consulting-h1');
    h1Create4.textContent = "We also offer automotive consulting services!";

    services.appendChild(h1Create);
    services.appendChild(ulCreate);
    services.appendChild(h1Create2);
    services.appendChild(ulCreate2);
    services.appendChild(h1Create3);
    services.appendChild(ulCreate3);
    services.appendChild(h1Create4);

    return services;
}

function servicesStyle() {
    homebtn.classList.remove("selected");
    servicesbtn.classList.add("selected");
    contactbtn.classList.remove("selected");
}

function loadServices() {
    servicesbtn.addEventListener('click', () => {
        const content = document.querySelector('.content');
        while(content.firstChild) {
            content.removeChild(content.lastChild);
        }
        content.appendChild(servicesCreate());
        servicesStyle();
    })
}

export default loadServices;