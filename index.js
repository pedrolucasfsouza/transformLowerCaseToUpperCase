function first(text){

 
  const re = /\s+/
  const textList = text.toLowerCase().split(re)
 
  
  
for(let i = 0; i < textList.length; i++){
  
    const word = textList[i]
    textList[i] = word[0].toUpperCase() + word.slice(1);
    }
  
  return textList.join(" ")
    
}
  


console.log(first('Ola fdhd Mundo'))
