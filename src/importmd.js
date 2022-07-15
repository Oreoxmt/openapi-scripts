const fs = require("fs");

function importMd(json_file, md_folder, des_file) {
    const schema = JSON.parse(fs.readFileSync(json_file, 'utf8'));
    const description = fs.readdirSync(md_folder).sort().map(
        (filename) => fs.readFileSync(`${md_folder}/${filename}`)
    ).join("\n");
    fs.writeFileSync(des_file, description, "utf8");
    schema["info"]["description"] = { $ref: des_file };
    fs.writeFileSync(json_file, JSON.stringify(schema, null, 2));
    console.log(`Add \$Ref of ${md_folder} to ${json_file}`);
}

module.exports = importMd;
