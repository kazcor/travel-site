var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins'),
cssnested = require('postcss-nested');


gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssimport, mixins, cssvars, autoprefixer, cssnested]))
  .on('error', function(errorMsg){
    console.log(errorMsg.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles/'))
})
