(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const signin = document.getElementById("signin");
const homepage = document.getElementById("homepage-section")
const habits = document.getElementById("habits-section")
const custom = document.getElementById("custom")
const requests = require('./requests');
const body = document.querySelector('body')




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

body.addEventListener('click', showHomepage)

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
    let labelE = document.createElement('label')
    let labelP = document.createElement('label')
    let signin = document.createElement('button')
    let register = document.createElement('button')

    loginDiv.setAttribute('id', 'login')
    loginDiv.setAttribute('style', 'background-color:#a4c48f')
    loginDiv.classList.add('shadow', 'rounded-3', 'm-3', 'p-5', 'text-black')
    login.textContent += "Sign in/Register"
    form.setAttribute('action', 'submit')
    divE.setAttribute('class', 'form-floating')
    divP.classList.add('form-floating', 'mt-1')
    email.setAttribute('type', 'email')
    email.setAttribute('id', 'floatingInput')
    email.setAttribute('class', 'form-control')
    email.setAttribute('placeholder', 'name@example.com') 
    password.setAttribute('type', 'password')
    password.classList.add('text-black', 'form-control')
    password.setAttribute('id', 'floatingPassword')
    password.setAttribute('placeholder', 'Password')
    labelE.setAttribute('for', 'floatingInput')
    labelE.textContent = "Email address"
    labelP.setAttribute('for', 'floatingPassword')
    labelP.setAttribute('style', 'color:black')
    labelP.innerHTML = "Password"
    signin.classList.add('w-100', 'mt-3', 'btn', 'btn-lg', 'btn-outline-dark')
    signin.setAttribute('type', 'submit')
    register.classList.add('w-100', 'mt-3', 'btn', 'btn-lg', 'btn-outline-dark')
    register.setAttribute('type', 'submit')
    signin.innerHTML = "Sign in"
    register.innerHTML = "Register"

    email.append(labelE)
    password.append(labelP)
    divE.append(email)
    divP.append(password)
    form.append(divE)
    form.append(divP)
    form.append(signin)
    form.append(register)
    loginDiv.append(login)
    loginDiv.append(form)
    sideBoxesDiv.append(loginDiv)

    //id=testimonials
    let longBox = document.getElementById('long-box')
    let testDiv = document.createElement('div')
    let test = document.createElement('h2')
    let paraT = document.createElement('p')

    testDiv.setAttribute('id', 'testimonials')
    testDiv.classList.add('shadow', 'h-100', 'm-3', 'p-5', 'text-black', 'rounded-3')
    testDiv.setAttribute('style', 'background-color:#a4c48f')
    test.textContent += "Testimonials"
    paraT.textContent += "This app is great!", "I feel so motivated to reach my goals with this tracker"

    testDiv.append(test)
    testDiv.append(paraT)
    longBox.append(testDiv)

}



// const habitCards = document.getElementById("habit-cards")
// //const habitsHTML = require("../templates/habits")
// signin.addEventListener('click', showHabitsSection)
// const deletebtn = document.getElementById("delete")
// const updatebtn = document.getElementById("complete")









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
const layout = require("./layout")


async function requestReg(e){
    e.preventDefault();
    try{
        const options = {
            method: "POST", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const data = await fetch("http://18.130.211.172:3000/auth/register", options)
        const response = await data.json();
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
        const data = await fetch("http://18.130.211.172:3000/auth/login", options)
        const response = await data.json();
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
        };
        const data = await fetch(`http://18.130.211.172:3000/habits/${data.UserId}`, options); //add links and auth
        //find a way to store userid in browser using token, localstorage 
        //store token in localstorage
        //add login and register fetch requests functions
        // /auth/register do login too on this side
        // /auth/login
        //using hashes

        const response = data.json();
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
        const data = { streak: e.target.value
        }
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

module.exports = { UpdateHabit , getSpecificHabits , getUserHabits , deleteHabit, addHabit, requestLogin, requestReg}

},{"./layout":1}]},{},[1]);
