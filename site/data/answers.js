let answers={}
function genAnsBoilerPlate(num){
    for(let i=1;i<=num;i++){
        let n = i < 10 ? `0${i}` : `${i}`
        answers[`ans${n}`] = new Object()
        answers[`ans${n}`]["js"] = `${n}.js`
        answers[`ans${n}`]["py"] = `${n}.py`
        
    }
}

genAnsBoilerPlate(300)

//############################################################ prev ans object START
// let answers_={
//     ans01:{
//         js:  "01.js",
//         py: "01.py"
//     },    
//     ans02:{
//         js:  "02.js",
//         py: "02.py"
//     },
//     ans03:{
//         js:  "03.js"
//     },
//     ans04:{
//         js:  "04.js"
//     },
//     ans05:{
//         js:  "05.js"
//     },
//     ans06:{
//         js:  "06.js"
//     },
//     ans07:{
//         js:  "07.js"
//     },
//     ans08:{
//         js:  "08.js"
//     },
//     ans09:{
//         js:  "09.js",
//         py: "09.py"
//     },
//     ans10:{
//         js:  "10.js"
//     },
//     ans11:{
//         js:  "11.js",
//         py: "11.py"
//     },
//     ans12:{
//         js:  "12.js",
//         py: "12.py"
//     },
//     ans13:{
//         js:  "13.js",
//         py: "13.py"
//     },
//     ans14:{
//         js:  "14.js",
//         py: "14.py"
//     },
//     ans15:{
//         js:  "15.js",
//         py: "15.py"
//     },
//     ans16:{
//         js:  "16.js",
//         py: "16.py"
//     },
//     ans17:{
//         js:  "17.js",
//         py: "17.py"
//     },
//     ans18:{
//         js:  "18.js",
//         py: "18.py"
//     },
//     ans19:{
//         js:  "19.js",
//         py: "19.py"
//     },
//     ans20:{
//         js:  "20.js",
//         py: "20.py"
//     },
//     ans21:{
//         js:  "21.js",
//         py: "21.py"
//     },
//     ans22:{
//         js:  "22.js",
//         py: "22.py"
//     },
//     ans23:{
//         js:  "23.js",
//         py: "23.py"
//     },
//     ans24:{
//         js:  "24.js",
//         py: "24.py"
//     },
//     ans25:{
//         js:  "25.js",
//         py: "25.py"
//     },
//     ans26:{
//         js:  "26.js",
//         py: "26.py"
//     },
//     ans27:{
//         js:  "27.js",
//         py: "27.py"
//     },
//     ans28:{
//         js:  "28.js",
//         py: "28.py"
//     },
//     ans29:{
//         js:  "29.js",
//         py: "29.py"
//     },
//     ans30:{
//         js:  "30.js",
//         py: "30.py"
//     },
//     ans31:{
//         js:  "31.js",
//         py: "31.py"
//     },
//     ans67:{
//         js:  "67.js",
//         py: "67.py"
//     },
// }

//############################################################ prev ans object END

//the below three functions were my first attempt.
//I tried to load all the answers and then run the remaining code.
// changed this approach and implemented a new method where
// each bit of answer is called only when it is requested for 
// or clicked upon.

// async function fetchData(path) {
//     try {
//         const response = await fetch(path);
//         const exam = await response.text();
//         return exam;
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function getData(type, path){
//     let _path;
//     if(type=='js'){
//         _path = `javascript/${path}`
//     }else if(type=='py'){
//         _path=`python/${path}`
//     }

//     let dt = await fetchData(_path);
//     return dt
// }
// let answersLoaded = false
// async function main(){
//     let count = Object.keys(answers).length
//     for(let i=0;i<count;i++){
//         let key = Object.keys(answers)[i];
        
//         let subCount = Object.keys(answers[key]).length
        
//         for(let j=0;j<subCount;j++){
//             let subKey = Object.keys(answers[key])[j]
//             let item = answers[key][subKey]
//             answers[key][subKey] = await getData(subKey ,item)
//         }
//     }
//     answersLoaded=true
// }

//main()


