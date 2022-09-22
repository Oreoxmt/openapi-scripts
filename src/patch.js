const applyPatch = require('fast-json-patch').applyPatch;
const yaml = require('js-yaml');
const fs = require('fs');

async function patch(patchf, readf, writef) {
    writef = writef || readf;
    const data = fs.readFileSync(readf, 'utf8');
    const patch_content = yaml.load(fs.readFileSync(patchf, 'utf8'))["patches"];
    result = applyPatch(JSON.parse(data), patch_content).newDocument;
    fs.writeFileSync(writef, JSON.stringify(result, null, 2));
    console.log("Apply patch content to", writef);
}

module.exports = patch;
