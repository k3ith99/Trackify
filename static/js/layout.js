const signin = document.getElementById("signin");
const homepage = document.getElementById("homepage-section")
const habits = document.getElementById("habits-section")
const custom = document.getElementById("custom")
const requests = require('./requests');




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





