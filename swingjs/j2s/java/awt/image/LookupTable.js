(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[];
var C$=Clazz.newClass(P$, "LookupTable");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.numComponents=0;
this.offset=0;
this.numEntries=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (offset, numComponents) {
C$.$init$.apply(this);
if (offset < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Offset must be greater than 0"]);
}if (numComponents < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of components must  be at least 1"]);
}this.numComponents=numComponents;
this.offset=offset;
}, 1);

Clazz.newMeth(C$, 'getNumComponents$', function () {
return this.numComponents;
});

Clazz.newMeth(C$, 'getOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:31 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
