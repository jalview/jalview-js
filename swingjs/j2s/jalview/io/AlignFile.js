(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'jalview.datamodel.SequenceI','Error','jalview.util.MessageManager','java.util.Hashtable','java.util.Vector','java.util.ArrayList','jalview.datamodel.Sequence']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignFile", null, 'jalview.io.FileParse', ['jalview.io.AlignmentFileReaderI', 'jalview.io.AlignmentFileWriterI']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.noSeqs=0;
this.maxLength=0;
this.parseCalled=false;
this.parseImmediately=true;
this.dataClosed=false;
this.newickStrings=null;
},1);

C$.$fields$=[['Z',['parseCalled','parseImmediately','dataClosed'],'I',['noSeqs','maxLength'],'J',['start','end'],'O',['seqs','java.util.Vector','+annotations','seqGroups','java.util.List','properties','java.util.Hashtable','newickStrings','java.util.Vector']]]

Clazz.newMeth(C$, 'isParseImmediately$',  function () {
return this.parseImmediately;
});

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.initData$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceIA',  function (seqs) {
C$.c$.apply(this, []);
this.setSeqs$jalview_datamodel_SequenceIA(seqs);
}, 1);

Clazz.newMeth(C$, 'c$$O$jalview_io_DataSourceType',  function (dataObject, sourceType) {
C$.c$$Z$O$jalview_io_DataSourceType.apply(this, [true, dataObject, sourceType]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$O$jalview_io_DataSourceType',  function (parseImmediately, dataObject, sourceType) {
;C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this,[dataObject, sourceType]);C$.$init$.apply(this);
this.initData$();
if (parseImmediately) {
this.doParse$();
}}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse',  function (source) {
C$.c$$Z$jalview_io_FileParse.apply(this, [true, source]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$jalview_io_FileParse',  function (parseImmediately, source) {
C$.c$$Z$jalview_io_FileParse$Z.apply(this, [parseImmediately, source, true]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$jalview_io_FileParse$Z',  function (parseImmediately, source, closeData) {
;C$.superclazz.c$$jalview_io_FileParse.apply(this,[source]);C$.$init$.apply(this);
this.initData$();
this.parseImmediately=parseImmediately;
if (parseImmediately) {
this.doParse$Z(closeData);
}}, 1);

Clazz.newMeth(C$, 'doParse$',  function () {
this.doParse$Z(true);
});

Clazz.newMeth(C$, 'doParse$Z',  function (closeData) {
if (this.parseCalled) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Implementation error: Parser called twice for same data.\nNeed to call initData() again before parsing can be reattempted."]);
}this.parseCalled=true;
this.parse$();
if (closeData && !this.dataClosed ) {
this.dataIn.close$();
this.dataClosed=true;
}});

Clazz.newMeth(C$, 'getSeqs$',  function () {
return this.seqs;
});

Clazz.newMeth(C$, 'getSeqGroups$',  function () {
return this.seqGroups;
});

Clazz.newMeth(C$, 'getSeqsAsArray$',  function () {
var s=Clazz.array($I$(1), [this.seqs.size$()]);
for (var i=0; i < this.seqs.size$(); i++) {
s[i]=this.seqs.elementAt$I(i);
}
return s;
});

Clazz.newMeth(C$, 'addAnnotations$jalview_datamodel_AlignmentI',  function (al) {
this.addProperties$jalview_datamodel_AlignmentI(al);
for (var i=0; i < this.annotations.size$(); i++) {
var an=this.annotations.elementAt$I(i);
an.validateRangeAndDisplay$();
al.addAnnotation$jalview_datamodel_AlignmentAnnotation(an);
}
});

Clazz.newMeth(C$, 'addSeqGroups$jalview_datamodel_AlignmentI',  function (al) {
this.seqGroups=al.getGroups$();
});

Clazz.newMeth(C$, 'addProperties$jalview_datamodel_AlignmentI',  function (al) {
if (this.properties != null  && this.properties.size$() > 0 ) {
var keys=this.properties.keys$();
var vals=this.properties.elements$();
while (keys.hasMoreElements$()){
al.setProperty$O$O(keys.nextElement$(), vals.nextElement$());
}
}});

Clazz.newMeth(C$, 'setAlignmentProperty$O$O',  function (key, value) {
if (key == null ) {
throw Clazz.new_([$I$(3).getString$S("error.implementation_error_cannot_have_null_alignment")],$I$(2,1).c$$S);
}if (value == null ) {
return;
}if (this.properties == null ) {
this.properties=Clazz.new_($I$(4,1));
}this.properties.put$O$O(key, value);
});

Clazz.newMeth(C$, 'getAlignmentProperty$O',  function (key) {
if (this.properties != null  && key != null  ) {
return this.properties.get$O(key);
}return null;
});

Clazz.newMeth(C$, 'initData$',  function () {
this.seqs=Clazz.new_($I$(5,1));
this.annotations=Clazz.new_($I$(5,1));
this.seqGroups=Clazz.new_($I$(6,1));
this.parseCalled=false;
});

Clazz.newMeth(C$, 'setSeqs$jalview_datamodel_SequenceIA',  function (s) {
this.seqs=Clazz.new_($I$(5,1));
for (var i=0; i < s.length; i++) {
this.seqs.addElement$O(s[i]);
}
});

Clazz.newMeth(C$, 'parseId$S',  function (id) {
var seq=null;
id=id.trim$();
var space=id.indexOf$S(" ");
if (space > -1) {
seq=Clazz.new_([id.substring$I$I(0, space), ""],$I$(7,1).c$$S$S);
var desc=id.substring$I(space + 1);
seq.setDescription$S(desc);
} else {
seq=Clazz.new_($I$(7,1).c$$S$S,[id, ""]);
}return seq;
});

Clazz.newMeth(C$, 'printId$jalview_datamodel_SequenceI$Z',  function (seq, jvsuffix) {
return seq.getDisplayId$Z(jvsuffix);
});

Clazz.newMeth(C$, 'printId$jalview_datamodel_SequenceI',  function (seq) {
return this.printId$jalview_datamodel_SequenceI$Z(seq, true);
});

Clazz.newMeth(C$, 'addNewickTree$S$S',  function (treeName, newickString) {
if (this.newickStrings == null ) {
this.newickStrings=Clazz.new_($I$(5,1));
}this.newickStrings.addElement$O(Clazz.array(String, -1, [treeName, newickString]));
});

Clazz.newMeth(C$, 'getTreeCount$',  function () {
return this.newickStrings == null  ? 0 : this.newickStrings.size$();
});

Clazz.newMeth(C$, 'addGroups$jalview_datamodel_AlignmentI',  function (al) {
for (var sg, $sg = this.getSeqGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
al.addGroup$jalview_datamodel_SequenceGroup(sg);
}
});

Clazz.newMeth(C$, 'addSequence$jalview_datamodel_SequenceI',  function (seq) {
this.seqs.add$O(seq);
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
