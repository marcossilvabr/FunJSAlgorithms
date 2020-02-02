// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

const convertToRoman = (num) => {
  const asInteger = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  const asRoman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  let convertedToRoman = '';

  asInteger.map((e, i) => {
    while (asInteger[i] <= num) {
      convertedToRoman += asRoman[i];
      num -= asInteger[i];
    }
  })

  return convertedToRoman;
}
  
convertToRoman(36);
console.log(convertToRoman(36));