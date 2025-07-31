const app = require('../../src/app')
const { beforeEach, afterAll, describe, it, expect } = require('@jest/globals')
const { sequelize } = require('../../src/models')
const request = require('supertest');
const { createFight, createFighter, JOHN_DOE, CLARK_KENT, createEvent, EVENT_MOCK_1, EVENT_MOCK_2, FIGHT_MOCK_1, FIGHT_MOCK_2, TONY_STARK } = require('../utils/testUtils');

beforeEach(async () => {
  await sequelize.sync({ force: true});
})

afterAll(async () => {
  await sequelize.close();
});

describe.skip('POST /fight', () => {
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
    const incompleteFight = { ...FIGHT_MOCK_1 }
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

    it('should return error 400 and message when result has invalid value', async () => {
      const fighterA = await createFighter(CLARK_KENT)
      const fighterB = await createFighter(JOHN_DOE)
      const event1 = await createEvent(EVENT_MOCK_1)

      const res = await createFight({
      ...FIGHT_MOCK_1, 
      eventId: event1.body.id,
      fighterA: fighterA.body.id,
      fighterB: fighterB.body.id,
      result: 'flying_kick'
      });

      expect(res.status).toBe(400);
      expect(res.body.details).toEqual(expect.arrayContaining([
        expect.stringContaining("\"result\" must be one of [ko_tko, submission, decision_unanimous, decision_split, no_contest, dq]")
      ]))
    });
});

describe('GET /fight', () => {
  it.skip('should retrieve one fight by id', async () => {
    const fighterA = await createFighter(CLARK_KENT)
    const fighterB = await createFighter(JOHN_DOE)
    const event1 = await createEvent(EVENT_MOCK_1)

    const createdFight = await createFight({
      ...FIGHT_MOCK_1, 
      eventId: event1.body.id,
      fighterA: fighterA.body.id,
      fighterB: fighterB.body.id
    });

    const res = await request(app).get(`/fight/${createdFight.body.id}`);
    
    expect(res.status).toBe(200);
    expect(res.body).toEqual(expect.objectContaining({
          eventId: 1,
          fighterA: 1,
          fighterB: 2,
          result: 'decision_split'
    }));
  });

  it.skip('should retrieve all fight by fighter id', async() => {
    const fighterA = await createFighter(CLARK_KENT)
    const fighterB = await createFighter(JOHN_DOE)
    const event1 = await createEvent(EVENT_MOCK_1)

    const createdFight1 = await createFight({
      ...FIGHT_MOCK_1, 
      eventId: event1.body.id,
      fighterA: fighterA.body.id,
      fighterB: fighterB.body.id
    });

    const event2 = await createEvent(EVENT_MOCK_2)

    await createFight({
      ...FIGHT_MOCK_2, 
      eventId: event2.body.id,
      fighterA: fighterB.body.id,
      fighterB: fighterA.body.id
    });

    const res = await request(app).get(`/fight/fighter/${createdFight1.body.id}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(expect.arrayContaining([
      expect.objectContaining(FIGHT_MOCK_1),
      expect.objectContaining(FIGHT_MOCK_2)
    ]))
    console.log(res.body);
  });

  it.skip('should retrieve all fights by event id', async () => {
    const fighterA = await createFighter(CLARK_KENT);
    const fighterB = await createFighter(JOHN_DOE);
    const event1 = await createEvent(EVENT_MOCK_1);

    await createFight({
      ...FIGHT_MOCK_1, 
      eventId: event1.body.id,
      fighterA: fighterA.body.id,
      fighterB: fighterB.body.id
    });

    await createFight({
      ...FIGHT_MOCK_2, 
      eventId: event1.body.id,
      fighterA: fighterB.body.id,
      fighterB: fighterA.body.id
    });

    const res = await request(app).get(`/fight/event/${event1.body.id}`);

    expect(res.status).toBe(200);
    console.log(res.body);
    expect(res.body).toEqual(expect.arrayContaining([
      expect.objectContaining(FIGHT_MOCK_1),
      expect.objectContaining({...FIGHT_MOCK_2, eventId: 1 })
    ]));
  });

  it('should retrieve fights and event by fighter ', async () => {

    
  });
});