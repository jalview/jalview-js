(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.components"),p$1={},I$=[[0,'javax.swing.JButton','javax.swing.JPanel','javax.swing.JTextField','javax.swing.JEditorPane','javax.swing.JScrollPane','fr.orsay.lri.varna.models.VARNAConfig','java.awt.Dimension','java.awt.BorderLayout','fr.orsay.lri.varna.controlers.ControleurScriptParser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VARNAConsole", null, 'javax.swing.JFrame', ['java.awt.event.ActionListener', 'java.awt.event.FocusListener', 'java.awt.event.KeyListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._firstFocus=true;
},1);

C$.$fields$=[['Z',['_firstFocus'],'O',['_vp','fr.orsay.lri.varna.VARNAPanel','_quitButton','javax.swing.JButton','_contentPanel','javax.swing.JPanel','+_quitPanel','_input','javax.swing.JTextField','_output','javax.swing.JEditorPane','_scrolls','javax.swing.JScrollPane']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
Clazz.super_(C$, this);
this._vp=vp;
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'init', function () {
this._quitButton=Clazz.new_($I$(1,1).c$$S,["Exit"]);
this._quitPanel=Clazz.new_($I$(2,1));
this._contentPanel=Clazz.new_($I$(2,1));
this._input=Clazz.new_($I$(3,1).c$$S,["Your command here..."]);
this._output=Clazz.new_($I$(4,1));
this._scrolls=Clazz.new_($I$(5,1).c$$java_awt_Component,[this._output]);
this._input.addFocusListener$java_awt_event_FocusListener(this);
this._input.addKeyListener$java_awt_event_KeyListener(this);
this._output.setText$S($I$(6).getFullName$() + " console\n");
this._output.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(7,1).c$$I$I,[500, 300]));
this._output.setEditable$Z(false);
this._quitPanel.add$java_awt_Component(this._quitButton);
this._quitButton.addActionListener$java_awt_event_ActionListener(this);
this._contentPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
this._contentPanel.add$java_awt_Component$O(this._scrolls, "Center");
this._contentPanel.add$java_awt_Component$O(this._input, "South");
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
this.getContentPane$().add$java_awt_Component$O(this._contentPanel, "Center");
this.getContentPane$().add$java_awt_Component$O(this._quitPanel, "South");
this.pack$();
}, p$1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (arg0) {
this.setVisible$Z(false);
});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (arg0) {
if (this._firstFocus) {
this._input.setSelectionStart$I(0);
this._input.setSelectionEnd$I(this._input.getText$().length$());
this._firstFocus=false;
}});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (arg0) {
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (arg0) {
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (arg0) {
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (arg0) {
var c=arg0.getKeyChar$();
if (c == "\n") {
try {
$I$(9,"executeScript$fr_orsay_lri_varna_VARNAPanel$S",[this._vp, this._input.getText$()]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this._output.setText$S(this._output.getText$() + e.getMessage$() + '\n' );
e.printStackTrace$();
} else {
throw e;
}
}
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
