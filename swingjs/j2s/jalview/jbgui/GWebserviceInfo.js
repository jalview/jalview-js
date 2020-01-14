(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JTextArea','javax.swing.JScrollPane','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JButton','java.awt.GridBagLayout','java.awt.GridLayout','javax.swing.JLabel','java.awt.Font','java.awt.Color','java.awt.Dimension','jalview.util.MessageManager','java.awt.GridBagConstraints','java.awt.Insets']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GWebserviceInfo", null, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.infoText=null;
this.jScrollPane1=null;
this.jPanel1=null;
this.borderLayout1=null;
this.borderLayout2=null;
this.titlePanel=null;
this.borderLayout3=null;
this.buttonPanel=null;
this.cancel=null;
this.showResultsNewFrame=null;
this.mergeResults=null;
this.gridBagLayout1=null;
this.statusPanel=null;
this.statusBar=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.infoText=Clazz.new_($I$(1));
this.jScrollPane1=Clazz.new_($I$(2));
this.jPanel1=Clazz.new_($I$(3));
this.borderLayout1=Clazz.new_($I$(4));
this.borderLayout2=Clazz.new_($I$(4));
this.titlePanel=Clazz.new_($I$(3));
this.borderLayout3=Clazz.new_($I$(4));
this.buttonPanel=Clazz.new_($I$(3));
this.cancel=Clazz.new_($I$(5));
this.showResultsNewFrame=Clazz.new_($I$(5));
this.mergeResults=Clazz.new_($I$(5));
this.gridBagLayout1=Clazz.new_($I$(6));
this.statusPanel=Clazz.new_($I$(3).c$$java_awt_LayoutManager,[Clazz.new_($I$(7))]);
this.statusBar=Clazz.new_($I$(8));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
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

Clazz.newMeth(C$, 'jbInit', function () {
this.infoText.setFont$java_awt_Font(Clazz.new_($I$(9).c$$S$I$I,["Verdana", 0, 10]));
this.infoText.setBorder$javax_swing_border_Border(null);
this.infoText.setEditable$Z(false);
this.infoText.setText$S("");
this.infoText.setLineWrap$Z(true);
this.infoText.setWrapStyleWord$Z(true);
this.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.jPanel1.setLayout$java_awt_LayoutManager(this.borderLayout2);
this.titlePanel.setBackground$java_awt_Color($I$(10).white);
this.titlePanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(11).c$$I$I,[0, 60]));
this.titlePanel.setLayout$java_awt_LayoutManager(this.borderLayout3);
this.jScrollPane1.setBorder$javax_swing_border_Border(null);
this.jScrollPane1.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(11).c$$I$I,[400, 70]));
this.cancel.setFont$java_awt_Font(Clazz.new_($I$(9).c$$S$I$I,["Verdana", 0, 11]));
this.cancel.setText$S($I$(12).getString$S("action.cancel"));
this.cancel.addActionListener$java_awt_event_ActionListener(((P$.GWebserviceInfo$1||
(function(){var C$=Clazz.newClass(P$, "GWebserviceInfo$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GWebserviceInfo'].cancel_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWebserviceInfo'], [e]);
});
})()
), Clazz.new_(P$.GWebserviceInfo$1.$init$, [this, null])));
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
this.buttonPanel.add$java_awt_Component$O(this.cancel, Clazz.new_($I$(13).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I,[0, 0, 1, 1, 0.0, 0.0, 10, 0, Clazz.new_($I$(14).c$$I$I$I$I,[19, 6, 16, 4]), 0, 0]));
this.add$java_awt_Component$O(this.statusPanel, "South");
this.statusPanel.add$java_awt_Component$O(this.statusBar, null);
}, p$1);

Clazz.newMeth(C$, 'cancel_actionPerformed$java_awt_event_ActionEvent', function (e) {
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
