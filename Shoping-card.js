
// console.log(document.getElementsByClassName("plus1")
const btnplustag=document.getElementsByClassName("plus")
//  console.log(btnplus);
for(var i=0;i<btnplustag.length;i++){
btnplustag[i].addEventListener("click",increment)
}
function increment(e) {
//    console.log(e)
         var btnplus=e.target
        //  console.log(btnplus);
var divElt=btnplus.parentElement;
// console.log(divElt);
var qtetag=divElt.querySelector("p")
// console.log(qtetag)
var qte=Number(qtetag.innerHTML)
//  console.log(typeof qte)
qte++
// console.log(qte)
qtetag.innerHTML=qte
}
const btnmintag=document.getElementsByClassName("mines")
//  console.log(btnmintag)
for (var i=0; i<btnmintag.length;i++){
btnmintag[i].addEventListener("click",discrement)

}
function discrement(e){
    var btnmines=e.target
    // console.log(btnmines)
    var divelt=btnmines.parentElement
    // console.log(divelt)
    var qtetag=divelt.querySelector("p")
    // console.log(qtetag)
    var qte=Number(qtetag.innerHTML)
    if (qte>0){
    qte--
}
    qtetag.innerHTML=qte

}
const btnadd=document.getElementsByClassName("addtocart")

for(var i=0; i<btnadd.length; i++){
btnadd[i].addEventListener("click",addtopanel)
}  

function addtopanel(event){
    var Add=event.target
    
    // console.log(Add)
    //add name of the product
    var namee=Add.parentElement
    var nametag=namee.querySelector("p")
    nameprod=nametag.innerHTML
    // console.log(nameprod)
   var tbl=document.querySelector(".mytable")
   var row=tbl.insertRow()
   
   
    var cell1=row.insertCell()
    var cell2=row.insertCell()
    var cell3=row.insertCell()
    var cell4=row.insertCell()
    
    
    cell1.innerHTML=nameprod
    var qteadd=nametag.parentElement
    //   console.log(qteadd)
    var addqte=qteadd.querySelector(".qte")
    // console.log(addqte)
    qteaddto=addqte.innerHTML
    // console.log(qteaddto)
    cell2.innerHTML=qteaddto
    var divprice=addqte.parentElement
    // console.log(pricetag)
    var pricetag=divprice.querySelector(".price")
    // console.log(pricetag)
    var price=Number(pricetag.innerHTML)
    // console.log(typeof price)
    cell3.innerHTML=price
    var totaltag=pricetag.parentElement
    // console.log(total)
    var qnte=Number(totaltag.querySelector(".qte").innerHTML)
    
    // console.log(qnte)
    var totaltag1=totaltag.parentElement
    // console.log(totaltag1)
    price1=Number(totaltag1.querySelector(".price").innerHTML)
    // console.log(price1)
   totalunitprice=price1*qnte
   cell4.innerHTML=totalunitprice
//    console.log(totalunitprice)





    

} 
    


// console.log(document.getElementsByClassName("panel"))
var btnpanel=document.querySelector(".panel")
//  console.log(btnpanel)
btnpanel.addEventListener("click" , openpopup)
function openpopup(){

    document.querySelector(".popup").style.display ="flex"
    }


