let  data;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function demo() {
while(!answersLoaded){
    await sleep(2000);
}
data = {
    item01:{
        id:01,
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
        id:02,
        question:questions[2],
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
        id:03,
        question:questions[3],
        code:{
            count:1,
            JavaScript:"this is javascript"
            
        },
        answer:"6857",
        info:{
            question_link:"https://projecteuler.net/problem=3",            
        }
    },
    item04:{
        id:04,
        question:questions[4],
        code:{
            count:1,
            JavaScript:answers.ans04.js
            
        },
        answer:"6857",
        info:{
            question_link:"https://projecteuler.net/problem=4",            
        }
    },
    item05:{
        id:05,
        question:questions[5],
        code:{
            count:1,
            JavaScript:answers.ans05.js
            
        },
        answer:"6857",
        info:{
            question_link:"https://projecteuler.net/problem=5",            
        }
    },
    item06:{
        id:06,
        question:questions[6],
        code:{
            count:1,
            JavaScript:answers.ans06.js
            
        },
        answer:"6857",
        info:{
            question_link:"https://projecteuler.net/problem=6",            
        }
    },
    item07:{
        id:07,
        question:questions[7],
        code:{
            count:1,
            JavaScript:answers.ans07.js
            
        },
        answer:"6857",
        info:{
            question_link:"https://projecteuler.net/problem=7",            
        }
    },
    item08:{
        id:08,
        question:questions[8],
        code:{
            count:1,
            JavaScript:answers.ans08.js            
        },
        answer:"6857",
        info:{
            question_link:"https://projecteuler.net/problem=8",            
        }
    },
    item09:{
        id:09,
        question:questions[9],
        code:{
            count:1,
            JavaScript:answers.ans09.js            
        },
        answer:"6857",
        info:{
            question_link:"https://projecteuler.net/problem=9",            
        }
    },
    item10:{
        id:10,
        question:questions[10],
        code:{
            count:1,
            JavaScript:answers.ans10.js            
        },
        answer:"6857",
        info:{
            question_link:"https://projecteuler.net/problem=10",            
        }
    },
    item11:{
        id:11,
        question:questions[11],
        code:{
            count:2,
            JavaScript:answers.ans11.js,
            Python: answers.ans11.py           
        },
        answer:"6857",
        info:{
            question_link:"https://projecteuler.net/problem=11",            
        }
    },
    item12:{
        id:12,
        question:questions[12],
        code:{
            count:2,
            JavaScript:answers.ans12.js,
            Python: answers.ans12.py            
        },
        answer:"6857",
        info:{
            question_link:"https://projecteuler.net/problem=12",            
        }
    }
}
}

demo();
