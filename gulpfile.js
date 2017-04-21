//请求模块
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//创建任务
gulp.task('minify',function(){
    return gulp.src(['js/base/base.js','js/controllers/*.js','js/directives/*.js','js/filters/*.js','js/services/*.js','js/routers/*.js','js/base/ngapp.js'])
    .pipe(concat('min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/dist'))
})
//监听
gulp.watch('js/**/*js',['minify'])
gulp.task('default',['minify'])