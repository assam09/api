// async function getData() {
//     let respons = await fetch("https://www.breakingbadapi.com/api/characters/1")
//     let dataApi = await respons.json()
//     // console.log(dataApi[0].img)
//     document.querySelector(".namez").innerHTML = dataApi[0].name 
//     document.querySelector("img").src = dataApi[0].img
// };
// getData()

const api = "https://www.breakingbadapi.com/api/characters";

async function getDataz() {
  try{
    let respons = await fetch(api)    
    let dataApi = await respons.json()
    parintdat(dataApi)
  }catch(e){
    console.log("Error:",e)
  }
}



function parintdat(dataApi){
  let haeder = document.querySelector("#header");
  haeder.innerHTML += `
  <select class="form-control" onchange="getch(this.value)" >
  <option value="">Pleas select</option>
  ${dataApi.map( characters => `<option>${characters.name}</option>`)} 
  </select> 
  `
}

async function getch(name) {
  if (name !== "Pleas select") {
    let respons = await fetch(`${api}?name=${name}`)    
    let data = await respons.json()
    let content = document.querySelector("#content");
  
  content.innerHTML= `
  <h2>${data[0].name}(${data[0].nickname})</h2>
  <h3>${data[0].portrayed}</h3>
  <img src="${data[0].img}" width="250"/>
  `
}
}
getDataz()