// Desafio 1

function convertTimeFormat(time) {
  const [_, hours, minutes, seconds, amPm] = time.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})([AP]M)$/);

  let convertedTime = '';

  if (amPm === "PM" && hours !== '12') {
    convertedTime = `${parseInt(hours, 10) + 12}:${minutes}:${seconds}`;
  } else if (amPm === "AM" && hours === '12') {
    convertedTime = `00:${minutes}:${seconds}`;
  } else {
    convertedTime = time;
  }

  return convertedTime;
}

// Desafio 2

function wordsCounter(phrase) {
  let counter = 1;

  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === phrase[index].toUpperCase()) {
      counter += 1;
    }
  }

  return counter;
}

// Desafio 3

function uniqueNumber(numbers) {
  const uniqueNumbers = [];

  for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    let isRepeated = false;

    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (index1 !== index2 && numbers[index1] === numbers[index2]) {
        isRepeated = true;
        break;
      }
    }

    if (!isRepeated) {
      uniqueNumbers.push(numbers[index1]);
    }
  }

  return uniqueNumbers;
}
