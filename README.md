

### Usage

Install the Chrome extension.

Then, navigate to http://www.musictheory.net/exercises/ear-interval for some ear training interval exercises.

Press ENTER to hear the interval again.
Press 1 to select Unison.
Press Down-2 to select Minor Second.
Press 2 to select Major Second.
Press Down-3 to select Minor Third.
Press 3 to select Major Third.
Press 4 to select Perfect Fourth.
Press Down-5 to select Tritone.
Press 5 to select Perfect Fifth.
Press Down-6 to select Minor Sixth.
Press 6 to select Major Sixth.
Press Down-7 to select Minor Seventh.
Press 7 to select Major Seventh.
Press 8 to select Octave.

## Instructions for Developers

This Chrome extension is based off of the template available at https://github.com/salsita/chrome-extension-skeleton.

I've included the relevant instructions for developers from the template project here.

### Installation:

    git clone git@github.com:dbieber/interval-training-extension.git
    
    # in case you don't have Grunt yet:
    sudo npm install -g grunt-cli

### Build instructions:

    cd chrome-extension-skeleton
    npm install
    grunt

### Directory structure:

    /build             # this is where the extension (.crx) ends up,
                       # along with unpacked directories of production and
                       # develop build (for debugging)
    
    /code
        /images        # image resources
        /js            # entry-points for browserify, requiring node.js `modules`
    
            /libs      # 3rd party run-time libraries, excluded from JS-linting
            /modules   # node.js modules (and corresponding mocha
                       #   unit tests spec files)
    
        manifest.json  # skeleton manifest file, `name`, `description`
                       #   and `version` fields copied from `package.json`
    
    Gruntfile.js       # grunt tasks (see below)
    circle.yml         # integration with CircleCI
    crxmake.sh         # official build script for packing Chromium extensions
    mykey.pem          # certificate file, YOU NEED TO GENERATE THIS FILE, see below
    lint-options.json  # options for JS-linting
    package.json       # project description file (name, version, dependencies, ...)

### Grunt tasks:

* `clean`: clean `build` directory
* `test`: JS-lint and mocha test, single run
* `test-cont`: continuos `test` loop
* default: `clean`, `test`, build step (copy all necessary files to `build`
  directory, browserify JS sources, prepare production version (using uglify),
  pack the `crx` (using official shell script), and copy the resulting `crx` to
  CircleCI artifacts directory (only when on CircleCI))

### After you clone:

1. Generate your .pem key and store it in the root as `mykey.pem` file. On unix / mac, the command to generate the file is `openssl genrsa 2048 | openssl pkcs8 -topk8 -nocrypt > mykey.pem`.
Note: the generated file is in `.gitignore` file, it won't be (and should NOT be) commited to the repository.

2. Add content, updating `code/manifest.json` accordingly.

3. When developing, write unit-tests, use `test-cont` Grunt task to check that your JS code passes linting tests and unit-tests.

4. When ready to try out the extension in the browser, use default Grunt task to build it. In `build` directory you'll find develop version of the extension in `unpacked-dev` subdirectory (with source maps), and production (uglified)
version in `unpacked-prod` directory. The `.crx` packed version is created from
`unpacked-prod` sources.
