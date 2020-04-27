(function(){var P$=Clazz.newPackage("org.jmol.multitouch.sparshui"),p$1={},I$=[[0,'java.util.ArrayList','com.sparshui.common.Location','org.jmol.util.Logger','com.sparshui.common.messages.events.ZoomEvent','com.sparshui.common.messages.events.RotateEvent','com.sparshui.common.messages.events.DragEvent']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TwoPointGesture", null, null, 'com.sparshui.gestures.Gesture');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._myType=9;
this._offset=null;
this._offsetCentroid=null;
this._traces1=Clazz.new_($I$(1,1));
this._traces2=Clazz.new_($I$(1,1));
this._id1=-1;
this._id2=-1;
this._nTraces=0;
},1);

C$.$fields$=[['F',['_scale','_rotation'],'I',['_myType','_id1','_id2','_nTraces'],'J',['time'],'O',['_offset','com.sparshui.common.Location','+_offsetCentroid','_traces1','java.util.List','+_traces2']]]

Clazz.newMeth(C$, 'getName$', function () {
return "TwoPointGesture";
});

Clazz.newMeth(C$, 'getGestureType$', function () {
return this._myType;
});

Clazz.newMeth(C$, 'processChange$java_util_List$com_sparshui_server_TouchPoint', function (touchPoints, changedPoint) {
return p$1.processChangeSync$com_sparshui_server_TouchPoint.apply(this, [changedPoint]);
});

Clazz.newMeth(C$, 'processChangeSync$com_sparshui_server_TouchPoint', function (changedPoint) {
var events=null;
this.time=changedPoint.getTime$();
switch (changedPoint.getState$()) {
case 0:
events=this.processBirth$com_sparshui_server_TouchPoint(changedPoint);
break;
case 2:
events=this.processMove$com_sparshui_server_TouchPoint(changedPoint);
break;
case 1:
events=this.processDeath$com_sparshui_server_TouchPoint(changedPoint);
break;
}
return (events != null ) ? events : Clazz.new_($I$(1,1));
}, p$1);

Clazz.newMeth(C$, 'processBirth$com_sparshui_server_TouchPoint', function (touchPoint) {
var location=touchPoint.getLocation$();
var id=touchPoint.getID$();
switch (this._nTraces) {
case 0:
this._traces1.clear$();
this._traces1.add$O($I$(2).pixelLocation$com_sparshui_common_Location(location));
this._id1=id;
this._nTraces=1;
break;
case 1:
this._traces2.clear$();
this._traces2.add$O($I$(2).pixelLocation$com_sparshui_common_Location(location));
this._id2=id;
var o=this._traces1.get$I(this._traces1.size$() - 1);
this._traces1.clear$();
this._traces1.add$O(o);
this._nTraces=2;
break;
default:
$I$(3).error$S("TwoPointGesture birth ignored!");
}
return null;
});

Clazz.newMeth(C$, 'processDeath$com_sparshui_server_TouchPoint', function (touchPoint) {
var id=touchPoint.getID$();
switch (this._nTraces) {
case 0:
$I$(3).error$S("TwoPointGesture death -- no traces! " + id);
break;
case 1:
this._nTraces=0;
break;
case 2:
if (id == this._id1) {
this._id1=this._id2;
var v=this._traces1;
this._traces1=this._traces2;
this._traces2=v;
this._traces2.clear$();
this._id2=-1;
this._nTraces=1;
} else if (id == this._id2) {
this._traces2.clear$();
this._id2=-1;
this._nTraces=1;
} else {
this._nTraces=0;
}break;
}
if (this._nTraces == 0) {
this._traces1.clear$();
this._traces2.clear$();
this._id1=this._id2=-1;
}this._offsetCentroid=null;
this._myType=9;
return null;
});

Clazz.newMeth(C$, 'processMove$com_sparshui_server_TouchPoint', function (touchPoint) {
var events=Clazz.new_($I$(1,1));
if (!p$1.updateLocations$com_sparshui_server_TouchPoint.apply(this, [touchPoint])) return events;
if (this._myType == 9) p$1.checkType.apply(this, []);
var locationLast=$I$(2).screenLocation$com_sparshui_common_Location(this._offsetCentroid);
if (this._myType == 9 || !p$1.updateParameters.apply(this, []) ) return events;
var location=$I$(2).screenLocation$com_sparshui_common_Location(this._offsetCentroid);
var event=null;
switch (this._myType) {
case 5:
event=Clazz.new_($I$(4,1).c$$F$com_sparshui_common_Location$J,[this._scale, location, this.time]);
break;
case 2:
event=Clazz.new_($I$(5,1).c$$F$com_sparshui_common_Location$J,[this._rotation, location, this.time]);
break;
case 1:
if (locationLast != null ) {
var dxy=locationLast.getVector$com_sparshui_common_Location(location);
event=Clazz.new_($I$(6,1).c$$F$F$I$J,[dxy.x, dxy.y, 2, this.time]);
}break;
}
if (event != null ) events.add$O(event);
return events;
});

Clazz.newMeth(C$, 'updateLocations$com_sparshui_server_TouchPoint', function (touchPoint) {
var location=(function(a,f){return f.apply(null,a)})([touchPoint.getLocation$()],$I$(2).pixelLocation$com_sparshui_common_Location);
var id=touchPoint.getID$();
if (id == this._id1) {
if (this._traces1.size$() > 2) {
while (this._traces1.size$() > 2){
this._traces1.remove$I(0);
}
}this._traces1.add$O(location);
} else if (id == this._id2) {
if (this._traces2.size$() > 2) {
while (this._traces2.size$() > 2){
this._traces2.remove$I(0);
}
}this._traces2.add$O(location);
} else {
$I$(3).error$S("TwoPointGesture updateLocation error: no trace with id " + id);
return false;
}return (this._nTraces == 2 && this._traces1.size$() == 3  && this._traces2.size$() == 3 );
}, p$1);

Clazz.newMeth(C$, 'checkType', function () {
var loc10=this._traces1.get$I(0);
var loc11=this._traces1.get$I(this._traces1.size$() - 1);
var v1=loc10.getVector$com_sparshui_common_Location(loc11);
var d1=v1.length$();
var loc20=this._traces2.get$I(0);
var loc21=this._traces2.get$I(this._traces2.size$() - 1);
var v2=loc20.getVector$com_sparshui_common_Location(loc21);
var d2=v2.length$();
if (d1 < 3  || d2 < 3  ) return;
v1.normalize$();
v2.normalize$();
var cos12=(v1.dot$javajs_util_T3(v2));
if (cos12 > 0.8 ) {
this._myType=1;
} else if (cos12 < -0.8 ) {
this._myType=5;
}}, p$1);

Clazz.newMeth(C$, 'updateParameters', function () {
var loc10=this._traces1.get$I(0);
var loc20=this._traces2.get$I(0);
var loc11=this._traces1.get$I(this._traces1.size$() - 1);
var loc21=this._traces2.get$I(this._traces2.size$() - 1);
var d1=loc10.getDistance$com_sparshui_common_Location(loc11);
var d2=loc20.getDistance$com_sparshui_common_Location(loc21);
var d12=loc11.getDistance$com_sparshui_common_Location(loc21);
if (d1 < 2  && d2 < 2  ) return false;
var v00=loc10.getVector$com_sparshui_common_Location(loc20);
var d00=v00.length$();
v00.normalize$();
switch (this._myType) {
case 2:
this._offsetCentroid=$I$(2).getCenter$com_sparshui_common_Location$com_sparshui_common_Location(loc10, loc20);
var v1;
var v2;
if (d2 < 2 ) {
v1=loc20.getVector$com_sparshui_common_Location(loc10);
v2=loc20.getVector$com_sparshui_common_Location(loc11);
} else {
v1=loc10.getVector$com_sparshui_common_Location(loc20);
v2=loc10.getVector$com_sparshui_common_Location(loc21);
}v1.cross$javajs_util_T3$javajs_util_T3(v1, v2);
this._rotation=(v1.z < 0  ? 1 : -1);
return true;
case 5:
if (Math.abs(d12 - d00) < 2 ) return false;
this._scale=(d12 < d00  ? -1 : 1);
this._offsetCentroid=(function(a,f){return f.apply(null,a)})([loc10, loc20, d1 / (d1 + d2)],$I$(2).getCentroid$com_sparshui_common_Location$com_sparshui_common_Location$F);
return true;
case 1:
this._offsetCentroid=$I$(2).getCenter$com_sparshui_common_Location$com_sparshui_common_Location(loc11, loc21);
return true;
default:
return false;
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:14 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
