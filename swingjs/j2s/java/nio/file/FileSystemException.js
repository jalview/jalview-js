(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[[0,'StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileSystemException", null, 'java.io.IOException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.file=null;
this.other=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (file) {
C$.superclazz.c$$S.apply(this, [null]);
C$.$init$.apply(this);
this.file=file;
this.other=null;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S', function (file, other, reason) {
C$.superclazz.c$$S.apply(this, [reason]);
C$.$init$.apply(this);
this.file=file;
this.other=other;
}, 1);

Clazz.newMeth(C$, 'getFile$', function () {
return this.file;
});

Clazz.newMeth(C$, 'getOtherFile$', function () {
return this.other;
});

Clazz.newMeth(C$, 'getReason$', function () {
return C$.superclazz.prototype.getMessage$.apply(this, []);
});

Clazz.newMeth(C$, 'getMessage$', function () {
if (this.file == null  && this.other == null  ) return this.getReason$();
var sb=Clazz.new_($I$(1));
if (this.file != null ) sb.append$S(this.file);
if (this.other != null ) {
sb.append$S(" -> ");
sb.append$S(this.other);
}if (this.getReason$() != null ) {
sb.append$S(": ");
sb.append$S(this.getReason$());
}return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
