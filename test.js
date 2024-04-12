const arr = {}

arr.forEach(item => console.log(item))

try {
    console.log(Object.values(arr))
    // arr.forEach(item => console.log(item))
} catch(err) {
    console.log('catch', err)
}

console.log('some code')