(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},I$=[[0,'java.awt.FlowLayout','java.awt.Dimension','javax.swing.JLabel','javax.swing.JTextField','javax.swing.JCheckBox']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PopulationDisplay", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maxp=0.0;
},1);

C$.$fields$=[['D',['maxp'],'I',['frameNumber','storedFrameNumber','imaxp'],'O',['viewer','org.openscience.jmol.app.janocchio.NMR_Viewer','population','double[]','label','javax.swing.JLabel','field','javax.swing.JTextField','populationFrames','javax.swing.JCheckBox']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_janocchio_NMR_Viewer', function (viewer) {
Clazz.super_(C$, this);
this.viewer=viewer;
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1).c$$I,[0]));
this.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[1000, 10]));
this.setVisible$Z(false);
this.label=Clazz.new_($I$(3,1));
this.label.setText$S(p$1.getLabelText.apply(this, []));
this.field=Clazz.new_($I$(4,1).c$$I,[5]);
this.field.setEditable$Z(false);
this.populationFrames=Clazz.new_($I$(5,1).c$$S,["Display Populated Conformers"]);
this.populationFrames.addActionListener$java_awt_event_ActionListener(((P$.PopulationDisplay$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopulationDisplay$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
p$1.populationFramesActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.PopulationDisplay'], [evt]);
});
})()
), Clazz.new_(P$.PopulationDisplay$1.$init$,[this, null])));
this.add$java_awt_Component$O(this.label, "West");
this.add$java_awt_Component$O(this.field, "Center");
this.add$java_awt_Component$O(this.populationFrames, "East");
}, 1);

Clazz.newMeth(C$, 'populationFramesActionPerformed$java_awt_event_ActionEvent', function (evt) {
var command;
if (this.populationFrames.isSelected$()) {
this.storedFrameNumber=this.frameNumber;
command="frame 0; hide all;";
for (var i=1; i < this.population.length; i++) {
if (this.population[i] >= 0.1 ) {
var col=p$1.getColourString$D.apply(this, [this.population[i]]);
if (i == this.imaxp) {
command=command + "select */" + i + "; color opaque " + col + ";" ;
} else {
command=command + "select */" + i + "; color translucent " + col + ";" ;
}command=command + "display */" + i + " or displayed;" ;
}}
} else {
command="select all; color cpk; frame " + this.storedFrameNumber + "; display all;" ;
}command=command + "select ALL;";
this.viewer.script$S(command);
}, p$1);

Clazz.newMeth(C$, 'getColourString$D', function (p) {
var val=(1.0 - p) * 255.0;
var ival=Math.round(Math.round(val));
return "[" + ival + "," + ival + ",255]" ;
}, p$1);

Clazz.newMeth(C$, 'setFrameNumberFromViewer$I', function (number) {
this.frameNumber=number;
if (this.population != null ) {
this.field.setText$S(String.valueOf$D(this.population[number]));
}});

Clazz.newMeth(C$, 'getFrameNumber$', function () {
return this.frameNumber;
});

Clazz.newMeth(C$, 'getLabelText', function () {
var text="NAMFIS Population :";
return text;
}, p$1);

Clazz.newMeth(C$, 'addPopulation$DA', function (population) {
this.population=population;
this.setVisible$Z(true);
this.field.setText$S(String.valueOf$D(population[this.frameNumber]));
for (var i=1; i < population.length; i++) {
if (population[i] > this.maxp ) {
this.maxp=population[i];
this.imaxp=i;
}}
});

Clazz.newMeth(C$, 'getPopulation$', function () {
return this.population;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:56 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
