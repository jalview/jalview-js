(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JScrollPane','javax.swing.JTextArea','javax.swing.JButton','javax.swing.JPanel','java.awt.BorderLayout','java.awt.Font','jalview.util.MessageManager']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GPairwiseAlignPanel", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.scrollPane=Clazz.new_($I$(1,1));
this.textarea=Clazz.new_($I$(2,1));
this.viewInEditorButton=Clazz.new_($I$(3,1));
this.jPanel1=Clazz.new_($I$(4,1));
this.borderLayout1=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['O',['scrollPane','javax.swing.JScrollPane','textarea','javax.swing.JTextArea','viewInEditorButton','javax.swing.JButton','jPanel1','javax.swing.JPanel','borderLayout1','java.awt.BorderLayout']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'jbInit',  function () {
this.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.textarea.setFont$java_awt_Font(Clazz.new_($I$(6,1).c$$S$I$I,["Monospaced", 0, 12]));
this.textarea.setText$S("");
this.textarea.setWrapStyleWord$Z(false);
this.viewInEditorButton.setFont$java_awt_Font(Clazz.new_($I$(6,1).c$$S$I$I,["Verdana", 0, 12]));
this.viewInEditorButton.setText$S($I$(7).getString$S("label.view_alignment_editor"));
this.viewInEditorButton.addActionListener$java_awt_event_ActionListener(((P$.GPairwiseAlignPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPairwiseAlignPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPairwiseAlignPanel'].viewInEditorButton_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GPairwiseAlignPanel'], [e]);
});
})()
), Clazz.new_(P$.GPairwiseAlignPanel$1.$init$,[this, null])));
this.add$java_awt_Component$O(this.scrollPane, "Center");
this.scrollPane.getViewport$().add$java_awt_Component$O(this.textarea, null);
this.add$java_awt_Component$O(this.jPanel1, "South");
this.jPanel1.add$java_awt_Component$O(this.viewInEditorButton, null);
}, p$1);

Clazz.newMeth(C$, 'viewInEditorButton_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
