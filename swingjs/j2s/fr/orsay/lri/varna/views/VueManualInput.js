(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'javax.swing.JPanel','java.awt.GridLayout','java.awt.FlowLayout','java.awt.Font','javax.swing.JLabel','javax.swing.JTextField','java.awt.Dimension']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VueManualInput");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_vp','fr.orsay.lri.varna.VARNAPanel','panel','javax.swing.JPanel','tseq','javax.swing.JTextField','+tstr']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
;C$.$init$.apply(this);
this._vp=vp;
p$1.buildView.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'buildView', function () {
this.panel=Clazz.new_($I$(1,1));
var pup=Clazz.new_($I$(1,1));
var pdown=Clazz.new_($I$(1,1));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2,1).c$$I$I,[2, 1]));
pup.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1).c$$I,[0]));
pdown.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1).c$$I,[0]));
var _textFieldsFont=$I$(4).decode$S("MonoSpaced-PLAIN-12");
var lseq=Clazz.new_($I$(5,1).c$$S,["Sequence:"]);
this.tseq=Clazz.new_([this._vp.getRNA$().getListeBasesToString$()],$I$(6,1).c$$S);
var lstr=Clazz.new_($I$(5,1).c$$S,["Structure:"]);
this.tstr=Clazz.new_([this._vp.getRNA$().getStructDBN$()],$I$(6,1).c$$S);
this.tstr.setPreferredSize$java_awt_Dimension(Clazz.new_([400, this.tstr.getPreferredSize$().height],$I$(7,1).c$$I$I));
this.tseq.setPreferredSize$java_awt_Dimension(Clazz.new_([400, this.tseq.getPreferredSize$().height],$I$(7,1).c$$I$I));
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
