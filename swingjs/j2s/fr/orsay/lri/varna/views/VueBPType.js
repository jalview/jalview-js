(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,['fr.orsay.lri.varna.models.rna.ModeleBP','.Edge'],'javax.swing.JComboBox',['fr.orsay.lri.varna.models.rna.ModeleBP','.Stericity'],'javax.swing.JPanel','java.awt.FlowLayout','javax.swing.JLabel']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VueBPType", null, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_vp','fr.orsay.lri.varna.VARNAPanel','_msbp','fr.orsay.lri.varna.models.rna.ModeleBP','_edge5','javax.swing.JComboBox','+_edge3','+_stericity','panel','javax.swing.JPanel']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_rna_ModeleBP', function (vp, msbp) {
;C$.$init$.apply(this);
this._vp=vp;
this._msbp=msbp;
var edges=$I$(1).values$();
var bck=msbp.getEdgePartner5$();
this._edge5=Clazz.new_($I$(2,1).c$$OA,[edges]);
for (var i=0; i < edges.length; i++) {
if (edges[i] === bck ) this._edge5.setSelectedIndex$I(i);
}
bck=msbp.getEdgePartner3$();
this._edge3=Clazz.new_($I$(2,1).c$$OA,[edges]);
for (var i=0; i < edges.length; i++) {
if (edges[i] === bck ) this._edge3.setSelectedIndex$I(i);
}
var sters=$I$(3).values$();
var bcks=msbp.getStericity$();
this._stericity=Clazz.new_($I$(2,1).c$$OA,[sters]);
for (var i=0; i < sters.length; i++) {
if (sters[i] === bcks ) this._stericity.setSelectedIndex$I(i);
}
this._edge5.addActionListener$java_awt_event_ActionListener(this);
this._edge3.addActionListener$java_awt_event_ActionListener(this);
this._stericity.addActionListener$java_awt_event_ActionListener(this);
this.panel=Clazz.new_($I$(4,1));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1).c$$I,[0]));
var label5=Clazz.new_($I$(6,1).c$$S,["5\' edge: "]);
var label3=Clazz.new_($I$(6,1).c$$S,["3\' edge: "]);
var labelS=Clazz.new_($I$(6,1).c$$S,["Stericity: "]);
this.panel.add$java_awt_Component(label5);
this.panel.add$java_awt_Component(this._edge5);
this.panel.add$java_awt_Component(label3);
this.panel.add$java_awt_Component(this._edge3);
this.panel.add$java_awt_Component(labelS);
this.panel.add$java_awt_Component(this._stericity);
}, 1);

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$, 'getEdge5$', function () {
return this._edge5.getSelectedItem$();
});

Clazz.newMeth(C$, 'getEdge3$', function () {
return this._edge3.getSelectedItem$();
});

Clazz.newMeth(C$, 'getStericity$', function () {
return this._stericity.getSelectedItem$();
});

Clazz.newMeth(C$, 'get_vp$', function () {
return this._vp;
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this._msbp.setEdge5$fr_orsay_lri_varna_models_rna_ModeleBP_Edge(this.getEdge5$());
this._msbp.setEdge3$fr_orsay_lri_varna_models_rna_ModeleBP_Edge(this.getEdge3$());
this._msbp.setStericity$fr_orsay_lri_varna_models_rna_ModeleBP_Stericity(this.getStericity$());
this._vp.repaint$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
