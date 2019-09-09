// Open avatar list menu
const avatarMenu = document.querySelector('#avatar ~ ul')


document.addEventListener('click',e=>{
    if(e.target.id === 'avatar'){
        avatarMenu.classList.toggle('visible');
        return
    }
    avatarMenu.classList.remove('visible')
})

document.querySelector('#logout').addEventListener('click', async e=>{
    await fetch('/logout')
})