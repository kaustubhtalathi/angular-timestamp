const headerComment = require('gulp-header-comment');
const gulp = require('gulp');
const d = new Date();

console.log(`Server Timestamp: ${d}`);

/* Inject into build */
gulp.src('./dist/angular-timestamp/*.js')
    .pipe(headerComment(`${d}`))
    .pipe(gulp.dest('./dist/angular-timestamp'));