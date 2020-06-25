//##################################### modal
window.onload = (function(){ prettyPrint(); });
const menuButton = document.querySelector('#index__text')
const section_header= document.querySelector('#pb__text')
const problem_button = document.querySelector('#pb__text')
let index_tiles = document.querySelectorAll('.index__tile')
const modal = document.querySelector('#modal')
modal.addEventListener('click',modalHandler)
menuButton.addEventListener('click',menuHandler)
problem_button.addEventListener('click',menuHandler)

//content
let questionHtml=document.querySelector('#q_text')
let answerHtml=document.querySelector('#ans_text')
let codeHtml=document.querySelector('#quine')
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

 function populate(id){
   const total= Object.keys(data).length
   if(id < 0 || id > total) return

    let question = data[`item${id}`]["question"]
    let code = data[`item${id}`]["code"]["python"]
    console.log('code: ', code);
    let answer = data[`item${id}`]["answer"]
    let info = data[`item${id}`]["info"]

    questionHtml.textContent=question
    codeHtml.innerHTML=code
    answerHtml.textContent=answer
    infoHtml.textContent=info
     
    codeHtml.classList.remove('prettyprinted')
    prettyPrint()
    

    
    
}

