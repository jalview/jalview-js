(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.fragseq"),I$=[[0,'fr.orsay.lri.varna.models.annotations.ChemProbAnnotation','java.util.Random','java.awt.datatransfer.DataFlavor','java.util.Hashtable','java.awt.Color',['fr.orsay.lri.varna.models.annotations.ChemProbAnnotation','.ChemProbAnnotationType'],['fr.orsay.lri.varna.applications.fragseq.FragSeqAnnotationDataModel','.ChemProbModel']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FragSeqAnnotationDataModel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'fr.orsay.lri.varna.applications.fragseq.FragSeqModel');
C$.$classes$=[['ChemProbModel',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._values=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['S',['_id','_name'],'O',['_values','java.util.Hashtable']]
,['O',['_rnd','java.util.Random','Flavor','java.awt.datatransfer.DataFlavor']]]

Clazz.newMeth(C$, 'c$$S$S', function (id, name) {
Clazz.super_(C$, this);
this._id=id;
this._name=name;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S$S.apply(this, [Long.toHexString$J(Double.doubleToLongBits$D(Math.random())), Long.toHexString$J(Double.doubleToLongBits$D(Math.random()))]);
}, 1);

Clazz.newMeth(C$, 'addValue$fr_orsay_lri_varna_applications_fragseq_FragSeqAnnotationDataModel_ChemProbModel', function (cpm) {
this._values.put$O$O(new Integer(cpm._baseNumber1), cpm);
});

Clazz.newMeth(C$, 'addRandomAnnotations$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_applications_fragseq_FragSeqAnnotationDataModel', function (r, data) {
var nb=(r.getSize$()/5|0) + C$._rnd.nextInt$I((r.getSize$()/3|0));
var colors=Clazz.array($I$(5), -1, [$I$(5).orange, $I$(5).black, $I$(5).blue.darker$(), $I$(5).green.darker$(), $I$(5).gray]);
var types=$I$(6).values$();
for (var i=0; i < nb; i++) {
var index=C$._rnd.nextInt$I(r.getSize$() - 1);
var number1=r.getBaseNumber$I(index);
var number2=r.getBaseNumber$I(index + 1);
var cpm=Clazz.new_([data, null, number1, number2, colors[C$._rnd.nextInt$I(colors.length)], 2 * C$._rnd.nextDouble$(), types[C$._rnd.nextInt$I(types.length)], true],$I$(7,1).c$$I$I$java_awt_Color$D$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation_ChemProbAnnotationType$Z);
data.addValue$fr_orsay_lri_varna_applications_fragseq_FragSeqAnnotationDataModel_ChemProbModel(cpm);
}
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this._name;
});

Clazz.newMeth(C$, 'getID$', function () {
return this._id;
});

Clazz.newMeth(C$, 'applyTo$fr_orsay_lri_varna_models_rna_RNA', function (r) {
r.clearChemProbAnnotations$();
for (var c, $c = this._values.values$().iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
c.applyTo$fr_orsay_lri_varna_models_rna_RNA(r);
}
});

C$.$static$=function(){C$.$static$=0;
C$._rnd=Clazz.new_($I$(2,1));
C$.Flavor=Clazz.new_([Clazz.getClass(C$), "RNA Chem Prob Data"],$I$(3,1).c$$Class$S);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.FragSeqAnnotationDataModel, "ChemProbModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['_out'],'D',['_intensity'],'I',['_baseNumber1','_baseNumber2'],'O',['_color','java.awt.Color','_type','fr.orsay.lri.varna.models.annotations.ChemProbAnnotation.ChemProbAnnotationType']]]

Clazz.newMeth(C$, 'c$$I$I$java_awt_Color$D$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation_ChemProbAnnotationType$Z', function (baseNumber1, baseNumber2, color, intensity, type, out) {
;C$.$init$.apply(this);
this._color=color;
this._intensity=intensity;
this._type=type;
this._out=out;
this._baseNumber1=baseNumber1;
this._baseNumber2=baseNumber2;
}, 1);

Clazz.newMeth(C$, 'applyTo$fr_orsay_lri_varna_models_rna_RNA', function (r) {
System.out.println$O(this);
var i=r.getIndexFromBaseNumber$I(this._baseNumber1);
var j=r.getIndexFromBaseNumber$I(this._baseNumber2);
if (i != -1 && j != -1 ) {
var mb1=r.getBaseAt$I(i);
var mb2=r.getBaseAt$I(j);
r.addChemProbAnnotation$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation(Clazz.new_($I$(1,1).c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation_ChemProbAnnotationType$D$java_awt_Color$Z,[mb1, mb2, this._type, this._intensity, this._color, this._out]));
}});

Clazz.newMeth(C$, 'toString', function () {
return "" + this._baseNumber1 + ": col=" + this._color + " int=" + new Double(this._intensity).toString() + " type=" + this._type + " out=" + this._out ;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:18 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
