(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JTextArea','javax.swing.JScrollPane','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JLabel','javax.swing.JButton','java.awt.GridBagLayout','java.awt.GridLayout','java.awt.Font','java.awt.Color','java.awt.Dimension','jalview.util.MessageManager','java.awt.GridBagConstraints','java.awt.Insets']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GWebserviceInfo", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.infoText=Clazz.new_($I$(1,1));
this.jScrollPane1=Clazz.new_($I$(2,1));
this.jPanel1=Clazz.new_($I$(3,1));
this.borderLayout1=Clazz.new_($I$(4,1));
this.borderLayout2=Clazz.new_($I$(4,1));
this.titlePanel=Clazz.new_($I$(3,1));
this.borderLayout3=Clazz.new_($I$(4,1));
this.buttonPanel=Clazz.new_($I$(3,1));
this.titleText=Clazz.new_($I$(5,1));
this.cancel=Clazz.new_($I$(6,1));
this.showResultsNewFrame=Clazz.new_($I$(6,1));
this.mergeResults=Clazz.new_($I$(6,1));
this.gridBagLayout1=Clazz.new_($I$(7,1));
this.statusPanel=Clazz.new_([Clazz.new_($I$(8,1))],$I$(3,1).c$$java_awt_LayoutManager);
this.statusBar=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['O',['infoText','javax.swing.JTextArea','jScrollPane1','javax.swing.JScrollPane','jPanel1','javax.swing.JPanel','borderLayout1','java.awt.BorderLayout','+borderLayout2','titlePanel','javax.swing.JPanel','borderLayout3','java.awt.BorderLayout','buttonPanel','javax.swing.JPanel','titleText','javax.swing.JLabel','cancel','javax.swing.JButton','+showResultsNewFrame','+mergeResults','gridBagLayout1','java.awt.GridBagLayout','statusPanel','javax.swing.JPanel','statusBar','javax.swing.JLabel']]]

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
this.infoText.setFont$java_awt_Font(Clazz.new_($I$(9,1).c$$S$I$I,["Verdana", 0, 10]));
this.infoText.setBorder$javax_swing_border_Border(null);
this.infoText.setEditable$Z(false);
this.infoText.setText$S("");
this.infoText.setLineWrap$Z(true);
this.infoText.setWrapStyleWord$Z(true);
this.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.jPanel1.setLayout$java_awt_LayoutManager(this.borderLayout2);
this.titlePanel.setBackground$java_awt_Color($I$(10).white);
this.titlePanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(11,1).c$$I$I,[0, 60]));
this.titlePanel.setLayout$java_awt_LayoutManager(this.borderLayout3);
this.titleText.setFont$java_awt_Font(Clazz.new_($I$(9,1).c$$S$I$I,["Arial", 1, 12]));
this.titleText.setBorder$javax_swing_border_Border(null);
this.titleText.setText$S("");
this.jScrollPane1.setBorder$javax_swing_border_Border(null);
this.jScrollPane1.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(11,1).c$$I$I,[400, 70]));
this.cancel.setFont$java_awt_Font(Clazz.new_($I$(9,1).c$$S$I$I,["Verdana", 0, 11]));
this.cancel.setText$S($I$(12).getString$S("action.cancel"));
this.cancel.addActionListener$java_awt_event_ActionListener(((P$.GWebserviceInfo$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWebserviceInfo$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GWebserviceInfo'].cancel_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWebserviceInfo'], [e]);
});
})()
), Clazz.new_(P$.GWebserviceInfo$1.$init$,[this, null])));
this.buttonPanel.setLayout$java_awt_LayoutManager(this.gridBagLayout1);
this.buttonPanel.setOpaque$Z(false);
this.showResultsNewFrame.setText$S($I$(12).getString$S("label.new_window"));
this.mergeResults.setText$S($I$(12).getString$S("action.merge_results"));
this.setBackground$java_awt_Color($I$(10).white);
this.add$java_awt_Component$O(this.jPanel1, "North");
this.jPanel1.add$java_awt_Component$O(this.jScrollPane1, "Center");
this.jScrollPane1.getViewport$().add$java_awt_Component$O(this.infoText, null);
this.jPanel1.add$java_awt_Component$O(this.titlePanel, "North");
this.titlePanel.add$java_awt_Component$O(this.buttonPanel, "East");
this.buttonPanel.add$java_awt_Component$O(this.cancel, Clazz.new_([0, 0, 1, 1, 0.0, 0.0, 10, 0, Clazz.new_($I$(14,1).c$$I$I$I$I,[19, 6, 16, 4]), 0, 0],$I$(13,1).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I));
this.add$java_awt_Component$O(this.statusPanel, "South");
this.statusPanel.add$java_awt_Component$O(this.statusBar, null);
}, p$1);

Clazz.newMeth(C$, 'cancel_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
