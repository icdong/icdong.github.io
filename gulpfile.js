var gulp = require("gulp");
//--以下为gulp中的插件方法 需下载，npm install gulp-"名称" --save-dev
// var minifyCSS = require("gulp-minify-css");
var connect = require("gulp-connect");

gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());//这是自动刷新
});


//简历看守任务
gulp.task('watch', function () {
  gulp.watch(['index.html'], ['html']);
});

//创建服务
gulp.task("server",function(){
	connect.server({
		root:"./",
		livereload:true,
		// https:true,
		port:521
	});
});


gulp.task("default",['watch', 'server']);
