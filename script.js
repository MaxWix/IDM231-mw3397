// @ts-check

const DisplayImg = document.getElementById('background');
const TitleNew = document.getElementById('title');
const DateNew = document.getElementById('date');
const DescriptionNew = document.getElementById('description');

var aryaad = new Audio('arya.wav');
var branad = new Audio('bran.wav');
var catelynad = new Audio('catelyn.wav');
var daenarysad = new Audio('daenarys.wav');
var jamiead = new Audio('jamie.wav');
var jonad = new Audio('jon.wav');
var jorahaad = new Audio('jorah.wav');
var robad = new Audio('rob.wav');
var samwellad = new Audio('samwell.wav');
var sansaad = new Audio('sansa.wav');
var theonad = new Audio('theon.wav');
var tryionad = new Audio('tyrion.wav');

function userPicked (modalCard) {
  console.log('user picked called: ' + modalCard);

  switch (modalCard) {
    case 'Capricorn':
      DisplayImg.src="images/aryastarkcircle.png";
      // title
      TitleNew.innerHTML = "Arya Stark";
      // date range
      DateNew.innerHTML = "December 22 - January 19";
      // description
      DescriptionNew.innerHTML = "Arya is the third child and youngest daughter of Lord Ned Stark and his wife Lady Catelyn Stark. She is tomboyish, headstrong, feisty, independent, disdains traditional female pursuits, and is often mistaken for a boy.";
      console.log("the log worked");
      aryaad.play();
     
      break;

      // Bran
      case 'Sagittarius':
      DisplayImg.src = "images/branstarkcircle.png";
      // title
      TitleNew.innerHTML = 'Bran Stark';
      // date range
      DateNew.innerHTML = "November 22 - December 21";
      // description
      DescriptionNew.innerHTML = "Bran is a sweet and thoughtful boy, well-loved by everyone at Winterfell. He has a fascination with climbing and exploring along the walls and ramparts of the castle. Catelyn once jested that Bran could climb before he could walk, however, his climbing often distresses her.";
      console.log("the log worked");
      branad.play();
     
      break;

      //catelyn
      case 'Scorpio':
      DisplayImg.src = "images/catelynstarkcircle.png";
      // title
      TitleNew.innerHTML = "Catelyn Stark";
      // date range
      DateNew.innerHTML = "October 24 - November 21st";
      // description
      DescriptionNew.innerHTML = "Catelyn is proud, strong, kind and generous, has a strong grasp of politics, and is often governed by the desire to protect her children. Catelyn is usually in accord with her husband Eddard Stark, but resents his admission of his extramarital son Jon Snow into their household.";
      catelynad.play();
     
      break;

      //daenarys
      case 'Libra':
      DisplayImg.src = "images/daenaryscircle.png";
      // title
      TitleNew.innerHTML = "Daenarys";
      // date range
      DateNew.innerHTML = "September 23 - October 23";
      // description
      DescriptionNew.innerHTML = "Daenarys is strong, persistent, inquisitive, and quietly and intensely determined. She suffered for years after the death of her parents and an extended period of time being treated cruelly by her brother. Others would have been broken, but she only grew stronger.";
      daenarysad.play()
     
      break;

      //Jamie
      case 'Virgo':
      DisplayImg.src = "images/jamielannistercircle.png";
      // title
      TitleNew.innerHTML = "Jamie Lannister";
      // date range
      DateNew.innerHTML = "August 23 - September 22";
      // description
      DescriptionNew.innerHTML = "Jamie is often seen as arrogant, cynical, and utterly pragmatic. It would be easy to label Jaime as evil, but in reality he just practices a form of moral calculus that is very similar to his father, Tywin. A charming rake, Jaime often does questionable things, but usually in service to his family or some perceived greater good.";
      jamiead.play()
     
      break;

      //John
      case 'Leo':
      DisplayImg.src = "images/johnsnowcircle.png";
      // title
      TitleNew.innerHTML = "John Snow";
      // date range
      DateNew.innerHTML = "July 23 - August 22";
      // description
      DescriptionNew.innerHTML = "Jon Snow is a stoic, honorable character, who always does what is right, often to his detriment. He cares about people, and as the series progresses, he becomes a leader and a symbol. Jon was the most popular choice overall.";
      jonad.play()
     
      break;

      //Jorah
      case 'Cancer':
      DisplayImg.src = "images/jorahmormontcircle.png";
      // title
      TitleNew.innerHTML = "Jorah Mormont";
      // date range
      DateNew.innerHTML = "June 22 - July 22";
      // description
      DescriptionNew.innerHTML = "Jorah is extremely loyal and a big romantic, especially as he spends more and more time with Daenerys. He is also a brave and strong knight who thwarts multiple assassination attempts on Daenerys. Still, she is more in love with leading her people than him. The sooner he accepts that, the better for everyone.";
      jorahaad.play()
     
      break;

      //Robert
      case 'Gemini':
      DisplayImg.src = "images/robertstarkcircle.png";
      // title
      TitleNew.innerHTML = "Robb Stark";
      // date range
      DateNew.innerHTML = "May 21 - June 21";
      // description
      DescriptionNew.innerHTML = "Robb is honorable, just, and bold. Robb is very much his father's son, both for better and worse. Like Ned, he is a skilled military commander who inspires loyalty among the men he leads. Robb has a very strong sense of honor that drives both his personal and professional decisions.";
      robad.play()

      break;

      //SamwelL
      case 'Taurus':
      DisplayImg.src = "images/samwellcircle.png";
      // title
      TitleNew.innerHTML = "Samwell";
      // date range
      DateNew.innerHTML = "April 20 - May 20";
      // description
      DescriptionNew.innerHTML = "Samwell is bright and well-educated, but a lousy soldier. Still, Sam is a great and loyal friend to Jon Snow and is extremely intelligent. Not everyone on the Night's Watch can be a master swordsman, so hopefully he can use his brains to get ahead in this harsh, wintry environment.";
      samwellad.play()
     
      break;

      //Sansa
      case 'Aries':
      DisplayImg.src = "images/sansastarkcircle.png";
      // title
      TitleNew.innerHTML = "Sansa Stark";
      // date range
      DateNew.innerHTML = "March 21 - April 19";
      // description
      DescriptionNew.innerHTML = "Sansa is described as soft-spoken and sweet-smelling. Raised as a lady, Sansa possesses the traditional feminine graces of her milieu, with a keen interest in music, poetry, singing, dancing, embroidery, and other traditional feminine activities.";
      sansaad.play()
     
      break;

      //Theon
      case 'Pisces':
      DisplayImg.src = "images/theongreyjoycircle.png";
      // title
      TitleNew.innerHTML = "Theon Greyjoy";
      // date range
      DateNew.innerHTML = "February 19 - March 20";
      // description
      DescriptionNew.innerHTML = "Theon is described as being an arrogant nineteen-year-old at the start of A Game of Thrones, with dark hair and a cocky grin. He was callous, ambitious and a shameless glory-seeker who lusted after the appreciation and loyalty of others.";
      theonad.play()

      break;

      //Tyrion
      case 'Aquarius':
      DisplayImg.src = "images/tyrionlannistercircle.png";
      // title
      TitleNew.innerHTML = "Tyrion Lannister";
      // date range
      DateNew.innerHTML = "January 20 - February 18";
      // description
      DescriptionNew.innerHTML = "Tyrion is clever, witty, and resilient. Tyrion has been mistreated his entire life, and has developed a cynicism as thick as armor in order to help himself cope. He has an acid tongue and is capable of talking his way through just about anything.";
      tryionad.play()
     
      break;

      case 'info':
        DisplayImg.src = "";
        // title
        TitleNew.innerHTML = "";
        // date range
        DateNew.innerHTML = "";
        // description 
      DescriptionNew.innerHTML = "Fill out your birthdate by inputing your what day, month, and year you were born. Click the submit button to see which game of thrones character you are."
  
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
const info = document.getElementById('info')

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
  const id = 'Scorpio';
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

info.addEventListener ('click',function (evt) {
  console.log('info button clicked'+evt.target.id);
  const id = 'info';
  userPicked(id)
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


  