const OpenAPISnippet = require('openapi-snippet');
const fs = require("fs");
const targets = ["shell_curl", "shell_wget"]

async function genSampleCode(file) {
    let openApi = JSON.parse(fs.readFileSync(file, 'utf8'));
    openApi.components = {
        securitySchemes: openApi.securityDefinitions
    }

    try {
        Object.keys(openApi.paths).forEach(path => {
            Object.keys(openApi.paths[path]).forEach(method => {
                const snippets = OpenAPISnippet.getEndpointSnippets(openApi, path, method, targets);
                const samples = []
                openApi.paths[path][method]['x-code-samples'] = samples;
                snippets.snippets.forEach(snippet => {
                    samples.push({
                        lang: snippet.title.split(' ')[0],
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
