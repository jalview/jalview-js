(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'StringBuffer','jalview.datamodel.Annotation','jalview.datamodel.AlignmentAnnotation']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FastaFile", null, 'jalview.io.AlignFile');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.len=72;
},1);

C$.$fields$=[['I',['len'],'O',['out','StringBuffer']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_io_DataSourceType',  function (inFile, sourceType) {
;C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this,[inFile, sourceType]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse',  function (source) {
C$.c$$jalview_io_FileParse$Z.apply(this, [source, true]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse$Z',  function (source, closeData) {
;C$.superclazz.c$$Z$jalview_io_FileParse$Z.apply(this,[true, source, closeData]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceIA',  function (seqs) {
;C$.superclazz.c$$jalview_datamodel_SequenceIA.apply(this,[seqs]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parse$',  function () {
var sb=Clazz.new_($I$(1,1));
var firstLine=true;
var line;
var uline;
var seq=null;
var annotation=false;
while ((uline=this.nextLine$()) != null ){
line=uline.trim$();
if (line.length$() > 0) {
if (line.charAt$I(0) == ">") {
if (line.startsWith$S(">#_")) {
if (annotation) {
this.annotations.addElement$O(p$1.makeAnnotation$jalview_datamodel_SequenceI$StringBuffer.apply(this, [seq, sb]));
}} else {
annotation=false;
}if (!firstLine) {
seq.setSequence$S(sb.toString());
if (!annotation) {
this.seqs.addElement$O(seq);
}}seq=this.parseId$S(line.substring$I(1));
firstLine=false;
sb=Clazz.new_($I$(1,1));
if (line.startsWith$S(">#_")) {
annotation=true;
}} else {
sb.append$S(annotation ? uline : line);
}}}
if (annotation) {
this.annotations.addElement$O(p$1.makeAnnotation$jalview_datamodel_SequenceI$StringBuffer.apply(this, [seq, sb]));
} else if (!firstLine) {
seq.setSequence$S(sb.toString());
this.seqs.addElement$O(seq);
}});

Clazz.newMeth(C$, 'makeAnnotation$jalview_datamodel_SequenceI$StringBuffer',  function (seq, sb) {
var anots=Clazz.array($I$(2), [sb.length$()]);
var cb;
for (var i=0; i < anots.length; i++) {
var cn=sb.charAt$I(i);
if (cn != " ") {
anots[i]=Clazz.new_($I$(2,1).c$$S$S$C$F,["" + cn, null, " ", NaN]);
}}
var aa=Clazz.new_([seq.getName$().substring$I(2), seq.getDescription$(), anots],$I$(3,1).c$$S$S$jalview_datamodel_AnnotationA);
return aa;
}, p$1);

Clazz.newMeth(C$, 'addAnnotations$jalview_datamodel_Alignment',  function (al) {
this.addProperties$jalview_datamodel_AlignmentI(al);
for (var i=0; i < this.annotations.size$(); i++) {
var aa=this.annotations.elementAt$I(i);
aa.setPadGaps$Z$C(true, al.getGapCharacter$());
al.addAnnotation$jalview_datamodel_AlignmentAnnotation(aa);
}
});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z',  function (s, jvsuffix) {
this.out=Clazz.new_($I$(1,1));
var i=0;
while ((i < s.length) && (s[i] != null ) ){
this.out.append$S(">" + this.printId$jalview_datamodel_SequenceI$Z(s[i], jvsuffix));
if (s[i].getDescription$() != null ) {
this.out.append$S(" " + s[i].getDescription$());
}this.out.append$S(this.newline);
var nochunks=((s[i].getLength$()/this.len|0)) + (s[i].getLength$() % this.len > 0 ? 1 : 0);
for (var j=0; j < nochunks; j++) {
var start=j * this.len;
var end=start + this.len;
if (end < s[i].getLength$()) {
this.out.append$S(s[i].getSequenceAsString$I$I(start, end) + this.newline);
} else if (start < s[i].getLength$()) {
this.out.append$S(s[i].getSequenceAsString$I$I(start, s[i].getLength$()) + this.newline);
}}
++i;
}
return this.out.toString();
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
