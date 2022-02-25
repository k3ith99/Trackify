(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const signin = document.getElementById("signin");
const homepage = document.getElementById("homepage-section")
const habits = document.getElementById("habits-section")
const custom = document.getElementById("custom")
const requests = require('./requests');

const token = localStorage.getItem("token");
if(token){
  showHabitsSection();
} else {
  showHomepage();
}


const showTextbox = (e) => {
    // e.preventDefault();
    const textbox = document.getElementById('textbox')
    const newText = document.createElement('input')
    newText.setAttribute('type', 'text');
    newText.setAttribute('class', 'form-control')
    newText.setAttribute('class', 'shadow')
    textbox.append(newText);
}

custom.addEventListener('click', showTextbox)

const testbtn = document.getElementById('testbtn')

testbtn.addEventListener('click', showHomepage)

function showHomepage() {
    //id=info

    let sideBoxesDiv = document.getElementById("side-boxes")
    let infoDiv = document.createElement("div")
    let info = document.createElement('h2')
    let para = document.createElement('p')

    info.textContent += "Info"
    para.textContent += "information about the tracker (what it is, what it can be used for, how long they can do it for etc)"
    infoDiv.setAttribute('style', 'background-color:#a4c48f')
    infoDiv.setAttribute('id', 'info')
    infoDiv.classList.add('shadow', 'rounded-3', 'm-3', 'p-5', 'text-black')

    sideBoxesDiv.append(infoDiv)
    infoDiv.append(info)
    infoDiv.append(para)

    //id=login
    
    let loginDiv = document.createElement("div")
    let login = document.createElement('h2')
    let form = document.createElement('form')
    let divE = document.createElement('div')
    let divP = document.createElement('div')
    let email = document.createElement('input')
    let password = document.createElement('input')

    loginDiv.setAttribute('id', 'login')
    loginDiv.setAttribute('style', 'background-color:#a4c48f')
    loginDiv.classList.add('shadow', 'rounded-3', 'm-3', 'p-5', 'text-black')
    login.textContent += "Sign in/Register"
    form.setAttribute('action', 'submit')
    form.textContent += "information about the tracker (what it is, what it can be used for, how long they can do it for etc)"
    divE.setAttribute('class', 'form-floating')
    divP.classList.add('form-floating', 'mt-1')
    email.setAttribute('type', 'email')
    email.setAttribute('class', 'form-control')
    email.setAttribute('placeholder', 'name@example.com')

    divE.append(email)
    divP.append(password)
    form.append(divE)
    form.append(divP)
    loginDiv.append(title)
    loginDiv.append(form)
    sideBoxesDiv.append(loginDiv)

    //id=testimonials
    
}





const habitCards = document.getElementById("habit-cards")
//const habitsHTML = require("../templates/habits")
signin.addEventListener('click', showHabitsSection)
const deletebtn = document.getElementById("delete")
const updatebtn = document.getElementById("complete")









function showHabitsSection() {
    e.preventDefault();
    homepage.style.display="none"; //remove e potentially
    // habits.style.display="block"
    // for (let key of data){
    //     habitCards.innerHTML+=habitsHTML(key)}

}


divCreate = document.createElement("div")



function appendHabit(data){
    const newDiv = document.createElement("div") // add a class
    newDiv.setAttribute('class', 'habit')
    const habitCard = formatCard(newDiv, data)
    habitCards.append(newDiv)

}

function formatCard(newDiv, data){
    //creating elements
    const habit = document.createElement("h2")
    habit.setAttribute("class", "title")
    const goal = document.createElement("h6")
    goal.setAttribute("class", "goal")
    const frequency = document.createElement("h6")
    frequency.setAttribute("class", "frequency")
    const streak = document.createElement("h6")
    streak.setAttribute("class", "streak")
    const habitbtn = document.createElement("button")
    habitbtn.setAttribute("type", "submit")
    habitbtn.innerHTML = "Complete Habit"
    const deletebtn = document.createElement("button")
    deletebtn.setAttribute("class" , "delete")
    deletebtn.innerHTML = "Delete Habit"
    deletebtn.onclick = () => requests.deleteHabit(data,newDiv)
//call delete function and add data, newDiv
    habit.textContent = data.habit
    goal.textContent = data.goal
    frequency.textContent = data.frequency
    streak.textContent = data.streak

    newDiv.append(habit)
    newDiv.append(goal)
    newDiv.append(frequency)
    newDiv.append(streak)
    return newDiv
    
    
}



function updateHabit(data){


}





module.exports = {showHabitsSection, appendHabit};





},{"./requests":2}],2:[function(require,module,exports){
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
        localStorage.setItem("userId", user.UserId);
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
        const token = localStorage.getItem("token");
        const options = { 
          method: "GET",
          headers: { "Authorization": token}
        };
        let data = await fetch(`http://18.130.211.172:3000/habits/${data.UserId}`, options); //add links and auth

        return data.body.json();
    }
    catch(err){
        reject("Error retrieving user habits from server")
    }
}

async function getSpecificHabits(e){
    try{
        const token = localStorage.getItem("token");
        const options = {
          method: "GET",
          headers: { "Authorization": token}
        };
        let data = await fetch(`http://18.130.211.172:3000/habits/${e.target.UserId}/${e.target.habit}`, options); //add links and auth
        data = let.body.json();
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

async function deleteHabit(data){
    try{
        const token = localStorage.getItem("token");
        const options = {
            method: "DELETE",
            headers: { "Authorization": token }
    }
        const del = await fetch(`http://18.130.211.172:3000/habits/${data.UserId}/${data.habit}`, options)
        return del.status
    } catch(err){
        console.log("Could not delete habit")}
}


async function UpdateHabit(data){ //just to update streak
    try{
        const token = localStorage.getItem("token");
        const options = {
            method: "PATCH",
            headers: {
              "Authorization": token,
              "Content-Type": "application/json"
            },
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

},{}]},{},[1]);
