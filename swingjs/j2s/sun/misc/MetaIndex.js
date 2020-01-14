(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'java.io.File','java.io.BufferedReader','java.io.FileReader','java.util.ArrayList','java.util.HashMap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MetaIndex");
C$.jarMap=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.contents=null;
this.isClassOnlyJar=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'forJar$java_io_File', function (jar) {
return C$.getJarMap$().get$O(jar);
}, 1);

Clazz.newMeth(C$, 'registerDirectory$java_io_File', function (dir) {
var indexFile=Clazz.new_($I$(1).c$$java_io_File$S,[dir, "meta-index"]);
if (indexFile.exists$()) {
try {
var reader=Clazz.new_($I$(2).c$$java_io_Reader,[Clazz.new_($I$(3).c$$java_io_File,[indexFile])]);
var line=null;
var curJarName=null;
var isCurJarContainClassOnly=false;
var contents=Clazz.new_($I$(4));
var map=C$.getJarMap$();
dir=dir.getCanonicalFile$();
line=reader.readLine$();
if (line == null  || !line.equals$O("% VERSION 2") ) {
reader.close$();
return;
}while ((line=reader.readLine$()) != null ){
switch ((line.charCodeAt$I(0))) {
case 33:
case 35:
case 64:
{
if ((curJarName != null ) && (contents.size$() > 0) ) {
map.put$TK$TV(Clazz.new_($I$(1).c$$java_io_File$S,[dir, curJarName]), Clazz.new_(C$.c$$java_util_List$Z,[contents, isCurJarContainClassOnly]));
contents.clear$();
}curJarName=line.substring$I(2);
if (line.charAt$I(0) == "!") {
isCurJarContainClassOnly=true;
} else if (isCurJarContainClassOnly) {
isCurJarContainClassOnly=false;
}break;
}case 37:
break;
default:
{
contents.add$TE(line);
}}
}
if ((curJarName != null ) && (contents.size$() > 0) ) {
map.put$TK$TV(Clazz.new_($I$(1).c$$java_io_File$S,[dir, curJarName]), Clazz.new_(C$.c$$java_util_List$Z,[contents, isCurJarContainClassOnly]));
}reader.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}, 1);

Clazz.newMeth(C$, 'mayContain$S', function (entry) {
if (this.isClassOnlyJar && !entry.endsWith$S(".class") ) {
return false;
}var conts=this.contents;
for (var i=0; i < conts.length; i++) {
if (entry.startsWith$S(conts[i])) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'c$$java_util_List$Z', function (entries, isClassOnlyJar) {
C$.$init$.apply(this);
if (entries == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.contents=entries.toArray$TTA(Clazz.array(String, [0]));
this.isClassOnlyJar=isClassOnlyJar;
}, 1);

Clazz.newMeth(C$, 'getJarMap$', function () {
if (C$.jarMap == null ) {
{
if (C$.jarMap == null ) {
C$.jarMap=Clazz.new_($I$(5));
}}}Clazz.assert(C$, this, function(){return C$.jarMap != null });
return C$.jarMap;
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
