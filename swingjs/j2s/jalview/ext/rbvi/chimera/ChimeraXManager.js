(function(){var P$=Clazz.newPackage("jalview.ext.rbvi.chimera"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ChimeraXManager", null, 'ext.edu.ucsf.rbvi.strucviz2.ChimeraManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$ext_edu_ucsf_rbvi_strucviz2_StructureManager',  function (structureManager) {
;C$.superclazz.c$$ext_edu_ucsf_rbvi_strucviz2_StructureManager.apply(this,[structureManager]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isChimeraX$',  function () {
return true;
});

Clazz.newMeth(C$, 'getHttpRequestMethod$',  function () {
return "GET";
});

Clazz.newMeth(C$, 'addLaunchArguments$java_util_List',  function (args) {
args.add$O("--cmd");
args.add$O("remote rest start");
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
