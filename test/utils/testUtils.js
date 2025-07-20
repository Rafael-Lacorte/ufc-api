const request = require('supertest');
const app = require('../../src/app');

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

const EVENT_MOCK_1 = {
  name: "UFC 100: John Doe vs Clark Kent",
  date: "2000-01-01",
  country: "France",
  city: "Paris",
  arena: "Accor Arena"
};

const EVENT_MOCK_2 = {
  name: "UFC 200: John Doe vs Clark Kent",
  date: "2001-01-01",
  country: "England",
  city: "London",
  arena: "Wellington Arena"
}

const FIGHT_MOCK_1 = {
  eventId: 1,
  fighterA: 1,
  fighterB: 2,
  winnerId: 2,
  result: "decision_split",
  round: 5,
  endMinute: 5,
  endSecond: 0,
  isTitleFight: false
}

const FIGHT_MOCK_2 = {
  eventId: 2,
  fighterA: 2,
  fighterB: 1,
  winnerId: 1,
  result: "ko_tko",
  round: 2,
  endMinute: 3,
  endSecond: 25,
  isTitleFight: true
}

const createFighter = async (fighter) => {
  return await request(app).post('/fighter').send(fighter); 
};

const createEvent = async (event) => {
  return request(app).post('/event').send(event)
};

const createFight = async (fight) => {
  return await request(app).post('/fight').send(fight); 
};

module.exports = {
  JOHN_DOE,
  CLARK_KENT,
  TONY_STARK,
  EVENT_MOCK_1,
  EVENT_MOCK_2,
  FIGHT_MOCK_1,
  FIGHT_MOCK_2,
  createFighter,
  createEvent,
  createFight
}