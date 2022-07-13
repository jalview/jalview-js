(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},I$=[[0,'java.awt.BorderLayout','javax.swing.JLabel','javax.swing.JTextField']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LabelSetter", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.minindex=1;
},1);

C$.$fields$=[['I',['selectedAtomIndex','minindex'],'O',['viewer','org.openscience.jmol.app.janocchio.NMR_Viewer','noeTable','org.openscience.jmol.app.janocchio.NoeTable','coupleTable','org.openscience.jmol.app.janocchio.CoupleTable','labelArray','String[]','label','javax.swing.JLabel','field','javax.swing.JTextField']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_janocchio_NMR_Viewer$org_openscience_jmol_app_janocchio_NoeTable$org_openscience_jmol_app_janocchio_CoupleTable', function (viewer, noeTable, coupleTable) {
Clazz.super_(C$, this);
this.viewer=viewer;
this.noeTable=noeTable;
this.coupleTable=coupleTable;
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1)));
this.label=Clazz.new_($I$(2,1));
this.label.setText$S(p$1.getLabelText.apply(this, []));
this.field=Clazz.new_($I$(3,1).c$$I,[5]);
this.field.addActionListener$java_awt_event_ActionListener(((P$.LabelSetter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LabelSetter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['org.openscience.jmol.app.janocchio.LabelSetter'].fieldActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.LabelSetter'], [evt]);
});
})()
), Clazz.new_(P$.LabelSetter$1.$init$,[this, null])));
this.add$java_awt_Component$O(this.label, "West");
this.add$java_awt_Component$O(this.field, "Center");
}, 1);

Clazz.newMeth(C$, 'fieldActionPerformed$java_awt_event_ActionEvent', function (evt) {
this.labelArray[this.selectedAtomIndex]=this.field.getText$();
var command=this.setLabelString$I$S(this.selectedAtomIndex, this.labelArray[this.selectedAtomIndex]);
this.viewer.script$S(command);
this.noeTable.setLabelArray$SA(this.labelArray);
this.noeTable.setmolCDKuptodate$Z(false);
this.coupleTable.setLabelArray$SA(this.labelArray);
this.noeTable.updateTables$();
this.coupleTable.updateTables$();
});

Clazz.newMeth(C$, 'setSelectedAtomIndex$I', function (number) {
this.selectedAtomIndex=number;
this.label.setText$S(p$1.getLabelText.apply(this, []));
this.field.setText$S(this.labelArray[number]);
});

Clazz.newMeth(C$, 'allocateLabelArray$I', function (numAtoms) {
this.labelArray=Clazz.array(String, [numAtoms]);
});

Clazz.newMeth(C$, 'getLabelText', function () {
var text=" Atom " + String.valueOf$I(this.selectedAtomIndex + this.minindex) + " Label " ;
return text;
}, p$1);

Clazz.newMeth(C$, 'getLabelArray$', function () {
return this.labelArray;
});

Clazz.newMeth(C$, 'getMinindex$', function () {
return this.minindex;
});

Clazz.newMeth(C$, 'setLabel$I$S', function (i, label) {
this.labelArray[i]=label;
return this.setLabelString$I$S(i, label);
});

Clazz.newMeth(C$, 'setLabelString$I$S', function (i, label) {
var command="select (atomno=" + String.valueOf$I(i + this.minindex) + ");" ;
if (label == null  || label.trim$().length$() == 0 ) {
command=command + "label off";
} else {
command=command + "label " + label ;
}command=command + ";set display NORMAL; select ALL;";
return command;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
