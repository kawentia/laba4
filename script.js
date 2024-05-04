//завдання1
function ucFirst(str) {
  if (!str) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(ucFirst("hello"));
console.log(ucFirst("world"));

//завдання2
function checkSpam(str) {
  if (str.includes('росі') || str.includes('XXX')) {
    return true;
  }

  return false;
}
console.log(checkSpam("Повідомлення про рекламу"));
console.log(checkSpam("Цей текст містить XXX"));
console.log(checkSpam("росі"));

//завдання3
function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  }

  return str.slice(0, maxlength - 3) + '...';
}
console.log(truncate("Велика книга", 10));
console.log(truncate("Велика книга", 15));
console.log(truncate("Велика книга", 5));

//завдання4
function strikeStr(str) {
  const words = str.split(' ');
  const lines = [];
  let currentLine = '';

  for (let i = 0; i < words.length; i++) {
    // Перевіряємо, чи поточна лінія не порожня і не містить вже 3 слова
    if (currentLine !== '' && currentLine.split(' ').length === 3) {
      lines.push(currentLine);
      currentLine = '';
    }

    // Додаємо поточне слово до поточної лінії
    currentLine += (currentLine === '' ? '' : ' ') + words[i];
  }

  // Додаємо останню неповну лінію, якщо така є
  if (currentLine !== '') {
    lines.push(currentLine);
  }

  return lines;
}

console.log(strikeStr("Це речення містить більше трьох слів, тому його потрібно розбити на кілька рядків."));

