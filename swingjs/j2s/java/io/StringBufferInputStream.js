(function(){var P$=java.io,I$=[[0,'org.apache.harmony.luni.util.Msg']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StringBufferInputStream", null, 'java.io.InputStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.buffer=null;
this.count=0;
this.pos=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (str) {
Clazz.super_(C$, this,1);
if (str != null ) {
this.buffer=str;
this.count=str.length$();
} else {
throw Clazz.new_(Clazz.load('NullPointerException'));
}}, 1);

Clazz.newMeth(C$, 'available$', function () {
return this.count - this.pos;
});

Clazz.newMeth(C$, 'read$', function () {
return this.pos < this.count ? (this.buffer.charCodeAt$I(this.pos++)) & 255 : -1;
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, offset, length) {
if (this.pos >= this.count) {
return -1;
}if (b != null ) {
if (0 <= offset && offset <= b.length  && 0 <= length  && length <= b.length - offset ) {
if (length == 0) {
return 0;
}var copylen=this.count - this.pos < length ? this.count - this.pos : length;
for (var i=0; i < copylen; i++) {
b[offset + i]=((this.buffer.charAt$I(this.pos + i).$c()|0)|0);
}
this.pos+=copylen;
return copylen;
}throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException'));
}throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(1).getString$S("K0047")]);
});

Clazz.newMeth(C$, 'reset$', function () {
this.pos=0;
});

Clazz.newMeth(C$, 'skip$J', function (n) {
if (n <= 0) {
return 0;
}var numskipped;
if (this.count - this.pos < n) {
numskipped=this.count - this.pos;
this.pos=this.count;
} else {
numskipped=(n|0);
this.pos+=n;
}return numskipped;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
