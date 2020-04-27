(function(){var P$=Clazz.newPackage("org.jmol.viewer"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Scene");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['saveName'],'O',['scene','java.util.Map']]]

Clazz.newMeth(C$, 'c$$java_util_Map', function (scene) {
;C$.$init$.apply(this);
this.scene=scene;
}, 1);

Clazz.newMeth(C$, 'restore$org_jmol_viewer_Viewer$F', function (vwr, timeSeconds) {
var gen=this.scene.get$O("generator");
if (gen != null ) gen.generateScene$java_util_Map(this.scene);
var pv=this.scene.get$O("pymolView");
return (pv != null  && vwr.tm.moveToPyMOL$org_jmol_api_JmolScriptEvaluator$F$FA(vwr.eval, timeSeconds, pv) );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:26 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
