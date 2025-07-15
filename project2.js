let title = document.getElementById("title");
let day = document.getElementById("day");
let night = document.getElementById("night");
let body = document.querySelector("body")
let signlebtn = document.querySelector("#singlebtn")

signlebtn.addEventListener("click", ()=>{

    let temp = body.classList.contains("night");
    
   if (temp) {
    body.classList.add("day");
    body.classList.remove("night")
    title.innerHTML = "Good Morning 🌞"
   } else {
    body.classList.add("night");
    body.classList.remove("day");
    title.innerHTML = "Good Night 🌜"
   }
})

// day.addEventListener("click", ()=>{
//     body.classList.add("day");
//     body.classList.remove("night")
//     title.innerHTML = "Good Morning 🌞"
// })
// night.addEventListener("click", ()=>{
//      body.classList.add("night");
//     body.classList.remove("day");
//     title.innerHTML = "Good Night 🌜"
// })

