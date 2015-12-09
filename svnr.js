
function Insurant () {
  this.surname = ''
  this.birthdate = ''
  this.sex = ''
  this.areaNumber = '09'
  this.serialNumber = ''
  this.number = ''
  this.letterPosition = ''
  this.string = ''
}

Insurant.prototype.setSurname = function (surname) {
  this.surname = surname
}

Insurant.prototype.setBirthdate = function (birthdate) {
  this.brithdate = birthdate
}

Insurant.prototype.setSex = function (sex) {
  this.sex = sex
}

Insurant.prototype.setSerialNumber = function () {
  if (this.sex === 'm') {
    this.serialNumber = Math.floor((Math.random() * (49 - 1)) + 1)
  }else if (this.sex === 'w') {
    this.serialNumber = Math.floor((Math.random() * (99 - 50) ) + 50)
  }
}

Insurant.prototype.extractDate = function () {
  var day = this.birthdate.substring(0, 2)
  var month = this.birthdate.substring(3, 5)
  var year = this.birthdate.substring(8)
  return [day, month, year]
}

Insurant.prototype.buildNumber = function () {

}

function calculateCrossSum (number) {
  number = number.toString().split('')
  var qs = 0
  for (var i in number) {
    qs += parseInt(number[i], 10)
  }
  return qs
}

function calculateChecksum (number) {
  number %= 10
  return number
}

function calculateWeighting (number) {
  number = number.toString().split('')
  var weighting = [2, 1, 2, 5, 7, 1, 2, 1, 2, 1, 2, 1]
  var numString
  for (var i in number) {
    number[i] = parseInt(number[i], 10) * weighting[i]
  }
  for (var i in number) {
    numString += number[i].toString
  }
}

function getLetterPosition (str) {
  var letter = str.substring(0, 1)
  var lcAlpha = 'abcdefghijklmnopqrstuvwxyz'
  var ucAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var pos = ''
  pos = lcAlpha.indexOf(letter)
  if (pos === -1) {
    pos = ucAlpha.indexOf(letter)
  }
  pos += 1
  return pos
}
