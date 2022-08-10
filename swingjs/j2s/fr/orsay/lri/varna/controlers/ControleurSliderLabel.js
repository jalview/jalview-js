(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ControleurSliderLabel", null, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._factor=1.0;
},1);

C$.$fields$=[['D',['_factor'],'O',['_l','javax.swing.JLabel']]]

Clazz.newMeth(C$, 'c$$javax_swing_JLabel', function (zoomAmountValueLabel) {
;C$.$init$.apply(this);
this._l=zoomAmountValueLabel;
this._factor=1.0;
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JLabel$Z', function (zoomAmountValueLabel, percent) {
;C$.$init$.apply(this);
this._l=zoomAmountValueLabel;
if (percent) this._factor=0.01;
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JLabel$D', function (zoomAmountValueLabel, factor) {
;C$.$init$.apply(this);
this._l=zoomAmountValueLabel;
this._factor=factor;
}, 1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
var value=(e.getSource$()).getValue$();
value *= this._factor;
this._l.setText$S(String.valueOf$D(value));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
