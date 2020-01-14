(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'jalview.datamodel.DBRefSource','jalview.util.StringUtils','java.util.LinkedHashMap','jalview.util.UrlLink','jalview.util.MessageManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SequenceAnnotationReport");
C$.comparator=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.comparator=((P$.SequenceAnnotationReport$1||
(function(){var C$=Clazz.newClass(P$, "SequenceAnnotationReport$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry','compare$','compare$TT$TT'], function (ref1, ref2) {
if (ref1.isChromosome$()) {
return -1;
}if (ref2.isChromosome$()) {
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
), Clazz.new_(P$.SequenceAnnotationReport$1.$init$, [this, null]));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.linkImageURL=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (linkURL) {
C$.$init$.apply(this);
this.linkImageURL=linkURL;
}, 1);

Clazz.newMeth(C$, 'appendFeatures$StringBuilder$I$java_util_List$jalview_viewmodel_seqfeatures_FeatureRendererModel', function (sb, rpos, features, fr) {
if (features != null ) {
for (var feature, $feature = features.iterator$(); $feature.hasNext$()&&((feature=($feature.next$())),1);) {
this.appendFeature$StringBuilder$I$jalview_viewmodel_seqfeatures_FeatureRendererModel$jalview_datamodel_SequenceFeature(sb, rpos, fr, feature);
}
}});

Clazz.newMeth(C$, 'appendFeature$StringBuilder$I$jalview_viewmodel_seqfeatures_FeatureRendererModel$jalview_datamodel_SequenceFeature', function (sb, rpos, fr, feature) {
if (feature.isContactFeature$()) {
if (feature.getBegin$() == rpos || feature.getEnd$() == rpos ) {
if (sb.length$() > 6) {
sb.append$S("<br>");
}sb.append$S(feature.getType$()).append$S(" ").append$I(feature.getBegin$()).append$S(":").append$I(feature.getEnd$());
}return;
}if (sb.length$() > 6) {
sb.append$S("<br>");
}var linkOnly=feature.getValue$S("linkonly") != null ;
if (!linkOnly) {
sb.append$S(feature.getType$()).append$S(" ");
if (rpos != 0) {
sb.append$I(feature.begin);
}if (feature.begin != feature.end) {
sb.append$S(" ").append$I(feature.end);
}var description=feature.getDescription$();
if (description != null  && !description.equals$O(feature.getType$()) ) {
description=$I$(2).stripHtmlTags$S(description);
sb.append$S("; ").append$S(description);
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
}}}}});

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
sb.append$S("<br/> <a href=\"" + urllink.get$I(3) + "\" target=\"" + urllink.get$I(0) + "\">" + (urllink.get$I(0).toLowerCase$().equals$O(urllink.get$I(1).toLowerCase$()) ? urllink.get$I(0) : (urllink.get$I(0) + ":" + urllink.get$I(1) )) + "</a></br>" );
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
var urlSets=Clazz.new_($I$(3));
var urlLink=Clazz.new_($I$(4).c$$S,[link]);
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
sb.append$S("<br>").append$S(tmp);
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
this.appendFeature$StringBuilder$I$jalview_viewmodel_seqfeatures_FeatureRendererModel$jalview_datamodel_SequenceFeature(sb, 0, fr, sf);
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
sb.append$S("<br>");
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
sb.append$S("<br>").append$S(source).append$S(",").append$S("...");
}if (ellipsis) {
sb.append$S("<br>(");
sb.append$S($I$(5).getString$S("label.output_seq_details"));
sb.append$S(")");
}return maxLineLength;
});

Clazz.newMeth(C$, 'createTooltipAnnotationReport$StringBuilder$jalview_datamodel_SequenceI$Z$Z$jalview_viewmodel_seqfeatures_FeatureRendererModel', function (tip, sequence, showDbRefs, showNpFeats, fr) {
var maxWidth=this.createSequenceAnnotationReport$StringBuilder$jalview_datamodel_SequenceI$Z$Z$jalview_viewmodel_seqfeatures_FeatureRendererModel$Z(tip, sequence, showDbRefs, showNpFeats, fr, true);
if (maxWidth > 60) {
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
