(function(){var P$=Clazz.newPackage("org.jmol.console"),p$1={},I$=[[0,['org.jmol.console.AppletConsole','.ControlEnterTextArea'],['org.jmol.console.AppletConsole','.GenericTextPane'],'javax.swing.JFrame','javax.swing.KeyStroke','org.jmol.console.JmolLabel','org.jmol.console.GenericConsole','javax.swing.JScrollPane','java.awt.Dimension','javax.swing.BoxLayout','javax.swing.JSplitPane','java.awt.Container','javax.swing.Box','javax.swing.JMenuBar','org.jmol.console.KeyJMenu','org.jmol.script.T','javajs.util.PT','javax.swing.JMenuItem','javax.swing.JMenu','org.jmol.console.KeyJMenuItem']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AppletConsole", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.console.JmolConsole');
C$.$classes$=[['GenericTextPane',2],['ControlEnterTextArea',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.input=Clazz.new_($I$(1,1),[this, null]);
this.output=Clazz.new_($I$(2,1),[this, null]);
}, 1);

Clazz.newMeth(C$, 'start$org_jmol_viewer_Viewer', function (vwr) {
this.setViewer$org_jmol_viewer_Viewer(vwr);
var display=vwr.display;
this.vwrFrame=(Clazz.instanceOf(display, "javax.swing.JFrame") ? display : null);
var jf=Clazz.new_($I$(3,1));
jf.setSize$I$I(600, 400);
this.externalContainer=jf;
this.setLabels$();
var ta=this.input;
ta.setLineWrap$Z(true);
ta.setWrapStyleWord$Z(true);
ta.setDragEnabled$Z(true);
var map=ta.getKeymap$();
var shiftA=$I$(4).getKeyStroke$I$I(65, 1);
map.removeKeyStrokeBinding$javax_swing_KeyStroke(shiftA);
(this.output).setEditable$Z(false);
(this.output).setDragEnabled$Z(true);
this.addWindowListener$();
this.displayConsole$();
});

Clazz.newMeth(C$, 'getLabel1$', function () {
return Clazz.new_([$I$(6).getLabel$S("label1"), 0],$I$(5,1).c$$S$I);
});

Clazz.newMeth(C$, 'layoutWindow$S', function (enabledButtons) {
var jscrollInput=Clazz.new_($I$(7,1).c$$java_awt_Component,[this.input]);
jscrollInput.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[2, 100]));
var jscrollOutput=Clazz.new_($I$(7,1).c$$java_awt_Component,[this.output]);
jscrollOutput.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[2, 100]));
var c=this.getPane$();
c.setLayout$java_awt_LayoutManager(Clazz.new_($I$(9,1).c$$java_awt_Container$I,[c, 1]));
var jsp=Clazz.new_($I$(10,1).c$$I$java_awt_Component$java_awt_Component,[0, jscrollOutput, jscrollInput]);
jsp.setResizeWeight$D(0.9);
jsp.setDividerLocation$I(200);
jsp.setAlignmentX$F(0.5);
c.add$java_awt_Component(jsp);
var c2=Clazz.new_($I$(11,1));
c2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(9,1).c$$java_awt_Container$I,[c2, 0]));
c2.add$java_awt_Component($I$(12).createGlue$());
p$1.add$java_awt_Container$org_jmol_api_JmolAbstractButton.apply(this, [c2, this.editButton]);
p$1.add$java_awt_Container$org_jmol_api_JmolAbstractButton.apply(this, [c2, this.runButton]);
p$1.add$java_awt_Container$org_jmol_api_JmolAbstractButton.apply(this, [c2, this.loadButton]);
p$1.add$java_awt_Container$org_jmol_api_JmolAbstractButton.apply(this, [c2, this.clearInButton]);
p$1.add$java_awt_Container$org_jmol_api_JmolAbstractButton.apply(this, [c2, this.clearOutButton]);
p$1.add$java_awt_Container$org_jmol_api_JmolAbstractButton.apply(this, [c2, this.historyButton]);
p$1.add$java_awt_Container$org_jmol_api_JmolAbstractButton.apply(this, [c2, this.stateButton]);
c2.add$java_awt_Component($I$(12).createGlue$());
c.add$java_awt_Component(c2);
if (this.label1 != null ) {
(this.label1).setAlignmentX$F(0.5);
c.add$java_awt_Component(this.label1);
}if (Clazz.instanceOf(this.externalContainer, "javax.swing.JFrame")) (this.externalContainer).setJMenuBar$javax_swing_JMenuBar(p$1.createMenubar.apply(this, []));
});

Clazz.newMeth(C$, 'add$java_awt_Container$org_jmol_api_JmolAbstractButton', function (c2, b) {
c2.add$java_awt_Component(b);
}, p$1);

Clazz.newMeth(C$, 'createMenubar', function () {
var mb=Clazz.new_($I$(13,1));
mb.add$java_awt_Component($I$(12).createHorizontalGlue$());
p$1.addHelpMenuBar$javax_swing_JMenuBar.apply(this, [mb]);
return mb;
}, p$1);

Clazz.newMeth(C$, 'addHelpMenuBar$javax_swing_JMenuBar', function (menuBar) {
var m0=Clazz.new_(["help", $I$(6).getLabel$S("help"), this.menuMap],$I$(14,1).c$$S$S$java_util_Map);
var item=p$1.createMenuItem$S.apply(this, ["search"]);
item.addActionListener$java_awt_event_ActionListener(this);
item.setName$S("help ?search=?");
m0.add$javax_swing_JMenuItem(item);
p$1.addHelpItems$javax_swing_JMenu$S$S.apply(this, [m0, "commands", "command"]);
p$1.addHelpItems$javax_swing_JMenu$S$S.apply(this, [m0, "functions", "mathfunc"]);
p$1.addHelpItems$javax_swing_JMenu$S$S.apply(this, [m0, "parameters", "setparam"]);
p$1.addHelpItems$javax_swing_JMenu$S$S.apply(this, [m0, "more", "misc"]);
menuBar.add$javax_swing_JMenu(m0);
}, p$1);

Clazz.newMeth(C$, 'addHelpItems$javax_swing_JMenu$S$S', function (m0, key, attr) {
var m=Clazz.new_([key, $I$(6).getLabel$S(key), this.menuMap],$I$(14,1).c$$S$S$java_util_Map);
var commands=$I$(15).getTokensLike$S(attr);
m0.add$javax_swing_JMenuItem(m);
var m2=null;
var firstCommand=null;
var n=20;
for (var i=0; i < commands.length; i++) {
var cmd=commands[i];
if (!$I$(16,"isLetter$C",[cmd.charAt$I(0)])) continue;
var item=Clazz.new_($I$(17,1).c$$S,[cmd]);
item.addActionListener$java_awt_event_ActionListener(this);
item.setName$S("help " + cmd);
if (m2 == null ) {
m2=Clazz.new_($I$(18,1));
firstCommand=cmd;
m2.add$javax_swing_JMenuItem(item);
m2.setText$S(firstCommand);
continue;
}if ((i % n) + 1 == n) {
m2.add$javax_swing_JMenuItem(item);
m2.setText$S(firstCommand + " - " + cmd );
m.add$javax_swing_JMenuItem(m2);
m2=null;
continue;
}m2.add$javax_swing_JMenuItem(item);
if (i + 1 == commands.length) {
m2.setText$S(firstCommand + " - " + cmd );
m.add$javax_swing_JMenuItem(m2);
}}
}, p$1);

Clazz.newMeth(C$, 'createMenuItem$S', function (cmd) {
return Clazz.new_([cmd, $I$(6).getLabel$S(cmd), this.menuMap],$I$(19,1).c$$S$S$java_util_Map);
}, p$1);

Clazz.newMeth(C$, 'setVisible$Z', function (visible) {
C$.superclazz.prototype.setVisible$Z.apply(this, [visible]);
(this.input).requestFocus$();
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.doAction$O(e.getSource$());
});

Clazz.newMeth(C$, 'execute$S', function (strCommand) {
C$.superclazz.prototype.execute$S.apply(this, [strCommand]);
if (strCommand == null ) (this.input).requestFocus$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AppletConsole, "GenericTextPane", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JTextPane', 'org.jmol.api.js.GenericConsoleTextArea');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['outputDocument','javax.swing.text.Document']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.outputDocument=this.getDocument$();
}, 1);

Clazz.newMeth(C$, 'append$S', function (message) {
try {
this.outputDocument.insertString$I$S$javax_swing_text_AttributeSet(this.outputDocument.getLength$(), message, null);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
this.setCaretPosition$I(this.outputDocument.getLength$());
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AppletConsole, "ControlEnterTextArea", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JTextArea', 'org.jmol.api.js.GenericConsoleTextArea');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'processComponentKeyEvent$java_awt_event_KeyEvent', function (ke) {
var kcode=ke.getKeyCode$();
var kid=ke.getID$();
var isControlDown=ke.isControlDown$();
var mode=this.b$['org.jmol.console.GenericConsole'].processKey$I$I$Z.apply(this.b$['org.jmol.console.GenericConsole'], [kcode, kid, isControlDown]);
if ((mode & 1) == 1) ke.consume$();
if ((mode & 2) == 2) {
if (kcode == 10) ke.setModifiers$I(0);
C$.superclazz.prototype.processComponentKeyEvent$java_awt_event_KeyEvent.apply(this, [ke]);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
