// ===========================
// ALLROUNDER99 PREMIUM JS
// ===========================

// Fade Up Animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("fade-up");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll(
".why-card,.sport-card,.platform-card,.stat-card,.contact-btn"
).forEach(el=>{
    observer.observe(el);
});


// Counter Animation

const counters=document.querySelectorAll(".stat-number");

counters.forEach(counter=>{

const txt=counter.innerText;

if(txt.includes("K")){

let target=parseInt(txt);

let count=0;

const speed=40;

const update=()=>{

count++;

counter.innerText=count+"K+";

if(count<target){

setTimeout(update,speed);

}

};

update();

}

});


// Floating Glow

document.querySelectorAll(
".platform-logo,.hero-logo,.footer-logo"
).forEach(el=>{

el.classList.add("float");
el.classList.add("glow");

});


// Smooth Button Click

document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("click",function(){

this.style.transform="scale(.95)";

setTimeout(()=>{

this.style.transform="";

},150);

});

});


// Page Load Animation

window.addEventListener("load",()=>{

document.body.style.opacity="0";

document.body.style.transition="opacity .8s";

setTimeout(()=>{

document.body.style.opacity="1";

},100);

});


// Scroll To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#00bfff";
topBtn.style.color="#fff";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};a