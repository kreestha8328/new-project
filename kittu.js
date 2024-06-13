let person = {
    name: "kreestha",
    gender: "female",
    age: 20,
    isMarried: false,
    bio: function() {
        console.log("name: " + this.name + ", gender: " + this.gender + ", age: " + this.age + ", isMarried: " + this.isMarried);
    }
};

person.bio();
