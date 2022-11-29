export default function click(){
document.querySelectorAll(".dropdown").forEach(function(dropdownWrapper){
  const listitemclick=dropdownWrapper.querySelectorAll(".dropdown__item");
  const btn = dropdownWrapper.querySelector(".Spisok");
  const btnclick = dropdownWrapper.querySelector(".Spisok__dropdown");
  const input =  dropdownWrapper.querySelector(".drodown__item__hiden");

    btnclick.classList.toggle("Spisok__dropdown__visible");
    

  // btnclick.classList.toggle("Spisok__dropdown__visible");
  
  listitemclick.forEach(function(listitem){
    listitem.addEventListener("click",(e)=>{
      e.stopPropagation();
      btn.innerText=listitem.innerText ;
      btnclick.classList.remove("Spisok__dropdown__visible");
      input.value=listitem.dataset.value;
    })
  })


  document.addEventListener('click',(e)=>{
    if(e.target !== btn){
      btnclick.classList.remove("Spisok__dropdown__visible");
    }
  })

})


}



 
    

 