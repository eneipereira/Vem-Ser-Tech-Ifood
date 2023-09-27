// Desafio 1

function converteFormatoHora(time) {
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