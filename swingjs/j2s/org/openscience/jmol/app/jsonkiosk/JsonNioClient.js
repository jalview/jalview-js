(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jsonkiosk"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "JsonNioClient", function(){
});
C$.$classes$=[['TouchHandler',9]];
;
(function(){/*c*/var C$=Clazz.newClass(P$.JsonNioClient, "TouchHandler", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['wasSpinOn','isPaused'],'I',['nFast'],'J',['previousMoveTime','swipeStartTime','latestMoveTime']]]

Clazz.newMeth(C$, 'pauseScript$org_jmol_viewer_Viewer$Z', function (vwr, isPause) {
var script;
if (isPause) {
this.wasSpinOn=vwr.getBooleanProperty$S("spinOn");
script="pause; save orientation \'JsonNios-save\'; spin off";
this.isPaused=true;
} else {
script="restore orientation 'JsonNios-save' 1; resume; spin " + this.wasSpinOn;
this.wasSpinOn=false;
}this.isPaused=isPause;
vwr.evalString$S(script);
});

Clazz.newMeth(C$, 'checkPaused$org_jmol_viewer_Viewer', function (vwr) {
var now=System.currentTimeMillis$();
if (this.isPaused && now - this.latestMoveTime > 5000 ) this.pauseScript$org_jmol_viewer_Viewer$Z(vwr, false);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
