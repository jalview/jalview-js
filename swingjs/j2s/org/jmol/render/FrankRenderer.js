(function(){var P$=Clazz.newPackage("org.jmol.render"),I$=[[0,'org.jmol.viewer.Viewer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FrankRenderer", null, 'org.jmol.render.ShapeRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'render$', function () {
var frank=this.shape;
var allowKeys=this.vwr.getBooleanProperty$S("allowKeyStrokes");
var modelKitMode=this.vwr.getBoolean$I(603983903);
this.colix=(modelKitMode ? 20 : this.vwr.isSignedApplet ? (allowKeys || ($I$(1).isJS || $I$(1).isSwingJS ) && !$I$(1).isWebGL   ? 5 : 10) : allowKeys ? 7 : 12);
if (this.isExport || !this.vwr.getShowFrank$() || !this.g3d.setC$H(this.colix)  ) return false;
if (this.vwr.frankOn && !this.vwr.noFrankEcho ) return this.vwr.noFrankEcho;
this.vwr.noFrankEcho=true;
var imageFontScaling=this.vwr.imageFontScaling;
frank.getFont$F(imageFontScaling);
var dx=((frank.frankWidth + 4 * imageFontScaling)|0);
var dy=frank.frankDescent;
this.g3d.drawStringNoSlab$S$org_jmol_util_Font$I$I$I$H(frank.frankString, frank.font3d, this.vwr.gdata.width - dx, this.vwr.gdata.height - dy, 0, 0);
if (modelKitMode) {
this.g3d.setC$H(12);
var w=10;
var h=26;
this.g3d.fillTextRect$I$I$I$I$I$I(0, 0, 1, 0, w, h * 4);
var kit=this.vwr.getModelkit$Z(false);
var active=kit.getActiveMenu$();
if (active != null ) {
if ("atomMenu".equals$O(active)) {
this.g3d.setC$H(21);
this.g3d.fillTextRect$I$I$I$I$I$I(0, 0, 0, 0, w, h);
} else if ("bondMenu".equals$O(active)) {
this.g3d.setC$H(7);
this.g3d.fillTextRect$I$I$I$I$I$I(0, h, 0, 0, w, h);
} else if ("xtalMenu".equals$O(active)) {
this.g3d.setC$H(8);
this.g3d.fillTextRect$I$I$I$I$I$I(0, h << 1, 0, 0, w, h);
}}}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:15 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
