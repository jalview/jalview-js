(function(){var P$=Clazz.newPackage("org.jmol.multitouch.sparshui"),p$1={},I$=[[0,'java.util.ArrayList','org.jmol.util.Logger','com.sparshui.common.messages.events.TouchEvent','com.sparshui.server.TouchPoint']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SinglePointGesture", null, null, 'com.sparshui.gestures.Gesture');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['_nCurrent','_nMoves','_myId'],'O',['_birth','com.sparshui.server.TouchPoint']]]

Clazz.newMeth(C$, 'getName$', function () {
return "SinglePointGesture";
});

Clazz.newMeth(C$, 'getGestureType$', function () {
return 4;
});

Clazz.newMeth(C$, 'processChange$java_util_List$com_sparshui_server_TouchPoint', function (touchPoints, changedTouchPoint) {
var retEvents=Clazz.new_($I$(1,1));
var nPoints=touchPoints.size$();
if ($I$(2).debugging) {
$I$(2).debug$S("\nSinglePointGesture " + this._myId + " nPoints: " + nPoints );
}if (nPoints > 1) {
if (this._myId != 2147483647) {
this._myId=2147483647;
this._nMoves=1000;
this._nCurrent=0;
retEvents.add$O(Clazz.new_($I$(3,1)));
}return retEvents;
}var id=changedTouchPoint.getID$();
if ($I$(2).debugging) $I$(2,"debug$S",["\nSinglePointGesture id=" + id + " state=" + changedTouchPoint.getState$() + " ncurrent=" + this._nCurrent + " nMoves=" + this._nMoves ]);
switch (changedTouchPoint.getState$()) {
case 0:
this._myId=id;
this._birth=Clazz.new_($I$(4,1).c$$com_sparshui_server_TouchPoint,[changedTouchPoint]);
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
retEvents.add$O(Clazz.new_($I$(3,1).c$$com_sparshui_server_TouchPoint,[changedTouchPoint]));
return retEvents;
});

Clazz.newMeth(C$, 'checkClick$com_sparshui_server_TouchPoint$java_util_List$Z', function (tpNew, retEvents, isDeath) {
var tp;
var dt=tpNew.getTime$() - this._birth.getTime$();
var isSingleClick=(isDeath && dt < 200 );
if (dt < 500 && !isSingleClick ) return false;
this._nMoves+=2;
tp=Clazz.new_($I$(4,1).c$$com_sparshui_server_TouchPoint,[this._birth]);
tp.setState$I(1);
retEvents.add$O(Clazz.new_($I$(3,1).c$$com_sparshui_server_TouchPoint,[tp]));
tp.setState$I(3);
retEvents.add$O(Clazz.new_($I$(3,1).c$$com_sparshui_server_TouchPoint,[tp]));
if (isSingleClick) return true;
tp.setState$I(0);
retEvents.add$O(Clazz.new_($I$(3,1).c$$com_sparshui_server_TouchPoint,[tp]));
if (!isDeath) return true;
tp.setState$I(1);
retEvents.add$O(Clazz.new_($I$(3,1).c$$com_sparshui_server_TouchPoint,[tp]));
tp.setState$I(3);
retEvents.add$O(Clazz.new_($I$(3,1).c$$com_sparshui_server_TouchPoint,[tp]));
return true;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
