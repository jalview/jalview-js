(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},I$=[[0,'java.awt.FlowLayout','java.awt.Dimension','javax.swing.JLabel','javax.swing.JTextField','java.text.DecimalFormat']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FrameDeltaDisplay", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.coupleWeight=0.1;
this.noeWeight=1.0;
this.frameDeltaNoe=0.0;
this.frameDeltaCouple=0.0;
},1);

C$.$fields$=[['D',['coupleWeight','noeWeight','frameDeltaNoe','frameDeltaCouple'],'O',['viewer','org.openscience.jmol.app.janocchio.NMR_Viewer','label','javax.swing.JLabel','totalfield','javax.swing.JTextField','+coupleWeightField','+noeWeightField']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_janocchio_NMR_Viewer', function (viewer) {
Clazz.super_(C$, this);
this.viewer=viewer;
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1).c$$I,[0]));
this.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[1000, 10]));
this.setVisible$Z(false);
this.label=Clazz.new_($I$(3,1));
this.label.setText$S(p$1.getLabelText.apply(this, []));
this.totalfield=Clazz.new_($I$(4,1).c$$I,[4]);
this.totalfield.setEditable$Z(false);
var coupleWeightLabel=Clazz.new_($I$(3,1));
coupleWeightLabel.setText$S("Couple Weight");
var noeWeightLabel=Clazz.new_($I$(3,1));
noeWeightLabel.setText$S("NOE Weight");
this.coupleWeightField=Clazz.new_($I$(4,1).c$$I,[3]);
p$1.setCoupleWeight$D.apply(this, [this.coupleWeight]);
this.noeWeightField=Clazz.new_($I$(4,1).c$$I,[3]);
p$1.setNoeWeight$D.apply(this, [this.noeWeight]);
this.noeWeightField.addActionListener$java_awt_event_ActionListener(((P$.FrameDeltaDisplay$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FrameDeltaDisplay$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
var text=this.b$['org.openscience.jmol.app.janocchio.FrameDeltaDisplay'].noeWeightField.getText$();
p$1.setNoeWeight$D.apply(this.b$['org.openscience.jmol.app.janocchio.FrameDeltaDisplay'], [Double.parseDouble$S(text)]);
});
})()
), Clazz.new_(P$.FrameDeltaDisplay$1.$init$,[this, null])));
this.coupleWeightField.addActionListener$java_awt_event_ActionListener(((P$.FrameDeltaDisplay$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FrameDeltaDisplay$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
var text=this.b$['org.openscience.jmol.app.janocchio.FrameDeltaDisplay'].coupleWeightField.getText$();
p$1.setCoupleWeight$D.apply(this.b$['org.openscience.jmol.app.janocchio.FrameDeltaDisplay'], [Double.parseDouble$S(text)]);
});
})()
), Clazz.new_(P$.FrameDeltaDisplay$2.$init$,[this, null])));
this.add$java_awt_Component$O(this.label, "West");
this.add$java_awt_Component$O(this.totalfield, "East");
this.add$java_awt_Component$O(noeWeightLabel, "East");
this.add$java_awt_Component$O(this.noeWeightField, "East");
this.add$java_awt_Component$O(coupleWeightLabel, "East");
this.add$java_awt_Component$O(this.coupleWeightField, "East");
}, 1);

Clazz.newMeth(C$, 'setFrameDeltaNoe$D', function (frameDelta) {
this.frameDeltaNoe=frameDelta;
p$1.setFieldText.apply(this, []);
});

Clazz.newMeth(C$, 'setFrameDeltaCouple$D', function (frameDelta) {
this.frameDeltaCouple=frameDelta;
p$1.setFieldText.apply(this, []);
});

Clazz.newMeth(C$, 'setFieldText', function () {
var df=Clazz.new_($I$(5,1).c$$S,["#0.00"]);
var error=this.noeWeight * this.frameDeltaNoe + this.coupleWeight * this.frameDeltaCouple;
this.totalfield.setText$S(df.format$D(error));
}, p$1);

Clazz.newMeth(C$, 'getLabelText', function () {
var text="Error:";
return text;
}, p$1);

Clazz.newMeth(C$, 'setNoeWeight$D', function (weight) {
this.noeWeight=weight;
var df=Clazz.new_($I$(5,1).c$$S,["#0.0"]);
this.noeWeightField.setText$S(df.format$D(weight));
p$1.setFieldText.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setCoupleWeight$D', function (weight) {
this.coupleWeight=weight;
var df=Clazz.new_($I$(5,1).c$$S,["#0.0"]);
this.coupleWeightField.setText$S(df.format$D(weight));
p$1.setFieldText.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getNoeWeight$', function () {
return this.noeWeight;
});

Clazz.newMeth(C$, 'getCoupleWeight$', function () {
return this.coupleWeight;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:29 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
