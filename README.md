### Pre production checklist

1. Set name/desc of porject in package.json
2. Set LR port in liverload.js
3. Set same port in index.html
4. Set project title and basepath in index.html
5. Set basepath in .htaccess
6. Come up with a namespace and create it's JS file (ex. ABC.js)
7. Include it in index.html 
7. In data/data.js set the onData call in a namespace
8. Set namepsace in main.js
8. Remove this list

###  Running/developing the project

1. Clone repository to a folder
2. Make sure the folder is in your local Apache document root
3. Create a file called `base.local` in the `dev` folder
4. Set the path to the site as content of the file. Example, if your local url is like that:
```
http://localhost/projects/goe/dev/
```
then the content of `base.local` should be 
```
/projects/goe/dev/
```
5. Run the build script once (see below). This will create the `.htaccess` file in `dev/` so that URL rewriting works for you. 
6. Go to project directory
7. Type
```
npm install
./livereload.js
```

9. Run the site from your local Apache server!

### Building

To build a release version of the site, call the `./build.js` located in the root folder, like this:

```
./build.js /path/on/server
```

The `path/on/server` shoudl reflect the folder name where the site will run, so if the site runs at root at `http://website.com` this argument should simply be `/`. If the site will be deployed in a folder, like ex. `http://website.com/fol/der/` then this argument should be `/fol/der/`.

Calling the build script will create a `release` folder and all the files that are needed for the site to run will be copied into this folder. 

> Warning! If there is any preexisting files in the release folder, 
> calling the build script will overwrite them without warning.

The release version of the site contains a minified/concatenated JS and CSS files. It also contains the all the HTML/PHP files. Each HTML/PHP file is parsed and all the code put between dev comments like ex:

```
<!-- !DEV -->
<script type="text/javascript" src="src/main.js"></script>
<!-- !DEV -->
``` 

will be removed. All code inside production comments, like ex:

```
<!-- !PROD --><!--
<script type="text/javascript" src="app.min.js"></script>
--><!-- !PROD -->
```

will be uncommented.

### Localizing

All of the copy is located in the following file:

```
web/data/data.js
```

We try to keep all the data in there, but some pieces of content, ex. meta tags or other SEO related items, can be put directly into HTML/PHP files:

```
web/*.html
web/*.php
```

### List of 3rd party JS libs used in the site

[malibu.js](https://github.com/drojdjou/malibu)
License: MIT

[squareroot.js](https://github.com/drojdjou/squareroot.js)
License: MIT

[TweenLite](http://greensock.com/tweenlite)
License: [custom](https://greensock.com/licensing/)

[howler.js](https://github.com/goldfire/howler.js)
License: MIT