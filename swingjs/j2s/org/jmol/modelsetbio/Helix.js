(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),I$=[[0,'org.jmol.c.STR','javajs.util.P3','javajs.util.V3','javajs.util.Measure']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Helix", null, 'org.jmol.modelsetbio.ProteinStructure');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_modelsetbio_AlphaPolymer$I$I$org_jmol_c_STR', function (apolymer, monomerIndex, monomerCount, subtype) {
Clazz.super_(C$, this,1);
this.setupPS$org_jmol_modelsetbio_AlphaPolymer$org_jmol_c_STR$I$I(apolymer, $I$(1).HELIX, monomerIndex, monomerCount);
this.subtype=subtype;
}, 1);

Clazz.newMeth(C$, 'calcAxis$', function () {
if (this.axisA != null ) return;
var points=Clazz.array($I$(2), [this.nRes + 1]);
for (var i=0; i <= this.nRes; i++) this.apolymer.getLeadMidPoint$I$javajs_util_P3(this.monomerIndexFirst + i, points[i]=Clazz.new_($I$(2)));

this.axisA=Clazz.new_($I$(2));
this.axisUnitVector=Clazz.new_($I$(3));
$I$(4).calcBestAxisThroughPoints$javajs_util_P3A$javajs_util_P3$javajs_util_V3$javajs_util_V3$I(points, this.axisA, this.axisUnitVector, this.vectorProjection, 4);
this.axisB=$I$(2).newP$javajs_util_T3(points[this.nRes]);
$I$(4).projectOntoAxis$javajs_util_P3$javajs_util_P3$javajs_util_V3$javajs_util_V3(this.axisB, this.axisA, this.axisUnitVector, this.vectorProjection);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
