(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[[0,'StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "InvalidPathException", null, 'IllegalArgumentException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.input=null;
this.index=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I', function (input, reason, index) {
C$.superclazz.c$$S.apply(this, [reason]);
C$.$init$.apply(this);
if ((input == null ) || (reason == null ) ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (index < -1) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.input=input;
this.index=index;
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (input, reason) {
C$.c$$S$S$I.apply(this, [input, reason, -1]);
}, 1);

Clazz.newMeth(C$, 'getInput$', function () {
return this.input;
});

Clazz.newMeth(C$, 'getReason$', function () {
return C$.superclazz.prototype.getMessage$.apply(this, []);
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.index;
});

Clazz.newMeth(C$, 'getMessage$', function () {
var sb=Clazz.new_($I$(1));
sb.append$S(this.getReason$());
if (this.index > -1) {
sb.append$S(" at index ");
sb.append$I(this.index);
}sb.append$S(": ");
sb.append$S(this.input);
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:41 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
