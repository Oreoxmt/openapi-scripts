const fs = require("fs");

function removeQuotationInBool(obj) {
    for (let item in obj) {
        if (obj[item] instanceof Object) {
          removeQuotationInBool(obj[item]);
        }
        else if (item == "type" && obj[item] === "boolean") {
            if (obj["example"] != undefined && typeof obj["example"] != "boolean") {
                obj["example"] = obj["example"] === "true" ? true : false;
            }
            if (obj["default"] != undefined && typeof obj["default"] != "boolean") {
                obj["default"] = obj["default"] === "true" ? true : false;
            }
        }
    }
    return obj;
}

async function replaceBool(readf, writef) {
    writef = writef || readf;
    const data = JSON.parse(fs.readFileSync(readf, 'utf8'));
    const schema = removeQuotationInBool(data);
    fs.writeFileSync(writef, JSON.stringify(schema, null, 2));
    console.log(`Remove quotation marks around boolean value in ${writef}`);
}

module.exports = replaceBool;
