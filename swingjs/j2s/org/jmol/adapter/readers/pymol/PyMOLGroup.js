(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.pymol"),I$=[[0,'java.util.Hashtable','javajs.util.BS']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PyMOLGroup");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.list=Clazz.new_($I$(1,1));
this.visible=true;
this.occluded=false;
this.bsAtoms=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['visible','occluded'],'I',['firstAtom','type'],'S',['name','objectNameID'],'O',['list','java.util.Map','object','javajs.util.Lst','bsAtoms','javajs.util.BS','parent','org.jmol.adapter.readers.pymol.PyMOLGroup']]]

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'addList$org_jmol_adapter_readers_pymol_PyMOLGroup', function (child) {
var group=this.list.get$O(child.name);
if (group != null ) return;
this.list.put$O$O(child.name, child);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
