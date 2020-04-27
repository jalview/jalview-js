(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'jalview.datamodel.DBRefSource','StringBuilder','jalview.util.StringUtils','java.util.LinkedHashMap','jalview.util.UrlLink','jalview.util.MessageManager']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequenceAnnotationReport");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['linkImageURL']]
,['O',['comparator','java.util.Comparator']]]

Clazz.newMeth(C$, 'c$$S', function (linkURL) {
;C$.$init$.apply(this);
this.linkImageURL=linkURL;
}, 1);

Clazz.newMeth(C$, 'appendFeaturesLengthLimit$StringBuilder$I$java_util_List$jalview_viewmodel_seqfeatures_FeatureRendererModel$I', function (sb, residuePos, features, fr, maxlength) {
for (var i=0; i < features.size$(); i++) {
var feature=features.get$I(i);
if (this.appendFeature$StringBuilder$I$jalview_viewmodel_seqfeatures_FeatureRendererModel$jalview_datamodel_SequenceFeature$jalview_datamodel_MappedFeatures$I(sb, residuePos, fr, feature, null, maxlength)) {
return features.size$() - i;
}}
return 0;
});

Clazz.newMeth(C$, 'appendFeatures$StringBuilder$I$java_util_List$jalview_viewmodel_seqfeatures_FeatureRendererModel', function (sb, residuePos, features, fr) {
this.appendFeaturesLengthLimit$StringBuilder$I$java_util_List$jalview_viewmodel_seqfeatures_FeatureRendererModel$I(sb, residuePos, features, fr, 0);
});

Clazz.newMeth(C$, 'appendFeaturesLengthLimit$StringBuilder$I$jalview_datamodel_MappedFeatures$jalview_viewmodel_seqfeatures_FeatureRendererModel$I', function (sb, residuePos, mf, fr, maxlength) {
for (var i=0; i < mf.features.size$(); i++) {
var feature=mf.features.get$I(i);
if (this.appendFeature$StringBuilder$I$jalview_viewmodel_seqfeatures_FeatureRendererModel$jalview_datamodel_SequenceFeature$jalview_datamodel_MappedFeatures$I(sb, residuePos, fr, feature, mf, maxlength)) {
return mf.features.size$() - i;
}}
return 0;
});

Clazz.newMeth(C$, 'appendFeatures$StringBuilder$I$jalview_datamodel_MappedFeatures$jalview_viewmodel_seqfeatures_FeatureRendererModel', function (sb, residuePos, mf, fr) {
this.appendFeaturesLengthLimit$StringBuilder$I$jalview_datamodel_MappedFeatures$jalview_viewmodel_seqfeatures_FeatureRendererModel$I(sb, residuePos, mf, fr, 0);
});

Clazz.newMeth(C$, 'appendFeature$StringBuilder$I$jalview_viewmodel_seqfeatures_FeatureRendererModel$jalview_datamodel_SequenceFeature$jalview_datamodel_MappedFeatures$I', function (sb0, rpos, fr, feature, mf, maxlength) {
var sb=Clazz.new_($I$(2,1));
if (feature.isContactFeature$()) {
if (feature.getBegin$() == rpos || feature.getEnd$() == rpos ) {
if (sb0.length$() > 6) {
sb.append$S("<br/>");
}sb.append$S(feature.getType$()).append$S(" ").append$I(feature.getBegin$()).append$S(":").append$I(feature.getEnd$());
}return C$.appendTextMaxLengthReached$StringBuilder$StringBuilder$I(sb0, sb, maxlength);
}if (sb0.length$() > 6) {
sb.append$S("<br/>");
}var linkOnly=feature.getValue$S("linkonly") != null ;
if (!linkOnly) {
sb.append$S(feature.getType$()).append$S(" ");
if (rpos != 0) {
sb.append$I(feature.begin);
}if (feature.begin != feature.end) {
sb.append$S(" ").append$I(feature.end);
}var description=feature.getDescription$();
if (description != null  && !description.equals$O(feature.getType$()) ) {
description=$I$(3).stripHtmlTags$S(description);
var linkindex=description.toLowerCase$().indexOf$S("<a ");
var hasLink=linkindex > -1 && linkindex < 40 ;
if (description.length$() > 40 && !hasLink ) {
description=description.substring$I$I(0, 40) + "...";
}sb.append$S("; ").append$S(description);
}if (this.showScore$jalview_datamodel_SequenceFeature$jalview_viewmodel_seqfeatures_FeatureRendererModel(feature, fr)) {
sb.append$S(" Score=").append$S(String.valueOf$F(feature.getScore$()));
}var status=feature.getValue$S("status");
if (status != null  && status.length$() > 0 ) {
sb.append$S("; (").append$S(status).append$S(")");
}if (fr != null ) {
var fc=fr.getFeatureColours$().get$O(feature.getType$());
if (fc != null  && fc.isColourByAttribute$() ) {
var attName=fc.getAttributeName$();
var attVal=feature.getValueAsString$SA(attName);
if (attVal != null ) {
sb.append$S("; ").append$S(String.join$CharSequence$CharSequenceA(":", attName)).append$S("=").append$S(attVal);
}}}if (mf != null ) {
var variants=mf.findProteinVariants$jalview_datamodel_SequenceFeature(feature);
if (!variants.isEmpty$()) {
sb.append$S(" ").append$S(variants);
}}}return C$.appendTextMaxLengthReached$StringBuilder$StringBuilder$I(sb0, sb, maxlength);
});

Clazz.newMeth(C$, 'appendFeature$StringBuilder$I$jalview_viewmodel_seqfeatures_FeatureRendererModel$jalview_datamodel_SequenceFeature$jalview_datamodel_MappedFeatures', function (sb, rpos, fr, feature, mf) {
this.appendFeature$StringBuilder$I$jalview_viewmodel_seqfeatures_FeatureRendererModel$jalview_datamodel_SequenceFeature$jalview_datamodel_MappedFeatures$I(sb, rpos, fr, feature, mf, 0);
});

Clazz.newMeth(C$, 'appendTextMaxLengthReached$StringBuilder$StringBuilder$I', function (sb0, sb, maxlength) {
if (maxlength == 0 || sb0.length$() + sb.length$() < maxlength ) {
sb0.append$CharSequence(sb);
return false;
}return true;
}, 1);

Clazz.newMeth(C$, 'showScore$jalview_datamodel_SequenceFeature$jalview_viewmodel_seqfeatures_FeatureRendererModel', function (feature, fr) {
if (Float.isNaN$F(feature.getScore$())) {
return false;
}if (fr == null ) {
return true;
}var minMax=fr.getMinMax$().get$O(feature.getType$());
if (minMax == null  || minMax[0] == null   || minMax[0][0] == minMax[0][1]  ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'appendLinks$StringBuffer$jalview_datamodel_SequenceFeature', function (sb, feature) {
if (feature.links != null ) {
if (this.linkImageURL != null ) {
sb.append$S(" <img src=\"" + this.linkImageURL + "\">" );
} else {
for (var urlstring, $urlstring = feature.links.iterator$(); $urlstring.hasNext$()&&((urlstring=($urlstring.next$())),1);) {
try {
for (var urllink, $urllink = this.createLinksFrom$jalview_datamodel_SequenceI$S(null, urlstring).iterator$(); $urllink.hasNext$()&&((urllink=($urllink.next$())),1);) {
sb.append$S("<br/> <a href=\"" + urllink.get$I(3) + "\" target=\"" + urllink.get$I(0) + "\">" + (urllink.get$I(0).toLowerCase$().equals$O(urllink.get$I(1).toLowerCase$()) ? urllink.get$I(0) : (urllink.get$I(0) + ":" + urllink.get$I(1) )) + "</a><br/>" );
}
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
System.err.println$S("problem when creating links from " + urlstring);
x.printStackTrace$();
} else {
throw x;
}
}
}
}}});

Clazz.newMeth(C$, 'createLinksFrom$jalview_datamodel_SequenceI$S', function (seq, link) {
var urlSets=Clazz.new_($I$(4,1));
var urlLink=Clazz.new_($I$(5,1).c$$S,[link]);
if (!urlLink.isValid$()) {
System.err.println$S(urlLink.getInvalidMessage$());
return null;
}urlLink.createLinksFromSeq$jalview_datamodel_SequenceI$java_util_Map(seq, urlSets);
return urlSets.values$();
});

Clazz.newMeth(C$, 'createSequenceAnnotationReport$StringBuilder$jalview_datamodel_SequenceI$Z$Z$jalview_viewmodel_seqfeatures_FeatureRendererModel', function (tip, sequence, showDbRefs, showNpFeats, fr) {
this.createSequenceAnnotationReport$StringBuilder$jalview_datamodel_SequenceI$Z$Z$jalview_viewmodel_seqfeatures_FeatureRendererModel$Z(tip, sequence, showDbRefs, showNpFeats, fr, false);
});

Clazz.newMeth(C$, 'createSequenceAnnotationReport$StringBuilder$jalview_datamodel_SequenceI$Z$Z$jalview_viewmodel_seqfeatures_FeatureRendererModel$Z', function (sb, sequence, showDbRefs, showNpFeats, fr, summary) {
var tmp;
sb.append$S("<i>");
var maxWidth=0;
if (sequence.getDescription$() != null ) {
tmp=sequence.getDescription$();
sb.append$S(tmp);
maxWidth=Math.max(maxWidth, tmp.length$());
}var ds=sequence;
while (ds.getDatasetSequence$() != null ){
ds=ds.getDatasetSequence$();
}
if (showDbRefs) {
maxWidth=Math.max(maxWidth, this.appendDbRefs$StringBuilder$jalview_datamodel_SequenceI$Z(sb, ds, summary));
}if (showNpFeats) {
for (var sf, $sf = sequence.getFeatures$().getNonPositionalFeatures$SA([]).iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var sz=-sb.length$();
this.appendFeature$StringBuilder$I$jalview_viewmodel_seqfeatures_FeatureRendererModel$jalview_datamodel_SequenceFeature$jalview_datamodel_MappedFeatures(sb, 0, fr, sf, null);
sz+=sb.length$();
maxWidth=Math.max(maxWidth, sz);
}
}sb.append$S("</i>");
return maxWidth;
});

Clazz.newMeth(C$, 'appendDbRefs$StringBuilder$jalview_datamodel_SequenceI$Z', function (sb, ds, summary) {
var dbrefs=ds.getDBRefs$();
if (dbrefs == null ) {
return 0;
}dbrefs.sort$java_util_Comparator(C$.comparator);
var ellipsis=false;
var source=null;
var lastSource=null;
var countForSource=0;
var sourceCount=0;
var moreSources=false;
var maxLineLength=0;
var lineLength=0;
for (var ref, $ref = dbrefs.iterator$(); $ref.hasNext$()&&((ref=($ref.next$())),1);) {
source=ref.getSource$();
if (source == null ) {
continue;
}var sourceChanged=!source.equals$O(lastSource);
if (sourceChanged) {
lineLength=0;
countForSource=0;
sourceCount++;
}if (sourceCount > 40 && summary ) {
ellipsis=true;
moreSources=true;
break;
}lastSource=source;
countForSource++;
if (countForSource == 1 || !summary ) {
sb.append$S("<br/>");
}if (countForSource <= 4 || !summary ) {
var accessionId=ref.getAccessionId$();
lineLength+=accessionId.length$() + 1;
if (countForSource > 1 && summary ) {
sb.append$S(", ").append$S(accessionId);
lineLength++;
} else {
sb.append$S(source).append$S(" ").append$S(accessionId);
lineLength+=source.length$();
}maxLineLength=Math.max(maxLineLength, lineLength);
}if (countForSource == 4 && summary ) {
sb.append$S(",").append$S("...");
ellipsis=true;
}}
if (moreSources) {
sb.append$S("<br/>").append$S(source).append$S(",").append$S("...");
}if (ellipsis) {
sb.append$S("<br/>(");
sb.append$S($I$(6).getString$S("label.output_seq_details"));
sb.append$S(")");
}return maxLineLength;
});

Clazz.newMeth(C$, 'createTooltipAnnotationReport$StringBuilder$jalview_datamodel_SequenceI$Z$Z$jalview_viewmodel_seqfeatures_FeatureRendererModel', function (tip, sequence, showDbRefs, showNpFeats, fr) {
var maxWidth=this.createSequenceAnnotationReport$StringBuilder$jalview_datamodel_SequenceI$Z$Z$jalview_viewmodel_seqfeatures_FeatureRendererModel$Z(tip, sequence, showDbRefs, showNpFeats, fr, true);
if (maxWidth > 60) {
}});

C$.$static$=function(){C$.$static$=0;
C$.comparator=((P$.SequenceAnnotationReport$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SequenceAnnotationReport$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry','compare$O$O'], function (ref1, ref2) {
if (Clazz.instanceOf(ref1, "jalview.datamodel.GeneLociI")) {
return -1;
}if (Clazz.instanceOf(ref2, "jalview.datamodel.GeneLociI")) {
return 1;
}var s1=ref1.getSource$();
var s2=ref2.getSource$();
var s1Primary=$I$(1).isPrimarySource$S(s1);
var s2Primary=$I$(1).isPrimarySource$S(s2);
if (s1Primary && !s2Primary ) {
return -1;
}if (!s1Primary && s2Primary ) {
return 1;
}var comp=s1 == null  ? -1 : (s2 == null  ? 1 : s1.compareToIgnoreCase$S(s2));
if (comp == 0) {
var a1=ref1.getAccessionId$();
var a2=ref2.getAccessionId$();
comp=a1 == null  ? -1 : (a2 == null  ? 1 : a1.compareToIgnoreCase$S(a2));
}return comp;
});
})()
), Clazz.new_(P$.SequenceAnnotationReport$1.$init$,[this, null]));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
