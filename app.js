
const add = document.querySelector(".arrow")
add.addEventListener("click",function(){
    const mail = document.querySelector("#e")
    console.log(mail.value)
    localStorage.setItem("inputValue",mail.value)
})



