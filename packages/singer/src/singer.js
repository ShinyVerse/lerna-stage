
class Singer {
  constructor(name ='Beatrice WagaDonaMaker') {
    this.name = name;
  }

  sing() {
    return 'la la la...LA!';
  }

  endAct() {
    return '*bows*';
  }

}

module.exports = Singer;
