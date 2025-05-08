const { request } = require('@playwright/test');

const baseUrl = 'https://petstore.swagger.io/v2';

async function createUser(userData) {
  const context = await request.newContext();
  const response = await context.post(`${baseUrl}/user`, {
    data: userData,
  });
  return response.json();
}

async function getUser(username) {
  const context = await request.newContext();
  const response = await context.get(`${baseUrl}/user/${username}`);
  return response.json();
}

module.exports = { createUser, getUser };
