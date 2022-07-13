(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),p$1={},I$=[[0,'Thread','javax.swing.Timer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControleurBlinkingThread", null, 'Thread', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._increasing=true;
this._active=false;
this.START=0;
this.LOOP=1;
this.STOP=-1;
this.nextMode=0;
},1);

C$.$fields$=[['Z',['_increasing','_active'],'D',['_minVal','_maxVal','_val','_incr'],'I',['START','LOOP','STOP','nextMode'],'J',['_period'],'O',['_parent','fr.orsay.lri.varna.VARNAPanel','timer','javax.swing.Timer']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
C$.c$$fr_orsay_lri_varna_VARNAPanel$J$D$D$D$D.apply(this, [vp, 50, 0, 1.0, 0.0, 0.2]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel$J$D$D$D$D', function (vp, period, minVal, maxVal, val, incr) {
Clazz.super_(C$, this);
this._parent=vp;
this._period=period;
this._minVal=minVal;
this._maxVal=maxVal;
this._incr=incr;
}, 1);

Clazz.newMeth(C$, 'setActive$Z', function (b) {
if (this._active == b ) {
} else {
this._active=b;
if (this._active) {
this.interrupt$();
}}});

Clazz.newMeth(C$, 'getActive$', function () {
return this._active;
});

Clazz.newMeth(C$, 'getVal$', function () {
return this._val;
});

Clazz.newMeth(C$, 'interrupt$', function () {
C$.superclazz.prototype.interrupt$.apply(this, []);
p$1.stopTimer.apply(this, []);
this.run$();
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.run$();
});

Clazz.newMeth(C$, 'run$', function () {
var delay=0;
while (true){
try {
switch (this.nextMode) {
case 0:
if (this._active) {
delay=this._period;
this.nextMode=1;
} else {
delay=10000;
this.nextMode=0;
}p$1.startTimer$J.apply(this, [delay]);
return;
case -1:
break;
case 1:
if (this._increasing) {
this._val=Math.min(this._val + this._incr, this._maxVal);
if (this._val == this._maxVal ) {
this._increasing=false;
}} else {
this._val=Math.max(this._val - this._incr, this._minVal);
if (this._val == this._minVal ) {
this._increasing=true;
}}this._parent.repaint$();
this.nextMode=0;
continue;
}
$I$(1).sleep$J(0);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
break;
}
});

Clazz.newMeth(C$, 'startTimer$J', function (delay) {
p$1.stopTimer.apply(this, []);
this.timer=Clazz.new_([(delay|0), this],$I$(2,1).c$$I$java_awt_event_ActionListener);
this.timer.setRepeats$Z(false);
this.timer.start$();
}, p$1);

Clazz.newMeth(C$, 'stopTimer', function () {
if (this.timer != null ) {
this.timer.stop$();
this.timer=null;
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
