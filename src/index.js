//define variables 
    const logbtn = document.querySelector("#logbtn")
    const addbtn = document.querySelector("#add")
    const editbtn = document.querySelector("#edit")
    const delbtn = document.querySelector("#delete")
    const image = document.querySelector("#profile")
    const addchieve = document.querySelector("#addchieve")
    const usern = document.querySelector("#usern")
  
    const achul = document.querySelector("achul")

    let li = document.createElement("li")

//stand alone functions
  function getuser(){
    fetch('http://localhost:3000/users/1', {method: 'GET'}) 
    .then(db => db.json())
    .then(user => console.log(user))
   } 
   //populate with user and char data

  function getallcharas() {   
    fetch('http://localhost:3000/characters', {method: 'GET'}) 
    .then(db => db.json())
    .then(character => console.log(character))
   } //this works yay!

   function getchara() {   
    fetch('http://localhost:3000/characters/:id', {method: 'GET'}) 
    .then(db => db.json())
    .then(character => console.log(character))
   } 
//event listeners
  // addach.addEventListener("click", e => {
    // e.preventDefault()
    // let input = e.target[0].value
    // let li = document.createElement('li')
    // li.innerText = input
    // achul.appendChild('li')
    // input.innerText = ''
  // });
    
  // logbtn.addEventListener("click", e =>{
  //   e.preventDefault()
  //   if (db.include?()) {
  //     getuser();
  //   } else {
  //     User.create(name: usern)
  //   } 
  // }) this can wait
    
  //addbtn.addEventListener("click", e => {
    //render form.html
    //input = []
        //toggle form view, accept form input as array

    //async function addChar(url = 'http://localhost:3000/characters', data = {}) {
      //method: 'POST',           //post submission to db
      //mode: 'cors',
      //headers: {
        //'Content-Type': 'application/json'
      //},
      //redirect: 'follow',
      //referrePolicy: 'no-referrer',
      //body: JSON.stringify(data);
    //}
  //});

   

  //edit - on click > edit function
    //render form.html
  
  //edit>update - on click > update function
      //edit current character 
      //record input to character
      //fetch() return updated character

  //delete - on click > delete function
      //fetch character
      //delete character from database
      //if exist other characters display 1st
      //else display form for new 

  //dieroller - on click 
    //if id = d#; n = 
    //take input for amount
    // dn x amount
    //clicking = will calculate result
    //interpolate die number to keep it dry
  


//call functions
getuser();
// getallcharas();