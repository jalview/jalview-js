(function(){var P$=Clazz.newPackage("jalview.ext.htsjdk"),p$1={},I$=[[0,'java.io.File','htsjdk.variant.vcf.VCFFileReader','jalview.bin.Console']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VCFReader", null, null, ['java.io.Closeable', 'Iterable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['indexed'],'O',['reader','htsjdk.variant.vcf.VCFFileReader']]]

Clazz.newMeth(C$, 'c$$S',  function (filePath) {
;C$.$init$.apply(this);
this.indexed=false;
if (filePath.endsWith$S(".tbi") || filePath.endsWith$S(".csi") ) {
this.indexed=true;
filePath=filePath.substring$I$I(0, filePath.length$() - 4);
} else if (Clazz.new_($I$(1,1).c$$S,[filePath + ".tbi"]).exists$()) {
this.indexed=true;
} else if (Clazz.new_($I$(1,1).c$$S,[filePath + ".csi"]).exists$()) {
this.indexed=true;
}var file=Clazz.new_($I$(1,1).c$$S,[filePath]);
if (file.exists$()) {
this.reader=Clazz.new_($I$(2,1).c$$java_io_File$Z,[file, this.indexed]);
} else {
$I$(3).error$S("File not found: " + filePath);
}}, 1);

Clazz.newMeth(C$, 'close$',  function () {
if (this.reader != null ) {
this.reader.close$();
}});

Clazz.newMeth(C$, 'iterator$',  function () {
return this.reader == null  ? null : this.reader.iterator$();
});

Clazz.newMeth(C$, 'query$S$I$I',  function (chrom, start, end) {
if (this.reader == null ) {
return null;
}if (this.indexed) {
return this.reader.query$S$I$I(chrom, start, end);
} else {
return this.queryUnindexed$S$I$I(chrom, start, end);
}});

Clazz.newMeth(C$, 'queryUnindexed$S$I$I',  function (chrom, start, end) {
var it=this.reader.iterator$();
return ((P$.VCFReader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VCFReader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'htsjdk.samtools.util.CloseableIterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.atEnd=false;
this.next=p$1.findNext.apply(this, []);
},1);

C$.$fields$=[['Z',['atEnd'],'O',['next','htsjdk.variant.variantcontext.VariantContext']]]

Clazz.newMeth(C$, 'findNext',  function () {
if (this.atEnd) {
return null;
}var variant=null;
while (this.$finals$.it.hasNext$()){
variant=this.$finals$.it.next$();
var vstart=variant.getStart$();
if (vstart > this.$finals$.end) {
this.atEnd=true;
this.close$();
return null;
}var vend=variant.getEnd$();
if (this.$finals$.chrom.equals$O(variant.getContig$()) && (vstart <= this.$finals$.end) && (vend >= this.$finals$.start)  ) {
return variant;
}}
return null;
}, p$1);

Clazz.newMeth(C$, 'hasNext$',  function () {
var hasNext=!this.atEnd && (this.next != null ) ;
if (!hasNext) {
this.close$();
}return hasNext;
});

Clazz.newMeth(C$, 'next$',  function () {
var temp=this.next;
this.next=p$1.findNext.apply(this, []);
return temp;
});

Clazz.newMeth(C$, 'remove$',  function () {
});

Clazz.newMeth(C$, 'close$',  function () {
this.$finals$.it.close$();
});
})()
), Clazz.new_(P$.VCFReader$1.$init$,[this, {start:start,end:end,chrom:chrom,it:it}]));
});

Clazz.newMeth(C$, 'getFileHeader$',  function () {
return this.reader == null  ? null : this.reader.getFileHeader$();
});

Clazz.newMeth(C$, 'isIndex$',  function () {
return this.indexed;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
