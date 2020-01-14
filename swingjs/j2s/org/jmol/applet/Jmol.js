(function(){var P$=Clazz.newPackage("org.jmol.applet"),p$1={},I$=[[0,'org.jmol.awt.FileDropper','java.util.Hashtable','Boolean','javax.swing.UIManager','org.jmol.util.Logger','netscape.javascript.JSObject','org.jmol.c.CBK','org.jmol.util.GenericApplet','java.awt.Dimension','java.awt.Color','javajs.util.PT','org.jmol.util.Parser']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Jmol", null, 'org.jmol.util.GenericApplet', 'org.jmol.applet.WrappedApplet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isUpdating=false;
this.showPaintTime=false;
this.timeLast=0;
this.timeCount=0;
this.timeTotal=0;
this.lastMotionEventNumber=0;
this.timeBegin=0;
this.dropper=null;
this.applet=null;
this.allowJSEval=null;
this.jsoDocument=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.jsoDocument=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'setApplet$java_applet_Applet$Z', function (a, isSigned) {
this.appletObject=this.applet=a;
this.isSigned=isSigned;
this.init$O(this.appletObject);
if (isSigned) {
try {
this.dropper=Clazz.new_($I$(1).c$$org_jmol_api_JmolStatusListener$org_jmol_viewer_Viewer$org_jmol_api_JmolDropEditor,[null, this.viewer, null]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$O(e);
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
p$1.update$java_awt_Graphics$S.apply(this, [g, "paint "]);
});

Clazz.newMeth(C$, 'update$java_awt_Graphics', function (g) {
p$1.update$java_awt_Graphics$S.apply(this, [g, "update"]);
});

Clazz.newMeth(C$, 'destroy$', function () {
C$.superclazz.prototype.destroy$.apply(this, []);
if (this.dropper != null ) {
this.dropper.dispose$();
this.dropper=null;
}System.out.println$S("Jmol applet " + this.fullName + " destroyed" );
if (this.isJNLP) System.exit$I(0);
});

Clazz.newMeth(C$, 'setStereoGraphics$Z', function (isStereo) {
return (isStereo ? this.applet.getGraphics$() : null);
});

Clazz.newMeth(C$, 'initOptions$', function () {
var ms=this.getJmolParameter$S("mayscript");
this.mayScript=(ms != null ) && (!ms.equalsIgnoreCase$S("false")) ;
var base=this.applet.getDocumentBase$();
this.documentBase=(base == null  ? this.getValue$S$S("documentBase", null) : base.toString());
base=this.applet.getCodeBase$();
this.codeBase=(base == null  ? this.getValue$S$S("codePath", this.getValue$S$S("codeBase", null)) : base.toString());
if (this.codeBase != null  && !this.codeBase.endsWith$S("/") ) this.codeBase += "/";
this.vwrOptions=Clazz.new_($I$(2));
this.isSigned|=this.isJNLP || this.getBooleanValue$S$Z("signed", false) ;
if (this.isSigned) p$1.addValue$java_util_Map$S$S$O.apply(this, [this.vwrOptions, null, "signedApplet", $I$(3).TRUE]);
if (this.getBooleanValue$S$Z("useCommandThread", this.isSigned)) p$1.addValue$java_util_Map$S$S$O.apply(this, [this.vwrOptions, null, "useCommandThread", $I$(3).TRUE]);
var options="";
if (this.isSigned && this.getBooleanValue$S$Z("multiTouchSparshUI-simulated", false) ) options += "-multitouch-sparshui-simulated";
 else if (this.isSigned && this.getBooleanValue$S$Z("multiTouchSparshUI", false) ) options += "-multitouch-sparshui";
p$1.addValue$java_util_Map$S$S$O.apply(this, [this.vwrOptions, null, "options", options]);
p$1.addValue$java_util_Map$S$S$O.apply(this, [this.vwrOptions, null, "display", this.applet]);
p$1.addValue$java_util_Map$S$S$O.apply(this, [this.vwrOptions, null, "fullName", this.fullName]);
p$1.addValue$java_util_Map$S$S$O.apply(this, [this.vwrOptions, null, "documentBase", this.documentBase]);
p$1.addValue$java_util_Map$S$S$O.apply(this, [this.vwrOptions, null, "codePath", this.codeBase]);
if (this.getBooleanValue$S$Z("noScripting", false)) p$1.addValue$java_util_Map$S$S$O.apply(this, [this.vwrOptions, null, "noScripting", $I$(3).TRUE]);
if (this.isJNLP) p$1.addValue$java_util_Map$S$S$O.apply(this, [this.vwrOptions, null, "isJNLP", $I$(3).TRUE]);
p$1.addValue$java_util_Map$S$S$O.apply(this, [this.vwrOptions, "MaximumSize", "maximumSize", null]);
p$1.addValue$java_util_Map$S$S$O.apply(this, [this.vwrOptions, "JmolAppletProxy", "appletProxy", null]);
p$1.addValue$java_util_Map$S$S$O.apply(this, [this.vwrOptions, "documentLocation", null, null]);
try {
$I$(4).setLookAndFeel$S($I$(4).getCrossPlatformLookAndFeelClassName$());
} catch (exc) {
System.err.println$S("Error loading L&F: " + exc);
}
if ($I$(5).debugging) {
$I$(5).debug$S("checking for jsoWindow mayScript=" + this.mayScript);
}if (this.mayScript) {
this.mayScript=this.haveDocumentAccess=false;
var jsoWindow=null;
var jsoDocument=null;
try {
jsoWindow=$I$(6).getWindow$java_applet_Applet(this.applet);
if ($I$(5).debugging) {
$I$(5).debug$S("jsoWindow=" + jsoWindow);
}if (jsoWindow == null ) {
$I$(5).error$S("jsoWindow returned null ... no JavaScript callbacks :-(");
} else {
this.mayScript=true;
}jsoDocument=jsoWindow.getMember$S("document");
if (jsoDocument == null ) {
$I$(5).error$S("jsoDocument returned null ... no DOM manipulations :-(");
} else {
this.haveDocumentAccess=true;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if ($I$(5).debugging) {
$I$(5).debug$S("jsoWindow:" + jsoWindow + " jsoDocument:" + jsoDocument + " mayScript:" + this.mayScript + " haveDocumentAccess:" + this.haveDocumentAccess );
}}C$.cleanRegistry$();
});

Clazz.newMeth(C$, 'addValue$java_util_Map$S$S$O', function (info, key, putKey, value) {
if (key != null ) value=this.getValue$S$S(key, null);
if (value != null ) info.put$TK$TV(putKey == null  ? key : putKey, value);
var haveCallback=false;
for (var item, $item = 0, $$item = $I$(7).values$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) {
if (this.callbacks.get$O(item) != null ) {
haveCallback=true;
break;
}}
if (haveCallback || this.statusForm != null   || this.statusText != null  ) {
if (!this.mayScript) $I$(5).warn$S("MAYSCRIPT missing -- all applet JavaScript calls disabled");
}this.statusForm=this.getValue$S$S("StatusForm", null);
this.statusText=this.getValue$S$S("StatusText", null);
this.statusTextarea=this.getValue$S$S("StatusTextarea", null);
if (this.statusForm != null  && this.statusText != null  ) {
$I$(5).info$S("applet text status will be reported to document." + this.statusForm + "." + this.statusText );
}if (this.statusForm != null  && this.statusTextarea != null  ) {
$I$(5).info$S("applet textarea status will be reported to document." + this.statusForm + "." + this.statusTextarea );
}}, p$1);

Clazz.newMeth(C$, 'cleanRegistry$', function () {
var app=null;
var closed=true;
for (var entry, $entry = $I$(8).htRegistry.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var theApplet=entry.getKey$();
try {
app=(entry.getValue$());
var theWindow=$I$(6).getWindow$java_applet_Applet(app);
closed=(theWindow.getMember$S("closed")).booleanValue$();
if (closed || theWindow.hashCode$() == 0 ) {
}if ($I$(5).debugging) $I$(5).debug$S("Preserving registered applet " + theApplet + " window: " + theWindow.hashCode$() );
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
closed=true;
} else {
throw e;
}
}
if (closed) {
if ($I$(5).debugging) $I$(5).debug$S("Dereferencing closed window applet " + theApplet);
$I$(8).htRegistry.remove$O(theApplet);
app.destroy$();
}}
}, 1);

Clazz.newMeth(C$, 'getJmolParameter$S', function (paramName) {
return this.applet.getParameter$S(paramName);
});

Clazz.newMeth(C$, 'doSendJsTextStatus$S', function (message) {
if (!this.haveDocumentAccess || this.statusForm == null   || this.statusText == null  ) return;
try {
var jsoWindow=$I$(6).getWindow$java_applet_Applet(this.applet);
var jsoDocument=jsoWindow.getMember$S("document");
var jsoForm=jsoDocument.getMember$S(this.statusForm);
if (this.statusText != null ) {
var jsoText=jsoForm.getMember$S(this.statusText);
jsoText.setMember$S$O("value", message);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).error$S("error indicating status at document." + this.statusForm + "." + this.statusText + ":" + e.toString() );
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'doSendJsTextareaStatus$S', function (message) {
if (!this.haveDocumentAccess || this.statusForm == null   || this.statusTextarea == null  ) return;
try {
var jsoWindow=$I$(6).getWindow$java_applet_Applet(this.applet);
var jsoDocument=jsoWindow.getMember$S("document");
var jsoForm=jsoDocument.getMember$S(this.statusForm);
if (this.statusTextarea != null ) {
var jsoTextarea=jsoForm.getMember$S(this.statusTextarea);
if (message == null ) {
jsoTextarea.setMember$S$O("value", "");
} else {
var info=jsoTextarea.getMember$S("value");
jsoTextarea.setMember$S$O("value", info + "\n" + message );
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).error$S("error indicating status at document." + this.statusForm + "." + this.statusTextarea + ":" + e.toString() );
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'update$java_awt_Graphics$S', function (g, source) {
if (this.viewer == null ) return;
if (this.isUpdating) return;
this.isUpdating=true;
if (this.showPaintTime) p$1.startPaintClock.apply(this, []);
var size=Clazz.new_($I$(9));
this.applet.getSize$java_awt_Dimension(size);
this.viewer.setScreenDimension$I$I(size.width, size.height);
if (!this.isStereoSlave) this.viewer.renderScreenImageStereo$O$Z$I$I(g, true, size.width, size.height);
if (this.showPaintTime) {
p$1.stopPaintClock.apply(this, []);
p$1.showTimes$I$I$java_awt_Graphics.apply(this, [10, 10, g]);
}this.isUpdating=false;
}, p$1);

Clazz.newMeth(C$, 'startPaintClock', function () {
this.timeBegin=System.currentTimeMillis$();
var motionEventNumber=this.viewer.getMotionEventNumber$();
if (this.lastMotionEventNumber != motionEventNumber) {
this.lastMotionEventNumber=motionEventNumber;
this.timeCount=this.timeTotal=0;
this.timeLast=-1;
}}, p$1);

Clazz.newMeth(C$, 'stopPaintClock', function () {
var time=((System.currentTimeMillis$() - this.timeBegin)|0);
if (this.timeLast != -1) {
this.timeTotal+=this.timeLast;
++this.timeCount;
}this.timeLast=time;
}, p$1);

Clazz.newMeth(C$, 'fmt$I', function (num) {
if (num < 0) return "---";
if (num < 10) return "  " + num;
if (num < 100) return " " + num;
return "" + num;
}, p$1);

Clazz.newMeth(C$, 'showTimes$I$I$java_awt_Graphics', function (x, y, g) {
var timeAverage=(this.timeCount == 0) ? -1 : ((this.timeTotal + (this.timeCount/2|0))/this.timeCount|0);
g.setColor$java_awt_Color($I$(10).green);
g.drawString$S$I$I(p$1.fmt$I.apply(this, [this.timeLast]) + "ms : " + p$1.fmt$I.apply(this, [timeAverage]) + "ms" , x, y);
}, p$1);

Clazz.newMeth(C$, 'resizeInnerPanel$S', function (data) {
return null;
});

Clazz.newMeth(C$, 'doSendCallback$S$OA$S', function (callback, data, strInfo) {
if (callback == null ) {
p$1.getJsObjectInfo$OA.apply(this, [data]);
return null;
}var jso=$I$(6).getWindow$java_applet_Applet(this.applet);
if (callback.equals$O("alert")) {
jso.call$S$OA(callback, Clazz.array(java.lang.Object, -1, [strInfo]));
return "";
}if (callback.length$() == 0) return "";
if (callback.indexOf$S(".") > 0) {
var mods=$I$(11).split$S$S(callback, ".");
for (var i=0; i < mods.length - 1; i++) {
jso=jso.getMember$S(mods[i]);
}
callback=mods[mods.length - 1];
}return "" + jso.call$S$OA(callback, data);
});

Clazz.newMeth(C$, 'getJsObjectInfo$OA', function (data) {
data[0]=null;
try {
var method=data[1];
var jsObject=data[2];
var args=data[3];
var DOMNode=jsObject[0];
if (method == null ) {
var namespaceURI=DOMNode.getMember$S("namespaceURI");
var localName=DOMNode.getMember$S("localName");
data[0]="namespaceURI=\"" + namespaceURI + "\" localName=\"" + localName + "\"" ;
} else {
data[0]=(args == null  ? DOMNode.getMember$S(method) : DOMNode.call$S$OA(method, args));
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'doEval$S', function (strEval) {
var jsoWindow=null;
if (this.allowJSEval == null ) {
try {
this.jsoDocument=$I$(6).getWindow$java_applet_Applet(this.applet).getMember$S("document");
try {
if ((this.jsoDocument.eval$S("!!Jmol._noEval")).booleanValue$()) this.allowJSEval=$I$(3).FALSE;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
try {
if ((this.jsoDocument.eval$S("!!_jmol.noEval")).booleanValue$()) this.allowJSEval=$I$(3).FALSE;
} catch (e2) {
if (Clazz.exceptionOf(e2,"Exception")){
this.allowJSEval=$I$(3).FALSE;
$I$(5).error$S("# no Jmol or _jmol object in evaluating " + strEval + ":" + e.toString() );
} else {
throw e2;
}
}
} else {
throw e;
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if ($I$(5).debugging) $I$(5).debug$S(" error setting jsoWindow or jsoDocument:" + jsoWindow + ", " + this.jsoDocument );
this.allowJSEval=$I$(3).FALSE;
} else {
throw e;
}
}
}if (this.allowJSEval === $I$(3).FALSE ) {
this.jsoDocument=null;
return "NO EVAL ALLOWED";
}try {
return "" + this.jsoDocument.eval$S(strEval);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).error$S("# error evaluating " + strEval + ":" + e.toString() );
return "";
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'doFunctionXY$S$I$I', function (functionName, nX, nY) {
var fxy=Clazz.array(Float.TYPE, [Math.abs(nX), Math.abs(nY)]);
if (!this.mayScript || nX == 0  || nY == 0 ) return fxy;
try {
var jsoWindow=$I$(6).getWindow$java_applet_Applet(this.applet);
if (nX > 0 && nY > 0 ) {
for (var i=0; i < nX; i++) for (var j=0; j < nY; j++) {
fxy[i][j]=(jsoWindow.call$S$OA(functionName, Clazz.array(java.lang.Object, -1, [this.htmlName, Integer.valueOf$I(i), Integer.valueOf$I(j)]))).floatValue$();
}

} else if (nY > 0) {
var data=jsoWindow.call$S$OA(functionName, Clazz.array(java.lang.Object, -1, [this.htmlName, Integer.valueOf$I(nX), Integer.valueOf$I(nY)]));
nX=Math.abs(nX);
var fdata=Clazz.array(Float.TYPE, [nX * nY]);
$I$(12).parseStringInfestedFloatArray$S$javajs_util_BS$FA(data, null, fdata);
for (var i=0, ipt=0; i < nX; i++) {
for (var j=0; j < nY; j++, ipt++) {
fxy[i][j]=fdata[ipt];
}
}
} else {
jsoWindow.call$S$OA(functionName, Clazz.array(java.lang.Object, -1, [this.htmlName, Integer.valueOf$I(nX), Integer.valueOf$I(nY), fxy]));
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).error$S("Exception " + e.getMessage$() + " with nX, nY: " + nX + " " + nY );
} else {
throw e;
}
}
return fxy;
});

Clazz.newMeth(C$, 'doFunctionXYZ$S$I$I$I', function (functionName, nX, nY, nZ) {
var fxyz=Clazz.array(Float.TYPE, [Math.abs(nX), Math.abs(nY), Math.abs(nZ)]);
if (!this.mayScript || nX == 0  || nY == 0  || nZ == 0 ) return fxyz;
try {
var jsoWindow=$I$(6).getWindow$java_applet_Applet(this.applet);
jsoWindow.call$S$OA(functionName, Clazz.array(java.lang.Object, -1, [this.htmlName, Integer.valueOf$I(nX), Integer.valueOf$I(nY), Integer.valueOf$I(nZ), fxyz]));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).error$S("Exception " + e.getMessage$() + " for " + functionName + " with nX, nY, nZ: " + nX + " " + nY + " " + nZ );
} else {
throw e;
}
}
return fxyz;
});

Clazz.newMeth(C$, 'doShowDocument$java_net_URL', function (url) {
this.applet.getAppletContext$().showDocument$java_net_URL$S(url, "_blank");
});

Clazz.newMeth(C$, 'doShowStatus$S', function (message) {
try {
System.out.println$S(message);
this.applet.showStatus$S($I$(11).rep$S$S$S($I$(11).split$S$S(message, "\n")[0], "\'", "\\\'"));
this.doSendJsTextStatus$S(message);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
