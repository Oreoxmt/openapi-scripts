const fs = require("fs");

function addLogo(file, url, alt, href) {
  const schema = JSON.parse(fs.readFileSync(file, 'utf8'));
  schema["info"]["x-logo"] = {
      "url": url,
      "altText": alt,
      "href": href,
  };
  fs.writeFileSync(file, JSON.stringify(schema, null, 2));
  console.log(`Add logo to ${file}`);
}

module.exports = addLogo;
