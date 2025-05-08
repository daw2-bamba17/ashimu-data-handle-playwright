const { request } = require('@playwright/test');

const baseUrl = 'https://petstore.swagger.io/v2';

async function getPetsByStatus(status = 'sold') {
  const context = await request.newContext();
  const response = await context.get(`${baseUrl}/pet/findByStatus?status=${status}`);
  const pets = await response.json();
  return pets.map(pet => ({ id: pet.id, name: pet.name }));
}

module.exports = { getPetsByStatus };
