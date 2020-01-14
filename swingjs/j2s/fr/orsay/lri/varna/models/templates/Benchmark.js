(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.templates"),p$1={},I$=[[0,['java.awt.geom.Line2D','.Double'],'fr.orsay.lri.varna.models.geom.LinesIntersect','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Benchmark");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rna=null;
this.backboneCrossings=0;
this.averageUnpairedDistance=0;
this.medianConsecutiveBaseDistance=0;
this.tooNearConsecutiveBases=0;
this.tooFarConsecutiveBases=0;
this.targetConsecutiveBaseDistance=0;
this.tooNearFactor=0;
this.tooFarFactor=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.targetConsecutiveBaseDistance=40.0;
this.tooNearFactor=0.5;
this.tooFarFactor=2;
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_RNA', function (rna) {
C$.$init$.apply(this);
this.rna=rna;
p$1.computeAll.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'computeAll', function () {
{
var n=this.rna.getSize$();
var lines=Clazz.array($I$(1), [n - 1]);
for (var i=0; i < n - 1; i++) {
lines[i]=Clazz.new_($I$(1).c$$java_awt_geom_Point2D$java_awt_geom_Point2D,[this.rna.getCoords$I(i), this.rna.getCoords$I(i + 1)]);
}
var intersectLines=0;
for (var i=0; i < n - 1; i++) {
for (var j=i + 2; j < n - 1; j++) {
if ($I$(2).linesIntersect$java_awt_geom_Line2D_Double$java_awt_geom_Line2D_Double(lines[i], lines[j])) {
intersectLines++;
}}
}
this.backboneCrossings=intersectLines;
}{
var n=this.rna.getSize$();
var sum=0;
var count=0;
for (var i=0; i < n - 1; i++) {
var indexOfAssociatedBase1=this.rna.getBaseAt$I(i).getElementStructure$();
var indexOfAssociatedBase2=this.rna.getBaseAt$I(i + 1).getElementStructure$();
if (indexOfAssociatedBase1 != -1 || indexOfAssociatedBase2 != -1 ) {
sum += this.rna.getBaseAt$I(i).getCoords$().distance$java_awt_geom_Point2D(this.rna.getBaseAt$I(i + 1).getCoords$());
count++;
}}
this.averageUnpairedDistance=sum / count;
}{
var n=this.rna.getSize$();
var distances=Clazz.array(Double.TYPE, [n - 1]);
for (var i=0; i < n - 1; i++) {
distances[i]=this.rna.getBaseAt$I(i).getCoords$().distance$java_awt_geom_Point2D(this.rna.getBaseAt$I(i + 1).getCoords$());
}
$I$(3).sort$DA(distances);
var median=distances[(distances.length/2|0)];
this.medianConsecutiveBaseDistance=median;
this.tooNearConsecutiveBases=0;
this.tooFarConsecutiveBases=0;
for (var i=0; i < n - 1; i++) {
if (distances[i] < this.tooNearFactor * this.targetConsecutiveBaseDistance ) {
this.tooNearConsecutiveBases++;
}if (distances[i] > this.tooFarFactor * this.targetConsecutiveBaseDistance ) {
this.tooFarConsecutiveBases++;
}}
}}, p$1);

Clazz.newMeth(C$, 'percent$I$I', function (a, b) {
return (Math.round(a / b * 100.0)|0);
}, p$1);

Clazz.newMeth(C$, 'printAll$', function () {
System.out.println$S("Benchmark:");
System.out.println$S("\tBackbone crossings = " + this.backboneCrossings);
System.out.println$S("\tAverage unpaired distance = " + new Double(this.averageUnpairedDistance).toString());
System.out.println$S("\tMedian of consecutive base distance = " + new Double(this.medianConsecutiveBaseDistance).toString());
System.out.println$S("\tNumber of too near consecutive bases = " + this.tooNearConsecutiveBases);
System.out.println$S("\tNumber of too far consecutive bases = " + this.tooFarConsecutiveBases);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
