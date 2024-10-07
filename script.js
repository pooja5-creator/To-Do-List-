
const input = document.querySelector('#input_text');
const add = document.querySelector('.btn');
const listContainer = document.querySelector('#list-container');


add.addEventListener('click', () => {
    if (input.value==='')
      {
        alert("You must wright something")
      } 
      else{
        let list = document.createElement('li');
       list.innerHTML=input.value
     listContainer.appendChild(list)
       let span=document.createElement('span')
       span.innerHTML="\u00d7"
       list.appendChild(span)
      }
      input.value=''
      saveData()
    })
     listContainer.addEventListener('click',(e)=>{
      if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData()
      }
      else if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData()
      }
     },false)
       
     function saveData(){
      localStorage.setItem("data",listContainer.innerHTML)
     }
 function showTask(){
  listContainer.innerHTML=localStorage.getItem("data")
 }
 showTask()