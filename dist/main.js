(()=>{"use strict";const e=document.querySelector(".home"),t=document.querySelector(".services"),n=document.querySelector(".contact-us"),c=document.querySelector(".home"),a=document.querySelector(".services"),s=document.querySelector(".contact-us"),o=document.querySelector(".home"),d=document.querySelector(".services"),i=document.querySelector(".contact-us"),l=void i.addEventListener("click",(()=>{const e=document.querySelector(".content");for(;e.firstChild;)e.removeChild(e.lastChild);e.appendChild(function(){const e=document.createElement("div");e.classList.add("contactContent");const t=document.createElement("h1");t.classList.add("contact-h1"),t.textContent="Interested? Reach out to us:";const n=document.createElement("ul");n.classList.add("icons-list");const c=document.createElement("a");c.href="https://www.facebook.com/speq.auto/",c.target="_blank";const a=document.createElement("li"),s=document.createElement("i");s.classList.add("fab"),s.classList.add("fa-facebook"),c.appendChild(s),a.appendChild(c),n.appendChild(a);const o=document.createElement("div");o.classList.add("call-div");const d=document.createElement("h1");d.classList.add("call-h1"),d.textContent="(63) 9952325613";const i=document.createElement("i");i.classList.add("fas"),i.classList.add("fa-phone"),o.appendChild(i),o.appendChild(d);const l=document.createElement("p");l.classList.add("google-map");const r=document.createElement("iframe");return r.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.9184166703767!2d121.12627948721158!3d14.199555136286415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9bb3a2fa082b0d2!2sLAGUNA%20BUENAVISTA%20EXEC%20HOMES!5e0!3m2!1sen!2sph!4v1621446977608!5m2!1sen!2sph",r.width="600",r.height="450",r.style.border="0",r.allowFullscreen="",r.loading="lazy",l.appendChild(r),e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(l),e}()),o.classList.remove("selected"),d.classList.remove("selected"),i.classList.add("selected")}));e.addEventListener("click",(()=>{const c=document.querySelector(".content");for(;c.firstChild;)c.removeChild(c.lastChild);c.appendChild(function(){const e=document.createElement("div");e.classList.add("homeContent");const t=document.createElement("h1");t.classList.add("home-who"),t.textContent="WHO WE ARE";const n=document.createElement("div");n.classList.add("line-black");const c=document.createElement("p");c.classList.add("home-description"),c.textContent="We are a small, tightly-knitted team geared towards providing automotive services and consultation. If it's auto, we can tango.";const a=document.createElement("p");return a.classList.add("home-tagline"),a.textContent='"Right at the comfort of your own garage."',e.appendChild(t),e.appendChild(n),e.appendChild(c),e.appendChild(a),e}()),e.classList.add("selected"),t.classList.remove("selected"),n.classList.remove("selected")})),a.addEventListener("click",(()=>{const e=document.querySelector(".content");for(;e.firstChild;)e.removeChild(e.lastChild);e.appendChild(function(){const e=document.createElement("div");e.classList.add("servicesContent");const t=document.createElement("h1");t.classList.add("auto-body-h1"),t.textContent="AUTO BODY & PAINT SERVICES";const n=document.createElement("ul");n.classList.add("auto-body-list");for(let e=0;e<6;e++){const t=document.createElement("li");switch(e){case 0:t.textContent="Car Painting";break;case 1:t.textContent="Motorcycle Painting";break;case 2:t.textContent="Washover Painting";break;case 3:t.textContent="Car Body Repair";break;case 4:t.textContent="Car & Motorcycle Detailing";break;case 5:t.textContent="1 Day Paint Job"}n.appendChild(t)}const c=document.createElement("h1");c.classList.add("detailing-h1"),c.textContent="DETAILING SERVICES";const a=document.createElement("ul");a.classList.add("detailing-list");for(let e=0;e<8;e++){const t=document.createElement("li");switch(e){case 0:t.textContent="Ceramic Coating/Paint Protection";break;case 1:t.textContent="Door Glass Cleaning";break;case 2:t.textContent="Windshield Cleaning";break;case 3:t.textContent="Interior Detailing";break;case 4:t.textContent="Engine Detailing";break;case 5:t.textContent="Undercoating";break;case 6:t.textContent="Bodywax Application";break;case 7:t.textContent="Nano Ceramic Coating"}a.appendChild(t)}const s=document.createElement("h1");s.classList.add("disinfection-h1"),s.textContent="DISINFECTION PRODUCTS";const o=document.createElement("ul");o.classList.add("disinfection-list");for(let e=0;e<2;e++){const t=document.createElement("li");switch(e){case 0:t.textContent="Vehicle Disinfection";break;case 1:t.textContent="Home Disinfection"}o.appendChild(t)}const d=document.createElement("h1");return d.classList.add("consulting-h1"),d.textContent="We also offer automotive consulting services!",e.appendChild(t),e.appendChild(n),e.appendChild(c),e.appendChild(a),e.appendChild(s),e.appendChild(o),e.appendChild(d),e}()),c.classList.remove("selected"),a.classList.add("selected"),s.classList.remove("selected")})),l()})();