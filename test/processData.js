const {getData,getRaw} = require('./utils')

function processData() {
    return `Processed:${getData()}`;
    //it should return processed real data  
}
function processRaw () {
    return getRaw();
}
module.exports = {processData,processRaw};