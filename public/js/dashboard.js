// Open avatar list menu
const avatarMenu = document.querySelector('#avatar ~ ul')

const updateContent = () => {
    const path = window.location.pathname.slice(1);
    [...document.querySelectorAll('#content > *')].map(item => {
        if (item.dataset.id === path) {
            item.classList.add('visible')
        } else {
            item.classList.remove('visible')
        }
    })
}
document.addEventListener('click', e => {
    //avatar toggle visibility
    if (e.target.id === 'avatar') {
        avatarMenu.classList.toggle('visible');
        return
    }
    avatarMenu.classList.remove('visible')
    //history update
    if (e.target.nodeName === 'A' && e.target.parentNode.parentNode.parentNode.nodeName === 'ASIDE') {
        const path = e.target.innerHTML.toLowerCase()
        e.preventDefault()
        history.pushState({
            id: path
        }, 'AvenaDB', `${window.location.origin}/${path}`);
        updateContent()
        return
    }

})


//RX (recepta)
document.querySelector('#search > button').addEventListener('click',async e=>{
    const rxID = document.querySelector('#search > input').value;
    if(!rxID){
        console.error('error')
        return 
    }
    const response = await fetch(`${window.location.origin}/rx/${rxID}`);
    const { data } = await response.json();
    const table = document.querySelector('div[data-id="recepty"] > table > tbody');
    table.innerHTML='';
    if(data.length === 0 ){
        console.log('no data')    
        return 
    }
    data.map(item => {
        let newRow = table.insertRow();
        Object.values(item).map(value => {
            let newCell = newRow.insertCell()
            // Append a text node to the cell
            let newText = document.createTextNode(value);
            newCell.appendChild(newText);
        })
    })
})


document.querySelector('#logout').addEventListener('click', async e => {
    await fetch('/logout')
    document.location.href = '/login'

})

window.addEventListener('popstate', e => {
    updateContent()
})