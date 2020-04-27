(function(){var P$=Clazz.newPackage("jalview.io.gff"),I$=[[0,'jalview.datamodel.MappingType','java.util.Arrays','jalview.util.MapList','jalview.analysis.SequenceIdMatcher','jalview.datamodel.SequenceDummy','jalview.datamodel.SequenceI','java.util.HashMap','java.util.ArrayList','jalview.datamodel.SequenceFeature','jalview.util.StringUtils','jalview.datamodel.AlignedCodonFrame']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GffHelperBase", null, null, 'jalview.io.gff.GffHelperI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lastmatchedAl=null;
this.matcher=null;
},1);

C$.$fields$=[['O',['lastmatchedAl','jalview.datamodel.AlignmentI','matcher','jalview.analysis.SequenceIdMatcher']]]

Clazz.newMeth(C$, 'constructMappingFromAlign$I$I$I$I$jalview_datamodel_MappingType', function (fromStart, fromEnd, toStart, toEnd, mappingType) {
var from=Clazz.array(Integer.TYPE, -1, [fromStart, fromEnd]);
var to=Clazz.array(Integer.TYPE, -1, [toStart, toEnd]);
if (mappingType === $I$(1).PeptideToNucleotide ) {
var temp=from;
from=to;
to=temp;
mappingType=mappingType.getInverse$();
}var fromRatio=mappingType.getFromRatio$();
var toRatio=mappingType.getToRatio$();
if (!C$.trimMapping$IA$IA$I$I(from, to, fromRatio, toRatio)) {
System.err.println$S("Ignoring mapping from " + $I$(2).toString$IA(from) + " to " + $I$(2).toString$IA(to) + " as counts don't match!" );
return null;
}return Clazz.new_($I$(3,1).c$$IA$IA$I$I,[from, to, fromRatio, toRatio]);
});

Clazz.newMeth(C$, 'trimMapping$IA$IA$I$I', function (from, to, fromRatio, toRatio) {
var fromLength=Math.abs(from[1] - from[0]) + 1;
var toLength=Math.abs(to[1] - to[0]) + 1;
var fromOverlap=fromLength * toRatio - toLength * fromRatio;
if (fromOverlap == 0) {
return true;
}if (fromOverlap > 0 && fromOverlap % toRatio == 0 ) {
System.err.print$S("Truncating mapping from " + $I$(2).toString$IA(from) + " to " );
if (from[1] > from[0]) {
from[1]-=(fromOverlap/toRatio|0);
} else {
from[1]+=(fromOverlap/toRatio|0);
}System.err.println$S($I$(2).toString$IA(from));
return true;
} else if (fromOverlap < 0 && fromOverlap % fromRatio == 0 ) {
fromOverlap=-fromOverlap;
System.err.print$S("Truncating mapping to " + $I$(2).toString$IA(to) + " to " );
if (to[1] > to[0]) {
to[1]-=(fromOverlap/fromRatio|0);
} else {
to[1]+=(fromOverlap/fromRatio|0);
}System.err.println$S($I$(2).toString$IA(to));
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'findSequence$S$jalview_datamodel_AlignmentI$java_util_List$Z', function (seqId, align, newseqs, relaxedIdMatching) {
if (seqId == null ) {
return null;
}var match=null;
if (relaxedIdMatching) {
if (this.lastmatchedAl !== align ) {
this.lastmatchedAl=align;
this.matcher=Clazz.new_([align.getSequencesArray$()],$I$(4,1).c$$jalview_datamodel_SequenceIA);
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
match=Clazz.new_($I$(5,1).c$$S,[seqId]);
if (relaxedIdMatching) {
this.matcher.addAll$java_util_List($I$(2,"asList$OA",[Clazz.array($I$(6), -1, [match])]));
}newseqs.add$O(match);
}return match;
});

Clazz.newMeth(C$, 'parseNameValuePairs$S$S$C$S', function (text, namesDelimiter, nameValueSeparator, valuesDelimiter) {
var map=Clazz.new_($I$(7,1));
if (text == null  || text.trim$().length$() == 0 ) {
return map;
}for (var nameValuePair, $nameValuePair = 0, $$nameValuePair = text.trim$().split$S(namesDelimiter); $nameValuePair<$$nameValuePair.length&&((nameValuePair=($$nameValuePair[$nameValuePair])),1);$nameValuePair++) {
nameValuePair=nameValuePair.trim$();
if (nameValuePair.length$() == 0) {
continue;
}var sepPos=nameValuePair.indexOf$I(nameValueSeparator);
if (sepPos == -1) {
continue;
}var name=nameValuePair.substring$I$I(0, sepPos).trim$();
var values=nameValuePair.substring$I(sepPos + 1).trim$();
if (values.isEmpty$()) {
continue;
}var vals=map.get$O(name);
if (vals == null ) {
vals=Clazz.new_($I$(8,1));
map.put$O$O(name, vals);
}if (values.indexOf$I(nameValueSeparator) != -1) {
vals.add$O(values);
} else {
for (var val, $val = 0, $$val = values.split$S(valuesDelimiter); $val<$$val.length&&((val=($$val[$val])),1);$val++) {
vals.add$O(val);
}
}}
return map;
}, 1);

Clazz.newMeth(C$, 'buildSequenceFeature$SA$java_util_Map', function (gff, attributes) {
return this.buildSequenceFeature$SA$I$S$java_util_Map(gff, 2, gff[1], attributes);
});

Clazz.newMeth(C$, 'buildSequenceFeature$SA$I$S$java_util_Map', function (gff, typeColumn, group, attributes) {
try {
var start=Integer.parseInt$S(gff[3]);
var end=Integer.parseInt$S(gff[4]);
var score=0.0;
try {
score=Float.parseFloat$S(gff[5]);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
var sf=Clazz.new_($I$(9,1).c$$S$S$I$I$F$S,[gff[typeColumn], gff[1], start, end, score, group]);
sf.setStrand$S(gff[6]);
sf.setPhase$S(gff[7]);
if (attributes != null ) {
for (var attr, $attr = attributes.entrySet$().iterator$(); $attr.hasNext$()&&((attr=($attr.next$())),1);) {
var key=attr.getKey$();
var values=attr.getValue$();
if (values.size$() == 1 && values.get$I(0).contains$CharSequence("=") ) {
var valueMap=C$.parseAttributeMap$S(values.get$I(0));
sf.setValue$S$O(key, valueMap);
} else {
var csvValues=$I$(10).listToDelimitedString$java_util_List$S(values, ",");
csvValues=$I$(10,"urlDecode$S$S",[csvValues, ",=;\t%"]);
sf.setValue$S$O(key, csvValues);
if ("Note".equals$O(key)) {
sf.setDescription$S(csvValues);
}}}
}return sf;
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
System.err.println$S("Invalid number in gff: " + nfe.getMessage$());
return null;
} else {
throw nfe;
}
}
});

Clazz.newMeth(C$, 'parseAttributeMap$S', function (s) {
var map=Clazz.new_($I$(7,1));
var fields=s.split$S("=");
var valid=true;
if (fields.length < 2) {
valid=false;
} else if (fields[0].isEmpty$() || fields[0].contains$CharSequence(",") ) {
valid=false;
} else {
for (var i=1; i < fields.length - 1; i++) {
if (fields[i].isEmpty$() || !fields[i].contains$CharSequence(",") ) {
valid=false;
}}
}if (!valid) {
System.err.println$S("Invalid GFF attribute format: " + s);
return map;
}var i=0;
while (i < fields.length - 1){
var lastPair=i == fields.length - 2;
var before=fields[i];
var after=fields[i + 1];
var theKey=before.contains$CharSequence(",") ? before.substring$I(before.lastIndexOf$S(",") + 1) : before;
theKey=theKey.trim$();
if (theKey.isEmpty$()) {
System.err.println$S("Invalid GFF attribute format: " + s);
map.clear$();
return map;
}var theValue=after.contains$CharSequence(",") && !lastPair  ? after.substring$I$I(0, after.lastIndexOf$S(",")) : after;
map.put$O$O($I$(10,"urlDecode$S$S",[theKey, ",=;\t%"]), $I$(10,"urlDecode$S$S",[theValue, ",=;\t%"]));
i+=1;
}
return map;
}, 1);

Clazz.newMeth(C$, 'getMapping$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI', function (align, fromSeq, toSeq) {
var acf=align.getMapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(fromSeq, toSeq);
if (acf == null ) {
acf=Clazz.new_($I$(11,1));
}return acf;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
