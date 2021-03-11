//async defer set up in index script tags

//define variables 
    const logbutton = document.querySelector("#logbtn")
    const addbutton = document.querySelector("#add")
    const editbutton = document.querySelector("#edit")
    const delbutton = document.querySelector("#delete")
    const image = document.querySelector("#profile")
    const buttchieve = document.querySelector("#buttchieve")
    conts 

    let li = document.createElement(li)

//stand alone functions
  // function fetch('http://localhost:3000', {method: 'GET'}) {
  // .then(db => db.json())
  //   .then(db.json => console.log(db.json))
  // } //this doesn't seem right 

  function login(string){
    //if User.all.includes?(string)
        //render json: User.character.first
    //else User.create(name: string)
      //render json: form.html view
  }
  
  function addchar() {
    //add - render view to new character form populated with labels> add button innerText to 'save'
  }

  function save() {
    //save character - fetch() to database and render saved character information 
  }

  function edit(character) { 
    //render form view and populate fields with character info via fetch
  }

  function update(character) {
    //fetch character
    //record input to character
    //fetch() return updated character
  }
  
  function deletechar(character) {
    //fetch character
    //delete character from database
    //if exist other characters display 1st
    //else display form for new 
  }

  //die rolls - each die will need a function to:

  function rolldie(dnumber, amount){
    //take into acount die range
    //take in amount of dice to be rolled (we'll say max 10 each)
    //clicking = will calculate result
    //interpolate die number to keep it dry
  }



//event listeners

form.addEventListener('submit', e => {
  e.preventDefault()
  let input = e.target[0].value
  let li = document.createElement('li')
  li.innerText = input
  ul.appendChild(li)

  input.innerText = ''
});
  //login - on click > login/create function
    
  //add - on click > add function
  //add>save - on click > save function
  //edit - on click > edit function
  //edit>update - on click > update function
  //delete - on click > delete function
  //delete>update - on click > confdelete function 
  //

//call functions