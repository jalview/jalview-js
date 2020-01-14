(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.util.HashMap','jalview.util.DBRefUtils','java.util.HashSet','java.util.ArrayList','com.stevesoft.pat.Regex','jalview.datamodel.DBRefEntry','jalview.datamodel.PDBEntry',['jalview.datamodel.PDBEntry','.Type'],'jalview.datamodel.DBRefSource','java.util.BitSet']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DBRefUtils", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.canonicalSourceNameLookup=null;
C$.matchNonNullonA=null;
C$.matchEitherNonNull=null;
C$.matchDbAndIdAndEitherMap=null;
C$.matchDbAndIdAndComplementaryMapList=null;
C$.matchDbAndIdAndEquivalentMapList=null;
C$.matchDbAndIdAndEitherMapOrEquivalentMapList=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.canonicalSourceNameLookup=Clazz.new_($I$(1));
{
C$.canonicalSourceNameLookup.put$TK$TV("uniprotkb/swiss-prot", "UNIPROT");
C$.canonicalSourceNameLookup.put$TK$TV("uniprotkb/trembl", "UNIPROT");
C$.canonicalSourceNameLookup.put$TK$TV("uniprot/sptrembl", "UNIPROT");
C$.canonicalSourceNameLookup.put$TK$TV("uniprot/swissprot", "UNIPROT");
C$.canonicalSourceNameLookup.put$TK$TV("pdb", "PDB");
C$.canonicalSourceNameLookup.put$TK$TV("ensembl", "ENSEMBL");
C$.canonicalSourceNameLookup.put$TK$TV("ensembl-tr", "ENSEMBL");
C$.canonicalSourceNameLookup.put$TK$TV("ensembl-gn", "ENSEMBL");
for (var k, $k = C$.canonicalSourceNameLookup.keySet$().iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) {
C$.canonicalSourceNameLookup.put$TK$TV(k.toLowerCase$(), C$.canonicalSourceNameLookup.get$O(k));
}
};
C$.matchNonNullonA=((P$.DBRefUtils$1||
(function(){var C$=Clazz.newClass(P$, "DBRefUtils$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.util.DBRefUtils','jalview.util.DBRefUtils.DbRefComp']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry$I','matches$'], function (refa, refb, mode) {
if ((mode & 1) != 0 && (refa.getSource$() == null  || $I$(2).getCanonicalName$S(refb.getSource$()).equals$O($I$(2).getCanonicalName$S(refa.getSource$())) ) ) {
if ((mode & 2) != 0 && (refa.getVersion$() == null  || refb.getVersion$().equals$O(refa.getVersion$()) ) ) {
if ((mode & 4) != 0 && (refa.getAccessionId$() == null  || refb.getAccessionId$().equals$O(refa.getAccessionId$()) ) ) {
if ((mode & 8) != 0 && (refa.getMap$() == null  || (refb.getMap$() != null  && refb.getMap$().equals$O(refa.getMap$()) ) ) ) {
return true;
}}}}return false;
});
})()
), Clazz.new_(P$.DBRefUtils$1.$init$, [this, null]));
C$.matchEitherNonNull=((P$.DBRefUtils$2||
(function(){var C$=Clazz.newClass(P$, "DBRefUtils$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.util.DBRefUtils','jalview.util.DBRefUtils.DbRefComp']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry$I','matches$'], function (refa, refb, mode) {
if (P$.DBRefUtils.nullOrEqualSource$S$S(refa.getSource$(), refb.getSource$()) && P$.DBRefUtils.nullOrEqual$O$O(refa.getVersion$(), refb.getVersion$()) && P$.DBRefUtils.nullOrEqual$O$O(refa.getAccessionId$(), refb.getAccessionId$()) && P$.DBRefUtils.nullOrEqual$O$O(refa.getMap$(), refb.getMap$())  ) {
return true;
}return false;
});
})()
), Clazz.new_(P$.DBRefUtils$2.$init$, [this, null]));
C$.matchDbAndIdAndEitherMap=((P$.DBRefUtils$3||
(function(){var C$=Clazz.newClass(P$, "DBRefUtils$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.util.DBRefUtils','jalview.util.DBRefUtils.DbRefComp']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry$I','matches$'], function (refa, refb, mode) {
if (refa.getSource$() != null  && refb.getSource$() != null   && $I$(2).getCanonicalName$S(refb.getSource$()).equals$O($I$(2).getCanonicalName$S(refa.getSource$())) ) {
if (refa.getAccessionId$() != null  && refb.getAccessionId$() != null   || refb.getAccessionId$().equals$O(refa.getAccessionId$()) ) {
if ((refa.getMap$() == null  || refb.getMap$() == null  ) || (refa.getMap$() != null  && refb.getMap$() != null   && refb.getMap$().equals$O(refa.getMap$()) ) ) {
return true;
}}}return false;
});
})()
), Clazz.new_(P$.DBRefUtils$3.$init$, [this, null]));
C$.matchDbAndIdAndComplementaryMapList=((P$.DBRefUtils$4||
(function(){var C$=Clazz.newClass(P$, "DBRefUtils$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.util.DBRefUtils','jalview.util.DBRefUtils.DbRefComp']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry$I','matches$'], function (refa, refb, mode) {
if (refa.getSource$() != null  && refb.getSource$() != null   && $I$(2).getCanonicalName$S(refb.getSource$()).equals$O($I$(2).getCanonicalName$S(refa.getSource$())) ) {
if (refa.getAccessionId$() != null  && refb.getAccessionId$() != null   || refb.getAccessionId$().equals$O(refa.getAccessionId$()) ) {
if ((refa.getMap$() == null  && refb.getMap$() == null  ) || (refa.getMap$() != null  && refb.getMap$() != null  ) ) {
if ((refb.getMap$().getMap$() == null  && refa.getMap$().getMap$() == null  ) || (refb.getMap$().getMap$() != null  && refa.getMap$().getMap$() != null   && refb.getMap$().getMap$().getInverse$().equals$O(refa.getMap$().getMap$()) ) ) {
return true;
}}}}return false;
});
})()
), Clazz.new_(P$.DBRefUtils$4.$init$, [this, null]));
C$.matchDbAndIdAndEquivalentMapList=((P$.DBRefUtils$5||
(function(){var C$=Clazz.newClass(P$, "DBRefUtils$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.util.DBRefUtils','jalview.util.DBRefUtils.DbRefComp']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry$I','matches$'], function (refa, refb, mode) {
if (refa.getSource$() != null  && refb.getSource$() != null   && $I$(2).getCanonicalName$S(refb.getSource$()).equals$O($I$(2).getCanonicalName$S(refa.getSource$())) ) {
if (refa.getAccessionId$() != null  && refb.getAccessionId$() != null   || refb.getAccessionId$().equals$O(refa.getAccessionId$()) ) {
if (refa.getMap$() == null  && refb.getMap$() == null  ) {
return true;
}if (refa.getMap$() != null  && refb.getMap$() != null   && ((refb.getMap$().getMap$() == null  && refa.getMap$().getMap$() == null  ) || (refb.getMap$().getMap$() != null  && refa.getMap$().getMap$() != null   && refb.getMap$().getMap$().equals$O(refa.getMap$().getMap$()) ) ) ) {
return true;
}}}return false;
});
})()
), Clazz.new_(P$.DBRefUtils$5.$init$, [this, null]));
C$.matchDbAndIdAndEitherMapOrEquivalentMapList=((P$.DBRefUtils$6||
(function(){var C$=Clazz.newClass(P$, "DBRefUtils$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.util.DBRefUtils','jalview.util.DBRefUtils.DbRefComp']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry$I','matches$'], function (refa, refb, mode) {
if (refa.getSource$() != null  && refb.getSource$() != null   && $I$(2).getCanonicalName$S(refb.getSource$()).equals$O($I$(2).getCanonicalName$S(refa.getSource$())) ) {
if (refa.getAccessionId$() == null  || refa.getAccessionId$().equals$O(refb.getAccessionId$()) ) {
if (refa.getMap$() == null  || refb.getMap$() == null  ) {
return true;
}if ((refa.getMap$() != null  && refb.getMap$() != null  ) && (refb.getMap$().getMap$() == null  && refa.getMap$().getMap$() == null  )  || (refb.getMap$().getMap$() != null  && refa.getMap$().getMap$() != null   && (refb.getMap$().getMap$().equals$O(refa.getMap$().getMap$())) ) ) {
return true;
}}}return false;
});
})()
), Clazz.new_(P$.DBRefUtils$6.$init$, [this, null]));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'selectRefs$java_util_List$SA', function (dbrefs, sources) {
if (dbrefs == null  || sources == null  ) {
return dbrefs;
}var srcs=Clazz.new_($I$(3));
for (var src, $src = 0, $$src = sources; $src<$$src.length&&((src=($$src[$src])),1);$src++) {
srcs.add$TE(src.toUpperCase$());
}
var nrefs=dbrefs.size$();
var res=Clazz.new_($I$(4));
for (var ib=0; ib < nrefs; ib++) {
var dbr=dbrefs.get$I(ib);
var source=C$.getCanonicalName$S(dbr.getSource$());
if (srcs.contains$O(source.toUpperCase$())) {
res.add$TE(dbr);
}}
if (res.size$() > 0) {
return res;
}return null;
}, 1);

Clazz.newMeth(C$, 'selectRefsBS$java_util_List$I$java_util_BitSet', function (dbrefs, sourceKeys, bsSelect) {
if (dbrefs == null  || sourceKeys == 0 ) {
return false;
}for (var i=0, n=dbrefs.size$(); i < n; i++) {
var dbr=dbrefs.get$I(i);
if ((dbr.getSourceKey$() & sourceKeys) != 0) {
bsSelect.clear$I(i);
}}
return !bsSelect.isEmpty$();
}, 1);

Clazz.newMeth(C$, 'searchRefs$jalview_datamodel_DBRefEntryA$jalview_datamodel_DBRefEntry$jalview_util_DBRefUtils_DbRefComp', function (refs, entry, comparator) {
var rfs=Clazz.new_($I$(4));
if (refs == null  || entry == null  ) {
return rfs;
}for (var i=0; i < refs.length; i++) {
if (comparator.matches$(entry, refs[i])) {
rfs.add$TE(refs[i]);
}}
return rfs;
}, 1);

Clazz.newMeth(C$, 'getCanonicalName$S', function (source) {
if (source == null ) {
return null;
}var canonical=C$.canonicalSourceNameLookup.get$O(source.toLowerCase$());
return canonical == null  ? source : canonical;
}, 1);

Clazz.newMeth(C$, 'searchRefs$java_util_List$jalview_datamodel_DBRefEntry$I', function (ref, entry, mode) {
return C$.searchRefs$java_util_List$jalview_datamodel_DBRefEntry$jalview_util_DBRefUtils_DbRefComp$I(ref, entry, C$.matchDbAndIdAndEitherMapOrEquivalentMapList, mode);
}, 1);

Clazz.newMeth(C$, 'searchRefs$java_util_List$S', function (refs, accId) {
var rfs=Clazz.new_($I$(4));
if (refs == null  || accId == null  ) {
return rfs;
}for (var i=0, n=refs.size$(); i < n; i++) {
var e=refs.get$I(i);
if (accId.equals$O(e.getAccessionId$())) {
rfs.add$TE(e);
}}
return rfs;
}, 1);

Clazz.newMeth(C$, 'searchRefs$java_util_List$jalview_datamodel_DBRefEntry$jalview_util_DBRefUtils_DbRefComp$I', function (refs, entry, comparator, mode) {
var rfs=Clazz.new_($I$(4));
if (refs == null  || entry == null  ) {
return rfs;
}for (var i=0, n=refs.size$(); i < n; i++) {
var e=refs.get$I(i);
if (comparator.matches$(entry, e, 15)) {
rfs.add$TE(e);
}}
return rfs;
}, 1);

Clazz.newMeth(C$, 'searchRefsForSource$jalview_datamodel_DBRefEntryA$S', function (dbRefs, source) {
var matches=Clazz.new_($I$(4));
if (dbRefs != null  && source != null  ) {
for (var dbref, $dbref = 0, $$dbref = dbRefs; $dbref<$$dbref.length&&((dbref=($$dbref[$dbref])),1);$dbref++) {
if (source.equalsIgnoreCase$S(dbref.getSource$())) {
matches.add$TE(dbref);
}}
}return matches;
}, 1);

Clazz.newMeth(C$, 'parseToDbRef$jalview_datamodel_SequenceI$S$S$S', function (seq, dbname, version, acn) {
var ref=null;
if (dbname != null ) {
var locsrc=C$.getCanonicalName$S(dbname);
if (locsrc.equals$O("PDB")) {
var r=Clazz.new_($I$(5).c$$S,["([0-9][0-9A-Za-z]{3})\\s*(.?)\\s*;\\s*([0-9]+)-([0-9]+)"]);
if (r.search$S(acn.trim$())) {
var pdbid=r.stringMatched$I(1);
var chaincode=r.stringMatched$I(2);
if (chaincode == null ) {
chaincode=" ";
}if (chaincode.equals$O(" ")) {
chaincode="_";
}ref=Clazz.new_($I$(6).c$$S$S$S,[locsrc, version, pdbid + chaincode]);
var pdbr=Clazz.new_($I$(7));
pdbr.setId$S(pdbid);
pdbr.setType$jalview_datamodel_PDBEntry_Type($I$(8).PDB);
pdbr.setChainCode$S(chaincode);
seq.addPDBId$jalview_datamodel_PDBEntry(pdbr);
} else {
System.err.println$S("Malformed PDB DR line:" + acn);
}} else {
ref=Clazz.new_($I$(6).c$$S$S$S,[locsrc, version, acn]);
}}if (ref != null ) {
seq.addDBRef$jalview_datamodel_DBRefEntry(ref);
}return ref;
}, 1);

Clazz.newMeth(C$, 'nullOrEqual$O$O', function (o1, o2) {
if (o1 == null  || o2 == null  ) {
return true;
}return o1.equals$O(o2);
}, 1);

Clazz.newMeth(C$, 'nullOrEqualSource$S$S', function (o1, o2) {
if (o1 == null  || o2 == null  ) {
return true;
}return C$.getCanonicalName$S(o1).equals$O(C$.getCanonicalName$S(o2));
}, 1);

Clazz.newMeth(C$, 'selectDbRefs$Z$java_util_List', function (selectDna, refs) {
return C$.selectRefs$java_util_List$SA(refs, selectDna ? $I$(9).DNACODINGDBS : $I$(9).PROTEINDBS);
}, 1);

Clazz.newMeth(C$, 'searchRefsForSource$java_util_List$S', function (dbRefs, source) {
var matches=Clazz.new_($I$(4));
if (dbRefs != null  && source != null  ) {
for (var dbref, $dbref = dbRefs.iterator$(); $dbref.hasNext$()&&((dbref=($dbref.next$())),1);) {
if (source.equalsIgnoreCase$S(dbref.getSource$())) {
matches.add$TE(dbref);
}}
}return matches;
}, 1);

Clazz.newMeth(C$, 'ensurePrimaries$jalview_datamodel_SequenceI$java_util_List', function (sequence, pr) {
if (pr.size$() == 0) {
return;
}var sstart=sequence.getStart$();
var send=sequence.getEnd$();
var isProtein=sequence.isProtein$();
var bsSelect=Clazz.new_($I$(10));
var dbrefs=sequence.getDBRefs$();
bsSelect.set$I$I(0, dbrefs.size$());
if (!C$.selectRefsBS$java_util_List$I$java_util_BitSet(dbrefs, isProtein ? 141 : 2168, bsSelect)) return;
for (var ip=pr.size$(); --ip >= 0; ) {
var p=pr.get$I(ip);
for (var i=bsSelect.nextSetBit$I(0); i >= 0; i=bsSelect.nextSetBit$I(i + 1)) {
if (dbrefs.get$I(i) === p ) bsSelect.clear$I(i);
}
}
for (var ip=pr.size$(), keys=0; --ip >= 0 && keys != 9 ; ) {
var p=pr.get$I(ip);
if (isProtein) {
switch (C$.getCanonicalName$S(p.getSource$())) {
case "UNIPROT":
keys|=1;
break;
case "ENSEMBL":
keys|=8;
break;
}
} else {
}if (keys == 0 || !C$.selectRefsBS$java_util_List$I$java_util_BitSet(dbrefs, keys, bsSelect) ) return;
{
for (var ic=bsSelect.nextSetBit$I(0); ic >= 0; ic=bsSelect.nextSetBit$I(ic + 1)) {
var cand=dbrefs.get$I(ic);
if (cand.hasMap$()) {
var map=cand.getMap$();
var cto=map.getTo$();
if (cto != null  && cto !== sequence  ) {
continue;
}var mlist=map.getMap$();
if (mlist.getFromLowest$() != sstart && mlist.getFromHighest$() != send ) {
continue;
}}cand.setVersion$S(p.getVersion$() + " (promoted)");
bsSelect.clear$I(ic);
if (!cand.isPrimaryCandidate$()) {
System.out.println$S("Warning: Couldn't promote dbref " + cand.toString() + " for sequence " + sequence.toString() );
}}
}}
}, 1);
;
(function(){var C$=Clazz.newInterface(P$.DBRefUtils, "DbRefComp", function(){
});
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'matches$', function (refa, refb) {
return this.matches$(refa, refb, 15);
});
};})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
