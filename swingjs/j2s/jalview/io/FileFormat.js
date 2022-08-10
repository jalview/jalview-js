(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'jalview.io.FastaFile','jalview.io.PfamFile','jalview.io.StockholmFile','jalview.io.PIRFile','jalview.io.BLCFile','jalview.io.AMSAFile','jalview.io.HtmlFile','jalview.io.RnamlFile','jalview.io.JSONFile','jalview.io.PileUpfile','jalview.io.MSFfile','jalview.io.ClustalFile','jalview.io.PhylipFile','jalview.io.GenBankFile','jalview.io.EmblFlatFile','jalview.io.JPredFile','jalview.io.FeaturesFile','jalview.io.ScoreMatrixFile','jalview.structure.StructureImportSettings',['jalview.datamodel.PDBEntry','.Type'],'jalview.ext.jmol.JmolParser','mc_view.PDBfile']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*e*/var C$=Clazz.newClass(P$, "FileFormat", null, 'Enum', 'jalview.io.FileFormatI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['writable','readable'],'S',['extensions','$name']]]

Clazz.newMeth(C$, 'isComplexAlignFile$',  function () {
return false;
});

Clazz.newMeth(C$, 'isReadable$',  function () {
return this.readable;
});

Clazz.newMeth(C$, 'isWritable$',  function () {
return this.writable;
});

Clazz.newMeth(C$, 'c$$S$S$Z$Z',  function (shortName, extensions, isReadable, isWritable) {
;C$.$init$.apply(this);
this.$name=shortName;
this.extensions=extensions;
this.readable=isReadable;
this.writable=isWritable;
}, 1);

Clazz.newMeth(C$, 'getExtensions$',  function () {
return this.extensions;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.$name;
});

Clazz.newMeth(C$, 'isTextFormat$',  function () {
return true;
});

Clazz.newMeth(C$, 'isStructureFile$',  function () {
return false;
});

Clazz.newMeth(C$, 'isIdentifiable$',  function () {
return true;
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
(P$.FileFormat$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$1", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(1,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(1,1));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Fasta", 0, ["Fasta", "fa, fasta, mfa, fastq", true, true], jalview.io.FileFormat$1);
(P$.FileFormat$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$2", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(2,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(2,1));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Pfam", 1, ["PFAM", "pfam", true, true], jalview.io.FileFormat$2);
(P$.FileFormat$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$3", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(3,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(3,1).c$$jalview_datamodel_AlignmentI,[al]);
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Stockholm", 2, ["Stockholm", "sto,stk", true, true], jalview.io.FileFormat$3);
(P$.FileFormat$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$4", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(4,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(4,1));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "PIR", 3, ["PIR", "pir", true, true], jalview.io.FileFormat$4);
(P$.FileFormat$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$5", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(5,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(5,1));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "BLC", 4, ["BLC", "BLC", true, true], jalview.io.FileFormat$5);
(P$.FileFormat$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$6", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(6,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(6,1).c$$jalview_datamodel_AlignmentI,[al]);
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "AMSA", 5, ["AMSA", "amsa", true, true], jalview.io.FileFormat$6);
(P$.FileFormat$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$7", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(7,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(7,1));
});

Clazz.newMeth(C$, 'isComplexAlignFile$',  function () {
return true;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Html", 6, ["HTML", "html", true, false], jalview.io.FileFormat$7);
(P$.FileFormat$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$8", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(8,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(8,1));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Rnaml", 7, ["RNAML", "xml,rnaml", true, false], jalview.io.FileFormat$8);
(P$.FileFormat$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$9", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(9,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(9,1));
});

Clazz.newMeth(C$, 'isComplexAlignFile$',  function () {
return true;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Json", 8, ["JSON", "json", true, true], jalview.io.FileFormat$9);
(P$.FileFormat$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$10", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(10,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(10,1));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Pileup", 9, ["PileUp", "pileup", true, true], jalview.io.FileFormat$10);
(P$.FileFormat$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$11", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(11,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(11,1));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "MSF", 10, ["MSF", "msf", true, true], jalview.io.FileFormat$11);
(P$.FileFormat$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$12", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(12,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(12,1));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Clustal", 11, ["Clustal", "aln", true, true], jalview.io.FileFormat$12);
(P$.FileFormat$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$13", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(13,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(13,1));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Phylip", 12, ["PHYLIP", "phy", true, true], jalview.io.FileFormat$13);
(P$.FileFormat$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$14", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(14,1).c$$jalview_io_FileParse$S,[source, "GenBank"]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return null;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "GenBank", 13, ["GenBank Flatfile", "gb, gbk", true, false], jalview.io.FileFormat$14);
(P$.FileFormat$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$15", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(15,1).c$$jalview_io_FileParse$S,[source, "EMBL"]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return null;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Embl", 14, ["ENA Flatfile", "txt", true, false], jalview.io.FileFormat$15);
(P$.FileFormat$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$16", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
var af=Clazz.new_($I$(16,1).c$$jalview_io_FileParse,[source]);
af.removeNonSequences$();
return af;
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return null;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Jnet", 15, ["JnetFile", "", false, false], jalview.io.FileFormat$16);
(P$.FileFormat$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$17", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(17,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(17,1));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Features", 16, ["GFF or Jalview features", "gff2,gff3", true, false], jalview.io.FileFormat$17);
(P$.FileFormat$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$18", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(18,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return null;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "ScoreMatrix", 17, ["Substitution matrix", "", false, false], jalview.io.FileFormat$18);
(P$.FileFormat$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$19", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
var isParseWithJMOL=$I$(19).getDefaultStructureFileFormat$() !== $I$(20).PDB ;
if (isParseWithJMOL) {
return Clazz.new_($I$(21,1).c$$jalview_io_FileParse,[source]);
} else {
$I$(19).setShowSeqFeatures$Z(true);
return Clazz.new_([$I$(19).isVisibleChainAnnotation$(), $I$(19).isProcessSecondaryStructure$(), $I$(19).isExternalSecondaryStructure$(), source],$I$(22,1).c$$Z$Z$Z$jalview_io_FileParse);
}});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(21,1));
});

Clazz.newMeth(C$, 'isStructureFile$',  function () {
return true;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "PDB", 18, ["PDB", "pdb,ent", true, false], jalview.io.FileFormat$19);
(P$.FileFormat$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$20", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return Clazz.new_($I$(21,1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_($I$(21,1));
});

Clazz.newMeth(C$, 'isStructureFile$',  function () {
return true;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "MMCif", 19, ["mmCIF", "cif", true, false], jalview.io.FileFormat$20);
(P$.FileFormat$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileFormat$21", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse',  function (source) {
return null;
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI',  function (al) {
return null;
});

Clazz.newMeth(C$, 'isTextFormat$',  function () {
return false;
});

Clazz.newMeth(C$, 'isIdentifiable$',  function () {
return true;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Jalview", 20, ["Jalview", "jvp, jar", true, true], jalview.io.FileFormat$21);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
