let drake = {

    fullname: "Aubrey Drake Graham",
    age: 34,
    bestSong: "Sometimes",
    dob: "10/24/1986",
    goat: false,
    "kids": 1,

    sayName: function() {
        alert("My name is Drake");
    },

    sayFullName: function() {
        alert("My name is " + this.fullName);
    }

}

console.log(drake);

drake.bestSong = "Passionfruit";

console.log(drake.dob);
console.log(drake.goat);
console.log(drake["kids"]);


drake.sayName()