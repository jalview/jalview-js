(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'jalview.io.BackupFilesPresetEntry']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BackupFilenameParts");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isBackupFile'],'I',['num','digits'],'S',['base','templateStart','templateEnd']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.isBackupFile=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$S$S$I', function (file, base, template, digits) {
C$.c$$S$S$S$I.apply(this, [file.getName$(), base, template, digits]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$I', function (filename, base, template, suggesteddigits) {
C$.c$$S$S$S$I$Z.apply(this, [filename, base, template, suggesteddigits, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$I$Z', function (filename, base, template, suggesteddigits, extensionMatch) {
;C$.$init$.apply(this);
this.isBackupFile=false;
var numcharstart=template.indexOf$S("%n");
var digits=0;
var templateStart=template;
var templateEnd="";
if (numcharstart > -1) {
templateStart=template.substring$I$I(0, numcharstart);
templateEnd=template.substring$I(numcharstart + "%n".length$());
digits=suggesteddigits;
}var savedFilename="";
if (extensionMatch) {
var extensioncharstart=filename.lastIndexOf$S('.' + base + templateStart );
if (extensioncharstart == -1) {
return;
}savedFilename=filename.substring$I$I(0, extensioncharstart + 1);
filename=filename.substring$I(extensioncharstart + 1);
}var minlength=base.length$() + template.length$() - "%n".length$() + digits;
if (!(filename.startsWith$S(base + templateStart) && filename.endsWith$S(templateEnd) && filename.length$() >= minlength  )) {
return;
}var startLength=base.length$() + templateStart.length$();
var endLength=templateEnd.length$();
var numString=numcharstart > -1 ? filename.substring$I$I(startLength, filename.length$() - endLength) : "";
if (filename.length$() >= startLength + digits + endLength  && filename.startsWith$S(base + templateStart)  && filename.endsWith$S(templateEnd)  && (numString.matches$S("[0-9]{" + digits + "}" ) || numString.matches$S("[1-9][0-9]{" + digits + ",}" ) ) ) {
this.base=extensionMatch ? savedFilename + base : base;
this.templateStart=templateStart;
this.num=numString.length$() > 0 ? Integer.parseInt$S(numString) : 0;
this.digits=digits;
this.templateEnd=templateEnd;
this.isBackupFile=true;
}}, 1);

Clazz.newMeth(C$, 'currentBackupFilenameParts$S$S$Z', function (filename, base, extensionMatch) {
var bfp=Clazz.new_(C$);
var bfpe=$I$(1).getSavedBackupEntry$();
var template=bfpe.suffix;
if (template == null ) {
return bfp;
}var digits;
try {
digits=bfpe.digits;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return bfp;
} else {
throw e;
}
}
return Clazz.new_(C$.c$$S$S$S$I$Z,[filename, base, template, digits, extensionMatch]);
}, 1);

Clazz.newMeth(C$, 'isBackupFile$', function () {
return this.isBackupFile;
});

Clazz.newMeth(C$, 'indexNum$', function () {
return this.num;
});

Clazz.newMeth(C$, 'getBackupFilename$I$S$S$I', function (index, base, template, digits) {
var numString=String.format$S$OA("%0" + digits + "d" , [new Integer(index)]);
var backupSuffix=template.replaceFirst$S$S("%n", numString);
var backupfilename=base + backupSuffix;
return backupfilename;
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:56 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
