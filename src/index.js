module.exports = 
  function toReadable (number) {
    let hundred = Math.floor(number / 100);
    let tens = Math.floor((number - hundred * 100 ) / 10);
    let numeric = Math.floor( number - hundred * 100 - tens *10);

    let ArrayNumeric = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
       'seventeen', 'eighteen', 'nineteen'];
   let ArrayTens = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ',
       'eighty ', 'ninety '];
   let hundredHuman = ArrayNumeric[hundred] + ' hundred ';
   let hundredHuman2 = ArrayNumeric[hundred];

  if (number === 0){
      return 'zero';
  }else if (tens === 1 && number.toString().length > 2){
    tens = 0;
    numeric = number - hundred * 100
    return (hundredHuman + ArrayNumeric[numeric])
  }else if (tens === 1 && number.toString().length <= 2){
    return  ArrayNumeric[numeric + 10]
  }
  else{
    if ( hundred >= 1){
      hundredHuman = hundredHuman;
    }else{
      hundredHuman = ''; 
    }
    let xxx = (hundredHuman + ArrayTens[tens]  + ArrayNumeric[numeric]).split(' ')
    console.log (xxx);
    let rrr = [];
    for( let i =0; i < xxx.length; i++){
      if(xxx[i].length > 0)
      rrr.push(xxx[i])
    }
    console.log(rrr);
return rrr.join(' ').trim();
}

}
