var x=document.getElementById("m")

window.addEventListener("scroll",function(){
    console.log(this.window.scrollY)
   if(this.window.scrollY<100){
   x.style.cssText=`background-color:green`
   }
   if(this.window.scrollY>200){
    x.style.cssText=`background-color:black`
    }
})