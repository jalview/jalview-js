(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'jalview.datamodel.Sequence','StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PhylipFile", null, 'jalview.io.AlignFile');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse', function (source) {
C$.superclazz.c$$jalview_io_FileParse.apply(this, [source]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_io_DataSourceType', function (inFile, sourceType) {
C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this, [inFile, sourceType]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parse$', function () {
try {
var line=this.nextLine$();
var lineElements=line.trim$().split$S("\\s+");
if (lineElements.length < 2) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["First line must contain the number of specifies and number of characters"]);
}var numberSpecies=Integer.parseInt$S(lineElements[0]);
var numberCharacters=Integer.parseInt$S(lineElements[1]);
if (numberSpecies <= 0) {
return;
}var sequenceElements=Clazz.array($I$(1), [numberSpecies]);
var sequences=Clazz.array($I$(2), [numberSpecies]);
for (var i=0; i < numberSpecies; i++) {
line=this.nextLine$();
var potentialName=line.substring$I$I(0, 10);
var tabIndex=potentialName.indexOf$I("\t");
if (tabIndex == -1) {
sequenceElements[i]=this.parseId$S(p$1.validateName$S.apply(this, [potentialName]));
sequences[i]=Clazz.new_($I$(2).c$$S,[p$1.removeWhitespace$S.apply(this, [line.substring$I(10)])]);
} else {
sequenceElements[i]=this.parseId$S(p$1.validateName$S.apply(this, [potentialName.substring$I$I(0, tabIndex)]));
sequences[i]=Clazz.new_($I$(2).c$$S,[p$1.removeWhitespace$S.apply(this, [line.substring$I(tabIndex)])]);
}}
if ((sequences[0]).length$() != numberCharacters) {
var i=0;
for (line=this.nextLine$(); line != null ; line=this.nextLine$()) {
if (line.length$() > 0) {
sequences[i++].append$S(p$1.removeWhitespace$S.apply(this, [line]));
}if (i == sequences.length) {
i=0;
}}
}for (var i=0; i < numberSpecies; i++) {
if (sequences[i].length$() != numberCharacters) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[sequenceElements[i].getName$() + " sequence is incorrect length - should be " + numberCharacters + " but is " + sequences[i].length$() ]);
}sequenceElements[i].setSequence$S(sequences[i].toString());
this.seqs.add$TE(sequenceElements[i]);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Exception parsing PHYLIP file " + e);
e.printStackTrace$java_io_PrintStream(System.err);
throw e;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'removeWhitespace$S', function (txt) {
return txt.replaceAll$S$S("\\s*", "");
}, p$1);

Clazz.newMeth(C$, 'validateName$S', function (name) {
var invalidCharacters=Clazz.array(Character.TYPE, -1, ["(", ")", "[", "]", ":", ";", ","]);
for (var c, $c = 0, $$c = invalidCharacters; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (name.indexOf$I(c) > -1) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Species name contains illegal character " + c]);
}}
return name;
}, p$1);

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z', function (sqs, jvsuffix) {
var sb=Clazz.new_($I$(2).c$$S,[Integer.toString$I(sqs.length)]);
sb.append$S(" ");
sb.append$S((sqs.length > 0) ? Integer.toString$I(sqs[0].getLength$()) : "0").append$S(this.newline);
var sequential=false;
var numInterleavedColumns=60;
var sequenceLength=0;
for (var s, $s = 0, $$s = sqs; $s<$$s.length&&((s=($$s[$s])),1);$s++) {
var name=s.getName$();
if (name.length$() > 10) {
name=name.substring$I$I(0, 10);
} else {
name=String.format$S$OA("%1$-10s", [s.getName$()]);
}sb.append$S(name);
if (sequential) {
sb.append$S(s.getSequenceAsString$());
} else {
sequenceLength=s.getLength$();
sb.append$CA(s.getSequence$I$I(0, Math.min(numInterleavedColumns, sequenceLength)));
}sb.append$S(this.newline);
}
if (!sequential && sequenceLength > numInterleavedColumns ) {
var numMatrics=(sequenceLength/numInterleavedColumns|0);
if ((sequenceLength % numInterleavedColumns) > 0) {
numMatrics++;
}for (var i=1; i < numMatrics; i++) {
sb.append$S(this.newline);
var start=i * numInterleavedColumns;
for (var s, $s = 0, $$s = sqs; $s<$$s.length&&((s=($$s[$s])),1);$s++) {
sb.append$CA(s.getSequence$I$I(start, Math.min(start + numInterleavedColumns, sequenceLength))).append$S(this.newline);
}
}
}return sb.toString();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
