
// Modules

// Logic

let post = {
    name: 'Webpack',
    port: 3000,
    prot: 'http://',
    host: 'localhost',
}

let { name, ...info } = post

console.log(name, info);