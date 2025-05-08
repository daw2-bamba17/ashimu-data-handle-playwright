const { createUser, getUser } = require("../apis/userService");
const { getPetsByStatus } = require("../apis/petService");
const PetNameCounter = require("../apis/petCounter");

(async () => {
  const userData = {
    id: 1001,
    username: "john_doe",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "pass123",
    phone: "1234567890",
    userStatus: 1,
  };

  const createRes = await createUser(userData);
  console.log("User creation response:", createRes);

  const retrievedUser = await getUser(userData.username);
  console.log("Retrieved user:", retrievedUser);

  const soldPets = await getPetsByStatus("sold");
  console.log("Sold pets (id, name):", soldPets);

  const counter = new PetNameCounter(soldPets);
  const nameCount = counter.countNames();
  console.log("Pet name counts:", nameCount);
})();
