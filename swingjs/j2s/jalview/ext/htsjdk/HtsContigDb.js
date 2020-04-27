(function(){var P$=Clazz.newPackage("jalview.ext.htsjdk"),p$1={},I$=[[0,'htsjdk.samtools.reference.FastaSequenceIndexCreator','htsjdk.samtools.reference.ReferenceSequenceFileFactory','java.util.ArrayList','java.util.HashSet','htsjdk.samtools.SAMSequenceDictionary','htsjdk.samtools.SAMSequenceRecord','htsjdk.samtools.util.StringUtil','java.security.MessageDigest','java.math.BigInteger','jalview.datamodel.Sequence']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HtsContigDb");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.refFile=null;
this.rrefDict=null;
},1);

C$.$fields$=[['S',['name'],'O',['dbLocation','java.io.File','refFile','htsjdk.samtools.reference.ReferenceSequenceFile','rrefDict','htsjdk.samtools.SAMSequenceDictionary','md5','java.security.MessageDigest']]]

Clazz.newMeth(C$, 'createFastaSequenceIndex$java_nio_file_Path$Z', function (path, overwrite) {
try {
$I$(1).create$java_nio_file_Path$Z(path, overwrite);
} catch (e) {
if (Clazz.exceptionOf(e,"htsjdk.samtools.SAMException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$S$java_io_File', function (name, descriptor) {
;C$.$init$.apply(this);
if (descriptor.isFile$()) {
this.name=name;
this.dbLocation=descriptor;
}p$1.initSource.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'close$', function () {
if (this.refFile != null ) {
try {
this.refFile.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'initSource', function () {
if (this.refFile != null ) {
return;
}this.refFile=$I$(2).getReferenceSequenceFile$java_io_File$Z(this.dbLocation, true);
if (this.refFile == null  || this.refFile.getSequenceDictionary$() == null  ) {
}}, p$1);

Clazz.newMeth(C$, 'initSequenceDictionaryFor$java_io_File', function (dbLocation2) {
this.rrefDict=this.getDictionary$java_io_File$Z(dbLocation2, true);
if (this.rrefDict != null ) {
var rrefFile=$I$(2).getReferenceSequenceFile$java_io_File$Z(dbLocation2, true);
return rrefFile;
}return null;
}, p$1);

Clazz.newMeth(C$, 'getDictionary$java_io_File$Z', function (f, truncate) {
if (this.md5 == null ) {
this.initCreateSequenceDictionary$();
}var refSeqFile=$I$(2).getReferenceSequenceFile$java_io_File$Z(f, truncate);
var refSeq;
var ret=Clazz.new_($I$(3,1));
var sequenceNames=Clazz.new_($I$(4,1));
for (var numSequences=0; (refSeq=refSeqFile.nextSequence$()) != null ; ++numSequences) {
if (sequenceNames.contains$O(refSeq.getName$())) {
throw Clazz.new_(Clazz.load('Exception').c$$S,["Sequence name appears more than once in reference: " + refSeq.getName$()]);
}sequenceNames.add$O(refSeq.getName$());
ret.add$O(p$1.makeSequenceRecord$htsjdk_samtools_reference_ReferenceSequence.apply(this, [refSeq]));
}
return Clazz.new_($I$(5,1).c$$java_util_List,[ret]);
});

Clazz.newMeth(C$, 'isValid$', function () {
return this.dbLocation != null  && this.refFile != null  ;
});

Clazz.newMeth(C$, 'makeSequenceRecord$htsjdk_samtools_reference_ReferenceSequence', function (refSeq) {
var ret=Clazz.new_([refSeq.getName$(), refSeq.length$()],$I$(6,1).c$$S$I);
var bases=refSeq.getBases$();
for (var i=0; i < bases.length; ++i) {
bases[i]=$I$(7).toUpperCase$B(bases[i]);
}
ret.setAttribute$S$S("M5", p$1.md5Hash$BA.apply(this, [bases]));
return ret;
}, p$1);

Clazz.newMeth(C$, 'initCreateSequenceDictionary$', function () {
try {
this.md5=$I$(8).getInstance$S("MD5");
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.NoSuchAlgorithmException")){
throw Clazz.new_(Clazz.load('Exception').c$$S$Throwable,["MD5 algorithm not found", e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'md5Hash$BA', function (bytes) {
this.md5.reset$();
this.md5.update$BA(bytes);
var s=Clazz.new_([1, this.md5.digest$()],$I$(9,1).c$$I$BA).toString$I(16);
if (s.length$() != 32) {
var zeros="00000000000000000000000000000000";
s="00000000000000000000000000000000".substring$I$I(0, 32 - s.length$()) + s;
}return s;
}, p$1);

Clazz.newMeth(C$, 'getSequenceProxy$S', function (id) {
if (!this.isValid$() || !this.refFile.isIndexed$() ) {
System.err.println$S("Cannot read contig as file is invalid or not indexed");
return null;
}var sseq=this.refFile.getSequence$S(id);
return Clazz.new_([sseq.getName$(),  String.instantialize(sseq.getBases$())],$I$(10,1).c$$S$S);
});

Clazz.newMeth(C$, 'isIndexed$', function () {
return this.refFile != null  && this.refFile.isIndexed$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
