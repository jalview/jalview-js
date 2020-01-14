(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'StringBuffer','java.util.Vector','java.util.HashMap','java.util.StringTokenizer','jalview.io.StockholmFile','jalview.util.Format']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ClustalFile", null, 'jalview.io.AlignFile');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_io_DataSourceType', function (inFile, sourceType) {
C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this, [inFile, sourceType]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse', function (source) {
C$.superclazz.c$$jalview_io_FileParse.apply(this, [source]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initData$', function () {
C$.superclazz.prototype.initData$.apply(this, []);
});

Clazz.newMeth(C$, 'parse$', function () {
var i=0;
var flag=false;
var top=false;
var pssecstr=Clazz.new_($I$(1));
var consstr=Clazz.new_($I$(1));
var headers=Clazz.new_($I$(2));
var seqhash=Clazz.new_($I$(3));
var tempseq;
var line;
var id;
var str;
try {
while ((line=this.nextLine$()) != null ){
if (line.length$() == 0) {
top=true;
}var isConservation=line.startsWith$S(" ") || line.startsWith$S("\t") ;
if (!isConservation) {
str=Clazz.new_($I$(4).c$$S,[line]);
if (str.hasMoreTokens$()) {
id=str.nextToken$();
if (id.equalsIgnoreCase$S("CLUSTAL")) {
flag=true;
} else {
if (flag) {
if (seqhash.containsKey$O(id)) {
tempseq=seqhash.get$O(id);
} else {
tempseq=Clazz.new_($I$(1));
seqhash.put$TK$TV(id, tempseq);
}if (!(headers.contains$O(id))) {
headers.addElement$TE(id);
}if (str.hasMoreTokens$()) {
tempseq.append$S(str.nextToken$());
}top=false;
}}} else {
flag=true;
}} else {
if (line.matches$S("\\s+(-|\\.|\\(|\\[|\\]|\\))+")) {
if (top) {
pssecstr.append$S(line.trim$());
} else {
consstr.append$S(line.trim$());
}}}}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Exception parsing clustal file " + e);
e.printStackTrace$();
} else {
throw e;
}
}
if (flag) {
this.noSeqs=headers.size$();
for (i=0; i < headers.size$(); i++) {
if (seqhash.get$O(headers.elementAt$I(i)) != null ) {
if (this.maxLength < seqhash.get$O(headers.elementAt$I(i)).toString().length$()) {
this.maxLength=seqhash.get$O(headers.elementAt$I(i)).toString().length$();
}var newSeq=this.parseId$S(headers.elementAt$I(i).toString());
newSeq.setSequence$S(seqhash.get$O(headers.elementAt$I(i).toString()).toString());
this.seqs.addElement$TE(newSeq);
} else {
System.err.println$S("Clustal File Reader: Can't find sequence for " + headers.elementAt$I(i));
}}
var lastssa=null;
if (pssecstr.length$() == this.maxLength) {
var ss=Clazz.new_($I$(2));
var ssa=lastssa=$I$(5).parseAnnotationRow$java_util_Vector$S$S(ss, "secondary structure", pssecstr.toString());
ssa.label="Secondary Structure";
this.annotations.addElement$TE(ssa);
}if (consstr.length$() == this.maxLength) {
var ss=Clazz.new_($I$(2));
var ssa=$I$(5).parseAnnotationRow$java_util_Vector$S$S(ss, "secondary structure", consstr.toString());
ssa.label="Consensus Secondary Structure";
if (lastssa == null  || !lastssa.getRNAStruc$().equals$O(ssa.getRNAStruc$().replace$C$C("-", ".")) ) {
this.annotations.addElement$TE(ssa);
}}}});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z', function (s, jvsuffix) {
var out=Clazz.new_($I$(1).c$$S,["CLUSTAL" + this.newline + this.newline ]);
var max=0;
var maxid=0;
var i=0;
while ((i < s.length) && (s[i] != null ) ){
var tmp=this.printId$jalview_datamodel_SequenceI$Z(s[i], jvsuffix);
max=Math.max(max, s[i].getLength$());
if (tmp.length$() > maxid) {
maxid=tmp.length$();
}i++;
}
if (maxid < 15) {
maxid=15;
}maxid++;
var len=60;
var nochunks=((max/len|0)) + (max % len > 0 ? 1 : 0);
for (i=0; i < nochunks; i++) {
var j=0;
while ((j < s.length) && (s[j] != null ) ){
out.append$S(Clazz.new_($I$(6).c$$S,["%-" + maxid + "s" ]).form$S(this.printId$jalview_datamodel_SequenceI$Z(s[j], jvsuffix) + " "));
var chunkStart=i * len;
var chunkEnd=chunkStart + len;
var length=s[j].getLength$();
if ((chunkEnd < length) && (chunkStart < length) ) {
out.append$S(s[j].getSequenceAsString$I$I(chunkStart, chunkEnd));
} else {
if (chunkStart < length) {
out.append$S(s[j].getSequenceAsString$().substring$I(chunkStart));
}}out.append$S(this.newline);
j++;
}
out.append$S(this.newline);
}
return out.toString();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
