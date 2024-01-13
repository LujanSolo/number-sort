// const sortButton = document.getElementById("sort");

// const sortInputArray = (event) => {
//   event.preventDefault();

//   const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));

//   console.log(inputValues);
// }

// const updateUI = (array = []) => {
//   array.forEach((num, i) => {
//     const outputValueNode = document.getElementById(`output-value-${i}`);
//   })
// }

// sortButton.addEventListener("click", sortInputArray);


// rewrite functions to new es6 syntax
const loadNewVocabulary = (language) => {
  let vocabulary;

  // do type validation sans typescript
  if(typeof language !== 'string') {
    console.log('Language must be a string');
    return;
  };

  // set language to uppercase in event user passes in lowercase values (match with switch cases)
  language = language.toUpperCase();
  
  switch(language) {
    case 'Spanish':
      vocabulary = ['hola', 'amigo', 'gracias'];
      break;
    case 'French':
      vocabulary = ['bonjour', 'ami', 'merci'];
      break;
    case 'German':
      vocabulary = ['hallo', 'freund', 'danke'];
      break;
    default:
      vocabulary = [];
      console.log('Language not supported');
  };
  displayVocabulary(vocabulary);
};

const displayVocabulary = (words) => {
  if (words.length === 0) {
    console.log('No vocabulary loaded');
    return;
  }
  words.forEach(word => {
    console.log(`Word: ${word}`);
  })
}

// testing number type for expected error response
loadNewVocabulary(47);