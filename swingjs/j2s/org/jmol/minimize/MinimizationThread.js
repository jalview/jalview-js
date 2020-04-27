(function(){var P$=Clazz.newPackage("org.jmol.minimize"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MinimizationThread", null, 'org.jmol.thread.JmolThread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['minimizer','org.jmol.minimize.Minimizer']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setManager$O$org_jmol_viewer_Viewer$O', function (manager, vwr, options) {
this.minimizer=manager;
this.setViewer$org_jmol_viewer_Viewer$S(vwr, "MinimizationThread");
return 0;
});

Clazz.newMeth(C$, 'run1$I', function (mode) {
while (true)switch (mode) {
case -1:
this.lastRepaintTime=this.startTime;
this.haveReference=true;
if (!this.minimizer.startMinimization$()) return;
this.vwr.startHoverWatcher$Z(false);
mode=0;
break;
case 0:
if (!this.minimizer.minimizationOn$() || this.checkInterrupted$org_jmol_thread_JmolThread(this.minimizer.getThread$()) ) {
mode=-2;
break;
}this.currentTime=System.currentTimeMillis$();
var elapsed=((this.currentTime - this.lastRepaintTime)|0);
var sleepTime=33 - elapsed;
if (!this.runSleep$I$I(sleepTime, 1)) return;
mode=1;
break;
case 1:
this.lastRepaintTime=this.currentTime=System.currentTimeMillis$();
mode=(this.minimizer.stepMinimization$() ? 0 : -2);
break;
case -2:
this.minimizer.endMinimization$();
this.vwr.startHoverWatcher$Z(true);
return;
}

});

Clazz.newMeth(C$, 'oops$Exception', function (e) {
if (this.minimizer.minimizationOn$()) (function(a,f){return f.apply(null,a)})([e.toString()],$I$(1).error$S);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:11 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
