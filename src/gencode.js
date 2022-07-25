const OpenAPISnippet = require('openapi-snippet');
const fs = require("fs");
const targets = ["shell_curl"]

async function genSampleCode(file) {
    let openApi = JSON.parse(fs.readFileSync(file, 'utf8'));
    try {
        Object.keys(openApi.paths).forEach(path => {
            Object.keys(openApi.paths[path]).forEach(method => {
                const snippets = OpenAPISnippet.getEndpointSnippets(openApi, path, method, targets);
                const samples = []
                openApi.paths[path][method]['x-code-samples'] = samples;
                snippets.snippets.forEach(snippet => {
                    snippet.content = snippet.content.replace("curl", "curl --digest \\\n  --user 'YOUR_PUBLIC_KEY:YOUR_PRIVATE_KEY' \\\n ").replaceAll("%7B", "{").replaceAll("%7D", "}").replaceAll('comundefined', 'com');
                    samples.push({
                        lang: snippet.id.split('_')[1],
                        source: snippet.content
                    })
                })
            })
        })
        fs.writeFileSync(file, JSON.stringify(openApi, null, 2))
    } catch (err) {
        console.log(err)
    }
}

module.exports = genSampleCode;
