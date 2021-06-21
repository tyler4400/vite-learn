//  webstorm 还不识别vite的@别名, 暂时用一下

module.exports = {
    resolve: {
        alias: {
            "@": require("path").resolve(__dirname, "src") // change this to your folder path
        }
    }
};
