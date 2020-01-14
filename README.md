# jalview-js
JavaScript artefacts and documents for deploying JalviewJS

## About
JalviewJS is the [Jalview multiple sequence alignment visual analytics workbench](https://www.jalview.org), in [JavaScript](https://www.jalview.org/jalview-js/). It is made possible by [Java2Script](https://github.com/java2script/java2script) - a JavaScript transpiler plugin for Eclipse and the SwingJS library which provides access to a JavaScript port of the Java Runtime Environment, including support for AWT, Swing, Desktop Applications and Applets. 

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
SwingJS.getApplet('testApplet', Info)
</script>
# JalviewJS console output - can be omitted (may also need to omit reference above! 
<div style="position:left:900px;top:30px;width:600px;height:300px;">
<div id="sysoutdiv" style="border:1px solid 
green;width:100%;height:95%;overflow:auto"></div>
This is System.out. <a href="javascript:testApplet._clearConsole()">clear it</a> 
<br>Add ?j2snocore to URL to see full class list; ?j2sdebug to use uncompressed 
j2s/core files <br><a href="javascript:getClassList()">get _j2sClassList.txt</a>
</div>

</body>
```

You probably want to have the 'sysoutdiv' hidden or omitted, of course. 

### Passing arguments to the JalviewJS desktop 
By default, the jalview.bin.Jalview entrypoint for JalviewJS will look at the first argument passed on the URL 
and process it as a standard Jalview command line.





