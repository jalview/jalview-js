(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'StringBuffer','jalview.util.Format']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PileUpfile", null, 'jalview.io.MSFfile');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_io_DataSourceType',  function (inFile, sourceType) {
;C$.superclazz.c$$S$jalview_io_DataSourceType.apply(this,[inFile, sourceType]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse',  function (source) {
;C$.superclazz.c$$jalview_io_FileParse.apply(this,[source]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z',  function (s, jvsuffix) {
var out=Clazz.new_($I$(1,1).c$$S,["PileUp"]);
out.append$S(this.newline);
out.append$S(this.newline);
var max=0;
var maxid=0;
var i=0;
var bigChecksum=0;
var checksums=Clazz.array(Integer.TYPE, [s.length]);
while (i < s.length){
checksums[i]=this.checkSum$S(s[i].getSequenceAsString$());
bigChecksum+=checksums[i];
++i;
}
out.append$S("   MSF: " + s[0].getLength$() + "   Type: P    Check:  " + bigChecksum % 10000  + "   ..");
out.append$S(this.newline);
out.append$S(this.newline);
out.append$S(this.newline);
i=0;
while ((i < s.length) && (s[i] != null ) ){
var seq=s[i].getSequenceAsString$();
out.append$S(" Name: " + this.printId$jalview_datamodel_SequenceI$Z(s[i], jvsuffix) + " oo  Len:  " + seq.length$() + "  Check:  " + checksums[i] + "  Weight:  1.00" );
out.append$S(this.newline);
if (seq.length$() > max) {
max=seq.length$();
}if (s[i].getName$().length$() > maxid) {
maxid=s[i].getName$().length$();
}++i;
}
if (maxid < 10) {
maxid=10;
}++maxid;
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
var name=this.printId$jalview_datamodel_SequenceI$Z(s[j], jvsuffix);
out.append$S(Clazz.new_($I$(2,1).c$$S,["%-" + maxid + "s" ]).form$S(name + " "));
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
++j;
}
out.append$S(this.newline);
}
return out.toString();
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:38 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
