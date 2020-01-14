(function(){var P$=Clazz.newPackage("ext.edu.ucsf.rbvi.strucviz2"),I$=[];
var C$=Clazz.newClass(P$, "StructureSettings");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.chimeraPath=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.chimeraPath=null;
}, 1);

Clazz.newMeth(C$, 'c$$ext_edu_ucsf_rbvi_strucviz2_StructureManager', function (manager) {
C$.$init$.apply(this);
this.chimeraPath=manager.getCurrentChimeraPath$O(null);
manager.setStructureSettings$ext_edu_ucsf_rbvi_strucviz2_StructureSettings(this);
}, 1);

Clazz.newMeth(C$, 'getChimeraPath$', function () {
return this.chimeraPath;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
