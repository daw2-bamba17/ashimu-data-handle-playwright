class PetNameCounter {
  constructor(pets) {
    this.pets = pets;
  }

  countNames() {
    const nameCount = {};
    this.pets.forEach((pet) => {
      if (pet.name) {
        nameCount[pet.name] = (nameCount[pet.name] || 0) + 1;
      }
    });
    return nameCount;
  }
}

module.exports = PetNameCounter;
