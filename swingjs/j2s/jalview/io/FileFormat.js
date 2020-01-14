(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'jalview.io.FastaFile','jalview.io.PfamFile','jalview.io.StockholmFile','jalview.io.PIRFile','jalview.io.BLCFile','jalview.io.AMSAFile','jalview.io.HtmlFile','jalview.io.RnamlFile','jalview.io.JSONFile','jalview.io.PileUpfile','jalview.io.MSFfile','jalview.io.ClustalFile','jalview.io.PhylipFile','jalview.io.JPredFile','jalview.io.FeaturesFile','jalview.io.ScoreMatrixFile','jalview.structure.StructureImportSettings',['jalview.datamodel.PDBEntry','.Type'],'jalview.ext.jmol.JmolParser','mc_view.PDBfile']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileFormat", null, 'Enum', 'jalview.io.FileFormatI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
(P$.FileFormat$1||
(function(){var C$=Clazz.newClass(P$, "FileFormat$1", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(1).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(1));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Fasta", 0, ["Fasta", "fa, fasta, mfa, fastq", true, true], jalview.io.FileFormat$1);
(P$.FileFormat$2||
(function(){var C$=Clazz.newClass(P$, "FileFormat$2", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(2).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(2));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Pfam", 1, ["PFAM", "pfam", true, true], jalview.io.FileFormat$2);
(P$.FileFormat$3||
(function(){var C$=Clazz.newClass(P$, "FileFormat$3", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(3).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(3).c$$jalview_datamodel_AlignmentI,[al]);
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Stockholm", 2, ["Stockholm", "sto,stk", true, true], jalview.io.FileFormat$3);
(P$.FileFormat$4||
(function(){var C$=Clazz.newClass(P$, "FileFormat$4", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(4).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(4));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "PIR", 3, ["PIR", "pir", true, true], jalview.io.FileFormat$4);
(P$.FileFormat$5||
(function(){var C$=Clazz.newClass(P$, "FileFormat$5", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(5).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(5));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "BLC", 4, ["BLC", "BLC", true, true], jalview.io.FileFormat$5);
(P$.FileFormat$6||
(function(){var C$=Clazz.newClass(P$, "FileFormat$6", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(6).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(6).c$$jalview_datamodel_AlignmentI,[al]);
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "AMSA", 5, ["AMSA", "amsa", true, true], jalview.io.FileFormat$6);
(P$.FileFormat$7||
(function(){var C$=Clazz.newClass(P$, "FileFormat$7", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(7).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(7));
});

Clazz.newMeth(C$, 'isComplexAlignFile$', function () {
return true;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Html", 6, ["HTML", "html", true, false], jalview.io.FileFormat$7);
(P$.FileFormat$8||
(function(){var C$=Clazz.newClass(P$, "FileFormat$8", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(8).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(8));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Rnaml", 7, ["RNAML", "xml,rnaml", true, false], jalview.io.FileFormat$8);
(P$.FileFormat$9||
(function(){var C$=Clazz.newClass(P$, "FileFormat$9", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(9).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(9));
});

Clazz.newMeth(C$, 'isComplexAlignFile$', function () {
return true;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Json", 8, ["JSON", "json", true, true], jalview.io.FileFormat$9);
(P$.FileFormat$10||
(function(){var C$=Clazz.newClass(P$, "FileFormat$10", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(10).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(10));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Pileup", 9, ["PileUp", "pileup", true, true], jalview.io.FileFormat$10);
(P$.FileFormat$11||
(function(){var C$=Clazz.newClass(P$, "FileFormat$11", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(11).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(11));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "MSF", 10, ["MSF", "msf", true, true], jalview.io.FileFormat$11);
(P$.FileFormat$12||
(function(){var C$=Clazz.newClass(P$, "FileFormat$12", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(12).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(12));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Clustal", 11, ["Clustal", "aln", true, true], jalview.io.FileFormat$12);
(P$.FileFormat$13||
(function(){var C$=Clazz.newClass(P$, "FileFormat$13", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(13).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(13));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Phylip", 12, ["PHYLIP", "phy", true, true], jalview.io.FileFormat$13);
(P$.FileFormat$14||
(function(){var C$=Clazz.newClass(P$, "FileFormat$14", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
var af=Clazz.new_($I$(14).c$$jalview_io_FileParse,[source]);
af.removeNonSequences$();
return af;
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return null;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Jnet", 13, ["JnetFile", "", false, false], jalview.io.FileFormat$14);
(P$.FileFormat$15||
(function(){var C$=Clazz.newClass(P$, "FileFormat$15", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(15).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(15));
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Features", 14, ["GFF or Jalview features", "gff2,gff3", true, false], jalview.io.FileFormat$15);
(P$.FileFormat$16||
(function(){var C$=Clazz.newClass(P$, "FileFormat$16", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(16).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return null;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "ScoreMatrix", 15, ["Substitution matrix", "", false, false], jalview.io.FileFormat$16);
(P$.FileFormat$17||
(function(){var C$=Clazz.newClass(P$, "FileFormat$17", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
var isParseWithJMOL=$I$(17).getDefaultStructureFileFormat$() !== $I$(18).PDB ;
if (isParseWithJMOL) {
return Clazz.new_($I$(19).c$$jalview_io_FileParse,[source]);
} else {
$I$(17).setShowSeqFeatures$Z(true);
return Clazz.new_($I$(20).c$$Z$Z$Z$jalview_io_FileParse,[$I$(17).isVisibleChainAnnotation$(), $I$(17).isProcessSecondaryStructure$(), $I$(17).isExternalSecondaryStructure$(), source]);
}});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(19));
});

Clazz.newMeth(C$, 'isStructureFile$', function () {
return true;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "PDB", 16, ["PDB", "pdb,ent", true, false], jalview.io.FileFormat$17);
(P$.FileFormat$18||
(function(){var C$=Clazz.newClass(P$, "FileFormat$18", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return Clazz.new_($I$(19).c$$jalview_io_FileParse,[source]);
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return Clazz.new_($I$(19));
});

Clazz.newMeth(C$, 'isStructureFile$', function () {
return true;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "MMCif", 17, ["mmCIF", "cif", true, false], jalview.io.FileFormat$18);
(P$.FileFormat$19||
(function(){var C$=Clazz.newClass(P$, "FileFormat$19", null, Clazz.load('jalview.io.FileFormat'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getReader$jalview_io_FileParse', function (source) {
return null;
});

Clazz.newMeth(C$, 'getWriter$jalview_datamodel_AlignmentI', function (al) {
return null;
});

Clazz.newMeth(C$, 'isTextFormat$', function () {
return false;
});

Clazz.newMeth(C$, 'isIdentifiable$', function () {
return true;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$S$S$Z$Z, "Jalview", 18, ["Jalview", "jvp, jar", true, true], jalview.io.FileFormat$19);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.writable=false;
this.readable=false;
this.extensions=null;
this.$name=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isComplexAlignFile$', function () {
return false;
});

Clazz.newMeth(C$, 'isReadable$', function () {
return this.readable;
});

Clazz.newMeth(C$, 'isWritable$', function () {
return this.writable;
});

Clazz.newMeth(C$, 'c$$S$S$Z$Z', function (shortName, extensions, isReadable, isWritable) {
C$.$init$.apply(this);
this.$name=shortName;
this.extensions=extensions;
this.readable=isReadable;
this.writable=isWritable;
}, 1);

Clazz.newMeth(C$, 'getExtensions$', function () {
return this.extensions;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.$name;
});

Clazz.newMeth(C$, 'isTextFormat$', function () {
return true;
});

Clazz.newMeth(C$, 'isStructureFile$', function () {
return false;
});

Clazz.newMeth(C$, 'isIdentifiable$', function () {
return true;
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
