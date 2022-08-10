(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),p$1={},I$=[[0,'java.io.File','javajs.util.PT','org.jmol.util.Logger','org.jmol.adapter.smarter.TestSmarterJmolAdapterImpl','org.jmol.util.JUnitLogger','java.io.FileInputStream','java.util.zip.GZIPInputStream','java.io.BufferedInputStream','org.jmol.adapter.smarter.SmarterJmolAdapter','javajs.util.Rdr','javajs.util.BinaryDocument','junit.framework.Assert','java.util.Hashtable']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TestSmarterJmolAdapterImpl", null, 'junit.framework.TestCase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['gzipped','mustForce'],'S',['typeAllowed'],'O',['file','java.io.File']]
,['Z',['continuing']]]

Clazz.newMeth(C$, 'c$$java_io_File$Z$S', function (file, gzipped, typeAllowed) {
;C$.superclazz.c$$S.apply(this,["testFile"]);C$.$init$.apply(this);
this.file=file;
this.gzipped=gzipped;
this.mustForce=(typeAllowed.startsWith$S("="));
if (this.mustForce) typeAllowed=typeAllowed.substring$I(1);
this.typeAllowed=typeAllowed;
}, 1);

Clazz.newMeth(C$, 'runTest$', function () {
this.testFile$();
});

Clazz.newMeth(C$, 'testFile$', function () {
if (!C$.continuing) return;
var fname=this.file.getCanonicalPath$();
System.out.println$S(fname);
$I$(5,"setInformation$S",[this.file.getPath$()]);
var iStream=Clazz.new_($I$(6,1).c$$java_io_File,[this.file]);
if (this.gzipped) iStream=Clazz.new_($I$(7,1).c$$java_io_InputStream$I,[iStream, 512]);
var bis=Clazz.new_($I$(8,1).c$$java_io_InputStream,[iStream]);
$I$(3,"info$S",[this.file.getPath$()]);
var adapter=Clazz.new_($I$(9,1));
var type=null;
var ok=true;
var reader;
var fileType=adapter.getFileTypeName$O(bis);
System.out.println$S(fileType);
if (fileType == null ) {
reader=$I$(10).getBufferedReader$java_io_BufferedInputStream$S(bis, null);
fileType=adapter.getFileTypeName$O(reader);
} else {
reader=Clazz.new_($I$(11,1)).setStream$java_io_BufferedInputStream$Z(bis, true);
}ok=(this.typeAllowed.equals$O(fileType) || this.typeAllowed.indexOf$S(";" + fileType + ";" ) >= 0 );
if (ok == this.mustForce ) {
C$.continuing=false;
$I$(12,"fail$S",["Wrong type for " + this.file.getPath$() + ": " + fileType + " instead of " + this.typeAllowed ]);
}if (this.mustForce) type=this.typeAllowed;
var htParams=Clazz.new_($I$(13,1));
htParams.put$O$O("fullPathName", fname);
var result=adapter.getAtomSetCollectionFromReaderType$S$S$O$java_util_Map(this.file.getName$(), type, reader, htParams);
System.out.println$O(result);
C$.continuing=(result != null  && Clazz.instanceOf(result, "org.jmol.adapter.smarter.AtomSetCollection") );
$I$(12,"assertNotNull$S$O",["Nothing read for " + this.file.getPath$(), result]);
$I$(12,"assertFalse$S$Z",["Error returned for " + this.file.getPath$() + ": " + result , Clazz.instanceOf(result, "java.lang.String")]);
$I$(12,"assertTrue$S$Z",["Not an AtomSetCollection for " + this.file.getPath$(), Clazz.instanceOf(result, "org.jmol.adapter.smarter.AtomSetCollection")]);
var nAtoms=(result).ac;
C$.continuing&=(nAtoms > 0);
$I$(12,"assertTrue$S$Z",["No atoms loaded for " + this.file.getPath$(), nAtoms > 0]);
});

Clazz.newMeth(C$, 'getName$', function () {
if (this.file != null ) {
return C$.superclazz.prototype.getName$.apply(this, []) + " [" + this.file.getPath$() + "]" ;
}return C$.superclazz.prototype.getName$.apply(this, []);
});

Clazz.newMeth(C$, 'setUp$', function () {
C$.superclazz.prototype.setUp$.apply(this, []);
$I$(5).activateLogger$();
$I$(5).setInformation$S(null);
});

Clazz.newMeth(C$, 'tearDown$', function () {
C$.superclazz.prototype.tearDown$.apply(this, []);
$I$(5).setInformation$S(null);
this.file=null;
this.typeAllowed=null;
this.mustForce=false;
});

C$.$static$=function(){C$.$static$=0;
C$.continuing=true;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
