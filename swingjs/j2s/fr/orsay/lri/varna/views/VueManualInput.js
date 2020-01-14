(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'javax.swing.JPanel','java.awt.GridLayout','java.awt.FlowLayout','java.awt.Font','javax.swing.JLabel','javax.swing.JTextField','java.awt.Dimension']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueManualInput");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this.panel=null;
this.tseq=null;
this.tstr=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
C$.$init$.apply(this);
this._vp=vp;
p$1.buildView.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'buildView', function () {
this.panel=Clazz.new_($I$(1));
var pup=Clazz.new_($I$(1));
var pdown=Clazz.new_($I$(1));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2).c$$I$I,[2, 1]));
pup.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3).c$$I,[0]));
pdown.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3).c$$I,[0]));
var _textFieldsFont=$I$(4).decode$S("MonoSpaced-PLAIN-12");
var lseq=Clazz.new_($I$(5).c$$S,["Sequence:"]);
this.tseq=Clazz.new_($I$(6).c$$S,[this._vp.getRNA$().getListeBasesToString$()]);
var lstr=Clazz.new_($I$(5).c$$S,["Structure:"]);
this.tstr=Clazz.new_($I$(6).c$$S,[this._vp.getRNA$().getStructDBN$()]);
this.tstr.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(7).c$$I$I,[400, this.tstr.getPreferredSize$().height]));
this.tseq.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(7).c$$I$I,[400, this.tseq.getPreferredSize$().height]));
this.tstr.setFont$java_awt_Font(_textFieldsFont);
this.tseq.setFont$java_awt_Font(_textFieldsFont);
pup.add$java_awt_Component(lseq);
pup.add$java_awt_Component(this.tseq);
pdown.add$java_awt_Component(lstr);
pdown.add$java_awt_Component(this.tstr);
this.panel.add$java_awt_Component(pup);
this.panel.add$java_awt_Component(pdown);
}, p$1);

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$, 'setPanel$javax_swing_JPanel', function (panel) {
this.panel=panel;
});

Clazz.newMeth(C$, 'getTseq$', function () {
return this.tseq;
});

Clazz.newMeth(C$, 'getTstr$', function () {
return this.tstr;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
