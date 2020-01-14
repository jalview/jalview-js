(function(){var P$=Clazz.newPackage("javajs.util"),p$1={},I$=[[0,'javajs.util.Rdr','javajs.util.SB','java.io.ByteArrayOutputStream','javajs.util.Base64']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "OC", null, 'java.io.OutputStream', 'javajs.api.GenericOutputChannel');
C$.urlPrefixes=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.urlPrefixes=Clazz.array(String, -1, ["http:", "https:", "sftp:", "ftp:", "file:"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bytePoster=null;
this.fileName=null;
this.bw=null;
this.isLocalFile=false;
this.byteCount=0;
this.isCanceled=false;
this.closed=false;
this.os=null;
this.sb=null;
this.type=null;
this.isBase64=false;
this.os0=null;
this.bytes=null;
this.bigEndian=false;
this.isTemp=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.bigEndian=true;
}, 1);

Clazz.newMeth(C$, 'setTemp$Z', function (tf) {
this.isTemp=tf;
});

Clazz.newMeth(C$, 'isBigEndian$', function () {
return this.bigEndian;
});

Clazz.newMeth(C$, 'setBigEndian$Z', function (TF) {
this.bigEndian=TF;
});

Clazz.newMeth(C$, 'setParams$javajs_api_BytePoster$S$Z$java_io_OutputStream', function (bytePoster, fileName, asWriter, os) {
this.bytePoster=bytePoster;
this.isBase64=";base64,".equals$O(fileName);
if (this.isBase64) {
fileName=null;
this.os0=os;
os=null;
}this.fileName=fileName;
this.os=os;
this.isLocalFile=(fileName != null  && !C$.isRemote$S(fileName) );
if (asWriter && !this.isBase64 && os != null   ) this.bw=$I$(1).getBufferedWriter$java_io_OutputStream$S(os, null);
return this;
});

Clazz.newMeth(C$, 'setBytes$BA', function (b) {
this.bytes=b;
return this;
});

Clazz.newMeth(C$, 'getFileName$', function () {
return this.fileName;
});

Clazz.newMeth(C$, 'getName$', function () {
return (this.fileName == null  ? null : this.fileName.substring$I(this.fileName.lastIndexOf$S("/") + 1));
});

Clazz.newMeth(C$, 'getByteCount$', function () {
return this.byteCount;
});

Clazz.newMeth(C$, 'setType$S', function (type) {
this.type=type;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'append$S', function (s) {
try {
if (this.bw != null ) {
this.bw.write$S(s);
} else if (this.os == null ) {
if (this.sb == null ) this.sb=Clazz.new_($I$(2));
this.sb.append$S(s);
} else {
var b=s.getBytes$();
this.os.write$BA$I$I(b, 0, b.length);
this.byteCount+=b.length;
return this;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
this.byteCount+=s.length$();
return this;
});

Clazz.newMeth(C$, 'reset$', function () {
this.sb=null;
p$1.initOS.apply(this, []);
});

Clazz.newMeth(C$, 'initOS', function () {
if (this.sb != null ) {
var s=this.sb.toString();
this.reset$();
this.append$S(s);
return;
}try {
{
this.os = null;
}
if (this.os == null ) this.os=Clazz.new_($I$(3));
if (this.bw != null ) {
this.bw.close$();
this.bw=$I$(1).getBufferedWriter$java_io_OutputStream$S(this.os, null);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
} else {
throw e;
}
}
this.byteCount=0;
}, p$1);

Clazz.newMeth(C$, 'writeByteAsInt$I', function (b) {
if (this.os == null ) p$1.initOS.apply(this, []);
{
try {
this.os.write$I(b);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}this.byteCount++;
});

Clazz.newMeth(C$, 'write$BA$I$I', function (buf, i, len) {
if (this.os == null ) p$1.initOS.apply(this, []);
try {
this.os.write$BA$I$I(buf, i, len);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
this.byteCount+=len;
});

Clazz.newMeth(C$, 'writeShort$H', function (i) {
if (this.isBigEndian$()) {
this.writeByteAsInt$I(i >> 8);
this.writeByteAsInt$I(i);
} else {
this.writeByteAsInt$I(i);
this.writeByteAsInt$I(i >> 8);
}});

Clazz.newMeth(C$, 'writeLong$J', function (b) {
if (this.isBigEndian$()) {
this.writeInt$I((((b >> 32) & 4294967295)|0));
this.writeInt$I(((b & 4294967295)|0));
} else {
this.writeByteAsInt$I(((b >> 56)|0));
this.writeByteAsInt$I(((b >> 48)|0));
this.writeByteAsInt$I(((b >> 40)|0));
this.writeByteAsInt$I(((b >> 32)|0));
this.writeByteAsInt$I(((b >> 24)|0));
this.writeByteAsInt$I(((b >> 16)|0));
this.writeByteAsInt$I(((b >> 8)|0));
this.writeByteAsInt$I((b|0));
}});

Clazz.newMeth(C$, 'write$I', function (b) {
if (this.os == null ) p$1.initOS.apply(this, []);
try {
this.os.write$I(b);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
this.byteCount++;
});

Clazz.newMeth(C$, 'write$BA', function (b) {
this.write$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'cancel$', function () {
this.isCanceled=true;
this.closeChannel$();
});

Clazz.newMeth(C$, 'closeChannel$', function () {
if (this.closed) return null;
try {
if (this.bw != null ) {
this.bw.flush$();
this.bw.close$();
} else if (this.os != null ) {
this.os.flush$();
this.os.close$();
}if (this.os0 != null  && this.isCanceled ) {
this.os0.flush$();
this.os0.close$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (this.isCanceled) {
this.closed=true;
return null;
}if (this.fileName == null ) {
if (this.isBase64) {
var s=this.getBase64$();
if (this.os0 != null ) {
this.os=this.os0;
this.append$S(s);
}this.sb=Clazz.new_($I$(2));
this.sb.append$S(s);
this.isBase64=false;
return this.closeChannel$();
}return (this.sb == null  ? null : this.sb.toString());
}this.closed=true;
var J2S=null;
var _function=null;
{
J2S = self.J2S || self.Jmol; _function = (typeof this.fileName == "function" ? this.fileName : null);
}
if (J2S != null  && !this.isTemp ) {
var data=(this.sb == null  ? this.toByteArray$() : this.sb.toString());
if (_function == null ) {
var info={ isBinary : (this.sb == null) } ||null;
var mimetype=null;
if (this.bytes != null  && $I$(1).isZipB$BA(this.bytes) ) {
mimetype="application/zip";
}J2S.doAjax(this.fileName, mimetype, data, info);
} else {
J2S.applyFunc(_function, data);
}}return null;
});

Clazz.newMeth(C$, 'isBase64$', function () {
return this.isBase64;
});

Clazz.newMeth(C$, 'getBase64$', function () {
return $I$(4).getBase64$BA(this.toByteArray$()).toString();
});

Clazz.newMeth(C$, 'toByteArray$', function () {
return (this.bytes != null  ? this.bytes : (this.bytes=Clazz.instanceOf(this.os, "java.io.ByteArrayOutputStream") ? (this.os).toByteArray$() : this.sb == null  ? null : this.sb.toBytes$I$I(0, this.sb.length$())));
});

Clazz.newMeth(C$, 'close$', function () {
this.closeChannel$();
});

Clazz.newMeth(C$, 'toString', function () {
if (this.bw != null ) try {
this.bw.flush$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
if (this.sb != null ) return this.closeChannel$();
return this.byteCount + " bytes";
});

Clazz.newMeth(C$, 'postByteArray', function () {
return this.bytePoster == null  ? null : this.bytePoster.postByteArray$(this.fileName, this.toByteArray$());
}, p$1);

Clazz.newMeth(C$, 'isRemote$S', function (fileName) {
if (fileName == null ) return false;
var itype=C$.urlTypeIndex$S(fileName);
return (itype >= 0 && itype != 4 );
}, 1);

Clazz.newMeth(C$, 'isLocal$S', function (fileName) {
if (fileName == null ) return false;
var itype=C$.urlTypeIndex$S(fileName);
return (itype < 0 || itype == 4 );
}, 1);

Clazz.newMeth(C$, 'urlTypeIndex$S', function (name) {
if (name == null ) return -2;
for (var i=0; i < C$.urlPrefixes.length; ++i) {
if (name.startsWith$S(C$.urlPrefixes[i])) {
return i;
}}
return -1;
}, 1);

Clazz.newMeth(C$, 'writeInt$I', function (i) {
if (this.bigEndian) {
this.writeByteAsInt$I(i >> 24);
this.writeByteAsInt$I(i >> 16);
this.writeByteAsInt$I(i >> 8);
this.writeByteAsInt$I(i);
} else {
this.writeByteAsInt$I(i);
this.writeByteAsInt$I(i >> 8);
this.writeByteAsInt$I(i >> 16);
this.writeByteAsInt$I(i >> 24);
}});

Clazz.newMeth(C$, 'writeFloat$F', function (x) {
this.writeInt$I(x == 0  ? 0 : Float.floatToIntBits$F(x));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
