//##################################### modal
window.onload = (async function(){ 
    while(!answersLoaded){
        await sleep(20);
    }
    populateQuestions();
    populate("01"); 
    prettyPrint(); 
});
const menuButton = document.querySelector('#index__text')
const section_header= document.querySelector('#pb__text')
const problem_button = document.querySelector('#pb__text')
let index_tiles;
let code_btns;
let current_ID;
const modal = document.querySelector('#modal')
modal.addEventListener('click',modalHandler)
menuButton.addEventListener('click',menuHandler)
problem_button.addEventListener('click',menuHandler)

//content
let questionHtml=document.querySelector('#q_text')
let questionTitle= document.querySelector('#q_title')
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
        index_tiles = document.querySelectorAll('.index__tile')
        let prob = event.target
        index_tiles.forEach(x=>x.classList.remove('active'))
        prob.classList.add('active')
        section_header.textContent=String(event.target.textContent).replace(" -","")
        populate(event.target.id)
    }
}
//##################################### modal

 function populate(id){
    current_ID=id
    const total= Object.keys(data).length
    if(id < 0) return

    let question = data[`item${id}`]["question"]
    let q_title = data[`item${id}`]["q_title"]
    let code = data[`item${id}`]["code"]["Python"]
    let answer = data[`item${id}`]["answer"]
    let info = populateInfo(id)

    questionHtml.textContent=question
    questionTitle.textContent=q_title
    answerHtml.textContent=answer
    infoHtml.innerHTML=info
    
    
    populateBtns(id)
    populateCode(id)
     
    
    code_btns= document.querySelectorAll('.c_btn')
    code_btns.forEach(x=>x.addEventListener('click',changeCode))
    
    }

function populateBtns(id){
    let count = data[`item${id}`]["code"]["count"]
    
    let htmlEle = document.querySelector('#code #block__header')
    let act="";
    let html="<span>Code</span>"
    for(let i=0;i<count;i++){
        if(i==0){
            act ="active"
        }else{
            act=""
        }
        html+=`<span id=${Object.keys(data[`item${id}`]["code"])[i+1]} class="c_btn ${act}">${Object.keys(data[`item${id}`]["code"])[i+1]}</span>`
    }
    htmlEle.innerHTML=html

}

function populateCode(id){
    let btn = document.querySelector('#code .active').id    
    let ans = data[`item${id}`]["code"][`${btn}`]
    codeHtml.innerHTML= ans
    codeHtml.classList.remove('prettyprinted')
    prettyPrint()
}

function changeCode(){
    code_btns.forEach(x=>x.classList.remove('active'))
    this.classList.add('active')
    populateCode(current_ID)
}

function populateInfo(id){
    let html="";
    html+=`<a href="${data[`item${id}`]["info"]["question_link"]}" target=_blank>Link</a> to question.`
    return html
}

function populateQuestions(){
    let count = Object.keys(data).length
    let modal=document.querySelector('#modal__index')
    for(let i=0;i<count;i++){
        let key = Object.keys(data)[i]
        let html = document.createElement('div')
        html.classList.add('index__tile')
        if(i<9){
            html.id=`0${data[key]["id"]}`
        }else{
            html.id=`${data[key]["id"]}`
        }
        html.textContent=`Problem - ${html.id}`
        modal.appendChild(html)
    }
}

