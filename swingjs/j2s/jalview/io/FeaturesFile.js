(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'java.util.HashMap','java.util.ArrayList','jalview.schemes.FeatureColour','jalview.datamodel.features.FeatureMatcherSet','jalview.util.ColorUtils','jalview.datamodel.SequenceFeature','jalview.analysis.SequenceIdMatcher','jalview.datamodel.SequenceDummy','java.util.Arrays','jalview.datamodel.SequenceI','jalview.util.ParseHtmlBodyAndLinks','StringBuilder','java.util.Collections','jalview.datamodel.Alignment','jalview.util.MapList','jalview.io.gff.GffHelperFactory','jalview.io.gff.GffHelperBase','jalview.util.StringUtils','jalview.io.FastaFile','jalview.analysis.AlignmentUtils']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FeaturesFile", null, 'jalview.io.AlignFile', 'jalview.api.FeaturesSourceI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lastmatchedAl=null;
this.matcher=null;
this.dataset=null;
this.gffVersion=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.lastmatchedAl=null;
this.matcher=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$O$jalview_io_DataSourceType', function (file, paste) {
C$.superclazz.c$$Z$O$jalview_io_DataSourceType.apply(this, [false, file, paste]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse', function (source) {
C$.superclazz.c$$jalview_io_FileParse.apply(this, [source]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Z$O$jalview_io_DataSourceType', function (parseImmediately, file, type) {
C$.superclazz.c$$Z$O$jalview_io_DataSourceType.apply(this, [parseImmediately, file, type]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parse$jalview_datamodel_AlignmentI$java_util_Map$Z', function (align, colours, removeHTML) {
return this.parse$jalview_datamodel_AlignmentI$java_util_Map$Z$Z(align, colours, removeHTML, false);
});

Clazz.newMeth(C$, 'addProperties$jalview_datamodel_AlignmentI', function (al) {
C$.superclazz.prototype.addProperties$jalview_datamodel_AlignmentI.apply(this, [al]);
if (this.dataset != null  && this.dataset.getCodonFrames$() != null  ) {
var ds=(al.getDataset$() == null ) ? al : al.getDataset$();
for (var codons, $codons = this.dataset.getCodonFrames$().iterator$(); $codons.hasNext$()&&((codons=($codons.next$())),1);) {
ds.addCodonFrame$jalview_datamodel_AlignedCodonFrame(codons);
}
}});

Clazz.newMeth(C$, 'parse$jalview_datamodel_AlignmentI$java_util_Map$Z$Z', function (align, colours, removeHTML, relaxedIdmatching) {
return this.parse$jalview_datamodel_AlignmentI$java_util_Map$java_util_Map$Z$Z(align, colours, null, removeHTML, relaxedIdmatching);
});

Clazz.newMeth(C$, 'parse$jalview_datamodel_AlignmentI$java_util_Map$java_util_Map$Z$Z', function (align, colours, filters, removeHTML, relaxedIdmatching) {
var gffProps=Clazz.new_($I$(1));
var newseqs=Clazz.new_($I$(2));
var line=null;
try {
var gffColumns;
var featureGroup=null;
while ((line=this.nextLine$()) != null ){
if (line.length$() == 0 || line.startsWith$S("#") ) {
if (line.toLowerCase$().startsWith$S("##")) {
this.processGffPragma$S$java_util_Map$jalview_datamodel_AlignmentI$java_util_List(line, gffProps, align, newseqs);
}continue;
}gffColumns=line.split$S("\\t");
if (gffColumns.length == 1) {
if (line.trim$().equalsIgnoreCase$S("GFF")) {
this.gffVersion=2;
continue;
}}if (gffColumns.length > 0 && gffColumns.length < 4 ) {
var ft=gffColumns[0];
if (ft.equalsIgnoreCase$S("STARTFILTERS")) {
this.parseFilters$java_util_Map(filters);
continue;
}if (ft.equalsIgnoreCase$S("STARTGROUP")) {
featureGroup=gffColumns[1];
} else if (ft.equalsIgnoreCase$S("ENDGROUP")) {
featureGroup=null;
} else {
var colscheme=gffColumns[1];
var colour=$I$(3).parseJalviewFeatureColour$S(colscheme);
if (colour != null ) {
colours.put$TK$TV(ft, colour);
}}continue;
}if (this.gffVersion == 0) {
this.parseJalviewFeature$S$SA$jalview_datamodel_AlignmentI$java_util_Map$Z$Z$S(line, gffColumns, align, colours, removeHTML, relaxedIdmatching, featureGroup);
} else {
this.parseGff$SA$jalview_datamodel_AlignmentI$Z$java_util_List(gffColumns, align, relaxedIdmatching, newseqs);
}}
this.resetMatcher$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.warningMessage=((this.warningMessage == null ) ? "" : this.warningMessage) + "Parsing error at\n" + line ;
System.out.println$S("Error parsing feature file: " + ex + "\n" + line );
ex.printStackTrace$java_io_PrintStream(System.err);
this.resetMatcher$();
return false;
} else {
throw ex;
}
}
for (var newseq, $newseq = newseqs.iterator$(); $newseq.hasNext$()&&((newseq=($newseq.next$())),1);) {
if (newseq.getFeatures$().hasFeatures$()) {
align.addSequence$jalview_datamodel_SequenceI(newseq);
}}
return true;
});

Clazz.newMeth(C$, 'parseFilters$java_util_Map', function (filters) {
var line;
while ((line=this.nextLine$()) != null ){
if (line.toUpperCase$().startsWith$S("ENDFILTERS")) {
return;
}var tokens=line.split$S("\\t");
if (tokens.length != 2) {
System.err.println$S(String.format$S$OA("Invalid token count %d for %d", [new Integer(tokens.length), line]));
} else {
var featureType=tokens[0];
var fm=$I$(4).fromString$S(tokens[1]);
if (fm != null  && filters != null  ) {
filters.put$TK$TV(featureType, fm);
}}}
});

Clazz.newMeth(C$, 'parseJalviewFeature$S$SA$jalview_datamodel_AlignmentI$java_util_Map$Z$Z$S', function (line, gffColumns, alignment, featureColours, removeHTML, relaxedIdMatching, featureGroup) {
if (gffColumns.length < 6) {
System.err.println$S("Ignoring feature line '" + line + "' with too few columns (" + gffColumns.length + ")" );
return false;
}var desc=gffColumns[0];
var seqId=gffColumns[1];
var seq=this.findSequence$S$jalview_datamodel_AlignmentI$java_util_List$Z(seqId, alignment, null, relaxedIdMatching);
if (!"ID_NOT_SPECIFIED".equals$O(seqId)) {
seq=this.findSequence$S$jalview_datamodel_AlignmentI$java_util_List$Z(seqId, alignment, null, relaxedIdMatching);
} else {
seqId=null;
seq=null;
var seqIndex=gffColumns[2];
try {
var idx=Integer.parseInt$S(seqIndex);
seq=alignment.getSequenceAt$I(idx);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
System.err.println$S("Invalid sequence index: " + seqIndex);
} else {
throw ex;
}
}
}if (seq == null ) {
System.out.println$S("Sequence not found: " + line);
return false;
}var startPos=Integer.parseInt$S(gffColumns[3]);
var endPos=Integer.parseInt$S(gffColumns[4]);
var ft=gffColumns[5];
if (!featureColours.containsKey$O(ft)) {
var colour=$I$(5).createColourFromName$S(ft);
featureColours.put$TK$TV(ft, Clazz.new_($I$(3).c$$java_awt_Color,[colour]));
}var sf=null;
if (gffColumns.length > 6) {
var score=NaN;
try {
score= new Float(gffColumns[6]).floatValue$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
sf=Clazz.new_($I$(6).c$$S$S$I$I$S,[ft, desc, startPos, endPos, featureGroup]);
} else {
throw ex;
}
}
sf=Clazz.new_($I$(6).c$$S$S$I$I$F$S,[ft, desc, startPos, endPos, score, featureGroup]);
} else {
sf=Clazz.new_($I$(6).c$$S$S$I$I$S,[ft, desc, startPos, endPos, featureGroup]);
}this.parseDescriptionHTML$jalview_datamodel_SequenceFeature$Z(sf, removeHTML);
seq.addSequenceFeature$jalview_datamodel_SequenceFeature(sf);
while (seqId != null  && (seq=alignment.findName$jalview_datamodel_SequenceI$S$Z(seq, seqId, false)) != null  ){
seq.addSequenceFeature$jalview_datamodel_SequenceFeature(Clazz.new_($I$(6).c$$jalview_datamodel_SequenceFeature,[sf]));
}
return true;
});

Clazz.newMeth(C$, 'resetMatcher$', function () {
this.lastmatchedAl=null;
this.matcher=null;
});

Clazz.newMeth(C$, 'findSequence$S$jalview_datamodel_AlignmentI$java_util_List$Z', function (seqId, align, newseqs, relaxedIdMatching) {
var match=null;
if (relaxedIdMatching) {
if (this.lastmatchedAl !== align ) {
this.lastmatchedAl=align;
this.matcher=Clazz.new_($I$(7).c$$jalview_datamodel_SequenceIA,[align.getSequencesArray$()]);
if (newseqs != null ) {
this.matcher.addAll$java_util_List(newseqs);
}}match=this.matcher.findIdMatch$S(seqId);
} else {
match=align.findName$S$Z(seqId, true);
if (match == null  && newseqs != null  ) {
for (var m, $m = newseqs.iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
if (seqId.equals$O(m.getName$())) {
return m;
}}
}}if (match == null  && newseqs != null  ) {
match=Clazz.new_($I$(8).c$$S,[seqId]);
if (relaxedIdMatching) {
this.matcher.addAll$java_util_List($I$(9).asList$TTA(Clazz.array($I$(10), -1, [match])));
}newseqs.add$TE(match);
}return match;
});

Clazz.newMeth(C$, 'parseDescriptionHTML$jalview_datamodel_SequenceFeature$Z', function (sf, removeHTML) {
if (sf.getDescription$() == null ) {
return;
}var parsed=Clazz.new_($I$(11).c$$S$Z$S,[sf.getDescription$(), removeHTML, this.newline]);
if (removeHTML) {
sf.setDescription$S(parsed.getNonHtmlContent$());
}for (var link, $link = parsed.getLinks$().iterator$(); $link.hasNext$()&&((link=($link.next$())),1);) {
sf.addLink$S(link);
}
});

Clazz.newMeth(C$, 'printJalviewFormat$jalview_datamodel_SequenceIA$jalview_api_FeatureRenderer$Z', function (sequences, fr, includeNonPositional) {
var visibleColours=fr.getDisplayedFeatureCols$();
var featureFilters=fr.getFeatureFilters$();
if (!includeNonPositional && (visibleColours == null  || visibleColours.isEmpty$() ) ) {
return "No Features Visible";
}var out=Clazz.new_($I$(12).c$$I,[256]);
if (visibleColours != null ) {
for (var featureColour, $featureColour = visibleColours.entrySet$().iterator$(); $featureColour.hasNext$()&&((featureColour=($featureColour.next$())),1);) {
var colour=featureColour.getValue$();
out.append$S(colour.toJalviewFormat$S(featureColour.getKey$())).append$S(this.newline);
}
}var types=visibleColours == null  ? Clazz.array(String, [0]) : visibleColours.keySet$().toArray$TTA(Clazz.array(String, [visibleColours.keySet$().size$()]));
this.outputFeatureFilters$StringBuilder$java_util_Map$java_util_Map(out, visibleColours, featureFilters);
var count=p$1.outputFeaturesByGroup$StringBuilder$jalview_api_FeatureRenderer$SA$jalview_datamodel_SequenceIA$Z.apply(this, [out, fr, types, sequences, includeNonPositional]);
return count > 0 ? out.toString() : "No Features Visible";
});

Clazz.newMeth(C$, 'outputFeatureFilters$StringBuilder$java_util_Map$java_util_Map', function (out, visible, featureFilters) {
if (visible == null  || featureFilters == null   || featureFilters.isEmpty$() ) {
return;
}var first=true;
for (var featureType, $featureType = visible.keySet$().iterator$(); $featureType.hasNext$()&&((featureType=($featureType.next$())),1);) {
var filter=featureFilters.get$O(featureType);
if (filter != null ) {
if (first) {
first=false;
out.append$S(this.newline).append$S("STARTFILTERS").append$S(this.newline);
}out.append$S(featureType).append$S("\t").append$S(filter.toStableString$()).append$S(this.newline);
}}
if (!first) {
out.append$S("ENDFILTERS").append$S(this.newline);
}});

Clazz.newMeth(C$, 'outputFeaturesByGroup$StringBuilder$jalview_api_FeatureRenderer$SA$jalview_datamodel_SequenceIA$Z', function (out, fr, featureTypes, sequences, includeNonPositional) {
var featureGroups=fr.getFeatureGroups$();
var sortedGroups=Clazz.new_($I$(2).c$$java_util_Collection,[featureGroups]);
sortedGroups.remove$O(null);
sortedGroups.remove$O("");
$I$(13).sort$java_util_List(sortedGroups);
sortedGroups.add$TE(null);
sortedGroups.add$TE("");
var count=0;
var visibleGroups=fr.getDisplayedFeatureGroups$();
for (var group, $group = sortedGroups.iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
var firstInGroup=true;
var isNullGroup=group == null  || "".equals$O(group) ;
for (var i=0; i < sequences.length; i++) {
var sequenceName=sequences[i].getName$();
var features=Clazz.new_($I$(2));
if (includeNonPositional) {
features.addAll$java_util_Collection(sequences[i].getFeatures$().getFeaturesForGroup$Z$S$SA(false, group, []));
}if (featureTypes.length > 0 && (isNullGroup || visibleGroups.contains$O(group) ) ) {
features.addAll$java_util_Collection(sequences[i].getFeatures$().getFeaturesForGroup$Z$S$SA(true, group, featureTypes));
}for (var sf, $sf = features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
if (sf.isNonPositional$() || fr.isVisible$jalview_datamodel_SequenceFeature(sf) ) {
count++;
if (firstInGroup) {
out.append$S(this.newline);
if (!isNullGroup) {
out.append$S("STARTGROUP").append$S("\t").append$S(group).append$S(this.newline);
}}firstInGroup=false;
out.append$S(this.formatJalviewFeature$S$jalview_datamodel_SequenceFeature(sequenceName, sf));
}}
}
if (!isNullGroup && !firstInGroup ) {
out.append$S("ENDGROUP").append$S("\t").append$S(group).append$S(this.newline);
}}
return count;
}, p$1);

Clazz.newMeth(C$, 'formatJalviewFeature$S$jalview_datamodel_SequenceFeature', function (sequenceName, sequenceFeature) {
var out=Clazz.new_($I$(12).c$$I,[64]);
if (sequenceFeature.description == null  || sequenceFeature.description.equals$O("") ) {
out.append$S(sequenceFeature.type).append$S("\t");
} else {
if (sequenceFeature.links != null  && sequenceFeature.getDescription$().indexOf$S("<html>") == -1 ) {
out.append$S("<html>");
}out.append$S(sequenceFeature.description);
if (sequenceFeature.links != null ) {
for (var l=0; l < sequenceFeature.links.size$(); l++) {
var label=sequenceFeature.links.elementAt$I(l);
var href=label.substring$I(label.indexOf$S("|") + 1);
label=label.substring$I$I(0, label.indexOf$S("|"));
if (sequenceFeature.description.indexOf$S(href) == -1) {
out.append$S(" <a href=\"" + href + "\">" + label + "</a>" );
}}
if (sequenceFeature.getDescription$().indexOf$S("</html>") == -1) {
out.append$S("</html>");
}}out.append$S("\t");
}out.append$S(sequenceName);
out.append$S("\t-1\t");
out.append$I(sequenceFeature.begin);
out.append$S("\t");
out.append$I(sequenceFeature.end);
out.append$S("\t");
out.append$S(sequenceFeature.type);
if (!Float.isNaN$F(sequenceFeature.score)) {
out.append$S("\t");
out.append$F(sequenceFeature.score);
}out.append$S(this.newline);
return out.toString();
});

Clazz.newMeth(C$, 'parse$', function () {
var av=this.getViewport$();
if (av != null ) {
if (av.getAlignment$() != null ) {
this.dataset=av.getAlignment$().getDataset$();
}if (this.dataset == null ) {
this.dataset=av.getAlignment$();
}} else {
this.dataset=Clazz.new_($I$(14).c$$jalview_datamodel_SequenceIA,[Clazz.array($I$(10), -1, [])]);
}var featureColours=Clazz.new_($I$(1));
var parseResult=this.parse$jalview_datamodel_AlignmentI$java_util_Map$Z$Z(this.dataset, featureColours, false, true);
if (!parseResult) {
}if (av != null ) {
} else {
this.setSeqs$jalview_datamodel_SequenceIA(this.dataset.getSequencesArray$());
}});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z', function (sqs, jvsuffix) {
System.out.println$S("Use printGffFormat() or printJalviewFormat()");
return null;
});

Clazz.newMeth(C$, 'printGffFormat$jalview_datamodel_SequenceIA$jalview_api_FeatureRenderer$Z', function (sequences, fr, includeNonPositionalFeatures) {
var visibleColours=fr.getDisplayedFeatureCols$();
var out=Clazz.new_($I$(12).c$$I,[256]);
out.append$S(String.format$S$OA("%s %d\n", ["##gff-version", new Integer(this.gffVersion == 0 ? 2 : this.gffVersion)]));
if (!includeNonPositionalFeatures && (visibleColours == null  || visibleColours.isEmpty$() ) ) {
return out.toString();
}var types=visibleColours == null  ? Clazz.array(String, [0]) : visibleColours.keySet$().toArray$TTA(Clazz.array(String, [visibleColours.keySet$().size$()]));
for (var seq, $seq = 0, $$seq = sequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
var features=Clazz.new_($I$(2));
if (includeNonPositionalFeatures) {
features.addAll$java_util_Collection(seq.getFeatures$().getNonPositionalFeatures$SA([]));
}if (visibleColours != null  && !visibleColours.isEmpty$() ) {
features.addAll$java_util_Collection(seq.getFeatures$().getPositionalFeatures$SA(types));
}for (var sf, $sf = features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
if (!sf.isNonPositional$() && !fr.isVisible$jalview_datamodel_SequenceFeature(sf) ) {
continue;
}var source=sf.featureGroup;
if (source == null ) {
source=sf.getDescription$();
}out.append$S(seq.getName$());
out.append$S("\t");
out.append$S(source);
out.append$S("\t");
out.append$S(sf.type);
out.append$S("\t");
out.append$I(sf.begin);
out.append$S("\t");
out.append$I(sf.end);
out.append$S("\t");
out.append$F(sf.score);
out.append$S("\t");
var strand=sf.getStrand$();
out.append$S(strand == 1 ? "+" : (strand == -1 ? "-" : "."));
out.append$S("\t");
var phase=sf.getPhase$();
out.append$S(phase == null  ? "." : phase);
var attributes=sf.getAttributes$();
if (attributes != null ) {
out.append$S("\t").append$S(attributes);
}out.append$S(this.newline);
}
}
return out.toString();
});

Clazz.newMeth(C$, 'constructCodonMappingFromAlign$java_util_List$Z$I', function (alignedRegions, mapIsFromCdna, strand) {
if (strand == 0) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Invalid strand for a codon mapping (cannot be 0)"]);
}var regions=alignedRegions.size$();
var fromRanges=Clazz.array(Integer.TYPE, [regions * 2]);
var toRanges=Clazz.array(Integer.TYPE, [regions * 2]);
var fromRangesIndex=0;
var toRangesIndex=0;
for (var range, $range = alignedRegions.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
var tokens=range.split$S(" ");
if (tokens.length != 3) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Wrong number of fields for Align"]);
}var fromStart=0;
var toStart=0;
var fromCount=0;
try {
fromStart=Integer.parseInt$S(tokens[0]);
toStart=Integer.parseInt$S(tokens[1]);
fromCount=Integer.parseInt$S(tokens[2]);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Invalid number in Align field: " + nfe.getMessage$()]);
} else {
throw nfe;
}
}
if (!mapIsFromCdna) {
fromCount*=3;
var temp=fromStart;
fromStart=toStart;
toStart=temp;
}fromRanges[fromRangesIndex++]=fromStart;
fromRanges[fromRangesIndex++]=fromStart + strand * (fromCount - 1);
toRanges[toRangesIndex++]=toStart;
toRanges[toRangesIndex++]=toStart + ((fromCount - 1)/3|0);
}
return Clazz.new_($I$(15).c$$IA$IA$I$I,[fromRanges, toRanges, 3, 1]);
});

Clazz.newMeth(C$, 'parseGff$SA$jalview_datamodel_AlignmentI$Z$java_util_List', function (gffColumns, alignment, relaxedIdMatching, newseqs) {
if (gffColumns.length < 5) {
System.err.println$S("Ignoring GFF feature line with too few columns (" + gffColumns.length + ")" );
return null;
}var seqId=gffColumns[0];
var seq=this.findSequence$S$jalview_datamodel_AlignmentI$java_util_List$Z(seqId, alignment, newseqs, relaxedIdMatching);
var sf=null;
var helper=$I$(16).getHelper$SA(gffColumns);
if (helper != null ) {
try {
sf=helper.processGff$(seq, gffColumns, alignment, newseqs, relaxedIdMatching);
if (sf != null ) {
seq.addSequenceFeature$jalview_datamodel_SequenceFeature(sf);
while ((seq=alignment.findName$jalview_datamodel_SequenceI$S$Z(seq, seqId, true)) != null ){
seq.addSequenceFeature$jalview_datamodel_SequenceFeature(Clazz.new_($I$(6).c$$jalview_datamodel_SequenceFeature,[sf]));
}
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("GFF parsing failed with: " + e.getMessage$());
return null;
} else {
throw e;
}
}
}return seq;
});

Clazz.newMeth(C$, 'processGffColumnNine$S$jalview_datamodel_SequenceFeature', function (attributes, sf) {
sf.setAttributes$S(attributes);
var nameValueSeparator=this.gffVersion == 3 ? "=" : " ";
var nameValues=$I$(17).parseNameValuePairs$S$S$C$S(attributes, ";", nameValueSeparator, ",");
for (var attr, $attr = nameValues.entrySet$().iterator$(); $attr.hasNext$()&&((attr=($attr.next$())),1);) {
var values=$I$(18).listToDelimitedString$java_util_List$S(attr.getValue$(), "; ");
sf.setValue$S$O(attr.getKey$(), values);
if ("Note".equals$O(attr.getKey$())) {
sf.setDescription$S(values);
}}
});

Clazz.newMeth(C$, 'processAsFasta$jalview_datamodel_AlignmentI$java_util_List', function (align, newseqs) {
try {
this.mark$();
} catch (q) {
if (Clazz.exceptionOf(q,"java.io.IOException")){
} else {
throw q;
}
}
var parser=Clazz.new_($I$(19).c$$jalview_io_FileParse,[this]);
var includedseqs=parser.getSeqs$();
var smatcher=Clazz.new_($I$(7).c$$java_util_List,[newseqs]);
for (var p=0, pSize=includedseqs.size$(); p < pSize; p++) {
var includedSeq=includedseqs.get$I(p);
var dummyseq=smatcher.findIdMatch$jalview_datamodel_SequenceI(includedSeq);
if (dummyseq != null  && Clazz.instanceOf(dummyseq, "jalview.datamodel.SequenceDummy") ) {
(dummyseq).become$jalview_datamodel_SequenceI(includedSeq);
dummyseq.createDatasetSequence$();
for (var mapping, $mapping = align.getCodonFrames$().iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
mapping.updateToDataset$jalview_datamodel_SequenceI(dummyseq);
}
includedseqs.set$I$TE(p, dummyseq);
newseqs.remove$O(dummyseq);
}}
for (var seq, $seq = includedseqs.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
$I$(20).alignSequenceAs$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentI$S$Z$Z(seq, align, String.valueOf$C(align.getGapCharacter$()), false, true);
var sfs=seq.getFeatures$().getPositionalFeatures$SA([]);
if (!sfs.isEmpty$()) {
var newName=sfs.get$I(0).getValue$S("$RENAME_TO$");
if (newName != null ) {
seq.setName$S(newName);
}}align.addSequence$jalview_datamodel_SequenceI(seq);
}
});

Clazz.newMeth(C$, 'processGffPragma$S$java_util_Map$jalview_datamodel_AlignmentI$java_util_List', function (line, gffProps, align, newseqs) {
line=line.trim$();
if ("###".equals$O(line)) {
return;
}var tokens=line.substring$I(2).split$S(" ");
var pragma=tokens[0];
var value=tokens.length == 1 ? null : tokens[1];
if ("gff-version".equalsIgnoreCase$S(pragma)) {
if (value != null ) {
try {
this.gffVersion=Integer.parseInt$S(value.split$S("\\.")[0]);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
}} else if ("sequence-region".equalsIgnoreCase$S(pragma)) {
} else if ("feature-ontology".equalsIgnoreCase$S(pragma)) {
} else if ("attribute-ontology".equalsIgnoreCase$S(pragma)) {
} else if ("source-ontology".equalsIgnoreCase$S(pragma)) {
} else if ("species-build".equalsIgnoreCase$S(pragma)) {
gffProps.put$TK$TV("species-build", value);
} else if ("fasta".equalsIgnoreCase$S(pragma)) {
this.processAsFasta$jalview_datamodel_AlignmentI$java_util_List(align, newseqs);
} else {
System.err.println$S("Ignoring unknown pragma: " + line);
}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
