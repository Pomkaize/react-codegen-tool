const fs = require('fs').promises;
const path = require('path');
const { program } = require('commander');

const REPLACE_REGEXP = /(((React.)?(Pure)?)?(Component))/gm;

program
    .command('gen <component>')
    .description('generate component from templates')
    .requiredOption('-t, --templates <templates>', 'template path')
    .action(async (component, cmd) => {
        const { templates } = cmd;

        const outputPath = path.join(process.cwd(), component);
        const templatesPath = path.isAbsolute(templates) ? templates : path.join(process.cwd(), templates);
        const templatesPaths = await fs.readdir(templatesPath);

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
