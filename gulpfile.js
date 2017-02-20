/* leny/meet-jquery
 *
 * /gulpfile.js - Gulp tasks
 *
 * coded by leny@flatLand!
 * started at 13/02/2017
 */

var gulp = require( "gulp" ),
    babel = require( "gulp-babel" ),
    sourcemaps = require( "gulp-sourcemaps" );

// --- Task for js

gulp.task( "js", function() {
    gulp.src( "src/js/**/*.js" )
        .pipe( sourcemaps.init() )
        .pipe( babel() )
        .on( "error", function( oError ) {
            console.error( oError );
            this.emit( "end" );
        } )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest( "app/js" ) );
} );

// --- Watch tasks

gulp.task( "watch", function() {
    gulp.watch( "src/js/**/*.js", [ "js" ] );
} );

// --- Aliases

gulp.task( "default", [ "js" ] );
gulp.task( "work", [ "default", "watch" ] );
