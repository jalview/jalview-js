(function(){var P$=Clazz.newPackage("org.jmol.multitouch.sparshui"),p$1={},I$=[[0,'java.util.ArrayList','org.jmol.util.Logger','com.sparshui.common.messages.events.TouchEvent','com.sparshui.server.TouchPoint']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SinglePointGesture", null, null, 'com.sparshui.gestures.Gesture');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._nCurrent=0;
this._nMoves=0;
this._myId=0;
this._birth=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return "SinglePointGesture";
});

Clazz.newMeth(C$, 'getGestureType$', function () {
return 4;
});

Clazz.newMeth(C$, 'processChange$java_util_List$com_sparshui_server_TouchPoint', function (touchPoints, changedTouchPoint) {
var retEvents=Clazz.new_($I$(1));
var nPoints=touchPoints.size$();
if ($I$(2).debugging) {
$I$(2).debug$S("\nSinglePointGesture " + this._myId + " nPoints: " + nPoints );
}if (nPoints > 1) {
if (this._myId != 2147483647) {
this._myId=2147483647;
this._nMoves=1000;
this._nCurrent=0;
retEvents.add$TE(Clazz.new_($I$(3)));
}return retEvents;
}var id=changedTouchPoint.getID$();
if ($I$(2).debugging) $I$(2).debug$S("\nSinglePointGesture id=" + id + " state=" + changedTouchPoint.getState$() + " ncurrent=" + this._nCurrent + " nMoves=" + this._nMoves );
switch (changedTouchPoint.getState$()) {
case 0:
this._myId=id;
this._birth=Clazz.new_($I$(4).c$$com_sparshui_server_TouchPoint,[changedTouchPoint]);
this._nCurrent=1;
this._nMoves=0;
break;
case 2:
if (id != this._myId) return retEvents;
switch (++this._nMoves) {
case 2:
if (p$1.checkClick$com_sparshui_server_TouchPoint$java_util_List$Z.apply(this, [changedTouchPoint, retEvents, false])) return retEvents;
break;
}
break;
case 1:
if (id != this._myId) return retEvents;
this._nCurrent=0;
if (this._nMoves < 2 && p$1.checkClick$com_sparshui_server_TouchPoint$java_util_List$Z.apply(this, [changedTouchPoint, retEvents, true]) ) return retEvents;
break;
}
retEvents.add$TE(Clazz.new_($I$(3).c$$com_sparshui_server_TouchPoint,[changedTouchPoint]));
return retEvents;
});

Clazz.newMeth(C$, 'checkClick$com_sparshui_server_TouchPoint$java_util_List$Z', function (tpNew, retEvents, isDeath) {
var tp;
var dt=tpNew.getTime$() - this._birth.getTime$();
var isSingleClick=(isDeath && dt < 200 );
if (dt < 500 && !isSingleClick ) return false;
this._nMoves+=2;
tp=Clazz.new_($I$(4).c$$com_sparshui_server_TouchPoint,[this._birth]);
tp.setState$I(1);
retEvents.add$TE(Clazz.new_($I$(3).c$$com_sparshui_server_TouchPoint,[tp]));
tp.setState$I(3);
retEvents.add$TE(Clazz.new_($I$(3).c$$com_sparshui_server_TouchPoint,[tp]));
if (isSingleClick) return true;
tp.setState$I(0);
retEvents.add$TE(Clazz.new_($I$(3).c$$com_sparshui_server_TouchPoint,[tp]));
if (!isDeath) return true;
tp.setState$I(1);
retEvents.add$TE(Clazz.new_($I$(3).c$$com_sparshui_server_TouchPoint,[tp]));
tp.setState$I(3);
retEvents.add$TE(Clazz.new_($I$(3).c$$com_sparshui_server_TouchPoint,[tp]));
return true;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:53 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
