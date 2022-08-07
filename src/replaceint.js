const fs = require("fs");

function replaceIntegerInternal(obj) {
    for (let item in obj) {
        if (obj[item] instanceof Object) {
            replaceIntegerInternal(obj[item]);
        }
        else if (item == "type" && obj[item] === "integer") {
            if (obj["example"] != undefined && typeof (obj["example"]) != "number") {
                obj["example"] = parseInt(obj["example"]);
            }
            if (obj["default"] != undefined && typeof (obj["default"]) != "number") {
                obj["default"] = parseInt(obj["default"]);
            }
        }
    }
    return obj;
}

async function replaceInteger(readf, writef) {
    writef = writef || readf;
    const data = JSON.parse(fs.readFileSync(readf, 'utf8'));
    const schema = replaceIntegerInternal(data);
    fs.writeFileSync(writef, JSON.stringify(schema, null, 2));

}

module.exports = replaceInteger;
