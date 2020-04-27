(function(){var P$=Clazz.newPackage("mc_view"),p$1={},I$=[[0,'java.util.Vector','java.util.ArrayList','mc_view.Atom','mc_view.PDBChain','jalview.io.StructureFile','jalview.util.MessageManager']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDBfile", null, 'jalview.io.StructureFile');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['CALC_ID_PREFIX']]]

Clazz.newMeth(C$, 'c$$Z$Z$Z', function (addAlignmentAnnotations, predictSecondaryStructure, externalSecStr) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.addSettings$Z$Z$Z(addAlignmentAnnotations, predictSecondaryStructure, externalSecStr);
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z$Z$S$jalview_io_DataSourceType', function (addAlignmentAnnotations, predictSecStr, externalSecStr, dataObject, sourceType) {
;C$.superclazz.c$$Z$O$jalview_io_DataSourceType.apply(this,[false, dataObject, sourceType]);C$.$init$.apply(this);
this.addSettings$Z$Z$Z(addAlignmentAnnotations, predictSecStr, externalSecStr);
this.doParse$();
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z$Z$jalview_io_FileParse', function (addAlignmentAnnotations, predictSecStr, externalSecStr, source) {
;C$.superclazz.c$$Z$jalview_io_FileParse.apply(this,[false, source]);C$.$init$.apply(this);
this.addSettings$Z$Z$Z(addAlignmentAnnotations, predictSecStr, externalSecStr);
this.doParse$();
}, 1);

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z', function (seqs, jvSuffix) {
return null;
});

Clazz.newMeth(C$, 'parse$', function () {
this.setDbRefType$S("PDB");
this.setId$S(this.safeName$S(this.getDataName$()));
this.setChains$java_util_Vector(Clazz.new_($I$(1,1)));
var rna=Clazz.new_($I$(2,1));
var prot=Clazz.new_($I$(2,1));
var tmpchain;
var line=null;
var modelFlag=false;
var terFlag=false;
var lastID="";
var indexx=0;
var atomnam=null;
try {
while ((line=this.nextLine$()) != null ){
if (line.indexOf$S("HEADER") == 0) {
if (line.length$() > 62) {
var tid;
if (line.length$() > 67) {
tid=line.substring$I$I(62, 67).trim$();
} else {
tid=line.substring$I(62).trim$();
}if (tid.length$() > 0) {
this.setId$S(tid);
}continue;
}}if (line.indexOf$S("SEQRES") == 0) {
}if (line.indexOf$S("MODEL") == 0) {
modelFlag=true;
}if (line.indexOf$S("TER") == 0) {
terFlag=true;
}if (modelFlag && line.indexOf$S("ENDMDL") == 0 ) {
break;
}if (line.indexOf$S("ATOM") == 0 || (line.indexOf$S("HETATM") == 0 && !terFlag ) ) {
terFlag=false;
atomnam=line.substring$I$I(12, 15).trim$();
if (!atomnam.equals$O("CA") && !atomnam.equals$O("P") ) {
continue;
}var tmpatom=Clazz.new_($I$(3,1).c$$S,[line]);
if (tmpatom.resNumIns.trim$().equals$O(lastID)) {
continue;
}tmpchain=this.findChain$S(tmpatom.chain);
if (tmpchain != null ) {
tmpchain.atoms.addElement$O(tmpatom);
} else {
tmpchain=Clazz.new_([this.getId$(), tmpatom.chain],$I$(4,1).c$$S$S);
this.getChains$().add$O(tmpchain);
tmpchain.atoms.addElement$O(tmpatom);
}lastID=tmpatom.resNumIns.trim$();
}this.index++;
}
this.makeResidueList$();
this.makeCaBondList$();
if (this.getId$() == null ) {
this.setId$S(this.inFile.getName$());
}for (var chain, $chain = this.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
var chainseq=this.postProcessChain$mc_view_PDBChain(chain);
if ($I$(5).isRNA$jalview_datamodel_SequenceI(chainseq)) {
rna.add$O(chainseq);
} else {
prot.add$O(chainseq);
}}
if (this.predictSecondaryStructure) {
this.addSecondaryStructure$java_util_List$java_util_List(rna, prot);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var er = e$$;
{
System.out.println$S("OUT OF MEMORY LOADING PDB FILE");
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(6).getString$S("exception.outofmemory_loading_pdb_file")]);
}
} else if (Clazz.exceptionOf(e$$,"NumberFormatException")){
var ex = e$$;
{
if (line != null ) {
System.err.println$S("Couldn\'t read number from line:");
System.err.println$S(line);
}}
} else {
throw e$$;
}
}
p$1.markCalcIds.apply(this, []);
});

Clazz.newMeth(C$, 'isCalcIdHandled$S', function (calcId) {
return calcId != null  && (C$.CALC_ID_PREFIX.equals$O(calcId)) ;
}, 1);

Clazz.newMeth(C$, 'isCalcIdForFile$jalview_datamodel_AlignmentAnnotation$S', function (alan, pdbFile) {
return alan.getCalcId$() != null  && C$.CALC_ID_PREFIX.equals$O(alan.getCalcId$())  && pdbFile.equals$O(alan.getProperty$S("PDBID")) ;
}, 1);

Clazz.newMeth(C$, 'relocateCalcId$S$java_util_Hashtable', function (calcId, alreadyLoadedPDB) {
var s=C$.CALC_ID_PREFIX.length$();
var end=calcId.indexOf$S$I(C$.CALC_ID_PREFIX, s);
var between=calcId.substring$I$I(s, end - 1);
return C$.CALC_ID_PREFIX + alreadyLoadedPDB.get$O(between) + ":" + calcId.substring$I(end) ;
}, 1);

Clazz.newMeth(C$, 'markCalcIds', function () {
for (var sq, $sq = this.seqs.iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
if (sq.getAnnotation$() != null ) {
for (var aa, $aa = 0, $$aa = sq.getAnnotation$(); $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
var oldId=aa.getCalcId$();
if (oldId == null ) {
oldId="";
}aa.setCalcId$S(C$.CALC_ID_PREFIX);
aa.setProperty$S$S("PDBID", this.getId$());
aa.setProperty$S$S("oldCalcId", oldId);
}
}}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.CALC_ID_PREFIX="JalviewPDB";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
