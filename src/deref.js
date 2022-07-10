const fs = require("fs");
const $RefParser = require("@apidevtools/json-schema-ref-parser");

async function deref(readf, writef) {
    const data = fs.readFileSync(readf, 'utf8');
    const schema = await $RefParser.dereference(JSON.parse(data));
    fs.writeFileSync(writef, JSON.stringify(schema, null, 2));
    console.log("Wrote dereferenced schema to", writef);
}

module.exports = deref;
