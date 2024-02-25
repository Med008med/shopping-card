let likes=document.getElementsByClassName("like");
 for(let i=0;i<likes.length;i++){
  let like=likes[i];
  like.addEventListener("click", function(
    if(like.firstChild.style.color=="black"){
    like.firstChild.style.color="red";}
    else{
      like.firstChild.style.color="black"

    }
  )); 
}
let btnplus=document.getElementsByClassName("plus-btn ")
for(let i=0;i<btnplus.length;i++ ){
  let plus=btnplus[i]
  plus.addEventListener("click",function () {
    plus.previousElementSibling.value++;
  })
}
let btnminus=document.getElementsByClassName("minus-btn ");
for(let i=0;i<btnminus.length;i++ ){
  let plus=btnplus[i]
  minus.addEventListener("click",function () {
   if( minus.nextElementSibling.value>1;){
    minus.nextElementSibling.value--;
   }
  })
}
let delete=document.getElementsByClassName("delete");
for(let i=0;i<deletes.length;i++ ){
  let del=deletes[i]
  del.addEventListener("click",function () {
    del.parentElement.remove(;)
   }
  })
}
let items=document.getElementsByClassName("item");
function total(){
 let s=0
  for(let i=0;i<items.length;i++ ){
    let item=items[i]
  s=
   s+
    item.querySelector(".Quant").value*
     item.querySelector(".price").innerText;
  }
  return (finalprice.value=s);
}
