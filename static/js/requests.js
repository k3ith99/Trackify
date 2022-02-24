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
        const response = await requestLogin.json();
        if (response.err){throw Error(response.err)}
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
        if(!response.success){throw new Error("login not authorised")}
        login (response.token)
        //login - you receive tokens

    }
    catch(err){
        console.log("error loging in")
    }
}

function login(token){
    const user = jwt_decode(token);
    localStorage.setItem("token", token);
    localStorage.setItem("username", user.username);
    localStorage.setItem("userEmail", user.email);
    window.location.hash = '#feed';
}

function logout(){
    localStorage.clear();
    window.location.hash = '#login';
}

function currentUser(){
    const username = localStorage.getItem('username')
    return username;
}








async function getUserHabits(data){
    try{
        const options = { 
            headers: new Headers({

            })
        },
        const response = await fetch(`http://18.130.211.172:3000/habits/${data.UserId}`, options); //add links and auth
        //find a way to store userid in browser using token, localstorage 
        //store token in localstorage
        //add login and register fetch requests functions
        // /auth/register do login too on this side
        // /auth/login
        //using hashes

        const response = response.json();
       //return data
        layout.showHabitsSection(response)
    }
    catch(err){
        reject("Error retrieving user habits from server")
    }
}

async function getSpecificHabits(e,data){
    try{
        e.preventDefault();
        const response = await fetch(`http://18.130.211.172:3000/habits/${data.UserId}/${data.habit}`, options); //add links and auth
        const options = {headers: new Headers({}) },
        const data = response.json();
        return data   
    }
    catch(err){
        reject("Error retrieving specific habits from server")
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


async function UpdateHabit(e,data){ //just to update streak
    try{
        e.preventDefault()
        const options = {
            method: "PATCH",
            headers: new Headers({"Content-Type": "application/json"}),
        }
        //need a function that checks if it has been updated for today
        const response = await fetch(`http://18.130.211.172:3000/habits/${data.UserId}/${data.habit}`, options)
        const response = await response.json()
        return response
    }
    catch(err){
        console.log("Habit could not be updated")
    }
}

module.exports = { UpdateHabit , getSpecificHabits , getUserHabits , deleteHabit, addHabit, requestLogin, requestReg}
