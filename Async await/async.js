// async
//
// // fetch
const response = fetch("https://jsonplaceholder.typicode.com/posts").then(data => {
    return data
}).then(data => {
    return data.json()
}).then(json => {
    console.log(json)
})
console.log(response)


//async - ozini ozi chaqiruvchi funksiya

;(async function(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const json = await response.json()

        console.log(json)
    } catch (error){
        console.log(error)
    }
})()