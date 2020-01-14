(function(){var P$=Clazz.newPackage("org.jmol.multitouch.sparshui"),I$=[[0,'org.jmol.util.Logger','org.jmol.api.Interface','Thread','com.sparshui.client.ClientServerConnection']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JmolSparshClientAdapter", null, 'org.jmol.multitouch.JmolMultiTouchClientAdapter', 'com.sparshui.client.SparshClient');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.serverConnection=null;
this.doneHere=false;
this.gestureServer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'dispose$', function () {
if ($I$(1).debugging) $I$(1).debug$S("JmolSparshClientAdapter -- dispose");
this.doneHere=true;
try {
if (this.serverConnection != null ) {
this.serverConnection.close$();
this.serverConnection.interrupt$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
try {
if (this.gestureServer != null ) {
this.gestureServer.dispose$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setMultiTouchClient$org_jmol_viewer_Viewer$org_jmol_multitouch_JmolMultiTouchClient$Z', function (vwr, client, isSimulation) {
C$.superclazz.prototype.setMultiTouchClient$org_jmol_viewer_Viewer$org_jmol_multitouch_JmolMultiTouchClient$Z.apply(this, [vwr, client, isSimulation]);
var err;
this.gestureServer=$I$(2).getInterface$S$org_jmol_viewer_Viewer$S("com.sparshui.server.GestureServer", null, null);
this.gestureServer.startGestureServer$();
try {
$I$(3).sleep$J(1000);
} catch (e1) {
if (Clazz.exceptionOf(e1,"InterruptedException")){
} else {
throw e1;
}
}
this.isServer=((this.gestureServer.getState$() & 1) != 0);
var port=5946;
try {
this.serverConnection=Clazz.new_($I$(4).c$$S$com_sparshui_client_SparshClient,["127.0.0.1", this]);
$I$(1).info$S("SparshUI connection established at 127.0.0.1 port " + port);
return true;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.UnknownHostException")){
var e = e$$;
{
err=e.toString();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
err=e.toString();
}
} else {
throw e$$;
}
}
this.actionManager=null;
$I$(1).error$S("Cannot create SparshUI connection at 127.0.0.1 port " + port + ": " + err );
return false;
});

Clazz.newMeth(C$, 'getAllowedGestures$I', function (groupID) {
return (this.actionManager == null  ? null : this.actionManager.getAllowedGestures$I(groupID));
});

Clazz.newMeth(C$, 'getGroupID$com_sparshui_common_Location', function (location) {
if (this.actionManager == null ) return 0;
this.fixXY$F$F$Z(location.getX$(), location.getY$(), true);
return (this.actionManager == null  ? 0 : this.actionManager.getGroupID$I$I((this.ptTemp.x|0), (this.ptTemp.y|0)));
});

Clazz.newMeth(C$, 'processEvent$I$com_sparshui_common_Event', function (groupID, event) {
if (this.actionManager == null ) return;
if (event == null ) {
var errorType=groupID;
switch (errorType) {
case -1:
$I$(1).info$S("JmolSparshAdapter service lost event...disposing ");
this.dispose$();
break;
case -2:
break;
}
this.actionManager.processMultitouchEvent$I$I$I$I$javajs_util_P3$J(-1, errorType, -1, -1, null, -1);
return;
}var id=0;
var iData=0;
var type=event.getEventType$();
var time=0;
switch (type) {
case 3:
id=(event).getTouchID$();
this.fixXY$F$F$Z((event).getX$(), (event).getY$(), true);
iData=(event).getState$();
time=(event).getTime$();
break;
case 0:
this.fixXY$F$F$Z(((event).getDx$()), (event).getDy$(), false);
iData=(event).getNPoints$();
time=(event).getTime$();
break;
case 4:
this.fixXY$F$F$Z((event).getX$(), (event).getY$(), true);
this.ptTemp.z=(event).getScale$();
time=(event).getTime$();
break;
case 1:
this.fixXY$F$F$Z(((event).getX$()), (event).getY$(), true);
this.ptTemp.z=(event).getRotation$();
time=(event).getTime$();
break;
}
this.actionManager.processMultitouchEvent$I$I$I$I$javajs_util_P3$J(groupID, type, id, iData, this.ptTemp, time);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
