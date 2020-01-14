(function(){var P$=Clazz.newPackage("mc_view"),I$=[];
var C$=Clazz.newClass(P$, "Residue");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.atoms=null;
this.number=0;
this.count=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Vector$I$I', function (resAtoms, number, count) {
C$.$init$.apply(this);
this.atoms=resAtoms;
this.number=number;
this.count=count;
}, 1);

Clazz.newMeth(C$, 'findAtom$S', function (name) {
for (var atom, $atom = this.atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if (atom.name.equals$O(name)) {
return atom;
}}
return null;
});

Clazz.newMeth(C$, 'getAtoms$', function () {
return this.atoms;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
