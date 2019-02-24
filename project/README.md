RequireJS is a basic script loader. It's used for Asynchronous Module Doader (AMD) and loading JS scripts that require other dependencies.

The scripts may break if loaded in the incorrect order, so this library fixes that by only loading defined scripts once their dependencies have loaded. This way we don't need to worry about the order that scripts are loaded on the page.

The 'define' function is defined with RequireJS to load modules. Normally when defining modules we don't explicitely name them, since the name is determined by the file name, as well as the directory.

In this example, all modules are loaded via the 'app.js' file, which serves as the root of the directory. All JS files are loaded relative to here.