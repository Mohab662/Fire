var imagee=document.querySelector("img");

document.addEventListener('mousemove',function (evenInfo) {  
    if (evenInfo.clientX<innerWidth-(innerWidth*0.15)) {

        imagee.style.left=evenInfo.clientX+'px';
    }
    if (evenInfo.clientY<innerHeight-(innerHeight*0.36)) {

        imagee.style.top=evenInfo.clientY+'px';
    }
    


      console.log(innerHeight);
    
})

