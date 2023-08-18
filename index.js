function introduction(name) {
  const Name = name;
  return (`Hi, my name is ${Name}.`);
  
 
}

function introductionWithLanguage(name, lanuage) {

  return (`Hi, my name is ${name} and I am learning to program in ${lanuage}.`);

}


function introductionWithLanguageOptional(name , lanuage = "JavaScript") {

 

  return (`Hi, my name is ${name} and I am learning to program in ${lanuage}.`);

}
