(function(){var P$=Clazz.newPackage("jalview.analysis.scoremodels"),I$=[[0,'jalview.math.Matrix','jalview.util.SetUtils','java.util.HashMap','java.util.HashSet']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FeatureDistanceModel", null, 'jalview.analysis.scoremodels.DistanceScoreModel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.description=null;
this.fr=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignmentViewPanel', function (view) {
var instance;
try {
instance=this.getClass$().newInstance$();
instance.configureFromAlignmentView$jalview_api_AlignmentViewPanel(view);
return instance;
} catch (e) {
if (Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException")){
System.err.println$S("Error in " + this.getClass$().getName$() + ".getInstance(): " + e.getMessage$() );
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'configureFromAlignmentView$jalview_api_AlignmentViewPanel', function (view) {
this.fr=view.cloneFeatureRenderer$();
return true;
});

Clazz.newMeth(C$, 'findDistances$jalview_datamodel_AlignmentView$jalview_api_analysis_SimilarityParamsI', function (seqData, params) {
var seqs=seqData.getSequences$();
var noseqs=seqs.length;
var cpwidth=0;
var distances=Clazz.array(Double.TYPE, [noseqs, noseqs]);
var dft=null;
if (this.fr != null ) {
dft=this.fr.getDisplayedFeatureTypes$();
}if (dft == null  || dft.isEmpty$() ) {
return Clazz.new_($I$(1).c$$DAA,[distances]);
}var viscont=seqData.getVisibleContigs$();
for (var vc=0; vc < viscont.length; vc+=2) {
for (var cpos=viscont[vc]; cpos <= viscont[vc + 1]; cpos++) {
cpwidth++;
var sfap=this.findFeatureTypesAtColumn$jalview_datamodel_SeqCigarA$I(seqs, cpos);
for (var i=0; i < (noseqs - 1); i++) {
for (var j=i + 1; j < noseqs; j++) {
var sc1=seqs[i];
var sc2=seqs[j];
var set1=sfap.get$O(sc1);
var set2=sfap.get$O(sc2);
var gap1=set1 == null ;
var gap2=set2 == null ;
if ((!gap1 && !gap2 ) || params.includeGaps$() ) {
var seqDistance=$I$(2).countDisjunction$java_util_Set$java_util_Set(set1, set2);
distances[i][j] += seqDistance;
}}
}
}
}
for (var i=0; i < noseqs; i++) {
for (var j=i + 1; j < noseqs; j++) {
distances[i][j] /= cpwidth;
distances[j][i]=distances[i][j];
}
}
return Clazz.new_($I$(1).c$$DAA,[distances]);
});

Clazz.newMeth(C$, 'findFeatureTypesAtColumn$jalview_datamodel_SeqCigarA$I', function (seqs, columnPosition) {
var sfap=Clazz.new_($I$(3));
for (var seq, $seq = 0, $$seq = seqs; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
var spos=seq.findPosition$I(columnPosition);
if (spos != -1) {
var types=Clazz.new_($I$(4));
var sfs=this.fr.findFeaturesAtResidue$jalview_datamodel_SequenceI$I(seq.getRefSeq$(), spos);
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
types.add$TE(sf.getType$());
}
sfap.put$TK$TV(seq, types);
}}
return sfap;
});

Clazz.newMeth(C$, 'getName$', function () {
return "Sequence Feature Similarity";
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'isDNA$', function () {
return true;
});

Clazz.newMeth(C$, 'isProtein$', function () {
return true;
});

Clazz.newMeth(C$, 'toString', function () {
return "Score between sequences based on hamming distance between binary vectors marking features displayed at each column";
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
