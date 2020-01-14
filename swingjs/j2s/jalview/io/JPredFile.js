(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.util.Hashtable','java.util.Vector','java.util.StringTokenizer','StringBuffer','jalview.datamodel.Sequence','jalview.util.MessageManager','jalview.datamodel.Alignment','jalview.io.JnetAnnotationMaker']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JPredFile", null, 'jalview.io.AlignFile');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ids=null;
this.conf=null;
this.Scores=null;
this.Symscores=null;
this.QuerySeqPosition=0;
this.annotSeqs=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.annotSeqs=null;
}, 1);

Clazz.newMeth(C$, 'c$$O$jalview_io_DataSourceType', function (inFile, sourceType) {
C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this, [inFile, sourceType]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse', function (source) {
C$.superclazz.c$$jalview_io_FileParse.apply(this, [source]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setQuerySeqPosition$I', function (QuerySeqPosition) {
this.QuerySeqPosition=QuerySeqPosition;
});

Clazz.newMeth(C$, 'getQuerySeqPosition$', function () {
return this.QuerySeqPosition;
});

Clazz.newMeth(C$, 'getScores$', function () {
return this.Scores;
});

Clazz.newMeth(C$, 'getSymscores$', function () {
return this.Symscores;
});

Clazz.newMeth(C$, 'initData$', function () {
C$.superclazz.prototype.initData$.apply(this, []);
this.Scores=Clazz.new_($I$(1));
this.ids=null;
this.conf=null;
});

Clazz.newMeth(C$, 'parse$', function () {
var line;
this.QuerySeqPosition=-1;
this.noSeqs=0;
var seq_entries=Clazz.new_($I$(2));
var ids=Clazz.new_($I$(2));
var Symscores=Clazz.new_($I$(1));
while ((line=this.nextLine$()) != null ){
var str=Clazz.new_($I$(3).c$$S$S,[line, ":"]);
var id="";
if (!str.hasMoreTokens$()) {
continue;
}id=str.nextToken$();
var seqsym=str.nextToken$();
var symbols=Clazz.new_($I$(3).c$$S$S,[seqsym, ","]);
var numSymbols=symbols.countTokens$();
if (numSymbols == 0) {
continue;
}if (seqsym.length$() != (2 * numSymbols)) {
if (this.Scores.containsKey$O(id)) {
var i=1;
while (this.Scores.containsKey$O(id + "_" + i )){
i++;
}
id=id + "_" + i ;
}var scores=Clazz.new_($I$(2));
var i=0;
var ascore="dead";
try {
while (symbols.hasMoreTokens$()){
ascore=symbols.nextToken$();
var score= new Float(ascore);
scores.addElement$TE(score);
}
this.Scores.put$TK$TV(id, scores);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
i=scores.size$();
for (var j=0; j < i; j++) {
scores.setElementAt$TE$I((scores.elementAt$I(j)).toString(), j);
}
scores.addElement$TE(ascore);
while (symbols.hasMoreTokens$()){
ascore=symbols.nextToken$();
scores.addElement$TE(ascore);
}
this.Scores.put$TK$TV(id, scores);
} else {
throw e;
}
}
} else if (id.equals$O("jnetconf")) {
id="Prediction Confidence";
this.conf=Clazz.new_($I$(2).c$$I,[numSymbols]);
for (var i=0; i < numSymbols; i++) {
this.conf.setElementAt$TE$I(symbols.nextToken$(), i);
}
} else {
var newseq=Clazz.new_($I$(4));
for (var i=0; i < numSymbols; i++) {
newseq.append$S(symbols.nextToken$());
}
if (id.indexOf$S(";") > -1) {
seq_entries.addElement$TE(newseq);
var i=1;
var name=id.substring$I(id.indexOf$S(";") + 1);
while (ids.lastIndexOf$O(name) > -1){
name=id.substring$I(id.indexOf$S(";") + 1) + "_" + ++i ;
}
if (this.QuerySeqPosition == -1) {
this.QuerySeqPosition=ids.size$();
}ids.addElement$TE(name);
this.noSeqs++;
} else {
if (id.equals$O("JNETPRED")) {
id="Predicted Secondary Structure";
}seq_entries.addElement$TE(newseq.toString());
ids.addElement$TE(id);
Symscores.put$TK$TV(id,  new Integer(ids.size$() - 1));
}}}
this.maxLength=seq_entries.elementAt$I(0).toString().length$();
for (var i=0; i < ids.size$(); i++) {
var newSeq=Clazz.new_($I$(5).c$$S$S$I$I,[ids.elementAt$I(i).toString(), seq_entries.elementAt$I(i).toString(), 1, seq_entries.elementAt$I(i).toString().length$()]);
if (this.maxLength != seq_entries.elementAt$I(i).toString().length$()) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(6).formatMessage$S$SA("exception.jpredconcide_entry_has_unexpected_number_of_columns", Clazz.array(String, -1, [ids.elementAt$I(i).toString()]))]);
}if ((newSeq.getName$().startsWith$S("QUERY") || newSeq.getName$().startsWith$S("align;") ) && (this.QuerySeqPosition == -1) ) {
this.QuerySeqPosition=this.seqs.size$();
}this.seqs.addElement$TE(newSeq);
}
if (this.seqs.size$() > 0 && this.QuerySeqPosition > -1 ) {
var tal=Clazz.new_($I$(7).c$$jalview_datamodel_SequenceIA,[this.getSeqsAsArray$()]);
try {
$I$(8).add_annotation$jalview_io_JPredFile$jalview_datamodel_AlignmentI$I$Z(this, tal, this.QuerySeqPosition, true);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
tal=null;
var ex=Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(6).formatMessage$S$SA("exception.couldnt_parse_concise_annotation_for_prediction", Clazz.array(String, -1, [e.getMessage$()]))]);
e.printStackTrace$();
throw ex;
} else {
throw e;
}
}
this.annotations=Clazz.new_($I$(2));
var aan=tal.getAlignmentAnnotation$();
for (var aai=0; aan != null  && aai < aan.length ; aai++) {
this.annotations.addElement$TE(aan[aai]);
}
}});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z', function (sqs, jvsuffix) {
return "Not Supported";
});

Clazz.newMeth(C$, 'removeNonSequences$', function () {
if (this.annotSeqs != null ) {
return;
}this.annotSeqs=Clazz.new_($I$(2));
var newseqs=Clazz.new_($I$(2));
var i=0;
var j=this.seqs.size$();
for (; i < this.QuerySeqPosition; i++) {
this.annotSeqs.addElement$TE(this.seqs.elementAt$I(i));
}
{
var sq=this.seqs.elementAt$I(j - 1);
if (sq.getName$().toUpperCase$().startsWith$S("JPRED")) {
this.annotSeqs.addElement$TE(sq);
this.seqs.removeElementAt$I(--j);
}}for (; i < j; i++) {
newseqs.addElement$TE(this.seqs.elementAt$I(i));
}
this.seqs.removeAllElements$();
this.seqs=newseqs;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
