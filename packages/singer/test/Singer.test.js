const { expect } = require('chai');
const Singer = require('../src/singer');


describe('Singer', () => {
  let singer;
  beforeEach(() => {
    singer = new Singer();
  })

  it('can sing', () => {
    expect(singer.sing()).to.equal('la la la...LA!');
  });

  it('bows when act ends', () => {
    expect(singer.endAct()).to.equal('*bows*');
  })
})
