(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.webexport"),I$=[[0,'org.jmol.i18n.GT','javajs.util.CU',['org.openscience.jmol.app.webexport.Widgets','.Widget'],['org.openscience.jmol.app.webexport.Widgets','.SpinOnWidget'],['org.openscience.jmol.app.webexport.Widgets','.BackgroundColorWidget'],['org.openscience.jmol.app.webexport.Widgets','.StereoViewWidget'],['org.openscience.jmol.app.webexport.Widgets','.AnimationWidget'],['org.openscience.jmol.app.webexport.Widgets','.ConsoleWidget']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Widgets", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Widget',1024],['SpinOnWidget',0],['BackgroundColorWidget',0],['StereoViewWidget',0],['AnimationWidget',0],['ConsoleWidget',0],['DownLoadWidget',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.widgetList=Clazz.array($I$(3), [5]);
},1);

C$.$fields$=[['O',['widgetList','org.openscience.jmol.app.webexport.Widgets.Widget[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.widgetList[0]=Clazz.new_($I$(4,1),[this, null]);
this.widgetList[1]=Clazz.new_($I$(5,1),[this, null]);
this.widgetList[2]=Clazz.new_($I$(6,1),[this, null]);
this.widgetList[3]=Clazz.new_($I$(7,1),[this, null]);
this.widgetList[4]=Clazz.new_($I$(8,1),[this, null]);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Widgets, "Widget", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]]

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Widgets, "SpinOnWidget", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.jmol.app.webexport.Widgets','.Widget']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.name=$I$(1).$$S("Spin on/off");
}, 1);

Clazz.newMeth(C$, 'getSupportFileNames$', function () {
var fileNames=Clazz.array(String, [0]);
return (fileNames);
});

Clazz.newMeth(C$, 'getJavaScriptFileName$', function () {
return "none";
});

Clazz.newMeth(C$, 'getJavaScript$I$org_openscience_jmol_app_webexport_JmolInstance', function (appletID, instance) {
return "<input type=\"checkbox\" id=\"JmolSpinWidget" + appletID + "\"" + (instance.spinOn ? " checked=\"\"" : "") + " onclick=\"Jmol.scriptWait(window[\'jmolApplet" + appletID + "\'], " + "\'spin \' + (this.checked ? \'on\' : \'off\'));\" " + "title=\"" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("enable/disable spin")],$I$(1).escapeHTML$S) + "\" />" + "<label for=\"JmolSpinWidget" + appletID + "\">" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Spin on")],$I$(1).escapeHTML$S) + "</label>" ;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Widgets, "BackgroundColorWidget", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.jmol.app.webexport.Widgets','.Widget']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.name=$I$(1).$$S("Background Color");
}, 1);

Clazz.newMeth(C$, 'getJavaScriptFileName$', function () {
return ("JmolColorPicker.js");
});

Clazz.newMeth(C$, 'getSupportFileNames$', function () {
var fileNames=Clazz.array(String, [0]);
return (fileNames);
});

Clazz.newMeth(C$, 'getJavaScript$I$org_openscience_jmol_app_webexport_JmolInstance', function (appletID, instance) {
var ptRGB=$I$(2).colorPtFromInt$I$javajs_util_P3(instance.bgColor, null);
return "<table><tbody><tr><td>" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("background color:")],$I$(1).escapeHTML$S) + "</td><td style='min-width:70px;'><script type='text/javascript'>" + "var scriptStr = 'color background $COLOR$;';" + "jmolColorPickerBox(scriptStr, [" + (ptRGB.x|0) + "," + (ptRGB.y|0) + "," + (ptRGB.z|0) + "], 'backbox" + appletID + "',  '" + appletID + "');" + "</script></td></tr></tbody></table>" ;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Widgets, "StereoViewWidget", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.jmol.app.webexport.Widgets','.Widget']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.name=$I$(1).$$S("Stereo Viewing");
}, 1);

Clazz.newMeth(C$, 'getJavaScriptFileName$', function () {
return "none";
});

Clazz.newMeth(C$, 'getSupportFileNames$', function () {
var fileNames=Clazz.array(String, [0]);
return (fileNames);
});

Clazz.newMeth(C$, 'getJavaScript$I$org_openscience_jmol_app_webexport_JmolInstance', function (appletID, instance) {
return "<select id=\"StereoMode" + appletID + "\" title=\"" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("select stereo type")],$I$(1).escapeHTML$S) + "\"" + "onchange=\"void(Jmol.scriptWait(window[\'jmolApplet" + appletID + "\'], " + "(this.options[this.selectedIndex]).value));\">" + "\n<option selected=\"\" value=\"stereo off\">" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Stereo Off")],$I$(1).escapeHTML$S) + " </option>" + "\n<option value=\"stereo REDBLUE\">" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Red/Blue")],$I$(1).escapeHTML$S) + "</option>" + "\n<option value=\"stereo REDCYAN\">" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Red/Cyan")],$I$(1).escapeHTML$S) + "</option>" + "\n<option value=\"stereo REDGREEN\">" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Red/Green")],$I$(1).escapeHTML$S) + "</option>" + "\n</select>" ;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Widgets, "AnimationWidget", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.jmol.app.webexport.Widgets','.Widget']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.name=$I$(1).$$S("Animation Control");
}, 1);

Clazz.newMeth(C$, 'getJavaScriptFileName$', function () {
return ("JmolAnimationCntrl.js");
});

Clazz.newMeth(C$, 'getSupportFileNames$', function () {
var fileNames=Clazz.array(String, [9]);
var imagePath="org/openscience/jmol/app/images/";
fileNames[0]=imagePath + "lastButton.png";
fileNames[1]=imagePath + "playButton.png";
fileNames[2]=imagePath + "playLoopButton.png";
fileNames[3]=imagePath + "playOnceButton.png";
fileNames[4]=imagePath + "playPalindromeButton.png";
fileNames[5]=imagePath + "prevButton.png";
fileNames[6]=imagePath + "pauseButton.png";
fileNames[7]=imagePath + "nextButton.png";
fileNames[8]=imagePath + "firstButton.png";
return (fileNames);
});

Clazz.newMeth(C$, 'getJavaScript$I$org_openscience_jmol_app_webexport_JmolInstance', function (appletID, instance) {
var jsString="<div class=\"AnimBox\"><div style=\"text-align:center\">" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Animation")],$I$(1).escapeHTML$S) + "</div>" + "<div>" + "<button title=\"" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("First Frame")],$I$(1).escapeHTML$S) + "\" onclick=\"void(Jmol.scriptWait(window[\'jmolApplet" + appletID + "\'], \'frame rewind\'));\">" + "<img src=\"firstButton.png\"></button>" + "<button title=\"" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Previous Frame")],$I$(1).escapeHTML$S) + "\" onclick=\"void(Jmol.scriptWait(window[\'jmolApplet" + appletID + "\'], \'frame previous\'));\">" + "<img src=\"prevButton.png\"></button>" + "<button title=\"" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Play")],$I$(1).escapeHTML$S) + "\" onclick=\"void(Jmol.scriptWait(window[\'jmolApplet" + appletID + "\'], \'frame play\'));\">" + "<img src=\"playButton.png\"></button>" + "<button title=\"" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Next Frame")],$I$(1).escapeHTML$S) + "\" onclick=\"void(Jmol.scriptWait(window[\'jmolApplet" + appletID + "\'], \'frame next\'));\">" + "<img src=\"nextButton.png\"></button>" + "<button title=\"" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Pause")],$I$(1).escapeHTML$S) + "\" onclick=\"void(Jmol.scriptWait(window[\'jmolApplet" + appletID + "\'], \'frame pause\'));\">" + "<img src=\"pauseButton.png\"></button>" + "<button title=\"" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Last Frame")],$I$(1).escapeHTML$S) + "\" onclick=\"void(Jmol.scriptWait(window[\'jmolApplet" + appletID + "\'], \'frame last\'));\">" + "<img src=\"lastButton.png\"></button>" + "</div>" + "<div>" + "<span>" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Mode:")],$I$(1).escapeHTML$S) + "</span>" + "<span id=\"jmol_loop_" + appletID + "\"><button title=\"" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Loop")],$I$(1).escapeHTML$S) + "\" onclick=\"jmol_animationmode(\'loop\'," + appletID + ");\">" + "<img src=\"playLoopButton.png\"></button></span>" + "<span id=\"jmol_palindrome_" + appletID + "\"><button title=\"" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Palindrome")],$I$(1).escapeHTML$S) + "\" onclick=\"jmol_animationmode(\'palindrome\', " + appletID + ");\">" + "<img src=\"playPalindromeButton.png\"></button></span>" + "<span class=\"jmol_playDefault\"" + " id=\"jmol_playOnce_" + appletID + "\"><button title=\"" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Play Once")],$I$(1).escapeHTML$S) + "\" onclick=\"jmol_animationmode(\'playOnce\', " + appletID + ");\">" + "<img src=\"playOnceButton.png\"></button></span>" + "</div>" + "</div>" ;
return (jsString);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Widgets, "ConsoleWidget", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.jmol.app.webexport.Widgets','.Widget']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.name=$I$(1).$$S("Open Console Button");
}, 1);

Clazz.newMeth(C$, 'getJavaScriptFileName$', function () {
return ("none");
});

Clazz.newMeth(C$, 'getSupportFileNames$', function () {
var fileNames=Clazz.array(String, [0]);
return (fileNames);
});

Clazz.newMeth(C$, 'getJavaScript$I$org_openscience_jmol_app_webexport_JmolInstance', function (appletID, instance) {
return ("<button title=\"" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("launch Jmol console")],$I$(1).escapeHTML$S) + "\" onclick=\"Jmol.script(window[\'jmolApplet" + appletID + "\'], \'console\');\">" + (function(a,f){return f.apply(null,a)})([$I$(1).$$S("Jmol Console")],$I$(1).escapeHTML$S) + "</button>" );
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Widgets, "DownLoadWidget", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.jmol.app.webexport.Widgets','.Widget']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.name=$I$(1).$$S("Download view");
}, 1);

Clazz.newMeth(C$, 'getJavaScriptFileName$', function () {
return ("none");
});

Clazz.newMeth(C$, 'getSupportFileNames$', function () {
var fileNames=Clazz.array(String, [0]);
return (fileNames);
});

Clazz.newMeth(C$, 'getJavaScript$I$org_openscience_jmol_app_webexport_JmolInstance', function (appletID, instance) {
return ($I$(1).$$S("unimplemented"));
});
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
