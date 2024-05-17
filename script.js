const quizData = [
    {
      question: 'Когда разные звуки объединяются, чтобы создать приятное и сбалансированное звучание.',
      options: ['Мелодия', 'Звук', 'Гармония', 'Полифония'],
      answer: 'Гармония',
    },
    {
      question: 'Последовательность музыкальных звуков, организованных по высоте и времени. Представь себе рассказ. В нем есть начало, середина и конец. Так и в музыке есть такое понятие.',
      options: ['Голос', 'Ноты', 'Ритм', 'Мелодия'],
      answer: 'Мелодия',
    },
    {
      question: 'Полиифония - это ...',
      options: ['- когда мелодия сопровождается аккордами;','- когда одна мелодия повторяется несколько раз с разными инструментами;', '- когда две или более независимые мелодии исполняются одновременно;'],
      answer: '- когда две или более независимые мелодии исполняются одновременно;',
    },
    {
      question: 'Как называется учебная дисциплина, предназначенная для развития музыкального слуха и музыкальной памяти.',
      options: ['Теория музыки', 'Сольфеджио', 'Музыкальная литература'],
      answer: 'Сольфеджио',
    },
    {
      question: 'Группа артистов, выступающая как единый художественный коллектив это?',
      options: [
        'Ассортимент',
        'Комитет',
        'Ансамбль',
        'Собрание',
      ],
      answer: 'Ансамбль',
    },
    {
      question: 'Представь себе большой оркестр, где каждый музыкант играет на своем инструменте. Как называется специальная книга, которая показывает, что должен играть каждый музыкант и когда, чтобы все звучало вместе как единое целое?',
      options: ['Ноты', 'Партитура', 'Расписание', 'Инструкция'],
      answer: 'Партитура',
    },
    {
      question: 'Перед тем, как выступить перед публикой, вам нужно несколько раз вместе потренироваться, чтобы все звучало слаженно и красиво. Как называется это время, когда люди собираются вместе и отрабатывают свое выступление?',
      options: [
        'Экзамен',
        'Репетиция',
        'Тренировка',
      ],
      answer: 'Репетиция',
    },
    {
      question: 'Представьте оркестр, который готовится к большому концерту. Среди всех музыкантов есть один особенный человек, чаще всего это пианист, который сопровождает на концерте основную партию. Кто этот важный музыкант?',
      options: ['Хранилище', 'Концертмейстер', 'Дирижер', 'Комод'],
      answer: 'Стеллаж',
    },
    {
      question: 'Музыка',
      options: [
        'Бибиотечный экземпляр',
        'Образец',
        'Tiger Shark',
        'Hammerhead Shark',
      ],
      answer: 'Whale Shark',
    },
    {
      question: 'Музыка',
      options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
      answer: 'Lion',
    },
  ];
  
const quizLibraryData=[
  {
    questionLib: 'Этот документ позволяет тебе пользоваться книгой  только в определенный срок.',
    optionsLib: ['Справка', 'Абонемент', 'Абонент', 'Талон'],
    answerLib: 'Абонемент',
  },
  {
    questionLib: 'Создатель литературного или иного художественного произведения. Кто это?',
    optionsLib: ['Создатель', 'Музыкант', 'Автор', 'Писатель'],
    answerLib: 'Автор',
  },
  {
    questionLib: 'Как называется одна из двух древних славянских азбук, которая легла в основу современного русского алфавита.',
    optionsLib: ['Летопись','Алфавит', 'Кириллица'],
    answerLib: 'Кириллица',
  },
  {
    questionLib: 'Все буквы русского языка собранные в одном месте, где каждая из них имеет свое место и название.',
    optionsLib: ['Азбука', 'Алфавит', 'Рукопись', 'Текст'],
    answerLib: 'Алфавит',
  },
  {
    questionLib: 'Хранитель архива это?',
    optionsLib: [
      'Сторож',
      'Архивариус',
      'Библиотекарь',
      'Сотрудник',
    ],
    answerLib: 'Архивариус',
  },
  {
    questionLib: 'Место, где хранятся справочные материалы, с целью облегчить поиск необходимой информации',
    optionsLib: ['Картотека', 'Склад', 'Ящик', 'Архив'],
    answerLib: 'Картотека',
  },
  {
    questionLib: 'Древние исторические произведения, в которых по годам описывалось все, что происходило на русской земле в древние времена.',
    optionsLib: [
      'Летопись',
      'Рукопись',
      'Энциклопедия',
      'Поэма',
    ],
    answerLib: 'Летопись',
  },
  {
    questionLib: 'Как называется высокая полка или полки, которые используется для организации и хранения книг?',
    optionsLib: ['Хранилище', 'Стеллаж', 'Шкаф', 'Комод'],
    answerLib: 'Стеллаж',
  },
  {
    questionLib: 'Это копия книги, для того чтобы именно ее могли читать несколько людей одновременно.',
    optionsLib: [
      'Бибиотечный экземпляр',
      'Образец',
      'Tiger Shark',
      'Hammerhead Shark',
    ],
    answerLib: 'Whale Shark',
  },
  {
    questionLib: 'Which animal is known as the King of the Jungle?',
    optionsLib: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
    answerLib: 'Lion',
  },
];

const quizTipData = [
  {
    questionTip: 'Когда разные звуки объединяются, чтобы создать приятное и сбалансированное звучание.',
    optionsTip: ['Мелодия', 'Звук', 'Гармония', 'Полифония'],
    answerTip: 'Гармония',
  },
  {
    questionTip: 'Последовательность музыкальных звуков, организованных по высоте и времени. Представь себе рассказ. В нем есть начало, середина и конец. Так и в музыке есть такое понятие.',
    optionsTip: ['Голос', 'Ноты', 'Ритм', 'Мелодия'],
    answerTip: 'Мелодия',
  },
  {
    questionTip: 'Полиифония - это ...',
    optionsTip: ['- когда мелодия сопровождается аккордами;','- когда одна мелодия повторяется несколько раз с разными инструментами;', '- когда две или более независимые мелодии исполняются одновременно;'],
    answerTip: '- когда две или более независимые мелодии исполняются одновременно;',
  },
  {
    questionTip: 'Как называется учебная дисциплина, предназначенная для развития музыкального слуха и музыкальной памяти.',
    optionsTip: ['Теория музыки', 'Сольфеджио', 'Музыкальная литература'],
    answerTip: 'Сольфеджио',
  },
  {
    questionTip: 'Группа артистов, выступающая как единый художественный коллектив это?',
    optionsTip: [
      'Ассортимент',
      'Комитет',
      'Ансамбль',
      'Собрание',
    ],
    answerTip: 'Ансамбль',
  },
  {
    questionTip: 'Место, где хранятся справочные материалы, с целью облегчить поиск необходимой информации',
    optionsTip: ['Картотека', 'Склад', 'Ящик', 'Архив'],
    answerTip: 'Картотека',
  },
  {
    questionTip: 'Древние исторические произведения, в которых по годам описывалось все, что происходило на русской земле в древние времена.',
    optionsTip: [
      'Летопись',
      'Рукопись',
      'Энциклопедия',
      'Поэма',
    ],
    answerTip: 'Летопись',
  },
  {
    questionTip: 'Как называется высокая полка или полки, которые используется для организации и хранения книг?',
    optionsTip: ['Хранилище', 'Стеллаж', 'Шкаф', 'Комод'],
    answerTip: 'Стеллаж',
  },
  {
    questionTip: 'Это копия книги, для того чтобы именно ее могли читать несколько людей одновременно.',
    optionsTip: [
      'Бибиотечный экземпляр',
      'Образец',
      'Tiger Shark',
      'Hammerhead Shark',
    ],
    answerTip: 'Whale Shark',
  },
  {
    questionTip: 'Which animal is known as the King of the Jungle?',
    optionsTip: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
    answerTip: 'Lion',
  },
];

const quizArtData = [
  {
    questionArt: 'Когда разные звуки объединяются, чтобы создать приятное и сбалансированное звучание.',
    optionsArt: ['Мелодия', 'Звук', 'Гармония', 'Полифония'],
    answerArt: 'Гармония',
  },
  {
    questionArt: 'Последовательность музыкальных звуков, организованных по высоте и времени. Представь себе рассказ. В нем есть начало, середина и конец. Так и в музыке есть такое понятие.',
    optionsArt: ['Голос', 'Ноты', 'Ритм', 'Мелодия'],
    answerArt: 'Мелодия',
  },
  {
    questionArt: 'Полиифония - это ...',
    optionsArt: ['- когда мелодия сопровождается аккордами;','- когда одна мелодия повторяется несколько раз с разными инструментами;', '- когда две или более независимые мелодии исполняются одновременно;'],
    answerArt: '- когда две или более независимые мелодии исполняются одновременно;',
  },
  {
    questionArt: 'Как называется учебная дисциплина, предназначенная для развития музыкального слуха и музыкальной памяти.',
    optionsArt: ['Теория музыки', 'Сольфеджио', 'Музыкальная литература'],
    answerArt: 'Сольфеджио',
  },
  {
    questionArt: 'Группа артистов, выступающая как единый художественный коллектив это?',
    optionsArt: [
      'Ассортимент',
      'Комитет',
      'Ансамбль',
      'Собрание',
    ],
    answerArt: 'Ансамбль',
  },
  {
    questionArt: 'Место, где хранятся справочные материалы, с целью облегчить поиск необходимой информации',
    optionsArt: ['Картотека', 'Склад', 'Ящик', 'Архив'],
    answerArt: 'Картотека',
  },
  {
    questionArt: 'Древние исторические произведения, в которых по годам описывалось все, что происходило на русской земле в древние времена.',
    optionsArt: [
      'Летопись',
      'Рукопись',
      'Энциклопедия',
      'Поэма',
    ],
    answerArt: 'Летопись',
  },
  {
    questionArt: 'Как называется высокая полка или полки, которые используется для организации и хранения книг?',
    optionsArt: ['Хранилище', 'Стеллаж', 'Шкаф', 'Комод'],
    answerArt: 'Стеллаж',
  },
  {
    questionArt: 'Это копия книги, для того чтобы именно ее могли читать несколько людей одновременно.',
    optionsArt: [
      'Бибиотечный экземпляр',
      'Образец',
      'Tiger Shark',
      'Hammerhead Shark',
    ],
    answerArt: 'Whale Shark',
  },
  {
    questionArt: 'Which animal is known as the King of the Jungle?',
    optionsArt: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
    answerArt: 'Lion',
  },
];

  // const startMenu =  document.getElementById('startMenu');
  const startButton = document.getElementById('next');

  const quizContainer = document.getElementById('quiz');
  const quizLibraryContainer = document.getElementById('quizLibrary');
  const quizTipContainer = document.getElementById('quizTip');
  const quizArtContainer = document.getElementById('quizArt');

  const resultContainer = document.getElementById('result');
  const resultLibContainer = document.getElementById('resultLib');
  const resultTipContainer = document.getElementById('resultTip');
  const resultArtContainer = document.getElementById('resultArt');

  const submitButton = document.getElementById('submit');
  const submitLibButton = document.getElementById('submitLib');
  const submitTipButton = document.getElementById('submitTip');
  const submitArtButton = document.getElementById('submitArt');

  const retryButton = document.getElementById('retry');
  const retryLibButton = document.getElementById('retryLib');
  const retryTipButton = document.getElementById('retryTip');
  const retryArtButton = document.getElementById('retryArt');

  const showAnswerButton = document.getElementById('showAnswer');
  const showAnswerLibButton = document.getElementById('showAnswerLib');
  const showAnswerTipButton = document.getElementById('showAnswerTip');
  const showAnswerArtButton = document.getElementById('showAnswerArt');

  

  const backToCategoryPartButton = document.getElementById('toCategoryPart');
  const backToCategoryPart1Button = document.getElementById('toCategoryPart1');
  const backToCategoryPart2Button = document.getElementById('toCategoryPart2');
  const backToCategoryPart3Button = document.getElementById('toCategoryPart3');

  const musicCategorButton = document.getElementById('musicCategor');
  const libraryCategorButton = document.getElementById('libraryCategor');
  const tipographCategorButton = document.getElementById('tipographCategor');
  const artCategorButton = document.getElementById('artCategor');

  var elemDiv1 = document.getElementById("1div");
  var elemDiv2 = document.getElementById("2div");
  var elemMusicDiv = document.getElementById("musicDiv");
  var elemLibraryDiv = document.getElementById("libraryDiv");
  var elemTipographyDiv = document.getElementById("tipographyDiv");
  var elemArtDiv = document.getElementById("artDiv");

 
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }

  function checkAnswer() {
    resultContainer.style.display = 'none';
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  

  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.style.display = 'none';
   

    resultContainer.innerHTML = `Молодец, ты получил ${score} из ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }

  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    resultContainer.style.display = 'list-item';
   

    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Вопрос:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Твой ответ:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Верный вариант:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Твои варианты ответов:</p>
      ${incorrectAnswersHtml}
    `;
  }



  let currentQuestionLib = 0;
  let scoreLib = 0;
  let incorrectAnswersLib = [];

  function showAnswerLib() {
    quizLibraryContainer.style.display = 'none';
    submitLibButton.style.display = 'none';
    retryLibButton.style.display = 'inline-block';
    resultLibContainer.style.display = 'list-item';
    showAnswerLibButton.style.display = 'none';
  
    let incorrectAnswersHtmlLib = '';
    for (let i = 0; i < incorrectAnswersLib.length; i++) {
      incorrectAnswersHtmlLib += `
        <p>
          <strong>Вопрос:</strong> ${incorrectAnswersLib[i].questionLib}<br>
          <strong>Твой ответ:</strong> ${incorrectAnswersLib[i].incorrectAnswerLib}<br>
          <strong>Верный вариант:</strong> ${incorrectAnswersLib[i].correctAnswerLib}
        </p>
      `;
    }
    resultLibContainer.innerHTML = `
      <p>Молодец, ты получил ${scoreLib} из ${quizLibraryData.length}!</p>
      <p>Твои варианты ответов:</p>
      ${incorrectAnswersHtmlLib}
    `;
  }

  function shuffleArrayLib(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function displayQuestionLibrary() {
    const questionLibraryData = quizLibraryData[currentQuestionLib];
  
    const questionLibElement = document.createElement('div');
    questionLibElement.className = 'questionLib';
    questionLibElement.innerHTML = questionLibraryData.questionLib;
  
    const optionsLibElement = document.createElement('div');
    optionsLibElement.className = 'optionsLib';
  
    const shuffledOptionsLib = [...questionLibraryData.optionsLib];
    shuffleArrayLib(shuffledOptionsLib);
  
    for (let i = 0; i < shuffledOptionsLib.length; i++) {
      const optionLib = document.createElement('label');
      optionLib.className = 'optionLib';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quizLibrary';
      radio.value = shuffledOptionsLib[i];
  
      const optionText = document.createTextNode(shuffledOptionsLib[i]);
  
      optionLib.appendChild(radio);
      optionLib.appendChild(optionText);
      optionsLibElement.appendChild(optionLib);
    }
  
    quizLibraryContainer.innerHTML = '';
    quizLibraryContainer.appendChild(questionLibElement);
    quizLibraryContainer.appendChild(optionsLibElement);
  }

  function checkAnswerLib() {
    resultLibContainer.style.display = 'none';
    const selectedOptionLib = document.querySelector('input[name="quizLibrary"]:checked');
    if (selectedOptionLib) {
      const answerLib = selectedOptionLib.value;
      if (answerLib === quizLibraryData[currentQuestionLib].answerLib) {
        scoreLib++;
      } else {
        incorrectAnswersLib.push({
          questionLib: quizLibraryData[currentQuestionLib].questionLib,
          incorrectAnswerLib: answerLib,
          correctAnswerLib: quizLibraryData[currentQuestionLib].answerLib,
        });
      }
      currentQuestionLib++;
      selectedOptionLib.checked = false;
      if (currentQuestionLib < quizLibraryData.length) {
        displayQuestionLibrary();
      } else {
        displayResultLib();
      }
    }
  }

  function displayResultLib() {
    quizLibraryContainer.style.display = 'none';
    submitLibButton.style.display = 'none';
    retryLibButton.style.display = 'inline-block';
    showAnswerLibButton.style.display = 'inline-block';
    resultLibContainer.style.display = 'none';

    resultLibContainer.innerHTML = `Молодец, ты получил ${score} из ${quizLibraryData.length}!`;
  }

  function retryQuizLib() {
    currentQuestionLib = 0;
    scoreLib = 0;
    incorrectAnswersLib = [];
    quizLibraryContainer.style.display = 'block';
    submitLibButton.style.display = 'inline-block';
    retryLibButton.style.display = 'none';
    showAnswerLibButton.style.display = 'none';
    resultLibContainer.style.display = 'none';
    resultLibContainer.innerHTML = '';
    displayQuestionLibrary();
  }



  let currentQuestionTip = 0;
  let scoreTip = 0;
  let incorrectAnswersTip = [];

  function showAnswerTip() {
    quizTipContainer.style.display = 'none';
    submitTipButton.style.display = 'none';
    retryTipButton.style.display = 'inline-block';
    resultTipContainer.style.display = 'list-item';
    showAnswerTipButton.style.display = 'none';
  
    let incorrectAnswersHtmlTip = '';
    for (let i = 0; i < incorrectAnswersTip.length; i++) {
      incorrectAnswersHtmlTip += `
        <p>
          <strong>Вопрос:</strong> ${incorrectAnswersTip[i].questionTip}<br>
          <strong>Твой ответ:</strong> ${incorrectAnswersTip[i].incorrectAnswerTip}<br>
          <strong>Верный вариант:</strong> ${incorrectAnswersTip[i].correctAnswerip}
        </p>
      `;
    }
    resultTipContainer.innerHTML = `
      <p>You scored ${scoreTip} out of ${quizTipData.length}!</p>
      <p>Твои варианты ответов:</p>
      ${incorrectAnswersHtmlTip}
    `;
  }
  
  function shuffleArrayTip(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestionTip() {
    const questionTipData = quizTipData[currentQuestion];
  
    const questionTipElement = document.createElement('div');
    questionTipElement.className = 'questionTip';
    questionTipElement.innerHTML = questionTipData.questionTip;
  
    const optionsTipElement = document.createElement('div');
    optionsTipElement.className = 'optionsTip';
  
    const shuffledOptionsTip = [...questionTipData.optionsTip];
    shuffleArrayTip(shuffledOptionsTip);
  
    for (let i = 0; i < shuffledOptionsTip.length; i++) {
      const optionTip = document.createElement('label');
      optionTip.className = 'optionTip';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quizTip';
      radio.value = shuffledOptionsTip[i];
  
      const optionText = document.createTextNode(shuffledOptionsTip[i]);
  
      optionTip.appendChild(radio);
      optionTip.appendChild(optionText);
      optionsTipElement.appendChild(optionTip);
    }
  
    quizTipContainer.innerHTML = '';
    quizTipContainer.appendChild(questionTipElement);
    quizTipContainer.appendChild(optionsTipElement);
  }

  function checkAnswerTip() {
    resultTipContainer.style.display = 'none';
    const selectedOptionTip = document.querySelector('input[name="quizTip"]:checked');
    if (selectedOptionTip) {
      const answerTip = selectedOptionTip.value;
      if (answerTip === quizTipData[currentQuestionTip].answerTip) {
        scoreTip++;
      } else {
        incorrectAnswersTip.push({
          questionTip: quizTipData[currentQuestionTip].questionTip,
          incorrectAnswerTip: answerTip,
          correctAnswerTip: quizTipData[currentQuestionTip].answerTip,
        });
      }
      currentQuestionTip++;
      selectedOptionTip.checked = false;
      if (currentQuestionTip < quizTipData.length) {
        displayQuestionTip();
      } else {
        displayResultTip();
      }
    }
  }
  

  function displayResultTip() {
    quizTipContainer.style.display = 'none';
    submitTipButton.style.display = 'none';
    retryTipButton.style.display = 'inline-block';
    showAnswerTipButton.style.display = 'inline-block';
    resultTipContainer.style.display = 'none';

    resultTipContainer.innerHTML = `Молодец, ты получил ${score} из ${quizTipData.length}!`;
  }
  
  function retryQuizTip() {
    currentQuestionTip = 0;
    scoreTip = 0;
    incorrectAnswersTip = [];
    quizTipContainer.style.display = 'block';
    submitTipButton.style.display = 'inline-block';
    retryTipButton.style.display = 'none';
    showAnswerTipButton.style.display = 'none';
    resultTipContainer.style.display = 'none';
    resultTipContainer.innerHTML = '';
    displayQuestionTip();
  }

  


  let currentQuestionArt = 0;
  let scoreArt = 0;
  let incorrectAnswersArt = [];

  function showAnswerArt() {
    resultArtContainer.style.display = 'list-item';
    quizArtContainer.style.display = 'none';
    submitArtButton.style.display = 'none';
    retryArtButton.style.display = 'inline-block';
    showAnswerArtButton.style.display = 'none';
  
    let incorrectAnswersHtmlArt = '';
    for (let i = 0; i < incorrectAnswersArt.length; i++) {
      incorrectAnswersHtmlArt += `
        <p>
          <strong>Вопрос:</strong> ${incorrectAnswersArt[i].questionArt}<br>
          <strong>Твой ответ:</strong> ${incorrectAnswersArt[i].incorrectAnswerArt}<br>
          <strong>Верный вариант:</strong> ${incorrectAnswersArt[i].correctAnswerArt}
        </p>
      `;
    }
    resultArtContainer.innerHTML = `
      <p>Молодец, ты получил ${score} из ${quizArtData.length}!</p>
      <p>Твои варианты ответов:</p>
      ${incorrectAnswersHtmlArt}
    `;
  }
  
  function shuffleArrayArt(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestionArt() {
    const questionArtData = quizArtData[currentQuestionArt];
  
    const questionArtElement = document.createElement('div');
    questionArtElement.className = 'questionArt';
    questionArtElement.innerHTML = questionArtData.questionArt;
  
    const optionsArtElement = document.createElement('div');
    optionsArtElement.className = 'optionsArt';
  
    const shuffledOptionsArt = [...questionArtData.optionsArt];
    shuffleArrayArt(shuffledOptionsArt);
  
    for (let i = 0; i < shuffledOptionsArt.length; i++) {
      const optionArt = document.createElement('label');
      optionArt.className = 'optionArt';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quizArt';
      radio.value = shuffledOptionsArt[i];
  
      const optionText = document.createTextNode(shuffledOptionsArt[i]);
  
      optionArt.appendChild(radio);
      optionArt.appendChild(optionText);
      optionsArtElement.appendChild(optionArt);
    }
  
    quizArtContainer.innerHTML = '';
    quizArtContainer.appendChild(questionArtElement);
    quizArtContainer.appendChild(optionsArtElement);
  }

  function checkAnswerArt() {
    resultArtContainer.style.display = 'none';
    const selectedOptionArt = document.querySelector('input[name="quizArt"]:checked');
    if (selectedOptionArt) {
      const answerArt = selectedOptionArt.value;
      if (answerArt === quizArtData[currentQuestionArt].answerArt) {
        scoreArt++;
      } else {
        incorrectAnswersArt.push({
          questionArt: quizArtData[currentQuestionArt].questionArt,
          incorrectAnswerArt: answerArt,
          correctAnswerArt: quizArtData[currentQuestionArt].answerArt,
        });
      }
      currentQuestionArt++;
      selectedOptionArt.checked = false;
      if (currentQuestionArt < quizArtData.length) {
        displayQuestionArt();
      } else {
        displayResultArt();
      }
    }
  }

  function displayResultArt() {
    quizArtContainer.style.display = 'none';
    submitArtButton.style.display = 'none';
    retryArtButton.style.display = 'inline-block';
    showAnswerArtButton.style.display = 'inline-block';
    resultArtContainer.style.display = 'none';

    resultArtContainer.innerHTML = `Молодец, ты получил ${score} из ${quizArtData.length}!`;
  }
  
  function retryQuizArt() {
    currentQuestionArt = 0;
    scoreArt = 0;
    incorrectAnswersArt = [];
    quizArtContainer.style.display = 'block';
    submitArtButton.style.display = 'inline-block';
    retryArtButton.style.display = 'none';
    showAnswerArtButton.style.display = 'none';
    resultArtContainer.style.display = 'none';
    resultArtContainer.innerHTML = '';
    displayQuestionArt();
  }

  




  function goToSecondFormFunc(){
    // Добавляем новый класс к элементу
    elemDiv1.classList.add("hidden");
    elemMusicDiv.classList.add("hidden");
    elemLibraryDiv.classList.add("hidden");
    elemTipographyDiv.classList.add("hidden");
    elemArtDiv.classList.add("hidden");

    // Удаляем класс у элемента
    elemDiv2.classList.remove("hidden");
  }

  function goToMusicFormFunc(){
    // Добавляем новый класс к элементу
    elemDiv1.classList.add("hidden");
    elemDiv2.classList.add("hidden");
    elemLibraryDiv.classList.add("hidden");
    elemTipographyDiv.classList.add("hidden");
    elemArtDiv.classList.add("hidden");

    // Удаляем класс у элемента
    elemMusicDiv.classList.remove("hidden");
  }

  function goToLibraryFormFunc(){
    // Добавляем новый класс к элементу
    elemDiv1.classList.add("hidden");
    elemMusicDiv.classList.add("hidden");
    elemDiv2.classList.add("hidden");
    elemTipographyDiv.classList.add("hidden");
    elemArtDiv.classList.add("hidden");

    // Удаляем класс у элемента
    elemLibraryDiv.classList.remove("hidden");
  }

  function goToTipographFormFunc(){
    // Добавляем новый класс к элементу
    elemDiv1.classList.add("hidden");
    elemMusicDiv.classList.add("hidden");
    elemLibraryDiv.classList.add("hidden");
    elemDiv2.classList.add("hidden");
    elemArtDiv.classList.add("hidden");

    // Удаляем класс у элемента
    elemTipographyDiv.classList.remove("hidden");
  }

  function goToArtFormFunc(){
    // Добавляем новый класс к элементу
    elemDiv1.classList.add("hidden");
    elemMusicDiv.classList.add("hidden");
    elemLibraryDiv.classList.add("hidden");
    elemDiv2.classList.add("hidden");
    elemTipographyDiv.classList.add("hidden");

    // Удаляем класс у элемента
    elemArtDiv.classList.remove("hidden");
  }
  
  function goToCategorForm(){
    elemDiv1.classList.add("hidden");
    elemTipographyDiv.classList.add("hidden");
    elemLibraryDiv.classList.add("hidden");
    elemMusicDiv.classList.add("hidden")
    elemArtDiv.classList.add("hidden");

    elemDiv2.classList.remove("hidden");
  }

 
  
  
  submitButton.addEventListener('click', checkAnswer);
  submitLibButton.addEventListener('click', checkAnswerLib);
  submitTipButton.addEventListener('click', checkAnswerTip);
  submitArtButton.addEventListener('click', checkAnswerArt);

  retryButton.addEventListener('click', retryQuiz);
  retryLibButton.addEventListener('click', retryQuizLib);
  retryTipButton.addEventListener('click', retryQuizTip);
  retryArtButton.addEventListener('click', retryQuizArt);

  showAnswerButton.addEventListener('click', showAnswer);
  showAnswerLibButton.addEventListener('click', showAnswerLib);
  showAnswerTipButton.addEventListener('click', showAnswerTip);
  showAnswerArtButton.addEventListener('click', showAnswerArt);

  startButton.addEventListener('click', goToSecondFormFunc );
  musicCategorButton.addEventListener('click', goToMusicFormFunc);
  libraryCategorButton.addEventListener('click', goToLibraryFormFunc);
  tipographCategorButton.addEventListener('click', goToTipographFormFunc);
  artCategorButton.addEventListener('click', goToArtFormFunc);

  // answerBefore.addEventListener('click', goToBeforeForm);

  backToCategoryPartButton.addEventListener('click', goToCategorForm);
  backToCategoryPart1Button.addEventListener('click', goToCategorForm);
  backToCategoryPart2Button.addEventListener('click', goToCategorForm);
  backToCategoryPart3Button.addEventListener('click', goToCategorForm);

  displayQuestion();
  displayQuestionLibrary();
  displayQuestionTip();
  displayQuestionArt();
