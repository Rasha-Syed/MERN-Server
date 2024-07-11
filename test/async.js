//how we can perform unit tests on async function
function fetchData(callback) {
    setTimeout(()=>{
        callback('Mikey')
    },1000);
}
//calls Mikey after 4 seconds
function MyData(callback) {
    setTimeout(()=>{
        callback({id:1111});
    },1000);
}

module.exports = {fetchData,MyData};
