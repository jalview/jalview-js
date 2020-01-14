(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'java.util.ArrayList','javax.swing.Timer','javax.swing.BorderFactory','java.awt.BorderLayout','java.awt.Color','javax.swing.JTextArea','javax.swing.JPanel','fr.orsay.lri.varna.VARNAPanel','java.awt.Dimension',['fr.orsay.lri.varna.views.VueAboutPanel','.AboutAnimator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueAboutPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._anim=null;
this._textPanel=null;
this._textArea=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'init', function () {
try {
this.setBorder$javax_swing_border_Border($I$(3).createEtchedBorder$());
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
this.setBackground$java_awt_Color($I$(5).WHITE);
var message="VARNA 3.9\n\nCreated by: Kevin Darty, Alain Denise and Yann Ponty\nContact: ponty@lri.fr\n\nVARNA is freely distributed under the terms of the GNU GPL 3.0 license.\n\nSupported by the BRASERO project (ANR-06-BLAN-0045)\n";
this._textArea=Clazz.new_($I$(6));
this._textArea.setText$S(message);
this._textArea.setEditable$Z(false);
this._textPanel=Clazz.new_($I$(7));
this._textPanel.setBackground$java_awt_Color($I$(5).WHITE);
this._textPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
this._textPanel.setBorder$javax_swing_border_Border($I$(3).createMatteBorder$I$I$I$I$java_awt_Color(0, 15, 0, 15, this.getBackground$()));
this._textPanel.add$java_awt_Component(this._textArea);
var vp=Clazz.new_($I$(8).c$$S$S,["GGGGAAAACCCC", "((((....))))"]);
vp.setModifiable$Z(false);
vp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9).c$$I$I,[100, 100]));
this._anim=Clazz.new_($I$(10).c$$fr_orsay_lri_varna_VARNAPanel, [this, null, vp]);
this._anim.addRNA$S$S("GGGGAAGGGGAAAACCCCAACCCC", "((((..((((....))))..))))");
this._anim.addRNA$S$S("GGGGAAGGGGAAGGGGAAAACCCCAACCCCAACCCC", "((((..((((..((((....))))..))))..))))");
this._anim.addRNA$S$S("GGGGAGGGGAAAACCCCAGGGGAGGGGAAAACCCCAGGGGAAAACCCCAGGGGAAAACCCCACCCCAGGGGAAAACCCCACCCC", "((((.((((....)))).((((.((((....)))).((((....)))).((((....)))).)))).((((....)))).))))");
this._anim.addRNA$S$S("GGGGGGGGAAAACCCCAGGGGAAAACCCCAGGGGGGGGAAAACCCCAGGGGAAAACCCCAGGGGAAAACCCCAGGGGAAAACCCCGGGGAAAACCCCACCCCAGGGGAAAACCCCAGGGGAAAACCCCCCCC", "((((((((....)))).((((....)))).((((((((....)))).((((....)))).((((....)))).((((....))))((((....)))).)))).((((....)))).((((....))))))))");
this._anim.addRNA$S$S("GGGGAAAACCCC", "((((....))))");
this._anim.addRNA$S$S("GGGGAAGGGGAAAACCCCAGGGGAAAACCCCACCCC", "((((..((((....)))).((((....)))).))))");
this._anim.addRNA$S$S("GGGGAGGGGAAAACCCCAGGGGAAAACCCCAGGGGAAAACCCCACCCC", "((((.((((....)))).((((....)))).((((....)))).))))");
this._anim.addRNA$S$S("GGGGAGGGGAAAAAAACCCCAGGGGAAAAAAACCCCAGGGGAAAAAAACCCCACCCC", "((((.((((.......)))).((((.......)))).((((.......)))).))))");
this._anim.start$();
this.add$java_awt_Component$O(vp, "West");
this.add$java_awt_Component$O(this._textPanel, "Center");
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'gracefulStop$', function () {
this._anim.gracefulStop$();
});
;
(function(){var C$=Clazz.newClass(P$.VueAboutPanel, "AboutAnimator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this._structures=null;
this._sequences=null;
this._period=0;
this._over=false;
this.mode=0;
this.DELAY1=0;
this.TASK=0;
this.DELAY2=0;
this.STOP=0;
this.i=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._structures=Clazz.new_($I$(1));
this._sequences=Clazz.new_($I$(1));
this._period=2000;
this._over=false;
this.mode=0;
this.DELAY1=0;
this.TASK=1;
this.DELAY2=2;
this.STOP=3;
this.i=0;
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
C$.$init$.apply(this);
this._vp=vp;
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.run$();
});

Clazz.newMeth(C$, 'start$', function () {
var mode=0;
this.run$();
});

Clazz.newMeth(C$, 'addRNA$S$S', function (seq, str) {
this._sequences.add$TE(seq);
this._structures.add$TE(str);
});

Clazz.newMeth(C$, 'gracefulStop$', function () {
this._over=true;
});

Clazz.newMeth(C$, 'run$', function () {
var initialDelay;
if (this._over) this.mode=3;
switch (this.mode) {
case 0:
this.mode=1;
initialDelay=this._period;
break;
case 1:
var seq=this._sequences.get$I(this.i);
var str=this._structures.get$I(this.i);
try {
this._vp.drawRNAInterpolated$S$S(seq, str);
this.mode=2;
initialDelay=500;
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
initialDelay=-1;
} else {
throw e;
}
}
break;
case 2:
this.i=(this.i + 1) % this._sequences.size$();
this.mode=0;
initialDelay=0;
break;
case 3:
default:
initialDelay=-1;
break;
}
if (initialDelay >= 0) {
var t=Clazz.new_($I$(2).c$$I$java_awt_event_ActionListener,[initialDelay, this]);
t.setDelay$I(0);
t.setRepeats$Z(false);
t.start$();
} else {
System.out.println$S("VueAbout done");
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
