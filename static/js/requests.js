
async function getUserHabits(e,UserId){
    try{
        e.preventDefault();
        const response = await fetch(`http://18.130.211.172:3000/habits/:${UserId}`, options); //add links and auth
        const options = { },
        const data = response.json();
        return data
    }
    catch(err){
        reject("Error retrieving user habits from server")
    }
}

async function getSpecificHabits(e,UserId,habit){
    try{
        e.preventDefault();
        const response = await fetch(`http://18.130.211.172:3000/habits/:${UserId}/:${habit}`, options); //add links and auth
        const options = { },
        const data = response.json();
        return data   
    }
    catch(err){
        reject("Error retrieving specific habits from server")
    }
}

async function addHabit(e){
    try{
        const data = { 
            UserId: e.target.value, //add this later
            habit: e.target.value,
            frequency: e.target.value,
            streak: e.target.value,
            goal: e.target.value

        }
        const options = {
            method: "POST",
            headers: new Headers({"Content-Type": "application/json"}), //add auth
            body: JSON.stringify(data)
        }
        const response = await fetch("http://18.130.211.172:3000/habits/", options);
        const response  = await response.json();
    }
    catch(err){
        console.log("Could not add new habit")
    }
}

async function deleteHabit(UserId){
    try{
        const options = {
            method: "DELETE",
            headers: new Headers({
                "Content-Type":"application/json"})
            
    }
    await fetch(`http://18.130.211.172:3000/habits/:${UserId}`, options)
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
        const response = await fetch(`http://18.130.211.172:3000/habits/:${UserId}`, options)
        const response = await response.json()
        return response
    }
    catch(err){
        console.log("Habit could not be updated")
    }
}

module.exports = { UpdateHabit , getSpecificHabits , getUserHabits , deleteHabit}
