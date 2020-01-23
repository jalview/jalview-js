# jalview-js
JavaScript artefacts and documents for deploying JalviewJS

## About
JalviewJS is the [Jalview multiple sequence alignment visual analytics workbench](https://www.jalview.org), in [JavaScript](https://www.jalview.org/jalview-js/). It is made possible by [Java2Script](https://github.com/java2script/java2script) - a JavaScript transpiler plugin for Eclipse and the SwingJS library which provides access to a JavaScript port of the Java Runtime Environment, including support for AWT, Swing, Desktop Applications and Applets. 

### Which version of JalviewJS is this ?

The version, build date and originating commit ID are given in (swingjs/j2s/.build_properties) and (VERSION).  
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
<div style="position:left:900px;top:30px;width:600px;height:300px;">
<div id="sysoutdiv" style="border:1px solid 
green;width:100%;height:95%;overflow:auto"></div>
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


#### Loading Speed and Corefiles

JalviewJS is fairly slow when first opening Jalview projects but the example project is a good test to make sure everything is working OK. Optimizing JalviewJS (or any other SwingJS application) currently involves creating corefiles - minified Clojure compiled JavaScript that is downloaded and cached by the browser in parallel. The different corefiles available are in swingjs/j2s/core/. A custom corefile is created by performing a series of actions in JalviewJS, and then using the 'get _j2sClassList.txt' link to download a list of the JavaScript classes needed. See instructions in the corresponding Jalview source distribution on how to add this class list to create a new JalviewJS corefile.


### Embedded mode
For JalviewJS alpha, embedded mode is still a work in progress. The principle is that when JalviewJS is started up in embedded mode, the Jalview Desktop is hidden, and any windows opened are shown in specially tagged <div>s.

```
<script src="swingjs/swingjs2.js"></script>
<script>
if (!self.SwingJS)alert('swingjs2.js was not found. It needs to be in swingjs folder in the same directory as ' + document.location.href)
Info = {
  code: null,
  main: "jalview.bin.Jalview",
//  core: "NONE",
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





