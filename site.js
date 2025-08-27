const mainContentSection = document.querySelector('h2')
mainContentSection.style.color = 'red'

const activeElements = document.querySelectorAll('.active')
activeElements.forEach(el => el.style.border = '1px solid red')

//The other way to change node elements when questry selector all is ran
for (let i = 0; i < activeElements.length; i++)
{
    activeElements[i].style.border = '1px solid red'
}

//const footerLink = document.querySelector('footer p a')
//footerLink.style.textDecoration = 'underline'

const gitLink = document.querySelector('#gitLink')
gitLink.style.textDecoration = 'underline'

document.body.style.backgroundColor = 'light grey'
document.title = "Ryan's website"

const contact = document.querySelector('#contact')

contact.addEventListener('mouseover', () => {
    contact.parentElement.style.backgroundColor = 'lightblue'
})