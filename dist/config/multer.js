import multer from "multer";
import path from "path";
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        var folder = req.body.folder;
        var uploadPath = "uploads/".concat(folder, "/");
        cb(null, uploadPath);
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({
    storage: storage
});
export { upload };
