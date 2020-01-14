(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.util.LinkedHashMap','java.util.HashMap','java.awt.Color','java.util.regex.Pattern','java.util.ArrayList','StringBuilder',['jalview.io.TCoffeeScoreFile','.Header'],['jalview.io.TCoffeeScoreFile','.Block'],'jalview.analysis.SequenceIdMatcher','jalview.datamodel.Annotation','jalview.util.Comparison']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TCoffeeScoreFile", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.io.AlignFile');
C$.colors=null;
C$.SCORES_WITH_RESIDUE_NUMS=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.colors=Clazz.array($I$(3), -1, [Clazz.new_($I$(3).c$$I$I$I,[102, 102, 255]), Clazz.new_($I$(3).c$$I$I$I,[0, 255, 0]), Clazz.new_($I$(3).c$$I$I$I,[102, 255, 0]), Clazz.new_($I$(3).c$$I$I$I,[204, 255, 0]), Clazz.new_($I$(3).c$$I$I$I,[255, 255, 0]), Clazz.new_($I$(3).c$$I$I$I,[255, 204, 0]), Clazz.new_($I$(3).c$$I$I$I,[255, 153, 0]), Clazz.new_($I$(3).c$$I$I$I,[255, 102, 0]), Clazz.new_($I$(3).c$$I$I$I,[255, 51, 0]), Clazz.new_($I$(3).c$$I$I$I,[255, 34, 0])]);
C$.SCORES_WITH_RESIDUE_NUMS=$I$(4).compile$S("^\\d+\\s([^\\s]+)\\s+\\d+$");
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.header=null;
this.scores=null;
this.fWidth=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$jalview_io_DataSourceType', function (inFile, fileSourceType) {
C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this, [inFile, fileSourceType]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse', function (source) {
C$.superclazz.c$$jalview_io_FileParse.apply(this, [source]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getHeight$', function () {
return this.scores != null  && this.scores.size$() > 0  ? this.scores.size$() - 1 : 0;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.fWidth != null  ? (this.fWidth).intValue$() : 0;
});

Clazz.newMeth(C$, 'getScoresFor$S', function (id) {
return this.scores != null  && this.scores.containsKey$O(id)  ? this.scores.get$O(id).toString() : "";
});

Clazz.newMeth(C$, 'getScoresList$', function () {
if (this.scores == null ) {
return null;
}var result=Clazz.new_($I$(5).c$$I,[this.scores.size$()]);
for (var it, $it = this.scores.entrySet$().iterator$(); $it.hasNext$()&&((it=($it.next$())),1);) {
result.add$TE(it.getValue$().toString());
}
return result;
});

Clazz.newMeth(C$, 'getScoresArray$', function () {
if (this.scores == null ) {
return null;
}var result=Clazz.array(Byte.TYPE, [this.scores.size$(), null]);
var rowCount=0;
for (var it, $it = this.scores.entrySet$().iterator$(); $it.hasNext$()&&((it=($it.next$())),1);) {
var line=it.getValue$().toString();
var seqValues=Clazz.array(Byte.TYPE, [line.length$()]);
for (var j=0, c=line.length$(); j < c; j++) {
var val=($b$[0] = (((line.charCodeAt$I(j)) - 48)|0), $b$[0]);
seqValues[j]=((val >= 0 && val <= 9 ) ? (val|0) : (-1|0)|0);
}
result[rowCount++]=seqValues;
}
return result;
});

Clazz.newMeth(C$, 'parse$', function () {
this.header=C$.readHeader$jalview_io_FileParse(this);
if (this.header == null ) {
this.error=true;
return;
}this.scores=Clazz.new_($I$(1));
for (var entry, $entry = this.header.scores.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
this.scores.put$TK$TV(entry.getKey$(), Clazz.new_($I$(6)));
}
var block;
while ((block=C$.readBlock$jalview_io_FileParse$I(this, this.header.scores.size$())) != null ){
for (var entry, $entry = block.items.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var scoreStringBuilder=this.scores.get$O(entry.getKey$());
if (scoreStringBuilder == null ) {
this.error=true;
this.errormessage=String.format$S$OA("Invalid T-Coffee score file: Sequence ID \'%s\' is not declared in header section", [entry.getKey$()]);
return;
}scoreStringBuilder.append$S(entry.getValue$());
}
}
for (var str, $str = this.scores.values$().iterator$(); $str.hasNext$()&&((str=($str.next$())),1);) {
if (this.fWidth == null ) {
this.fWidth=new Integer(str.length$());
} else if ((this.fWidth).intValue$() !== str.length$() ) {
this.error=true;
this.errormessage="Invalid T-Coffee score file: All the score sequences must have the same length";
return;
}}
return;
});

Clazz.newMeth(C$, 'parseInt$S', function (str) {
try {
return Integer.parseInt$S(str);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return 0;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'readHeader$jalview_io_FileParse', function (reader) {
var result=null;
try {
result=Clazz.new_($I$(7));
result.head=reader.nextLine$();
var line;
while ((line=reader.nextLine$()) != null ){
if (line.startsWith$S("SCORE=")) {
result.score=C$.parseInt$S(line.substring$I(6).trim$());
break;
}}
if ((line=reader.nextLine$()) == null  || !"*".equals$O(line.trim$()) ) {
C$.error$jalview_io_FileParse$S(reader, "Invalid T-COFFEE score format (NO BAD/AVG/GOOD header)");
return null;
}if ((line=reader.nextLine$()) == null  || !"BAD AVG GOOD".equals$O(line.trim$()) ) {
C$.error$jalview_io_FileParse$S(reader, "Invalid T-COFFEE score format (NO BAD/AVG/GOOD header)");
return null;
}if ((line=reader.nextLine$()) == null  || !"*".equals$O(line.trim$()) ) {
C$.error$jalview_io_FileParse$S(reader, "Invalid T-COFFEE score format (NO BAD/AVG/GOOD header)");
return null;
}while ((line=reader.nextLine$()) != null ){
if ("".equals$O(line)) {
break;
}var p=line.indexOf$S(":");
if (p == -1) {
continue;
}var id=line.substring$I$I(0, p).trim$();
var val=C$.parseInt$S(line.substring$I(p + 1).trim$());
if ("".equals$O(id)) {
continue;
}result.scores.put$TK$TV(id, new Integer(val));
}
if (result == null ) {
C$.error$jalview_io_FileParse$S(reader, "T-COFFEE score file had no per-sequence scores");
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
C$.error$jalview_io_FileParse$S(reader, "Unexpected problem parsing T-Coffee score ascii file");
throw e;
} else {
throw e;
}
}
return result;
}, 1);

Clazz.newMeth(C$, 'error$jalview_io_FileParse$S', function (reader, errm) {
reader.error=true;
if (reader.errormessage == null ) {
reader.errormessage=errm;
} else {
reader.errormessage += "\n" + errm;
}}, 1);

Clazz.newMeth(C$, 'readBlock$jalview_io_FileParse$I', function (reader, size) {
var result=Clazz.new_($I$(8).c$$I,[size]);
var line;
while ((line=reader.nextLine$()) != null  && "".equals$O(line.trim$()) ){
}
if (line == null ) {
return null;
}do {
if ("".equals$O(line.trim$())) {
break;
}var p=line.indexOf$S(" ");
if (p == -1) {
if (reader.warningMessage == null ) {
reader.warningMessage="";
}reader.warningMessage += "Possible parsing error - expected to find a space in line: '" + line + "'\n" ;
continue;
}var id=line.substring$I$I(0, p).trim$();
var val=line.substring$I(p + 1).trim$();
var m=C$.SCORES_WITH_RESIDUE_NUMS.matcher$CharSequence(val);
if (m.matches$()) {
val=m.group$I(1);
}result.items.put$TK$TV(id, val);
} while ((line=reader.nextLine$()) != null );
return result;
}, 1);

Clazz.newMeth(C$, 'annotateAlignment$jalview_datamodel_AlignmentI$Z', function (al, matchids) {
if (al.getHeight$() != this.getHeight$() || al.getWidth$() != this.getWidth$() ) {
var info=String.format$S$OA("align w: %s, h: %s; score: w: %s; h: %s ", [new Integer(al.getWidth$()), new Integer(al.getHeight$()), new Integer(this.getWidth$()), new Integer(this.getHeight$())]);
this.warningMessage="Alignment shape does not match T-Coffee score file shape -- " + info;
return false;
}var added=false;
var i=0;
var sidmatcher=Clazz.new_($I$(9).c$$jalview_datamodel_SequenceIA,[al.getSequencesArray$()]);
var scoreMatrix=this.getScoresArray$();
for (var id, $id = this.scores.entrySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
var srow=scoreMatrix[i];
var s;
if (matchids) {
s=sidmatcher.findIdMatch$S(id.getKey$());
} else {
s=al.getSequenceAt$I(i);
}i++;
if (s == null  && i != this.scores.size$()  && !id.getKey$().equals$O("cons") ) {
System.err.println$S("No " + (matchids ? "match " : " sequences left ") + " for TCoffee score set : " + id.getKey$() );
continue;
}var jSize=al.getWidth$() < srow.length ? al.getWidth$() : srow.length;
var annotations=Clazz.array($I$(10), [al.getWidth$()]);
for (var j=0; j < jSize; j++) {
var val=($b$[0] = srow[j], $b$[0]);
if (s != null  && $I$(11).isGap$C(s.getCharAt$I(j)) ) {
annotations[j]=null;
if (val > 0) {
System.err.println$S("Warning: non-zero value for positional T-COFFEE score for gap at " + j + " in sequence " + s.getName$() );
}} else {
annotations[j]=Clazz.new_($I$(10).c$$S$S$C$F$java_awt_Color,[s == null  ? "" + val : null, s == null  ? "" + val : null, "\u0000", val * 1.0, val >= 0 && val < C$.colors.length  ? C$.colors[val] : $I$(3).white]);
}}
var aa=al.findOrCreateAnnotation$S$S$Z$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup("TCoffeeScore", "TCoffeeScore", false, s, null);
if (s != null ) {
aa.label="T-COFFEE";
aa.description="" + id.getKey$();
aa.annotations=annotations;
aa.visible=false;
aa.belowAlignment=false;
aa.setScore$D(this.header.getScoreFor$S(id.getKey$()));
aa.createSequenceMapping$jalview_datamodel_SequenceI$I$Z(s, s.getStart$(), true);
s.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(aa);
aa.adjustForAlignment$();
} else {
aa.graph=0;
aa.label="T-COFFEE";
aa.description="TCoffee column reliability score";
aa.annotations=annotations;
aa.belowAlignment=true;
aa.visible=true;
aa.setScore$D(this.header.getScoreAvg$());
}aa.showAllColLabels=true;
aa.validateRangeAndDisplay$();
added=true;
}
return added;
});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z', function (sqs, jvsuffix) {
return "Not valid.";
});
var $b$ = new Int8Array(1);
;
(function(){var C$=Clazz.newClass(P$.TCoffeeScoreFile, "Header", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.head=null;
this.score=0;
this.scores=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.scores=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getScoreAvg$', function () {
return this.score;
});

Clazz.newMeth(C$, 'getScoreFor$S', function (ID) {
return this.scores.containsKey$O(ID) ? (this.scores.get$O(ID)).intValue$() : -1;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.TCoffeeScoreFile, "Block", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.size=0;
this.items=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (size) {
C$.$init$.apply(this);
this.size=size;
this.items=Clazz.new_($I$(2).c$$I,[size]);
}, 1);

Clazz.newMeth(C$, 'getScoresFor$S', function (id) {
return this.items.get$O(id);
});

Clazz.newMeth(C$, 'getConsensus$', function () {
return this.items.get$O("cons");
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
