export default function click(){

document.querySelectorAll(".slick-slide").forEach(function(btnkontaktiOsnova){
  const btn=btnkontaktiOsnova.querySelector(".kontaktibtn")
  const inform=btnkontaktiOsnova.querySelector(".informkontakti")
  inform.classList.add("informkontakti__visible")
  btn.addEventListener("click",()=>{
    inform.classList.toggle("informkontakti__visible")
  })
  })
}