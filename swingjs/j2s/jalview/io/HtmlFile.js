(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'StringBuilder','org.jsoup.Jsoup','jalview.io.JSONFile','java.io.StringReader','jalview.io.PDBFeatureSettings']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HtmlFile", null, 'jalview.io.AlignFile', 'jalview.api.ComplexAlignFile');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.globalColourScheme=null;
this.showSeqFeatures=false;
this.hiddenColumns=null;
this.hiddenSequences=null;
this.displayedFeatures=null;
}, 1);

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
var content=null;
var doc=null;
try {
var htmlData=Clazz.new_($I$(1));
var currentLine;
while ((currentLine=this.nextLine$()) != null ){
htmlData.append$S(currentLine);
}
doc=$I$(2).parse$S(htmlData.toString());
} catch (oom) {
if (Clazz.exceptionOf(oom,"OutOfMemoryError")){
this.errormessage="Not enough memory to process HTML document";
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[this.errormessage]);
} else {
throw oom;
}
}
try {
var contentFromDiv=true;
content=doc.select$S("div[id=seqData]").first$();
if (content == null ) {
contentFromDiv=false;
content=doc.getElementById$S("seqData");
}if (content == null ) {
this.errormessage="The html document is not embedded with BioJSON data";
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[this.errormessage]);
}var jsonFile=Clazz.new_($I$(3)).parse$java_io_Reader(Clazz.new_($I$(4).c$$S,[contentFromDiv ? content.text$() : content.val$()]));
this.seqs=jsonFile.getSeqs$();
this.seqGroups=jsonFile.getSeqGroups$();
this.annotations=jsonFile.getAnnotations$();
this.showSeqFeatures=jsonFile.isShowSeqFeatures$();
this.globalColourScheme=jsonFile.getGlobalColourScheme$();
this.hiddenSequences=jsonFile.getHiddenSequences$();
this.hiddenColumns=jsonFile.getHiddenColumns$();
this.displayedFeatures=jsonFile.getDisplayedFeatures$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw e;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z', function (sqs, jvsuffix) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Print method of HtmlFile is not supported!"]);
});

Clazz.newMeth(C$, 'isShowSeqFeatures$', function () {
return this.showSeqFeatures;
});

Clazz.newMeth(C$, 'setShowSeqFeatures$Z', function (showSeqFeatures) {
this.showSeqFeatures=showSeqFeatures;
});

Clazz.newMeth(C$, 'getGlobalColourScheme$', function () {
return this.globalColourScheme;
});

Clazz.newMeth(C$, 'setColourScheme$S', function (globalColourScheme) {
this.globalColourScheme=globalColourScheme;
});

Clazz.newMeth(C$, 'getHiddenColumns$', function () {
return this.hiddenColumns;
});

Clazz.newMeth(C$, 'setHiddenColumns$jalview_datamodel_HiddenColumns', function (hidden) {
this.hiddenColumns=hidden;
});

Clazz.newMeth(C$, 'getHiddenSequences$', function () {
return this.hiddenSequences;
});

Clazz.newMeth(C$, 'setHiddenSequences$jalview_datamodel_SequenceIA', function (hiddenSequences) {
this.hiddenSequences=hiddenSequences;
});

Clazz.newMeth(C$, 'getDisplayedFeatures$', function () {
return this.displayedFeatures;
});

Clazz.newMeth(C$, 'getFeatureColourScheme$', function () {
return Clazz.new_($I$(5));
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
