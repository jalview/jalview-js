(function(){var P$=Clazz.newPackage("edu.uwi"),p$1={},I$=[[0,'StringBuffer','javax.swing.JPanel','edu.uwi.BoltzCanvas','edu.uwi.EntropyCanvas','javax.swing.BorderFactory','java.awt.Color','javax.swing.JLabel','javax.swing.JTextField','javax.swing.JButton','javax.swing.JScrollPane',['edu.uwi.Boltzmann','.LevelInfoArea'],'java.awt.FlowLayout','java.awt.Dimension','java.awt.GridBagLayout','java.awt.GridBagConstraints','java.awt.Insets',['edu.uwi.Boltzmann','.SymAction'],['edu.uwi.Boltzmann','.SymMouse'],'edu.uwi.SimThread','java.text.DecimalFormat']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Boltzmann", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JApplet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.BoltzSimGraph=null;
this.DispBoltz=null;
this.EntropyGraph=null;
this.DispEntropy=null;
this.lineBorder1=null;
this.lineBorder2=null;
this.UserInput=null;
this.lQuanta=null;
this.lParticles=null;
this.lCollisions=null;
this.tEnergy=null;
this.tParticles=null;
this.tCollisions=null;
this.bStartSim=null;
this.DispResults=null;
this.ShowText=null;
this.initialEnergy=0;
this.curMaxEnergy=0;
this.maxParticles=0;
this.maxCollisions=0;
this.particleEnergy=null;
this.EntropyCalcs=0;
this.start_pressed=false;
this.simThread=null;
this.particle1=0;
this.particle2=0;
this.e1=0;
this.e2=0;
this.collisionEnergy=0;
this.numOfCollisions=0;
this.displayFactor=0;
this.entropyFactor=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.BoltzSimGraph=Clazz.new_($I$(2));
this.DispBoltz=Clazz.new_($I$(3).c$$edu_uwi_Boltzmann,[this]);
this.EntropyGraph=Clazz.new_($I$(2));
this.DispEntropy=Clazz.new_($I$(4));
this.lineBorder1=$I$(5).createLineBorder$java_awt_Color($I$(6).black);
this.lineBorder2=$I$(5).createLineBorder$java_awt_Color($I$(6).black);
this.UserInput=Clazz.new_($I$(2));
this.lQuanta=Clazz.new_($I$(7));
this.lParticles=Clazz.new_($I$(7));
this.lCollisions=Clazz.new_($I$(7));
this.tEnergy=Clazz.new_($I$(8));
this.tParticles=Clazz.new_($I$(8));
this.tCollisions=Clazz.new_($I$(8));
this.bStartSim=Clazz.new_($I$(9));
this.DispResults=Clazz.new_($I$(10));
this.ShowText=Clazz.new_($I$(11), [this, null]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.setName$S("Boltzmann");
}, 1);

Clazz.newMeth(C$, ['init$','init'], function () {
this.getContentPane$().setLayout$java_awt_LayoutManager(null);
this.setSize$I$I(562, 391);
this.BoltzSimGraph.setBorder$javax_swing_border_Border(this.lineBorder2);
this.BoltzSimGraph.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12).c$$I$I$I,[1, 5, 5]));
this.getContentPane$().add$java_awt_Component(this.BoltzSimGraph);
this.BoltzSimGraph.setBackground$java_awt_Color($I$(6).white);
this.BoltzSimGraph.setBounds$I$I$I$I(0, 0, 384, 300);
this.BoltzSimGraph.add$java_awt_Component(this.DispBoltz);
this.DispBoltz.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[380, 294]));
this.DispBoltz.setBounds$I$I$I$I(2, 6, 380, 294);
this.EntropyGraph.setBorder$javax_swing_border_Border(this.lineBorder1);
this.EntropyGraph.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12).c$$I$I$I,[1, 5, 5]));
this.getContentPane$().add$java_awt_Component(this.EntropyGraph);
this.EntropyGraph.setBackground$java_awt_Color($I$(6).white);
this.EntropyGraph.setBounds$I$I$I$I(384, 0, 180, 156);
this.EntropyGraph.add$java_awt_Component(this.DispEntropy);
this.DispEntropy.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[178, 150]));
this.DispEntropy.setBounds$I$I$I$I(1, 6, 178, 150);
this.UserInput.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14)));
this.getContentPane$().add$java_awt_Component(this.UserInput);
this.UserInput.setBackground$java_awt_Color($I$(6).yellow);
this.UserInput.setBounds$I$I$I$I(0, 300, 384, 96);
this.lQuanta.setText$S("Initial Energy");
this.UserInput.add$java_awt_Component$O(this.lQuanta, Clazz.new_($I$(15).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I,[0, 0, 1, 1, 1.0, 1.0, 10, 0, Clazz.new_($I$(16).c$$I$I$I$I,[0, 0, 0, 0]), 0, 0]));
this.lQuanta.setBounds$I$I$I$I(15, 6, 97, 15);
this.lParticles.setText$S("No. of Particles");
this.UserInput.add$java_awt_Component$O(this.lParticles, Clazz.new_($I$(15).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I,[1, 0, 1, 1, 1.0, 0.0, 10, 0, Clazz.new_($I$(16).c$$I$I$I$I,[0, 0, 0, 0]), 0, 0]));
this.lParticles.setBounds$I$I$I$I(149, 6, 86, 15);
this.lCollisions.setText$S("No. of Collisions");
this.UserInput.add$java_awt_Component$O(this.lCollisions, Clazz.new_($I$(15).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I,[2, 0, 1, 1, 1.0, 0.0, 10, 0, Clazz.new_($I$(16).c$$I$I$I$I,[0, 0, 0, 0]), 0, 0]));
this.lCollisions.setBounds$I$I$I$I(275, 6, 90, 15);
this.tEnergy.setAutoscrolls$Z(false);
this.tEnergy.setColumns$I(10);
this.tEnergy.setNextFocusableComponent$java_awt_Component(this.tParticles);
this.UserInput.add$java_awt_Component$O(this.tEnergy, Clazz.new_($I$(15).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I,[0, 1, 1, 1, 1.0, 1.0, 10, 0, Clazz.new_($I$(16).c$$I$I$I$I,[0, 0, 0, 0]), 0, 0]));
this.tEnergy.setBounds$I$I$I$I(9, 33, 110, 19);
this.tParticles.setAutoscrolls$Z(false);
this.tParticles.setColumns$I(10);
this.tParticles.setNextFocusableComponent$java_awt_Component(this.tCollisions);
this.UserInput.add$java_awt_Component$O(this.tParticles, Clazz.new_($I$(15).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I,[1, 1, 1, 1, 1.0, 1.0, 10, 0, Clazz.new_($I$(16).c$$I$I$I$I,[0, 0, 0, 0]), 0, 0]));
this.tParticles.setBounds$I$I$I$I(137, 33, 110, 19);
this.tCollisions.setAutoscrolls$Z(false);
this.tCollisions.setColumns$I(10);
this.tCollisions.setNextFocusableComponent$java_awt_Component(this.bStartSim);
this.UserInput.add$java_awt_Component$O(this.tCollisions, Clazz.new_($I$(15).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I,[2, 1, 1, 1, 1.0, 1.0, 10, 0, Clazz.new_($I$(16).c$$I$I$I$I,[0, 0, 0, 0]), 0, 0]));
this.tCollisions.setBounds$I$I$I$I(265, 33, 110, 19);
this.bStartSim.setText$S("Start");
this.bStartSim.setActionCommand$S("Start");
this.bStartSim.setNextFocusableComponent$java_awt_Component(this.tEnergy);
this.bStartSim.setMargin$java_awt_Insets(Clazz.new_($I$(16).c$$I$I$I$I,[2, 16, 2, 16]));
this.UserInput.add$java_awt_Component$O(this.bStartSim, Clazz.new_($I$(15).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I,[1, 2, 1, 1, 1.0, 1.0, 10, 0, Clazz.new_($I$(16).c$$I$I$I$I,[0, 0, 0, 0]), 0, 0]));
this.bStartSim.setBackground$java_awt_Color($I$(6).green);
this.bStartSim.setBounds$I$I$I$I(160, 64, 63, 55);
this.DispResults.setHorizontalScrollBarPolicy$I(31);
this.DispResults.setVerticalScrollBarPolicy$I(22);
this.DispResults.setOpaque$Z(true);
this.getContentPane$().add$java_awt_Component(this.DispResults);
this.DispResults.setBounds$I$I$I$I(384, 156, 180, 240);
this.ShowText.setRows$I(10000);
this.ShowText.setDisabledTextColor$java_awt_Color(Clazz.new_($I$(6).c$$I$I$I,[153, 153, 153]));
this.DispResults.getViewport$().add$java_awt_Component(this.ShowText);
this.ShowText.setBounds$I$I$I$I(0, 0, 162, 150000);
var lSymAction=Clazz.new_($I$(17), [this, null]);
this.bStartSim.addActionListener$java_awt_event_ActionListener(lSymAction);
this.tEnergy.addActionListener$java_awt_event_ActionListener(lSymAction);
this.tParticles.addActionListener$java_awt_event_ActionListener(lSymAction);
this.tCollisions.addActionListener$java_awt_event_ActionListener(lSymAction);
var aSymMouse=Clazz.new_($I$(18), [this, null]);
this.ShowText.addMouseListener$java_awt_event_MouseListener(aSymMouse);
this.setBackground$java_awt_Color($I$(6).white);
this.maxParticles=10000;
this.maxCollisions=60000;
this.initialEnergy=250;
this.EntropyCalcs=50;
this.tEnergy.setText$S(Integer.toString$I(this.initialEnergy));
this.tParticles.setText$S(Integer.toString$I(this.maxParticles));
this.tCollisions.setText$S(Integer.toString$I(this.maxCollisions));
this.initEnvironment$();
});

Clazz.newMeth(C$, 'bStartSim_actionPerformed$java_awt_event_ActionEvent', function (event) {
if (!this.initEnvironment$()) return;
if (this.simThread != null ) this.simThread.interrupt$();
this.simThread=Clazz.new_($I$(19).c$$edu_uwi_Boltzmann,[this]);
this.simThread.start$();
});

Clazz.newMeth(C$, 'initEnvironment$', function () {
try {
var tmp=(Integer.parseInt$S(this.tCollisions.getText$().trim$()));
if (tmp >= 0) this.maxCollisions=tmp;
tmp=(Integer.parseInt$S(this.tEnergy.getText$().trim$()));
if (tmp > 0) this.initialEnergy=tmp;
tmp=(Integer.parseInt$S(this.tParticles.getText$().trim$()));
if (tmp >= 0) this.maxParticles=tmp;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return false;
} else {
throw e;
}
}
this.DispBoltz.maxEnergy=20 * this.initialEnergy;
this.particleEnergy=Clazz.array(Integer.TYPE, [this.maxParticles]);
this.DispBoltz.energyLevels=Clazz.array(Integer.TYPE, [this.DispBoltz.maxEnergy + 1]);
this.curMaxEnergy=this.initialEnergy;
this.DispEntropy.Entropy=Clazz.array(Double.TYPE, [this.EntropyCalcs + 1]);
this.DispEntropy.EntropyCalc=this.EntropyCalcs;
this.DispEntropy.entCounter=0;
for (var i=0; i < this.maxParticles; i++) {
this.particleEnergy[i]=this.initialEnergy;
}
for (var i=0; i <= this.DispBoltz.maxEnergy; i++) {
this.DispBoltz.energyLevels[i]=0;
}
for (var i=0; i < this.EntropyCalcs; i++) {
this.DispEntropy.Entropy[i]=0;
}
this.DispBoltz.energyLevels[this.initialEnergy]=this.maxParticles;
return true;
});

Clazz.newMeth(C$, 'calcEntropy$I', function (x) {
var i;
this.DispEntropy.Entropy[x]=this.maxParticles * Math.log(this.maxParticles);
for (i=0; i <= this.curMaxEnergy; i++) if (this.DispBoltz.energyLevels[i] > 0) this.DispEntropy.Entropy[x]=this.DispEntropy.Entropy[x] - (this.DispBoltz.energyLevels[i] * Math.log(this.DispBoltz.energyLevels[i]));

});

Clazz.newMeth(C$, 'ShowText_mouseReleased$java_awt_event_MouseEvent', function (event) {
});

Clazz.newMeth(C$, ['sjs_initSimulation$','sjs_initSimulation'], function () {
this.numOfCollisions=this.maxCollisions;
this.entropyFactor=(Math.ceil((this.maxCollisions/this.EntropyCalcs|0))|0);
{
this.displayFactor = 100;
}
});

Clazz.newMeth(C$, ['sjs_loopSimulation$','sjs_loopSimulation'], function () {
this.particle1=(((this.maxParticles - 1) * Math.random())|0);
this.particle2=(((this.maxParticles - 1) * Math.random())|0);
while (this.particle1 == this.particle2){
this.particle2=(((this.maxParticles - 1) * Math.random())|0);
}
if (this.particleEnergy[this.particle1] < this.particleEnergy[this.particle2]) {
var temp=this.particleEnergy[this.particle1];
this.particleEnergy[this.particle1]=this.particleEnergy[this.particle2];
this.particleEnergy[this.particle2]=temp;
}this.e1=this.particleEnergy[this.particle1];
this.e2=this.particleEnergy[this.particle2];
this.collisionEnergy=(Math.ceil(this.e1 * Math.random())|0);
this.particleEnergy[this.particle1]=this.e1 - this.collisionEnergy;
this.particleEnergy[this.particle2]=this.e2 + this.collisionEnergy;
this.DispBoltz.energyLevels[this.e1]=this.DispBoltz.energyLevels[this.e1] - 1;
this.DispBoltz.energyLevels[this.e2]=this.DispBoltz.energyLevels[this.e2] - 1;
this.e1=this.particleEnergy[this.particle1];
this.e2=this.particleEnergy[this.particle2];
this.DispBoltz.energyLevels[this.e1]=this.DispBoltz.energyLevels[this.e1] + 1;
this.DispBoltz.energyLevels[this.e2]=this.DispBoltz.energyLevels[this.e2] + 1;
if (this.e1 < this.e2) this.e1=this.e2;
if (this.e1 > this.curMaxEnergy) this.curMaxEnergy=this.e1;
this.DispBoltz.maxEnergy=this.curMaxEnergy;
return (--this.numOfCollisions > 0);
});

Clazz.newMeth(C$, 'sjs_finalizeGraph$', function () {
for (var i=this.curMaxEnergy; i > 0; i--) {
if (this.DispBoltz.energyLevels[i] < 1) this.curMaxEnergy--;
 else break;
}
p$1.showTheText.apply(this, []);
});

Clazz.newMeth(C$, 'showTheText', function () {
this.ShowText.levelInfo.setLength$I(0);
this.ShowText.appendLine$S("Init. Energy   = " + this.initialEnergy);
this.ShowText.appendLine$S("No. particles  = " + this.maxParticles);
this.ShowText.appendLine$S("No. collisions = " + this.maxCollisions);
this.ShowText.appendLine$S("-------------");
for (var i=1; i <= this.curMaxEnergy; i++) this.ShowText.appendLine$S("EL " + i + "= " + this.DispBoltz.energyLevels[i] );

this.ShowText.appendLine$S("-------------");
var df=Clazz.new_($I$(20).c$$S,["0.00"]);
for (var i=0; i < this.EntropyCalcs; i++) this.ShowText.appendLine$S("WL " + i + "= " + df.format$D(this.DispEntropy.Entropy[i]) );

this.ShowText.setRows$I(this.curMaxEnergy + this.EntropyCalcs + 2 );
this.ShowText.setText$S(this.ShowText.levelInfo.toString());
var vp=this.DispResults.getViewport$();
var insets=vp.getInsets$();
var viewPrefSize=vp.getPreferredSize$();
var vpSize=vp.getSize$();
var extentSize=vp.toViewCoordinates$java_awt_Dimension(vpSize);
var viewSize=Clazz.new_($I$(13).c$$java_awt_Dimension,[viewPrefSize]);
System.out.println$S(this.ShowText.getHeight$() + " " + insets + " " + viewPrefSize + " " + vpSize + " " + extentSize + " " + viewSize );
this.repaint$();
}, p$1);

Clazz.newMeth(C$, ['sjs_checkRepaint$','sjs_checkRepaint'], function () {
if ((this.numOfCollisions % this.entropyFactor) == 0) {
this.calcEntropy$I(this.DispEntropy.entCounter++);
this.DispEntropy.invalidate$();
}if ((this.numOfCollisions % this.displayFactor) != 1) return false;
this.repaint$();
return true;
});
;
(function(){var C$=Clazz.newClass(P$.Boltzmann, "SymAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (event) {
var object=event.getSource$();
this.this$0.initEnvironment$.apply(this.this$0, []);
if (object === this.this$0.bStartSim ) this.this$0.bStartSim_actionPerformed$java_awt_event_ActionEvent.apply(this.this$0, [event]);
this.this$0.ShowText.levelInfo.setLength$I(0);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Boltzmann, "LevelInfoArea", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JTextArea');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.levelInfo=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.levelInfo=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.levelInfo.setLength$I(0);
}, 1);

Clazz.newMeth(C$, 'appendLine$S', function (s) {
this.levelInfo.append$S(s).append$S("\n");
});
})()
;
(function(){var C$=Clazz.newClass(P$.Boltzmann, "SymMouse", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.MouseAdapter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (event) {
var object=event.getSource$();
if (object === this.this$0.ShowText ) this.this$0.ShowText_mouseReleased$java_awt_event_MouseEvent.apply(this.this$0, [event]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-05 09:37:00 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
