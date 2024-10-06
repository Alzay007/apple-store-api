import fs from "fs";
import path from "path";
export var getBannerImages = function(req, res) {
    var bannersDir = path.join(__dirname, "../uploads/banners");
    fs.readdir(bannersDir, function(err, files) {
        if (err) {
            return res.status(500).json({
                message: "Error reading banners directory",
                error: err
            });
        }
        var images = files.filter(function(file) {
            return /\.(jpg|jpeg|png|gif|webp)$/.test(file);
        });
        var imagePaths = images.map(function(image) {
            return "uploads/banners/".concat(image);
        });
        res.status(200).json(imagePaths);
    });
};
