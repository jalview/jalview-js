(function(){var P$=Clazz.newPackage("org.jmol"),p$1={},I$=[[0,'javax.swing.JFrame','javax.swing.JTextField','org.jmol.MyStatusListener','java.util.Hashtable','org.openscience.jmol.app.Jmol','org.jmol.c.CBK']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Export");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var monitorFrame=Clazz.new_($I$(1));
var monitor=Clazz.new_($I$(2).c$$S,["Please load a molecule and click on atoms"]);
monitorFrame.getContentPane$().add$java_awt_Component(monitor);
monitorFrame.pack$();
var baseframe=Clazz.new_($I$(1));
var myStatusListener=Clazz.new_($I$(3));
myStatusListener.monitor=monitor;
var viewerOptions=Clazz.new_($I$(4));
viewerOptions.put$TK$TV("statusListener", myStatusListener);
$I$(5).getJmol$javax_swing_JFrame$I$I$java_util_Map(baseframe, 300, 300, viewerOptions);
monitorFrame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:59 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
