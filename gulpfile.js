var gulp = require('gulp');
// var open = require('gulp-open');

var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
// const babel = require('gulp-babel');

gulp.task('default', ['nodemon']);

gulp.task('nodemon', function () {
    livereload.listen(35729);
    nodemon({
        script: 'app.js',
        ignore: ['gulpfile.js', '*.ejs', 'public/**/*']
    })
        .on('restart', function () {
            setTimeout(function () {
                console.log("Reloaded!!");
                gulp.src('views/index.ejs').pipe(livereload());
            }, 1000);
        })
});

// gulp.task('concat_js', function () {
//     return gulp.src(['./**/*.js'])    
//                     .pipe(babel({
//                         presets: ['es2015']
//                     }))             
// });



