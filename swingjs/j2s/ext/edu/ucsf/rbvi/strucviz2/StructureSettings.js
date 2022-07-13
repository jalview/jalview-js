(function(){var P$=Clazz.newPackage("ext.edu.ucsf.rbvi.strucviz2"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "StructureSettings");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.chimeraPath=null;
},1);

C$.$fields$=[['S',['chimeraPath']]]

Clazz.newMeth(C$, 'c$$ext_edu_ucsf_rbvi_strucviz2_StructureManager',  function (manager) {
;C$.$init$.apply(this);
this.chimeraPath=manager.getCurrentChimeraPath$O(null);
manager.setStructureSettings$ext_edu_ucsf_rbvi_strucviz2_StructureSettings(this);
}, 1);

Clazz.newMeth(C$, 'getChimeraPath$',  function () {
return this.chimeraPath;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
