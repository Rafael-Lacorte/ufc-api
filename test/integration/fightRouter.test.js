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
      const event2 = await createEvent(EVENT_MOCK_2)

    const res = await createFight({
      ...FIGHT_MOCK_1, 
      eventId: event1.body.id,
      fighterA: fighterA.body.id,
      fighterB: fighterB.body.id
    });
    expect(res.status).toBe(201);

  });

});