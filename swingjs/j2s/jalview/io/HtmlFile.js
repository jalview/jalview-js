(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'StringBuilder','org.jsoup.Jsoup','jalview.io.JSONFile','java.io.StringReader','jalview.io.PDBFeatureSettings']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HtmlFile", null, 'jalview.io.AlignFile', 'jalview.api.ComplexAlignFile');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['showSeqFeatures'],'S',['globalColourScheme'],'O',['hiddenColumns','jalview.datamodel.HiddenColumns','hiddenSequences','jalview.datamodel.SequenceI[]','displayedFeatures','jalview.api.FeaturesDisplayedI']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse',  function (source) {
;C$.superclazz.c$$jalview_io_FileParse.apply(this,[source]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_io_DataSourceType',  function (inFile, sourceType) {
;C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this,[inFile, sourceType]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parse$',  function () {
var content=null;
var doc=null;
try {
var htmlData=Clazz.new_($I$(1,1));
var currentLine;
while ((currentLine=this.nextLine$()) != null ){
htmlData.append$S(currentLine);
}
doc=$I$(2,"parse$S",[htmlData.toString()]);
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
}var jsonFile=Clazz.new_($I$(3,1)).parse$java_io_Reader(Clazz.new_([contentFromDiv ? content.text$() : content.val$()],$I$(4,1).c$$S));
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

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z',  function (sqs, jvsuffix) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Print method of HtmlFile is not supported!"]);
});

Clazz.newMeth(C$, 'isShowSeqFeatures$',  function () {
return this.showSeqFeatures;
});

Clazz.newMeth(C$, 'setShowSeqFeatures$Z',  function (showSeqFeatures) {
this.showSeqFeatures=showSeqFeatures;
});

Clazz.newMeth(C$, 'getGlobalColourScheme$',  function () {
return this.globalColourScheme;
});

Clazz.newMeth(C$, 'setColourScheme$S',  function (globalColourScheme) {
this.globalColourScheme=globalColourScheme;
});

Clazz.newMeth(C$, 'getHiddenColumns$',  function () {
return this.hiddenColumns;
});

Clazz.newMeth(C$, 'setHiddenColumns$jalview_datamodel_HiddenColumns',  function (hidden) {
this.hiddenColumns=hidden;
});

Clazz.newMeth(C$, 'getHiddenSequences$',  function () {
return this.hiddenSequences;
});

Clazz.newMeth(C$, 'setHiddenSequences$jalview_datamodel_SequenceIA',  function (hiddenSequences) {
this.hiddenSequences=hiddenSequences;
});

Clazz.newMeth(C$, 'getDisplayedFeatures$',  function () {
return this.displayedFeatures;
});

Clazz.newMeth(C$, 'getFeatureColourScheme$',  function () {
return Clazz.new_($I$(5,1));
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
