// Switch toggler
const styleSwitchToggler = document.querySelector(".style-switcher-toggler");

styleSwitchToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

//Hide Style-Switch

window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

// Theme colors changing
const alternateColors = document.querySelectorAll(".alternate-style");

function setActiveStyle(color)
{
    console.log(color);
    alternateColors.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

// dark light theme

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

// window.addEventListener("load",() => {
//     if(document.body.classList.contains("dark"))
//     {
//         dayNight.querySelector("i").classList.add("fa-sun");
//     }
//     else
//     {
//         dayNight.querySelector("i").classList.add("fa-moon");    
//     }

// Replace the existing load event listener with this:
window.addEventListener("load",() => {
    // Force dark theme on all pages
    document.body.classList.add("dark");
    
    // Set sun icon for dark mode
    if(dayNight && dayNight.querySelector("i")) {
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    
    // Optional: Load saved color preference
    const savedColor = localStorage.getItem("color");
    if(savedColor) {
        setActiveStyle(savedColor);
    }

})




















