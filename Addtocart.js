let addtocart_button=document.querySelectorAll(".add")
let getitem=JSON.parse(localStorage.getItem("add_to_cart_item"))
let arr=[]
let obj={}
for(let el of addtocart_button){
    el.addEventListener("click",(e)=>{   
    el.textContent="CHECKOUT"
         obj["img"]="https://assets.interntheory.com/creative/courses/thumbnails/it.jpg"
         obj["product_name"]="IT Starter Pack (4 Courses)"
         obj["price"]=15999;
   
         arr.push(obj)
        localStorage.setItem("add_to_cart_item",JSON.stringify(arr))
    })
}
    getitem.forEach((el)=>{
        let img=document.createElement("img")
        img.setAttribute("src",el.img)
        let prname=document.createElement("h4")
        prname.innerText=el.product_name
        let prprice=document.createElement("p")
        prprice.innerText=el.price
        document.querySelector(".leftdiv").append(img,prname,prprice)
       
       
    })
    document.querySelector(".go").addEventListener("click",()=>{
            document.querySelector(".coupon").innerText="masai30"
        document.querySelector(".total").innerHTML="&#8377 11955"
        document.querySelector(".check").addEventListener("click",()=>{
            swal("Purchase successfully")
           
        })
        
    })
document.querySelector(".leftdiv i").addEventListener("click",()=>{
    console.log("hi")
    document.querySelector(".leftdiv").innerHTML="";
    document.querySelector(".leftdiv").innerHTML="The Course Is Empty";
    window.location.href="course.html"
    document.querySelector(".rightdiv").innerHTML=""
})


