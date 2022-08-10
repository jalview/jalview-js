(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.awt.Toolkit','javax.swing.SwingUtilities','jalview.javascript.json.JSON','java.io.BufferedReader','java.io.InputStreamReader','org.json.simple.parser.JSONParser','java.io.FileOutputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Platform");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['isJS'],'J',['time','mark','set','duration'],'O',['isNoJSMac','Boolean','+isNoJSWin','+isMac','+isWin','+isLinux','+isHeadless']]]

Clazz.newMeth(C$, 'isMac$',  function () {
return ((C$.isMac == null  ? (C$.isMac=Boolean.valueOf$Z((System.getProperty$S("os.name").indexOf$S("Mac") >= 0))) : C$.isMac)).valueOf();
}, 1);

Clazz.newMeth(C$, 'isWin$',  function () {
return ((C$.isWin == null  ? (C$.isWin=Boolean.valueOf$Z((System.getProperty$S("os.name").indexOf$S("Win") >= 0))) : C$.isWin)).valueOf();
}, 1);

Clazz.newMeth(C$, 'isLinux$',  function () {
return ((C$.isLinux == null  ? (C$.isLinux=Boolean.valueOf$Z((System.getProperty$S("os.name").indexOf$S("Linux") >= 0))) : C$.isLinux)).valueOf();
}, 1);

Clazz.newMeth(C$, 'isJS$',  function () {
return C$.isJS;
}, 1);

Clazz.newMeth(C$, 'isAMacAndNotJS$',  function () {
return ((C$.isNoJSMac == null  ? (C$.isNoJSMac=Boolean.valueOf$Z(!C$.isJS && C$.isMac$() )) : C$.isNoJSMac)).valueOf();
}, 1);

Clazz.newMeth(C$, 'isWindowsAndNotJS$',  function () {
return ((C$.isNoJSWin == null  ? (C$.isNoJSWin=Boolean.valueOf$Z(!C$.isJS && C$.isWin$() )) : C$.isNoJSWin)).valueOf();
}, 1);

Clazz.newMeth(C$, 'isHeadless$',  function () {
if (C$.isHeadless == null ) {
C$.isHeadless=Boolean.valueOf$Z("true".equals$O(System.getProperty$S("java.awt.headless")));
}return (C$.isHeadless).valueOf();
}, 1);

Clazz.newMeth(C$, 'getMaxCommandLineLength$',  function () {
return 2046;
}, 1);

Clazz.newMeth(C$, 'escapeBackslashes$S',  function (s) {
return s == null  ? null : s.replace$CharSequence$CharSequence("\\", "\\\\");
}, 1);

Clazz.newMeth(C$, 'isControlDown$java_awt_event_MouseEvent',  function (e) {
return C$.isControlDown$java_awt_event_MouseEvent$Z(e, C$.isMac$());
}, 1);

Clazz.newMeth(C$, 'isControlDown$java_awt_event_MouseEvent$Z',  function (e, aMac) {
if (!aMac) {
return e.isControlDown$();
}return !e.isPopupTrigger$() && ($I$(1).getDefaultToolkit$().getMenuShortcutKeyMask$() & e.getModifiers$()) != 0 ;
}, 1);

Clazz.newMeth(C$, 'isWinRightButton$java_awt_event_MouseEvent',  function (e) {
return C$.isWin$() && $I$(2).isRightMouseButton$java_awt_event_MouseEvent(e) ;
}, 1);

Clazz.newMeth(C$, 'isWinMiddleButton$java_awt_event_MouseEvent',  function (e) {
return C$.isWin$() && $I$(2).isMiddleMouseButton$java_awt_event_MouseEvent(e) ;
}, 1);

Clazz.newMeth(C$, 'allowMnemonics$',  function () {
return !C$.isMac$();
}, 1);

Clazz.newMeth(C$, 'timeCheck$S$I',  function (msg, mode) {
var t=System.currentTimeMillis$();
switch (mode) {
case 0:
C$.time=C$.mark=t;
if (msg != null ) {
System.err.println$S("Platform: timer reset\t\t\t" + msg);
}break;
case 1:
if (Long.$gt(C$.set,0 )) {
(C$.duration=Long.$add(C$.duration,((Long.$sub(t,C$.set)))));
} else {
if (Long.$eq(C$.time,0 )) {
C$.time=C$.mark=t;
}if (msg != null ) {
System.err.println$S("Platform: timer mark\t" + (new Float((Long.$sub(t,C$.time)) / 1000.0).toString()) + "\t" + new Float(((Long.$sub(t,C$.mark)) / 1000.0)).toString() + "\t" + msg );
}C$.mark=t;
}break;
case 2:
C$.set=t;
break;
case 3:
if (msg != null ) {
System.err.println$S("Platform: timer dur\t" + (new Float((Long.$sub(t,C$.time)) / 1000.0).toString()) + "\t" + new Float(((C$.duration) / 1000.0)).toString() + "\t" + msg );
}C$.set=0;
break;
}
}, 1);

Clazz.newMeth(C$, 'cacheFileData$S$O',  function (path, data) {
if (!C$.isJS$() || data == null  ) {
return;
}
swingjs.JSUtil.cacheFileData$S$O(path, data);
}, 1);

Clazz.newMeth(C$, 'cacheFileData$java_io_File',  function (file) {
var data;
if (!C$.isJS$() || (data=C$.getFileBytes$java_io_File(file)) == null  ) {
return;
}C$.cacheFileData$S$O(file.toString(), data);
}, 1);

Clazz.newMeth(C$, 'getFileBytes$java_io_File',  function (f) {
return f && swingjs.JSUtil.getFileAsBytes$O(f) ||null;
}, 1);

Clazz.newMeth(C$, 'getFileAsBytes$S',  function (fileStr) {
var bytes=null;

bytes = swingjs.JSUtil.getFileAsBytes$O(fileStr)
C$.cacheFileData$S$O(fileStr, bytes);
return bytes;
}, 1);

Clazz.newMeth(C$, 'getFileAsString$S',  function (url) {
var ret=null;

ret = swingjs.JSUtil.getFileAsString$S(url);
C$.cacheFileData$S$O(url, ret);
return ret;
}, 1);

Clazz.newMeth(C$, 'setFileBytes$java_io_File$S',  function (f, urlstring) {
if (!C$.isJS$()) {
return false;
}var bytes=C$.getFileAsBytes$S(urlstring);

f.\u79d8bytes = f._bytes = bytes;
return true;
}, 1);

Clazz.newMeth(C$, 'addJ2SBinaryType$S',  function (ext) {

J2S._binaryTypes.push("." + ext + "?");
}, 1);

Clazz.newMeth(C$, 'encodeURI$S',  function (value) {

value = encodeURIComponent(value);
return value;
}, 1);

Clazz.newMeth(C$, 'openURL$S',  function (url) {
if (!C$.isJS$()) {
return false;
}
window.open(url);
return true;
}, 1);

Clazz.newMeth(C$, 'getUniqueAppletID$',  function () {

return swingjs.JSUtil.getApplet$()._uniqueId;
return null;
}, 1);

Clazz.newMeth(C$, 'readInfoProperties$S$java_util_Properties',  function (prefix, p) {
if (!C$.isJS$()) {
return;
}var id=C$.getUniqueAppletID$();
var key="";
var value="";

var info = swingjs.JSUtil.getApplet$().__Info || {}; for (var key in info) { if (key.indexOf(prefix) == 0) { value = "" + info[key];
System.out.println$S("Platform id=" + id + " reading Info." + key + " = " + value );
p.put$O$O(id + "_" + key , value);

} }
}, 1);

Clazz.newMeth(C$, 'setAjaxJSON$java_net_URL',  function (url) {
if (C$.isJS$()) {
$I$(3).setAjax$java_net_URL(url);
}}, 1);

Clazz.newMeth(C$, 'parseJSON$java_io_InputStream',  function (response) {
if (C$.isJS$()) {
return $I$(3).parse$O(response);
}var br=null;
try {
br=Clazz.new_([Clazz.new_($I$(5,1).c$$java_io_InputStream$S,[response, "UTF-8"])],$I$(4,1).c$$java_io_Reader);
return Clazz.new_($I$(6,1)).parse$java_io_Reader(br);
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

Clazz.newMeth(C$, 'parseJSON$S',  function (json) {
return (C$.isJS$() ? $I$(3).parse$O(json) : Clazz.new_($I$(6,1)).parse$S(json));
}, 1);

Clazz.newMeth(C$, 'parseJSON$java_io_Reader',  function (r) {
if (r == null ) {
return null;
}if (!C$.isJS$()) {
return Clazz.new_($I$(6,1)).parse$java_io_Reader(r);
}if (Clazz.instanceOf(r, "java.io.FileReader")) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["StringJS does not support FileReader parsing for JSON -- but it could..."]);
}return $I$(3).parse$O(r);
}, 1);

Clazz.newMeth(C$, 'streamToFile$java_io_InputStream$java_io_File',  function (is, outFile) {
if (C$.isJS$() && (outFile.setBytes$O && outFile.setBytes$O(is) &&true) ) {
return;
}var fio=Clazz.new_($I$(7,1).c$$java_io_File,[outFile]);
try {
var bb=Clazz.array(Byte.TYPE, [32768]);
var l;
while ((l=is.read$BA(bb)) > 0){
fio.write$BA$I$I(bb, 0, l);
}
} finally {
fio.close$();
}
}, 1);

Clazz.newMeth(C$, 'addJ2SDirectDatabaseCall$S',  function (domain) {
if (C$.isJS$()) {
System.out.println$S("Platform adding known access-control-allow-origin * for domain " + domain);

J2S.addDirectDatabaseCall(domain);
}}, 1);

Clazz.newMeth(C$, 'getURLCommandArguments$',  function () {
try {

var a = decodeURI((document.location.href.replace("&","?").split("?j2s")[0] + "?").split("?")[1].split("#")[0]); a && (System.out.println("URL arguments detected were "+a)) && (J2S.thisApplet.__Info.urlargs = a.split(" "));
(!J2S.thisApplet.__Info.args || J2S.thisApplet.__Info.args == "" || J2S.thisApplet.__Info.args == "??") && (J2S.thisApplet.__Info.args = a) && (System.out.println("URL arguments were passed to J2S main."));
} catch (t) {
}
}, 1);

Clazz.newMeth(C$, 'pathEquals$S$S',  function (path1, path2) {
if (path1 == null ) {
return path2 == null ;
}if (path2 == null ) {
return false;
}var p1=path1.replace$C$C("\\", "/");
var p2=path2.replace$C$C("\\", "/");
return p1.equals$O(p2);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.isJS=true ||false;
C$.isNoJSMac=null;
C$.isNoJSWin=null;
C$.isMac=null;
C$.isWin=null;
C$.isLinux=null;
C$.isHeadless=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
