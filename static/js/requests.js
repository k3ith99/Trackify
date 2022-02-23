const layout = require("./layout")


async function requestReg(e){
    e.preventDefault();
    try{
        const options = {
            method: "POST", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const response = await fetch("http://18.130.211.172:3000/auth/register", options)
        requestLogin(e);
    } catch(err){
        console.log("error registrating user")
    }
}
async function requestLogin(e){
    e.preventDefault();
    try{
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const response = await fetch("http://18.130.211.172:3000/auth/login", options)
        const response = await response.json();
        //login - you receive tokens

    }
    catch(err){
        console.log("error loging in")
    }
}







async function getUserHabits(UserId){
    try{
        const options = { 
            headers: new Headers({

            })
        },
        const response = await fetch(`http://18.130.211.172:3000/habits/${UserId}`, options); //add links and auth
        //find a way to store userid in browser using token, localstorage 
        //store token in localstorage
        //add login and register fetch requests functions
        // /auth/register do login too on this side
        // /auth/login
        //using hashes

        const data = response.json();
       //return data
        layout.showHabitsSection(data)
    }
    catch(err){
        reject("Error retrieving user habits from server")
    }
}

async function getSpecificHabits(e,UserId,habit){
    try{
        e.preventDefault();
        const response = await fetch(`http://18.130.211.172:3000/habits/${UserId}/${habit}`, options); //add links and auth
        const options = {headers: new Headers({}) },
        const data = response.json();
        return data   
    }
    catch(err){
        reject("Error retrieving specific habitxs from server")
    }
}

async function addHabit(e){
    try{
        const data = { streak: e.target.value
        }
        const options = {
            method: "POST",
            headers: new Headers({"Content-Type": "application/json"}), //add auth
            body: JSON.stringify(data)
        }
        const response = await fetch("http://18.130.211.172:3000/habits/", options);
        const response  = await response.json();
        layout.appendHabit(response)

    }
    catch(err){
        console.log("Could not add new habit")
    }
}

async function deleteHabit(data,newDiv){
    try{
        const options = {
            method: "DELETE",
            headers: new Headers({
                "Content-Type":"application/json"})
            
    }
    await fetch(`http://18.130.211.172:3000/habits/${data.UserId}/${data.habit}`, options).then(newDiv.remove())
    
} catch(err){
    console.log("Could not delete habit")}
    
}


async function UpdateHabit(e,UserId){ //just to update streak
    try{
        e.preventDefault()
        const options = {
            method: "PATCH",
            headers: new Headers({"Content-Type": "application/json"}),
        }
        //need a function that checks if it has been updated for today
        const response = await fetch(`http://18.130.211.172:3000/habits/${UserId}`, options)
        const response = await response.json()
        return response
    }
    catch(err){
        console.log("Habit could not be updated")
    }
}

module.exports = { UpdateHabit , getSpecificHabits , getUserHabits , deleteHabit, addHabit, requestLogin, requestReg}
