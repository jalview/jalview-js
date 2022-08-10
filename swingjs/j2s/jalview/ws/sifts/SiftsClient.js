(function(){var P$=Clazz.newPackage("jalview.ws.sifts"),p$1={},I$=[[0,['jalview.ws.sifts.SiftsClient','.CoordinateSys'],'java.io.FileInputStream','java.util.zip.GZIPInputStream','javax.xml.bind.JAXBContext','javax.xml.stream.XMLInputFactory','jalview.xml.binding.sifts.Entry','jalview.ws.sifts.SiftsSettings','java.util.Locale','java.io.File','jalview.io.BackupFiles','java.nio.file.Files','java.nio.file.attribute.BasicFileAttributes','java.nio.file.LinkOption','jalview.util.Platform','java.net.URL','java.io.FileOutputStream','jalview.util.DBRefUtils','java.util.HashSet','StringBuilder','jalview.ws.sifts.SiftsClient','java.io.PrintStream','jalview.structure.StructureMapping','java.util.ArrayList','jalview.analysis.AlignSeq','jalview.util.Comparison','java.util.HashMap','java.util.TreeMap',['jalview.ws.sifts.SiftsClient','.SegmentHelperPojo'],'java.util.Arrays','jalview.datamodel.Mapping','jalview.ws.sifts.MappingOutputPojo','jalview.schemes.ResidueProperties',['jalview.ws.sifts.SiftsClient','.ResidueDetailType'],['jalview.ws.sifts.SiftsClient','.SiftsEntitySortPojo'],'java.util.Collections','jalview.util.Format','jalview.analysis.scoremodels.ScoreModels']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SiftsClient", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'jalview.api.SiftsClientI');
C$.$classes$=[['CoordinateSys',26],['ResidueDetailType',26],['SiftsEntitySortPojo',2],['SegmentHelperPojo',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.seqCoordSys=$I$(1).UNIPROT;
},1);

C$.$fields$=[['S',['pdbId','structId','curSourceDBRef'],'O',['siftsEntry','jalview.xml.binding.sifts.Entry','pdb','jalview.io.StructureFile','seqCoordSys','jalview.ws.sifts.SiftsClient.CoordinateSys','seqFromPdbMapping','jalview.datamodel.Mapping','curDBRefAccessionIdsString','java.util.HashSet']]
,['S',['NEWLINE'],'O',['mockSiftsFile','java.io.File']]]

Clazz.newMeth(C$, 'c$$jalview_io_StructureFile',  function (pdb) {
;C$.$init$.apply(this);
this.pdb=pdb;
this.pdbId=pdb.getId$();
var siftsFile=C$.getSiftsFile$S(this.pdbId);
this.siftsEntry=p$1.parseSIFTs$java_io_File.apply(this, [siftsFile]);
}, 1);

Clazz.newMeth(C$, 'parseSIFTs$java_io_File',  function (siftFile) {
try {
var $in=Clazz.new_($I$(2,1).c$$java_io_File,[siftFile]);
var gzis=Clazz.new_($I$(3,1).c$$java_io_InputStream,[$in]);
try {
var jc=$I$(4).newInstance$S("jalview.xml.binding.sifts");
var streamReader=$I$(5).newInstance$().createXMLStreamReader$java_io_InputStream(gzis);
var um=jc.createUnmarshaller$();
var jbe=um.unmarshal$javax_xml_stream_XMLStreamReader$Class(streamReader, Clazz.getClass($I$(6)));
return jbe.getValue$();

}finally{/*res*/gzis&&gzis.close$&&gzis.close$();$in&&$in.close$&&$in.close$();}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
throw Clazz.new_(Clazz.load('jalview.ws.sifts.SiftsException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getSiftsFile$S',  function (pdbId) {
if (C$.mockSiftsFile != null ) {
return C$.mockSiftsFile;
}var siftsFileName=$I$(7).getSiftDownloadDirectory$() + pdbId.toLowerCase$java_util_Locale($I$(8).ROOT) + ".xml.gz" ;
var siftsFile=Clazz.new_($I$(9,1).c$$S,[siftsFileName]);
if (siftsFile.exists$()) {
System.out.println$S(">>> SIFTS File already downloaded for " + pdbId);
if (C$.isFileOlderThanThreshold$java_io_File$I(siftsFile, $I$(7).getCacheThresholdInDays$())) {
var oldSiftsFile=Clazz.new_($I$(9,1).c$$S,[siftsFileName + "_old"]);
$I$(10).moveFileToFile$java_io_File$java_io_File(siftsFile, oldSiftsFile);
try {
siftsFile=C$.downloadSiftsFile$S(pdbId.toLowerCase$java_util_Locale($I$(8).ROOT));
oldSiftsFile.delete$();
return siftsFile;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
$I$(10).moveFileToFile$java_io_File$java_io_File(oldSiftsFile, siftsFile);
return Clazz.new_($I$(9,1).c$$S,[siftsFileName]);
} else {
throw e;
}
}
} else {
return siftsFile;
}}try {
siftsFile=C$.downloadSiftsFile$S(pdbId.toLowerCase$java_util_Locale($I$(8).ROOT));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('jalview.ws.sifts.SiftsException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
return siftsFile;
}, 1);

Clazz.newMeth(C$, 'isFileOlderThanThreshold$java_io_File$I',  function (file, noOfDays) {
var filePath=file.toPath$();
var attr;
var diffInDays=0;
try {
attr=$I$(11,"readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA",[filePath, Clazz.getClass($I$(12),['creationTime$','fileKey$','isDirectory$','isOther$','isRegularFile$','isSymbolicLink$','lastAccessTime$','lastModifiedTime$','size$']), Clazz.array($I$(13), -1, [])]);
diffInDays=Long.$ival((Long.$div((Long.$sub(Clazz.new_(java.util.Date).getTime$(),attr.lastModifiedTime$().toMillis$())),(86400000))));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
return noOfDays <= diffInDays;
}, 1);

Clazz.newMeth(C$, 'downloadSiftsFile$S',  function (pdbId) {
if (pdbId.contains$CharSequence(".cif")) {
pdbId=pdbId.replace$CharSequence$CharSequence(".cif", "");
}var siftFile=pdbId + ".xml.gz";
var siftsFileFTPURL="http://ftp.ebi.ac.uk/pub/databases/msd/sifts/xml/" + siftFile;
var downloadTo=null;
if ($I$(14).isJS$()) {
downloadTo=$I$(9).createTempFile$S$S(siftFile, ".xml.gz");
} else {
downloadTo=Clazz.new_([$I$(7).getSiftDownloadDirectory$() + siftFile],$I$(9,1).c$$S);
var siftsDownloadDir=Clazz.new_([$I$(7).getSiftDownloadDirectory$()],$I$(9,1).c$$S);
if (!siftsDownloadDir.exists$()) {
siftsDownloadDir.mkdirs$();
}}var url=Clazz.new_($I$(15,1).c$$S,[siftsFileFTPURL]);
var conn=url.openConnection$();
var inputStream=conn.getInputStream$();
var outputStream=Clazz.new_($I$(16,1).c$$java_io_File,[downloadTo]);
var buffer=Clazz.array(Byte.TYPE, [4096]);
var bytesRead=-1;
while ((bytesRead=inputStream.read$BA(buffer)) != -1){
outputStream.write$BA$I$I(buffer, 0, bytesRead);
}
outputStream.close$();
inputStream.close$();
return downloadTo;
}, 1);

Clazz.newMeth(C$, 'deleteSiftsFileByPDBId$S',  function (pdbId) {
var siftsFile=Clazz.new_([$I$(7).getSiftDownloadDirectory$() + pdbId.toLowerCase$java_util_Locale($I$(8).ROOT) + ".xml.gz" ],$I$(9,1).c$$S);
if (siftsFile.exists$()) {
return siftsFile.delete$();
}return true;
}, 1);

Clazz.newMeth(C$, 'getValidSourceDBRef$jalview_datamodel_SequenceI',  function (seq) {
var dbRefs=seq.getPrimaryDBRefs$();
if (dbRefs == null  || dbRefs.size$() < 1 ) {
throw Clazz.new_(Clazz.load('jalview.ws.sifts.SiftsException').c$$S,["Source DBRef could not be determined. DBRefs might not have been retrieved."]);
}for (var dbRef, $dbRef = dbRefs.iterator$(); $dbRef.hasNext$()&&((dbRef=($dbRef.next$())),1);) {
if (dbRef == null  || dbRef.getAccessionId$() == null   || dbRef.getSource$() == null  ) {
continue;
}var canonicalSource=$I$(17,"getCanonicalName$S",[dbRef.getSource$()]);
if (this.isValidDBRefEntry$jalview_api_DBRefEntryI(dbRef) && (canonicalSource.equalsIgnoreCase$S("UNIPROT") || canonicalSource.equalsIgnoreCase$S("PDB") ) ) {
return dbRef;
}}
throw Clazz.new_(Clazz.load('jalview.ws.sifts.SiftsException').c$$S,["Could not get source DB Ref"]);
});

Clazz.newMeth(C$, 'isValidDBRefEntry$jalview_api_DBRefEntryI',  function (entry) {
return entry != null  && entry.getAccessionId$() != null   && p$1.isFoundInSiftsEntry$S.apply(this, [entry.getAccessionId$()]) ;
});

Clazz.newMeth(C$, 'getAllMappingAccession$',  function () {
var accessions=Clazz.new_($I$(18,1));
var entities=this.siftsEntry.getEntity$();
for (var entity, $entity = entities.iterator$(); $entity.hasNext$()&&((entity=($entity.next$())),1);) {
var segments=entity.getSegment$();
for (var segment, $segment = segments.iterator$(); $segment.hasNext$()&&((segment=($segment.next$())),1);) {
var mapRegions=segment.getListMapRegion$().getMapRegion$();
for (var mapRegion, $mapRegion = mapRegions.iterator$(); $mapRegion.hasNext$()&&((mapRegion=($mapRegion.next$())),1);) {
accessions.add$O(mapRegion.getDb$().getDbAccessionId$().toLowerCase$java_util_Locale($I$(8).ROOT));
}
}
}
return accessions;
});

Clazz.newMeth(C$, 'getSiftsStructureMapping$jalview_datamodel_SequenceI$S$S',  function (seq, pdbFile, chain) {
var aseq=seq;
while (seq.getDatasetSequence$() != null ){
seq=seq.getDatasetSequence$();
}
this.structId=(chain == null ) ? this.pdbId : this.pdbId + "|" + chain ;
System.out.println$S("Getting SIFTS mapping for " + this.structId + ": seq " + seq.getName$() );
var mappingDetails=Clazz.new_($I$(19,1).c$$I,[128]);
var ps=((P$.SiftsClient$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SiftsClient$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.io.PrintStream'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'print$S',  function (x) {
this.$finals$.mappingDetails.append$S(x);
});

Clazz.newMeth(C$, 'println$',  function () {
this.$finals$.mappingDetails.append$S($I$(20).NEWLINE);
});
})()
), Clazz.new_($I$(21,1).c$$java_io_OutputStream,[this, {mappingDetails:mappingDetails}, System.out],P$.SiftsClient$1));
var mapping=this.getGreedyMapping$S$jalview_datamodel_SequenceI$java_io_PrintStream(chain, seq, ps);
var mappingOutput=mappingDetails.toString();
var siftsMapping=Clazz.new_($I$(22,1).c$$jalview_datamodel_SequenceI$S$S$S$java_util_HashMap$S$jalview_datamodel_Mapping,[aseq, pdbFile, this.pdbId, chain, mapping, mappingOutput, this.seqFromPdbMapping]);
return siftsMapping;
});

Clazz.newMeth(C$, 'getGreedyMapping$S$jalview_datamodel_SequenceI$java_io_PrintStream',  function (entityId, seq, os) {
var omitNonObserved=Clazz.new_($I$(23,1));
var nonObservedShiftIndex=0;
var pdbeNonObserved=0;
var entity=null;
entity=this.getEntityById$S(entityId);
var originalSeq=$I$(24,"extractGaps$S$S",[$I$(25).GapChars, seq.getSequenceAsString$()]);
var mapping=Clazz.new_($I$(26,1));
var sourceDBRef;
sourceDBRef=this.getValidSourceDBRef$jalview_datamodel_SequenceI(seq);
if (sourceDBRef.getSource$().equalsIgnoreCase$S("PDB")) {
this.seqCoordSys=$I$(1).PDB;
}var dbRefAccessionIdsString=Clazz.new_($I$(18,1));
for (var dbref, $dbref = seq.getDBRefs$().iterator$(); $dbref.hasNext$()&&((dbref=($dbref.next$())),1);) {
dbRefAccessionIdsString.add$O(dbref.getAccessionId$().toLowerCase$java_util_Locale($I$(8).ROOT));
}
dbRefAccessionIdsString.add$O(sourceDBRef.getAccessionId$().toLowerCase$java_util_Locale($I$(8).ROOT));
this.curDBRefAccessionIdsString=dbRefAccessionIdsString;
this.curSourceDBRef=sourceDBRef.getAccessionId$();
var resNumMap=Clazz.new_($I$(27,1));
var segments=entity.getSegment$();
var shp=Clazz.new_($I$(28,1).c$$jalview_datamodel_SequenceI$java_util_HashMap$java_util_TreeMap$java_util_List$I$I,[this, null, seq, mapping, resNumMap, omitNonObserved, nonObservedShiftIndex, pdbeNonObserved]);
this.processSegments$java_util_List$jalview_ws_sifts_SiftsClient_SegmentHelperPojo(segments, shp);
try {
this.populateAtomPositions$S$java_util_Map(entityId, mapping);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
if (this.seqCoordSys === $I$(1).UNIPROT ) {
this.padWithGaps$java_util_Map$java_util_List(resNumMap, omitNonObserved);
}var seqStart=-2147483648;
var seqEnd=-2147483648;
var pdbStart=-2147483648;
var pdbEnd=-2147483648;
if (mapping.isEmpty$()) {
throw Clazz.new_(Clazz.load('jalview.ws.sifts.SiftsException').c$$S,["SIFTS mapping failed"]);
}var keys=mapping.keySet$().toArray$OA(Clazz.array(Integer, [0]));
$I$(29).sort$OA(keys);
seqStart=(keys[0]).$c();
seqEnd=(keys[keys.length - 1]).$c();
var from=Clazz.new_($I$(23,1));
var to=Clazz.new_($I$(23,1));
var _cfrom=null;
var _cto=null;
var matchedSeq=originalSeq;
if (seqStart != -2147483648) {
for (var seqps, $seqps = 0, $$seqps = keys; $seqps<$$seqps.length&&((seqps=($$seqps[$seqps]).intValue$()),1);$seqps++) {
var pdbpos=mapping.get$O(Integer.valueOf$I(seqps))[2];
if (pdbpos == -2147483648) {
continue;
}if (_cfrom == null  || seqps != _cfrom[1] + 1 ) {
_cfrom=Clazz.array(Integer.TYPE, -1, [seqps, seqps]);
from.add$O(_cfrom);
_cto=null;
} else {
_cfrom[1]=seqps;
}if (_cto == null  || pdbpos != 1 + _cto[1] ) {
_cto=Clazz.array(Integer.TYPE, -1, [pdbpos, pdbpos]);
to.add$O(_cto);
} else {
_cto[1]=pdbpos;
}}
_cfrom=Clazz.array(Integer.TYPE, [from.size$() * 2]);
_cto=Clazz.array(Integer.TYPE, [to.size$() * 2]);
var p=0;
for (var range, $range = from.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
_cfrom[p++]=range[0];
_cfrom[p++]=range[1];
}
;p=0;
for (var range, $range = to.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
_cto[p++]=range[0];
_cto[p++]=range[1];
}
;this.seqFromPdbMapping=Clazz.new_($I$(30,1).c$$jalview_datamodel_SequenceI$IA$IA$I$I,[null, _cto, _cfrom, 1, 1]);
pdbStart=mapping.get$O(Integer.valueOf$I(seqStart))[0];
pdbEnd=mapping.get$O(Integer.valueOf$I(seqEnd))[0];
var orignalSeqStart=seq.getStart$();
if (orignalSeqStart >= 1) {
var subSeqStart=(seqStart >= orignalSeqStart) ? seqStart - orignalSeqStart : 0;
var subSeqEnd=seqEnd - (orignalSeqStart - 1);
subSeqEnd=originalSeq.length$() < subSeqEnd ? originalSeq.length$() : subSeqEnd;
matchedSeq=originalSeq.substring$I$I(subSeqStart, subSeqEnd);
} else {
matchedSeq=originalSeq.substring$I$I(1, originalSeq.length$());
}}var targetStrucSeqs=Clazz.new_($I$(19,1));
for (var res, $res = resNumMap.values$().iterator$(); $res.hasNext$()&&((res=($res.next$())),1);) {
targetStrucSeqs.append$S(res);
}
if (os != null ) {
var mop=Clazz.new_($I$(31,1));
mop.setSeqStart$I(seqStart);
mop.setSeqEnd$I(seqEnd);
mop.setSeqName$S(seq.getName$());
mop.setSeqResidue$S(matchedSeq);
mop.setStrStart$I(pdbStart);
mop.setStrEnd$I(pdbEnd);
mop.setStrName$S(this.structId);
mop.setStrResidue$S(targetStrucSeqs.toString());
mop.setType$S("pep");
os.print$S(this.getMappingOutput$jalview_ws_sifts_MappingOutputPojo(mop).toString());
os.println$();
}return mapping;
});

Clazz.newMeth(C$, 'processSegments$java_util_List$jalview_ws_sifts_SiftsClient_SegmentHelperPojo',  function (segments, shp) {
var seq=shp.getSeq$();
var mapping=shp.getMapping$();
var resNumMap=shp.getResNumMap$();
var omitNonObserved=shp.getOmitNonObserved$();
var nonObservedShiftIndex=shp.getNonObservedShiftIndex$();
var pdbeNonObservedCount=shp.getPdbeNonObserved$();
var firstPDBResNum=-2147483648;
for (var segment, $segment = segments.iterator$(); $segment.hasNext$()&&((segment=($segment.next$())),1);) {
var residues=segment.getListResidue$().getResidue$();
for (var residue, $residue = residues.iterator$(); $residue.hasNext$()&&((residue=($residue.next$())),1);) {
var isObserved=p$1.isResidueObserved$jalview_xml_binding_sifts_Entry_Entity_Segment_ListResidue_Residue.apply(this, [residue]);
var pdbeIndex=C$.getLeadingIntegerValue$S$I(residue.getDbResNum$(), -2147483648);
var currSeqIndex=-2147483648;
var cRefDbs=residue.getCrossRefDb$();
var pdbRefDb=null;
for (var cRefDb, $cRefDb = cRefDbs.iterator$(); $cRefDb.hasNext$()&&((cRefDb=($cRefDb.next$())),1);) {
if (cRefDb.getDbSource$().equalsIgnoreCase$S("PDB")) {
pdbRefDb=cRefDb;
if (firstPDBResNum == -2147483648) {
firstPDBResNum=C$.getLeadingIntegerValue$S$I(cRefDb.getDbResNum$(), -2147483648);
} else {
if (isObserved) {
++firstPDBResNum;
}}}if (cRefDb.getDbCoordSys$().equalsIgnoreCase$S(this.seqCoordSys.getName$()) && this.isAccessionMatched$S(cRefDb.getDbAccessionId$()) ) {
currSeqIndex=C$.getLeadingIntegerValue$S$I(cRefDb.getDbResNum$(), -2147483648);
if (pdbRefDb != null ) {
break;
}}}
if (!isObserved) {
++pdbeNonObservedCount;
}if (this.seqCoordSys === $I$(1).PDB ) {
currSeqIndex=seq.getStart$() - 1 + pdbeIndex;
}if (!isObserved) {
if (this.seqCoordSys !== $I$(1).UNIPROT ) {
omitNonObserved.add$O(Integer.valueOf$I(currSeqIndex));
++nonObservedShiftIndex;
}}if (currSeqIndex == -2147483648) {
continue;
}{
var resNum=(pdbRefDb == null ) ? C$.getLeadingIntegerValue$S$I(residue.getDbResNum$(), -2147483648) : C$.getLeadingIntegerValue$S$I(pdbRefDb.getDbResNum$(), -2147483648);
if (isObserved) {
var resCharCode=$I$(32,"getSingleCharacterCode$S",[$I$(32,"getCanonicalAminoAcid$S",[residue.getDbResName$()])]);
resNumMap.put$O$O(Integer.valueOf$I(currSeqIndex), String.valueOf$C(resCharCode));
var mappingcols=Clazz.array(Integer.TYPE, -1, [(Integer.valueOf$I(resNum)).valueOf(), -2147483648, isObserved ? firstPDBResNum : -2147483648]);
mapping.put$O$O(Integer.valueOf$I(currSeqIndex - nonObservedShiftIndex), mappingcols);
}}}
}
});

Clazz.newMeth(C$, 'getLeadingIntegerValue$S$I',  function (input, failValue) {
if (input == null ) {
return failValue;
}var parts=input.split$S("(?=\\D)(?<=\\d)");
if (parts != null  && parts.length > 0  && parts[0].matches$S("[0-9]+") ) {
return (Integer.valueOf$S(parts[0])).$c();
}return failValue;
}, 1);

Clazz.newMeth(C$, 'populateAtomPositions$S$java_util_Map',  function (chainId, mapping) {
try {
var chain=this.pdb.findChain$S(chainId);
if (chain == null  || mapping == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Chain id or mapping must not be null."]);
}for (var map, $map = mapping.values$().iterator$(); $map.hasNext$()&&((map=($map.next$())),1);) {
if (map[0] != -2147483648) {
map[1]=this.getAtomIndex$I$java_util_Collection(map[0], chain.atoms);
}}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NullPointerException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('jalview.ws.sifts.SiftsException').c$$S,[e.getMessage$()]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('jalview.ws.sifts.SiftsException').c$$S,[e.getMessage$()]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'getAtomIndex$I$java_util_Collection',  function (residueIndex, atoms) {
if (atoms == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["atoms collection must not be null!"]);
}for (var atom, $atom = atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if (atom.resNumber == residueIndex) {
return atom.atomIndex;
}}
return -2147483648;
});

Clazz.newMeth(C$, 'isResidueObserved$jalview_xml_binding_sifts_Entry_Entity_Segment_ListResidue_Residue',  function (residue) {
var annotations=p$1.getResidueAnnotaitons$jalview_xml_binding_sifts_Entry_Entity_Segment_ListResidue_Residue$jalview_ws_sifts_SiftsClient_ResidueDetailType.apply(this, [residue, $I$(33).ANNOTATION]);
if (annotations == null  || annotations.isEmpty$() ) {
return true;
}for (var annotation, $annotation = annotations.iterator$(); $annotation.hasNext$()&&((annotation=($annotation.next$())),1);) {
if (annotation.equalsIgnoreCase$S("Not_Observed")) {
return false;
}}
return true;
}, p$1);

Clazz.newMeth(C$, 'getResidueAnnotaitons$jalview_xml_binding_sifts_Entry_Entity_Segment_ListResidue_Residue$jalview_ws_sifts_SiftsClient_ResidueDetailType',  function (residue, type) {
var foundAnnotations=Clazz.new_($I$(18,1));
var resDetails=residue.getResidueDetail$();
for (var resDetail, $resDetail = resDetails.iterator$(); $resDetail.hasNext$()&&((resDetail=($resDetail.next$())),1);) {
if (resDetail.getProperty$().equalsIgnoreCase$S(type.getCode$())) {
foundAnnotations.add$O(resDetail.getContent$());
}}
return foundAnnotations;
}, p$1);

Clazz.newMeth(C$, 'isAccessionMatched$S',  function (accession) {
var isStrictMatch=true;
return isStrictMatch ? this.curSourceDBRef.equalsIgnoreCase$S(accession) : this.curDBRefAccessionIdsString.contains$O(accession.toLowerCase$java_util_Locale($I$(8).ROOT));
});

Clazz.newMeth(C$, 'isFoundInSiftsEntry$S',  function (accessionId) {
var siftsDBRefs=this.getAllMappingAccession$();
return accessionId != null  && siftsDBRefs.contains$O(accessionId.toLowerCase$java_util_Locale($I$(8).ROOT)) ;
}, p$1);

Clazz.newMeth(C$, 'padWithGaps$java_util_Map$java_util_List',  function (resNumMap, omitNonObserved) {
if (resNumMap == null  || resNumMap.isEmpty$() ) {
return;
}var keys=resNumMap.keySet$().toArray$OA(Clazz.array(Integer, [0]));
var firstIndex=(keys[0]).$c();
var lastIndex=(keys[keys.length - 1]).$c();
for (var x=firstIndex; x <= lastIndex; x++) {
if (!resNumMap.containsKey$O(Integer.valueOf$I(x)) && !omitNonObserved.contains$O(Integer.valueOf$I(x)) ) {
resNumMap.put$O$O(Integer.valueOf$I(x), "-");
}}
});

Clazz.newMeth(C$, 'getEntityById$S',  function (id) {
var entity=this.getEntityByMostOptimalMatchedId$S(id);
if (entity != null ) {
return entity;
}throw Clazz.new_(Clazz.load('jalview.ws.sifts.SiftsException').c$$S,["Entity " + id + " not found" ]);
});

Clazz.newMeth(C$, 'getEntityByMostOptimalMatchedId$S',  function (chainId) {
var entities=this.siftsEntry.getEntity$();
var sPojo=Clazz.array($I$(34), [entities.size$()]);
var count=0;
for (var entity, $entity = entities.iterator$(); $entity.hasNext$()&&((entity=($entity.next$())),1);) {
sPojo[count]=Clazz.new_($I$(34,1),[this, null]);
sPojo[count].entityId=entity.getEntityId$();
var segments=entity.getSegment$();
for (var segment, $segment = segments.iterator$(); $segment.hasNext$()&&((segment=($segment.next$())),1);) {
var residues=segment.getListResidue$().getResidue$();
for (var residue, $residue = residues.iterator$(); $residue.hasNext$()&&((residue=($residue.next$())),1);) {
var cRefDbs=residue.getCrossRefDb$();
for (var cRefDb, $cRefDb = cRefDbs.iterator$(); $cRefDb.hasNext$()&&((cRefDb=($cRefDb.next$())),1);) {
if (!cRefDb.getDbSource$().equalsIgnoreCase$S("PDB")) {
continue;
}++sPojo[count].resCount;
if (cRefDb.getDbChainId$().equalsIgnoreCase$S(chainId)) {
++sPojo[count].chainIdFreq;
}}
}
}
sPojo[count].pid=((100 * sPojo[count].chainIdFreq)/sPojo[count].resCount|0);
++count;
}
$I$(29,"sort$OA$java_util_Comparator",[sPojo, $I$(35).reverseOrder$()]);
if (sPojo[0].entityId != null ) {
if (sPojo[0].pid < 1) {
return null;
}for (var entity, $entity = entities.iterator$(); $entity.hasNext$()&&((entity=($entity.next$())),1);) {
if (!entity.getEntityId$().equalsIgnoreCase$S(sPojo[0].entityId)) {
continue;
}return entity;
}
}return null;
});

Clazz.newMeth(C$, 'getMappingOutput$jalview_ws_sifts_MappingOutputPojo',  function (mp) {
var seqRes=mp.getSeqResidue$();
var seqName=mp.getSeqName$();
var sStart=mp.getSeqStart$();
var sEnd=mp.getSeqEnd$();
var strRes=mp.getStrResidue$();
var strName=mp.getStrName$();
var pdbStart=mp.getStrStart$();
var pdbEnd=mp.getStrEnd$();
var type=mp.getType$();
var maxid=(seqName.length$() >= strName.length$()) ? seqName.length$() : strName.length$();
var len=72 - maxid - 1 ;
var nochunks=(((seqRes.length$())/len|0)) + ((seqRes.length$()) % len > 0 ? 1 : 0);
var output=Clazz.new_($I$(19,1).c$$I,[512]);
output.append$S(C$.NEWLINE);
output.append$S("Sequence \u27f7 Structure mapping details").append$S(C$.NEWLINE);
output.append$S("Method: SIFTS");
output.append$S(C$.NEWLINE).append$S(C$.NEWLINE);
output.append$S(Clazz.new_($I$(36,1).c$$S,["%" + maxid + "s" ]).form$S(seqName));
output.append$S(" :  ");
output.append$S(String.valueOf$I(sStart));
output.append$S(" - ");
output.append$S(String.valueOf$I(sEnd));
output.append$S(" Maps to ");
output.append$S(C$.NEWLINE);
output.append$S(Clazz.new_($I$(36,1).c$$S,["%" + maxid + "s" ]).form$S(this.structId));
output.append$S(" :  ");
output.append$S(String.valueOf$I(pdbStart));
output.append$S(" - ");
output.append$S(String.valueOf$I(pdbEnd));
output.append$S(C$.NEWLINE).append$S(C$.NEWLINE);
var pam250=$I$(37).getInstance$().getPam250$();
var matchedSeqCount=0;
for (var j=0; j < nochunks; j++) {
output.append$S(Clazz.new_(["%" + (maxid) + "s" ],$I$(36,1).c$$S).form$S(seqName)).append$S(" ");
for (var i=0; i < len; i++) {
if ((i + (j * len)) < seqRes.length$()) {
output.append$C(seqRes.charAt$I(i + (j * len)));
}}
output.append$S(C$.NEWLINE);
output.append$S(Clazz.new_(["%" + (maxid) + "s" ],$I$(36,1).c$$S).form$S(" ")).append$S(" ");
for (var i=0; i < len; i++) {
try {
if ((i + (j * len)) < seqRes.length$()) {
var c1=seqRes.charAt$I(i + (j * len));
var c2=strRes.charAt$I(i + (j * len));
var sameChar=$I$(25).isSameResidue$C$C$Z(c1, c2, false);
if (sameChar && !$I$(25).isGap$C(c1) ) {
++matchedSeqCount;
output.append$S("|");
} else if (type.equals$O("pep")) {
if (pam250.getPairwiseScore$C$C(c1, c2) > 0 ) {
output.append$S(".");
} else {
output.append$S(" ");
}} else {
output.append$S(" ");
}}} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
continue;
} else {
throw e;
}
}
}
output=output.append$S(C$.NEWLINE);
output=output.append$S(Clazz.new_(["%" + (maxid) + "s" ],$I$(36,1).c$$S).form$S(strName)).append$S(" ");
for (var i=0; i < len; i++) {
if ((i + (j * len)) < strRes.length$()) {
output.append$C(strRes.charAt$I(i + (j * len)));
}}
output.append$S(C$.NEWLINE).append$S(C$.NEWLINE);
}
var pid=matchedSeqCount / seqRes.length$() * 100;
if (pid < $I$(7).getFailSafePIDThreshold$() ) {
throw Clazz.new_(Clazz.load('jalview.ws.sifts.SiftsException').c$$S,[">>> Low PID detected for SIFTs mapping..."]);
}output.append$S("Length of alignment = " + seqRes.length$()).append$S(C$.NEWLINE);
output.append$S(Clazz.new_(["Percentage ID = %2.2f"],$I$(36,1).c$$S).form$D(pid));
return output;
});

Clazz.newMeth(C$, 'getEntityCount$',  function () {
return this.siftsEntry.getEntity$().size$();
});

Clazz.newMeth(C$, 'getDbAccessionId$',  function () {
return this.siftsEntry.getDbAccessionId$();
});

Clazz.newMeth(C$, 'getDbCoordSys$',  function () {
return this.siftsEntry.getDbCoordSys$();
});

Clazz.newMeth(C$, 'getDbSource$',  function () {
return this.siftsEntry.getDbSource$();
});

Clazz.newMeth(C$, 'getDbVersion$',  function () {
return this.siftsEntry.getDbVersion$();
});

Clazz.newMeth(C$, 'setMockSiftsFile$java_io_File',  function (file) {
C$.mockSiftsFile=file;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NEWLINE=System.lineSeparator$();
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.SiftsClient, "CoordinateSys", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['$name']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.$name=name;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.$name;
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S, "UNIPROT", 0, ["UniProt"]);
Clazz.newEnumConst($vals, C$.c$$S, "PDB", 1, ["PDBresnum"]);
Clazz.newEnumConst($vals, C$.c$$S, "PDBe", 2, ["PDBe"]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.SiftsClient, "ResidueDetailType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['code']]]

Clazz.newMeth(C$, 'c$$S',  function (code) {
;C$.$init$.apply(this);
this.code=code;
}, 1);

Clazz.newMeth(C$, 'getCode$',  function () {
return this.code;
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S, "NAME_SEC_STRUCTURE", 0, ["nameSecondaryStructure"]);
Clazz.newEnumConst($vals, C$.c$$S, "CODE_SEC_STRUCTURE", 1, ["codeSecondaryStructure"]);
Clazz.newEnumConst($vals, C$.c$$S, "ANNOTATION", 2, ["Annotation"]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SiftsClient, "SiftsEntitySortPojo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['chainIdFreq','pid','resCount'],'S',['entityId']]]

Clazz.newMeth(C$, ['compareTo$jalview_ws_sifts_SiftsClient_SiftsEntitySortPojo','compareTo$O'],  function (o) {
return this.pid - o.pid;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SiftsClient, "SegmentHelperPojo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nonObservedShiftIndex','pdbeNonObserved'],'O',['seq','jalview.datamodel.SequenceI','mapping','java.util.HashMap','resNumMap','java.util.TreeMap','omitNonObserved','java.util.List']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$java_util_HashMap$java_util_TreeMap$java_util_List$I$I',  function (seq, mapping, resNumMap, omitNonObserved, nonObservedShiftIndex, pdbeNonObserved) {
;C$.$init$.apply(this);
this.setSeq$jalview_datamodel_SequenceI(seq);
this.setMapping$java_util_HashMap(mapping);
this.setResNumMap$java_util_TreeMap(resNumMap);
this.setOmitNonObserved$java_util_List(omitNonObserved);
this.setNonObservedShiftIndex$I(nonObservedShiftIndex);
this.setPdbeNonObserved$I(pdbeNonObserved);
}, 1);

Clazz.newMeth(C$, 'setPdbeNonObserved$I',  function (pdbeNonObserved2) {
this.pdbeNonObserved=pdbeNonObserved2;
});

Clazz.newMeth(C$, 'getPdbeNonObserved$',  function () {
return this.pdbeNonObserved;
});

Clazz.newMeth(C$, 'getSeq$',  function () {
return this.seq;
});

Clazz.newMeth(C$, 'setSeq$jalview_datamodel_SequenceI',  function (seq) {
this.seq=seq;
});

Clazz.newMeth(C$, 'getMapping$',  function () {
return this.mapping;
});

Clazz.newMeth(C$, 'setMapping$java_util_HashMap',  function (mapping) {
this.mapping=mapping;
});

Clazz.newMeth(C$, 'getResNumMap$',  function () {
return this.resNumMap;
});

Clazz.newMeth(C$, 'setResNumMap$java_util_TreeMap',  function (resNumMap) {
this.resNumMap=resNumMap;
});

Clazz.newMeth(C$, 'getOmitNonObserved$',  function () {
return this.omitNonObserved;
});

Clazz.newMeth(C$, 'setOmitNonObserved$java_util_List',  function (omitNonObserved) {
this.omitNonObserved=omitNonObserved;
});

Clazz.newMeth(C$, 'getNonObservedShiftIndex$',  function () {
return this.nonObservedShiftIndex;
});

Clazz.newMeth(C$, 'setNonObservedShiftIndex$I',  function (nonObservedShiftIndex) {
this.nonObservedShiftIndex=nonObservedShiftIndex;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
