var gulp = require('gulp'); // 基础库
var minifyCss = require('gulp-minify-css'); // CSS压缩
var concat = require('gulp-concat');                      
gulp.task('minify-css', function() {
  return gulp.src('public/ShopCar/SCcss/*.css')
    .pipe(minifyCss())//执行css压缩的方法
    .pipe(gulp.dest('public/ShopCar/SCcss1'));
});

