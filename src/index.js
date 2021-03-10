//async defer set up in index script tags

//define variables 
    const logbutton = document.querySelector("#buttolog")
    const addbutton = document.querySelector("#add")
    const editbutton = document.querySelector("#edit")
    const delbutton = document.querySelector("#delete")
    const image = document.querySelector("#profile")
    // const each die will need to be defined for rollers 'd#equals'. maybe do this as an array i can iterate thru
    const buttchieve = document.querySelector("#buttchieve")

//stand alone functions
  //login function - logbutton accepts a name and loads an existing user and their characters OR 
  //create new user-creates a user and renders a create character sheet > add button in this case should 

  //add character - toggle view to new character form populated with labels> add button now reads save 
  //save character - record to database and render saved character information 

  //edit character - toggle to edit rendered view to form populated with char's info > button text to update
  //update character - record info over existing info for current character to database

  //delete - changes inner text to confirm
  //confdelete - removes char from db

  //die rolls - each die will need a function to:
    //take into acount die range
    //take in amount of dice to be rolled (we'll say max 10 each)
    //clicking = will calculate result
    //interpolate die number to keep it dry

  //buttchieve - append input in textfield to ul as li above the textfield. Do i need to div those?

//event listeners
  //login - on click > login/create function
  //add - on click > add function
  //add>save - on click > save function
  //edit - on click > edit function
  //edit>update - on click > update function
  //delete - on click > delete function
  //delete>update - on click > confdelete function 
  //

//call functions