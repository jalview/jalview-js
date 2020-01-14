(function(){var P$=Clazz.newPackage("org.jmol.appletjs"),I$=[[0,'java.util.Hashtable','org.jmol.util.Parser','org.jmol.util.Logger','javajs.util.PT','org.jmol.awtjs2d.Platform']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Jmol", null, 'org.jmol.util.GenericApplet', 'javajs.api.JSInterface');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.htParams=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (vwrOptions) {
Clazz.super_(C$, this,1);
this.htParams=Clazz.new_($I$(1));
if (vwrOptions == null ) vwrOptions=Clazz.new_($I$(1));
this.vwrOptions=vwrOptions;
for (var entry, $entry = vwrOptions.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) this.htParams.put$TK$TV(entry.getKey$().toLowerCase$(), entry.getValue$());

this.documentBase="" + vwrOptions.get$O("documentBase");
this.codeBase="" + vwrOptions.get$O("codePath");
this.isJS=true;
this.init$O(this);
}, 1);

Clazz.newMeth(C$, 'setStereoGraphics$Z', function (isStereo) {
{
if (isStereo) return vwr.apiPlatform.context;
}
return null;
});

Clazz.newMeth(C$, 'initOptions$', function () {
this.vwrOptions.remove$O("debug");
this.vwrOptions.put$TK$TV("fullName", this.fullName);
this.haveDocumentAccess="true".equalsIgnoreCase$S("" + this.getValue$S$S("allowjavascript", "true"));
this.mayScript=true;
});

Clazz.newMeth(C$, 'getJmolParameter$S', function (paramName) {
var o=this.htParams.get$O(paramName.toLowerCase$());
return (o == null  ? null : "" + o);
});

Clazz.newMeth(C$, 'doSendJsTextStatus$S', function (message) {
System.out.println$S(message);
});

Clazz.newMeth(C$, 'doSendJsTextareaStatus$S', function (message) {
System.out.println$S(message);
});

Clazz.newMeth(C$, 'doFunctionXY$S$I$I', function (functionName, nX, nY) {
var fxy=Clazz.array(Float.TYPE, [Math.abs(nX), Math.abs(nY)]);
if (!this.mayScript || !this.haveDocumentAccess || nX == 0   || nY == 0 ) return fxy;
try {
if (nX > 0 && nY > 0 ) {
for (var i=0; i < nX; i++) for (var j=0; j < nY; j++) {
{
fxy[i][j] = window.eval(functionName)(this.htmlName, i, j);
}
}

} else if (nY > 0) {
var data;
{
data = window.eval(functionName)(this.htmlName, nX, nY);
}
nX=Math.abs(nX);
var fdata=Clazz.array(Float.TYPE, [nX * nY]);
$I$(2).parseStringInfestedFloatArray$S$javajs_util_BS$FA(data, null, fdata);
for (var i=0, ipt=0; i < nX; i++) {
for (var j=0; j < nY; j++, ipt++) {
fxy[i][j]=fdata[ipt];
}
}
} else {
{
data = window.eval(functionName)(this.htmlName, nX, nY, fxy);
}
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(3).error$S("Exception " + e + " with nX, nY: " + nX + " " + nY );
} else {
throw e;
}
}
return fxy;
});

Clazz.newMeth(C$, 'doFunctionXYZ$S$I$I$I', function (functionName, nX, nY, nZ) {
var fxyz=Clazz.array(Float.TYPE, [Math.abs(nX), Math.abs(nY), Math.abs(nZ)]);
if (!this.mayScript || !this.haveDocumentAccess || nX == 0   || nY == 0  || nZ == 0 ) return fxyz;
try {
{
window.eval(functionName)(this.htmlName, nX, nY, nZ, fxyz);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(3).error$S("Exception " + e + " for " + functionName + " with nX, nY, nZ: " + nX + " " + nY + " " + nZ );
} else {
throw e;
}
}
return fxyz;
});

Clazz.newMeth(C$, 'doShowDocument$java_net_URL', function (url) {
var surl=$I$(4).split$S$S(url.toString(), "?POST?");
if (surl.length == 1) {
{
window.open(surl[0]);
}
return;
}var f="<form id=f method=POST action='" + surl[0] + "'>" ;
f += "<input type='hidden' name='name' value='nmr-1h-prediction' id='name'>";
f += "<input type='submit' value='working...'>";
var fields=surl[1].split$S("&");
for (var i=0; i < fields.length; i++) {
var field=fields[i];
var pt=field.indexOf$S("=");
var name=field.substring$I$I(0, pt);
var value=field.substring$I(pt);
if (value.indexOf$S("\n") >= 0) {
f += "<textarea style='display:none' name=" + name + ">" + value + "</textarea>" ;
} else {
f += "<input type=hidden name=" + name + " value=\"" + value + "\">" ;
}}
f += "</form>";
{
var w=window.open("");w.document.write(f);w.document.getElementById("f").submit();
}
});

Clazz.newMeth(C$, 'doSendCallback$S$OA$S', function (callback, data, strInfo) {
if (callback == null  || callback.length$() == 0 ) {
} else if (callback.equals$O("alert")) {
{
alert(strInfo); return "";
}
} else {
var tokens=$I$(4).split$S$S(callback, ".");
{
try{ var o = window[tokens[0]];
for (var i = 1; i < tokens.length; i++) o = o[tokens[i]];
for (var i = 0; i < data.length; i++) data[i] && data[i].booleanValue && (data[i] = data[i].booleanValue());
return o.apply(null,data) } catch (e) { System.out.println(callback + " failed " + e); }
}
}return "";
});

Clazz.newMeth(C$, 'doEval$S', function (strEval) {
try {
{
return window.eval(strEval);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(3).error$S("# error evaluating " + strEval + ":" + e.toString() );
} else {
throw e;
}
}
return "";
});

Clazz.newMeth(C$, 'doShowStatus$S', function (message) {
try {
System.out.println$S(message);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getGLmolView$', function () {
return this.viewer.getGLmolView$();
});

Clazz.newMeth(C$, 'openFile$S', function (fileName) {
return this.viewer.openFile$S(fileName);
});

Clazz.newMeth(C$, 'cacheFileByName$S$Z', function (fileName, isAdd) {
return this.viewer.cacheFileByName$S$Z(fileName, isAdd);
});

Clazz.newMeth(C$, 'cachePut$S$O', function (key, data) {
this.viewer.cachePut$S$O(key, data);
});

Clazz.newMeth(C$, 'getFullName$', function () {
return this.fullName;
});

Clazz.newMeth(C$, 'processMouseEvent$I$I$I$I$J', function (id, x, y, modifiers, time) {
return this.viewer.processMouseEvent$I$I$I$I$J(id, x, y, modifiers, time);
});

Clazz.newMeth(C$, 'setDisplay$O', function (canvas) {
this.viewer.setDisplay$O(canvas);
});

Clazz.newMeth(C$, 'setStatusDragDropped$I$I$I$S', function (mode, x, y, fileName) {
return this.viewer.setStatusDragDropped$I$I$I$S(mode, x, y, fileName);
});

Clazz.newMeth(C$, 'startHoverWatcher$Z', function (enable) {
this.viewer.startHoverWatcher$Z(enable);
});

Clazz.newMeth(C$, 'update$', function () {
this.viewer.updateJS$();
});

Clazz.newMeth(C$, 'openFileAsyncSpecial$S$I', function (fileName, flags) {
this.viewer.openFileAsyncSpecial$S$I(fileName, flags);
});

Clazz.newMeth(C$, 'processTwoPointGesture$FAAA', function (touches) {
this.viewer.processTwoPointGesture$FAAA(touches);
});

Clazz.newMeth(C$, 'setScreenDimension$I$I', function (width, height) {
this.viewer.setScreenDimension$I$I(width, height);
});

Clazz.newMeth(C$, 'resizeInnerPanel$S', function (data) {
var dims=Clazz.array(Float.TYPE, [2]);
$I$(2).parseStringInfestedFloatArray$S$javajs_util_BS$FA(data, null, dims);
this.resizeDisplay$I$I((dims[0]|0), (dims[1]|0));
return Clazz.array(Integer.TYPE, -1, [(dims[0]|0), (dims[1]|0)]);
});

Clazz.newMeth(C$, 'resizeDisplay$I$I', function (width, height) {
var jmol=$I$(5).Jmol$();
jmol.resizeApplet(this.viewer.html5Applet, Clazz.array(Integer.TYPE, -1, [width, height]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
