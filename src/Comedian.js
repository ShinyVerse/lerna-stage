const oneLinerJoke = require('one-liner-joke');

class Comedian {
  constructor(type ='Comedian') {
    this.type = type;
  }

  tellJoke() {
    return oneLinerJoke.getRandomJoke().body
  }

  endAct() {
    return 'Thanks audience. *Leaves stage*';
  }

}

module.exports = Comedian;
