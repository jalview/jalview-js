(function(){var P$=Clazz.newPackage("org.jmol.render"),p$1={},I$=[[0,'javajs.util.BS','org.jmol.viewer.Viewer','org.jmol.util.Logger','Thread','org.jmol.viewer.JC','org.jmol.api.Interface','org.jmol.render.ShapeRenderer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RepaintManager", null, null, 'org.jmol.api.JmolRepaintManager');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.shapeManager=null;
this.renderers=null;
this.bsTranslucent=null;
this.holdRepaint=0;
this.repaintPending=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.bsTranslucent=$I$(1).newN$I(37);
this.holdRepaint=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_viewer_Viewer$org_jmol_viewer_ShapeManager', function (vwr, shapeManager) {
this.vwr=vwr;
this.shapeManager=shapeManager;
});

Clazz.newMeth(C$, 'isRepaintPending$', function () {
return this.repaintPending;
});

Clazz.newMeth(C$, 'pushHoldRepaint$S', function (why) {
++this.holdRepaint;
});

Clazz.newMeth(C$, 'popHoldRepaint$Z$S', function (andRepaint, why) {
--this.holdRepaint;
if (this.holdRepaint <= 0) {
this.holdRepaint=0;
if (andRepaint) {
this.repaintPending=true;
p$1.repaintNow$S.apply(this, [why]);
}}});

Clazz.newMeth(C$, 'requestRepaintAndWait$S', function (why) {
var jmol=(!$I$(2).isJS || $I$(2).isSwingJS  ? null : (self.Jmol && Jmol.repaint ? Jmol : null) ||null);
if (jmol == null ) {
try {
p$1.repaintNow$S.apply(this, [why]);
if (!$I$(2).isJS) this.wait$J(this.vwr.g.repaintWaitMs);
if (this.repaintPending) {
$I$(3).error$S("repaintManager requestRepaintAndWait timeout");
this.repaintDone$();
}} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
System.out.println$S("repaintManager requestRepaintAndWait interrupted thread=" + $I$(4).currentThread$().getName$());
} else {
throw e;
}
}
} else {
jmol.repaint(this.vwr.html5Applet, false);
this.repaintDone$();
}});

Clazz.newMeth(C$, 'repaintIfReady$S', function (why) {
if (this.repaintPending) return false;
this.repaintPending=true;
if (this.holdRepaint == 0) p$1.repaintNow$S.apply(this, [why]);
return true;
});

Clazz.newMeth(C$, 'repaintNow$S', function (why) {
if (!this.vwr.haveDisplay) return;
this.vwr.apiPlatform.repaint$O(this.vwr.display);
}, p$1);

Clazz.newMeth(C$, 'repaintDone$', function () {
this.repaintPending=false;
{

}
});

Clazz.newMeth(C$, 'clear$I', function (iShape) {
if (this.renderers == null ) return;
if (iShape >= 0) this.renderers[iShape]=null;
 else for (var i=0; i < 37; ++i) this.renderers[i]=null;

});

Clazz.newMeth(C$, 'getRenderer$I', function (shapeID) {
if (this.renderers[shapeID] != null ) return this.renderers[shapeID];
var className=$I$(5).getShapeClassName$I$Z(shapeID, true) + "Renderer";
var renderer;
if ((renderer=$I$(6).getInterface$S$org_jmol_viewer_Viewer$S(className, this.vwr, "render")) == null ) return null;
renderer.setViewerG3dShapeID$org_jmol_viewer_Viewer$I(this.vwr, shapeID);
return this.renderers[shapeID]=renderer;
}, p$1);

Clazz.newMeth(C$, 'render$org_jmol_util_GData$org_jmol_modelset_ModelSet$Z$IA', function (gdata, modelSet, isFirstPass, navMinMax) {
var g3d=gdata;
if (this.renderers == null ) this.renderers=Clazz.array($I$(7), [37]);
p$1.getAllRenderers.apply(this, []);
try {
var logTime=this.vwr.getBoolean$I(603979934);
g3d.renderBackground$org_jmol_api_JmolRendererInterface(null);
if (isFirstPass) {
this.bsTranslucent.clearAll$();
if (navMinMax != null ) g3d.renderCrossHairs$IA$I$I$javajs_util_P3$F(navMinMax, this.vwr.getScreenWidth$(), this.vwr.getScreenHeight$(), this.vwr.tm.getNavigationOffset$(), this.vwr.tm.navigationDepthPercent);
var band=this.vwr.getRubberBandSelection$();
if (band != null  && g3d.setC$H(this.vwr.cm.colixRubberband) ) g3d.drawRect$I$I$I$I$I$I(band.x, band.y, 0, 0, band.width, band.height);
this.vwr.noFrankEcho=true;
}var msg=null;
for (var i=0; i < 37 && gdata.currentlyRendering ; ++i) {
var shape=this.shapeManager.getShape$I(i);
if (shape == null ) continue;
if (logTime) {
msg="rendering " + $I$(5).getShapeClassName$I$Z(i, false);
$I$(3).startTimer$S(msg);
}if ((isFirstPass || this.bsTranslucent.get$I(i) ) && p$1.getRenderer$I.apply(this, [i]).renderShape$org_jmol_api_JmolRendererInterface$org_jmol_modelset_ModelSet$org_jmol_shape_Shape(g3d, modelSet, shape) ) this.bsTranslucent.set$I(i);
if (logTime) $I$(3).checkTimer$S$Z(msg, false);
}
g3d.renderAllStrings$O(null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
if (this.vwr.async && "Interface".equals$O(e.getMessage$()) ) throw Clazz.new_(Clazz.load('NullPointerException'));
$I$(3).error$S("rendering error? " + e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getAllRenderers', function () {
var isOK=true;
for (var i=0; i < 37; ++i) {
if (this.shapeManager.getShape$I(i) == null  || p$1.getRenderer$I.apply(this, [i]) != null  ) continue;
isOK=this.repaintPending=!this.vwr.async;
}
if (!isOK) throw Clazz.new_(Clazz.load('NullPointerException'));
}, p$1);

Clazz.newMeth(C$, 'renderExport$org_jmol_util_GData$org_jmol_modelset_ModelSet$java_util_Map', function (gdata, modelSet, params) {
var isOK;
this.shapeManager.finalizeAtoms$javajs_util_BS$Z(null, true);
var exporter3D=this.vwr.initializeExporter$java_util_Map(params);
isOK=(exporter3D != null );
if (!isOK) {
$I$(3).error$S("Cannot export " + params.get$O("type"));
return null;
}if (this.renderers == null ) this.renderers=Clazz.array($I$(7), [37]);
p$1.getAllRenderers.apply(this, []);
var msg=null;
try {
var logTime=this.vwr.getBoolean$I(603979934);
exporter3D.renderBackground$org_jmol_api_JmolRendererInterface(exporter3D);
for (var i=0; i < 37; ++i) {
var shape=this.shapeManager.getShape$I(i);
if (shape == null ) continue;
if (logTime) {
msg="rendering " + $I$(5).getShapeClassName$I$Z(i, false);
$I$(3).startTimer$S(msg);
}p$1.getRenderer$I.apply(this, [i]).renderShape$org_jmol_api_JmolRendererInterface$org_jmol_modelset_ModelSet$org_jmol_shape_Shape(exporter3D, modelSet, shape);
if (logTime) $I$(3).checkTimer$S$Z(msg, false);
}
exporter3D.renderAllStrings$O(exporter3D);
msg=exporter3D.finalizeOutput$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
$I$(3).error$S("rendering error? " + e);
} else {
throw e;
}
}
return msg;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:51 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
