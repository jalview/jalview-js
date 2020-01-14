(function(){var P$=Clazz.newPackage("org.jmol.multitouch"),I$=[[0,'javajs.util.P3','org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JmolMultiTouchClientAdapter", null, null, 'org.jmol.multitouch.JmolMultiTouchAdapter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.actionManager=null;
this.isServer=false;
this.vwr=null;
this.screen=null;
this.ptTemp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.screen=Clazz.array(Integer.TYPE, [2]);
this.ptTemp=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'isServer$', function () {
return this.isServer;
});

Clazz.newMeth(C$, 'setMultiTouchClient$org_jmol_viewer_Viewer$org_jmol_multitouch_JmolMultiTouchClient$Z', function (vwr, client, isSimulation) {
this.vwr=vwr;
this.actionManager=client;
vwr.apiPlatform.getFullScreenDimensions$O$IA(vwr.display, this.screen);
if ($I$(2).debugging) $I$(2).debug$S("screen resolution: " + this.screen[0] + " x " + this.screen[1] );
return true;
});

Clazz.newMeth(C$, 'mouseMoved$I$I', function (x, y) {
});

Clazz.newMeth(C$, 'fixXY$F$F$Z', function (x, y, isAbsolute) {
this.ptTemp.set$F$F$F(x * this.screen[0], y * this.screen[1], NaN);
if (isAbsolute) this.vwr.apiPlatform.convertPointFromScreen$O$javajs_util_P3(this.vwr.display, this.ptTemp);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
