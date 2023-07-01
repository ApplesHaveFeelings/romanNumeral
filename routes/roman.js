const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const number = req.query.number;

  try {
    // convert integer to roman numeral
    const romanNumeral = convertToRoman(number);

    // json format (number and romanNumeral)
    const responseJson = {
      input: number,
      output: romanNumeral
    };

    // Sending the json response
    res.json(responseJson);
  } catch (error) {
    // Handle the error
    res.status(400).json({ error: error.message });
  }
});

// function to convert integer to roman numeral
function convertToRoman(number) {
  number = parseInt(number);
  if (isNaN(number) || number <= 0 || number >= 4000) {
    throw new Error('Input is invalid. You must provide a positive integer between 1 and 3999.');
  }

  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let result = '';

  for (const roman in romanNumerals) {
    while (number >= romanNumerals[roman]) {
      result += roman;
      number -= romanNumerals[roman];
    }
  }

  return result;
}

module.exports = router;
