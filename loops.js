var forLoop= array =>{
  for(let i=0; i<25; i+=1){
    if(i===1) {array.push(`I am 1 strange loop.`)}
    else {array.push(`I am ${i} strange loops.`)}
  }
  return array;
}
