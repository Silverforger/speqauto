const homebtn = document.querySelector('.home');
const servicesbtn = document.querySelector('.services');
const contactbtn = document.querySelector('.contact-us');

function homeCreate() {
    const home = document.createElement('div');
    home.classList.add("homeContent")

    const h1Create = document.createElement('h1');
    h1Create.classList.add("home-who");
    h1Create.textContent = "WHO WE ARE"

    const divlineCreate = document.createElement('div');
    divlineCreate.classList.add("line-black");

    const pCreate = document.createElement('p');
    pCreate.classList.add("home-description");
    pCreate.textContent = "We are a small, tightly-knitted team geared towards providing automotive services and consultation. If it's auto, we can tango."

    const pCreate2 = document.createElement('p');
    pCreate2.classList.add("home-tagline");
    pCreate2.textContent = `"Right at the comfort of your own garage."`

    home.appendChild(h1Create)
    home.appendChild(divlineCreate)
    home.appendChild(pCreate);
    home.appendChild(pCreate2)

    return home;
}

function homeStyle() {
    homebtn.classList.add("selected");
    servicesbtn.classList.remove("selected");
    contactbtn.classList.remove("selected");
}

function loadHome() {
    homebtn.addEventListener('click', () => {
        const content = document.querySelector('.content');
        while(content.firstChild) {
            content.removeChild(content.lastChild);
        }
        content.appendChild(homeCreate());
        homeStyle(); 
    })
}

export default loadHome;