const multer = require ('multer')

//STORAGE

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'imgs')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: Storage })
module.exports = upload.single('testImage')