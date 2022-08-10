(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.util.HashMap','java.util.Locale','jalview.util.DBRefUtils','java.util.HashSet','java.util.ArrayList','com.stevesoft.pat.Regex','jalview.datamodel.DBRefEntry','jalview.datamodel.PDBEntry',['jalview.datamodel.PDBEntry','.Type'],'jalview.datamodel.DBRefSource','java.util.BitSet']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DBRefUtils", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['DbRefComp',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['canonicalSourceNameLookup','java.util.Map','matchNonNullonA','jalview.util.DBRefUtils.DbRefComp','+matchEitherNonNull','+matchDbAndIdAndEitherMap','+matchDbAndIdAndComplementaryMapList','+matchDbAndIdAndEquivalentMapList','+matchDbAndIdAndEitherMapOrEquivalentMapList']]]

Clazz.newMeth(C$, 'selectRefs$java_util_List$SA',  function (dbrefs, sources) {
if (dbrefs == null  || sources == null  ) {
return dbrefs;
}var srcs=Clazz.new_($I$(4,1));
for (var src, $src = 0, $$src = sources; $src<$$src.length&&((src=($$src[$src])),1);$src++) {
srcs.add$O(src.toUpperCase$java_util_Locale($I$(2).ROOT));
}
var nrefs=dbrefs.size$();
var res=Clazz.new_($I$(5,1));
for (var ib=0; ib < nrefs; ib++) {
var dbr=dbrefs.get$I(ib);
var source=C$.getCanonicalName$S(dbr.getSource$());
if (srcs.contains$O(source.toUpperCase$java_util_Locale($I$(2).ROOT))) {
res.add$O(dbr);
}}
if (res.size$() > 0) {
return res;
}return null;
}, 1);

Clazz.newMeth(C$, 'selectRefsBS$java_util_List$I$java_util_BitSet',  function (dbrefs, sourceKeys, bsSelect) {
if (dbrefs == null  || sourceKeys == 0 ) {
return false;
}for (var i=0, n=dbrefs.size$(); i < n; i++) {
var dbr=dbrefs.get$I(i);
if ((dbr.getSourceKey$() & sourceKeys) != 0) {
bsSelect.clear$I(i);
}}
return !bsSelect.isEmpty$();
}, 1);

Clazz.newMeth(C$, 'searchRefs$jalview_datamodel_DBRefEntryA$jalview_datamodel_DBRefEntry$jalview_util_DBRefUtils_DbRefComp',  function (refs, entry, comparator) {
var rfs=Clazz.new_($I$(5,1));
if (refs == null  || entry == null  ) {
return rfs;
}for (var i=0; i < refs.length; i++) {
if (comparator.matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry(entry, refs[i])) {
rfs.add$O(refs[i]);
}}
return rfs;
}, 1);

Clazz.newMeth(C$, 'getCanonicalName$S',  function (source) {
if (source == null ) {
return null;
}var canonical=C$.canonicalSourceNameLookup.get$O(source.toLowerCase$java_util_Locale($I$(2).ROOT));
return canonical == null  ? source : canonical;
}, 1);

Clazz.newMeth(C$, 'searchRefs$java_util_List$jalview_datamodel_DBRefEntry$I',  function (ref, entry, mode) {
return C$.searchRefs$java_util_List$jalview_datamodel_DBRefEntry$jalview_util_DBRefUtils_DbRefComp$I(ref, entry, C$.matchDbAndIdAndEitherMapOrEquivalentMapList, mode);
}, 1);

Clazz.newMeth(C$, 'searchRefs$java_util_List$S',  function (refs, accId) {
var rfs=Clazz.new_($I$(5,1));
if (refs == null  || accId == null  ) {
return rfs;
}for (var i=0, n=refs.size$(); i < n; i++) {
var e=refs.get$I(i);
if (accId.equals$O(e.getAccessionId$())) {
rfs.add$O(e);
}}
return rfs;
}, 1);

Clazz.newMeth(C$, 'searchRefs$java_util_List$jalview_datamodel_DBRefEntry$jalview_util_DBRefUtils_DbRefComp$I',  function (refs, entry, comparator, mode) {
var rfs=Clazz.new_($I$(5,1));
if (refs == null  || entry == null  ) {
return rfs;
}for (var i=0, n=refs.size$(); i < n; i++) {
var e=refs.get$I(i);
if (comparator.matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry$I(entry, e, 15)) {
rfs.add$O(e);
}}
return rfs;
}, 1);

Clazz.newMeth(C$, 'parseToDbRef$jalview_datamodel_SequenceI$S$S$S',  function (seq, dbname, version, acn) {
var ref=null;
if (dbname != null ) {
var locsrc=C$.getCanonicalName$S(dbname);
if (locsrc.equals$O("PDB")) {
var r=Clazz.new_(["([0-9][0-9A-Za-z]{3})\\s*(.?)\\s*;\\s*([0-9]+)-([0-9]+)"],$I$(6,1).c$$S);
if (r.search$S(acn.trim$())) {
var pdbid=r.stringMatched$I(1);
var chaincode=r.stringMatched$I(2);
if (chaincode == null ) {
chaincode=" ";
}if (chaincode.equals$O(" ")) {
chaincode="_";
}ref=Clazz.new_($I$(7,1).c$$S$S$S,[locsrc, version, pdbid + chaincode]);
var pdbr=Clazz.new_($I$(8,1));
pdbr.setId$S(pdbid);
pdbr.setType$jalview_datamodel_PDBEntry_Type($I$(9).PDB);
pdbr.setChainCode$S(chaincode);
seq.addPDBId$jalview_datamodel_PDBEntry(pdbr);
} else {
System.err.println$S("Malformed PDB DR line:" + acn);
}} else {
ref=Clazz.new_([locsrc, version, acn.trim$()],$I$(7,1).c$$S$S$S);
}}if (ref != null ) {
seq.addDBRef$jalview_datamodel_DBRefEntry(ref);
}return ref;
}, 1);

Clazz.newMeth(C$, 'searchRefsForSource$jalview_datamodel_DBRefEntryA$S',  function (dbRefs, source) {
var matches=Clazz.new_($I$(5,1));
if (dbRefs != null  && source != null  ) {
for (var dbref, $dbref = 0, $$dbref = dbRefs; $dbref<$$dbref.length&&((dbref=($$dbref[$dbref])),1);$dbref++) {
if (source.equalsIgnoreCase$S(dbref.getSource$())) {
matches.add$O(dbref);
}}
}return matches;
}, 1);

Clazz.newMeth(C$, 'nullOrEqual$O$O',  function (o1, o2) {
if (o1 == null  || o2 == null  ) {
return true;
}return o1.equals$O(o2);
}, 1);

Clazz.newMeth(C$, 'nullOrEqualSource$S$S',  function (o1, o2) {
if (o1 == null  || o2 == null  ) {
return true;
}return C$.getCanonicalName$S(o1).equals$O(C$.getCanonicalName$S(o2));
}, 1);

Clazz.newMeth(C$, 'selectDbRefs$Z$java_util_List',  function (selectDna, refs) {
return C$.selectRefs$java_util_List$SA(refs, selectDna ? $I$(10).DNACODINGDBS : $I$(10).PROTEINDBS);
}, 1);

Clazz.newMeth(C$, 'searchRefsForSource$java_util_List$S',  function (dbRefs, source) {
var matches=Clazz.new_($I$(5,1));
if (dbRefs != null  && source != null  ) {
for (var dbref, $dbref = dbRefs.iterator$(); $dbref.hasNext$()&&((dbref=($dbref.next$())),1);) {
if (source.equalsIgnoreCase$S(dbref.getSource$())) {
matches.add$O(dbref);
}}
}return matches;
}, 1);

Clazz.newMeth(C$, 'ensurePrimaries$jalview_datamodel_SequenceI$java_util_List',  function (sequence, pr) {
if (pr.size$() == 0) {
return;
}var sstart=sequence.getStart$();
var send=sequence.getEnd$();
var isProtein=sequence.isProtein$();
var bsSelect=Clazz.new_($I$(11,1));
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

C$.$static$=function(){C$.$static$=0;
C$.canonicalSourceNameLookup=Clazz.new_($I$(1,1));
{
C$.canonicalSourceNameLookup.put$O$O("uniprotkb/swiss-prot", "UNIPROT");
C$.canonicalSourceNameLookup.put$O$O("uniprotkb/trembl", "UNIPROT");
C$.canonicalSourceNameLookup.put$O$O("uniprot/sptrembl", "UNIPROT");
C$.canonicalSourceNameLookup.put$O$O("uniprot/swissprot", "UNIPROT");
C$.canonicalSourceNameLookup.put$O$O("pdb", "PDB");
C$.canonicalSourceNameLookup.put$O$O("ensembl", "ENSEMBL");
C$.canonicalSourceNameLookup.put$O$O("ensembl-tr", "ENSEMBL");
C$.canonicalSourceNameLookup.put$O$O("ensembl-gn", "ENSEMBL");
for (var k, $k = C$.canonicalSourceNameLookup.keySet$().iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) {
C$.canonicalSourceNameLookup.put$O$O(k.toLowerCase$java_util_Locale($I$(2).ROOT), C$.canonicalSourceNameLookup.get$O(k));
}
};
C$.matchNonNullonA=((P$.DBRefUtils$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DBRefUtils$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.util.DBRefUtils','jalview.util.DBRefUtils.DbRefComp']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry$I',  function (refa, refb, mode) {
if ((mode & 1) != 0 && (refa.getSource$() == null  || $I$(3,"getCanonicalName$S",[refb.getSource$()]).equals$O($I$(3,"getCanonicalName$S",[refa.getSource$()])) ) ) {
if ((mode & 2) != 0 && (refa.getVersion$() == null  || refb.getVersion$().equals$O(refa.getVersion$()) ) ) {
if ((mode & 4) != 0 && (refa.getAccessionId$() == null  || refb.getAccessionId$().equals$O(refa.getAccessionId$()) ) ) {
if ((mode & 8) != 0 && (refa.getMap$() == null  || (refb.getMap$() != null  && refb.getMap$().equals$O(refa.getMap$()) ) ) ) {
return true;
}}}}return false;
});
})()
), Clazz.new_(P$.DBRefUtils$1.$init$,[this, null]));
C$.matchEitherNonNull=((P$.DBRefUtils$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DBRefUtils$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.util.DBRefUtils','jalview.util.DBRefUtils.DbRefComp']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry$I',  function (refa, refb, mode) {
if ($I$(3,"nullOrEqualSource$S$S",[refa.getSource$(), refb.getSource$()]) && $I$(3,"nullOrEqual$O$O",[refa.getVersion$(), refb.getVersion$()]) && $I$(3,"nullOrEqual$O$O",[refa.getAccessionId$(), refb.getAccessionId$()]) && $I$(3,"nullOrEqual$O$O",[refa.getMap$(), refb.getMap$()])  ) {
return true;
}return false;
});
})()
), Clazz.new_(P$.DBRefUtils$2.$init$,[this, null]));
C$.matchDbAndIdAndEitherMap=((P$.DBRefUtils$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DBRefUtils$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.util.DBRefUtils','jalview.util.DBRefUtils.DbRefComp']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry$I',  function (refa, refb, mode) {
if (refa.getSource$() != null  && refb.getSource$() != null   && $I$(3,"getCanonicalName$S",[refb.getSource$()]).equals$O($I$(3,"getCanonicalName$S",[refa.getSource$()])) ) {
if (refa.getAccessionId$() != null  && refb.getAccessionId$() != null   || refb.getAccessionId$().equals$O(refa.getAccessionId$()) ) {
if ((refa.getMap$() == null  || refb.getMap$() == null  ) || (refa.getMap$() != null  && refb.getMap$() != null   && refb.getMap$().equals$O(refa.getMap$()) ) ) {
return true;
}}}return false;
});
})()
), Clazz.new_(P$.DBRefUtils$3.$init$,[this, null]));
C$.matchDbAndIdAndComplementaryMapList=((P$.DBRefUtils$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DBRefUtils$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.util.DBRefUtils','jalview.util.DBRefUtils.DbRefComp']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry$I',  function (refa, refb, mode) {
if (refa.getSource$() != null  && refb.getSource$() != null   && $I$(3,"getCanonicalName$S",[refb.getSource$()]).equals$O($I$(3,"getCanonicalName$S",[refa.getSource$()])) ) {
if (refa.getAccessionId$() != null  && refb.getAccessionId$() != null   || refb.getAccessionId$().equals$O(refa.getAccessionId$()) ) {
if ((refa.getMap$() == null  && refb.getMap$() == null  ) || (refa.getMap$() != null  && refb.getMap$() != null  ) ) {
if ((refb.getMap$().getMap$() == null  && refa.getMap$().getMap$() == null  ) || (refb.getMap$().getMap$() != null  && refa.getMap$().getMap$() != null   && refb.getMap$().getMap$().getInverse$().equals$O(refa.getMap$().getMap$()) ) ) {
return true;
}}}}return false;
});
})()
), Clazz.new_(P$.DBRefUtils$4.$init$,[this, null]));
C$.matchDbAndIdAndEquivalentMapList=((P$.DBRefUtils$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DBRefUtils$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.util.DBRefUtils','jalview.util.DBRefUtils.DbRefComp']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry$I',  function (refa, refb, mode) {
if (refa.getSource$() != null  && refb.getSource$() != null   && $I$(3,"getCanonicalName$S",[refb.getSource$()]).equals$O($I$(3,"getCanonicalName$S",[refa.getSource$()])) ) {
if (refa.getAccessionId$() != null  && refb.getAccessionId$() != null   || refb.getAccessionId$().equals$O(refa.getAccessionId$()) ) {
if (refa.getMap$() == null  && refb.getMap$() == null  ) {
return true;
}if (refa.getMap$() != null  && refb.getMap$() != null   && ((refb.getMap$().getMap$() == null  && refa.getMap$().getMap$() == null  ) || (refb.getMap$().getMap$() != null  && refa.getMap$().getMap$() != null   && refb.getMap$().getMap$().equals$O(refa.getMap$().getMap$()) ) ) ) {
return true;
}}}return false;
});
})()
), Clazz.new_(P$.DBRefUtils$5.$init$,[this, null]));
C$.matchDbAndIdAndEitherMapOrEquivalentMapList=((P$.DBRefUtils$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "DBRefUtils$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.util.DBRefUtils','jalview.util.DBRefUtils.DbRefComp']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry$I',  function (refa, refb, mode) {
if (refa.getSource$() != null  && refb.getSource$() != null   && $I$(3,"getCanonicalName$S",[refb.getSource$()]).equals$O($I$(3,"getCanonicalName$S",[refa.getSource$()])) ) {
if (refa.getAccessionId$() == null  || refa.getAccessionId$().equals$O(refb.getAccessionId$()) ) {
if (refa.getMap$() == null  || refb.getMap$() == null  ) {
return true;
}if ((refa.getMap$() != null  && refb.getMap$() != null  ) && (refb.getMap$().getMap$() == null  && refa.getMap$().getMap$() == null  )  || (refb.getMap$().getMap$() != null  && refa.getMap$().getMap$() != null   && (refb.getMap$().getMap$().equals$O(refa.getMap$().getMap$())) ) ) {
return true;
}}}return false;
});
})()
), Clazz.new_(P$.DBRefUtils$6.$init$,[this, null]));
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.DBRefUtils, "DbRefComp", function(){
});
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry',  function (refa, refb) {
return this.matches$jalview_datamodel_DBRefEntry$jalview_datamodel_DBRefEntry$I(refa, refb, 15);
});
};})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
