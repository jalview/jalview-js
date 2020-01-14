(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'jalview.bin.Cache']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BackupFilenameParts");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.base=null;
this.templateStart=null;
this.num=0;
this.digits=0;
this.templateEnd=null;
this.isBackupFile=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.isBackupFile=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$S$S$I', function (file, base, template, digits) {
C$.c$$S$S$S$I.apply(this, [file.getName$(), base, template, digits]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$I', function (filename, base, template, suggesteddigits) {
C$.c$$S$S$S$I$Z.apply(this, [filename, base, template, suggesteddigits, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$I$Z', function (filename, base, template, suggesteddigits, extensionMatch) {
C$.$init$.apply(this);
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
var template=$I$(1).getDefault$S$S("BACKUPFILES_SUFFIX", null);
if (template == null ) {
return bfp;
}var digits;
try {
digits=Integer.parseInt$S($I$(1).getDefault$S$S("BACKUPFILES_SUFFIX_DIGITS", null));
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
