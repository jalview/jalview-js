(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[[0,'jalview.datamodel.SequenceI','jalview.analysis.scoremodels.SimilarityParams','jalview.analysis.scoremodels.PIDModel','jalview.util.QuickSort','java.util.ArrayList','jalview.datamodel.SequenceFeature','StringBuilder','java.util.Collections']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AlignmentSorter");
C$.sortIdAscending=false;
C$.lastGroupHash=0;
C$.sortGroupAscending=false;
C$.lastOrder=null;
C$.sortOrderAscending=false;
C$.lastTree=null;
C$.sortTreeAscending=false;
C$.lastSortByAnnotation=null;
C$.sortByFeatureCriteria=null;
C$.sortByFeatureAscending=false;
C$.sortLengthAscending=false;
C$.FEATURE_SCORE=null;
C$.FEATURE_LABEL=null;
C$.FEATURE_DENSITY=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.sortIdAscending=true;
C$.lastGroupHash=0;
C$.sortGroupAscending=true;
C$.lastOrder=null;
C$.sortOrderAscending=true;
C$.lastTree=null;
C$.sortTreeAscending=true;
C$.sortByFeatureAscending=true;
C$.FEATURE_SCORE="average_score";
C$.FEATURE_LABEL="text";
C$.FEATURE_DENSITY="density";
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'sortByPID$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceI', function (align, s) {
var nSeq=align.getHeight$();
var scores=Clazz.array(Float.TYPE, [nSeq]);
var seqs=Clazz.array($I$(1), [nSeq]);
var refSeq=s.getSequenceAsString$();
var pidParams=Clazz.new_($I$(2).c$$Z$Z$Z$Z,[true, true, true, true]);
for (var i=0; i < nSeq; i++) {
scores[i]=$I$(3).computePID$S$S$jalview_api_analysis_SimilarityParamsI(align.getSequenceAt$I(i).getSequenceAsString$(), refSeq, pidParams);
seqs[i]=align.getSequenceAt$I(i);
}
$I$(4).sort$FA$OA(scores, seqs);
C$.setReverseOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA(align, seqs);
}, 1);

Clazz.newMeth(C$, 'setReverseOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA', function (align, seqs) {
var nSeq=seqs.length;
var len=0;
if ((nSeq % 2) == 0) {
len=(nSeq/2|0);
} else {
len=((nSeq + 1)/2|0);
}var asq=align.getSequences$();
{
for (var i=0; i < len; i++) {
asq.set$I$TE(i, seqs[nSeq - i - 1 ]);
asq.set$I$TE(nSeq - i - 1 , seqs[i]);
}
}}, 1);

Clazz.newMeth(C$, 'setOrder$jalview_datamodel_AlignmentI$java_util_List', function (align, tmp) {
C$.setOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA(align, C$.vectorSubsetToArray$java_util_List$java_util_List(tmp, align.getSequences$()));
}, 1);

Clazz.newMeth(C$, 'setOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA', function (align, seqs) {
var algn=align.getSequences$();
{
var tmp=Clazz.new_($I$(5));
for (var i=0; i < seqs.length; i++) {
if (algn.contains$O(seqs[i])) {
tmp.add$TE(seqs[i]);
}}
algn.clear$();
for (var i=0; i < tmp.size$(); i++) {
algn.add$TE(tmp.get$I(i));
}
}}, 1);

Clazz.newMeth(C$, 'sortByID$jalview_datamodel_AlignmentI', function (align) {
var nSeq=align.getHeight$();
var ids=Clazz.array(String, [nSeq]);
var seqs=Clazz.array($I$(1), [nSeq]);
for (var i=0; i < nSeq; i++) {
ids[i]=align.getSequenceAt$I(i).getName$();
seqs[i]=align.getSequenceAt$I(i);
}
$I$(4).sort$SA$OA(ids, seqs);
if (C$.sortIdAscending) {
C$.setReverseOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA(align, seqs);
} else {
C$.setOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA(align, seqs);
}C$.sortIdAscending=!C$.sortIdAscending;
}, 1);

Clazz.newMeth(C$, 'sortByLength$jalview_datamodel_AlignmentI', function (align) {
var nSeq=align.getHeight$();
var length=Clazz.array(Float.TYPE, [nSeq]);
var seqs=Clazz.array($I$(1), [nSeq]);
for (var i=0; i < nSeq; i++) {
seqs[i]=align.getSequenceAt$I(i);
length[i]=(seqs[i].getEnd$() - seqs[i].getStart$());
}
$I$(4).sort$FA$OA(length, seqs);
if (C$.sortLengthAscending) {
C$.setReverseOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA(align, seqs);
} else {
C$.setOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA(align, seqs);
}C$.sortLengthAscending=!C$.sortLengthAscending;
}, 1);

Clazz.newMeth(C$, 'sortByGroup$jalview_datamodel_AlignmentI', function (align) {
var groups=Clazz.new_($I$(5));
if (groups.hashCode$() != C$.lastGroupHash) {
C$.sortGroupAscending=true;
C$.lastGroupHash=groups.hashCode$();
} else {
C$.sortGroupAscending=!C$.sortGroupAscending;
}for (var sg, $sg = align.getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
for (var j=0; j < groups.size$(); j++) {
var sg2=groups.get$I(j);
if (sg.getSize$() > sg2.getSize$()) {
groups.add$I$TE(j, sg);
break;
}}
if (!groups.contains$O(sg)) {
groups.add$TE(sg);
}}
var seqs=Clazz.new_($I$(5));
for (var i=0; i < groups.size$(); i++) {
var sg=groups.get$I(i);
var orderedseqs=sg.getSequencesInOrder$jalview_datamodel_AlignmentI(align);
for (var j=0; j < orderedseqs.length; j++) {
seqs.add$TE(orderedseqs[j]);
}
}
if (C$.sortGroupAscending) {
C$.setOrder$jalview_datamodel_AlignmentI$java_util_List(align, seqs);
} else {
C$.setReverseOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA(align, C$.vectorSubsetToArray$java_util_List$java_util_List(seqs, align.getSequences$()));
}}, 1);

Clazz.newMeth(C$, 'vectorSubsetToArray$java_util_List$java_util_List', function (tmp, mask) {
var seqs=Clazz.new_($I$(5));
var i;
var idx;
var tmask=Clazz.array(Boolean.TYPE, [mask.size$()]);
for (i=0; i < mask.size$(); i++) {
tmask[i]=true;
}
for (i=0; i < tmp.size$(); i++) {
var sq=tmp.get$I(i);
idx=mask.indexOf$O(sq);
if (idx > -1 && tmask[idx] ) {
tmask[idx]=false;
seqs.add$TE(sq);
}}
for (i=0; i < tmask.length; i++) {
if (tmask[i]) {
seqs.add$TE(mask.get$I(i));
}}
return seqs.toArray$TTA(Clazz.array($I$(1), [seqs.size$()]));
}, 1);

Clazz.newMeth(C$, 'sortBy$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentOrder', function (align, order) {
var tmp=order.getOrder$();
if (C$.lastOrder === order ) {
C$.sortOrderAscending=!C$.sortOrderAscending;
} else {
C$.sortOrderAscending=true;
}if (C$.sortOrderAscending) {
C$.setOrder$jalview_datamodel_AlignmentI$java_util_List(align, tmp);
} else {
C$.setReverseOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA(align, C$.vectorSubsetToArray$java_util_List$java_util_List(tmp, align.getSequences$()));
}}, 1);

Clazz.newMeth(C$, 'getOrderByTree$jalview_datamodel_AlignmentI$jalview_analysis_TreeModel', function (align, tree) {
var nSeq=align.getHeight$();
var tmp=Clazz.new_($I$(5));
tmp=C$._sortByTree$jalview_datamodel_SequenceNode$java_util_List$java_util_List(tree.getTopNode$(), tmp, align.getSequences$());
if (tmp.size$() != nSeq) {
if (tmp.size$() != nSeq) {
C$.addStrays$jalview_datamodel_AlignmentI$java_util_List(align, tmp);
}if (tmp.size$() != nSeq) {
System.err.println$S("WARNING: tmp.size()=" + tmp.size$() + " != nseq=" + nSeq + " in getOrderByTree - tree contains sequences not in alignment" );
}}return tmp;
}, 1);

Clazz.newMeth(C$, 'sortByTree$jalview_datamodel_AlignmentI$jalview_analysis_TreeModel', function (align, tree) {
var tmp=C$.getOrderByTree$jalview_datamodel_AlignmentI$jalview_analysis_TreeModel(align, tree);
if (C$.lastTree !== tree ) {
C$.sortTreeAscending=true;
C$.lastTree=tree;
} else {
C$.sortTreeAscending=!C$.sortTreeAscending;
}if (C$.sortTreeAscending) {
C$.setOrder$jalview_datamodel_AlignmentI$java_util_List(align, tmp);
} else {
C$.setReverseOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA(align, C$.vectorSubsetToArray$java_util_List$java_util_List(tmp, align.getSequences$()));
}}, 1);

Clazz.newMeth(C$, 'addStrays$jalview_datamodel_AlignmentI$java_util_List', function (align, tmp) {
var nSeq=align.getHeight$();
for (var i=0; i < nSeq; i++) {
if (!tmp.contains$O(align.getSequenceAt$I(i))) {
tmp.add$TE(align.getSequenceAt$I(i));
}}
if (nSeq != tmp.size$()) {
System.err.println$S("ERROR: Size still not right even after addStrays");
}}, 1);

Clazz.newMeth(C$, '_sortByTree$jalview_datamodel_SequenceNode$java_util_List$java_util_List', function (node, tmp, seqset) {
if (node == null ) {
return tmp;
}var left=node.left$();
var right=node.right$();
if ((left == null ) && (right == null ) ) {
if (!node.isPlaceholder$() && (node.element$() != null ) ) {
if (Clazz.instanceOf(node.element$(), "jalview.datamodel.SequenceI")) {
if (!tmp.contains$O(node.element$())) {
tmp.add$TE(node.element$());
}}}return tmp;
} else {
C$._sortByTree$jalview_datamodel_SequenceNode$java_util_List$java_util_List(left, tmp, seqset);
C$._sortByTree$jalview_datamodel_SequenceNode$java_util_List$java_util_List(right, tmp, seqset);
}return tmp;
}, 1);

Clazz.newMeth(C$, 'recoverOrder$jalview_datamodel_SequenceIA', function (alignment) {
var ids=Clazz.array(Float.TYPE, [alignment.length]);
for (var i=0; i < alignment.length; i++) {
ids[i]=( new Float(alignment[i].getName$().substring$I(8))).floatValue$();
}
$I$(4).sort$FA$OA(ids, alignment);
}, 1);

Clazz.newMeth(C$, 'sortByAnnotationScore$S$jalview_datamodel_AlignmentI', function (scoreLabel, alignment) {
var seqs=alignment.getSequencesArray$();
var hasScore=Clazz.array(Boolean.TYPE, [seqs.length]);
var hasScores=0;
var scores=Clazz.array(Double.TYPE, [seqs.length]);
var min=0;
var max=0;
for (var i=0; i < seqs.length; i++) {
var scoreAnn=seqs[i].getAnnotation$S(scoreLabel);
if (scoreAnn != null ) {
hasScores++;
hasScore[i]=true;
scores[i]=scoreAnn[0].getScore$();
if (hasScores == 1) {
max=min=scores[i];
} else {
if (max < scores[i] ) {
max=scores[i];
}if (min > scores[i] ) {
min=scores[i];
}}} else {
hasScore[i]=false;
}}
if (hasScores == 0) {
return;
}if (hasScores < seqs.length) {
for (var i=0; i < seqs.length; i++) {
if (!hasScore[i]) {
scores[i]=(max + i + 1.0 );
}}
}$I$(4).sort$DA$OA(scores, seqs);
if (C$.lastSortByAnnotation != scoreLabel) {
C$.lastSortByAnnotation=scoreLabel;
C$.setOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA(alignment, seqs);
} else {
C$.setReverseOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA(alignment, seqs);
}}, 1);

Clazz.newMeth(C$, 'sortByFeature$java_util_List$java_util_List$I$I$jalview_datamodel_AlignmentI$S', function (featureTypes, groups, startCol, endCol, alignment, method) {
if (method != C$.FEATURE_SCORE && method != C$.FEATURE_LABEL  && method != C$.FEATURE_DENSITY ) {
var msg=String.format$S$OA("Implementation Error - sortByFeature method must be either \'%s\' or \'%s\'", [C$.FEATURE_SCORE, C$.FEATURE_DENSITY]);
System.err.println$S(msg);
return;
}C$.flipFeatureSortIfUnchanged$S$java_util_List$java_util_List$I$I(method, featureTypes, groups, startCol, endCol);
var seqs=alignment.getSequencesArray$();
var hasScore=Clazz.array(Boolean.TYPE, [seqs.length]);
var hasScores=0;
var scores=Clazz.array(Double.TYPE, [seqs.length]);
var seqScores=Clazz.array(Integer.TYPE, [seqs.length]);
var feats=Clazz.array(java.lang.Object, [seqs.length, null]);
var min=0.0;
var max=0.0;
for (var i=0; i < seqs.length; i++) {
var types=featureTypes == null  ? null : featureTypes.toArray$TTA(Clazz.array(String, [featureTypes.size$()]));
var sfs=seqs[i].findFeatures$I$I$SA(startCol + 1, endCol + 1, types);
seqScores[i]=0;
scores[i]=0.0;
var it=sfs.listIterator$();
while (it.hasNext$()){
var sf=it.next$();
var featureGroup=sf.getFeatureGroup$();
if (groups != null  && featureGroup != null   && !"".equals$O(featureGroup)  && !groups.contains$O(featureGroup) ) {
it.remove$();
} else {
var score=sf.getScore$();
if (C$.FEATURE_SCORE.equals$O(method) && !Float.isNaN$F(score) ) {
if (seqScores[i] == 0) {
hasScores++;
}seqScores[i]++;
hasScore[i]=true;
scores[i] += score;
}}}
feats[i]=sfs.toArray$TTA(Clazz.array($I$(6), [sfs.size$()]));
if (!sfs.isEmpty$()) {
if (method == C$.FEATURE_LABEL) {
var labs=Clazz.array(String, [sfs.size$()]);
for (var l=0; l < sfs.size$(); l++) {
var sf=sfs.get$I(l);
var description=sf.getDescription$();
labs[l]=(description != null  ? description : sf.getType$());
}
$I$(4).sort$SA$OA(labs, feats[i]);
}}if (hasScore[i]) {
scores[i] /= seqScores[i];
if (hasScores == 1) {
min=scores[i];
max=min;
} else {
max=Math.max(max, scores[i]);
min=Math.min(min, scores[i]);
}}}
if (C$.FEATURE_SCORE.equals$O(method)) {
if (hasScores == 0) {
return;
}if (hasScores < seqs.length) {
for (var i=0; i < seqs.length; i++) {
if (!hasScore[i]) {
scores[i]=(max + 1 + i );
} else {
}}
}$I$(4).sortByDouble$DA$OA$Z(scores, seqs, C$.sortByFeatureAscending);
} else if (C$.FEATURE_DENSITY.equals$O(method)) {
for (var i=0; i < seqs.length; i++) {
var featureCount=feats[i] == null  ? 0 : (feats[i]).length;
scores[i]=featureCount;
}
$I$(4).sortByDouble$DA$OA$Z(scores, seqs, C$.sortByFeatureAscending);
}C$.setOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA(alignment, seqs);
}, 1);

Clazz.newMeth(C$, 'flipFeatureSortIfUnchanged$S$java_util_List$java_util_List$I$I', function (method, featureTypes, groups, startCol, endCol) {
var sb=Clazz.new_($I$(7).c$$I,[64]);
sb.append$I(startCol).append$S(method).append$I(endCol);
if (featureTypes != null ) {
$I$(8).sort$java_util_List(featureTypes);
sb.append$S(featureTypes.toString());
}if (groups != null ) {
$I$(8).sort$java_util_List(groups);
sb.append$S(groups.toString());
}var scoreCriteria=sb.toString();
if (C$.sortByFeatureCriteria == null  || !scoreCriteria.equals$O(C$.sortByFeatureCriteria) ) {
C$.sortByFeatureAscending=true;
} else {
C$.sortByFeatureAscending=!C$.sortByFeatureAscending;
}C$.sortByFeatureCriteria=scoreCriteria;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
