const app = require('../../src/app')
const { beforeEach, afterAll, describe, it, expect } = require('@jest/globals')
const { sequelize } = require('../../src/models')
const request = require('supertest');
const { createFight, createFighter, JOHN_DOE, CLARK_KENT, createEvent, EVENT_MOCK_1, EVENT_MOCK_2, FIGHT_MOCK_1 } = require('../utils/testUtils');

beforeEach(async () => {
  await sequelize.sync({ force: true});
})

afterAll(async () => {
  await sequelize.close();
});


describe('POST /fight', () => {
  it('should create fight', async () => {

    const fighterA = await createFighter(CLARK_KENT)
    const fighterB = await createFighter(JOHN_DOE)
    const event1 = await createEvent(EVENT_MOCK_1)

    const res = await createFight({
      ...FIGHT_MOCK_1, 
      eventId: event1.body.id,
      fighterA: fighterA.body.id,
      fighterB: fighterB.body.id
    });
    expect(res.status).toBe(201);
  });

  it('should return error 400 and message when having missing field', async () => {

    const incompleteFight = FIGHT_MOCK_1
    delete incompleteFight.eventId
    delete incompleteFight.fighterA
    delete incompleteFight.fighterB
    
    const res = await createFight(incompleteFight);
    expect(res.status).toBe(400);
    expect(res.body.details).toEqual(expect.arrayContaining([
      expect.stringContaining("\"eventId\" is required"),
      expect.stringContaining("\"fighterA\" is required"),
      expect.stringContaining("\"fighterB\" is required"),
    ]));
  });

});