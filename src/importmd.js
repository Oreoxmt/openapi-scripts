const fs = require("fs");

function importMd(file, path) {
  const schema = JSON.parse(fs.readFileSync(file, 'utf8'));
  schema["info"]["description"] = { $ref: path };
  fs.writeFileSync(file, JSON.stringify(schema, null, 2));
  console.log(`Add \$Ref of ${path} to ${file}`);
}

module.exports = importMd;
