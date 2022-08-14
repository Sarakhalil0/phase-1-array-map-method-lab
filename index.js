const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased() {
  const tutorial = tutorials.map(upperT => {

    const upperCaes = upperT.split(' ').map(upperW => {
      return upperW.charAt(0).toUpperCase() + upperW.slice(1);

    }).join(' ');
    console.log(upperCaes);
    return upperCaes
  })
  return tutorial;
}
// charAt() is a string method that is used to retrieve a character at a specific position in a string.
 //Because the charAt() method is a method of the String object, it must be invoked through a particular
 //instance of the String class.




