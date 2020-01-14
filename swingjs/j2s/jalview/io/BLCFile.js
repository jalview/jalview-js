(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.util.Vector','StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BLCFile", null, 'jalview.io.AlignFile');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.titles=null;
this.iterationSkips=0;
this.iterationCount=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.iterationSkips=0;
this.iterationCount=0;
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
this.titles=Clazz.new_($I$(1));
});

Clazz.newMeth(C$, 'parse$', function () {
var headerLines=Clazz.new_($I$(2));
var numHeaderLines=0;
var seqstrings=null;
if (this.suffix != null ) {
try {
this.iterationSkips=Integer.parseInt$S(this.suffix);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.iterationSkips=0;
} else {
throw e;
}
}
}var line=null;
do {
var idsFound=false;
var newids=false;
do {
line=this.nextLine$();
if (line == null ) {
break;
}if (line.indexOf$S("*") > -1) {
idsFound=true;
break;
}var abracket=line.indexOf$S(">");
if (abracket > -1) {
if (this.iterationCount > 0 && !newids ) {
newids=true;
this.seqs.removeAllElements$();
}line=line.substring$I(abracket + 1);
var seq=this.parseId$S(line);
this.seqs.addElement$TE(seq);
} else {
headerLines.append$S(line);
headerLines.append$S(this.newline);
numHeaderLines++;
}} while (!idsFound);
if (line == null ) {
break;
}var starCol=line.indexOf$S("*");
seqstrings=Clazz.array($I$(2), [this.seqs.size$()]);
for (var i=0; i < this.seqs.size$(); i++) {
if (seqstrings[i] == null ) {
seqstrings[i]=Clazz.new_($I$(2));
}}
try {
line=this.nextLine$();
while (line != null  && line.indexOf$S("*") == -1 ){
for (var i=0; i < this.seqs.size$(); i++) {
if (line.length$() > (i + starCol)) {
seqstrings[i].append$C(line.charAt$I(i + starCol));
}}
line=this.nextLine$();
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
if (this.iterationCount == 0) {
throw (e);
} else {
this.iterationSkips=0;
}} else {
throw e;
}
}
this.iterationCount++;
} while (--this.iterationSkips != -1);
for (var i=0; i < this.seqs.size$(); i++) {
var newSeq=this.seqs.elementAt$I(i);
newSeq.setSequence$S(seqstrings[i].toString());
}
if (this.seqs.size$() > 0) {
if (headerLines.length$() > 1 + numHeaderLines) {
this.setAlignmentProperty$O$O("Comments", headerLines.toString());
}this.setAlignmentProperty$O$O("iteration", "" + this.iterationCount);
}});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z', function (s, jvsuffix) {
var out=Clazz.new_($I$(2));
var i=0;
var max=-1;
while ((i < s.length) && (s[i] != null ) ){
out.append$S(">" + this.printId$jalview_datamodel_SequenceI$Z(s[i], jvsuffix));
if (s[i].getDescription$() != null ) {
out.append$S(" " + s[i].getDescription$());
}out.append$S(this.newline);
max=Math.max(max, s[i].getLength$());
i++;
}
out.append$S("* iteration 1");
out.append$S(this.newline);
for (var j=0; j < max; j++) {
i=0;
while ((i < s.length) && (s[i] != null ) ){
if (s[i].getSequence$().length > j) {
out.append$S(s[i].getSequenceAsString$I$I(j, j + 1));
} else {
out.append$S("-");
}i++;
}
out.append$S(this.newline);
}
out.append$S("*");
out.append$S(this.newline);
return out.toString();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
