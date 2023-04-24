/*      toggle style switcher   */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

//hide style switcher on scroll
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
//         theme color
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");

        }
    })
}

// dark and light theme mode
const Daynight = document.querySelector('.day-night')
Daynight.addEventListener(('click'), () =>{
    document.querySelector('i').classList.toggle('fa-sun')
    document.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
})
window.addEventListener('load', ()=>{
    if(document.body.classList.contains('dark')){
        Daynight.querySelector('i').classList.add('fa-sun')
    }
    else{
        Daynight.querySelector('i').classList.add('fa-moon')
    }
})
