(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.io.File','jalview.io.BackupFilenameParts']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BackupFilenameFilter", null, null, 'java.io.FilenameFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['digits'],'S',['base','template']]]

Clazz.newMeth(C$, 'c$$S$S$I',  function (base, template, digits) {
;C$.$init$.apply(this);
this.base=base;
this.template=template;
this.digits=digits;
}, 1);

Clazz.newMeth(C$, 'accept$java_io_File$S',  function (dir, filename) {
try {
var file=Clazz.new_([dir.getCanonicalPath$() + $I$(1).separatorChar + filename ],$I$(1,1).c$$S);
if (file.isDirectory$()) {
return false;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.out.println$S("IOException when checking file '" + filename + "' is a backupfile" );
} else {
throw e;
}
}
var bffp=Clazz.new_($I$(2,1).c$$S$S$S$I,[filename, this.base, this.template, this.digits]);
return bffp.isBackupFile$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
