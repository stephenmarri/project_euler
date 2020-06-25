let answers={
    ans01:{
        js:  "01.js",
        py: "not solved yet"
    },
    
    ans02:{
        js:  "02.js",
        py: "not solved yet"
    },

    ans03:{
        js:  "03.js",
        py: "not solved yet"
    },
    ans04:{
        js:  "04.js",
        py: "not solved yet"
    }
}

async function fetchData(path) {
    try {
        const response = await fetch(path);
        const exam = await response.text();
        return exam;
    } catch (error) {
        console.error(error);
    }
}

async function getData(type, path){
    let _path;
    if(type=='js'){
        _path = `../javascript/${path}`
    }else if(type=='py'){
        _path=`../python/${path}`
    }

    let dt = await fetchData(_path);
    return dt
}
let answersLoaded = false
async function main(){
    let count = Object.keys(answers).length
    for(let i=0;i<count;i++){
        let key = Object.keys(answers)[i];
        
        let subCount = Object.keys(answers[key]).length
        
        for(let j=0;j<subCount;j++){
            let subKey = Object.keys(answers[key])[j]
            let item = answers[key][subKey]
            answers[key][subKey] = await getData(subKey ,item)
        }
    }
    answersLoaded=true
}

main()


