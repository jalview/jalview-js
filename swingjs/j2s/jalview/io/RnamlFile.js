(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'java.io.FileReader','java.io.BufferedReader','jalview.util.MessageManager','fr.orsay.lri.varna.factories.RNAFactory','jalview.datamodel.SequenceI','jalview.datamodel.Sequence','jalview.datamodel.Annotation','jalview.analysis.Rna','jalview.datamodel.AlignmentAnnotation','com.stevesoft.pat.Regex']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RnamlFile", null, 'jalview.io.AlignFile');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['id'],'O',['result','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_io_DataSourceType', function (inFile, type) {
;C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this,[inFile, type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse', function (source) {
;C$.superclazz.c$$jalview_io_FileParse.apply(this,[source]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'CreateReader$', function () {
var fr=null;
fr=Clazz.new_($I$(1,1).c$$java_io_File,[this.inFile]);
var r=Clazz.new_($I$(2,1).c$$java_io_Reader,[fr]);
return r;
});

Clazz.newMeth(C$, 'parse$', function () {
if (System.getProperty$S("java.version").indexOf$S("1.6") > -1 || System.getProperty$S("java.version").indexOf$S("1.5") > -1 ) {
System.setProperty$S$S("javax.xml.parsers.SAXParserFactory", "com.sun.org.apache.xerces.internal.jaxp.SAXParserFactoryImpl");
}try {
this._parse$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionPermissionDenied")){
var pdx = e$$;
{
this.errormessage=$I$(3,"formatMessage$S$SA",["exception.rnaml_couldnt_access_datasource", Clazz.array(String, -1, [pdx.getMessage$()])]);
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[pdx]);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionLoadingFailed")){
var lf = e$$;
{
this.errormessage=$I$(3,"formatMessage$S$SA",["exception.ranml_couldnt_process_data", Clazz.array(String, -1, [lf.getMessage$()])]);
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[lf]);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var iff = e$$;
{
this.errormessage=$I$(3,"formatMessage$S$SA",["exception.ranml_invalid_file", Clazz.array(String, -1, [iff.getMessage$()])]);
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[iff]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var x = e$$;
{
this.error=true;
this.errormessage=$I$(3,"formatMessage$S$SA",["exception.ranml_problem_parsing_data", Clazz.array(String, -1, [x.getMessage$()])]);
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S$Throwable,[this.errormessage, x]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, '_parse$', function () {
this.result=$I$(4,"loadSecStrRNAML$java_io_Reader",[this.getReader$()]);
var sqs=Clazz.array($I$(5), [this.result.size$()]);
for (var i=0; i < this.result.size$(); i++) {
var current=this.result.get$I(i);
var rna=current.getStructDBN$Z(true);
var seq=current.getSeq$();
var begin=1;
var end=seq.length$();
this.id=current.getName$();
if (this.id == null  || this.id.trim$().length$() == 0 ) {
this.id=p$1.safeName$S.apply(this, [this.getDataName$()]);
if (this.result.size$() > 1) {
this.id += "." + i;
}}sqs[i]=Clazz.new_($I$(6,1).c$$S$S$I$I,[this.id, seq, begin, end]);
sqs[i].setEnd$I(sqs[i].findPosition$I(sqs[i].getLength$()));
var annot=Clazz.array(String, [rna.length$()]);
var ann=Clazz.array($I$(7), [rna.length$()]);
for (var j=0; j < rna.length$(); j++) {
annot[j]="" + rna.charAt$I(j);
}
for (var k=0; k < rna.length$(); k++) {
ann[k]=Clazz.new_([annot[k], "", $I$(8).getRNASecStrucState$S(annot[k]).charAt$I(0), 0.0],$I$(7,1).c$$S$S$C$F);
}
var align=Clazz.new_(["Secondary Structure", current.getID$().trim$().length$() > 0 ? "Secondary Structure for " + current.getID$() : "", ann],$I$(9,1).c$$S$S$jalview_datamodel_AnnotationA);
sqs[i].addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(align);
sqs[i].setRNA$fr_orsay_lri_varna_models_rna_RNA(this.result.get$I(i));
this.annotations.addElement$O(align);
}
this.setSeqs$jalview_datamodel_SequenceIA(sqs);
});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z', function (s, jvSuffix) {
return "not yet implemented";
});

Clazz.newMeth(C$, 'getRNA$', function () {
return this.result;
});

Clazz.newMeth(C$, 'safeName$S', function (dataName) {
var b=0;
if ((b=dataName.lastIndexOf$S(".")) > 0) {
dataName=dataName.substring$I$I(0, b - 1);
}b=0;
var m=Clazz.new_(["[\\/]?([-A-Za-z0-9]+)\\.?"],$I$(10,1).c$$S);
var mm=dataName;
while (m.searchFrom$S$I(dataName, b)){
mm=m.stringMatched$();
b=m.matchedTo$();
}
return mm;
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
