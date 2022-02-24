async function requestReg(e){
    try{
        const options = {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(e.target)
        }
        await fetch("http://18.130.211.172:3000/auth/register", options)
        requestLogin(e);
    } catch(err){
        console.log(err)
        console.log("error registrating user")
    }
}

async function requestLogin(e){
    try{
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(e.target)
        }
        let data = await fetch("http://18.130.211.172:3000/auth/login", options)
        if(!data.ok){throw new Error("login not authorised")}

        const token = await data.body.json().token;
        const user = jwt_decode(token);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", user.userId);
        localStorage.setItem("userEmail", user.email);

    }
    catch(err){
        console.log(err)
    }
}

function logout(){
    localStorage.clear();
}

function currentUser(){
    const userId = localStorage.getItem('userId')
    return userId;
}








async function getUserHabits(){
    try{
        const token = localStorage.getItem("token")
        const userId = jwt_decode(token).userId;
        const options = { 
          method: "GET",
          headers: { "Authorization": token},
        };
        let data = await fetch(`http://18.130.211.172:3000/habits/${userId}`, options); //add links and auth

        return data.body.json();
    }
    catch(err){
        reject("Error retrieving user habits from server")
    }
}

async function getSpecificHabits(e){
    try{
        e.preventDefault();
        const response = await fetch(`http://18.130.211.172:3000/habits/${data.UserId}/${data.habit}`, options); //add links and auth
        const options = {headers: new Headers({}) };
        const data = response.json();
        return data   
    }
    catch(err){
        reject("Error retrieving specific habits from server")
    }
}

async function addHabit(e){
    try{
        const data = { streak: e.target.value }
        const options = {
            method: "POST",
            headers: new Headers({"Content-Type": "application/json"}), //add auth
            body: JSON.stringify(data)
        }
        let response = await fetch("http://18.130.211.172:3000/habits/", options);
        response  = await response.json();
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
        let response = await fetch(`http://18.130.211.172:3000/habits/${data.UserId}/${data.habit}`, options)
        response = await response.json()
        return response
    }
    catch(err){
        console.log("Habit could not be updated")
    }
}

module.exports = { 
  UpdateHabit, 
  getSpecificHabits, 
  getUserHabits, 
  deleteHabit, 
  addHabit, 
  requestLogin, 
  requestReg
}
