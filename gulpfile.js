const gulp = require("gulp")
const sass = require("gulp-sass")
const watchSass = require("gulp-watch-sass")
 
gulp.task("sass:watch", () => watchSass([
  "./public/scss/import.scss"
])
.pipe(sass())
.pipe(gulp.dest("./public")));
