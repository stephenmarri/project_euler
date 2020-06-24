//##################################### modal
const menuButton = document.querySelector('#index__text')
const section_header= document.querySelector('#pb__text')
const problem_button = document.querySelector('#problem_button span')
let index_tiles = document.querySelectorAll('.index__tile')
const modal = document.querySelector('#modal')
modal.addEventListener('click',modalHandler)
menuButton.addEventListener('click',menuHandler)
problem_button.addEventListener('click',menuHandler)

//content
let questionHtml=document.querySelector('#q_text')
let answerHtml=document.querySelector('#ans_text')
let codeHtml=document.querySelector('#code_text')
let infoHtml=document.querySelector('#info_text')

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
        populate(event.target.id)
    }
}
//##################################### modal

async function populate(id){
   const total= Object.keys(data).length
   if(id < 0 || id > total) return

    let question = data[`item${id}`]["question"]
    let code = data[`item${id}`]["code"]
    let answer = data[`item${id}`]["answer"]
    let info = data[`item${id}`]["info"]

    questionHtml.textContent=question
    codeHtml.textContent=code
    answerHtml.textContent=answer
    infoHtml.textContent=info
     

    fetch(data[`item${id}`]["code"]["python"], {mode: "no-cors"}).then(res => res.text()).then(text => console.log(text))

    
    
}

