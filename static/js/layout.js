const signin = document.getElementById("signin");
const homepage = document.getElementById("homepage-section")
const habits = document.getElementById("habits-section")

signin.addEventListener('click', showHabitsSection)

function showHabitsSection(e) {
    e.preventDefault();
    homepage.innerHTML = e.target.style.display.none;
}
