#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const readline = require('readline');
const { program } = require('commander');

const REPLACE_REGEXP = /(((React.)?(Pure)?)?(Component))/gm;
const TEMPLATES_PATH = process.env.REACT_CODEGEN_TEMPLATES_PATH;

const getComponentName = () => new Promise((resolve) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Write component name: ',answer => {

        resolve(answer)

        rl.close();
    });
})

program
    .requiredOption('-t, --template <template>', 'template name (folder)')
    .action(async () => {
        const { template } = program.opts();
        const templatesPath = path.join(TEMPLATES_PATH, template);

        console.log(`templates from: ${templatesPath}`);

        let templatesPaths = [];

        try {
            templatesPaths = await fs.readdir(templatesPath);
        } catch (e) {
            throw new Error('templates folder not found');
        }

        if (templatesPaths.length === 0) {
            throw new Error('not found template')
        }

        const component = await getComponentName(templatesPath);

        const outputPath = path.join(process.cwd(), component);

        for(const templatePath of templatesPaths) {
            const template = await fs.readFile(path.join(templatesPath, templatePath), { encoding: "utf-8" });

            const output = template.replace(REPLACE_REGEXP, (match, p1, p2) => {
                if (p2) {
                    return p1;
                }

                return component;
            });

            await fs.mkdir(outputPath, { recursive: true });

            const outputFilePath = path.join(outputPath, templatePath.replace(REPLACE_REGEXP, component));

            await fs.writeFile(outputFilePath, output, { encoding: "utf-8" });
        }
    })

program.parse(process.argv);
