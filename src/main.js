const { Command } = require("commander");

const deref = require("./deref.js");
const importMd = require("./importmd.js");
const addLogo = require("./addlogo.js");
const genSampleCode = require("./gencode.js");
const devTier = require("./devTier.js");

const program = new Command();
program
    .name("postprocess")
    .description("Postprocess an OpenAPI document for ReDoc")
    .version("0.3.0");
program.command("deref")
    .description("Use $RefParser to dereference a JSON schema")
    .argument("<in-filename>", "Input JSON file")
    .argument("[out-filename]", "Output JSON file. If not specified, use in-filename.")
    .action(deref);
program.command("importmd")
    .description("Merge markdown files in <md-folder> to a markdown <gen-file>, and import it as $ref to JSON info.description.")
    .argument("<in-filename>", "Target JSON file")
    .argument("<md-folder>", "Folder of markdown files to import")
    .argument("<gen-md>", "Merged markdown files")
    .action(importMd);
program.command("addlogo")
    .description("Add a logo to JSON info.x-logo")
    .argument("<in-filename>", "Target JSON file")
    .argument("<url>", "Logo absolute url")
    .argument("<alt>", "Logo alt text")
    .argument("<href>", "Logo href")
    .action(addLogo);
program.command("gencode")
    .description("Generate sample code to JSON as x-code-samples")
    .argument("<in-filename>", "Target JSON file")
    .action(genSampleCode);
program.command("devtier")
    .description("Add sample for creating a dev tier cluster")
    .argument("<in-filename", "Target JSON file")
    .action(devTier)
program.parse();
