var autoprefixer = require("gulp-autoprefixer");
var clean        = require("gulp-clean");
var copy         = require("gulp-copy");
var cssnano      = require("gulp-cssnano");
var gulp         = require("gulp");
var gulpif       = require("gulp-if");
var imagemin     = require("gulp-imagemin");
var sass         = require("gulp-sass");
var scsslint     = require("gulp-scss-lint");
var sourcemaps   = require("gulp-sourcemaps");
var util         = require("gulp-util");

gulp.task("clean", function () {
    if(util.env.development)
        return gulp.src("build", { read: false })
                   .pipe(clean());
    if(util.env.production)
        return gulp.src("dist", { read: false })
                   .pipe(clean());
});

gulp.task("copy", ["clean"], function () {
    return gulp.src(["index.php", "content/**/*", "fonts/**/*", "images/**/*"])
               .pipe(gulpif(util.env.development, copy("build")))
               .pipe(gulpif(util.env.production, copy("dist")));
});

gulp.task("compress-images", function () {
    return gulp.src("images/**/*")
               .pipe(imagemin({ multipass: true, optimizationLevel: 7 }))
               .pipe(gulp.dest("images"));
});

gulp.task("stylesheets-lint", ["clean"], function () {
    return gulp.src("stylesheets/**")
               .pipe(scsslint({ config: "scss-lint.yml" }));
});

gulp.task("stylesheets", ["clean"], function () {
    return gulp.src("stylesheets/style.scss")
               .pipe(gulpif(util.env.development, sourcemaps.init()))
                .pipe(sass().on("error", sass.logError))
                .pipe(autoprefixer({ browsers: "> 0.1%", cascade: false }))
                .pipe(gulpif(util.env.production, cssnano()))
               .pipe(gulpif(util.env.development, sourcemaps.write()))
               .pipe(gulpif(util.env.development, gulp.dest("build")))
               .pipe(gulpif(util.env.production, gulp.dest("dist")));
});

gulp.task("build", ["clean", "copy", "stylesheets", "stylesheets-lint"]);

gulp.task("watch", function () {
    gulp.watch(["index.php", "content/**/*", "fonts/**/*", "images/**/*", "stylesheets/**/*"], ["build"]);
});