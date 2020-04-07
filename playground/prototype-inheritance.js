const Dog = function(name, species, gender) {
    this.name = name;
    this.species = species;
    this.gender = gender;
  }
  
  Dog.prototype = {
    type: "Dog",
    bark: function() {
    console.log (`${this.name} says bark bark!`)
    },
    whine: function() {
      console.log(`${this.name} the ${this.species} is crying...`)
    }
  }
  
  const ellie = new Dog("Ellie", "mini goldendoodle", "female");
  console.log(ellie)