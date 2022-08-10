(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,['fr.orsay.lri.varna.models.VARNAConfig','.BP_STYLE'],'javax.swing.JComboBox','javax.swing.JPanel','java.awt.FlowLayout','javax.swing.JLabel']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VueStyleBP", null, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_vp','fr.orsay.lri.varna.VARNAPanel','_cmb','javax.swing.JComboBox','panel','javax.swing.JPanel']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
;C$.$init$.apply(this);
this._vp=vp;
var styles=$I$(1).values$();
var bck=vp.getConfig$()._mainBPStyle;
this._cmb=Clazz.new_($I$(2,1).c$$OA,[styles]);
for (var i=0; i < styles.length; i++) {
if (styles[i] === bck ) this._cmb.setSelectedIndex$I(i);
}
this._cmb.addActionListener$java_awt_event_ActionListener(this);
this.panel=Clazz.new_($I$(3,1));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1).c$$I,[0]));
var labelZ=Clazz.new_($I$(5,1).c$$S,["Base pair style: "]);
this.panel.add$java_awt_Component(labelZ);
this.panel.add$java_awt_Component(this._cmb);
}, 1);

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$, 'getStyle$', function () {
return this._cmb.getSelectedItem$();
});

Clazz.newMeth(C$, 'get_vp$', function () {
return this._vp;
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var newSel=this._cmb.getSelectedItem$();
this._vp.setBPStyle$fr_orsay_lri_varna_models_VARNAConfig_BP_STYLE(newSel);
this._vp.repaint$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
