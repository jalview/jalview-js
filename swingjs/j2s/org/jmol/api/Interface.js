(function(){var P$=Clazz.newPackage("org.jmol.api"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Interface");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getInterface$S$org_jmol_viewer_Viewer$S', function (name, vwr, state) {
try {
var x=null;
x=Clazz.forName(name);
return (x == null  ? null : x.newInstance$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(1).error$S("Interface.java Error creating instance for " + name + ": \n" + e );
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getOption$S$org_jmol_viewer_Viewer$S', function (className, vwr, state) {
return C$.getInterface$S$org_jmol_viewer_Viewer$S("org.jmol." + className, vwr, state);
}, 1);

Clazz.newMeth(C$, 'getUtil$S$org_jmol_viewer_Viewer$S', function (name, vwr, state) {
return C$.getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.util." + name, vwr, state);
}, 1);

Clazz.newMeth(C$, 'getSymmetry$org_jmol_viewer_Viewer$S', function (vwr, state) {
return C$.getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.symmetry.Symmetry", vwr, state);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
