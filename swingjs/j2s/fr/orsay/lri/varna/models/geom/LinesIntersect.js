(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.geom"),I$=[[0,'java.awt.geom.Line2D']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LinesIntersect");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'linesIntersect$D$D$D$D$D$D$D$D', function (x1, y1, x2, y2, x3, y3, x4, y4) {
var denom=(y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
if (denom == 0.0 ) {
return false;
}var ua=((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
var ub=((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;
return (ua >= 0.0  && ua <= 1.0   && ub >= 0.0   && ub <= 1.0  );
}, 1);

Clazz.newMeth(C$, 'linesIntersect$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double', function (p1, p2, p3, p4) {
return C$.linesIntersect$D$D$D$D$D$D$D$D(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
}, 1);

Clazz.newMeth(C$, 'linesIntersect$java_awt_geom_Line2D_Double$java_awt_geom_Line2D_Double', function (line1, line2) {
return C$.linesIntersect$D$D$D$D$D$D$D$D(line1.x1, line1.y1, line1.x2, line1.y2, line2.x1, line2.y1, line2.x2, line2.y2);
}, 1);

Clazz.newMeth(C$, 'test$D$D$D$D$D$D$D$D$Z', function (x1, y1, x2, y2, x3, y3, x4, y4, expectedResult) {
var a=C$.linesIntersect$D$D$D$D$D$D$D$D(x1, y1, x2, y2, x3, y3, x4, y4);
var b=$I$(1).linesIntersect$D$D$D$D$D$D$D$D(x1, y1, x2, y2, x3, y3, x4, y4);
System.out.println$S("ours says " + a + " which is " + (a == expectedResult  ? "correct" : "INCORRECT") + " / Line2D.Double says " + b + " which is " + (b == expectedResult  ? "correct" : "INCORRECT") );
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
C$.test$D$D$D$D$D$D$D$D$Z(179.2690296114372, 1527.2309703885628, 150.9847583639753, 1498.946699141101, 94.4162158690515, 1442.378156646177, 66.1319446215896, 1414.0938853987152, false);
C$.test$D$D$D$D$D$D$D$D$Z(0, 0, 0, 0, 1, 1, 1, 1, false);
C$.test$D$D$D$D$D$D$D$D$Z(0, 0, 0.5, 0.5, 1, 1, 2, 2, false);
C$.test$D$D$D$D$D$D$D$D$Z(0, 0, 2, 2, 0, 2, 2, 0, true);
C$.test$D$D$D$D$D$D$D$D$Z(0, 0, 2, 2, 4, 0, 3, 2, false);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
