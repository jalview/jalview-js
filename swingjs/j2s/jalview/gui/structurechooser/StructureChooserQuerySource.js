(function(){var P$=Clazz.newPackage("jalview.gui.structurechooser"),I$=[[0,'jalview.gui.structurechooser.PDBStructureChooserQuerySource','jalview.gui.structurechooser.ThreeDBStructureChooserQuerySource','java.util.Objects','java.util.Locale','jalview.fts.core.FTSRestResponse']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StructureChooserQuerySource");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['docFieldPrefs','jalview.fts.core.FTSDataColumnPreferences']]
,['I',['MAX_QLENGTH']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPDBfts$',  function () {
return Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'getTDBfts$',  function () {
return Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'getDocFieldPrefs$',  function () {
return this.docFieldPrefs;
});

Clazz.newMeth(C$, 'setDocFieldPrefs$jalview_fts_core_FTSDataColumnPreferences',  function (docFieldPrefs) {
this.docFieldPrefs=docFieldPrefs;
});

Clazz.newMeth(C$, 'getInitialFieldPreferences$',  function () {
return this.docFieldPrefs;
});

Clazz.newMeth(C$, 'sanitizeSeqName$S',  function (seqName) {
$I$(3).requireNonNull$O(seqName);
return seqName.replaceAll$S$S("\\[\\d*\\]", "").replaceAll$S$S("[^\\dA-Za-z|_]", "").replaceAll$S$S("\\s+", "+");
}, 1);

Clazz.newMeth(C$, 'isValidSeqName$S',  function (seqName) {
var ignoreList="pdb,uniprot,swiss-prot";
if (seqName.length$() < 3) {
return false;
}if (seqName.contains$CharSequence(":")) {
return false;
}seqName=seqName.toLowerCase$java_util_Locale($I$(4).ROOT);
for (var ignoredEntry, $ignoredEntry = 0, $$ignoredEntry = ignoreList.split$S(","); $ignoredEntry<$$ignoredEntry.length&&((ignoredEntry=($$ignoredEntry[$ignoredEntry])),1);$ignoredEntry++) {
if (seqName.contains$CharSequence(ignoredEntry)) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'getDBRefId$jalview_datamodel_DBRefEntry',  function (dbRef) {
var ref=dbRef.getAccessionId$().replaceAll$S$S("GO:", "");
return ref;
}, 1);

Clazz.newMeth(C$, 'getFindEntry$S$java_util_Vector',  function (id, pdbEntries) {
$I$(3).requireNonNull$O(id);
$I$(3).requireNonNull$O(pdbEntries);
var foundEntry=null;
for (var entry, $entry = pdbEntries.iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (entry.getId$().equalsIgnoreCase$S(id)) {
return entry;
}}
return foundEntry;
}, 1);

Clazz.newMeth(C$, 'getTableModel$java_util_Collection',  function (discoveredStructuresSet) {
return $I$(5,"getTableModel$jalview_fts_core_FTSRestRequest$java_util_Collection",[this.getLastFTSRequest$(), discoveredStructuresSet]);
});

Clazz.newMeth(C$, 'getQuerySourceFor$jalview_datamodel_SequenceIA',  function (selectedSeqs) {
var tdbSource=Clazz.new_($I$(2,1));
var hasUniprot=false;
var hasCanonical=false;
var hasNA=false;
var hasProtein=false;
var protWithoutUni=0;
var protWithoutCanon=0;
for (var seq, $seq = 0, $$seq = selectedSeqs; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
hasNA=!!(hasNA|(!seq.isProtein$()));
hasProtein=!!(hasProtein|(seq.isProtein$()));
if (seq.isProtein$()) {
var refsAvailable=$I$(2,"checkUniprotRefs$java_util_List",[seq.getDBRefs$()]);
if (refsAvailable > -2) {
if (refsAvailable > -1) {
hasCanonical=true;
} else {
++protWithoutCanon;
}hasUniprot=true;
} else {
++protWithoutUni;
}}}
if (hasProtein && hasCanonical && !hasNA && protWithoutCanon == 0   && protWithoutUni == 0 ) {
return tdbSource;
}return Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'updateAvailableFilterOptions$S$java_util_List$java_util_Collection',  function (VIEWS_FILTER, xtantOptions, lastFTSData) {
});

C$.$static$=function(){C$.$static$=0;
C$.MAX_QLENGTH=7820;
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:36 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
