const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = [];
    for (let i=0; i < expr.length; i+=10) {
      arr.push(expr.slice(i, i+ 10));
    }
    const arr2 = arr.map(function(elem) {
      if (elem === '**********') {return ' '};      
       return elem.substring(elem.search(1), elem.length);
      }).map(function(elem) {
        let arr3= [];
        for (let j=0;j<elem.length;j+=2){
          arr3.push(elem.slice(j, j+2));          
        }      
        return arr3;        
      });
     
    const arr4 = arr2.map(function(elem) {
    let a = elem.map(function(a) {          
        if (a === '10') {
            return '.';
        }  if (a === '11') {
            return '-';
        }  if (a === ' ') {
            return ' ';
        }
         }).join('');        
        return a;          
       });

     return arr4.map(a => MORSE_TABLE[a] || a).join('');    
}

module.exports = {
    decode
}