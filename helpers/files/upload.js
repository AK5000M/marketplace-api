'use strict';
// Define module
const fs = require('fs');
const sharp = require('sharp');

module.exports = (helper) => {
  /**
   * Select
   *
   * @param {Object} req - Request
   * @param {Object} res - Response
   * @param {Object} model - Model
   * @return {Promise}
   */
  return (req, res, model) => {
    return new Promise((resolve, reject) => {
      try {
        let prefix = '';
        if (req.originalUrl) {
          let p = req.originalUrl.split('/');
          if (p.length >= 3) {
            prefix = p[1] + '_';
          }
        }

        if (req.files && req.files.file) {
          const file = req.files.file;
          const tmp = file.type.split('/');
          if (tmp.length == 2) {
            const newFileName = prefix + helper.lib.uuid.v4() + '.webp';
            const fileNameWithPath =
              helper.settings.files.path + '/' + newFileName;
            sharp(file.path)
              .webp()
              .toFile(fileNameWithPath)
              .then(() => {
                console.log(newFileName + ' saved');
                fs.unlinkSync(file.path);
                console.log(file.path + ' deleted');
                resolve({ data: { file: newFileName } });
              })
              .catch((err) => {
                console.error(err);
                reject(
                  helper.lib.httpError(500, 'No se pudo guardar la imagen')
                );
              });
          } else {
            reject(helper.lib.httpError(400, 'No se pudo subir el archivo'));
          }
        } else {
          reject(helper.lib.httpError(400, 'No hay archivo para subir'));
        }
      } catch (error) {
        console.error('Helper "files.upload" response error');
        console.error(error);
        reject(error);
      }
    });
  };
};
