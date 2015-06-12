# GrunterHelpers
Helpers module for Grunter


## Installation
The easiest way is to keep `grunter-helpers` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "grunt": "~0.10",
    "grunter-helpers": "0.0.1"
  }
}
```

You can simple do it by:
```bash
npm install grunter-projects --save-dev
```

## Configuration
```js
// Gruntfile.js
grunt.initConfig({
    pkg: packageJSON,    
    helpers: require('grunterhelpers') // helper library.
});
```


## Usage
you can use it into grunt task 
```js
// customGruntTask.js
var libs = grunt.config('helpers').getLibrary("config").css
doSomething(libs.sample.samplelessvariables.srcfiles);
```

----
    
## License
MIT    