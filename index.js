const input=document.getElementById("input")
const list=document.querySelector(".list")
const addbtn=document.getElementById("add")

addbtn.addEventListener("click",function(){
    addTask()
})
function addTask(){
    // let container=''
    if(input.value==''){
        alert("Please write a task")
    }
    else{
        let li=document.createElement("li")
    li.innerHTML=`${input.value}`
    list.appendChild(li)
    
    let span=document.createElement("span")
    span.innerHTML=`\u00d7`
    li.appendChild(span)
    
}
input.value=''
saveData()
    // else{
    //     container+=` 
    //     <li> ${input.value}</li>
    //     `
    //     list.innerHTML+=container
    //     input.value=''
    // }
}
// function completedTask(){
//     const liItem=document.querySelectorAll("li")
//     for(let i=0; i<liItem.length; i++){
//         liItem[i].addEventListener("click",function(){
//             liItem[i].classList.toggle("checked")
//         })
//     }
// }
// completedTask()

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
    }
},false)
function saveData(){
    localStorage.setItem("data",list.innerHTML)
}
function displayData(){
    list.innerHTML=localStorage.getItem("data")
}
displayData()