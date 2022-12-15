let all_addtocart_button=document.querySelectorAll(".add")
let arr=[]
let obj={}
for(let el of all_addtocart_button){
    el.addEventListener("click",(e)=>{
        e.preventDefault()
        console.log(e)
        el.textContent="CHECKOUT"
        obj["img"]=e.path[2].children[0].currentSrc
        obj["product_name"]=e.path[2].children[1].innerHTML
        obj["price"]=e.path[2].children[4].innerText
        console.log(obj)
        arr.push(obj)
        console.log(arr)
        localStorage.setItem("add_to_cart_item",JSON.stringify(arr))
    })
}
