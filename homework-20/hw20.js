const generateKey = (length, characters) => {
    const charactersLength = characters.length;
    let key = '';
    for (let i = 0; i < length; i++) {
        key += characters.charAt((Math.floor(Math.random() * charactersLength)))
    }
    return key
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);

console.log(key); // eg599gb60q926j8i