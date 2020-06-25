function getAnswer(name,type){
    console.log('inside');
    let path;
    if(type=='js'){
        path = '../javascript/'+name
    }else if(type == 'py'){
        path = '../python/'+name
    }
    console.log(path);

    let result=""
    fetch(path)
   .then( r => r.text() )
   .then( t =>  result = t)
   return result
}

const answers={
    ans01:{
        js: getAnswer("01.js",'js'),
        py:getAnswer("11.py",'py')
    },
    
    ans02:{
        js: getAnswer("02.js",'js'),
        py:getAnswer("11.py",'py')
    },

    ans03:{
        js: getAnswer("03.js",'js'),
        py:getAnswer("11.py",'py')
    }
}