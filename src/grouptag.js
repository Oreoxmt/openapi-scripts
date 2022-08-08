const fs = require("fs");

function groupTag(json_file, tag_group) {
    const schema = JSON.parse(fs.readFileSync(json_file, 'utf8'));
    const tags = [];

    // iterate through schema["tags"]
    for (let i = 0; i < schema["tags"].length; i++) {
      tags.push(schema["tags"][i]["name"]);
    }

    schema["x-tagGroups"] = [ {"name":tag_group, "tags": tags} ]

    fs.writeFileSync(json_file, JSON.stringify(schema, null, 2));
    console.log(`Group all tags in the ${tag_group} tag group.`);
}

module.exports = groupTag;
