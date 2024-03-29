const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2
}
console.log(rollTheDice())

//this function allows us to get 2 dice numbers together. the let die1 shows us using math.random to get a number between 0 and 1 multiplying by 6 then adding 1 to get a number when rounded down is a whole number between 1 and 6
