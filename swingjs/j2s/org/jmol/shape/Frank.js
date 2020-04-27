(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[[0,'org.jmol.i18n.GT','org.jmol.viewer.Viewer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Frank", null, 'org.jmol.shape.Shape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.frankString="Jmol";
},1);

C$.$fields$=[['F',['scaling'],'I',['frankWidth','frankAscent','frankDescent','x','y','dx','dy'],'S',['frankString'],'O',['currentMetricsFont3d','org.jmol.util.Font','+baseFont3d','+font3d']]]

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
this.font3d=this.vwr.gdata.getFont3DScaled$org_jmol_util_Font$F(this.baseFont3d, imageFontScaling);
this.calcMetrics$();
}});

Clazz.newMeth(C$, 'getShapeState$', function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
