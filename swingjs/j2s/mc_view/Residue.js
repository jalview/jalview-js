(function(){var P$=Clazz.newPackage("mc_view"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Residue");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['number','count'],'O',['atoms','java.util.Vector']]]

Clazz.newMeth(C$, 'c$$java_util_Vector$I$I', function (resAtoms, number, count) {
;C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
