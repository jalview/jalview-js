(function(){var P$=Clazz.newPackage("org.jmol.thread"),I$=[[0,'Thread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HoverWatcherThread", null, 'org.jmol.thread.JmolThread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.actionManager=null;
this.current=null;
this.moved=null;
this.hoverDelay=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_viewer_ActionManager$org_jmol_viewer_MouseState$org_jmol_viewer_MouseState$org_jmol_viewer_Viewer', function (actionManager, current, moved, vwr) {
Clazz.super_(C$, this,1);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-16 07:20:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
