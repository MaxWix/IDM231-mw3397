// @ts-check

const DisplayImg = document.getElementsByClassName('background');
const TitleNew = document.getElementsByClassName('title');
const DateNew = document.getElementsByClassName('date');
const DescriptionNew = document.getElementsByClassName('description');

function userPicked (modalCard) {
  console.log('user picked called: ' + modalCard);

  switch (modalCard) {
    case 'Capricorn':
      DisplayImg.src = "images/aryastark.jpeg";
      // title
      TitleNew.innerHTML = "Arya Stark";
      // date range
      DateNew.innerHTML = "December 22nd - January 19th";
      // description
      DescriptionNew.innerHTML = "blah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blah";
      console.log("the log worked");
      modal.hidden = !modal.hidden;
      break;

      // Bran
      case 'Sagittarius':
      DisplayImg.src = "images/branstark.webp";
      // title
      TitleNew.innerHTML = "Bran Stark";
      // date range
      DateNew.innerHTML = "November 22nd - December 21st";
      // description
      DescriptionNew.innerHTML = "blah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blah";
      console.log("the log worked");
      modal.hidden = !modal.hidden;
      break;

      //catelyn
      case 'Scorpio':
      DisplayImg.src = "images/catelynstark.jpeg";
      // title
      TitleNew.innerHTML = "Catelyn Stark";
      // date range
      DateNew.innerHTML = "December 22th - November 21st";
      // description
      DescriptionNew.innerHTML = "blah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blah";

      modal.hidden = !modal.hidden;
      break;

      //daenarys
      case 'Libra':
      DisplayImg.src = "images/daenarys.webp";
      // title
      TitleNew.innerHTML = "Daenarys";
      // date range
      DateNew.innerHTML = "December 22th - January 19th";
      // description
      DescriptionNew.innerHTML = "blah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blah";
   
      modal.hidden = !modal.hidden;
      break;

      //Jamie
      case 'Virgo':
      DisplayImg.src = "images/jamielannister.webp";
      // title
      TitleNew.innerHTML = "Jamie Lannister";
      // date range
      DateNew.innerHTML = "December 22th - January 19th";
      // description
      DescriptionNew.innerHTML = "blah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blah";
  
      modal.hidden = !modal.hidden;
      break;

      //John
      case 'Leo':
      DisplayImg.src = "images/johnsnow.webp";
      // title
      TitleNew.innerHTML = "John Snow";
      // date range
      DateNew.innerHTML = "December 22th - January 19th";
      // description
      DescriptionNew.innerHTML = "blah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blah";

      modal.hidden = !modal.hidden;
      break;

      //Jorah
      case 'Cancer':
      DisplayImg.src = "images/jorahmormont.webp";
      // title
      TitleNew.innerHTML = "Jorah Mormont";
      // date range
      DateNew.innerHTML = "December 22th - January 19th";
      // description
      DescriptionNew.innerHTML = "blah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blah";
 
      modal.hidden = !modal.hidden;
      break;

      //Robert
      case 'Gemeni':
      DisplayImg.src = "images/robertstark.jpeg";
      // title
      TitleNew.innerHTML = "Robert Stark";
      // date range
      DateNew.innerHTML = "December 22th - January 19th";
      // description
      DescriptionNew.innerHTML = "blah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blah";

      modal.hidden = !modal.hidden;
      break;

      //SamwelL
      case 'Taurus':
      DisplayImg.src = "images/samwell.jpeg";
      // title
      TitleNew.innerHTML = "Samwell";
      // date range
      DateNew.innerHTML = "December 22th - January 19th";
      // description
      DescriptionNew.innerHTML = "blah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blah";
   
      modal.hidden = !modal.hidden;
      break;

      //Sansa
      case 'Aries':
      DisplayImg.src = "images/sansastark.webp";
      // title
      TitleNew.innerHTML = "Sansa Stark";
      // date range
      DateNew.innerHTML = "December 22th - January 19th";
      // description
      DescriptionNew.innerHTML = "blah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blah";
  
      modal.hidden = !modal.hidden;
      break;

      //Theon
      case 'Pisces':
      DisplayImg.src = "images/theongreyjoy.jpeg";
      // title
      TitleNew.innerHTML = "Theon Greyjoy/h1>";
      // date range
      DateNew.innerHTML = "December 22th - January 19th";
      // description
      DescriptionNew.innerHTML = "blah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blah";
    
      modal.hidden = !modal.hidden;
      break;

      //Tyrion
      case 'Aquarius':
      DisplayImg.src = "images/tyrionlannister.jpeg";
      // title
      TitleNew.innerHTML = "Tyrion Lannister";
      // date range
      DateNew.innerHTML = "December 22th - January 19th";
      // description
      DescriptionNew.innerHTML = "blah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blah";
    
      modal.hidden = !modal.hidden;
      break;
  
  }
}

function userBirthday () {}

const arya = document.getElementById('Capricorn')
const bran = document.getElementById('Sagittarius')
const catelyn = document.getElementById('Scorpio')
const daenarys = document.getElementById('Libra')
const jamie = document.getElementById('Virgo')
const john = document.getElementById('Leo')
const jorah = document.getElementById('Cancer')
const robert = document.getElementById('Gemini')
const samwell = document.getElementById('Taurus')
const sansa = document.getElementById('Aries')
const theon = document.getElementById('Pisces')
const tyrion = document.getElementById('Aquarius')

arya.addEventListener('click', function (evt) {
  console.log('arya button clicked' + evt.target.id); 
  const id = 'Capricorn';
  userPicked(id);
});

bran.addEventListener('click', function (evt) {
  console.log('bran button clicked' + evt.target.id);
  const id = 'Sagittarius';
  userPicked(id);
});

catelyn.addEventListener('click', function (evt) {
  console.log('catelyn button clicked' + evt.target.id);
  const id = 'scorpio';
  userPicked(id);
});

daenarys.addEventListener('click', function (evt) {
  console.log('daenarys button clicked' + evt.target.id);
  const id = 'Libra';
  userPicked(id);
});

jamie.addEventListener('click', function (evt) {
  console.log('jamie button clicked' + evt.target.id);
  const id = 'Virgo';
  userPicked(id);
});

john.addEventListener('click', function (evt) {
  console.log('john button clicked' + evt.target.id);
  const id = 'Leo';
  userPicked(id);
});

jorah.addEventListener('click', function (evt) {
  console.log('jorah button clicked' + evt.target.id);
  const id = 'Cancer';
  userPicked(id);
});

robert.addEventListener('click', function (evt) {
  console.log('robert button clicked' + evt.target.id);
  const id = 'Gemini';
  userPicked(id);
});

samwell.addEventListener('click', function (evt) {
  console.log('samwell button clicked' + evt.target.id);
  const id = 'Taurus';
  userPicked(id);
});

sansa.addEventListener('click', function (evt) {
  console.log('sansa button clicked' + evt.target.id);
  const id = 'Aries';
  userPicked(id);
});

theon.addEventListener('click', function (evt) {
  console.log('theon button clicked' + evt.target.id);
  const id = 'Pisces';
  userPicked(id);
});

tyrion.addEventListener('click', function (evt) {
  console.log('tyrion button clicked' + evt.target.id);
  const id = 'Aquarius';
  userPicked(id);
});



// sign based on the birthdate

const userSubmit = document.getElementById('submit-btn');

// @ts-ignore
userSubmit.addEventListener('click', function () {
    console.log('submitButton clicked');
  
const userBday = new Date(document.getElementById('birthdate').value);
console.log('userBday is: ' + userBday);

let month = userBday.getUTCMonth();
month++;
console.log('month is: ' + month);

const day = userBday.getUTCDate();
console.log('day is: ' + day);
  
let id = '';

if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    id = "Capricorn";
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    id = "Sagittarius";
  } else if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) {
    id = "Scorpio";
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    id = "Libra";
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    id = "Virgo";
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    id = "Leo";
  } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    id = "Cancer";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    id = "Gemini";
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    id = "Taurus";
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    id = "Aquarius";
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    id = "Pisces";
  } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    id = "Aquarius";
  }

  console.log('id is ' + id);

  userPicked(id);

});

// Modal 

const modal = document.getElementsByClassName('modal');
const closeModal = document.getElementById('modal-close');

closeModal.addEventListener('click', function() {

  console.log('close modal');
  stopAllAudio();
  modal.hidden = !modal.hidden;
});


 
  // Show the zodiac
  
 


  