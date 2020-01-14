(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.webexport"),I$=[[0,'javax.swing.JTextArea','java.awt.Insets','javax.swing.JScrollPane','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.BorderFactory','org.jmol.i18n.GT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "LogPanel");
C$.logArea=null;
C$.miniLogArea=null;
C$.resetFlag=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getPanel$', function () {
C$.logArea=Clazz.new_($I$(1).c$$I$I,[30, 20]);
C$.logArea.setMargin$java_awt_Insets(Clazz.new_($I$(2).c$$I$I$I$I,[5, 5, 5, 5]));
C$.logArea.setEditable$Z(false);
var logScrollPane=Clazz.new_($I$(3).c$$java_awt_Component,[C$.logArea]);
var logPanel=Clazz.new_($I$(4));
logPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5)));
logPanel.setBorder$javax_swing_border_Border($I$(6).createTitledBorder$S($I$(7).$$S("Log and Error Messages:")));
logPanel.add$java_awt_Component(logScrollPane);
return logPanel;
}, 1);

Clazz.newMeth(C$, 'getMiniPanel$', function () {
var miniPanel=Clazz.new_($I$(4));
miniPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5)));
miniPanel.setBorder$javax_swing_border_Border($I$(6).createTitledBorder$S($I$(7).$$S("Messages (see Log tab for full history):")));
C$.miniLogArea=Clazz.new_($I$(1).c$$I$I,[2, 20]);
C$.miniLogArea.setEditable$Z(false);
var miniScrollPane=Clazz.new_($I$(3).c$$java_awt_Component,[C$.miniLogArea]);
miniPanel.add$java_awt_Component(miniScrollPane);
return miniPanel;
}, 1);

Clazz.newMeth(C$, 'log$S', function (message) {
if (C$.resetFlag) {
C$.logArea.setText$S("");
C$.miniLogArea.setText$S("");
}C$.resetFlag=(message.length$() == 0);
C$.logArea.append$S(message + "\n");
C$.miniLogArea.append$S(message + "\n");
C$.logArea.setCaretPosition$I(C$.logArea.getDocument$().getLength$());
C$.miniLogArea.setCaretPosition$I(C$.miniLogArea.getDocument$().getLength$());
}, 1);

Clazz.newMeth(C$, 'getText$', function () {
return C$.logArea.getText$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
