(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[[0,'java.util.Hashtable','java.util.Vector','jalview.datamodel.Sequence','jalview.analysis.SequenceIdMatcher','jalview.analysis.AlignSeq','jalview.util.Comparison','jalview.datamodel.SequenceI']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SeqsetUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'SeqCharacterHash$jalview_datamodel_SequenceI', function (seq) {
var sqinfo=Clazz.new_($I$(1,1));
sqinfo.put$O$O("Name", seq.getName$());
sqinfo.put$O$O("Start", Integer.valueOf$I(seq.getStart$()));
sqinfo.put$O$O("End", Integer.valueOf$I(seq.getEnd$()));
if (seq.getDescription$() != null ) {
sqinfo.put$O$O("Description", seq.getDescription$());
}var sfeat=Clazz.new_($I$(2,1));
var sfs=seq.getFeatures$().getAllFeatures$SA([]);
sfeat.addAll$java_util_Collection(sfs);
if (seq.getDatasetSequence$() == null ) {
sqinfo.put$O$O("SeqFeatures", sfeat);
sqinfo.put$O$O("PdbId", (seq.getAllPDBEntries$() != null ) ? seq.getAllPDBEntries$() : Clazz.new_($I$(2,1)));
} else {
sqinfo.put$O$O("datasetSequence", (seq.getDatasetSequence$() != null ) ? seq.getDatasetSequence$() : Clazz.new_($I$(3,1).c$$S$S,["THISISAPLACEHOLDER", ""]));
}return sqinfo;
}, 1);

Clazz.newMeth(C$, 'SeqCharacterUnhash$jalview_datamodel_SequenceI$java_util_Hashtable', function (sq, sqinfo) {
var namePresent=true;
if (sqinfo == null ) {
return false;
}var oldname=sqinfo.get$O("Name");
var start=sqinfo.get$O("Start");
var end=sqinfo.get$O("End");
var sfeatures=sqinfo.get$O("SeqFeatures");
var pdbid=sqinfo.get$O("PdbId");
var description=sqinfo.get$O("Description");
var seqds=sqinfo.get$O("datasetSequence");
if (oldname == null ) {
namePresent=false;
} else {
sq.setName$S(oldname);
}if (pdbid != null  && pdbid.size$() > 0 ) {
sq.setPDBId$java_util_Vector(pdbid);
}if ((start != null ) && (end != null ) ) {
sq.setStart$I(start.intValue$());
sq.setEnd$I(end.intValue$());
}if (sfeatures != null  && !sfeatures.isEmpty$() ) {
sq.setSequenceFeatures$java_util_List(sfeatures);
}if (description != null ) {
sq.setDescription$S(description);
}if ((seqds != null ) && !(seqds.getName$().equals$O("THISISAPLACEHOLDER") && seqds.getLength$() == 0 ) ) {
if (sfeatures != null ) {
System.err.println$S("Implementation error: setting dataset sequence for a sequence which has sequence features.\n\tDataset sequence features will not be visible.");
}sq.setDatasetSequence$jalview_datamodel_SequenceI(seqds);
}return namePresent;
}, 1);

Clazz.newMeth(C$, 'unique_name$I', function (i) {
return  String.instantialize("Sequence" + i);
}, 1);

Clazz.newMeth(C$, 'uniquify$jalview_datamodel_SequenceIA$Z', function (sequences, write_names) {
var map=Clazz.new_($I$(1,1));
for (var i=0; i < sequences.length; i++) {
var safename=C$.unique_name$I(i);
map.put$O$O(safename, C$.SeqCharacterHash$jalview_datamodel_SequenceI(sequences[i]));
if (write_names) {
sequences[i].setName$S(safename);
}}
return map;
}, 1);

Clazz.newMeth(C$, 'deuniquify$java_util_Hashtable$jalview_datamodel_SequenceIA', function (map, sequences) {
return C$.deuniquify$java_util_Hashtable$jalview_datamodel_SequenceIA$Z(map, sequences, true);
}, 1);

Clazz.newMeth(C$, 'deuniquify$java_util_Hashtable$jalview_datamodel_SequenceIA$Z', function (map, sequences, quiet) {
var matcher=Clazz.new_($I$(4,1).c$$jalview_datamodel_SequenceIA,[sequences]);
var msq=null;
var keys=map.keys$();
var unmatched=Clazz.new_($I$(2,1));
for (var i=0, j=sequences.length; i < j; i++) {
unmatched.addElement$O(sequences[i]);
}
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
if (Clazz.instanceOf(key, "java.lang.String")) {
if ((msq=matcher.findIdMatch$S(key)) != null ) {
var sqinfo=map.get$O(key);
unmatched.removeElement$O(msq);
C$.SeqCharacterUnhash$jalview_datamodel_SequenceI$java_util_Hashtable(msq, sqinfo);
} else {
if (!quiet) {
System.err.println$S("Can't find '" + (key) + "' in uniquified alignment" );
}}}}
if (unmatched.size$() > 0 && !quiet ) {
System.err.println$S("Did not find matches for :");
for (var i=unmatched.elements$(); i.hasMoreElements$(); System.out.println$S((i.nextElement$()).getName$())) {
;}
return false;
}return true;
}, 1);

Clazz.newMeth(C$, 'getNonEmptySequenceSet$jalview_datamodel_SequenceIA', function (sequences) {
var ungapped=Clazz.array(Boolean.TYPE, [sequences.length]);
var msflen=0;
for (var i=0, j=sequences.length; i < j; i++) {
var tempseq=$I$(5,"extractGaps$S$S",[$I$(6).GapChars, sequences[i].getSequenceAsString$()]);
if (tempseq.length$() == 0) {
ungapped[i]=false;
} else {
ungapped[i]=true;
msflen++;
}}
if (msflen == 0) {
return null;
}var mset=Clazz.array($I$(7), [msflen]);
for (var i=0, j=sequences.length, k=0; i < j; i++) {
if (ungapped[i]) {
mset[k++]=sequences[i];
}}
ungapped=null;
return mset;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
