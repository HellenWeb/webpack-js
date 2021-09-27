
// Modules

import '../scss/style.css'

// Fake Rest Api "https://jsonplaceholder.typicode.com/"

let showApi = () => {
    return (
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => console.log(json))
    )
}

console.log( showApi() );