let cri = document.querySelector("#cri");
addEventListener("mousemove",(e)=>{
    console.log(e.clientX, e.clientY)
    document.body.style.top = e.clientY + "px";
    document.body.style.bottom = e.clientY + "px";
})

addEventListener("mousemove",(e)=>{
    console.log(e.clientX, e.clientY)
    cri.style.top = e.clientY + "px";
    cri.style.left = e.clientX + "px";
})