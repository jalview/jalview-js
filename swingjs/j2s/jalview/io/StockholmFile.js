(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'com.stevesoft.pat.Regex','java.util.Hashtable','java.io.FileReader','java.io.BufferedReader','fr.orsay.lri.varna.factories.RNAFactory','jalview.datamodel.SequenceI','jalview.datamodel.Sequence','jalview.datamodel.Annotation','jalview.analysis.Rna','jalview.datamodel.AlignmentAnnotation','StringBuffer','java.util.LinkedHashMap','jalview.util.MessageManager','jalview.util.DBRefUtils','jalview.datamodel.SequenceFeature','java.util.Vector','java.util.ArrayList','jalview.util.MapList','jalview.datamodel.Mapping','jalview.schemes.ResidueProperties','jalview.util.Comparison','jalview.util.Format','java.util.Locale']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StockholmFile", null, 'jalview.io.AlignFile');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['out','StringBuffer','al','jalview.datamodel.AlignmentI']]
,['O',['DETECT_BRACKETS','com.stevesoft.pat.Regex','+NOT_RNASS','typeIds','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI',  function (al) {
Clazz.super_(C$, this);
this.al=al;
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_io_DataSourceType',  function (inFile, type) {
;C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this,[inFile, type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse',  function (source) {
;C$.superclazz.c$$jalview_io_FileParse.apply(this,[source]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initData$',  function () {
C$.superclazz.prototype.initData$.apply(this, []);
});

Clazz.newMeth(C$, 'parse_with_VARNA$java_io_File',  function (inFile) {
var fr=null;
fr=Clazz.new_($I$(3,1).c$$java_io_File,[inFile]);
var r=Clazz.new_($I$(4,1).c$$java_io_Reader,[fr]);
var result=null;
try {
result=$I$(5).loadSecStrStockholm$java_io_BufferedReader(r);
} catch (umcp) {
if (Clazz.exceptionOf(umcp,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
this.errormessage="Unmatched parentheses in annotation. Aborting (" + umcp.getMessage$() + ")" ;
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[umcp]);
} else {
throw umcp;
}
}
var seqs=Clazz.array($I$(6), [result.size$()]);
var id=null;
for (var i=0; i < result.size$(); i++) {
var current=result.get$I(i);
var seq=current.getSeq$();
var rna=current.getStructDBN$Z(true);
var begin=0;
var end=seq.length$() - 1;
id=p$1.safeName$S.apply(this, [this.getDataName$()]);
seqs[i]=Clazz.new_($I$(7,1).c$$S$S$I$I,[id, seq, begin, end]);
var annot=Clazz.array(String, [rna.length$()]);
var ann=Clazz.array($I$(8), [rna.length$()]);
for (var j=0; j < rna.length$(); j++) {
annot[j]=rna.substring$I$I(j, j + 1);
}
for (var k=0; k < rna.length$(); k++) {
ann[k]=Clazz.new_([annot[k], "", $I$(9).getRNASecStrucState$S(annot[k]).charAt$I(0), 0.0],$I$(8,1).c$$S$S$C$F);
}
var align=Clazz.new_(["Sec. str.", current.getID$(), ann],$I$(10,1).c$$S$S$jalview_datamodel_AnnotationA);
seqs[i].addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(align);
seqs[i].setRNA$fr_orsay_lri_varna_models_rna_RNA(result.get$I(i));
this.annotations.addElement$O(align);
}
this.setSeqs$jalview_datamodel_SequenceIA(seqs);
});

Clazz.newMeth(C$, 'parse$',  function () {
var treeString=Clazz.new_($I$(11,1));
var treeName=null;
var line;
var version;
var seqAnn=Clazz.new_($I$(2,1));
var seqs=Clazz.new_($I$(12,1));
var p;
var r;
var rend;
var s;
var x;
r=Clazz.new_(["# STOCKHOLM ([\\d\\.]+)"],$I$(1,1).c$$S);
if (!r.search$S(this.nextLine$())) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(13).getString$S("exception.stockholm_invalid_format")]);
} else {
version=r.stringMatched$I(1);
}rend=Clazz.new_($I$(1,1).c$$S,["^\\s*\\/\\/"]);
p=Clazz.new_(["(\\S+)\\/(\\d+)\\-(\\d+)"],$I$(1,1).c$$S);
s=Clazz.new_(["(\\S+)\\s+(\\S*)\\s+(.*)"],$I$(1,1).c$$S);
r=Clazz.new_(["#=(G[FSRC]?)\\s+(.*)"],$I$(1,1).c$$S);
x=Clazz.new_(["(\\S+)\\s+(\\S+)"],$I$(1,1).c$$S);
var openparen=Clazz.new_(["(<|\\[)", "("],$I$(1,1).c$$S$S);
var closeparen=Clazz.new_(["(>|\\])", ")"],$I$(1,1).c$$S$S);
rend.optimize$();
p.optimize$();
s.optimize$();
r.optimize$();
x.optimize$();
openparen.optimize$();
closeparen.optimize$();
while ((line=this.nextLine$()) != null ){
if (line.length$() == 0) {
continue;
}if (rend.search$S(line)) {
this.noSeqs=seqs.size$();
var dbsource=null;
var pf=Clazz.new_(["PF[0-9]{5}(.*)"],$I$(1,1).c$$S);
var rf=Clazz.new_(["RF[0-9]{5}(.*)"],$I$(1,1).c$$S);
if (this.getAlignmentProperty$O("AC") != null ) {
var dbType=this.getAlignmentProperty$O("AC").toString();
if (pf.search$S(dbType)) {
dbsource="PFAM";
} else if (rf.search$S(dbType)) {
dbsource="RFAM";
}}for (var skey, $skey = seqs.entrySet$().iterator$(); $skey.hasNext$()&&((skey=($skey.next$())),1);) {
var acc=skey.getKey$();
var seq=skey.getValue$();
if (this.maxLength < seq.length$()) {
this.maxLength=seq.length$();
}var start=1;
var end=-1;
var sid=acc;
var accAnnotations=null;
if (seqAnn != null  && seqAnn.containsKey$O(acc) ) {
accAnnotations=seqAnn.remove$O(acc);
}if (p.search$S(acc)) {
sid=p.stringMatched$I(1);
start=Integer.parseInt$S(p.stringMatched$I(2));
end=Integer.parseInt$S(p.stringMatched$I(3));
}var seqO=Clazz.new_($I$(7,1).c$$S$S$I$I,[sid, seq, start, end]);
if (accAnnotations != null  && accAnnotations.containsKey$O("DE") ) {
var desc=accAnnotations.get$O("DE");
seqO.setDescription$S((desc == null ) ? "" : desc);
}if (accAnnotations != null  && accAnnotations.containsKey$O("DR") ) {
var dbr=accAnnotations.get$O("DR");
if (dbr != null  && dbr.indexOf$S(";") > -1 ) {
var src=dbr.substring$I$I(0, dbr.indexOf$S(";"));
var acn=dbr.substring$I(dbr.indexOf$S(";") + 1);
$I$(14).parseToDbRef$jalview_datamodel_SequenceI$S$S$S(seqO, src, "0", acn);
}}if (accAnnotations != null  && accAnnotations.containsKey$O("AC") ) {
var dbr=accAnnotations.get$O("AC");
if (dbr != null ) {
p$1.guessDatabaseFor$jalview_datamodel_Sequence$S$S.apply(this, [seqO, dbr, dbsource]);
}}var features=null;
try {
features=accAnnotations.remove$O("features");
} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException")){
} else {
throw e;
}
}
if (features != null ) {
var posmap=seqO.findPositionMap$();
var i=features.keys$();
while (i.hasMoreElements$()){
var type=i.nextElement$().toString();
var content=features.remove$O(type);
var key=C$.type2id$S(type);
var annotsAdded=false;
if (key != null ) {
if (accAnnotations != null  && accAnnotations.containsKey$O(key) ) {
var vv=accAnnotations.get$O(key);
for (var ii=0; ii < vv.size$(); ii++) {
annotsAdded=true;
var an=vv.elementAt$I(ii);
seqO.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(an);
this.annotations.add$O(an);
}
}}var j=content.keys$();
while (j.hasMoreElements$()){
var desc=j.nextElement$().toString();
if ("annotation".equals$O(desc) && annotsAdded ) {
continue;
}var ns=content.get$O(desc).toString();
var byChar=ns.toCharArray$();
for (var k=0; k < byChar.length; k++) {
var c=byChar[k];
if (!(c == " " || c == "_"  || c == "-"  || c == "." )) {
var new_pos=posmap[k];
var feat=Clazz.new_($I$(15,1).c$$S$S$I$I$S,[type, desc, new_pos, new_pos, null]);
seqO.addSequenceFeature$jalview_datamodel_SequenceFeature(feat);
}}
}
}
}this.seqs.addElement$O(seqO);
}
return;
} else if (!r.search$S(line)) {
if (!x.search$S(line)) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(13,"formatMessage$S$SA",["exception.couldnt_parse_sequence_line", Clazz.array(String, -1, [line])])]);
}var ns=seqs.get$O(x.stringMatched$I(1));
if (ns == null ) {
ns="";
}ns+=x.stringMatched$I(2);
seqs.put$O$O(x.stringMatched$I(1), ns);
} else {
var annType=r.stringMatched$I(1);
var annContent=r.stringMatched$I(2);
if (annType.equals$O("GF")) {
var an=Clazz.new_(["(\\w+)\\s*(.*)"],$I$(1,1).c$$S);
if (an.search$S(annContent)) {
if (an.stringMatched$I(1).equals$O("NH")) {
treeString.append$S(an.stringMatched$I(2));
} else if (an.stringMatched$I(1).equals$O("TN")) {
if (treeString.length$() > 0) {
if (treeName == null ) {
treeName="Tree " + (this.getTreeCount$() + 1);
}this.addNewickTree$S$S(treeName, treeString.toString());
}treeName=an.stringMatched$I(2);
treeString=Clazz.new_($I$(11,1));
}this.setAlignmentProperty$O$O(an.stringMatched$I(1), an.stringMatched$I(2));
}} else if (annType.equals$O("GS")) {
if (s.search$S(annContent)) {
var acc=s.stringMatched$I(1);
var type=s.stringMatched$I(2);
var content=s.stringMatched$I(3);
var ann;
if (seqAnn.containsKey$O(acc)) {
ann=seqAnn.get$O(acc);
} else {
ann=Clazz.new_($I$(2,1));
}ann.put$O$O(type, content);
seqAnn.put$O$O(acc, ann);
} else {
System.err.println$S(">> missing annotation: " + line);
}} else if (annType.equals$O("GC")) {
if (x.search$S(annContent)) {
C$.parseAnnotationRow$java_util_Vector$S$S(this.annotations, x.stringMatched$I(1), x.stringMatched$I(2));
}} else if (annType.equals$O("GR")) {
if (s.search$S(annContent)) {
var acc=s.stringMatched$I(1);
var type=s.stringMatched$I(2);
var oseq=s.stringMatched$I(3);
var seq= String.instantialize(oseq);
var ann;
if (seqAnn.containsKey$O(acc)) {
ann=seqAnn.get$O(acc);
} else {
ann=Clazz.new_($I$(2,1));
seqAnn.put$O$O(acc, ann);
}var features;
if (ann.containsKey$O("features")) {
features=ann.get$O("features");
} else {
features=Clazz.new_($I$(2,1));
ann.put$O$O("features", features);
}var content;
if (features.containsKey$O(C$.id2type$S(type))) {
content=features.get$O(C$.id2type$S(type));
} else {
content=Clazz.new_($I$(2,1));
features.put$O$O(C$.id2type$S(type), content);
}var ns=content.get$O("annotation");
if (ns == null ) {
ns="";
}ns+=seq;
content.put$O$O("annotation", ns);
var strucAnn;
if (seqAnn.containsKey$O(acc)) {
strucAnn=seqAnn.get$O(acc);
} else {
strucAnn=Clazz.new_($I$(2,1));
}var newStruc=Clazz.new_($I$(16,1));
C$.parseAnnotationRow$java_util_Vector$S$S(newStruc, type, ns);
for (var alan, $alan = newStruc.iterator$(); $alan.hasNext$()&&((alan=($alan.next$())),1);) {
alan.visible=false;
}
strucAnn.put$O$O(type, newStruc);
seqAnn.put$O$O(acc, strucAnn);
} else {
System.err.println$S("Warning - couldn't parse sequence annotation row line:\n" + line);
}} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(13,"formatMessage$S$SA",["exception.unknown_annotation_detected", Clazz.array(String, -1, [annType, annContent])])]);
}}}
if (treeString.length$() > 0) {
if (treeName == null ) {
treeName="Tree " + (1 + this.getTreeCount$());
}this.addNewickTree$S$S(treeName, treeString.toString());
}});

Clazz.newMeth(C$, 'guessDatabaseFor$jalview_datamodel_Sequence$S$S',  function (seqO, dbr, dbsource) {
var dbrf=null;
var dbrs=Clazz.new_($I$(17,1));
var seqdb="Unknown";
var sdbac="" + dbr;
var st=-1;
var en=-1;
var p;
if ((st=sdbac.indexOf$S("/")) > -1) {
var num;
var range=sdbac.substring$I(st + 1);
sdbac=sdbac.substring$I$I(0, st);
if ((p=range.indexOf$S("-")) > -1) {
++p;
if (p < range.length$()) {
num=range.substring$I(p).trim$();
try {
en=Integer.parseInt$S(num);
} catch (x) {
if (Clazz.exceptionOf(x,"NumberFormatException")){
en=-1;
} else {
throw x;
}
}
}} else {
p=range.length$();
}num=range.substring$I$I(0, p).trim$();
try {
st=Integer.parseInt$S(num);
} catch (x) {
if (Clazz.exceptionOf(x,"NumberFormatException")){
st=-1;
} else {
throw x;
}
}
}if (dbsource == null ) {
dbsource=(seqO.isProtein$()) ? "PFAM" : "RFAM";
}if (dbsource.equals$O("PFAM")) {
seqdb="UNIPROT";
if (sdbac.indexOf$S(".") > -1) {
sdbac=sdbac.substring$I$I(0, sdbac.indexOf$S("."));
dbrf=$I$(14).parseToDbRef$jalview_datamodel_SequenceI$S$S$S(seqO, seqdb, dbsource, sdbac);
if (dbrf != null ) {
dbrs.add$O(dbrf);
}}dbrf=$I$(14).parseToDbRef$jalview_datamodel_SequenceI$S$S$S(seqO, dbsource, dbsource, dbr);
if (dbr != null ) {
dbrs.add$O(dbrf);
}} else {
seqdb="EMBL";
if (sdbac.indexOf$S(".") > -1) {
sdbac=sdbac.substring$I$I(0, sdbac.indexOf$S("."));
dbrf=$I$(14).parseToDbRef$jalview_datamodel_SequenceI$S$S$S(seqO, seqdb, dbsource, sdbac);
if (dbrf != null ) {
dbrs.add$O(dbrf);
}}dbrf=$I$(14).parseToDbRef$jalview_datamodel_SequenceI$S$S$S(seqO, dbsource, dbsource, dbr);
if (dbrf != null ) {
dbrs.add$O(dbrf);
}}if (st != -1 && en != -1 ) {
for (var d, $d = dbrs.iterator$(); $d.hasNext$()&&((d=($d.next$())),1);) {
var mp=Clazz.new_([Clazz.array(Integer.TYPE, -1, [seqO.getStart$(), seqO.getEnd$()]), Clazz.array(Integer.TYPE, -1, [st, en]), 1, 1],$I$(18,1).c$$IA$IA$I$I);
var mping=Clazz.new_($I$(19,1).c$$jalview_util_MapList,[mp]);
d.setMap$jalview_datamodel_Mapping(mping);
}
}}, p$1);

Clazz.newMeth(C$, 'parseAnnotationRow$java_util_Vector$S$S',  function (annotation, label, annots) {
var convert1;
var convert2=null;
var type=label;
if (label.contains$CharSequence("_cons")) {
type=(label.indexOf$S("_cons") == label.length$() - 5) ? label.substring$I$I(0, label.length$() - 5) : label;
}var ss=false;
var posterior=false;
type=C$.id2type$S(type);
var isrnass=false;
if (type.equalsIgnoreCase$S("secondary structure")) {
ss=true;
isrnass=!C$.NOT_RNASS.search$S(annots);
}if (type.equalsIgnoreCase$S("posterior probability")) {
posterior=true;
}var els=Clazz.array($I$(8), [annots.length$()]);
for (var i=0; i < annots.length$(); i++) {
var pos=annots.substring$I$I(i, i + 1);
var ann;
ann=Clazz.new_($I$(8,1).c$$S$S$C$F,[pos, "", " ", 0.0]);
if (ss) {
{
if (isrnass && "<>[](){}AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz".indexOf$S(pos) >= 0 ) {
ann.secondaryStructure=$I$(9).getRNASecStrucState$S(pos).charAt$I(0);
ann.displayCharacter="" + pos.charAt$I(0);
} else {
ann.secondaryStructure=$I$(20).getDssp3state$S(pos).charAt$I(0);
if (ann.secondaryStructure == pos.charAt$I(0)) {
ann.displayCharacter="";
} else {
ann.displayCharacter=" " + ann.displayCharacter;
}}}}if (posterior && !ann.isWhitespace$() && !$I$(21,"isGap$C",[pos.charAt$I(0)])  ) {
var val=0;
if (pos.charAt$I(0) == "*") {
val=10;
} else {
val=(pos.charCodeAt$I(0)) - 48;
if (val > 9 ) {
val=10;
}}ann.value=val;
}els[i]=ann;
}
var annot=null;
var e=annotation.elements$();
while (e.hasMoreElements$()){
annot=e.nextElement$();
if (annot.label.equals$O(type)) {
break;
}annot=null;
}
if (annot == null ) {
annot=Clazz.new_($I$(10,1).c$$S$S$jalview_datamodel_AnnotationA,[type, type, els]);
annotation.addElement$O(annot);
} else {
var anns=Clazz.array($I$(8), [annot.annotations.length + els.length]);
System.arraycopy$O$I$O$I$I(annot.annotations, 0, anns, 0, annot.annotations.length);
System.arraycopy$O$I$O$I$I(els, 0, anns, annot.annotations.length, els.length);
annot.annotations=anns;
}return annot;
}, 1);

Clazz.newMeth(C$, 'dbref_to_ac_record$jalview_datamodel_DBRefEntry',  function (ref) {
return ref.getSource$().toString() + " ; " + ref.getAccessionId$().toString() ;
}, p$1);

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z',  function (s, jvSuffix) {
this.out=Clazz.new_($I$(11,1));
this.out.append$S("# STOCKHOLM 1.0");
this.out.append$S(this.newline);
var max=0;
var maxid=0;
var $in=0;
var slen=s.length;
var seq;
var dataRef=null;
var isAA=s[$in].isProtein$();
while (($in < slen) && ((seq=s[$in]) != null ) ){
var tmp=this.printId$jalview_datamodel_SequenceI$Z(seq, jvSuffix);
max=Math.max(max, seq.getLength$());
if (tmp.length$() > maxid) {
maxid=tmp.length$();
}var seqrefs=seq.getDBRefs$();
var ndb;
if (seqrefs != null  && (ndb=seqrefs.size$()) > 0 ) {
if (dataRef == null ) {
dataRef=Clazz.new_($I$(2,1));
}var primrefs=seq.getPrimaryDBRefs$();
if (primrefs.size$() >= 1) {
dataRef.put$O$O(tmp, p$1.dbref_to_ac_record$jalview_datamodel_DBRefEntry.apply(this, [primrefs.get$I(0)]));
} else {
for (var idb=0; idb < seq.getDBRefs$().size$(); idb++) {
var dbref=seq.getDBRefs$().get$I(idb);
dataRef.put$O$O(tmp, p$1.dbref_to_ac_record$jalview_datamodel_DBRefEntry.apply(this, [dbref]));
if (isAA && "UNIPROT".equals$O($I$(14,"getCanonicalName$S",[dbref.getSource$()])) ) {
break;
}if (!isAA && "EMBL".equals$O($I$(14,"getCanonicalName$S",[dbref.getSource$()])) ) {
break;
}}
}}++$in;
}
maxid+=9;
var i=0;
if (this.al.getProperties$() != null ) {
if (!this.al.getProperties$().isEmpty$()) {
var key=this.al.getProperties$().keys$();
var val=this.al.getProperties$().elements$();
while (key.hasMoreElements$()){
this.out.append$S("#=GF " + key.nextElement$() + " " + val.nextElement$() );
this.out.append$S(this.newline);
}
}}if (dataRef != null ) {
var en=dataRef.keys$();
while (en.hasMoreElements$()){
var idd=en.nextElement$();
var type=dataRef.remove$O(idd);
this.out.append$S(Clazz.new_(["%-" + (maxid - 2) + "s" ],$I$(22,1).c$$S).form$S("#=GS " + idd.toString() + " " ));
if (isAA && type.contains$CharSequence("UNIPROT")  || (!isAA && type.contains$CharSequence("EMBL") ) ) {
this.out.append$S(" AC " + type.substring$I(type.indexOf$S(";") + 1));
} else {
this.out.append$S(" DR " + type + " " );
}this.out.append$S(this.newline);
}
}while (i < slen && (seq=s[i]) != null  ){
var alAnot=seq.getAnnotation$();
if (alAnot != null ) {
var ann;
for (var j=0, nj=alAnot.length; j < nj; j++) {
var key=C$.type2id$S(alAnot[j].label);
var isrna=alAnot[j].isValidStruc$();
if (isrna) {
key="SS";
}if (key == null ) {
continue;
}this.out.append$S(Clazz.new_($I$(22,1).c$$S,["%-" + maxid + "s" ]).form$S("#=GR " + this.printId$jalview_datamodel_SequenceI$Z(seq, jvSuffix) + " " + key + " " ));
ann=alAnot[j].annotations;
var sseq="";
for (var k=0, nk=ann.length; k < nk; k++) {
sseq+=p$1.outputCharacter$S$I$Z$jalview_datamodel_AnnotationA$jalview_datamodel_SequenceI.apply(this, [key, k, isrna, ann, seq]);
}
this.out.append$S(sseq);
this.out.append$S(this.newline);
}
}this.out.append$S(Clazz.new_($I$(22,1).c$$S,["%-" + maxid + "s" ]).form$S(this.printId$jalview_datamodel_SequenceI$Z(seq, jvSuffix) + " "));
this.out.append$S(seq.getSequenceAsString$());
this.out.append$S(this.newline);
++i;
}
var aa;
var an=this.al.getAlignmentAnnotation$();
if (an != null ) {
for (var ia=0, na=an.length; ia < na; ia++) {
aa=an[ia];
if (aa.autoCalculated || !aa.visible || aa.sequenceRef != null   ) {
continue;
}var sseq="";
var label;
var key="";
if (aa.label.equals$O("seq")) {
label="seq_cons";
} else {
key=C$.type2id$S(aa.label.toLowerCase$java_util_Locale($I$(23).ROOT));
if (key == null ) {
label=aa.label;
} else {
label=key + "_cons";
}}if (label == null ) {
label=aa.label;
}label=label.replace$CharSequence$CharSequence(" ", "_");
this.out.append$S(Clazz.new_($I$(22,1).c$$S,["%-" + maxid + "s" ]).form$S("#=GC " + label + " " ));
var isrna=aa.isValidStruc$();
for (var j=0, nj=aa.annotations.length; j < nj; j++) {
sseq+=p$1.outputCharacter$S$I$Z$jalview_datamodel_AnnotationA$jalview_datamodel_SequenceI.apply(this, [key, j, isrna, aa.annotations, null]);
}
this.out.append$S(sseq);
this.out.append$S(this.newline);
}
}this.out.append$S("//");
this.out.append$S(this.newline);
return this.out.toString();
});

Clazz.newMeth(C$, 'outputCharacter$S$I$Z$jalview_datamodel_AnnotationA$jalview_datamodel_SequenceI',  function (key, k, isrna, ann, sequenceI) {
var seq=" ";
var annot=ann[k];
var ch=(annot == null ) ? ((sequenceI == null ) ? "-" : Character.toString$C(sequenceI.getCharAt$I(k))) : (annot.displayCharacter == null  ? String.valueOf$C(annot.secondaryStructure) : annot.displayCharacter);
if (ch == null ) {
ch=" ";
}if (key != null  && key.equals$O("SS") ) {
var ssannotchar=" ";
var charset=false;
if (annot == null ) {
ssannotchar=" ";
charset=true;
} else {
if (annot.secondaryStructure > " " && ch.length$() < 2 ) {
ssannotchar=annot.secondaryStructure;
charset=true;
}}if (charset) {
return (ssannotchar == " " && isrna ) ? "." : ssannotchar;
}}if (ch.length$() == 0) {
seq=".";
} else if (ch.length$() == 1) {
seq=ch.charAt$I(0);
} else if (ch.length$() > 1) {
seq=ch.charAt$I(1);
}return (seq == " " && key != null   && key.equals$O("SS")  && isrna ) ? "." : seq;
}, p$1);

Clazz.newMeth(C$, 'print$',  function () {
this.out=Clazz.new_($I$(11,1));
this.out.append$S("# STOCKHOLM 1.0");
this.out.append$S(this.newline);
this.print$jalview_datamodel_SequenceIA$Z(this.getSeqsAsArray$(), false);
this.out.append$S("//");
this.out.append$S(this.newline);
return this.out.toString();
});

Clazz.newMeth(C$, 'id2type$S',  function (id) {
if (C$.typeIds.containsKey$O(id)) {
return C$.typeIds.get$O(id);
}System.err.println$S("Warning : Unknown Stockholm annotation type code " + id);
return id;
}, 1);

Clazz.newMeth(C$, 'type2id$S',  function (type) {
var key=null;
var e=C$.typeIds.keys$();
while (e.hasMoreElements$()){
var ll=e.nextElement$();
if (C$.typeIds.get$O(ll).toString().equalsIgnoreCase$S(type)) {
key=ll;
break;
}}
if (key != null ) {
return key;
}System.err.println$S("Warning : Unknown Stockholm annotation type: " + type);
return key;
}, 1);

Clazz.newMeth(C$, 'safeName$S',  function (dataName) {
var b=0;
while ((b=dataName.indexOf$S("/")) > -1 && b < dataName.length$() ){
dataName=dataName.substring$I(b + 1).trim$();
}
var e=(dataName.length$() - dataName.indexOf$S(".")) + 1;
dataName=dataName.substring$I$I(1, e).trim$();
return dataName;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.DETECT_BRACKETS=Clazz.new_(["(<|>|\\[|\\]|\\(|\\)|\\{|\\})"],$I$(1,1).c$$S);
C$.NOT_RNASS=Clazz.new_(["^[^<>[\\](){}ADFJ-RUVWYZadfj-ruvwyz]*$"],$I$(1,1).c$$S);
C$.typeIds=null;
{
if (C$.typeIds == null ) {
C$.typeIds=Clazz.new_($I$(2,1));
C$.typeIds.put$O$O("SS", "Secondary Structure");
C$.typeIds.put$O$O("SA", "Surface Accessibility");
C$.typeIds.put$O$O("TM", "transmembrane");
C$.typeIds.put$O$O("PP", "Posterior Probability");
C$.typeIds.put$O$O("LI", "ligand binding");
C$.typeIds.put$O$O("AS", "active site");
C$.typeIds.put$O$O("IN", "intron");
C$.typeIds.put$O$O("IR", "interacting residue");
C$.typeIds.put$O$O("AC", "accession");
C$.typeIds.put$O$O("OS", "organism");
C$.typeIds.put$O$O("CL", "class");
C$.typeIds.put$O$O("DE", "description");
C$.typeIds.put$O$O("DR", "reference");
C$.typeIds.put$O$O("LO", "look");
C$.typeIds.put$O$O("RF", "Reference Positions");
}};
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:38 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
