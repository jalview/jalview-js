(function(){var P$=Clazz.newPackage("org.jmol.viewer"),I$=[];
var C$=Clazz.newClass(P$, "Scene");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.saveName=null;
this.scene=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (scene) {
C$.$init$.apply(this);
this.scene=scene;
}, 1);

Clazz.newMeth(C$, 'restore$org_jmol_viewer_Viewer$F', function (vwr, timeSeconds) {
var gen=this.scene.get$O("generator");
if (gen != null ) gen.generateScene$(this.scene);
var pv=this.scene.get$O("pymolView");
return (pv != null  && vwr.tm.moveToPyMOL$org_jmol_api_JmolScriptEvaluator$F$FA(vwr.eval, timeSeconds, pv) );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
