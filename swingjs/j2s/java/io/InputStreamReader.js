(function(){var P$=java.io,I$=[];
var C$=Clazz.newClass(P$, "InputStreamReader", null, 'java.io.Reader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$in=null;
this.isOpen=false;
this.charsetName=null;
this.isUTF8=false;
this.bytearr=null;
this.pos=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isOpen=true;
this.bytearr=null;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream', function ($in) {
C$.superclazz.c$$O.apply(this, [$in]);
C$.$init$.apply(this);
this.$in=$in;
this.charsetName="UTF-8";
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$S', function ($in, charsetName) {
C$.superclazz.c$$O.apply(this, [$in]);
C$.$init$.apply(this);
this.$in=$in;
this.charsetName=charsetName;
if (!(this.isUTF8="UTF-8".equals$O(charsetName)) && !"ISO-8859-1".equals$O(charsetName) ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["charsetName"]);
}, 1);

Clazz.newMeth(C$, 'getEncoding$', function () {
return this.charsetName;
});

Clazz.newMeth(C$, 'read$CA$I$I', function (cbuf, offset, length) {
if (this.bytearr == null  || this.bytearr.length < length ) this.bytearr=Clazz.array(Byte.TYPE, [length]);
var c;
var char2;
var char3;
var byteCount=0;
var charCount=offset;
var byteLen=this.$in.read$BA$I$I(this.bytearr, this.pos, length - this.pos);
var nAvail=this.$in.available$();
if (byteLen < 0) return -1;
var nMax=byteLen;
while (byteCount < nMax){
c=this.bytearr[byteCount] & 255;
if (this.isUTF8) switch (c >> 4) {
case 0xC:
case 0xD:
if (byteCount + 1 >= byteLen) {
if (nAvail >= 1) {
nMax=byteCount;
continue;
}} else if (((char2=this.bytearr[byteCount + 1]) & 192) == 128) {
cbuf[charCount++]=String.fromCharCode((((c & 31) << 6) | (char2 & 63)));
byteCount+=2;
continue;
}this.isUTF8=false;
break;
case 0xE:
if (byteCount + 2 >= byteLen) {
if (nAvail >= 2) {
nMax=byteCount;
continue;
}} else if (((char2=this.bytearr[byteCount + 1]) & 192) == 128 && ((char3=this.bytearr[byteCount + 2]) & 192) == 128 ) {
cbuf[charCount++]=String.fromCharCode((((c & 15) << 12) | ((char2 & 63) << 6) | (char3 & 63) ));
byteCount+=3;
continue;
}this.isUTF8=false;
break;
}
byteCount++;
cbuf[charCount++]=String.fromCharCode(c);
}
this.pos=byteLen - byteCount;
for (var i=0; i < this.pos; i++) {
this.bytearr[i]=(this.bytearr[byteCount++]|0);
}
return charCount - offset;
});

Clazz.newMeth(C$, 'ready$', function () {
return this.isOpen;
});

Clazz.newMeth(C$, 'close$', function () {
this.$in.close$();
this.isOpen=false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
