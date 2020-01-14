(function(){var P$=Clazz.newPackage("java.util.jar"),I$=[[0,'java.util.zip.ZipEntry','java.io.BufferedOutputStream']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JarOutputStream", null, 'java.util.zip.ZipOutputStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.firstEntry=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.firstEntry=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_util_jar_Manifest', function (out, man) {
C$.superclazz.c$$java_io_OutputStream.apply(this, [out]);
C$.$init$.apply(this);
if (man == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["man"]);
}var e=Clazz.new_($I$(1).c$$S,["META-INF/MANIFEST.MF"]);
this.putNextEntry$java_util_zip_ZipEntry(e);
man.write$java_io_OutputStream(Clazz.new_($I$(2).c$$java_io_OutputStream,[this]));
this.closeEntry$();
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream', function (out) {
C$.superclazz.c$$java_io_OutputStream.apply(this, [out]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'putNextEntry$java_util_zip_ZipEntry', function (ze) {
if (this.firstEntry) {
var edata=ze.getExtra$();
if (edata == null  || !C$.hasMagic$BA(edata) ) {
if (edata == null ) {
edata=Clazz.array(Byte.TYPE, [4]);
} else {
var tmp=Clazz.array(Byte.TYPE, [edata.length + 4]);
System.arraycopy$O$I$O$I$I(edata, 0, tmp, 4, edata.length);
edata=tmp;
}C$.set16$BA$I$I(edata, 0, 51966);
C$.set16$BA$I$I(edata, 2, 0);
ze.setExtra$BA(edata);
}this.firstEntry=false;
}C$.superclazz.prototype.putNextEntry$java_util_zip_ZipEntry.apply(this, [ze]);
});

Clazz.newMeth(C$, 'hasMagic$BA', function (edata) {
try {
var i=0;
while (i < edata.length){
if (C$.get16$BA$I(edata, i) == 51966) {
return true;
}i+=C$.get16$BA$I(edata, i + 2) + 4;
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
} else {
throw e;
}
}
return false;
}, 1);

Clazz.newMeth(C$, 'get16$BA$I', function (b, off) {
return Byte.toUnsignedInt$B(($b$[0] = b[off], $b$[0])) | (Byte.toUnsignedInt$B(($b$[0] = b[off + 1], $b$[0])) << 8);
}, 1);

Clazz.newMeth(C$, 'set16$BA$I$I', function (b, off, value) {
b[off + 0]=((value|0)|0);
b[off + 1]=(((value >> 8)|0)|0);
}, 1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
