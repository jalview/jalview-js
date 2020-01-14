(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,['fr.orsay.lri.varna.models.VARNAConfig','.BP_STYLE'],'javax.swing.JComboBox','javax.swing.JPanel','java.awt.FlowLayout','javax.swing.JLabel']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueStyleBP", null, null, 'java.awt.event.ActionListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this._cmb=null;
this.panel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
C$.$init$.apply(this);
this._vp=vp;
var styles=$I$(1).values$();
var bck=vp.getConfig$()._mainBPStyle;
this._cmb=Clazz.new_($I$(2).c$$TEA,[styles]);
for (var i=0; i < styles.length; i++) {
if (styles[i] === bck ) this._cmb.setSelectedIndex$I(i);
}
this._cmb.addActionListener$java_awt_event_ActionListener(this);
this.panel=Clazz.new_($I$(3));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4).c$$I,[0]));
var labelZ=Clazz.new_($I$(5).c$$S,["Base pair style: "]);
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

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var newSel=this._cmb.getSelectedItem$();
this._vp.setBPStyle$fr_orsay_lri_varna_models_VARNAConfig_BP_STYLE(newSel);
this._vp.repaint$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
