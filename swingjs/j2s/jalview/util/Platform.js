(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'StringBuffer','java.awt.Toolkit','javax.swing.SwingUtilities','Thread','jalview.javascript.json.JSON','java.io.BufferedReader','java.io.InputStreamReader','org.json.simple.parser.JSONParser','java.io.FileOutputStream']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Platform");
C$.isJS=false;
C$.isNoJSMac=null;
C$.isNoJSWin=null;
C$.isMac=null;
C$.isWin=null;
C$.isHeadless=null;
C$.time=0;
C$.mark=0;
C$.set=0;
C$.duration=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.isJS=true ||false;
C$.isNoJSMac=null;
C$.isNoJSWin=null;
C$.isMac=null;
C$.isWin=null;
C$.isHeadless=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isMac$', function () {
return ((C$.isMac == null  ? (C$.isMac=new Boolean((System.getProperty$S("os.name").indexOf$S("Mac") >= 0))) : C$.isMac)).booleanValue$();
}, 1);

Clazz.newMeth(C$, 'isWin$', function () {
return ((C$.isWin == null  ? (C$.isWin=new Boolean((System.getProperty$S("os.name").indexOf$S("Win") >= 0))) : C$.isWin)).booleanValue$();
}, 1);

Clazz.newMeth(C$, 'isJS$', function () {
return C$.isJS;
}, 1);

Clazz.newMeth(C$, 'isAMacAndNotJS$', function () {
return ((C$.isNoJSMac == null  ? (C$.isNoJSMac=new Boolean(!C$.isJS && C$.isMac$() )) : C$.isNoJSMac)).booleanValue$();
}, 1);

Clazz.newMeth(C$, 'isWindowsAndNotJS$', function () {
return ((C$.isNoJSWin == null  ? (C$.isNoJSWin=new Boolean(!C$.isJS && C$.isWin$() )) : C$.isNoJSWin)).booleanValue$();
}, 1);

Clazz.newMeth(C$, 'isHeadless$', function () {
if (C$.isHeadless == null ) {
C$.isHeadless=new Boolean("true".equals$O(System.getProperty$S("java.awt.headless")));
}return (C$.isHeadless).booleanValue$();
}, 1);

Clazz.newMeth(C$, 'getMaxCommandLineLength$', function () {
return 2046;
}, 1);

Clazz.newMeth(C$, 'escapeString$S', function (file) {
var f=Clazz.new_($I$(1));
var p=0;
var lastp=0;
while ((p=file.indexOf$I$I("\\", lastp)) > -1){
f.append$CharSequence(file.subSequence$I$I(lastp, p));
f.append$S("\\\\");
lastp=p + 1;
}
f.append$S(file.substring$I(lastp));
return f.toString();
}, 1);

Clazz.newMeth(C$, 'isControlDown$java_awt_event_MouseEvent', function (e) {
return C$.isControlDown$java_awt_event_MouseEvent$Z(e, C$.isMac$());
}, 1);

Clazz.newMeth(C$, 'isControlDown$java_awt_event_MouseEvent$Z', function (e, aMac) {
if (!aMac) {
return e.isControlDown$();
}return !e.isPopupTrigger$() && ($I$(2).getDefaultToolkit$().getMenuShortcutKeyMask$() & e.getModifiers$()) != 0 ;
}, 1);

Clazz.newMeth(C$, 'isWinRightButton$java_awt_event_MouseEvent', function (e) {
return C$.isWin$() && $I$(3).isRightMouseButton$java_awt_event_MouseEvent(e) ;
}, 1);

Clazz.newMeth(C$, 'isWinMiddleButton$java_awt_event_MouseEvent', function (e) {
return C$.isWin$() && $I$(3).isMiddleMouseButton$java_awt_event_MouseEvent(e) ;
}, 1);

Clazz.newMeth(C$, 'allowMnemonics$', function () {
return !C$.isMac$();
}, 1);

Clazz.newMeth(C$, 'timeCheck$S$I', function (msg, mode) {
var t=System.currentTimeMillis$();
switch (mode) {
case 0:
C$.time=C$.mark=t;
if (msg != null ) {
System.err.println$S("Platform: timer reset\t\t\t" + msg);
}break;
case 1:
if (C$.set > 0) {
C$.duration+=(t - C$.set);
} else {
if (C$.time == 0) {
C$.time=C$.mark=t;
}if (msg != null ) {
System.err.println$S("Platform: timer mark\t" + (new Float((t - C$.time) / 1000.0).toString()) + "\t" + new Float(((t - C$.mark) / 1000.0)).toString() + "\t" + msg );
}C$.mark=t;
}break;
case 2:
C$.set=t;
break;
case 3:
if (msg != null ) {
System.err.println$S("Platform: timer dur\t" + (new Float((t - C$.time) / 1000.0).toString()) + "\t" + new Float(((C$.duration) / 1000.0)).toString() + "\t" + msg );
}C$.set=0;
break;
}
}, 1);

Clazz.newMeth(C$, 'cacheFileData$S$O', function (path, data) {
if (!C$.isJS$() || data == null  ) {
return;
}
swingjs.JSUtil.cacheFileData$S$O(path, data);
}, 1);

Clazz.newMeth(C$, 'cacheFileData$java_io_File', function (file) {
var data;
if (!C$.isJS$() || (data=C$.getFileBytes$java_io_File(file)) == null  ) {
return;
}C$.cacheFileData$S$O(file.toString(), data);
}, 1);

Clazz.newMeth(C$, 'getFileBytes$java_io_File', function (f) {
return f && f._bytes ||null;
}, 1);

Clazz.newMeth(C$, 'getFileAsBytes$S', function (fileStr) {
var bytes=null;

bytes = swingjs.JSUtil.getFileAsBytes$O(fileStr)
C$.cacheFileData$S$O(fileStr, bytes);
return bytes;
}, 1);

Clazz.newMeth(C$, 'getFileAsString$S', function (url) {
var ret=null;

ret = swingjs.JSUtil.getFileAsString$S(url);
C$.cacheFileData$S$O(url, ret);
return ret;
}, 1);

Clazz.newMeth(C$, 'setFileBytes$java_io_File$S', function (f, urlstring) {
if (!C$.isJS$()) {
return false;
}var bytes=C$.getFileAsBytes$S(urlstring);

f._bytes = bytes;
return true;
}, 1);

Clazz.newMeth(C$, 'addJ2SBinaryType$S', function (ext) {

J2S._binaryTypes.push("." + ext + "?");
}, 1);

Clazz.newMeth(C$, 'encodeURI$S', function (value) {

value = encodeURIComponent(value);
return value;
}, 1);

Clazz.newMeth(C$, 'openURL$S', function (url) {
if (!C$.isJS$()) {
return false;
}
window.open(url);
return true;
}, 1);

Clazz.newMeth(C$, 'getUniqueAppletID$', function () {
var g=$I$(4).currentThread$().getThreadGroup$();

return g.html5Applet._uniqueId;
return null;
}, 1);

Clazz.newMeth(C$, 'readInfoProperties$S$java_util_Properties', function (prefix, p) {
if (!C$.isJS$()) {
return;
}var g=$I$(4).currentThread$().getThreadGroup$();
var id=C$.getUniqueAppletID$();
var key="";
var value="";

var info = g.html5Applet.__Info || {}; for (var key in info) { if (key.indexOf(prefix) == 0) { value = "" + info[key];
System.out.println$S("Platform id=" + id + " reading Info." + key + " = " + value );
p.put$TK$TV(id + "_" + key , value);

} }
}, 1);

Clazz.newMeth(C$, 'setAjaxJSON$java_net_URL', function (url) {
if (C$.isJS$()) {
$I$(5).setAjax$java_net_URL(url);
}}, 1);

Clazz.newMeth(C$, 'parseJSON$java_io_InputStream', function (response) {
if (C$.isJS$()) {
return $I$(5).parse$O(response);
}var br=null;
try {
br=Clazz.new_($I$(6).c$$java_io_Reader,[Clazz.new_($I$(7).c$$java_io_InputStream$S,[response, "UTF-8"])]);
return Clazz.new_($I$(8)).parse$java_io_Reader(br);
} finally {
if (br != null ) {
try {
br.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
}, 1);

Clazz.newMeth(C$, 'parseJSON$S', function (json) {
return (C$.isJS$() ? $I$(5).parse$O(json) : Clazz.new_($I$(8)).parse$S(json));
}, 1);

Clazz.newMeth(C$, 'parseJSON$java_io_Reader', function (r) {
if (r == null ) {
return null;
}if (!C$.isJS$()) {
return Clazz.new_($I$(8)).parse$java_io_Reader(r);
}if (Clazz.instanceOf(r, "java.io.FileReader")) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["StringJS does not support FileReader parsing for JSON -- but it could..."]);
}return $I$(5).parse$O(r);
}, 1);

Clazz.newMeth(C$, 'streamToFile$java_io_InputStream$java_io_File', function (is, outFile) {
var fio=Clazz.new_($I$(9).c$$java_io_File,[outFile]);
try {
if (C$.isJS$() && (outFile.setBytes$O && outFile.setBytes$O(is) &&true) ) {
return;
}var bb=Clazz.array(Byte.TYPE, [32768]);
var l;
while ((l=is.read$BA(bb)) > 0){
fio.write$BA$I$I(bb, 0, l);
}
} finally {
fio.close$();
}
}, 1);

Clazz.newMeth(C$, 'addJ2SDirectDatabaseCall$S', function (domain) {
if (C$.isJS$()) {
System.out.println$S("Platform adding known access-control-allow-origin * for domain " + domain);

J2S.addDirectDatabaseCall(domain);
}}, 1);

Clazz.newMeth(C$, 'getURLCommandArguments$', function () {

var a = decodeURI((document.location.href.replace("&","?").split("?j2s")[0] + "?").split("?")[1].split("#")[0]); a && (J2S.thisApplet.__Info.args = a.split(" "));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
