'use strict';

module.exports = (grunt) => {
   let config;

   config = {
      entryFile: './src/index.ts',
      js: {
         gruntFile: 'Gruntfile.js',
         all: [
            './*.js',
            './src/**/*.js',
            './tests/**/*.js',
         ],
      },
      ts: {
         src: './src/**/*.ts',
         all: [
            './src/**/*.ts',
            './tests/**/*.ts',
         ],
         configs: {
            commonjs: 'src/tsconfig.commonjs.json',
            esm: 'src/tsconfig.esm.json',
            types: 'src/tsconfig.types.json',
         },
      },
      commands: {
         tsc: './node_modules/.bin/tsc',
      },
      out: {
         dist: './dist',
         test: [ './.nyc_output', 'coverage' ],
      },
   };

   grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      eslint: {
         target: [ ...config.js.all, ...config.ts.all ],
      },

      exec: {
         options: {
            failOnError: true,
         },
         types: {
            cmd: `${config.commands.tsc} -p ${config.ts.configs.types} --pretty`,
         },
         esm: {
            cmd: `${config.commands.tsc} -p ${config.ts.configs.esm} --pretty`,
         },
         commonjs: {
            cmd: `${config.commands.tsc} -p ${config.ts.configs.commonjs} --pretty`,
         },
      },

      clean: {
         dist: config.out.dist,
         testOutput: config.out.test,
      },

      concurrent: {
         'build-ts-outputs': [ 'build-types', 'build-esm', 'build-commonjs' ],
      },

      watch: {
         ts: {
            files: [ config.ts.src ],
            tasks: [ 'build-ts-outputs' ],
         },
         gruntFile: {
            files: [ config.js.gruntFile ],
            options: {
               reload: true,
            },
         },
      },

   });

   grunt.loadNpmTasks('grunt-exec');
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-concurrent');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('build-types', 'exec:types');
   grunt.registerTask('build-esm', 'exec:esm');
   grunt.registerTask('build-commonjs', 'exec:commonjs');
   grunt.registerTask('build-ts-outputs', 'concurrent:build-ts-outputs');
   grunt.registerTask('build', [ 'concurrent:build-ts-outputs' ]);
   grunt.registerTask('develop', [ 'clean', 'build', 'watch' ]);

   grunt.registerTask('default', [ 'build' ]);
};
