//##################################### modal
const loader = document.querySelector('#loader_div')
const wrapper = document.querySelector('.wrapper')
const content_wrapper = document.querySelector('#content__wrapper')
const intro = document.querySelector('#intro__wrapper')
const prob_one = document.querySelector('#prob_one')
let intro_sol_dom = document.querySelector('#sol_count') 


window.onload = (async function(){ 
    // while(!answersLoaded){
    //     await sleep(1);
    // }
    // while( typeof(data)!="object"){
    //     await sleep(1);
    // }
    await sleep(3000)
    //diabling loader
    loader.style.display="none"
    wrapper.style.display="block"
    //diabling loader
    //populate("01"); 
    populateQuestions();
    prettyPrint(); 
});
//populateQuestions();
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
    document.querySelector("body").style.overflow = "hidden";
}

function modalHandler(){
    
    if(event.target.id == "modal"){
        modal.classList.toggle('active')
        document.querySelector("body").style.overflow = "unset";
    }else{ 
        if(event.target.id=="00"){
            intro.style.display="block"
            content_wrapper.style.display="none"
        }else{
            intro.style.display="none"
            content_wrapper.style.display="block"
            populate(event.target.id)
        }
        index_tiles = document.querySelectorAll('.index__tile')
        let prob = event.target
        index_tiles.forEach(x=>x.classList.remove('active'))
        prob.classList.add('active')
        section_header.textContent=String(event.target.textContent).replace(" -","")
        
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

    questionHtml.innerHTML=question
    questionTitle.textContent=q_title
    answerHtml.textContent=answer
    infoHtml.innerHTML=info
    
    
    populateBtns(id)
    populateCode(id)
     
    
    code_btns= document.querySelectorAll('.c_btn')
    code_btns.forEach(x=>x.addEventListener('click',changeCode))
    MathJax.typeset()

    
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
    try {
        let btn = document.querySelector('#code .active').id    
        let ans = data[`item${id}`]["code"][`${btn}`](id)
        codeHtml.innerHTML= ans
        codeHtml.classList.remove('prettyprinted')
        prettyPrint()
        
    } catch (error) {         
        codeHtml.innerHTML = `Huh! Something's wrong. Try another question.`
    }
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
    intro_sol_dom.textContent = count
    let modal=document.querySelector('#modal__index')
    for(let i=0;i<count;i++){
        let key = Object.keys(data)[i]
        let html = document.createElement('div')
        html.classList.add('index__tile')
        if(i<9){
            html.id=`${data[key]["id"]}`
        }else{
            html.id=`${data[key]["id"]}`
        }
        html.textContent=`Problem - ${html.id}`
        modal.appendChild(html)
    }
}

//############################################# intro handler
prob_one.addEventListener('click',()=>{
    intro.style.display="none"
    content_wrapper.style.display="block"
    index_tiles = document.querySelectorAll('.index__tile')
    let prob = document.querySelector(`#${CSS.escape("01")}`)
    index_tiles.forEach(x=>x.classList.remove('active'))
    prob.classList.add('active')
    section_header.textContent=String("Problem 01")
    
    populate("01")
})