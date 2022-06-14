#! /usr/bin/env node
const fse = require('fs-extra');
const args = process.argv.slice(3);

const srcDir = `${__dirname}/../themes/${args}`;
const destDir = `./barebones`;

fse.copySync(srcDir, destDir, {
    overwrite: false
}, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("success!");
    }
});
