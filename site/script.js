//##################################### modal
const menuButton = document.querySelector('#index__text')
const section_header= document.querySelector('#pb__text')
const problem_button = document.querySelector('#problem_button span')
let index_tiles = document.querySelectorAll('.index__tile')
const modal = document.querySelector('#modal')
modal.addEventListener('click',modalHandler)
menuButton.addEventListener('click',menuHandler)
problem_button.addEventListener('click',menuHandler)

function menuHandler(){
    modal.classList.toggle('active')
}

function modalHandler(){
    if(event.target.id == "modal"){
        modal.classList.toggle('active')
    }else{ 
        let prob = event.target
        index_tiles.forEach(x=>x.classList.remove('active'))
        prob.classList.add('active')
        section_header.textContent=String(event.target.textContent).replace(" -","")
    }
}
//##################################### modal