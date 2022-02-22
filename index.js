function first(text){
    
 const letrasMinusculas = text.toLowerCase()
 
  const re = /\s+/
  const nameList = letrasMinusculas.split(re)

  let result = ''
  
for(let i = 0; i < nameList.length; i++){
    nameList[i] = nameList[i].split('')
    nameList[i][0] = nameList[i][0].toUpperCase()
     
    result+=nameList[i].join('')
    
    if(nameList.length-1 > i){
          result+=' '
    }
    
}
  
  return result

}


console.log(first('Teste oLa Palavra'))
