(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'jalview.datamodel.Annotation']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SecondaryStructureAnnotation", null, 'jalview.datamodel.AlignmentAnnotation');
C$._rna=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$._rna=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_RNA', function (rna) {
C$.superclazz.c$$S$S$jalview_datamodel_AnnotationA.apply(this, ["Secondary Structure", "Un truc trop cool", C$.getAnnotation$fr_orsay_lri_varna_models_rna_RNA(rna)]);
C$.$init$.apply(this);
C$._rna=rna;
}, 1);

Clazz.newMeth(C$, 'getRNA$', function () {
return C$._rna;
});

Clazz.newMeth(C$, 'getAnnotation$fr_orsay_lri_varna_models_rna_RNA', function (rna) {
var ann=Clazz.array($I$(1), [rna.getSize$()]);
for (var i=0; i < ann.length; i++) {
ann[i]=Clazz.new_($I$(1).c$$S$S$C$F,[C$._rna.getStructDBN$Z(true), "", " ", 0.0]);
;}
return ann;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
