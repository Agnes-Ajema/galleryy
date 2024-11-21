// const closeBtn = document.querySelector('close');
// const imageDiv = document.querySelector('roses')
// closeBtn.addEventListener('click',function(){
//     imageDiv.style.display = 'none'
// });

var closebtn = document.createElement("span");
closebtn.innerHTML = "&#215";

closebtn.style.position ="absolute";
closebtn.style.top ="10px";
closebtn.style.right ="10px";

var image =document.getElementById('')
image.appendChild(closebtn)
closebtn.addEventListener("click",function(){
    image.style.display = "none"
})



