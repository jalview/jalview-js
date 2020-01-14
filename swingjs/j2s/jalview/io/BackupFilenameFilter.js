(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.io.File','jalview.io.BackupFilenameParts']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BackupFilenameFilter", null, null, 'java.io.FilenameFilter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.base=null;
this.template=null;
this.digits=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I', function (base, template, digits) {
C$.$init$.apply(this);
this.base=base;
this.template=template;
this.digits=digits;
}, 1);

Clazz.newMeth(C$, ['accept$java_io_File$S','accept$'], function (dir, filename) {
try {
var file=Clazz.new_($I$(1).c$$S,[dir.getCanonicalPath$() + $I$(1).separatorChar + filename ]);
if (file.isDirectory$()) {
return false;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.out.println$S("IOException when checking file '" + filename + "' is a backupfile" );
} else {
throw e;
}
}
var bffp=Clazz.new_($I$(2).c$$S$S$S$I,[filename, this.base, this.template, this.digits]);
return bffp.isBackupFile$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
