import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-'+ path.extname(file.originalname));
    }
});

const upload = multer({
  storage: storage,
  limits:{filesize:3000000},
});

export default upload;
