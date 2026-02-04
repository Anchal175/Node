const arr = [1, 2, 3, 4];
arr.forEach(num => console.log(num));

function fetchData(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 2000);
}

fetchData(function(result) {
    console.log(result);
});
