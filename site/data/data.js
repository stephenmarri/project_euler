let  data;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function demo() {
// while(!answersLoaded){
//     await sleep(1);
// }
data = {
    item01:{
        id:'01',
        question:questions[1].text,
        q_title:questions[1].title,
        code:{
            count:1,
            JavaScript:answers.ans01.js
        },
        answer:"233168",
        info:{
            question_link:"https://projecteuler.net/problem=1",            
        }
    },
    item02:{
        id:'02',
        question:questions[2].text,
        q_title:questions[2].title,
        code:{
            count:1,
            JavaScript:answers.ans02.js
        },
        answer:"4613732",
        info:{
            question_link:"https://projecteuler.net/problem=2",            
        }
    },
    item03:{
        id:'03',
        question:questions[3].text,
        q_title:questions[3].title,
        code:{
            count:1,
            JavaScript:answers.ans03.js
            
        },
        answer:"6857",
        info:{
            question_link:"https://projecteuler.net/problem=3",            
        }
    },
    item04:{
        id:'04',
        question:questions[4].text,
        q_title:questions[4].title,
        code:{
            count:1,
            JavaScript:answers.ans04.js
            
        },
        answer:"906609",
        info:{
            question_link:"https://projecteuler.net/problem=4",            
        }
    },
    item05:{
        id:'05',
        question:questions[5].text,
        q_title:questions[5].title,
        code:{
            count:1,
            JavaScript:answers.ans05.js
            
        },
        answer:"6823279256057",
        info:{
            question_link:"https://projecteuler.net/problem=5",            
        }
    },
    item06:{
        id:'06',
        question:questions[6].text,
        q_title:questions[6].title,
        code:{
            count:1,
            JavaScript:answers.ans06.js
            
        },
        answer:"25164150",
        info:{
            question_link:"https://projecteuler.net/problem=6",            
        }
    },
    item07:{
        id:'07',
        question:questions[7].text,
        q_title:questions[7].title,
        code:{
            count:1,
            JavaScript:answers.ans07.js
            
        },
        answer:"104743",
        info:{
            question_link:"https://projecteuler.net/problem=7",            
        }
    },
    item08:{
        id:'08',
        question:questions[8].text,
        q_title:questions[8].title,
        code:{
            count:1,
            JavaScript:answers.ans08.js            
        },
        answer:"23514624000",
        info:{
            question_link:"https://projecteuler.net/problem=8",            
        }
    },
    item09:{
        id:'09',
        question:questions[9].text,
        q_title:questions[9].title,
        code:{
            count:2,
            JavaScript:answers.ans09.js,
            Python: answers.ans09.py           
        },
        answer:"31875000",
        info:{
            question_link:"https://projecteuler.net/problem=9",            
        }
    },
    item10:{
        id:10,
        question:questions[10].text,
        q_title:questions[10].title,
        code:{
            count:1,
            JavaScript:answers.ans10.js            
        },
        answer:"142913828922",
        info:{
            question_link:"https://projecteuler.net/problem=10",            
        }
    },
    item11:{
        id:11,
        question:questions[11].text,
        q_title:questions[11].title,
        code:{
            count:2,
            JavaScript:answers.ans11.js,
            Python: answers.ans11.py           
        },
        answer:"70600674",
        info:{
            question_link:"https://projecteuler.net/problem=11",            
        }
    },
    item12:{
        id:12,
        question:questions[12].text,
        q_title:questions[12].title,
        code:{
            count:2,
            JavaScript:answers.ans12.js,
            Python: answers.ans12.py            
        },
        answer:"76576500",
        info:{
            question_link:"https://projecteuler.net/problem=12",            
        }
    },
    item13:{
        id:13,
        question:questions[13].text,
        q_title:questions[13].title,
        code:{
            count:2,
            JavaScript:answers.ans13.js,
            Python: answers.ans13.py            
        },
        answer:"5537376230",
        info:{
            question_link:"https://projecteuler.net/problem=13",            
        }
    },
item14:{
        id:14,
        question:questions[14].text,
        q_title:questions[14].title,
        code:{
            count:2,
            JavaScript:answers.ans14.js,
            Python: answers.ans14.py            
        },
        answer:"837799",
        info:{
            question_link:"https://projecteuler.net/problem=14",            
        }
    },
item15:{
        id:15,
        question:questions[15].text,
        q_title:questions[15].title,
        code:{
            count:2,
            JavaScript:answers.ans15.js,
            Python: answers.ans15.py            
        },
        answer:"137846528820",
        info:{
            question_link:"https://projecteuler.net/problem=15",            
        }
    },
item16:{
        id:16,
        question:questions[16].text,
        q_title:questions[16].title,
        code:{
            count:2,
            JavaScript:answers.ans16.js,
            Python: answers.ans16.py            
        },
        answer:"1366",
        info:{
            question_link:"https://projecteuler.net/problem=16",            
        }
    },
item17:{
        id:17,
        question:questions[17].text,
        q_title:questions[17].title,
        code:{
            count:2,
            JavaScript:answers.ans17.js,
            Python: answers.ans17.py            
        },
        answer:"21124",
        info:{
            question_link:"https://projecteuler.net/problem=17",            
        }
    },
item18:{
        id:18,
        question:questions[18].text,
        q_title:questions[18].title,
        code:{
            count:2,
            JavaScript:answers.ans18.js,
            Python: answers.ans18.py            
        },
        answer:"1074",
        info:{
            question_link:"https://projecteuler.net/problem=18",            
        }
    },
item19:{
        id:19,
        question:questions[19].text,
        q_title:questions[19].title,
        code:{
            count:2,
            JavaScript:answers.ans19.js,
            Python: answers.ans19.py            
        },
        answer:"171",
        info:{
            question_link:"https://projecteuler.net/problem=19",            
        }
    },
item20:{
        id:20,
        question:questions[20].text,
        q_title:questions[20].title,
        code:{
            count:2,
            JavaScript:answers.ans20.js,
            Python: answers.ans20.py            
        },
        answer:"648",
        info:{
            question_link:"https://projecteuler.net/problem=20",            
        }
    },
item21:{
        id:21,
        question:questions[21].text,
        q_title:questions[21].title,
        code:{
            count:2,
            JavaScript:answers.ans21.js,
            Python: answers.ans21.py            
        },
        answer:"31626",
        info:{
            question_link:"https://projecteuler.net/problem=21",            
        }
    },
item22:{
        id:22,
        question:questions[22].text,
        q_title:questions[22].title,
        code:{
            count:2,
            JavaScript:answers.ans22.js,
            Python: answers.ans22.py            
        },
        answer:"871198282",
        info:{
            question_link:"https://projecteuler.net/problem=22",            
        }
    },
item23:{
        id:23,
        question:questions[23].text,
        q_title:questions[23].title,
        code:{
            count:2,
            JavaScript:answers.ans23.js,
            Python: answers.ans23.py            
        },
        answer:"4179871",
        info:{
            question_link:"https://projecteuler.net/problem=23",            
        }
    },
item24:{
        id:24,
        question:questions[24].text,
        q_title:questions[24].title,
        code:{
            count:2,
            JavaScript:answers.ans24.js,
            Python: answers.ans24.py            
        },
        answer:"2783915460",
        info:{
            question_link:"https://projecteuler.net/problem=24",            
        }
    },
item25:{
        id:25,
        question:questions[25].text,
        q_title:questions[25].title,
        code:{
            count:2,
            JavaScript:answers.ans25.js,
            Python: answers.ans25.py            
        },
        answer:"4782",
        info:{
            question_link:"https://projecteuler.net/problem=25",            
        }
    },
item26:{
        id:26,
        question:questions[26].text,
        q_title:questions[26].title,
        code:{
            count:2,
            JavaScript:answers.ans26.js,
            Python: answers.ans26.py            
        },
        answer:"983",
        info:{
            question_link:"https://projecteuler.net/problem=26",            
        }
    },
item27:{
        id:27,
        question:questions[27].text,
        q_title:questions[27].title,
        code:{
            count:2,
            JavaScript:answers.ans27.js,
            Python: answers.ans27.py            
        },
        answer:"-59231",
        info:{
            question_link:"https://projecteuler.net/problem=27",            
        }
    },
item28:{
        id:28,
        question:questions[28].text,
        q_title:questions[28].title,
        code:{
            count:2,
            JavaScript:answers.ans28.js,
            Python: answers.ans28.py            
        },
        answer:"669171001",
        info:{
            question_link:"https://projecteuler.net/problem=28",            
        }
    },
item29:{
        id:29,
        question:questions[29].text,
        q_title:questions[29].title,
        code:{
            count:2,
            JavaScript:answers.ans29.js,
            Python: answers.ans29.py            
        },
        answer:"9183",
        info:{
            question_link:"https://projecteuler.net/problem=29",            
        }
    },
item30:{
        id:30,
        question:questions[30].text,
        q_title:questions[30].title,
        code:{
            count:2,
            JavaScript:answers.ans30.js,
            Python: answers.ans30.py            
        },
        answer:"443839",
        info:{
            question_link:"https://projecteuler.net/problem=30",            
        }
    },
item31:{
        id:31,
        question:questions[31].text,
        q_title:questions[31].title,
        code:{
            count:2,
            JavaScript: answers.ans31.js ,
            Python: answers.ans31.py            
        },
        answer:"73682",
        info:{
            question_link:"https://projecteuler.net/problem=31",            
        }
    },
    item67:{
        id:67,
        question:questions[67].text,
        q_title:questions[67].title,
        code:{
            count:2,
            JavaScript: "",
            Python: "",
        },
        answer:"7273",
        info:{
            question_link:"https://projecteuler.net/problem=67",            
        }
    }
}
}

demo();


// the below code replaces the values of JavaScript and Python keys of object
// code of each item and replaces them with either ansGenJS or ansGenPy respectively.
// these functions then check if the answer is already loaded. If not it will fetch the answer.
// generate buildataCode by iteration
function genBuild(){
    for( i in data){
        for(x in data[i]["code"]){
            let id = String(data[i]["id"])
            if(x == "JavaScript"){
                buildDataCode(id,"js")
            }else if(x == "Python"){
               buildDataCode(id,"py")
            }
        }
    }
}

genBuild()


function buildDataCode(i,type){
    if(type == "js"){
        data[`item${i}`]["code"]["JavaScript"] = ansGenJS
    }
    if(type == "py"){        
        data[`item${i}`]["code"]["Python"] = ansGenPY
    }
}   

function ansGenJS(no){
    let type = "js"
    let dir = "../javascript"
        if( answers[`ans${no}`][`${type}`] == `${no}.${type}` ){
            fetch(`${dir}/${no}.${type}`).then(x => x.text())
            .then(x => answers[`ans${no}`][`${type}`]  = x)
            return(`Loading answer for problem ${no}...`)
        } 
        else{
            return(answers[`ans${no}`][`${type}`] )
        }
    }
    function ansGenPY(no){
        let type = "py"
        let dir = "../python"
        if( answers[`ans${no}`][`${type}`] == `${no}.${type}` ){
            fetch(`${dir}/${no}.${type}`).then(x => x.text())
            .then(x => answers[`ans${no}`][`${type}`]  = x)
            return(`Loading answer for problem ${no}...`)
        } 
        else{
            return(answers[`ans${no}`][`${type}`] )
        }
    }



// function ansGen(no, type){
//         console.log(this);
//         let dir = type == "js" ? "javascript" : "python"
//             if( answers[`ans${no}`][`${type}`] == `${no}.${type}` ){
//                 fetch(`${dir}/${no}.${type}`).then(x => x.text())
//                 .then(x => answers[`ans${no}`][`${type}`]  = x)
//                 return("Loading answer for 67")
//             } 
//             else{
//                 return(answers[`ans${no}`][`${type}`] )
//             }
// }