/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'

axios.get(`https://api.github.com/users/peterdavidconley`)
.then(resp => {
  const githubData = resp.data
  rootDiv.appendChild(cardMaker(githubData))
})
.catch(err => {
  console.error(err)
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const rootDiv = document.querySelector('.cards')


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker (object) {

  const cardDiv = document.createElement('div')
  cardDiv.classList.add('card')
  const userImg = document.createElement('img')
  cardDiv.appendChild(userImg)
  userImg.src = object.avatar_url
  const infoDiv = document.createElement('div')
  infoDiv.classList.add('card-info')
  cardDiv.appendChild(infoDiv)
  const name = document.createElement('h3')
  name.classList.add('name')
  name.textContent = object.name
  infoDiv.appendChild(name)
  const userName = document.createElement('p')
  userName.classList.add('username')
  userName.textContent = object.login
  infoDiv.appendChild(userName)
  const location = document.createElement('p')
  location.textContent = `Location: ${object.location}`
  infoDiv.appendChild(location)
  const profile = document.createElement('a')
  profile.href = object.html_url
  profile.textContent = `Profile: ${object.html_url}`
  infoDiv.appendChild(profile)
  const followers = document.createElement('p')
  followers.textContent = `Followers: ${object.followers}`
  infoDiv.appendChild(followers)
  const following = document.createElement('p')
  following.textContent = `Following: ${object.following}`
  infoDiv.appendChild(following)
  const bio = document.createElement('p')
  bio.textContent = `Bio: ${object.bio}`
  infoDiv.appendChild(bio)

  return cardDiv;

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
