const fs = require('fs');
const path = require('path');

/**
 * Function for load modules files dynamically
 * @param {String} dirPath path directory where be files
 * @param {Array} ommitFiles list of files names to omit
 * @param {Function} cbRequire callback function to custom require (optional)
 * @param {Function} cbFinish callback function notify when finish load (optional)
 */
function loadDirModules(dirPath, ommitFiles, cbRequire, cbFinish) {
    fs.readdir(dirPath, (err, filesNames) => {
        filesNames
            .filter(fileName => ommitFiles.indexOf(fileName) === -1)
            .forEach((fileName, index, array) => {
                const filePath = path.join(dirPath, fileName);
                //Si es un directorio se omite
                if (fs.statSync(filePath).isDirectory()) return;

                if(cbRequire) cbRequire(filePath);
                else require(filePath);

                if(cbFinish && index === array.length - 1) {
                    cbFinish();
                }
            });
    });
}

module.exports = {
    loadDirModules: loadDirModules
};