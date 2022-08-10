(function(){var P$=Clazz.newPackage("org.jmol"),p$1={},I$=[[0,'javax.swing.JFrame','javax.swing.JTextField','org.jmol.MyStatusListener','java.util.Hashtable','org.openscience.jmol.app.Jmol','org.jmol.c.CBK']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Export");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var monitorFrame=Clazz.new_($I$(1,1));
var monitor=Clazz.new_($I$(2,1).c$$S,["Please load a molecule and click on atoms"]);
monitorFrame.getContentPane$().add$java_awt_Component(monitor);
monitorFrame.pack$();
var baseframe=Clazz.new_($I$(1,1));
var myStatusListener=Clazz.new_($I$(3,1));
myStatusListener.monitor=monitor;
var viewerOptions=Clazz.new_($I$(4,1));
viewerOptions.put$O$O("statusListener", myStatusListener);
$I$(5).getJmol$javax_swing_JFrame$I$I$java_util_Map(baseframe, 300, 300, viewerOptions);
monitorFrame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
