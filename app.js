//Store message components
const flowers = ['Roses', 'Tulips', 'Sunflowers', 'Poppys', 'Dandelions', 'Daffodills'];
const colours = ['red', 'yellow', 'white', 'pink'];
const messages1 = ['Purple: Am I a joke to you?', 'I’m eating right now because I have nothing to do.', 'let’s turn my dinner for one, into dinner for two.', 'I’m Liam Neeson, and I will find you.'];

//Function to generate random message
const valentineMessage = () => {
    return `${flowers[Math.floor(Math.random() * 6)]} are ${colours[Math.floor(Math.random() * 4)]}, violets are blue, ${messages1[Math.floor(Math.random() * 4)]}`
}

console.log(valentineMessage());
