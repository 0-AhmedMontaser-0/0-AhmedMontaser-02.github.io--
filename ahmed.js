 //localStorage
let mainColors = localStorage.getItem("color_option");

if (mainColors!== null){

document.body.style.setProperty("--main-color",mainColors);
//remove active class from all colors list Item
document.querySelectorAll(".colors-list li").forEach(elemnt=>{
	elemnt.classList.remove("active");
	//add active class on elemnt(to Local Storage) 
	if(elemnt.dataset.color===mainColors){
	elemnt.classList.add("active");
	}
});
}
//random background
let backgroundOption=true;
//variable to control the backGroundInterval
let backgroundInterval
//check is there is local storage randome backgroundItem;
let backgroundLocalItem=localStorage.getItem("background_option");
if(backgroundLocalItem !==null){
	if(backgroundLocalItem==="true"){
		backgroundOption=true;
	}
	else{
		backgroundOption=false;
	}
}
		randomizeOption();
		
document.querySelectorAll(".random-background span").forEach(elemnt=>{
	elemnt.classList.remove("active");
});
if(backgroundLocalItem==="true"){
	document.querySelector(".random-background .yes").classList.add("active");
}
else{
	document.querySelector(".random-background .no").classList.add("active");
}
//toogle setting class
document.querySelector(".toggle-setting .fa-cog").onclick=function(){
	this.classList.toggle("fa-spin");
	document.querySelector(".setting-box").classList.toggle("open");
};
const randomBackEl=document.querySelectorAll(".random-background span");

	// loop in all Spans
	randomBackEl.forEach(span=>{
		
	//click on every span
		span.addEventListener("click",(e)=>{
	//remove Active class from all spans
			
		handleActive(e);
		
		if(e.target.dataset.background==="yes")
		{backgroundOption=true;
		randomizeOption();
		localStorage.setItem("background_option",true);//localStorage

		}
		
		else {
			backgroundOption=false;
			clearInterval(backgroundInterval);
			localStorage.setItem("background_option",false);
		}
		});
	});




// Switch color
const colorsLi=document.querySelectorAll(".colors-list li");

	// loop in all lest items 
	colorsLi.forEach(li=>{
		
	//click on every list items
		li.addEventListener("click",(e)=>{
			
	//set color on root
		document.body.style.setProperty("--main-color",e.target.dataset.color);
			
	//set color on local Storage 
		localStorage.setItem("color_option",e.target.dataset.color)
	//remove active class from all childern
			
		handleActive(e);
			
		})
	}
	);



// Switch background

	
//select landing page
let landingPage=document.querySelector(".landing-page");

// get array of Imgs
let imgsArray=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];

//function to randomize option
function randomizeOption(){
	
	if (backgroundOption===true){
	
	
 backgroundInterval = setInterval(() => {
	// Get Random Number
let randomNumber=Math.floor(Math.random()*imgsArray.length);
	
	//change Background Image Url
landingPage.style.backgroundImage='url("images/'+imgsArray[randomNumber]+'")';

},5000)
	};
};
//select Slills 
 let ourSkills=document.querySelector(".skills");
window.onscroll=function(){
	
	//skills offset top
	let skillsOffsetTop=ourSkills.offsetTop;

	//skills outerHeight
	let skillsOuterHeight=ourSkills.offsetHeight

	//window height
    let windowHeight =window.innerHeight;
	// window scroll top
	let windowScrollTop =window.pageYOffset	;
	
	if(windowScrollTop>(skillsOffsetTop+skillsOuterHeight-windowHeight)){
		
  let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
	allSkills.forEach(skill=>{
		skill.style.width=skill.dataset.progress
	});
	}

};
let ourgallery=document.querySelectorAll(".images-box img");

ourgallery.forEach(img=>{
	
	img.addEventListener("click",(e)=>{ 
		
	let overlay = document.createElement("div");
		overlay.className="popup-overlay";
		document.body.appendChild(overlay);
		
		let popupBox=document.createElement("div");
			popupBox.className="popup-box";

	if(img.alt!==null){
			let imgHeading=document.createElement("h3");
			let imgText=document.createTextNode(img.alt);
			imgHeading.appendChild(imgText);
			popupBox.appendChild(imgHeading);
		}


		let popupImage=document.createElement("img");
			popupImage.src=img.src
		
		popupBox.appendChild(popupImage);
		document.body.appendChild(popupBox);
		
		//create close span
		
		let closeButton=document.createElement("span");
		
		let closeButtonText=document.createTextNode("X");
		
		closeButton.appendChild(closeButtonText);
		closeButton.className = "close-button";
		
		popupBox.appendChild(closeButton);

	});

	
});
//close popup

document.addEventListener("click",(e)=>{
	if(e.target.className=="close-button"){
		e.target.parentElement.remove();
		document.querySelector(".popup-overlay").remove();
	}
});


//select ALL bultts
const allBullts=document.querySelectorAll(".nav-bullets .bullet");



//select all links 
const allLinks=document.querySelectorAll(".links a");



 function moveToSomeWhere(elements){
	 
	 elements.forEach(ele=>{
	ele.addEventListener("click",(e)=>{
		e.preventDefault();
		document.querySelector(e.target.dataset.section).scrollIntoView(
		{
			behavior:"smooth"
		});
	});
});	 
 };
 
 moveToSomeWhere(allBullts);
 moveToSomeWhere(allLinks);
 
 //handle active State 
 
 function handleActive(ev){
	 ev.target.parentElement.querySelectorAll(".active").forEach(element=>{
		 element.classList.remove("active");
	 });
	 ev.target.classList.add("active");
 }
 
 
 //bullet system
 
 let bulletsSpan=document.querySelectorAll(".bullets-option span");
let bulletsContainer=document.querySelector(".nav-bullets");
 let bulletLocalItem=localStorage.getItem("bullets_option");
	if(bulletLocalItem !==null){
			bulletsSpan.forEach(span=>{
			span.classList.remove("active");
		})
	}
	if(bulletLocalItem==="block"){
		bulletsContainer.style.display="block"; 
		document.querySelector(".bullets-option .yes").classList.add("active")
	}else{
		bulletsContainer.style.display="none";
		document.querySelector(".bullets-option .no").classList.add("active")

	}
	
 bulletsSpan.forEach(span=>{
	 span.addEventListener("click",(e)=>{
		 if(span.dataset.display=="show"){
			 bulletsContainer.style.display="block"; 
			 localStorage.setItem("bullets_option","block");
		 }
		 else{
			 bulletsContainer.style.display="none";
			  localStorage.setItem("bullets_option","none");

		 }
		 handleActive(e);
	 });
 });
 
 //reset button
 

 //toggel menu 
 let toggleBtn=document.querySelector(".toggle-menu");
 let tLinks=document.querySelector(".links");
 
 toggleBtn.onclick=function(){
	 this.classList.toggle("menu-active");
	  tLinks.classList.toggle("open");
 };
 
 
 
 //click anywhere outside Meniu And Toggle
 
 document.addEventListener("click",(e)=>{
	 e.stopPropagation();
if(e.target!==toggleBtn && e.target!==tLinks){

if(tLinks.classList.contains("open")){

toggleBtn.classList.toggle("menu-active");
tLinks.classList.toggle("open");

}
	
	
	
}
});
 tLinks.onclick=function(e){
	 e.stopPropagation();
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 