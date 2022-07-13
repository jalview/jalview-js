(function(){var P$=Clazz.newPackage("org.jmol.multitouch"),p$1={},I$=[[0,'com.sparshui.GestureType','org.jmol.api.Interface','org.jmol.util.Logger','javajs.util.Lst','org.jmol.viewer.binding.Binding']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ActionManagerMT", null, 'org.jmol.viewer.ActionManager', 'org.jmol.multitouch.JmolMultiTouchClient');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.resetNeeded=true;
this.lastLogTime=0;
},1);

C$.$fields$=[['Z',['resetNeeded','doneHere','mouseDown'],'I',['groupID','simulationPhase'],'J',['lastLogTime'],'O',['adapter','org.jmol.multitouch.JmolMultiTouchAdapter','simulator','org.jmol.api.JmolTouchSimulatorInterface']]
,['O',['TWO_POINT_GESTURE','com.sparshui.GestureType','+SINGLE_POINT_GESTURE','eventNames','String[]']]]

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer$S', function (vwr, commandOptions) {
this.isMultiTouch=true;
C$.superclazz.prototype.setViewer$org_jmol_viewer_Viewer$S.apply(this, [vwr, commandOptions]);
this.mouseWheelFactor=1.02;
var isSparsh=(commandOptions.indexOf$S("-multitouch-sparshui") >= 0);
var isSimulated=(commandOptions.indexOf$S("-multitouch-sparshui-simulated") >= 0);
var isJNI=(commandOptions.indexOf$S("-multitouch-jni") >= 0);
var isMP=(commandOptions.indexOf$S("-multitouch-mp") >= 0);
var isTablet=(commandOptions.indexOf$S("-multitouch-tab") >= 0);
if (isMP || isTablet ) {
this.haveMultiTouchInput=true;
this.groupID=0;
} else {
this.groupID=(((Math.random() * 16777215)|0)) << 4;
}if (isTablet) return;
var className=(isSparsh ? "multitouch.sparshui.JmolSparshClientAdapter" : "multitouch.jni.JmolJniClientAdapter");
this.adapter=$I$(2).getOption$S$org_jmol_viewer_Viewer$S(className, null, null);
$I$(3,"info$S",["ActionManagerMT SparshUI groupID=" + this.groupID]);
$I$(3,"info$S",["ActionManagerMT adapter = " + this.adapter]);
if (isSparsh) {
p$1.startSparshUIService$Z.apply(this, [isSimulated]);
} else if (isJNI) {
this.adapter.setMultiTouchClient$org_jmol_viewer_Viewer$org_jmol_multitouch_JmolMultiTouchClient$Z(vwr, this, false);
}this.setBinding$org_jmol_viewer_binding_Binding(this.b);
});

Clazz.newMeth(C$, 'startSparshUIService$Z', function (isSimulated) {
this.haveMultiTouchInput=false;
if (this.adapter == null ) return;
if (this.simulator != null ) {
this.simulator.dispose$();
this.simulator=null;
}if (isSimulated) $I$(3).error$S("ActionManagerMT -- for now just using touch simulation.\nPress CTRL-LEFT and then draw two traces on the window.");
this.isMultiTouchClient=this.adapter.setMultiTouchClient$org_jmol_viewer_Viewer$org_jmol_multitouch_JmolMultiTouchClient$Z(this.vwr, this, isSimulated);
this.isMultiTouchServer=this.adapter.isServer$();
if (isSimulated) {
this.simulator=$I$(2).getInterface$S$org_jmol_viewer_Viewer$S("com.sparshui.inputdevice.JmolTouchSimulator", null, null);
if (this.simulator != null ) {
$I$(3).info$S("ActionManagerMT simulating SparshUI");
this.simulator.startSimulator$O(this.vwr.display);
}}}, p$1);

Clazz.newMeth(C$, 'setBinding$org_jmol_viewer_binding_Binding', function (newBinding) {
this.b=newBinding;
this.b.unbindMouseAction$I(4100);
if (this.simulator != null  && this.b != null  ) {
this.b.unbindName$I$S(4370, null);
this.b.bindAction$I$I(4370, 15);
}});

Clazz.newMeth(C$, 'clear$', function () {
this.simulationPhase=0;
this.resetNeeded=true;
C$.superclazz.prototype.clear$.apply(this, []);
});

Clazz.newMeth(C$, 'dispose$', function () {
if ($I$(3).debugging) $I$(3).debug$S("ActionManagerMT -- dispose");
this.doneHere=true;
if (this.adapter != null ) this.adapter.dispose$();
if (this.simulator != null ) this.simulator.dispose$();
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'getEventName$I', function (i) {
try {
return C$.eventNames[i];
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return "?";
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getAllowedGestures$I', function (groupID) {
if (groupID != this.groupID || !this.vwr.getBoolean$I(603979784) ) return null;
var list=Clazz.new_($I$(4,1));
list.addLast$O(C$.TWO_POINT_GESTURE);
list.addLast$O(C$.SINGLE_POINT_GESTURE);
return list;
});

Clazz.newMeth(C$, 'getGroupID$I$I', function (x, y) {
var gid=0;
try {
if (this.vwr.hasFocus$() && x >= 0  && y >= 0  && x < this.vwr.getScreenWidth$()  && y < this.vwr.getScreenHeight$() ) gid=this.groupID;
if (this.resetNeeded) {
gid|=268435456;
this.resetNeeded=false;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return gid;
});

Clazz.newMeth(C$, 'processMultitouchEvent$I$I$I$I$javajs_util_P3$J', function (groupID, eventType, touchID, iData, pt, time) {
if ($I$(3).debugging) $I$(3,"debug$S",[this + " time=" + time + " groupID=" + groupID + " " + Integer.toHexString$I(groupID) + " eventType=" + eventType + "(" + C$.getEventName$I(eventType) + ") iData=" + iData + " pt=" + pt ]);
switch (eventType) {
case 0:
if (iData == 2) {
this.setMotion$I$Z(13, true);
this.vwr.translateXYBy$I$I((pt.x|0), (pt.y|0));
p$1.logEvent$S$javajs_util_P3.apply(this, ["Drag", pt]);
}break;
case -2:
if (this.simulator == null ) this.haveMultiTouchInput=false;
$I$(3).error$S("SparshUI reports no driver present");
this.vwr.log$S("SparshUI reports no driver present -- setting haveMultiTouchInput FALSE");
break;
case 1:
this.setMotion$I$Z(13, true);
this.vwr.rotateZBy$I$I$I((pt.z|0), 2147483647, 2147483647);
p$1.logEvent$S$javajs_util_P3.apply(this, ["Rotate", pt]);
break;
case -1:
this.vwr.log$S("Jmol SparshUI client reports service lost -- " + (this.doneHere ? "not " : "") + " restarting" );
if (!this.doneHere) p$1.startSparshUIService$Z.apply(this, [this.simulator != null ]);
break;
case 3:
this.haveMultiTouchInput=true;
if (touchID == 2147483647) {
this.mouseDown=false;
this.clearMouseInfo$();
break;
}switch (iData) {
case 0:
this.mouseDown=true;
C$.superclazz.prototype.mouseAction$I$J$I$I$I$I.apply(this, [4, time, (pt.x|0), (pt.y|0), 0, 16]);
break;
case 2:
C$.superclazz.prototype.mouseAction$I$J$I$I$I$I.apply(this, [this.mouseDown ? 1 : 0, time, (pt.x|0), (pt.y|0), 0, 16]);
break;
case 1:
this.mouseDown=false;
C$.superclazz.prototype.mouseAction$I$J$I$I$I$I.apply(this, [5, time, (pt.x|0), (pt.y|0), 0, 16]);
break;
case 3:
C$.superclazz.prototype.mouseAction$I$J$I$I$I$I.apply(this, [2, time, (pt.x|0), (pt.y|0), 1, 16]);
break;
}
break;
case 4:
var scale=pt.z;
if (scale == -1  || scale == 1  ) {
this.zoomByFactor$I$I$I((scale|0), 2147483647, 2147483647);
p$1.logEvent$S$javajs_util_P3.apply(this, ["Zoom", pt]);
}break;
}
});

Clazz.newMeth(C$, 'logEvent$S$javajs_util_P3', function (type, pt) {
if (!this.vwr.g.logGestures) return;
var time=System.currentTimeMillis$();
if (time - this.lastLogTime > 10000) {
this.vwr.log$S("$NOW$ multitouch " + type + " pt= " + pt );
this.lastLogTime=time;
}}, p$1);

Clazz.newMeth(C$, 'mouseAction$I$J$I$I$I$I', function (mode, time, x, y, count, modifiers) {
switch (mode) {
case 0:
if (this.haveMultiTouchInput) return;
this.adapter.mouseMoved$I$I(x, y);
break;
case 3:
case 2:
break;
case 1:
if (this.simulator != null  && this.simulationPhase > 0 ) {
this.setCurrent$J$I$I$I(time, x, y, modifiers);
this.simulator.mouseDragged$J$I$I(time, x, y);
return;
}break;
case 4:
if (this.simulator != null ) {
var maction=$I$(5).getMouseAction$I$I$I(1, modifiers, mode);
if (this.b.isBound$I$I(maction, 15)) {
this.setCurrent$J$I$I$I(0, x, y, modifiers);
this.vwr.setFocus$();
if (this.simulationPhase++ == 0) this.simulator.startRecording$();
this.simulator.mousePressed$J$I$I(time, x, y);
return;
}this.simulationPhase=0;
}break;
case 5:
if (this.simulator != null  && this.simulationPhase > 0 ) {
this.setCurrent$J$I$I$I(time, x, y, modifiers);
this.vwr.spinXYBy$I$I$F(0, 0, 0);
this.simulator.mouseReleased$J$I$I(time, x, y);
if (this.simulationPhase >= 2) {
this.resetNeeded=true;
this.simulator.endRecording$();
this.simulationPhase=0;
}return;
}break;
}
if (!this.haveMultiTouchInput) C$.superclazz.prototype.mouseAction$I$J$I$I$I$I.apply(this, [mode, time, x, y, count, modifiers]);
});

Clazz.newMeth(C$, 'getDegrees$F$Z', function (delta, isX) {
return delta / (isX ? this.vwr.getScreenWidth$() : this.vwr.getScreenHeight$()) * 180 * this.mouseDragFactor;
});

C$.$static$=function(){C$.$static$=0;
C$.TWO_POINT_GESTURE=Clazz.new_($I$(1,1).c$$S,["org.jmol.multitouch.sparshui.TwoPointGesture"]);
C$.SINGLE_POINT_GESTURE=Clazz.new_($I$(1,1).c$$S,["org.jmol.multitouch.sparshui.SinglePointGesture"]);
C$.eventNames=Clazz.array(String, -1, ["drag", "rotate", "spin", "touch", "zoom", "double-click", "flick", "relative-drag", "click"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
