#! /usr/bin/env node
const fse = require('fs-extra');
const args = process.argv.slice(2);

const srcDir = `../themes/${args}`;
const destDir = `../../../../barebones`;

fse.copySync(srcDir, destDir, {
    overwrite: false
}, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("success!");
    }
});
