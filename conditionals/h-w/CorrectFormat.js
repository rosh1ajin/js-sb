function getCorrectString(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }

function getNameToCorrectFormat(name, surname) {
  let newName = getCorrectString(name);
  let newSurname = getCorrectString(surname);

  console.log('Новое имя и фамилия - ' + newName + ' ' + newSurname);
  console.log((newName === name && newSurname === surname) ? 'Имя осталось без изменений' : 'Имя было преобразовано');
}

getNameToCorrectFormat('dAnIiL', 'mAkArOv');
getNameToCorrectFormat('daniil', 'makarov');
getNameToCorrectFormat('DANIIL', 'MAKAROV');
getNameToCorrectFormat('Daniil', 'Makarov');