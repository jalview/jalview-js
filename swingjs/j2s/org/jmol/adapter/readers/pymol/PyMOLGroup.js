(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.pymol"),I$=[[0,'java.util.Hashtable','javajs.util.BS']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PyMOLGroup");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.objectNameID=null;
this.list=null;
this.object=null;
this.visible=false;
this.occluded=false;
this.bsAtoms=null;
this.firstAtom=0;
this.type=0;
this.parent=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.list=Clazz.new_($I$(1));
this.visible=true;
this.occluded=false;
this.bsAtoms=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'addList$org_jmol_adapter_readers_pymol_PyMOLGroup', function (child) {
var group=this.list.get$O(child.name);
if (group != null ) return;
this.list.put$TK$TV(child.name, child);
child.parent=this;
});

Clazz.newMeth(C$, 'set$', function () {
if (this.parent != null ) return;
});

Clazz.newMeth(C$, 'addGroupAtoms$javajs_util_BS', function (bs) {
this.bsAtoms.or$javajs_util_BS(bs);
if (this.parent != null ) this.parent.addGroupAtoms$javajs_util_BS(this.bsAtoms);
});

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
