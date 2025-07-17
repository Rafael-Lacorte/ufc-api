const app = require('../../src/app');
const request = require('supertest');
const { expect, describe,  } = require('@jest/globals');
const { sequelize } = require('../../src/models');

beforeEach( async () => {
  await sequelize.sync({ force: true });
});

afterAll( async () => {
  await sequelize.close();
});

const JOHN_DOE = {
  fullName: "John Doe",
  nickName: "The Remarkable",
  birthDate: "2000-01-01",
  height: 1.60,
  division: "flyweight",
  nationality: "United States",
  city: "New Jersey",
  wins: 10,
  losses: 9,
  draws: 1 
};

const CLARK_KENT = {
  fullName: "Clark Kent",
  nickName: "The Man of Steel",
  birthDate: "1990-06-18",
  height: 1.90,
  division: "heavyweight",
  nationality: "United States",
  city: "Smallville",
  wins: 999,
  losses: 0,
  draws: 0 
};

const TONY_STARK = {
  fullName: "Tony Stark",
  nickName: "Ironman",
  birthDate: "1970-05-29",
  height: 1.85,
  division: "light_heavyweight",
  nationality: "United States",
  city: "New York",
  wins: 95,
  losses: 2,
  draws: 1
};

const createFighter = async (fighter) => {
  return await request(app).post('/fighter').send(fighter); 
};

describe('POST /fighter', () => {
  it('should create fighter', async () => {
    const res = await createFighter(JOHN_DOE);

    expect(res.status).toBe(201)
  });
});

describe('GET /fighter', () => {
  it('should retrieve a fighter by id', async () => {
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

    await createFighter(JOHN_DOE);
    await createFighter(CLARK_KENT);
    await createFighter(TONY_STARK);

    const res = await request(app).get('/fighter');

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(3);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining(JOHN_DOE),
        expect.objectContaining( TONY_STARK),
        expect.objectContaining(CLARK_KENT),
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