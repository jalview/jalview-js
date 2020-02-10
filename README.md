# jalview-js

[![Join the chat at https://gitter.im/jalviewJS/community](https://badges.gitter.im/jalviewJS/community.svg)](https://gitter.im/jalviewJS/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

JavaScript artefacts and documents for deploying JalviewJS

## About
JalviewJS is the [Jalview multiple sequence alignment visual analytics workbench](https://www.jalview.org), in [JavaScript](https://www.jalview.org/jalview-js/). It is made possible by [Java2Script](https://github.com/java2script/java2script) - a JavaScript transpiler plugin for Eclipse and the SwingJS library which provides access to a JavaScript port of the Java Runtime Environment, including support for AWT, Swing, Desktop Applications and Applets. 

### Which version of JalviewJS is this ?

The version, build date and originating commit ID are given in [swingjs/j2s/.build_properties](https://jalview.github.io/jalview-js/swingjs/j2s/.build_properties).

## How to deploy JalviewJS to your site
Clone this repository somewhere, and when you want to provide a JalviewJS component on a page, you just need to reference the SwingJS bootstrap script for JalviewJS, and include a call to start JalviewJS in one of the following ways:

### JalviewJS in "Desktop Mode"
The standard [JalviewJS Desktop demo page](JalviewJS.html) uses the following JavaScript code:
```
<head>...<script src="swingjs/swingjs2.js"></script> # import and execute JalviewJS's SwingJS bootstrap
<script>
# boilerplate warning in case the bootstrap wasn't found
if (!self.SwingJS)alert('swingjs2.js was not found. It needs to be in swingjs folder 
in the same directory as ' + document.location.href)

# Map defines which transpiled class's main function to call (see below for passing args)
# serverURL allows the webapp to retrieve data from servers that do not allow CORS
# ( see https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS )
Info = {
   code: null,
   main: "jalview.bin.Jalview", # starts the JalviewJS desktop
   args: null, // specify command line to be passed to the main method of above class
   core: "jvexamplefile", # preload classes
   width: 850,
   height: 550,
   readyFunction: null, # called once the app is finished
   serverURL: 'https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php',
   j2sPath: 'swingjs/j2s', 
   console:'sysoutdiv', # div for stdout and stderr log
   allowjavascript: true
}
</script>
</head>
<body>

<script>
# Start JalviewJS with the Info block
SwingJS.getApplet('JalviewJS', Info)
</script>
# JalviewJS console output - can be omitted (may also need to omit reference above! 
<div style="position:absolute;left:900px;top:30px;width:600px;height:300px">
<div id="sysoutdiv" style="border:1px solid 
green;width:100%;height:95%;overflow:auto; resize:both;"></div>
This is System.out. <a href="javascript:JalviewJS._clearConsole()">clear it</a> 
<br>Add ?j2snocore to URL to see full class list; ?j2sdebug to use uncompressed 
j2s/core files <br><a href="javascript:getClassList()">get _j2sClassList.txt</a>
</div>

</body>
```

You probably want to have the 'sysoutdiv' hidden or omitted, of course. 

### Passing arguments to the JalviewJS desktop 
By default, the jalview.bin.Jalview entrypoint for JalviewJS will look at the first argument passed on the URL 
and process it as a standard Jalview command line.

* [Open a Jalview project in the Desktop - https://jalview.github.io/jalview-js/JalviewJS.html?open%20examples/exampleFile_2_7.jvp](JalviewJS.html?open%20examples/exampleFile_2_7.jvp)
* [Open a Jalview project in the Embedded Demo - https://jalview.github.io/jalview-js/JalviewJS_embedded.html?open%20examples/exampleFile_2_7.jvp](JalviewJS_embedded.html?open%20examples/exampleFile_2_7.jvp)

#### Arguments via the Info block

SwingJS calls the main method of the class specified by the 'main' key. If an 'args' key is defined then this will be parsed as command line arguments in the same way, except URL-encoding of spaces to separate each argument is not necessary.

```
args:"-open examples/uniref50.fa -tree examples/ferredoxin.nw -annotations examples/plantfdx.annotations"
```


#### Loading Speed and Corefiles

JalviewJS is fairly slow when first opening Jalview projects but the example project is a good test to make sure everything is working OK. Optimizing JalviewJS (or any other SwingJS application) currently involves creating corefiles - minified Clojure compiled JavaScript that is downloaded and cached by the browser in parallel. The different corefiles available are in swingjs/j2s/core/. A custom corefile is created by performing a series of actions in JalviewJS, and then using the 'get _j2sClassList.txt' link to download a list of the JavaScript classes needed. See instructions in the corresponding Jalview source distribution on how to add this class list to create a new JalviewJS corefile.


### Embedded mode
For JalviewJS alpha, embedded mode is still a work in progress. The principle is that when JalviewJS is started up in embedded mode, the Jalview Desktop is hidden, and any windows opened are shown in specially tagged &lt;div&gt; elements.

```
<script src="swingjs/swingjs2.js"></script>
<script>
if (!self.SwingJS)alert('swingjs2.js was not found. It needs to be in swingjs folder in the same directory as ' + document.location.href)
Info = {
  code: null,
  main: "jalview.bin.Jalview",
  core:"jvexamplefile",
  readyFunction: null,
  serverURL: 'https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php',
  j2sPath: 'swingjs/j2s',
  console:'sysoutdiv',
  allowjavascript: true,
	
  //Jalview-specific:
  // note that desktop-frame-div has been set to display:none
  jalview_SCREEN_WIDTH: 100, // desktop width -- 0 to hide
  jalview_SCREEN_HEIGHT: 70,  // desktop height -- 0 to hide
  jalview_SCREEN_X: 10,
  jalview_SCREEN_Y: 10,
  jalview_EMBEDDED: true
	
}
</script>
</head>
<body>
<table><tr><td>
<!-- note that the desktop must have a z-index ge 1000 because it is the root of all popups -->
<div id="jalview-desktop-div" style="z-index:1000;position:relative;top:0px;left:0px;width:300px;height:70px">desktop here</div>
</td></tr><tr><td>
<div id="jalview-alignment-div" style="position:relative;top:0px;left:0px;width:600px;height:400px;  resize: both; overflow: auto;">
The alignment frame will appear here momentarily...
</div>
</td></tr><tr>
<td>
<div id="jalview-structureviewer-div" style="position:relative;top:0px;left:0px;width:400px;height:400px">
jalview-structureviewer-div
</div>
</td>
<td>
<div id="jalview-tree-div" style="position:relative;top:0px;left:0px;width:400px;height:400px">
jalview-tree-div
</div>
</td>
<td>
<div id="jalview-pca-div" style="position:relative;top:0px;left:0px;width:400px;height:400px">
jalview-pca-div
</div>
</td>

</tr></table>


<script>
SwingJS.getApplet('JalviewJSEmbedded', Info)
getClassList = function(){J2S._saveFile('_j2sclasslist.txt', Clazz.ClassFilesLoaded.sort().join('\n'))}
</script>
```

# Developing and updating JalviewJS

JalviewJS is still experimental, and we are working to improve its functionality and also the way in which JalviewJS is built.

### How do I build my own JalviewJS ?

Either clone Jalview's git repository and check out the version you need, or download the corresponding Jalview source distribution. Instructions for setting up the SwingJS/Java2Script toolchain and building JalviewJS are given in documentation accompanying Jalview's source.

The Jalview build system will ultimately generate a tarball 'jalviewjs-site.tar.gz" that can be deployed on a local or remote web server.

### Updating this jalview-js repository

This repository contains a subset of the full jalviewjs-site.tar.gz tarball:

* swingjs - The JalviewJS JavaScript files
* this documentation: README.md
* JalviewJS.html, JalviewJS_embedded.html 
* a minimal amount of example data in examples and demo-data so you can get going. 

Until the process is fully automated, this git repository is manually updated by:

```
cd jalview-js # change to repository working directory
rm -Rf swingjs # delete existing jalviewjs files
tar -zxf jalviewjs-site.tar.gz # unpack the latest JalviewJS distribution
git add -u # add any updated files in swingjs, or examples directory
git add swingjs # add any new files in swingjs
git commit # make sure you state which version the release includes
```

It is probably also a good idea to verify the links above for JalviewJS.html and JalviewJS_embedded.html still work. If they don't, then patch them and add and commit those changes.





