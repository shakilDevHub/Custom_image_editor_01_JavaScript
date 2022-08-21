let target = document.querySelector("#target");
let uploadFile = document.querySelector("#uploadFile");
let bright = document.querySelector("#bright");
let contrast = document.querySelector("#contrast");
let grayscale = document.querySelector("#grayscale");
let hueRotate = document.querySelector("#hueRotate");
let saturate = document.querySelector("#saturate");
let sepia = document.querySelector("#sepia");
let blur = document.querySelector("#blur");

let brightValue = document.querySelector("#brightValue");
let contrastValue = document.querySelector("#contrastValue");
let grayscaleValue = document.querySelector("#grayscaleValue");
let hueRotateValue = document.querySelector("#hueRotateValue");
let saturateValue = document.querySelector("#saturateValue");
let sepiaValue = document.querySelector("#sepiaValue");
let blurValue = document.querySelector("#blurValue");

let resetBtn = document.querySelector("#reset");
let flipY = document.querySelector("#flipY");
let flipX = document.querySelector("#flipX");

let inputs = document.querySelectorAll("input");
let filterValue = document.querySelectorAll("label span");

// Uploading image functionality ==========================================
uploadFile.addEventListener("change", (event)=>{
    if(event.target.files.length>0){
        let uploadFileSrc = URL.createObjectURL(event.target.files[0]);
        console.log(uploadFileSrc)
        target.src = uploadFileSrc;
        target.style.display = "block";
    }
})
// ==========================================================


// All filter Effect===========================================
inputs.forEach((element, i)=>{
    custom(element, i);
})
var blurResult = 0, brightResult = 100, contrastResult = 100, grayscaleResult = 0, hueRotateResult = 0, saturateResult = 100, sepiaResult = 0;
function custom(para, index){
    let name = para.getAttribute("name");
    
    para.addEventListener("input", ()=>{
        let inputValue = para.value;
        if(name=="blur"){
            blurResult = inputValue;
        }
        if(name=="brightness"){
            brightResult  = inputValue;
        }
        if(name=="contrast"){
            contrastResult = inputValue;
        }
        if(name=="grayscale"){
            grayscaleResult = inputValue;
        }
        if(name=="hue-rotate"){
            hueRotateResult = inputValue;
        }
        if(name=="saturate"){
            saturateResult = inputValue;
        }
        if(name=="sepia"){
            sepiaResult = inputValue;
        }
        if(name=="roundCorner"){
            inputValue += "%";
            target.style.borderRadius = inputValue;
        }
        // filter: none | blur() | brightness() | contrast() |  grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url(); 
        var result = `blur(${blurResult}px) brightness(${brightResult}%) contrast(${contrastResult}%) grayscale(${grayscaleResult}%) hue-rotate(${hueRotateResult}deg) saturate(${saturateResult}%) sepia(${sepiaResult}%)`;
        target.style.filter = `${result}`;
        filterValue[index].innerText = inputValue;
    })
}



// Other Button Functionality=======================================================
let count = 0;
flipY.addEventListener("click", ()=>{
    count += 180;
    let styleRotate = `rotateX(${count}deg)`;
    target.style.transform = styleRotate;
})
count = 0;
flipX.addEventListener("click", ()=>{
    count += 180;
    let styleRotate = `rotateY(${count}deg)`;
    target.style.transform = styleRotate;
})
count = 0;
rotateImg.addEventListener("click", ()=>{
    count -= 90;
    let styleRotate = `rotate(${count}deg)`;
    target.style.transform = styleRotate;
})
// Reset Button================================================
resetBtn.addEventListener("click", ()=>{
    target.style.filter = "none";
    target.style.transform = "rotate(0)";
    target.style.borderRadius = "0";
})