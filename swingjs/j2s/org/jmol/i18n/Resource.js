(function(){var P$=Clazz.newPackage("org.jmol.i18n"),I$=[[0,'org.jmol.viewer.Viewer','org.jmol.util.Logger','org.jmol.viewer.FileManager','org.jmol.translation.PO','javajs.util.Rdr','java.util.Hashtable','javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Resource");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.resource=null;
this.resourceMap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$S', function (resource, className) {
C$.$init$.apply(this);
if (className == null ) this.resourceMap=resource;
 else this.resource=resource;
}, 1);

Clazz.newMeth(C$, 'getResource$org_jmol_viewer_Viewer$S$S', function (vwr, className, name) {
var poData=null;
if (vwr != null  && vwr.isApplet ) {
var fname=$I$(1).appletIdiomaBase + "/" + name + ".po" ;
$I$(2).info$S("Loading language resource " + fname);
poData=vwr.getFileAsString3$S$Z$S(fname, false, "gt");
} else {
try {
var br=$I$(3).getBufferedReaderForResource$org_jmol_viewer_Viewer$O$S$S(vwr, Clazz.new_($I$(4)), "org/jmol/translation/", (className.indexOf$S("Applet") >= 0 ? "JmolApplet/" : "Jmol/") + name + ".po" );
var data=Clazz.array(String, [1]);
$I$(5).readAllAsString$java_io_BufferedReader$I$Z$SA$I(br, 2147483647, false, data, 0);
poData=data[0];
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return null;
} else {
throw e;
}
}
}return C$.getResourceFromPO$S(poData);
}, 1);

Clazz.newMeth(C$, 'getString$S', function (string) {
try {
return (this.resource == null  ? this.resourceMap.get$O(string) : this.resource.getString$S(string));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getLanguage$', function () {
var language=null;
{
language = Jmol.featureDetection.getDefaultLanguage().replace(/-/g,'_');
}
return language;
}, 1);

Clazz.newMeth(C$, 'getResourceFromPO$S', function (data) {
if (data == null  || data.length$() == 0 ) return null;
var map=Clazz.new_($I$(6));
try {
var lines=$I$(7).split$S$S(data, "\n");
var mode=0;
var msgstr="";
var msgid="";
for (var i=0; i < lines.length; i++) {
var line=lines[i];
if (line.length$() <= 2) {
if (mode == 2 && msgstr.length$() != 0  && msgid.length$() != 0 ) map.put$TK$TV(msgid, msgstr);
mode=0;
} else if (line.indexOf$S("msgid") == 0) {
mode=1;
msgid=C$.fix$S(line);
} else if (line.indexOf$S("msgstr") == 0) {
mode=2;
msgstr=C$.fix$S(line);
} else if (mode == 1) {
msgid += C$.fix$S(line);
} else if (mode == 2) {
msgstr += C$.fix$S(line);
}}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
$I$(2).info$S(map.size$() + " translations loaded");
return (map.size$() == 0 ? null : Clazz.new_(C$.c$$O$S,[map, null]));
}, 1);

Clazz.newMeth(C$, 'fix$S', function (line) {
if (line.indexOf$S("\\\"") >= 0) line=$I$(7).rep$S$S$S(line, "\\\"", "\"");
return $I$(7).rep$S$S$S(line.substring$I$I(line.indexOf$S("\"") + 1, line.lastIndexOf$S("\"")), "\\n", "\n");
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
