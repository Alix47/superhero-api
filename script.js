// superhero api url
// https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const newherobutton = document.getElementById('NewHeroButton')

const newherodiv = document.getElementById('heroimage')
const searchbutton = document.getElementById('searchbutton')
const searchinput = document.getElementById('searchinput')


// for getting and displaying random superhero


const getsuperhero = (id, name) => {
  // name -> base_url/search/batman
  // json.results[0].image.url

  // id -> base_url/id
  // json.image.url

  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      const superhero = json
      getstats(superhero)
    })
}


// for searching and displaying a superhero 


const getsearchedhero = (name) => {
  console.log(searchinput.value)
  fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const hero = json.results[0]
      console.log(hero)
      getstats(hero)
    })
}


const randomhero = () => {
  const noofhero = 731
  return Math.ceil(Math.random() * 731)
}
newherobutton.onclick = () => getsuperhero(randomhero())
searchbutton.onclick = () => getsearchedhero(searchinput.value)


// displaying the contents of the superhero


const getstats = (character) => {
  const name = `<h2>${character.name}</h2>`

  const img = `<img src ="${character.image.url}" height=200 width=200/>`
  
  const stats = Object.keys(character.powerstats).map(stat =>{
return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
}).join('')
  

  newherodiv.innerHTML = `${name}${img}${stats}`
}