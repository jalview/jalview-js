(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[[0,'com.stevesoft.pat.Regex','java.io.File','jalview.ws.utils.UrlDownloadClient','jalview.util.MessageManager','jalview.io.FileFormat','jalview.io.FormatAdapter','jalview.io.DataSourceType','java.util.ArrayList','jalview.datamodel.DBRefEntry','jalview.datamodel.SequenceFeature','jalview.io.PDBFeatureSettings']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EBIAlfaFold", null, 'jalview.ws.dbsources.EbiFileRetrievedProxy');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAccessionSeparator$',  function () {
return null;
});

Clazz.newMeth(C$, 'getAccessionValidator$',  function () {
var validator=Clazz.new_(["(AF-[A-Z]+[0-9]+[A-Z0-9]+-F1)"],$I$(1,1).c$$S);
validator.setIgnoreCase$Z(true);
return validator;
});

Clazz.newMeth(C$, 'getDbSource$',  function () {
return "ALPHAFOLD";
});

Clazz.newMeth(C$, 'getDbVersion$',  function () {
return "1";
});

Clazz.newMeth(C$, 'getAlphaFoldCifDownloadUrl$S',  function (id) {
return "https://alphafold.ebi.ac.uk/files/" + id + "-model_v1.cif" ;
}, 1);

Clazz.newMeth(C$, 'getSequenceRecords$S',  function (queries) {
return this.getSequenceRecords$S$S(queries, null);
});

Clazz.newMeth(C$, 'getSequenceRecords$S$S',  function (queries, retrievalUrl) {
var pdbAlignment=null;
var chain=null;
var id=null;
if (queries.indexOf$S(":") > -1) {
chain=queries.substring$I(queries.indexOf$S(":") + 1);
id=queries.substring$I$I(0, queries.indexOf$S(":"));
} else {
id=queries;
}if (!this.isValidReference$S(id)) {
System.err.println$S("(AFClient) Ignoring invalid pdb query: '" + id + "'" );
this.stopQuery$();
return null;
}var alphaFoldCif=C$.getAlphaFoldCifDownloadUrl$S(id);
if (retrievalUrl != null ) {
alphaFoldCif=retrievalUrl;
}try {
var tmpFile=$I$(2).createTempFile$S$S(id, ".cif");
$I$(3).download$S$java_io_File(alphaFoldCif, tmpFile);
this.file=tmpFile.getAbsolutePath$();
if (this.file == null ) {
return null;
}pdbAlignment=C$.importDownloadedStructureFromUrl$S$java_io_File$S$S$S$S(alphaFoldCif, tmpFile, id, chain, this.getDbSource$(), this.getDbVersion$());
if (pdbAlignment == null  || pdbAlignment.getHeight$() < 1 ) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(4,"formatMessage$S$SA",["exception.no_pdb_records_for_chain", Clazz.array(String, -1, [id, ((chain == null ) ? "\' \'" : chain)])])]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.stopQuery$();
throw (ex);
} else {
throw ex;
}
}
return pdbAlignment;
});

Clazz.newMeth(C$, 'importDownloadedStructureFromUrl$S$java_io_File$S$S$S$S',  function (alphaFoldCif, tmpFile, id, chain, dbSource, dbVersion) {
var file=tmpFile.getAbsolutePath$();
var fileFormat=$I$(5).MMCif;
var pdbAlignment=Clazz.new_($I$(6,1)).readFile$java_io_File$jalview_io_DataSourceType$jalview_io_FileFormatI(tmpFile, $I$(7).FILE, fileFormat);
if (pdbAlignment != null ) {
var toremove=Clazz.new_($I$(8,1));
for (var pdbcs, $pdbcs = pdbAlignment.getSequences$().iterator$(); $pdbcs.hasNext$()&&((pdbcs=($pdbcs.next$())),1);) {
var chid=null;
for (var pid, $pid = pdbcs.getAllPDBEntries$().iterator$(); $pid.hasNext$()&&((pid=($pid.next$())),1);) {
if (pid.getFile$() == file) {
chid=pid.getChainCode$();
}}
if (chain == null  || (chid != null  && (chid.equals$O(chain) || chid.trim$().equals$O(chain.trim$()) || (chain.trim$().length$() == 0 && chid.equals$O("_") )  ) ) ) {
pdbcs.setName$S(id + "|" + pdbcs.getName$() );
if (dbSource != null ) {
var dbentry=Clazz.new_([dbSource, dbVersion, (chid == null  ? id : id + chid)],$I$(9,1).c$$S$S$S);
pdbcs.addDBRef$jalview_datamodel_DBRefEntry(dbentry);
var allsf=pdbcs.getFeatures$().getAllFeatures$SA(Clazz.array(String, -1, []));
var newsf=Clazz.new_($I$(8,1));
if (allsf != null  && allsf.size$() > 0 ) {
for (var f, $f = allsf.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
if (file.equals$O(f.getFeatureGroup$())) {
f=Clazz.new_($I$(10,1).c$$jalview_datamodel_SequenceFeature$S$I$I$S$F,[f, f.type, f.begin, f.end, id, f.score]);
}newsf.add$O(f);
}
pdbcs.setSequenceFeatures$java_util_List(newsf);
}}} else {
toremove.add$O(pdbcs);
}}
for (var pdbcs, $pdbcs = toremove.iterator$(); $pdbcs.hasNext$()&&((pdbcs=($pdbcs.next$())),1);) {
pdbAlignment.deleteSequence$jalview_datamodel_SequenceI(pdbcs);
if (pdbcs.getAnnotation$() != null ) {
for (var aa, $aa = 0, $$aa = pdbcs.getAnnotation$(); $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
pdbAlignment.deleteAnnotation$jalview_datamodel_AlignmentAnnotation(aa);
}
}}
}return pdbAlignment;
}, 1);

Clazz.newMeth(C$, 'isValidReference$S',  function (accession) {
var r=this.getAccessionValidator$();
return r.search$S(accession.trim$());
});

Clazz.newMeth(C$, 'getTestQuery$',  function () {
return "1QIP";
});

Clazz.newMeth(C$, 'getDbName$',  function () {
return "PDB";
});

Clazz.newMeth(C$, 'getTier$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getFeatureColourScheme$',  function () {
return Clazz.new_($I$(11,1));
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
