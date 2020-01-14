(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[];
var C$=Clazz.newClass(P$, "ByteLookupTable", null, 'java.awt.image.LookupTable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.data=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$BAA', function (offset, data) {
C$.superclazz.c$$I$I.apply(this, [offset, data.length]);
C$.$init$.apply(this);
this.numComponents=data.length;
this.numEntries=data[0].length;
this.data=Clazz.array(Byte.TYPE, [this.numComponents, null]);
for (var i=0; i < this.numComponents; i++) {
this.data[i]=data[i];
}
}, 1);

Clazz.newMeth(C$, 'c$$I$BA', function (offset, data) {
C$.superclazz.c$$I$I.apply(this, [offset, data.length]);
C$.$init$.apply(this);
this.numComponents=1;
this.numEntries=data.length;
this.data=Clazz.array(Byte.TYPE, [1, null]);
this.data[0]=data;
}, 1);

Clazz.newMeth(C$, 'getTable$', function () {
return this.data;
});

Clazz.newMeth(C$, 'lookupPixel$IA$IA', function (src, dst) {
if (dst == null ) {
dst=Clazz.array(Integer.TYPE, [src.length]);
}if (this.numComponents == 1) {
for (var i=0; i < src.length; i++) {
var s=src[i] - this.offset;
if (s < 0) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["src[" + i + "]-offset is " + "less than zero" ]);
}dst[i]=this.data[0][s];
}
} else {
for (var i=0; i < src.length; i++) {
var s=src[i] - this.offset;
if (s < 0) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["src[" + i + "]-offset is " + "less than zero" ]);
}dst[i]=this.data[i][s];
}
}return dst;
});

Clazz.newMeth(C$, 'lookupPixel$BA$BA', function (src, dst) {
if (dst == null ) {
dst=Clazz.array(Byte.TYPE, [src.length]);
}if (this.numComponents == 1) {
for (var i=0; i < src.length; i++) {
var s=(src[i] & 255) - this.offset;
if (s < 0) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["src[" + i + "]-offset is " + "less than zero" ]);
}dst[i]=(this.data[0][s]|0);
}
} else {
for (var i=0; i < src.length; i++) {
var s=(src[i] & 255) - this.offset;
if (s < 0) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["src[" + i + "]-offset is " + "less than zero" ]);
}dst[i]=(this.data[i][s]|0);
}
}return dst;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:30 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
