(function(){var P$=Clazz.newPackage("jalview.viewmodel"),I$=[[0,'jalview.analysis.PCA','java.util.Vector','jalview.datamodel.SequencePoint','StringBuffer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PCAModel");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nucleotide=false;
},1);

C$.$fields$=[['Z',['nucleotide'],'I',['top'],'O',['inputData','jalview.datamodel.AlignmentView','seqs','jalview.datamodel.SequenceI[]','similarityParams','jalview.api.analysis.SimilarityParamsI','scoreModel','jalview.api.analysis.ScoreModelI','pca','jalview.analysis.PCA','points','java.util.List']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentView$jalview_datamodel_SequenceIA$Z$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI', function (seqData, sqs, nuc, modelName, params) {
;C$.$init$.apply(this);
this.inputData=seqData;
this.seqs=sqs;
this.nucleotide=nuc;
this.scoreModel=modelName;
this.similarityParams=params;
}, 1);

Clazz.newMeth(C$, 'calculate$', function () {
this.pca=Clazz.new_($I$(1,1).c$$jalview_datamodel_AlignmentView$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI,[this.inputData, this.scoreModel, this.similarityParams]);
this.pca.run$();
var ii=0;
while ((ii < this.seqs.length) && (this.seqs[ii] != null ) ){
ii++;
}
var height=this.pca.getHeight$();
this.top=height - 1;
this.points=Clazz.new_($I$(2,1));
var scores=this.pca.getComponents$I$I$I$F(this.top - 1, this.top - 2, this.top - 3, 100);
for (var i=0; i < height; i++) {
var sp=Clazz.new_($I$(3,1).c$$jalview_datamodel_SequenceI$jalview_datamodel_Point,[this.seqs[i], scores[i]]);
this.points.add$O(sp);
}
});

Clazz.newMeth(C$, 'updateRc$jalview_api_RotatableCanvasI', function (rc) {
rc.setPoints$java_util_List$I(this.points, this.pca.getHeight$());
});

Clazz.newMeth(C$, 'isNucleotide$', function () {
return this.nucleotide;
});

Clazz.newMeth(C$, 'setNucleotide$Z', function (nucleotide) {
this.nucleotide=nucleotide;
});

Clazz.newMeth(C$, 'getTop$', function () {
return this.top;
});

Clazz.newMeth(C$, 'setTop$I', function (t) {
this.top=t;
});

Clazz.newMeth(C$, 'updateRcView$I$I$I', function (dim1, dim2, dim3) {
var scores=this.pca.getComponents$I$I$I$F(dim1 - 1, dim2 - 1, dim3 - 1, 100);
for (var i=0; i < this.pca.getHeight$(); i++) {
this.points.get$I(i).coord=scores[i];
}
});

Clazz.newMeth(C$, 'getDetails$', function () {
return this.pca.getDetails$();
});

Clazz.newMeth(C$, 'getInputData$', function () {
return this.inputData;
});

Clazz.newMeth(C$, 'setInputData$jalview_datamodel_AlignmentView', function (data) {
this.inputData=data;
});

Clazz.newMeth(C$, 'getPointsasCsv$Z$I$I$I', function (transformed, xdim, ydim, zdim) {
var csv=Clazz.new_($I$(4,1));
csv.append$S("\"Sequence\"");
if (transformed) {
csv.append$S(",");
csv.append$I(xdim);
csv.append$S(",");
csv.append$I(ydim);
csv.append$S(",");
csv.append$I(zdim);
} else {
for (var d=1, dmax=this.pca.component$I(1).length; d <= dmax; d++) {
csv.append$S("," + d);
}
}csv.append$S("\n");
for (var s=0; s < this.seqs.length; s++) {
csv.append$S("\"" + this.seqs[s].getName$() + "\"" );
var fl;
if (!transformed) {
fl=this.pca.component$I(s);
for (var d=fl.length - 1; d >= 0; d--) {
csv.append$S(",");
csv.append$D(fl[d]);
}
} else {
var p=this.points.get$I(s).coord;
csv.append$S(",").append$F(p.x);
csv.append$S(",").append$F(p.y);
csv.append$S(",").append$F(p.z);
}csv.append$S("\n");
}
return csv.toString();
});

Clazz.newMeth(C$, 'getScoreModelName$', function () {
return this.scoreModel == null  ? "" : this.scoreModel.getName$();
});

Clazz.newMeth(C$, 'setScoreModel$jalview_api_analysis_ScoreModelI', function (sm) {
this.scoreModel=sm;
});

Clazz.newMeth(C$, 'getSimilarityParameters$', function () {
return this.similarityParams;
});

Clazz.newMeth(C$, 'getSequencePoints$', function () {
return this.points;
});

Clazz.newMeth(C$, 'setSequencePoints$java_util_List', function (sp) {
this.points=sp;
});

Clazz.newMeth(C$, 'getPcaData$', function () {
return this.pca;
});

Clazz.newMeth(C$, 'setPCA$jalview_analysis_PCA', function (data) {
this.pca=data;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
