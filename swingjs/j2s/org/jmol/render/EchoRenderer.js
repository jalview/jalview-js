(function(){var P$=Clazz.newPackage("org.jmol.render"),p$1={},I$=[[0,'org.jmol.render.TextRenderer','org.jmol.util.C','org.jmol.util.Txt']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EchoRenderer", null, 'org.jmol.render.LabelsRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'render$', function () {
if (this.vwr.isPreviewOnly) return false;
var echo=this.shape;
this.sppm=(this.vwr.getBoolean$I(603979845) ? this.vwr.getScalePixelsPerAngstrom$Z(true) * 10000 : 0);
this.imageFontScaling=this.vwr.imageFontScaling;
var haveTranslucent=false;
for (var t, $t = echo.objects.values$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
if (!t.visible || t.hidden ) {
continue;
}if (Clazz.instanceOf(t.pointerPt, "org.jmol.modelset.Atom")) {
if (!(t.pointerPt).checkVisible$()) continue;
}if (t.valign == 4) {
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(t.xyz, this.pt0i);
t.setXYZs$I$I$I$I(this.pt0i.x, this.pt0i.y, this.pt0i.z, this.pt0i.z);
}if (t.pymolOffset != null ) t.getPymolScreenOffset$javajs_util_P3$javajs_util_P3i$I$javajs_util_P3$F(t.xyz, this.pt0i, this.zSlab, this.pTemp, this.sppm);
 else if (t.movableZPercent != 2147483647) {
var z=this.vwr.tm.zValueFromPercent$I(t.movableZPercent % 1000);
if (t.valign == 4 && Math.abs(t.movableZPercent) >= 1000 ) z=this.pt0i.z - this.vwr.tm.zValueFromPercent$I(0) + z;
t.setZs$I$I(z, z);
}if (t.pointerPt == null ) {
t.pointer=0;
} else {
t.pointer=1;
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(t.pointerPt, this.pt0i);
t.atomX=this.pt0i.x;
t.atomY=this.pt0i.y;
t.atomZ=this.pt0i.z;
if (t.zSlab == -2147483648) t.zSlab=1;
}if ($I$(1).render$org_jmol_modelset_Text$org_jmol_api_JmolRendererInterface$F$F$Z$FA$FA(t, this.g3d, this.sppm, this.imageFontScaling, false, null, this.xy) && t.valign == 1  && t.align == 12 ) this.vwr.noFrankEcho=false;
if ($I$(2).renderPass2$H(t.bgcolix) || $I$(2).renderPass2$H(t.colix) ) haveTranslucent=true;
}
if (!this.isExport) {
var frameTitle=this.vwr.getFrameTitle$();
if (frameTitle != null  && frameTitle.length$() > 0 ) {
if (this.g3d.setC$H(this.vwr.cm.colixBackgroundContrast)) {
if (frameTitle.indexOf$S("%{") >= 0 || frameTitle.indexOf$S("@{") >= 0 ) frameTitle=$I$(3).formatText$org_jmol_api_JmolViewer$S(this.vwr, frameTitle);
p$1.renderFrameTitle$S.apply(this, [frameTitle]);
}}}return haveTranslucent;
});

Clazz.newMeth(C$, 'renderFrameTitle$S', function (frameTitle) {
this.vwr.gdata.setFontFid$B(this.vwr.gdata.getFontFidFS$S$F("arial", ((24 * this.imageFontScaling)|0)));
var y=(Math.floor(this.vwr.getScreenHeight$() * (this.g3d.isAntialiased$() ? 2 : 1) - 10 * this.imageFontScaling)|0);
var x=(Math.floor(5 * this.imageFontScaling)|0);
this.g3d.drawStringNoSlab$S$org_jmol_util_Font$I$I$I$H(frameTitle, null, x, y, 0, 0);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:15 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
