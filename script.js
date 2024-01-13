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

function loadNewVocabulary(language) {
  let vocabulary;

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

function displayVocabulary(words) {
  if (words.length === 0) {
    console.log('No vocabulary loaded');
    return;
  }
  words.forEach(word => {
    console.log(`Word: ${word}`);
  })
}

loadNewVocabulary('Italian');