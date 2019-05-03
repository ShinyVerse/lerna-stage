const { expect } = require('chai');
const sinon = require('sinon')
const comedian = require('../src/Comedian');
const oneLinerJoke = require('one-liner-joke');


describe('Comedian', () => {
  let comedian;
  let jokeStub;

  beforeEach(() => {
    comedian = new Comedian();
    jokeStub = sinon.stub(oneLinerJoke,'getRandomJoke').returns({body: 'Something funny'});
  });

  afterEach(() => {
    jokeStub.restore();
  })

  it('can tell a one liner joke', () => {
    expect(comedian.tellJoke()).to.equal('Something funny');
  })

  it('thanks when act finished', () => {
    expect(comedian.endAct()).to.equal('Thanks audience. *Leaves stage*')
  })
})
