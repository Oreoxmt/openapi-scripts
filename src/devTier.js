const fs = require("fs");

function devTier(json_file) {
    const schema = JSON.parse(fs.readFileSync(json_file, 'utf8'));
    schema["paths"]["/api/v1/projects/{project_id}/clusters"]["post"]["x-code-samples"][0]["lang"] = "curl for Dedicated Tier";
    schema["paths"]["/api/v1/projects/{project_id}/clusters"]["post"]["x-code-samples"].push({"lang": "curl for Developer Tier", "source": "dev tier curl example"});
    fs.writeFileSync(json_file, JSON.stringify(schema, null, 2));
    console.log(`Add dev tier to ${json_file}`);
}

module.exports = devTier;
