(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),I$=[[0,'java.awt.BorderLayout','org.openscience.jmol.app.janocchio.MyFileFilter']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NamfisSaver", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_JFileChooser', function (fc) {
Clazz.super_(C$, this);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1)));
fc.addChoosableFileFilter$javax_swing_filechooser_FileFilter(Clazz.new_($I$(2,1).c$$S$S,["in1", "NAMFIS Input files"]));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
