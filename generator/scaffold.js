/* eslint-disable-next-line */
const fs = require('fs');
/* eslint-disable-next-line */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ACTION = process.argv[2]; // First 2 arguments are default ones that Node.js provides
const NEW_COMPONENT_NAME = process.argv[3]; // First 2 arguments are default ones that Node.js provide

const ACTION_TYPES = {
  BUILD: 'build',
  DESTROY: 'destroy',
};

const PROMPT_ANSWERS = {
  PROCEED: 'yes',
  STOP: 'no',
};

const SKELETON_COMPONENT_NAME = 'SkeletonComponent';
const SKELETON_FOLDER = './generator/skeleton';

const SKELETON_PACKAGE_FOLDER = `${SKELETON_FOLDER}/package`;
const SKELETON_LOCAL_FOLDER = `${SKELETON_FOLDER}/local`;

const COMPONENT_PACKAGE_FOLDER = './src/components';
const COMPONENT_LOCAL_FOLDER = './src/local';

const CONFIG_EXTENSION = 'ts';
const CLASS_EXTENSION = 'classes.ts';
const VUE_EXTENSION = 'vue';

const SRC_COMPONENTS_PACKAGE_FOLDER = `${SKELETON_PACKAGE_FOLDER}`;
const SRC_COMPONENTS_LOCAL_FOLDER = `${SKELETON_LOCAL_FOLDER}`;

const TARGET_COMPONENTS_PACKAGE_FOLDER = `${COMPONENT_PACKAGE_FOLDER}/${NEW_COMPONENT_NAME}`;
const TARGET_COMPONENTS_LOCAL_FOLDER = `${COMPONENT_LOCAL_FOLDER}/${NEW_COMPONENT_NAME}`;

const SRC_COMPONENTS_LOCAL_CONFIG = `${SRC_COMPONENTS_LOCAL_FOLDER}/${SKELETON_COMPONENT_NAME}.${CONFIG_EXTENSION}`;
const SRC_COMPONENTS_PACKAGE_CLASS = `${SRC_COMPONENTS_LOCAL_FOLDER}/${SKELETON_COMPONENT_NAME}.${CLASS_EXTENSION}`;

const SRC_COMPONENTS_PACKAGE_COMPONENT = `${SRC_COMPONENTS_PACKAGE_FOLDER}/${SKELETON_COMPONENT_NAME}.${VUE_EXTENSION}`;

const TARGET_COMPONENTS_LOCAL_CONFIG = `${TARGET_COMPONENTS_LOCAL_FOLDER}/${NEW_COMPONENT_NAME}.${CONFIG_EXTENSION}`;
const TARGET_COMPONENTS_LOCAL_CLASS = `${TARGET_COMPONENTS_LOCAL_FOLDER}/${NEW_COMPONENT_NAME}.${CLASS_EXTENSION}`;

const TARGET_COMPONENTS_PACKAGE_COMPONENT = `${TARGET_COMPONENTS_PACKAGE_FOLDER}/${NEW_COMPONENT_NAME}.${VUE_EXTENSION}`;

const DIRECTORIES = [TARGET_COMPONENTS_LOCAL_FOLDER, TARGET_COMPONENTS_PACKAGE_FOLDER];

const FILES = [
  [SRC_COMPONENTS_LOCAL_CONFIG, TARGET_COMPONENTS_LOCAL_CONFIG],
  [SRC_COMPONENTS_PACKAGE_CLASS, TARGET_COMPONENTS_LOCAL_CLASS],
  [SRC_COMPONENTS_PACKAGE_COMPONENT, TARGET_COMPONENTS_PACKAGE_COMPONENT],
];

function makeFileFromSkeleton(srcFile, targetFile, skeletonComponentName, newComponentName) {
  fs.readFile(srcFile, 'utf8', function (err, data) {
    if (err) return console.log(err, `Could not read ${srcFile}`);

    const skeletonComponentRegEx = new RegExp(skeletonComponentName, 'g');

    const result = data.replace(skeletonComponentRegEx, newComponentName);

    fs.writeFile(targetFile, result, 'utf8', function (err) {
      if (err) return console.log(err, `Could not write ${targetFile}`);
    });
  });
}

if (ACTION === ACTION_TYPES.BUILD) {
  // Create directories
  DIRECTORIES.forEach((directory) => {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
  });

  // Create files
  FILES.forEach((fileGroup) => {
    const [src, target] = fileGroup;
    makeFileFromSkeleton(src, target, SKELETON_COMPONENT_NAME, NEW_COMPONENT_NAME);
  });
  rl.close();
} else if (ACTION === ACTION_TYPES.DESTROY) {
  rl.question(
    `Are you sure you want to destroy ${NEW_COMPONENT_NAME}? [${PROMPT_ANSWERS.STOP}]/${PROMPT_ANSWERS.PROCEED}: `,
    function (answer) {
      if (answer === PROMPT_ANSWERS.PROCEED) {
        DIRECTORIES.forEach((directory) => {
          if (fs.existsSync(directory)) {
            fs.rmdirSync(directory, { recursive: true });
          }
        });
      }
      rl.close();
    }
  );
}
