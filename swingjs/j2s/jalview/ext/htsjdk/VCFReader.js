(function(){var P$=Clazz.newPackage("jalview.ext.htsjdk"),p$1={},I$=[[0,'java.io.File','htsjdk.variant.vcf.VCFFileReader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VCFReader", null, null, ['java.io.Closeable', 'Iterable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.indexed=false;
this.reader=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (filePath) {
C$.$init$.apply(this);
if (filePath.endsWith$S("gz")) {
if (Clazz.new_($I$(1).c$$S,[filePath + ".tbi"]).exists$()) {
this.indexed=true;
}} else if (filePath.endsWith$S(".tbi")) {
this.indexed=true;
filePath=filePath.substring$I$I(0, filePath.length$() - 4);
}this.reader=Clazz.new_($I$(2).c$$java_io_File$Z,[Clazz.new_($I$(1).c$$S,[filePath]), this.indexed]);
}, 1);

Clazz.newMeth(C$, 'close$', function () {
if (this.reader != null ) {
this.reader.close$();
}});

Clazz.newMeth(C$, 'iterator$', function () {
return this.reader == null  ? null : this.reader.iterator$();
});

Clazz.newMeth(C$, 'query$S$I$I', function (chrom, start, end) {
if (this.reader == null ) {
return null;
}if (this.indexed) {
return this.reader.query$S$I$I(chrom, start, end);
} else {
return this.queryUnindexed$S$I$I(chrom, start, end);
}});

Clazz.newMeth(C$, 'queryUnindexed$S$I$I', function (chrom, start, end) {
var it=this.reader.iterator$();
return ((P$.VCFReader$1||
(function(){var C$=Clazz.newClass(P$, "VCFReader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'htsjdk.samtools.util.CloseableIterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.atEnd=false;
this.next=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.atEnd=false;
this.next=p$1.findNext.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'findNext', function () {
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
if (this.$finals$.chrom.equals$O(variant.getChr$()) && (vstart <= this.$finals$.end) && (vend >= this.$finals$.start)  ) {
return variant;
}}
return null;
}, p$1);

Clazz.newMeth(C$, 'hasNext$', function () {
var hasNext=!this.atEnd && (this.next != null ) ;
if (!hasNext) {
this.close$();
}return hasNext;
});

Clazz.newMeth(C$, 'next$', function () {
var temp=this.next;
this.next=p$1.findNext.apply(this, []);
return temp;
});

Clazz.newMeth(C$, 'remove$', function () {
});

Clazz.newMeth(C$, 'close$', function () {
this.$finals$.it.close$();
});
})()
), Clazz.new_(P$.VCFReader$1.$init$, [this, {it: it, end: end, chrom: chrom, start: start}]));
});

Clazz.newMeth(C$, 'getFileHeader$', function () {
return this.reader == null  ? null : this.reader.getFileHeader$();
});

Clazz.newMeth(C$, 'isIndex$', function () {
return this.indexed;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
