const signin = document.getElementById("signin");
const homepage = document.getElementById("homepage-section")
const habits = document.getElementById("habits-section")
const custom = document.getElementById("custom")



const showTextbox = (e) => {
    e.preventDefault();
    const textbox = document.getElementById('textbox')
    const newText = document.createElement('input')
    newText.setAttribute('type', 'text');
    newText.append(textbox);
}

custom.addEventListener('click', showTextbox)


signin.addEventListener('click', showHabitsSection)

function showHabitsSection(e) {
    e.preventDefault();
    homepage.innerHTML = e.target.style.display('none');
}
