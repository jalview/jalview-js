(function(){var P$=Clazz.newPackage("org.jmol.script"),p$1={},I$=[[0,'org.jmol.util.Logger']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScriptQueueThread", null, 'org.jmol.thread.JmolThread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.startedByCommandThread=false;
},1);

C$.$fields$=[['Z',['startedByCommandThread'],'I',['pt'],'O',['scriptManager','org.jmol.script.ScriptManager']]]

Clazz.newMeth(C$, 'c$$org_jmol_script_ScriptManager$org_jmol_viewer_Viewer$Z$I', function (scriptManager, vwr, startedByCommandThread, pt) {
Clazz.super_(C$, this);
this.setViewer$org_jmol_viewer_Viewer$S(vwr, "QueueThread" + pt);
this.scriptManager=scriptManager;
this.vwr=vwr;
this.startedByCommandThread=startedByCommandThread;
this.pt=pt;
}, 1);

Clazz.newMeth(C$, 'run1$I', function (mode) {
while (true)switch (mode) {
case -1:
mode=0;
break;
case 0:
if (this.stopped || this.scriptManager.getScriptQueue$().size$() == 0 ) {
mode=-2;
break;
}if (!p$1.runNextScript.apply(this, []) && !this.runSleep$I$I(100, 0) ) return;
break;
case -2:
this.scriptManager.queueThreadFinished$I(this.pt);
return;
}

});

Clazz.newMeth(C$, 'runNextScript', function () {
var queue=this.scriptManager.getScriptQueue$();
if (queue.size$() == 0) return false;
var scriptItem=this.scriptManager.getScriptItem$Z$Z(false, this.startedByCommandThread);
if (scriptItem == null ) return false;
var script=scriptItem.get$I(0);
var statusList=scriptItem.get$I(1);
var returnType=scriptItem.get$I(2);
var isQuiet=(scriptItem.get$I(3)).booleanValue$();
if ($I$(1).debugging) {
$I$(1,"debug$S",["Queue[" + this.pt + "][" + queue.size$() + "] scripts; running: " + script ]);
}queue.removeItemAt$I(0);
this.vwr.evalStringWaitStatusQueued$S$S$S$Z$Z(returnType, script, statusList, isQuiet, true);
if (queue.size$() == 0) {
return false;
}return true;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:44 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
