function Insurant () {
  this.surname = '';
  this.birthdate = '';
  this.sex = '';
  this.areaNumber = '09';
  this.serialNumber = '';
  this.number = '';
  this.letterPosition = '';
  this.insuranceNumber = '';
}

Insurant.prototype.setSurname = function (surname) {
  this.surname = surname;
};

Insurant.prototype.setBirthdate = function (birthdate) {
  this.birthdate = birthdate;
};

Insurant.prototype.setSex = function (sex) {
  this.sex = sex;
};

Insurant.prototype.setSerialNumber = function () {
  if (this.sex === 'm') {
    this.serialNumber = Math.floor((Math.random() * (49 - 1)) + 1);
    if (this.serialNumber < 10) {
      this.serialNumber = '0' + this.serialNumber;
    }
  }else if (this.sex === 'w') {
    this.serialNumber = Math.floor((Math.random() * (99 - 50)) + 50);
  }
};

Insurant.prototype.extractDate = function () {
  var day = this.birthdate.substring(0, 2);
  var month = this.birthdate.substring(3, 5);
  var year = this.birthdate.substring(8);
  var date = [day, month, year];
  return date;
};

Insurant.prototype.buildNumber = function () {
  var date = this.extractDate();
  if (this.serialNumber === '') {
    this.setSerialNumber();
  }
  if (this.letterPosition === '') {
    this.letterPosition = getLetterPosition(this.surname);
  }
  this.number = this.areaNumber + date[0] + date[1] + date[2] + this.letterPosition + this.serialNumber;
};

Insurant.prototype.createInsuranceNumber = function () {
  this.buildNumber();
  var date = this.extractDate();
  var weightedNumber = calculateWeighting(this.number);
  var crossSum = calculateCrossSum(weightedNumber);
  var checkSum = calculateChecksum(crossSum);
  if (this.serialNumber === '') {
    this.setSerialNumber();
  }
  this.insuranceNumber = this.areaNumber + date[0] + date[1] + date[2] + this.surname.substring(0, 1) + this.serialNumber + checkSum;
};

function calculateCrossSum (number) {
  number = number.toString().split('');
  var qs = 0;
  for (var i in number) {
    qs += parseInt(number[i], 10);
  }
  return qs;
}

function calculateChecksum (number) {
  number = parseInt(number, 10);
  number %= 10;
  return number;
}

function calculateWeighting (number) {
  number = number.toString().split('');
  var weighting = [2, 1, 2, 5, 7, 1, 2, 1, 2, 1, 2, 1];

  var numString = '';
  for (var i in number) {
    number[i] = parseInt(number[i], 10) * weighting[i];
  }
  for (var i in number) {
    numString += number[i].toString();
  }
  return numString;
}

function getLetterPosition (str) {
  var letter = str.substring(0, 1);
  var lcAlpha = 'abcdefghijklmnopqrstuvwxyz';
  var ucAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var pos = -1;
  pos = lcAlpha.indexOf(letter);
  if (pos === -1) {
    pos = ucAlpha.indexOf(letter);
  }
  pos += 1;
  if (pos < 10) {
    pos = '0' + pos;
  }
  return pos;
}

var i = new Insurant();
i.setSurname('B');
i.setBirthdate('06.06.1966');
i.setSex('m');
i.createInsuranceNumber();
console.log(i.insuranceNumber);
