let inp=document.querySelector("input");
let ul=document.querySelector("ol");
let addTask=document.querySelector("button");

addTask.addEventListener("click",function(){
    let addl=document.createElement("li")
    let delBtn=document.createElement("button");
    delBtn.innerText="delete"
    addl.innerText=inp.value;
    if(inp.value==""){
        alert("Enter any task!")
        return;
    }
    ul.appendChild(addl)
    addl.appendChild(delBtn);
    inp.value=""
    delBtn.classList.add("delete");
})
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted!")
    }
})