(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[];
var C$=Clazz.newClass(P$, "PDFXref");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.id=0;
this.offset=0;
this.generation=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (id, offset) {
C$.c$$I$I$I.apply(this, [id, offset, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (id, offset, generation) {
C$.$init$.apply(this);
this.id=id;
this.offset=offset;
this.generation=generation;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var of=Integer.toString$I(this.offset);
var ge=Integer.toString$I(this.generation);
var rs="0000000000".substring$I$I(0, 10 - of.length$()) + of + " " + "00000".substring$I$I(0, 5 - ge.length$()) + ge ;
if (this.generation == 65535) return rs + " f ";
return rs + " n ";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
