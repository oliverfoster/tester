var etc = require('etc'),
	Q = require('q'),
	fs = require('fs'),
	_ = require('underscore'),
	es = require('event-stream'),
	del = require('del'),
	path = require('path'),
	mkdirp = require('mkdirp'),
	gulp = require('gulp'),
	gulpif = require('gulp-if'),
	addsrc = require('gulp-add-src'),
	dir = require('node-dir'),
	foreach = require('gulp-foreach'),
	collate = require('gulp-collate'),
	deleted = require('gulp-deleted'),
	amdOptimize = require('amd-optimize'),
	gutil = require('gulp-util'),
	tap = require('gulp-tap'),
	gwatch = gulp.watch,
	concat = require('gulp-concat'),
	concatSM = require('gulp-concat-sourcemap'),
	changed = require('gulp-changed'),
	cache = require('gulp-cached'),
	filter = require('gulp-filter'),
	remember = require('gulp-remember'),
	notifier = require('node-notifier'),
	lessSM = require('gulp-less-sourcemap'),
	lessNSM = require('gulp-less'),
	jshint = require('gulp-jshint'),
	sourcemaps = require('gulp-sourcemaps'),
	serveIndex = require('serve-index'),
	uglify = require('gulp-uglify'),
	minifyCSS = require('gulp-minify-css'),
	handlebarsSM = require('gulp-handlebars'),
	wrap = require('gulp-wrap'),
	args   = require('yargs').argv,
	streamqueue  = require('streamqueue'),
	declare = require('gulp-declare');

process.umask(0);

var browserSync = require('browser-sync'),
	reload = browserSync.reload,
	browserSyncOn = false;


var conf = require('etc')().file( path.join(__dirname, 'gulpconfig.json') ).file( path.join(__dirname, 'package.json') ).toJSON();

/*TODO
*
* Need to be able to restrict dev to only one config folder
* gulp dev test
* gulp dev test2
*/


function expandPathVariables(arr, values) {
	var rtn = [];

	_.each(arr, function(item, index) {
		var matches = item.match(/{{.*?}}/g);
		matches = _.uniq(matches);
		for (var i = 0; i < matches.length; i++) {
			var match = matches[i].substr(2, matches[i].length - 4);
			item = item.replace( (new RegExp("{{"+match+"}}","g")), values[match] );
		}
		rtn.push(item);
	});

	return rtn;
}


function walk(dir, done) {
	var results = [];
	fs.readdir(dir, function(err, list) {
		if (err) return done(err);
		var pending = list.length;
		if (!pending) return done(null, results);
		var red = 0;
		list.forEach(function(file) {
			var subdirpath = path.join(dir, file);
			fs.stat(subdirpath, function(err, stat) {
				red++;
        		if (stat && stat.isDirectory()) {
        			results.push( subdirpath );
        			if (red == pending) return done(null, results);
        		}
        	});
		});

	});
}


/*
* TASKS
*/
gulp.task('default', ['dev'], function() {
	var index = serveIndex(conf.dest.path, {'icons': true})

	browserSyncOn = true;
    var srv = browserSync({
        server: {
            baseDir: conf.dest.path,
            middleware: function (req, res, next) {
            	if (req.url == "/")	index(req, res, next);
            	else next();
		    }
        },
        notify: false,
        ghostMode: {
		    clicks: true,
		    location: true,
		    forms: true,
		    scroll: true
		}
    });

});
gulp.task('build', [ 'cleanup-code', 'cleanup-and-copy-changed-assets' ], function() {
	gulp.start([ 
		'core-index',
		'core-javascript',
		'app-handlebars',
		'app-javascript', 
		'app-less',
		'configs-handlebars',
		'configs-less'
	], function() {
		var configPath = path.join(__dirname, conf.src.configs.root);
		walk(configPath, function(err, subdirs) {
	    	if (err) throw err;
		    _.each(subdirs, function(dir) {
		    	var configName = dir.substr(configPath.length+1);
		    	var destPath = path.join(__dirname, conf.dest.path, configName);
		    	var javascriptpaths = [
		    		path.join(destPath, conf.dest.core.javascript.file),
		    		path.join(destPath, conf.dest.app.javascript.file),
		    		path.join(destPath, conf.dest.app.templates.file),
		    		path.join(destPath, conf.dest.configs.templates.file),
		    		path.join(destPath, conf.dest.loader.javascript.file)
		    	];
		    	streamqueue({ objectMode: true },
			    		gulp.src(path.join(destPath, conf.dest.core.javascript.file)),
			    		gulp.src(path.join(destPath, conf.dest.app.javascript.file)),
			    		gulp.src(path.join(destPath, conf.dest.app.templates.file)),
			    		gulp.src(path.join(destPath, conf.dest.configs.templates.file)),
			    		gulp.src(path.join(destPath, conf.dest.loader.javascript.file))
			    	)

		    		.pipe(concat('main.js'))
		    		.pipe(uglify())

		    		.pipe(gulp.dest( path.join(destPath, "js") ))
		    		.on("end", function() {
		    			del(javascriptpaths);
		    		});

		    	var csspaths = [
		    		path.join(destPath, conf.dest.app.css.file),
		    		path.join(destPath, conf.dest.configs.css.file)
		    	];
		    	streamqueue({ objectMode: true },
			    		gulp.src(path.join(destPath, conf.dest.app.css.file)),
			    		gulp.src(path.join(destPath, conf.dest.configs.css.file))
			    	)

		    		.pipe(concat('main.css'))
		    		.pipe(minifyCSS())

		    		.pipe(gulp.dest( path.join(destPath, "css") ))
		    		.on("end", function() {
		    			del(csspaths);
		    		});

		    });
		});
		gutil.log(gutil.colors.green("Build Complete."))
	});
});
gulp.task('dev', [ 'cleanup-code', 'cleanup-and-copy-changed-assets-dev-watch' ], function() {
	gulp.start([ 
		'core-index-dev', 
		'core-javascript-dev', 
		'app-less-dev-watch', 
		"app-javascript-dev-watch", 
		"app-handlebars-dev-watch",
		'configs-less-dev-watch', 
		"configs-handlebars-dev-watch"
	], function() {
		gutil.log(gutil.colors.green("Build Complete. Waiting for changes..."))
	});
});

/*
* CLEAN CODE
*/
gulp.task('cleanup-code', function() {
	var q = Q.defer();	
	var configPath = path.join(__dirname, conf.dest.path) + "/";
	walk(configPath, function(err, subdirs) {
		if (err) return;
	    _.each(subdirs, function(dir) {
			del.sync(conf.clean.paths, {cwd: dir });
		});
		return q.resolve();
	});
	return q.promise;
});
/*
* OVERWRITE CHANGED ASSETS
* DELETE FILES DELETED FROM SRC
*/
gulp.task('cleanup-and-copy-changed-assets-dev-watch', ['cleanup-and-copy-changed-assets'], function () {
  	var configPath = path.join(__dirname, conf.src.configs.root);
  	var watchers = [];
	walk(configPath, function(err, subdirs) {
		if (err) return;
	    _.each(subdirs, function(dir) {

	    	var configName = dir.substr(configPath.length+1);
	    	
	    	var paths = [];
	    	paths = paths.concat(
	    		conf.src.core.assets.paths,
	    		conf.src.app.assets.paths,
	    		expandPathVariables( conf.src['configs'].assets.paths, {config:configName})
	    	);

			var watcher = gwatch( paths, function(){
				gulp.start(['cleanup-and-copy-changed-assets'], function() {
					if (browserSyncOn) reload();
				});
			})

			.on('error', function (error) {
	            this.emit('end');
	        });

	        watchers.push(watcher);
		});
	});
});
gulp.task("cleanup-and-copy-changed-assets", function() {
	var configPath = path.join(__dirname, conf.src.configs.root);
	walk(configPath, function(err, subdirs) {
    	if (err) throw err;
	    _.each(subdirs, function(dir) {
	    	var configName = dir.substr(configPath.length+1);
	    	var destPath = path.join(__dirname, conf.dest.path, configName, conf.dest.configs.assets.path);

	    	var paths = [];
	    	paths = paths.concat(
	    		conf.src.core.assets.paths,
	    		conf.src.app.assets.paths,
	    		expandPathVariables( conf.src['configs'].assets.paths, {config:configName})
	    	);

	    	gulp.src(paths)
	    		.pipe(collate("assets"))
	    		.pipe(deleted(destPath, expandPathVariables(conf.dest.configs.assets.compare, {destination: destPath}) ))
	    		.pipe(changed(destPath))
	    		.pipe(gulp.dest( destPath ));
			
	    });
	});
});


/*
* APP Javascript
*/
gulp.task('app-javascript-dev-watch', ['app-javascript-dev'], function () {
	var watcher = gwatch( conf.src['app'].javascript.paths, function(){
		gulp.start(['app-javascript-dev'], function() {
			if (browserSyncOn) reload();
		});
	}); // watch the same files in our scripts task
	watcher.on('change', function (event) {
		if (event.type === 'deleted') { // if a file is deleted, forget about it
			delete cache.caches['appjavascript'][event.path];
			remember.forget('appjavascript', event.path);
		}
	})
	.on('error', function (error) {
        this.emit('end');
    });
});
gulp.task('app-javascript-dev', function() { //, [ 'core-javascript-dev', 'core-html' ]
	return javascript({
		"name": "app",
		"debug": true,
		"minify": false
	});
});
gulp.task('app-javascript', function() {
	return javascript({
		"name": "app",
		"debug": false,
		"minify": true
	});
});

/*
*	CONFIGS LESS
*/
gulp.task('configs-less-dev-watch', ['configs-less-dev'], function() {
	var configPath = path.join(__dirname, conf.src.configs.root);
	walk(configPath, function(err, subdirs) {
		if (err) throw err;
		_.each(subdirs, function(dir) {
	    	var configName = dir.substr(configPath.length+1);
	    	var paths = expandPathVariables( conf.src['configs'].less.paths, {config:configName});
			var watcher = gwatch( paths, function(){
				gulp.start(['configs-less-dev'], function() {
					//if (browserSyncOn) reload();
				});
			}); // watch the same files in our scripts task
			watcher.on('change', function (event) {
				if (event.type === 'deleted') { // if a file is deleted, forget about it
					delete cache.caches['appless'+configName][event.path];
					remember.forget('appless'+configName, event.path);
				}
			})
			.on('error', function (error) {
	            this.emit('end');
	        });
		});
	});
});
gulp.task('configs-less-dev', function() {
	var streams = [];
	var configPath = path.join(__dirname, conf.src.configs.root);
	walk(configPath, function(err, subdirs) {
    	if (err) throw err;
	    _.each(subdirs, function(dir) {
	    	var configName = dir.substr(configPath.length+1);
			streams.push(less({
				"name": "configs",
				"config": configName,
				"debug": true,
				"minify": false
			}));
		});
	});
	//return es.concat.apply(es, streams );
	
});
gulp.task('configs-less', function() {
	var streams = [];
	var configPath = path.join(__dirname, conf.src.configs.root);
	walk(configPath, function(err, subdirs) {
    	if (err) throw err;
	    _.each(subdirs, function(dir) {
	    	var configName = dir.substr(configPath.length+1);
			streams.push(less({
				"name": "configs",
				"config": configName,
				"debug": false,
				"minify": true
			}));
		});
	});
	//return es.concat.apply(es, streams );
});

/*
* APP LESS
*/
gulp.task('app-less-dev-watch', ['app-less-dev'], function() {
	var watcher = gwatch( conf.src['app'].less.paths , function(){
		gulp.start(['app-less-dev'], function() {
		//if (browserSyncOn) reload();
		});
	}); // watch the same files in our scripts task
	watcher.on('change', function (event) {
		if (event.type === 'deleted') { // if a file is deleted, forget about it
			delete cache.caches['appless'][event.path];
			remember.forget('appless', event.path);
		}
	})
	.on('error', function (error) {
	    this.emit('end');
	});
});
gulp.task('app-less-dev', function() {
	return less({
		"name": "app",
		"debug": true,
		"minify": false
	});
});
gulp.task('app-less', function() {
	return less({
		"name": "app",
		"debug": false,
		"minify": true
	});
});


/*
*	CONFIGS HANDLEBARS
*/
gulp.task('configs-handlebars-dev-watch', ['configs-handlebars-dev'], function() {
	var configPath = path.join(__dirname, conf.src.configs.root);
	walk(configPath, function(err, subdirs) {
		if (err) throw err;
	    _.each(subdirs, function(dir) {
	    	var configName = dir.substr(configPath.length+1);
	    	var paths = expandPathVariables( conf.src['configs'].handlebars.paths, {config:configName});
			var watcher = gwatch( paths, function(){
				gulp.start(['configs-handlebars-dev'], function() {
					if (browserSyncOn) reload();
				});
			}); // watch the same files in our scripts task
			watcher.on('change', function (event) {
				if (event.type === 'deleted') { // if a file is deleted, forget about it
					delete cache.caches['apphandlebars'+configName][event.path];
					remember.forget('apphandlebars'+configName, event.path);
				}
			})
			.on('error', function (error) {
	            this.emit('end');
	        });
		});
	});
});
gulp.task('configs-handlebars-dev', function() {
	var streams = [];
	var configPath = path.join(__dirname, conf.src.configs.root);
	walk(configPath, function(err, subdirs) {
    	if (err) throw err;
	    _.each(subdirs, function(dir) {
	    	var configName = dir.substr(configPath.length+1);
			streams.push(handlebars({
				"name": "configs",
				"config": configName,
				"debug": true,
				"minify": false
			}));
		});
	});
	//return es.concat.apply(es, streams );
	
});
gulp.task('configs-handlebars', function() {
	var streams = [];
	var configPath = path.join(__dirname, conf.src.configs.root);
	walk(configPath, function(err, subdirs) {
    	if (err) throw err;
	    _.each(subdirs, function(dir) {
	    	var configName = dir.substr(configPath.length+1);
			streams.push(handlebars({
				"name": "configs",
				"config": configName,
				"debug": false,
				"minify": true
			}));
		});
	});
	//return es.concat.apply(es, streams );
});

/*
*	APP HANDLEBARS
*/
gulp.task('app-handlebars-dev-watch', ['app-handlebars-dev'], function() {
	var watcher = gwatch( conf.src['app'].handlebars.paths, function(){
		gulp.start(['app-handlebars-dev'], function() {
			if (browserSyncOn) reload();
		});
	}); // watch the same files in our scripts task
  watcher.on('change', function (event) {
    if (event.type === 'deleted') { // if a file is deleted, forget about it
      delete cache.caches['apphandlebars'][event.path];
      remember.forget('apphandlebars', event.path);
    }
  });
});
gulp.task('app-handlebars-dev', function() {
	return handlebars({
		"name": "app",
		"debug": true,
		"minify": false
	});
});
gulp.task('app-handlebars', function() {
	return handlebars({
		"name": "app",
		"debug": false,
		"minify": true
	});
});


/*
* CORE Javascript
*/
gulp.task('core-javascript-dev', function() {
	return javascript({
		"name": "core",
		"debug": true,
		"minify": false
	});
});
gulp.task('core-javascript', function() {
	return javascript({
		"name": "core",
		"debug": false,
		"minify": true
	});
});


/*
* CORE HTML
*/
gulp.task('core-index-dev', function() {
	return index({
		debug: true
	});
});
gulp.task('core-index', function() {
	return index({
		debug: false
	});
});



/*
* WORKER FUNCTIONS
*/
function javascript(options) {
	var isMinify = options.minify;
	var isDebug = options.debug;
	var sectionName = options.name;
	var destConfig = conf.dest[sectionName];
	var srcConfig = conf.src[sectionName];

	var opts = {
	  umd: false
	};

	var rootPath = path.join( __dirname, conf.src.path);
	var itemRootPath = path.join(__dirname, srcConfig.path);
	var baseFile = path.join(__dirname, srcConfig.path, conf.paths[sectionName][sectionName]);
	var requireFile = path.join(__dirname, srcConfig.path, conf.paths[sectionName]['require']);
	
	switch (sectionName) {
	case "app":
		var paths = _.extend({}, conf.paths[sectionName]);
		for (var k in conf.paths.core) {
			paths[k] = conf.paths.core[k];
		}

		var loaderConfig = {};
		if (isDebug) _.extend(loaderConfig, { paths: paths } );
		_.extend(loaderConfig, {map: conf.map[sectionName] } );

		var globalConfig = require('etc')().file( path.join(__dirname, 'client.json') ).toJSON();

		var output = 'require.config(' + JSON.stringify( loaderConfig, null, 4) + ');\n';
		
		var loaderFile = path.join(__dirname, conf.dest.path );
		var configPath = path.join(__dirname, conf.src.configs.root);
		walk(configPath, function(err, subdirs) {
	    	if (err) throw err;
		    _.each(subdirs, function(dir) {
		    	var configName = dir.substr(configPath.length+1);
		    	var loaderPath = path.join( loaderFile, configName, conf.dest.loader.javascript.file)
		    	mkdirp.sync( path.dirname(loaderPath) );
				fs.writeFileSync( loaderPath, output);
			});
		});
		break;
	}


	var sourcemappath = destConfig['javascript'].sourcemappath || conf.dest.sourcemappath;
	var sourcemapbase = destConfig['javascript'].sourcemapbase || conf.dest.sourcemapbase;

	var stream = gulp.src( srcConfig.javascript.paths, { base : "." } )
		
		.pipe(gulpif(isDebug, sourcemaps.init({debug:true})))

		.pipe(cache(sectionName+'javascript'))

		.pipe(remember(sectionName+'javascript'))

		//.pipe(gulpif(sectionName == "app", jshint()))
    	//.pipe(gulpif(sectionName == "app", jshint.reporter('default')))

		.pipe(foreach(function(stream, file) {
			
			if (file.path.substr(0, itemRootPath.length) == itemRootPath && file.path != baseFile + ".js") {
				var inc = file.path.substr(itemRootPath.length+1, file.path.length - (itemRootPath.length+1) - 3 );
				var paths = _.values(conf.paths[sectionName]);
				var io = paths.indexOf(inc);
				if (io > -1) inc = _.keys(conf.paths[sectionName])[io];

				if (conf.shim[sectionName] !== undefined) {
					conf.shim[sectionName].deps.push(inc);
					conf.shim[sectionName].deps = _.uniq(conf.shim[sectionName].deps)
				}

			}

			return stream;
		}))



		.pipe(amdOptimize(sectionName, {
			baseUrl: srcConfig.path,
			paths: conf.paths[sectionName],
			shim: conf.shim,
			exclude: conf.exclude,
			waitSeconds: 0
		}, opts))

		.on('error', function (error) {
            gutil.log(gutil.colors.red(error.message))
            // Notify on error. Uses node-notifier
            notifier.notify({
                title: 'Javascript compilation error',
                message: error.message
            })
            this.emit('end');
        })
		
		.pipe(gulpif(sectionName == "core", addsrc.prepend( requireFile + ".js" )))

		.pipe(gulpif(isDebug,
			concatSM( destConfig.javascript.file, { sourcesContent: true, prefix: conf.dest.sourcemappathtruncateby, sourceMappingBaseURL: sourcemapbase, sourceRoot: sourcemappath } ),
			concat( destConfig.javascript.file )
		))

		.pipe(gulpif(isMinify, uglify()));

	var configPath = path.join(__dirname, conf.src.configs.root);
	walk(configPath, function(err, subdirs) {
    	if (err) throw err;
	    _.each(subdirs, function(dir) {
	    	var configName = dir.substr(configPath.length+1);
	    	var destPath = path.join(__dirname, conf.dest.path, configName);

	    	stream.pipe( gulp.dest( destPath ));
	    });
	});

	return stream;
}

function less(options) {
	var isMinify = options.minify;
	var isDebug = options.debug;
	var sectionName = options.name;
	var destConfig = conf.dest[sectionName];
	var srcConfig = conf.src[sectionName];

	var destFile = path.join(__dirname, conf.dest.path, destConfig.css.file );

	var sourcemappath = destConfig['css'].sourcemappath || destConfig.sourcemappath;
	var sourcemapbase = destConfig['css'].sourcemapbase || destConfig.sourcemapbase;

	var paths = expandPathVariables( srcConfig['less'].paths, options );

    var stream = gulp.src( paths, { base : "." }  )
       
        .pipe(gulpif(isDebug, sourcemaps.init()))

        .pipe(cache(sectionName+'less'+(options.config||"")))
        .pipe(remember(sectionName+'less'+(options.config||"")))

        .pipe(concat( destConfig.css.file ))

        .pipe(lessNSM())

        .on('error', function (error) {
            gutil.log(gutil.colors.red(error.message))
            // Notify on error. Uses node-notifier
            notifier.notify({
                title: 'Less compilation error',
                message: error.message
            })
            this.emit('end');
        })

        .pipe(gulpif(isMinify, minifyCSS()))

        .pipe(gulpif(isDebug, sourcemaps.write("./",{ includeContent: true, sourceMappingURLPrefix: sourcemapbase, sourceRoot: sourcemappath } ) ))

        .pipe(tap(function(file) {
        	if (path.extname(file.path) == ".map") {
        		var json = JSON.parse(file.contents);
        		_.each(json.sources, function(source, index) {
        			for (var i = 0; i < conf.dest.sourcemappathtruncateby; i++) {
        				var fs = source.indexOf("/") + 1;
        				if (fs === 0) break;
        				source = source.substr(fs);
        			}
        			json.sources[index] = source;
        		});
        		file.contents = new Buffer(JSON.stringify(json));
        	}
        }));

    if (options.config) {
		stream.pipe(gulp.dest( path.join(__dirname, conf.dest.path, options.config) ));
	} else {
	    var configPath = path.join(__dirname, conf.src.configs.root);
		walk(configPath, function(err, subdirs) {
	    	if (err) throw err;
		    _.each(subdirs, function(dir) {
		    	var configName = dir.substr(configPath.length+1);
		    	stream.pipe(gulp.dest( path.join(__dirname, conf.dest.path, configName) ));
		    });
		});
	}

	stream
		.pipe(filter('**/*.css'))
		.pipe(gulpif(browserSyncOn, reload({stream:true})));

	return stream;
       
        

}

function handlebars(options){
	var isMinify = options.minify;
	var isDebug = options.debug;
	var sectionName = options.name;
	var destConfig = conf.dest[sectionName];
	var srcConfig = conf.src[sectionName];

	var sourcemappath = destConfig['templates'].sourcemappath || conf.dest.sourcemappath;
	var sourcemapbase = destConfig['templates'].sourcemapbase || conf.dest.sourcemapbase;

	var paths = expandPathVariables( srcConfig['handlebars'].paths, options );

  	var stream = gulp.src( paths, { base : "." }  )
	  	.pipe(gulpif(isDebug, sourcemaps.init()))
	  	.pipe(cache(sectionName+'handlebars'+(options.config||"")))
		.pipe(remember(sectionName+'handlebars'+(options.config||"")))
	    .pipe(handlebarsSM())
	    .pipe(wrap('Handlebars.template(<%= contents %>)'))
	    .pipe(declare({
	      namespace: 'Handlebars.templates',
	      noRedeclare: true // Avoid duplicate declarations
	    }))
    
	    .pipe(concat( destConfig.templates.file ))
	    .pipe(wrap('require(["handlebars"],function(){\n<%= contents %>\n});'))
	    
	    .pipe(gulpif(isMinify, uglify()))
	    
	    .pipe(gulpif(isDebug, sourcemaps.write("./",{ includeContent: true, sourceMappingURLPrefix: sourcemapbase, sourceRoot: sourcemappath } ) ))

	    .pipe(tap(function(file) {
	        	if (path.extname(file.path) == ".map") {
	        		var json = JSON.parse(file.contents);
	        		_.each(json.sources, function(source, index) {
	        			for (var i = 0; i < conf.dest.sourcemappathtruncateby; i++) {
	        				var fs = source.indexOf("/") + 1;
	        				if (fs === 0) break;
	        				source = source.substr(fs);
	        			}
	        			json.sources[index] = source;
	        		});
	        		file.contents = new Buffer(JSON.stringify(json));
	        	}
	        }));
	
	if (options.config) {
		stream.pipe(gulp.dest( path.join(__dirname, conf.dest.path, options.config) ));
	} else {
	    var configPath = path.join(__dirname, conf.src.configs.root);
		walk(configPath, function(err, subdirs) {
	    	if (err) throw err;
		    _.each(subdirs, function(dir) {
		    	var configName = dir.substr(configPath.length+1);
		    	stream.pipe(gulp.dest( path.join(__dirname, conf.dest.path, configName) ));
		    });
		});
	}

	return stream;

    
}

function index(options) {
	var isMinify = options.minify;
	var isDebug = options.debug;
	var sectionName = options.name;
	var destConfig = conf.dest[sectionName];
	var srcConfig = conf.src[sectionName];

	var stream = gulp.src( isDebug ? conf.src.core['index-debug'].paths: conf.src.core.index.paths, { base : path.join(conf.src.path,"core") }  );

	var configPath = path.join(__dirname, conf.src.configs.root);
	walk(configPath, function(err, subdirs) {
    	if (err) throw err;
	    _.each(subdirs, function(dir) {
	    	var configName = dir.substr(configPath.length+1);
	    	stream
	    		.pipe(concat(conf.dest.core.index.file))
	    		.pipe(gulp.dest( path.join(conf.dest.path, configName) ));
	    });
	});

	return stream;
}
