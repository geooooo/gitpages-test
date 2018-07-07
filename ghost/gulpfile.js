var gulp = require('gulp');
var pug  = require('gulp-pug');
var scss = require('gulp-sass');


var PATH = {
    'pug': {
        'src':  'app/index.pug',
        'dest': 'app/',
    },
    'scss': {
        'src':  'app/css/*.scss',
        'dest': 'app/css',
    },
};


gulp.task('compile-pug', function () {
    return gulp.src(PATH.pug.src)
               .pipe(pug({
                   'pretty': true,
               }))
               .pipe(gulp.dest(PATH.pug.dest));
});


gulp.task('compile-scss', function () {
    return gulp.src(PATH.scss.src)
               .pipe(scss({
                    'outputStyle': 'expanded',
               }))
               .pipe(gulp.dest(PATH.scss.dest));
});


gulp.task('compile', function () {
    gulp.watch(PATH.pug.src,  gulp.series('compile-pug'));
    gulp.watch(PATH.scss.src, gulp.series('compile-scss'));
});
