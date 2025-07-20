const app = require('../../src/app');
const request = require('supertest');
const { expect, describe, beforeEach, afterAll } = require('@jest/globals');
const { sequelize } = require('../../src/models');
const { JOHN_DOE, CLARK_KENT, TONY_STARK, createFighter } = require('../utils/testUtils');

beforeEach( async () => {
  await sequelize.sync({ force: true });
});

afterAll( async () => {
  await sequelize.close();
});

describe('POST /fighter', () => {
  it('should create fighter', async () => {
    const res = await createFighter(JOHN_DOE);

    expect(res.status).toBe(201)
  });

  it('should not create fighter with missing fields', async () => {
    const fighterWithoutNameAndBirth = { ...JOHN_DOE };
    delete fighterWithoutNameAndBirth.fullName;
    delete fighterWithoutNameAndBirth.birthDate
    const res = await createFighter(fighterWithoutNameAndBirth);

    expect(res.status).toBe(400);
    expect(res.body.details).toEqual(expect.arrayContaining([
      expect.stringContaining("\"fullName\" is required"),
      expect.stringContaining("\"birthDate\" is required")
    ]));
  });
});

describe('GET /fighter', () => {
  it('should retrieve a fighter by id with correct data fields', async () => {
    const createdRes = await createFighter(JOHN_DOE);
    const res = await request(app).get(`/fighter/${createdRes.body.id}`);
  
    expect(res.body).toEqual(expect.objectContaining({
      fullName: 'John Doe',
      birthDate: '2000-01-01',
      wins: 10
    }));
    expect(res.status).toBe(200);
  });

  it('should retrive all the fighters', async () => {
    await Promise.all([
      createFighter(JOHN_DOE),
      createFighter(CLARK_KENT),
      createFighter(TONY_STARK),
    ]);

    const res = await request(app).get('/fighter');

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(3);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining(JOHN_DOE),
        expect.objectContaining(CLARK_KENT),
        expect.objectContaining(TONY_STARK),
        ])
      );
  });
});

describe('PUT /fighter', () => {
  it('should update a fighter information', async () => {
    const createdRes = await createFighter(JOHN_DOE);
  
    const res = await request(app)
    .put(`/fighter/${createdRes.body.id}`)
    .send({ nickName: 'The Irrelevant' });
  
    const updatedFighter = await request(app).get(`/fighter/${createdRes.body.id}`);
  
    expect(res.status).toBe(204);
    expect(updatedFighter.body.nickName).toBe('The Irrelevant');
  });

  it('should return status 400 when no fields are sent in update request', async () => {
    const createdRes = await createFighter(JOHN_DOE);

    const res = await request(app)
    .put(`/fighter/${createdRes.body.id}`)
    .send({});

    expect(res.status).toBe(400);
    expect(res.body.details).toEqual(
      expect.arrayContaining(
        [expect.stringContaining("\"value\" must have at least 1 key")]
      )
    )
  })

  it('should return status 400 when trying to update fighter with invalid field', async () => {
    const createdRes = await createFighter(JOHN_DOE);

    const res = await request(app)
    .put(`/fighter/${createdRes.body.id}`)
    .send({reach: 1.70});

    expect(res.status).toBe(400);
    expect(res.body.details).toEqual(
      expect.arrayContaining(
        [expect.stringContaining("\"reach\" is not allowed")]
      )
    )
  })
});

describe('DELETE /fighter', () => {
  it('should delete a fighter', async () => {
    const createdRes = await createFighter(JOHN_DOE);
    
    const res = await request(app).delete(`/fighter/${createdRes.body.id}`);
    
    const deletedFighter = await request(app).get(`/fighter/${createdRes.body.id}`);
    
    expect(res.status).toBe(204);
    expect(deletedFighter.status).toBe(404);
  });
});