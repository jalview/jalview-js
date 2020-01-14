(function(){var P$=Clazz.newPackage("org.jmol.render"),I$=[[0,'org.jmol.viewer.Viewer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FrankRenderer", null, 'org.jmol.render.ShapeRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'render$', function () {
var frank=this.shape;
var allowKeys=this.vwr.getBooleanProperty$S("allowKeyStrokes");
var modelKitMode=this.vwr.getBoolean$I(603979883);
this.colix=(modelKitMode ? 20 : this.vwr.isSignedApplet ? (allowKeys || $I$(1).isJS && !$I$(1).isWebGL   ? 5 : 10) : allowKeys ? 7 : 12);
if (this.isExport || !this.vwr.getShowFrank$() || !this.g3d.setC$H(this.colix)  ) return false;
if (this.vwr.frankOn && !this.vwr.noFrankEcho ) return this.vwr.noFrankEcho;
this.vwr.noFrankEcho=true;
var imageFontScaling=this.vwr.imageFontScaling;
frank.getFont$F(imageFontScaling);
var dx=((frank.frankWidth + 4 * imageFontScaling)|0);
var dy=frank.frankDescent;
this.g3d.drawStringNoSlab$S$javajs_awt_Font$I$I$I$H(frank.frankString, frank.font3d, this.vwr.gdata.width - dx, this.vwr.gdata.height - dy, 0, 0);
if (modelKitMode) {
this.g3d.fillTextRect$I$I$I$I$I$I(0, 0, 0, 0, dy * 2, (dx * 3/2|0));
}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
