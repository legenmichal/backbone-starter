var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('browserify', function() {
    return browserify('./app/main.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./app/build/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync', 'browserify'], function (){
  gulp.watch('./app/src/**/*.js', ['browserify']); 
  gulp.watch('./app/main.js', ['browserify']); 
  gulp.watch('./app/index.html', browserSync.reload); 
});