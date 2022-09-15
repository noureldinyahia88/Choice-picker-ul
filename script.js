const textarea = document.querySelector('textarea')
const tagesEl = document.getElementById('tages')

textarea.addEventListener('keyup',(e)=>{
    creatTage(e.target.value)
    if(e.key==='Enter'){
        setTimeout(()=>{
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function creatTage(input) {
    const tags = input.split(',').filter(tag=> tag.trim() !== '').map(tag=>tag.trim())
    tagesEl.innerHTML = ''

    tags.forEach(tag=>{
        let tagel = document.createElement('span')
        tagel.classList.add('tag')
        tagel.innerText = tag
        tagesEl.appendChild(tagel )
    })
}
function randomSelect() {
    const times = 30
    const interval = setInterval(()=>{
        const randomTage = pickRandomTag()
        highlightTag(randomTage)
        setTimeout(()=>{
            unhighlightTag(randomTage)
        }, 100)
    }, 100)
    setTimeout(() =>{
        clearInterval(interval)
        setTimeout(()=>{
            const ramtage = pickRandomTag()
            highlightTag(ramtage)
        })
    }, times * 100)
}
function pickRandomTag() {
    const tages = document.querySelectorAll('.tag')
    return tages[Math.floor(Math.random() * tages.length)]
}
function highlightTag(tag) {
    tag.classList.add('highlight')
}
function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}