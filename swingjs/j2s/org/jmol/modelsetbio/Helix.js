(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),I$=[[0,'org.jmol.c.STR','javajs.util.P3','javajs.util.V3','javajs.util.Measure']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Helix", null, 'org.jmol.modelsetbio.ProteinStructure');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_jmol_modelsetbio_AlphaPolymer$I$I$org_jmol_c_STR', function (apolymer, monomerIndex, monomerCount, subtype) {
Clazz.super_(C$, this);
this.setupPS$org_jmol_modelsetbio_AlphaPolymer$org_jmol_c_STR$I$I(apolymer, $I$(1).HELIX, monomerIndex, monomerCount);
this.subtype=subtype;
}, 1);

Clazz.newMeth(C$, 'calcAxis$', function () {
if (this.axisA != null ) return;
var points=Clazz.array($I$(2), [this.nRes + 1]);
for (var i=0; i <= this.nRes; i++) this.apolymer.getLeadMidPoint$I$javajs_util_P3(this.monomerIndexFirst + i, points[i]=Clazz.new_($I$(2,1)));

this.axisA=Clazz.new_($I$(2,1));
this.axisUnitVector=Clazz.new_($I$(3,1));
$I$(4).calcBestAxisThroughPoints$javajs_util_P3A$javajs_util_P3$javajs_util_V3$javajs_util_V3$I(points, this.axisA, this.axisUnitVector, this.vectorProjection, 4);
this.axisB=$I$(2).newP$javajs_util_T3(points[this.nRes]);
$I$(4).projectOntoAxis$javajs_util_P3$javajs_util_P3$javajs_util_V3$javajs_util_V3(this.axisB, this.axisA, this.axisUnitVector, this.vectorProjection);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
