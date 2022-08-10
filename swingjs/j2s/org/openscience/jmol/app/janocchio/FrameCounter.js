(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},I$=[[0,'java.awt.BorderLayout','javax.swing.JLabel','javax.swing.JTextField']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FrameCounter", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['frameNumber','frameCount'],'O',['viewer','org.openscience.jmol.app.janocchio.NMR_Viewer','label','javax.swing.JLabel','field','javax.swing.JTextField']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_janocchio_NMR_Viewer', function (viewer) {
Clazz.super_(C$, this);
this.viewer=viewer;
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1)));
this.label=Clazz.new_($I$(2,1));
this.label.setText$S(p$1.getLabelText.apply(this, []));
this.field=Clazz.new_($I$(3,1).c$$I,[5]);
this.field.setText$S(String.valueOf$I(this.getFrameNumber$()));
this.field.addActionListener$java_awt_event_ActionListener(((P$.FrameCounter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FrameCounter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
p$1.fieldActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.FrameCounter'], [evt]);
});
})()
), Clazz.new_(P$.FrameCounter$1.$init$,[this, null])));
this.add$java_awt_Component$O(this.label, "West");
this.add$java_awt_Component$O(this.field, "Center");
}, 1);

Clazz.newMeth(C$, 'fieldActionPerformed$java_awt_event_ActionEvent', function (evt) {
var number=Integer.parseInt$S(this.field.getText$());
this.setFrameNumberChangeViewer$I(number);
}, p$1);

Clazz.newMeth(C$, 'setFrameNumberChangeViewer$I', function (number) {
this.frameNumber=number;
var command= String.instantialize("frame ");
command=command + String.valueOf$I(number);
this.viewer.script$S(command);
});

Clazz.newMeth(C$, 'setFrameNumberFromViewer$I', function (number) {
this.frameNumber=number;
this.field.setText$S(String.valueOf$I(number));
});

Clazz.newMeth(C$, 'getFrameNumber$', function () {
return this.frameNumber;
});

Clazz.newMeth(C$, 'setFrameCount$I', function (number) {
this.frameCount=number;
this.label.setText$S(p$1.getLabelText.apply(this, []));
});

Clazz.newMeth(C$, 'getLabelText', function () {
var text=" Frame [" + String.valueOf$I(this.frameCount) + " total] :" ;
return text;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
