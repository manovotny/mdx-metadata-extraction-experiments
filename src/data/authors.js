const randomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);

const janeDoe = {
    age: randomInt(),
    name: 'Jane Doe',
    twitter: '@janedoe',
    website: 'janedoe.com',
};

const johnDoe = {
    age: randomInt(),
    name: 'John Doe',
    twitter: '@johndoe',
    website: 'johndoe.com',
};

export {janeDoe, johnDoe};
