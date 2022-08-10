(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.webexport"),I$=[[0,'javax.swing.JTextArea','java.awt.Insets','javax.swing.JScrollPane','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.BorderFactory','org.jmol.i18n.GT']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LogPanel");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['resetFlag'],'O',['logArea','javax.swing.JTextArea','+miniLogArea']]]

Clazz.newMeth(C$, 'getPanel$', function () {
C$.logArea=Clazz.new_($I$(1,1).c$$I$I,[30, 20]);
C$.logArea.setMargin$java_awt_Insets(Clazz.new_($I$(2,1).c$$I$I$I$I,[5, 5, 5, 5]));
C$.logArea.setEditable$Z(false);
var logScrollPane=Clazz.new_($I$(3,1).c$$java_awt_Component,[C$.logArea]);
var logPanel=Clazz.new_($I$(4,1));
logPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1)));
logPanel.setBorder$javax_swing_border_Border($I$(6,"createTitledBorder$S",[$I$(7).$$S("Log and Error Messages:")]));
logPanel.add$java_awt_Component(logScrollPane);
return logPanel;
}, 1);

Clazz.newMeth(C$, 'getMiniPanel$', function () {
var miniPanel=Clazz.new_($I$(4,1));
miniPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1)));
miniPanel.setBorder$javax_swing_border_Border($I$(6,"createTitledBorder$S",[$I$(7,"$$S",["Messages (see Log tab for full history):"])]));
C$.miniLogArea=Clazz.new_($I$(1,1).c$$I$I,[2, 20]);
C$.miniLogArea.setEditable$Z(false);
var miniScrollPane=Clazz.new_($I$(3,1).c$$java_awt_Component,[C$.miniLogArea]);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
