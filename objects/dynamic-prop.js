function printObjectProperty(obj, propName) {
  console.log(obj[propName]);
}

let me = {
  name: 'Даниил',
  surname: 'Макаров',
  middleName: 'Александрович',
  birthDate: {year: 2004, month: 10, day: 11},
  occupation: 'Frontend Developer',
  married: false,
};

printObjectProperty(me, 'name');
printObjectProperty(me, 'surname');
printObjectProperty(me, 'occupation');
