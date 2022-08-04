const fs = require("fs");

function devTier(json_file) {
    const schema = JSON.parse(fs.readFileSync(json_file, 'utf8'));
    schema["paths"]["/api/v1beta/projects/{project_id}/clusters"]["post"]["x-code-samples"][0]["lang"] = "curl for Dedicated Tier";
    schema["paths"]["/api/v1beta/projects/{project_id}/clusters"]["post"]["x-code-samples"].push({"lang": "curl for Developer Tier", "source":  "curl --digest \\\n  --user 'YOUR_PUBLIC_KEY:YOUR_PRIVATE_KEY' \\\n  --request POST \\\n  --url https://api.tidbcloud.com/api/v1beta/projects/{project_id}/clusters \\\n  --header 'content-type: application/json' \\\n  --data '{\"name\":\"Cluster0\",\"cluster_type\":\"SHARED\",\"cloud_provider\":\"AWS\",\"region\":\"us-west-2\",\"config\":{\"root_password\":\"password_example\",\"ip_access_list\":[{\"cidr\":\"8.8.8.8/32\",\"description\":\"My IP Address\"}]}}'"});
    fs.writeFileSync(json_file, JSON.stringify(schema, null, 2));
    console.log(`Add dev tier to ${json_file}`);
}

module.exports = devTier;
