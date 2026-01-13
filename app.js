console.log("Hello World!");

const car = {
    make: "Mercedes-Benz",
    model: "GLA 250",
    colour: "Black",
    advert: function() {
        return "this is a " + this.make + " and it's model is " + this.model + " with a sleek design and a shiny " + this.colour + " colour!";
    },
}

console.log(car.advert());

const book = {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    numberOfPages: 374,
    advert: function() {
        return "This book was written by " + this.author + " it's called " + this.title + " and it has " + this.numberOfPages + " pages! ";
    },
}

console.log(book.advert())
