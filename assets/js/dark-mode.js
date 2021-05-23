let theme = localStorage.getItem("theme");
const preferenceQuery = window.matchMedia("(prefers-color-scheme: dark)");
if (theme !== "dark" && theme !== "light") {
    theme = preferenceQuery.matches ? "dark" : "light";
}
document.documentElement.setAttribute("data-theme", theme);
localStorage.setItem("theme", theme);

const updateDarkToggleButton = () => {
    document.querySelector('#dark-mode-toggle i').className = theme === 'dark' ? 'fas fa-sun': 'fas fa-moon';
}

const toggleDarkMode = () => {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    Array.from(document.querySelectorAll('img.link-icon'), item => {
        item.setAttribute("data-theme", theme);
    })
    updateDarkToggleButton();
}

window.addEventListener('load', () => {
    updateDarkToggleButton();
    document.querySelector('#dark-mode-toggle').style.display = "block";
    document.querySelector('#dark-mode-toggle').className = 'float-button show';
    Array.from(document.querySelectorAll('img.link-icon'), item => {
        item.setAttribute("data-theme", theme);
    })
    document.querySelector('#dark-mode-toggle').addEventListener('click', toggleDarkMode);
    preferenceQuery.addEventListener('change', (event) => {
        theme = event.matches ? "dark" : "light";
        updateDarkToggleButton();
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    });
})
