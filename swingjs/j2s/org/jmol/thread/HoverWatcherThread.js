(function(){var P$=Clazz.newPackage("org.jmol.thread"),I$=[[0,'Thread']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HoverWatcherThread", null, 'org.jmol.thread.JmolThread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['hoverDelay'],'O',['actionManager','org.jmol.viewer.ActionManager','current','org.jmol.viewer.MouseState','+moved']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_ActionManager$org_jmol_viewer_MouseState$org_jmol_viewer_MouseState$org_jmol_viewer_Viewer', function (actionManager, current, moved, vwr) {
Clazz.super_(C$, this);
this.setViewer$org_jmol_viewer_Viewer$S(vwr, "HoverWatcher");
this.actionManager=actionManager;
this.current=current;
this.moved=moved;
this.start$();
}, 1);

Clazz.newMeth(C$, 'run1$I', function (mode) {
while (true)switch (mode) {
case -1:
if (!this.isJS) $I$(1).currentThread$().setPriority$I(1);
mode=0;
break;
case 0:
this.hoverDelay=this.vwr.getHoverDelay$();
if (this.stopped || this.hoverDelay <= 0  || !this.runSleep$I$I(this.hoverDelay, 1) ) return;
mode=1;
break;
case 1:
if (this.moved.is$org_jmol_viewer_MouseState(this.current)) {
this.currentTime=System.currentTimeMillis$();
var howLong=((this.currentTime - this.moved.time)|0);
if (howLong > (this.vwr.acm.zoomTrigger ? 100 : this.hoverDelay) && !this.stopped ) {
this.actionManager.checkHover$();
}}mode=0;
break;
}

});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
