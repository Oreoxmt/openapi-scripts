const fs = require("fs");

function groupTag(json_file, tag_group) {
    const schema = JSON.parse(fs.readFileSync(json_file, 'utf8'));
    const tags = schema["tags"].map(tag => tag["name"]);

    schema["x-tagGroups"] = [ {"name":tag_group, "tags": tags} ]

    fs.writeFileSync(json_file, JSON.stringify(schema, null, 2));
    console.log(`Group all tags in the ${tag_group} tag group.`);
}

module.exports = groupTag;
