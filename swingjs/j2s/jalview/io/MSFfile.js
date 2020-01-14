(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.util.ArrayList','java.util.Hashtable','java.util.StringTokenizer','StringBuilder','jalview.util.Comparison','jalview.datamodel.SequenceI','jalview.datamodel.Sequence','jalview.util.Format']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MSFfile", null, 'jalview.io.AlignFile');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_io_DataSourceType', function (inFile, type) {
C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this, [inFile, type]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse', function (source) {
C$.superclazz.c$$jalview_io_FileParse.apply(this, [source]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parse$', function () {
var seqFlag=false;
var headers=Clazz.new_($I$(1));
var seqhash=Clazz.new_($I$(2));
try {
var line;
while ((line=this.nextLine$()) != null ){
var str=Clazz.new_($I$(3).c$$S,[line]);
var key=null;
while (str.hasMoreTokens$()){
var inStr=str.nextToken$();
if (inStr.indexOf$S("Name:") != -1) {
key=str.nextToken$();
headers.add$TE(key);
}if (inStr.indexOf$S("//") != -1) {
seqFlag=true;
}if ((inStr.indexOf$S("//") == -1) && seqFlag ) {
key=inStr;
var tempseq;
if (seqhash.containsKey$O(key)) {
tempseq=seqhash.get$O(key);
} else {
tempseq=Clazz.new_($I$(4).c$$I,[64]);
seqhash.put$TK$TV(key, tempseq);
}while (str.hasMoreTokens$()){
var sequenceBlock=str.nextToken$();
tempseq.append$S(sequenceBlock);
}
}}
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Exception parsing MSFFile " + e);
e.printStackTrace$();
} else {
throw e;
}
}
this.noSeqs=headers.size$();
for (var i=0; i < headers.size$(); i++) {
if (seqhash.get$O(headers.get$I(i)) != null ) {
var head=headers.get$I(i);
var seq=seqhash.get$O(head).toString();
if (this.maxLength < head.length$()) {
this.maxLength=head.length$();
}seq=seq.replace$C$C("~", ".");
var newSeq=this.parseId$S(head);
newSeq.setSequence$S(seq);
this.seqs.addElement$TE(newSeq);
} else {
System.err.println$S("MSFFile Parser: Can't find sequence for " + headers.get$I(i));
}}
});

Clazz.newMeth(C$, 'checkSum$S', function (seq) {
var check=0;
var sequence=seq.toUpperCase$();
for (var i=0; i < sequence.length$(); i++) {
try {
var value=sequence.charAt$I(i).$c();
if (value != -1) {
check+=(i % 57 + 1) * value;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Exception during MSF Checksum calculation");
e.printStackTrace$();
} else {
throw e;
}
}
}
return check % 10000;
});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z', function (sqs, jvSuffix) {
var is_NA=$I$(5).isNucleotide$jalview_datamodel_SequenceIA(sqs);
var s=Clazz.array($I$(6), [sqs.length]);
var out=Clazz.new_($I$(4).c$$I,[256]);
out.append$S("!!").append$S(is_NA ? "NA" : "AA").append$S("_MULTIPLE_ALIGNMENT 1.0");
out.append$S(this.newline);
out.append$S(this.newline);
var max=0;
var maxid=0;
var i=0;
while ((i < sqs.length) && (sqs[i] != null ) ){
var seqString=sqs[i].getSequenceAsString$().replace$C$C("-", ".");
var sb=Clazz.new_($I$(4).c$$S,[seqString]);
for (var ii=0; ii < sb.length$(); ii++) {
if (sb.charAt$I(ii) == ".") {
sb.setCharAt$I$C(ii, "~");
} else {
break;
}}
for (var ii=sb.length$() - 1; ii > 0; ii--) {
if (sb.charAt$I(ii) == ".") {
sb.setCharAt$I$C(ii, "~");
} else {
break;
}}
s[i]=Clazz.new_($I$(7).c$$S$S$I$I,[sqs[i].getName$(), sb.toString(), sqs[i].getStart$(), sqs[i].getEnd$()]);
if (sb.length$() > max) {
max=sb.length$();
}i++;
}
var maxLenpad=Clazz.new_($I$(8).c$$S,["%" + ( String.instantialize("" + max)).length$() + "d" ]);
var maxChkpad=Clazz.new_($I$(8).c$$S,["%" + ( String.instantialize("1" + max)).length$() + "d" ]);
i=0;
var bigChecksum=0;
var checksums=Clazz.array(Integer.TYPE, [s.length]);
while (i < s.length){
checksums[i]=this.checkSum$S(s[i].getSequenceAsString$());
bigChecksum+=checksums[i];
i++;
}
var maxNB=0;
out.append$S("   MSF: " + s[0].getLength$() + "   Type: " + (is_NA ? "N" : "P") + "    Check:  " + (bigChecksum % 10000) + "   .." );
out.append$S(this.newline);
out.append$S(this.newline);
out.append$S(this.newline);
var nameBlock=Clazz.array(String, [s.length]);
var idBlock=Clazz.array(String, [s.length]);
i=0;
while ((i < s.length) && (s[i] != null ) ){
nameBlock[i]= String.instantialize("  Name: " + this.printId$jalview_datamodel_SequenceI$Z(s[i], jvSuffix) + " " );
idBlock[i]= String.instantialize("Len: " + maxLenpad.form$J(s[i].getLength$()) + "  Check: " + maxChkpad.form$J(checksums[i]) + "  Weight: 1.00" + this.newline );
if (s[i].getName$().length$() > maxid) {
maxid=s[i].getName$().length$();
}if (nameBlock[i].length$() > maxNB) {
maxNB=nameBlock[i].length$();
}i++;
}
if (maxid < 10) {
maxid=10;
}if (maxNB < 15) {
maxNB=15;
}var nbFormat=Clazz.new_($I$(8).c$$S,["%-" + maxNB + "s" ]);
for (i=0; (i < s.length) && (s[i] != null ) ; i++) {
out.append$S(nbFormat.form$S(nameBlock[i]) + idBlock[i]);
}
maxid++;
out.append$S(this.newline);
out.append$S(this.newline);
out.append$S("//");
out.append$S(this.newline);
out.append$S(this.newline);
var len=50;
var nochunks=((max/len|0)) + (max % len > 0 ? 1 : 0);
for (i=0; i < nochunks; i++) {
var j=0;
while ((j < s.length) && (s[j] != null ) ){
var name=this.printId$jalview_datamodel_SequenceI$Z(s[j], jvSuffix);
out.append$S(Clazz.new_($I$(8).c$$S,["%-" + maxid + "s" ]).form$S(name + " "));
for (var k=0; k < 5; k++) {
var start=(i * 50) + (k * 10);
var end=start + 10;
var length=s[j].getLength$();
if ((end < length) && (start < length) ) {
out.append$CA(s[j].getSequence$I$I(start, end));
if (k < 4) {
out.append$S(" ");
} else {
out.append$S(this.newline);
}} else {
if (start < length) {
out.append$S(s[j].getSequenceAsString$().substring$I(start));
out.append$S(this.newline);
} else {
if (k == 0) {
out.append$S(this.newline);
}}}}
j++;
}
out.append$S(this.newline);
}
return out.toString();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
