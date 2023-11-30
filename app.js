let editLi = null ;
let addBtn = document.getElementById("addBtn");
let saveBtn = document.getElementById("saveBtn");
let delAllBtn = document.getElementById("delBtn");
let inputEl = document.getElementById("input");
saveBtn.style.display = "none";
delAllBtn.style.display = "none";
function addTodo(){
    let inputEl = document.getElementById("input");
    let inputVal = inputEl.value;
    let orderLi = document.getElementById("orderLi");
   
  if(inputVal.trim()){
      // create list  and append inorder list
      let list = document.createElement("li");
      list.innerText =inputVal;
      orderLi.appendChild(list);
      /// add class to list
      list.setAttribute("class" ,"listStyle")
      
  
      // create edit button in list 
      let editBtn = document.createElement("button");
      editBtn.innerText= "Edit";
      list.appendChild(editBtn);
  
     // add some funationality in edit buitton
  
     editBtn.addEventListener('click',()=>{
        let editVal = list.childNodes[0].nodeValue;
        inputEl.value = editVal;
        saveBtn.style.display="inline-block";
        addBtn.style.display ="none";
        editLi = list;
        
  
     })
  
     //Save button functinality 
  saveBtn.addEventListener('click',()=>{
      addBtn.style.display="inline-block";
      saveBtn.style.display="none";
      console.log(editLi.childNodes[0].nodeValue = inputEl.value)
      editLi.childNodes[0].nodeValue = inputEl.value;
      
     
  })
  
  // display delete all button
delAllBtn.style.display="inline-block";



    // create  delete button in list 
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText= "Delete";
    list.appendChild(deleteBtn);
    // add functionality to delete button
  deleteBtn.addEventListener('click',()=>{
      list.remove()
      if(orderLi.children.length === 0){
          delAllBtn.style.display="none";
      }
      
  })
  }
  else{
    alert("Please enter input")
  }
inputEl.value="";
}
function delAll(){
    orderLi.innerHTML=" ";
    delAllBtn.style.display="none";
    inputEl.value =" ";
}