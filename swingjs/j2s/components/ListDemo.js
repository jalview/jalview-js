(function(){var P$=Clazz.newPackage("components"),p$1={},I$=[[0,'java.awt.Toolkit','java.awt.BorderLayout','javax.swing.DefaultListModel','javax.swing.JList','javax.swing.JScrollPane','javax.swing.JButton',['test.components.ListDemo','.HireListener'],['test.components.ListDemo','.FireListener'],'javax.swing.JTextField','javax.swing.JPanel','javax.swing.BoxLayout','javax.swing.Box','javax.swing.JSeparator','javax.swing.BorderFactory','javax.swing.JFrame','test.components.ListDemo','javax.swing.SwingUtilities']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ListDemo", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', 'javax.swing.event.ListSelectionListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.list=null;
this.listModel=null;
this.fireButton=null;
this.employeeName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(2))]);
C$.$init$.apply(this);
this.listModel=Clazz.new_($I$(3));
this.listModel.addElement$TE("Jane Doe");
this.listModel.addElement$TE("John Smith");
this.listModel.addElement$TE("Kathy Green");
this.list=Clazz.new_($I$(4).c$$javax_swing_ListModel,[this.listModel]);
this.list.setSelectionMode$I(0);
this.list.setSelectedIndex$I(0);
this.list.addListSelectionListener$javax_swing_event_ListSelectionListener(this);
this.list.setVisibleRowCount$I(5);
var listScrollPane=Clazz.new_($I$(5).c$$java_awt_Component,[this.list]);
var hireButton=Clazz.new_($I$(6).c$$S,["Hire"]);
var hireListener=Clazz.new_($I$(7).c$$javax_swing_JButton, [this, null, hireButton]);
hireButton.setActionCommand$S("Hire");
hireButton.addActionListener$java_awt_event_ActionListener(hireListener);
hireButton.setEnabled$Z(false);
this.fireButton=Clazz.new_($I$(6).c$$S,["Fire"]);
this.fireButton.setActionCommand$S("Fire");
this.fireButton.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(8), [this, null]));
this.employeeName=Clazz.new_($I$(9).c$$I,[10]);
this.employeeName.addActionListener$java_awt_event_ActionListener(hireListener);
this.employeeName.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(hireListener);
var name=this.listModel.getElementAt$I(this.list.getSelectedIndex$()).toString();
var buttonPane=Clazz.new_($I$(10));
buttonPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11).c$$java_awt_Container$I,[buttonPane, 2]));
buttonPane.add$java_awt_Component(this.fireButton);
buttonPane.add$java_awt_Component($I$(12).createHorizontalStrut$I(5));
buttonPane.add$java_awt_Component(Clazz.new_($I$(13).c$$I,[1]));
buttonPane.add$java_awt_Component($I$(12).createHorizontalStrut$I(5));
buttonPane.add$java_awt_Component(this.employeeName);
buttonPane.add$java_awt_Component(hireButton);
buttonPane.setBorder$javax_swing_border_Border($I$(14).createEmptyBorder$I$I$I$I(5, 5, 5, 5));
this.add$java_awt_Component$O(listScrollPane, "Center");
this.add$java_awt_Component$O(buttonPane, "Last");
}, 1);

Clazz.newMeth(C$, ['valueChanged$javax_swing_event_ListSelectionEvent','valueChanged$'], function (e) {
if (e.getValueIsAdjusting$() == false ) {
if (this.list.getSelectedIndex$() == -1) {
this.fireButton.setEnabled$Z(false);
} else {
this.fireButton.setEnabled$Z(true);
}}});

Clazz.newMeth(C$, 'createAndShowGUI$', function () {
var frame=Clazz.new_($I$(15).c$$S,["ListDemo"]);
frame.setDefaultCloseOperation$I(3);
var newContentPane=Clazz.new_($I$(16));
newContentPane.setOpaque$Z(true);
frame.setContentPane$java_awt_Container(newContentPane);
frame.pack$();
frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
$I$(17).invokeLater$Runnable(((P$.t.components.ListDemo$8848||
(function(){var C$=Clazz.newClass(P$, "t.components.ListDemo$8848", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
test.components.ListDemo.createAndShowGUI$();
});
})()
), Clazz.new_(test.components.ListDemo$8848.$init$, [this, null])));
}, 1);
;
(function(){var C$=Clazz.newClass(P$.ListDemo, "FireListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var index=this.b$['test.components.ListDemo'].list.getSelectedIndex$();
this.b$['test.components.ListDemo'].listModel.remove$I(index);
var size=this.b$['test.components.ListDemo'].listModel.getSize$();
if (size == 0) {
this.b$['test.components.ListDemo'].fireButton.setEnabled$Z(false);
} else {
if (index == this.b$['test.components.ListDemo'].listModel.getSize$()) {
index--;
}this.b$['test.components.ListDemo'].list.setSelectedIndex$I(index);
this.b$['test.components.ListDemo'].list.ensureIndexIsVisible$I(index);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ListDemo, "HireListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.awt.event.ActionListener', 'javax.swing.event.DocumentListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.alreadyEnabled=false;
this.button=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.alreadyEnabled=false;
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JButton', function (button) {
C$.$init$.apply(this);
this.button=button;
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var name=this.b$['test.components.ListDemo'].employeeName.getText$();
if (name.equals$O("") || this.alreadyInList$S(name) ) {
$I$(1).getDefaultToolkit$().beep$();
this.b$['test.components.ListDemo'].employeeName.requestFocusInWindow$();
this.b$['test.components.ListDemo'].employeeName.selectAll$();
return;
}var index=this.b$['test.components.ListDemo'].list.getSelectedIndex$();
if (index == -1) {
index=0;
} else {
index++;
}this.b$['test.components.ListDemo'].listModel.insertElementAt$TE$I(this.b$['test.components.ListDemo'].employeeName.getText$(), index);
this.b$['test.components.ListDemo'].employeeName.requestFocusInWindow$();
this.b$['test.components.ListDemo'].employeeName.setText$S("");
this.b$['test.components.ListDemo'].list.setSelectedIndex$I(index);
this.b$['test.components.ListDemo'].list.ensureIndexIsVisible$I(index);
});

Clazz.newMeth(C$, 'alreadyInList$S', function (name) {
return this.b$['test.components.ListDemo'].listModel.contains$O(name);
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent', function (e) {
p$1.enableButton.apply(this, []);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent', function (e) {
p$1.handleEmptyTextField$javax_swing_event_DocumentEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent', function (e) {
if (!p$1.handleEmptyTextField$javax_swing_event_DocumentEvent.apply(this, [e])) {
p$1.enableButton.apply(this, []);
}});

Clazz.newMeth(C$, 'enableButton', function () {
if (!this.alreadyEnabled) {
this.button.setEnabled$Z(true);
}}, p$1);

Clazz.newMeth(C$, 'handleEmptyTextField$javax_swing_event_DocumentEvent', function (e) {
if (e.getDocument$().getLength$() <= 0) {
this.button.setEnabled$Z(false);
this.alreadyEnabled=false;
return true;
}return false;
}, p$1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-03-11 21:44:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
