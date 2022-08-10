(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'jalview.datamodel.Annotation']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SecondaryStructureAnnotation", null, 'jalview.datamodel.AlignmentAnnotation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['_rna','fr.orsay.lri.varna.models.rna.RNA']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_RNA',  function (rna) {
;C$.superclazz.c$$S$S$jalview_datamodel_AnnotationA.apply(this,["Secondary Structure", "Un truc trop cool", C$.getAnnotation$fr_orsay_lri_varna_models_rna_RNA(rna)]);C$.$init$.apply(this);
C$._rna=rna;
}, 1);

Clazz.newMeth(C$, 'getRNA$',  function () {
return C$._rna;
});

Clazz.newMeth(C$, 'getAnnotation$fr_orsay_lri_varna_models_rna_RNA',  function (rna) {
var ann=Clazz.array($I$(1), [rna.getSize$()]);
for (var i=0; i < ann.length; i++) {
ann[i]=Clazz.new_([C$._rna.getStructDBN$Z(true), "", " ", 0.0],$I$(1,1).c$$S$S$C$F);
;}
return ann;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$._rna=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
