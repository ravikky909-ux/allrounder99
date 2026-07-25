alert("Script Working");
// =========================
// Counter Animation
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const current = +counter.innerText;

const increment = Math.ceil(target / 120);

if(current < target){

counter.innerText = current + increment;

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

// =========================
// Scroll Reveal Animation
// =========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".why-card,.sport-card,.platform-card,.stat-box,.contact-btn"
).forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="0.7s ease";

observer.observe(el);

});

// =========================
// Logo Glow Animation
// =========================

const logos=document.querySelectorAll(".logo");

logos.forEach(logo=>{

logo.addEventListener("mouseenter",()=>{

logo.style.transform="scale(1.08) rotate(3deg)";

});

logo.addEventListener("mouseleave",()=>{

logo.style.transform="scale(1) rotate(0deg)";

});

});

// =========================
// Button Ripple Effect
// =========================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";
ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";
ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// =========================
// Smooth Page Fade
// =========================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";
document.body.style.transition="opacity .6s";

// =========================
// Scroll To Top Button
// =========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.opacity="1";

}else{

topBtn.style.opacity="0";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};