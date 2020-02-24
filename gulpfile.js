const gulp        = require('gulp');
const browserSync = require('browser-sync');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const path = require('path');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("dist/*.html").on('change', browserSync.reload);
});


gulp.task('less', function () {
    return gulp.src('dist/less/**/*.less')
    .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(cleanCSS())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/css'));
  });

gulp.task('scripts', function() {
    return gulp.src("dist/libs/js/*.js")
        .pipe(concat('main.min.js')) // Собираем js в кучу в новом файле .min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('dist/js')); // Выгружаем в папку /js
});

gulp.task('watch', function() {
    gulp.watch("dist/less)", gulp.parallel('less'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'less', 'scripts'));

