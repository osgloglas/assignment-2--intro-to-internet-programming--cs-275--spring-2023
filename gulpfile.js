//dependencies
const { src, dest, series } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);
const cssLinter = require(`gulp-stylelint`);
const jsTranspiler = require(`gulp-babel`);
const jsLinter = require(`gulp-eslint`);
const jsCompressor = require(`gulp-uglify`);

//functions
let compressHTML = () => {
    return src(`*.html`)
        .pipe(htmlCompressor({collapseWhitespace:true}))
        .pipe(dest(`dev/html`));
};

let lintCSS = () => {
    return src(`styles/main.css`)
        .pipe(cssLinter({
            reporters: [
                {formatter: `string`, console: true}
            ]}))
        .pipe(dest(`dev/css`));
};

let lintJS = () => {
    return src(`js/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.result(result => {
            // Called for each ESLint result.
            console.log(`ESLint result: ${result.filePath}`);
            console.log(`# Messages: ${result.messages.length}`);
            console.log(`# Warnings: ${result.warningCount}`);
            console.log(`# Errors: ${result.errorCount}`);
        }))
        .pipe(dest(`dev/js`));
};

let fixJS = () => {
    return src(`dev/*.js`)
        .pipe(jsCompressor())
        .pipe(jsTranspiler())
        .pipe(dest(`dev/js`));
};

//export
exports.default = series(
    compressHTML,
    lintCSS,
    lintJS,
    fixJS
);
