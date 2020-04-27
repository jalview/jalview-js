(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[[0,'com.stevesoft.pat.Regex','jalview.structure.StructureImportSettings','jalview.ws.ebi.EBIFetchClient',['jalview.datamodel.PDBEntry','.Type'],'jalview.io.FileFormat','jalview.io.FormatAdapter','jalview.io.DataSourceType','java.util.ArrayList','jalview.datamodel.DBRefEntry','jalview.util.MessageManager','jalview.io.PDBFeatureSettings']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Pdb", null, 'jalview.ws.dbsources.EbiFileRetrievedProxy');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAccessionSeparator$', function () {
return null;
});

Clazz.newMeth(C$, 'getAccessionValidator$', function () {
return Clazz.new_(["([1-9][0-9A-Za-z]{3}):?([ _A-Za-z0-9]?)"],$I$(1,1).c$$S);
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return "PDB";
});

Clazz.newMeth(C$, 'getDbVersion$', function () {
return "0";
});

Clazz.newMeth(C$, 'getSequenceRecords$S', function (queries) {
var pdbAlignment=null;
var chain=null;
var id=null;
if (queries.indexOf$S(":") > -1) {
chain=queries.substring$I(queries.indexOf$S(":") + 1);
id=queries.substring$I$I(0, queries.indexOf$S(":"));
} else {
id=queries;
}if (queries.length$() > 4 && chain == null  ) {
chain=queries.substring$I$I(4, 5);
id=queries.substring$I$I(0, 4);
}if (!this.isValidReference$S(id)) {
System.err.println$S("Ignoring invalid pdb query: '" + id + "'" );
this.stopQuery$();
return null;
}var pdbFileFormat=$I$(2).getDefaultStructureFileFormat$();
var ext=pdbFileFormat.getExtension$();
var fetchFormat=pdbFileFormat.getFormat$();
var ebi=Clazz.new_($I$(3,1));
var tmpFile=ebi.fetchDataAsFile$S$S$S("pdb:" + id, fetchFormat, ext);
this.file=tmpFile.getAbsolutePath$();
this.stopQuery$();
if (this.file == null ) {
return null;
}try {
var fileFormat=(pdbFileFormat === $I$(4).PDB ) ? $I$(5).PDB : $I$(5).MMCif;
pdbAlignment=Clazz.new_($I$(6,1)).readFile$java_io_File$jalview_io_DataSourceType$jalview_io_FileFormatI(tmpFile, $I$(7).FILE, fileFormat);
if (pdbAlignment != null ) {
var toremove=Clazz.new_($I$(8,1));
for (var pdbcs, $pdbcs = pdbAlignment.getSequences$().iterator$(); $pdbcs.hasNext$()&&((pdbcs=($pdbcs.next$())),1);) {
var chid=null;
for (var pid, $pid = pdbcs.getAllPDBEntries$().iterator$(); $pid.hasNext$()&&((pid=($pid.next$())),1);) {
if (pid.getFile$() == this.file) {
chid=pid.getChainCode$();
}}
if (chain == null  || (chid != null  && (chid.equals$O(chain) || chid.trim$().equals$O(chain.trim$()) || (chain.trim$().length$() == 0 && chid.equals$O("_") )  ) ) ) {
pdbcs.setName$S("PDB" + "|" + id + "|" + pdbcs.getName$() );
var dbentry=Clazz.new_([this.getDbSource$(), this.getDbVersion$(), (chid == null  ? id : id + chid)],$I$(9,1).c$$S$S$S);
pdbcs.addDBRef$jalview_datamodel_DBRefEntry(dbentry);
} else {
toremove.add$O(pdbcs);
}}
for (var pdbcs, $pdbcs = toremove.iterator$(); $pdbcs.hasNext$()&&((pdbcs=($pdbcs.next$())),1);) {
pdbAlignment.deleteSequence$jalview_datamodel_SequenceI(pdbcs);
if (pdbcs.getAnnotation$() != null ) {
for (var aa, $aa = 0, $$aa = pdbcs.getAnnotation$(); $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
pdbAlignment.deleteAnnotation$jalview_datamodel_AlignmentAnnotation(aa);
}
}}
}if (pdbAlignment == null  || pdbAlignment.getHeight$() < 1 ) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(10,"formatMessage$S$SA",["exception.no_pdb_records_for_chain", Clazz.array(String, -1, [id, ((chain == null ) ? "\' \'" : chain)])])]);
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

Clazz.newMeth(C$, 'isValidReference$S', function (accession) {
var r=this.getAccessionValidator$();
return r.search$S(accession.trim$());
});

Clazz.newMeth(C$, 'getTestQuery$', function () {
return "1QIP";
});

Clazz.newMeth(C$, 'getDbName$', function () {
return "PDB";
});

Clazz.newMeth(C$, 'getTier$', function () {
return 0;
});

Clazz.newMeth(C$, 'getFeatureColourScheme$', function () {
return Clazz.new_($I$(11,1));
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
