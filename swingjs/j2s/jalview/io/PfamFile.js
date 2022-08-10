(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.util.HashMap','java.util.ArrayList','StringBuffer','jalview.util.MessageManager','jalview.util.Format']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PfamFile", null, 'jalview.io.AlignFile');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_io_DataSourceType',  function (inFile, sourceType) {
;C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this,[inFile, sourceType]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse',  function (source) {
;C$.superclazz.c$$jalview_io_FileParse.apply(this,[source]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initData$',  function () {
C$.superclazz.prototype.initData$.apply(this, []);
});

Clazz.newMeth(C$, 'parse$',  function () {
var i=0;
var line;
var seqhash=Clazz.new_($I$(1,1));
var headers=Clazz.new_($I$(2,1));
var useTabs=false;
var spces;
while ((line=this.nextLine$()) != null ){
if (line.indexOf$S("#") == 0) {
continue;
}if (useTabs) {
spces=line.indexOf$S("\t");
} else {
spces=line.indexOf$S(" ");
if (!useTabs && spces == -1 ) {
useTabs=true;
spces=line.indexOf$S("\t");
}}if (spces <= 0) {
continue;
}var id=line.substring$I$I(0, spces);
var tempseq;
if (seqhash.containsKey$O(id)) {
tempseq=seqhash.get$O(id);
} else {
tempseq=Clazz.new_($I$(3,1));
seqhash.put$O$O(id, tempseq);
}if (!(headers.contains$O(id))) {
headers.add$O(id);
}if (spces + 1 < line.length$()) {
tempseq.append$S(line.substring$I(spces + 1).trim$());
}}
this.noSeqs=headers.size$();
if (this.noSeqs < 1) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(4).getString$S("exception.pfam_no_sequences_found")]);
}for (i=0; i < headers.size$(); i++) {
if (seqhash.get$O(headers.get$I(i)) != null ) {
if (this.maxLength < seqhash.get$O(headers.get$I(i)).toString().length$()) {
this.maxLength=seqhash.get$O(headers.get$I(i)).toString().length$();
}var newSeq=this.parseId$S(headers.get$I(i).toString());
newSeq.setSequence$S(seqhash.get$O(headers.get$I(i).toString()).toString());
this.seqs.addElement$O(newSeq);
} else {
System.err.println$S("PFAM File reader: Can't find sequence for " + headers.get$I(i));
}}
});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z',  function (s, jvsuffix) {
var out=Clazz.new_($I$(3,1).c$$S,[""]);
var max=0;
var maxid=0;
var i=0;
while ((i < s.length) && (s[i] != null ) ){
var tmp=this.printId$jalview_datamodel_SequenceI$Z(s[i], jvsuffix);
max=Math.max(max, s[i].getLength$());
if (tmp.length$() > maxid) {
maxid=tmp.length$();
}++i;
}
if (maxid < 15) {
maxid=15;
}var j=0;
while ((j < s.length) && (s[j] != null ) ){
out.append$S(Clazz.new_($I$(5,1).c$$S,["%-" + maxid + "s" ]).form$S(this.printId$jalview_datamodel_SequenceI$Z(s[j], jvsuffix) + " "));
out.append$S(s[j].getSequenceAsString$());
out.append$S(this.newline);
++j;
}
out.append$S(this.newline);
return out.toString();
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:38 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
