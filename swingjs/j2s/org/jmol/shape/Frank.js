(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[[0,'org.jmol.i18n.GT','org.jmol.viewer.Viewer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Frank", null, 'org.jmol.shape.Shape');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.frankString=null;
this.currentMetricsFont3d=null;
this.baseFont3d=null;
this.frankWidth=0;
this.frankAscent=0;
this.frankDescent=0;
this.x=0;
this.y=0;
this.dx=0;
this.dy=0;
this.scaling=0;
this.font3d=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.frankString="Jmol";
}, 1);

Clazz.newMeth(C$, 'initShape$', function () {
this.myType="frank";
this.baseFont3d=this.font3d=this.vwr.gdata.getFont3DFSS$S$S$F("SansSerif", "Plain", 16);
this.calcMetrics$();
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("font" == propertyName) {
var f=value;
if (f.fontSize >= 10 ) {
this.baseFont3d=f;
this.scaling=0;
}}return;
});

Clazz.newMeth(C$, 'wasClicked$I$I', function (x, y) {
var width=this.vwr.getScreenWidth$();
var height=this.vwr.getScreenHeight$();
return (width > 0 && height > 0  && x > width - this.frankWidth - 4   && y > height - this.frankAscent - 4  );
});

Clazz.newMeth(C$, 'checkObjectHovered$I$I$javajs_util_BS', function (x, y, bsVisible) {
if (!this.vwr.getShowFrank$() || !this.wasClicked$I$I(x, y) || !this.vwr.menuEnabled$()  ) return false;
if (this.vwr.gdata.antialiasEnabled && !this.vwr.isSingleThreaded ) {
x<<=1;
y<<=1;
}this.vwr.hoverOnPt$I$I$S$S$javajs_util_T3(x, y, $I$(1).$$S("Click for menu..."), null, null);
return true;
});

Clazz.newMeth(C$, 'calcMetrics$', function () {
if ($I$(2).isJS || $I$(2).isSwingJS ) this.frankString="JSmol";
 else if (this.vwr.isSignedApplet) this.frankString="Jmol_S";
if (this.font3d === this.currentMetricsFont3d ) return;
this.currentMetricsFont3d=this.font3d;
this.frankWidth=this.font3d.stringWidth$S(this.frankString);
this.frankDescent=this.font3d.getDescent$();
this.frankAscent=this.font3d.getAscent$();
});

Clazz.newMeth(C$, 'getFont$F', function (imageFontScaling) {
if (imageFontScaling != this.scaling ) {
this.scaling=imageFontScaling;
this.font3d=this.vwr.gdata.getFont3DScaled$javajs_awt_Font$F(this.baseFont3d, imageFontScaling);
this.calcMetrics$();
}});

Clazz.newMeth(C$, 'getShapeState$', function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-16 15:43:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
