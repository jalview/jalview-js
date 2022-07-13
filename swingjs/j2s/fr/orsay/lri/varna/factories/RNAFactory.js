(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.factories"),I$=[[0,'java.util.ArrayList','javax.xml.parsers.SAXParserFactory','fr.orsay.lri.varna.utils.RNAMLParser','org.xml.sax.InputSource','fr.orsay.lri.varna.models.rna.RNA','fr.orsay.lri.varna.exceptions.ExceptionLoadingFailed','java.util.Hashtable','java.util.Stack','fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses','java.io.BufferedReader','java.io.FileReader',['fr.orsay.lri.varna.factories.RNAFactory','.RNAFileType'],'fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax','fr.orsay.lri.varna.factories.StockholmIO','java.util.Vector','fr.orsay.lri.varna.models.rna.ModeleBP','fr.orsay.lri.varna.models.rna.ModeleBackboneElement',['fr.orsay.lri.varna.models.rna.ModeleBackboneElement','.BackboneType']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RNAFactory", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['RNAFileType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['isQuiet']]]

Clazz.newMeth(C$, 'loadSecStrRNAML$java_io_Reader', function (r) {
var result=Clazz.new_($I$(1,1));
try {
var saxFact=$I$(2).newInstance$();
saxFact.setValidating$Z(false);
saxFact.setXIncludeAware$Z(false);
saxFact.setNamespaceAware$Z(false);
var sp=saxFact.newSAXParser$();
var RNAMLData=Clazz.new_($I$(3,1));
sp.parse$org_xml_sax_InputSource$org_xml_sax_helpers_DefaultHandler(Clazz.new_($I$(4,1).c$$java_io_Reader,[r]), RNAMLData);
for (var rnaTmp, $rnaTmp = RNAMLData.getMolecules$().iterator$(); $rnaTmp.hasNext$()&&((rnaTmp=($rnaTmp.next$())),1);) {
var current=Clazz.new_($I$(5,1));
var seq=rnaTmp.getSequence$();
var str=Clazz.array(Integer.TYPE, [seq.size$()]);
for (var i=0; i < str.length; i++) {
str[i]=-1;
}
current.setRNA$java_util_List$IA(seq, str);
var allbpsTmp=rnaTmp.getStructure$();
var allbps=Clazz.new_($I$(1,1));
for (var i=0; i < allbpsTmp.size$(); i++) {
var bp=allbpsTmp.get$I(i);
var bp5=bp.pos5;
var bp3=bp.pos3;
var mb=current.getBaseAt$I(bp5);
var part=current.getBaseAt$I(bp3);
var newStyle=bp.createBPStyle$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase(mb, part);
allbps.add$O(newStyle);
}
current.applyBPs$java_util_ArrayList(allbps);
result.add$O(current);
}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
throw Clazz.new_($I$(6,1).c$$S$S,["Couldn\'t load file due to I/O or security policy issues.", ""]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ge = e$$;
{
if (!C$.isQuiet) ge.printStackTrace$();
}
} else {
throw e$$;
}
}
return result;
}, 1);

Clazz.newMeth(C$, 'parseSecStr$S', function (_secStr) {
var stacks=Clazz.new_($I$(7,1));
var result=Clazz.array(Integer.TYPE, [_secStr.length$()]);
var i=0;
try {
for (i=0; i < _secStr.length$(); i++) {
result[i]=-1;
var c=_secStr.charAt$I(i);
var c2=Character.toUpperCase$C(c);
if (!stacks.containsKey$O(new Character(c2))) {
stacks.put$O$O(new Character(c2), Clazz.new_($I$(8,1)));
}switch (c.$c()) {
case 60:
case 123:
case 40:
case 91:
stacks.get$O(new Character(c)).push$O(new Integer(i));
break;
case 62:
{
var j=(stacks.get$O(new Character('<')).pop$()).valueOf();
result[i]=j;
result[j]=i;
break;
}case 125:
{
var j=(stacks.get$O(new Character('{')).pop$()).valueOf();
result[i]=j;
result[j]=i;
break;
}case 41:
{
var j=(stacks.get$O(new Character('(')).pop$()).valueOf();
result[i]=j;
result[j]=i;
break;
}case 93:
{
var j=(stacks.get$O(new Character('[')).pop$()).valueOf();
result[i]=j;
result[j]=i;
break;
}case 46:
break;
default:
{
if (Character.isLetter$C(c) && Character.isUpperCase$C(c) ) {
stacks.get$O(new Character(c)).push$O(new Integer(i));
} else if (Character.isLetter$C(c) && Character.isLowerCase$C(c) ) {
var j=(stacks.get$O(new Character(Character.toUpperCase$C(c))).pop$()).valueOf();
result[i]=j;
result[j]=i;
}}}
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.EmptyStackException")){
throw Clazz.new_($I$(9,1).c$$I,[i]);
} else {
throw e;
}
}
return result;
}, 1);

Clazz.newMeth(C$, 'loadSecStrDBN$java_io_Reader', function (r) {
var loadOk=false;
var result=Clazz.new_($I$(1,1));
var current=Clazz.new_($I$(5,1));
try {
var fr=Clazz.new_($I$(10,1).c$$java_io_Reader,[r]);
var line=fr.readLine$();
var title="";
var seqTmp="";
var strTmp="";
while ((line != null ) && (strTmp.equals$O("")) ){
line=line.trim$();
if (!line.startsWith$S(">")) {
if (seqTmp.equals$O("")) {
seqTmp=line;
} else {
strTmp=line;
}} else {
title=line.substring$I(1).trim$();
}line=fr.readLine$();
}
if (strTmp.length$() != 0) {
current.setRNA$S$S(seqTmp, strTmp);
current.setName$S(title);
loadOk=true;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_([e.getMessage$(), ""],$I$(6,1).c$$S$S);
} else {
throw e;
}
}
if (loadOk) {
result.add$O(current);
}return result;
}, 1);

Clazz.newMeth(C$, 'loadSecStr$java_io_File', function (f) {
try {
return C$.loadSecStr$java_io_BufferedReader$fr_orsay_lri_varna_factories_RNAFactory_RNAFileType(Clazz.new_([Clazz.new_($I$(11,1).c$$java_io_File,[f])],$I$(10,1).c$$java_io_Reader), $I$(12).FILE_TYPE_UNKNOWN);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.FileNotFoundException")){
throw Clazz.new_([f.toString()],$I$(13,1).c$$S);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'loadSecStr$java_io_Reader', function (r) {
return C$.loadSecStr$java_io_BufferedReader$fr_orsay_lri_varna_factories_RNAFactory_RNAFileType(Clazz.new_($I$(10,1).c$$java_io_Reader,[r]), $I$(12).FILE_TYPE_UNKNOWN);
}, 1);

Clazz.newMeth(C$, 'loadSecStr$java_io_BufferedReader$fr_orsay_lri_varna_factories_RNAFactory_RNAFileType', function (r, fileType) {
try {
switch (fileType) {
case $I$(12).FILE_TYPE_DBN:
{
try {
var result=C$.loadSecStrDBN$java_io_Reader(r);
if (result.size$() != 0) return result;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}break;
case $I$(12).FILE_TYPE_CT:
{
try {
var result=C$.loadSecStrCT$java_io_Reader(r);
if (result.size$() != 0) return result;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (!C$.isQuiet) e.printStackTrace$();
} else {
throw e;
}
}
}break;
case $I$(12).FILE_TYPE_BPSEQ:
{
try {
var result=C$.loadSecStrBPSEQ$java_io_Reader(r);
if (result.size$() != 0) return result;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (!C$.isQuiet) e.printStackTrace$();
} else {
throw e;
}
}
}break;
case $I$(12).FILE_TYPE_TCOFFEE:
{
try {
var result=C$.loadSecStrTCoffee$java_io_Reader(r);
if (result.size$() != 0) return result;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (!C$.isQuiet) e.printStackTrace$();
} else {
throw e;
}
}
}break;
case $I$(12).FILE_TYPE_STOCKHOLM:
{
try {
var result=C$.loadSecStrStockholm$java_io_BufferedReader(r);
if (result.size$() != 0) return result;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (!C$.isQuiet) e.printStackTrace$();
} else {
throw e;
}
}
}break;
case $I$(12).FILE_TYPE_RNAML:
{
try {
var result=C$.loadSecStrRNAML$java_io_Reader(r);
if (result.size$() != 0) return result;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (!C$.isQuiet) e.printStackTrace$();
} else {
throw e;
}
}
}break;
case $I$(12).FILE_TYPE_UNKNOWN:
{
try {
r.mark$I(1000000);
var types=$I$(12).values$();
C$.isQuiet=true;
var result=null;
var t=null;
for (var i=0; i < types.length; i++) {
r.reset$();
t=types[i];
if (t !== $I$(12).FILE_TYPE_UNKNOWN ) {
try {
result=C$.loadSecStr$java_io_BufferedReader$fr_orsay_lri_varna_factories_RNAFactory_RNAFileType(r, t);
if (result.size$() != 0) {
break;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (!C$.isQuiet) System.err.println$S(e.toString());
} else {
throw e;
}
}
}}
System.out.println$O(t);
C$.isQuiet=false;
return result;
} catch (e2) {
if (Clazz.exceptionOf(e2,"java.io.IOException")){
e2.printStackTrace$();
} else {
throw e2;
}
}
}}
throw Clazz.new_($I$(13,1).c$$S,["Couldn't parse this file as " + fileType + "." ]);
} finally {
try {
if (!C$.isQuiet) r.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}
}, 1);

Clazz.newMeth(C$, 'guessFileTypeFromExtension$S', function (path) {
if (path.toLowerCase$().endsWith$S("ml")) {
return $I$(12).FILE_TYPE_RNAML;
} else if (path.toLowerCase$().endsWith$S("dbn") || path.toLowerCase$().endsWith$S("faa") ) {
return $I$(12).FILE_TYPE_DBN;
} else if (path.toLowerCase$().endsWith$S("ct")) {
return $I$(12).FILE_TYPE_CT;
} else if (path.toLowerCase$().endsWith$S("bpseq")) {
return $I$(12).FILE_TYPE_BPSEQ;
} else if (path.toLowerCase$().endsWith$S("rfold")) {
return $I$(12).FILE_TYPE_TCOFFEE;
} else if (path.toLowerCase$().endsWith$S("stockholm") || path.toLowerCase$().endsWith$S("stk") ) {
return $I$(12).FILE_TYPE_STOCKHOLM;
}return $I$(12).FILE_TYPE_UNKNOWN;
}, 1);

Clazz.newMeth(C$, 'loadSecStr$S', function (path) {
var fr=null;
try {
fr=Clazz.new_($I$(11,1).c$$S,[path]);
var type=C$.guessFileTypeFromExtension$S(path);
return C$.loadSecStr$java_io_BufferedReader$fr_orsay_lri_varna_factories_RNAFactory_RNAFileType(Clazz.new_($I$(10,1).c$$java_io_Reader,[fr]), type);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
if (fr != null ) try {
fr.close$();
} catch (e2) {
if (Clazz.exceptionOf(e2,"java.io.IOException")){
} else {
throw e2;
}
}
e.setPath$S(path);
throw e;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'loadSecStrStockholm$java_io_BufferedReader', function (r) {
var a=$I$(14).readAlignement$java_io_BufferedReader(r);
return a.getRNAs$();
}, 1);

Clazz.newMeth(C$, 'loadSecStrBPSEQ$java_io_Reader', function (r) {
var loadOk=false;
var result=Clazz.new_($I$(1,1));
var current=Clazz.new_($I$(5,1));
try {
var fr=Clazz.new_($I$(10,1).c$$java_io_Reader,[r]);
var line=fr.readLine$();
var seqTmp=Clazz.new_($I$(1,1));
var strTmp=Clazz.new_($I$(7,1));
var bpFrom;
var base;
var bpTo;
var minIndex=-1;
var noWarningYet=true;
var title="";
var id="";
var filenameStr="Filename:";
var organismStr="Organism:";
var ANStr="Accession Number:";
while (line != null ){
line=line.trim$();
var tokens=line.split$S("\\s+");
var numbers=Clazz.new_($I$(1,1));
var numberToIndex=Clazz.new_($I$(7,1));
if ((tokens.length >= 3) && !tokens[0].contains$CharSequence("#") && !line.startsWith$S("Organism:") && !line.startsWith$S("Citation") && !line.startsWith$S("Filename:") && !line.startsWith$S("Accession Number:")  ) {
base=tokens[1];
seqTmp.add$O(base);
bpFrom=(Integer.parseInt$S(tokens[0]));
numbers.add$O(new Integer(bpFrom));
if (minIndex < 0) minIndex=bpFrom;
if (seqTmp.size$() < (bpFrom - minIndex + 1)) {
if (noWarningYet) {
noWarningYet=false;
}while (seqTmp.size$() < (bpFrom - minIndex + 1)){
seqTmp.add$O("X");
}
}for (var i=2; i < tokens.length; i++) {
bpTo=(Integer.parseInt$S(tokens[i]));
if ((bpTo != 0) || (i != tokens.length - 1) ) {
if (!strTmp.containsKey$O(new Integer(bpFrom))) strTmp.put$O$O(new Integer(bpFrom), Clazz.new_($I$(15,1)));
strTmp.get$O(new Integer(bpFrom)).add$O(new Integer(bpTo));
}}
} else if (tokens[0].startsWith$S("#")) {
var occur=line.indexOf$S("#");
var tmp=line.substring$I(occur + 1);
title += tmp.trim$() + " ";
} else if (tokens[0].startsWith$S(filenameStr)) {
var occur=line.indexOf$S(filenameStr);
var tmp=line.substring$I(occur + filenameStr.length$());
title += tmp.trim$();
} else if (tokens[0].startsWith$S(organismStr)) {
var occur=line.indexOf$S(organismStr);
var tmp=line.substring$I(occur + organismStr.length$());
if (title.length$() != 0) {
title="/" + title;
}title=tmp.trim$() + title;
} else if (line.contains$CharSequence(ANStr)) {
var occur=line.indexOf$S(ANStr);
var tmp=line.substring$I(occur + ANStr.length$());
id=tmp.trim$();
}line=fr.readLine$();
}
if (strTmp.size$() != 0) {
var seq=seqTmp;
var str=Clazz.array(Integer.TYPE, [seq.size$()]);
for (var i=0; i < seq.size$(); i++) {
str[i]=-1;
}
current.setRNA$java_util_List$IA$I(seq, str, minIndex);
var allbps=Clazz.new_($I$(1,1));
for (var i, $i = strTmp.keySet$().iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
for (var j, $j = strTmp.get$O(new Integer(i)).iterator$(); $j.hasNext$()&&((j=($j.next$()).intValue$()),1);) {
if (i <= j) {
var mb=current.getBaseAt$I(i - minIndex);
var part=current.getBaseAt$I(j - minIndex);
var newStyle=Clazz.new_($I$(16,1).c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase,[mb, part]);
allbps.add$O(newStyle);
}}
}
current.applyBPs$java_util_ArrayList(allbps);
current.setName$S(title);
current.setID$S(id);
loadOk=true;
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NumberFormatException")){
var e = e$$;
{
if (!C$.isQuiet) e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
throw Clazz.new_([e.getMessage$(), ""],$I$(6,1).c$$S$S);
}
} else {
throw e$$;
}
}
if (loadOk) result.add$O(current);
return result;
}, 1);

Clazz.newMeth(C$, 'loadSecStrTCoffee$java_io_Reader', function (r) {
var loadOk=false;
var result=Clazz.new_($I$(1,1));
try {
var fr=Clazz.new_($I$(10,1).c$$java_io_Reader,[r]);
var line=fr.readLine$();
var seqs=Clazz.new_($I$(1,1));
var ids=Clazz.new_($I$(1,1));
var numSeqs=-1;
var currSeq=-1;
var current=null;
while (line != null ){
if (!line.startsWith$S("!")) {
var tokens=line.split$S("\\s+");
if (line.startsWith$S("#")) {
currSeq=Integer.parseInt$S(tokens[0].substring$I(1));
var currSeq2=Integer.parseInt$S(tokens[1]);
if (currSeq == currSeq2) {
current=Clazz.new_($I$(5,1));
current.setName$S(ids.get$I(currSeq - 1));
current.setSequence$S(seqs.get$I(currSeq - 1));
result.add$O(current);
} else {
current=null;
}} else if (current == null ) {
if (numSeqs < 0) {
numSeqs=Integer.parseInt$S(tokens[0]);
} else {
var id=tokens[0];
var seq=tokens[2];
seqs.add$O(seq);
ids.add$O(id);
}} else if (tokens.length == 3) {
var from=Integer.parseInt$S(tokens[0]) - 1;
var to=Integer.parseInt$S(tokens[1]) - 1;
current.addBP$I$I(from, to);
}}line=fr.readLine$();
}
loadOk=true;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NumberFormatException")){
var e = e$$;
{
if (!C$.isQuiet) e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
if (!C$.isQuiet) e.printStackTrace$();
}
} else {
throw e$$;
}
}
if (!loadOk) {
throw Clazz.new_($I$(6,1).c$$S$S,["Parse Error", ""]);
}return result;
}, 1);

Clazz.newMeth(C$, 'loadSecStrCT$java_io_Reader', function (r) {
var loadOk=false;
var result=Clazz.new_($I$(1,1));
var current=Clazz.new_($I$(5,1));
try {
var fr=Clazz.new_($I$(10,1).c$$java_io_Reader,[r]);
var line=fr.readLine$();
var seq=Clazz.new_($I$(1,1));
var lbls=Clazz.new_($I$(1,1));
var strTmp=Clazz.new_($I$(15,1));
var newStrands=Clazz.new_($I$(15,1));
var bpFrom;
var base;
var lbl;
var bpTo;
var noWarningYet=true;
var minIndex=-1;
var title="";
while (line != null ){
line=line.trim$();
var tokens=line.split$S("\\s+");
if (tokens.length >= 6) {
try {
bpFrom=(Integer.parseInt$S(tokens[0]));
bpTo=(Integer.parseInt$S(tokens[4]));
if (minIndex == -1) minIndex=bpFrom;
bpFrom-=minIndex;
if (bpTo != 0) bpTo-=minIndex;
 else bpTo=-1;
base=tokens[1];
lbl=tokens[5];
var before=Integer.parseInt$S(tokens[2]);
var after=Integer.parseInt$S(tokens[3]);
if (before == 0 && !seq.isEmpty$() ) {
newStrands.add$O(new Integer(strTmp.size$() - 1));
}if (bpFrom != seq.size$()) {
if (noWarningYet) {
noWarningYet=false;
}while (bpFrom > seq.size$()){
seq.add$O("X");
strTmp.add$O(new Integer(-1));
lbls.add$O("");
}
}seq.add$O(base);
strTmp.add$O(new Integer(bpTo));
lbls.add$O(lbl);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
if (strTmp.size$() != 0) e.printStackTrace$();
} else {
throw e;
}
}
}if ((line.contains$CharSequence("ENERGY = ")) || line.contains$CharSequence("dG = ") ) {
var ntokens=line.split$S("\\s+");
if (ntokens.length >= 4) {
var energy=ntokens[3];
for (var i=4; i < ntokens.length; i++) {
title += ntokens[i] + " ";
}
title += "(E=" + energy + " kcal/mol)" ;
}}line=fr.readLine$();
}
if (strTmp.size$() != 0) {
var str=Clazz.array(Integer.TYPE, [strTmp.size$()]);
for (var i=0; i < strTmp.size$(); i++) {
str[i]=strTmp.elementAt$I(i).intValue$();
}
current.setRNA$java_util_List$IA$I(seq, str, minIndex);
current.setName$S(title);
for (var i=0; i < current.getSize$(); i++) {
current.getBaseAt$I(i).setLabel$S(lbls.get$I(i));
}
for (var i, $i = newStrands.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
current.getBackbone$().addElement$fr_orsay_lri_varna_models_rna_ModeleBackboneElement(Clazz.new_([i, $I$(18).DISCONTINUOUS_TYPE],$I$(17,1).c$$I$fr_orsay_lri_varna_models_rna_ModeleBackboneElement_BackboneType));
}
loadOk=true;
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
e.printStackTrace$();
throw Clazz.new_([e.getMessage$(), ""],$I$(6,1).c$$S$S);
}
} else if (Clazz.exceptionOf(e$$,"NumberFormatException")){
var e = e$$;
{
if (!C$.isQuiet) e.printStackTrace$();
throw Clazz.new_([e.getMessage$(), ""],$I$(13,1).c$$S$S);
}
} else {
throw e$$;
}
}
if (loadOk) result.add$O(current);
return result;
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.RNAFactory, "RNAFileType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "FILE_TYPE_STOCKHOLM", 0, []);
Clazz.newEnumConst($vals, C$.c$, "FILE_TYPE_TCOFFEE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "FILE_TYPE_BPSEQ", 2, []);
Clazz.newEnumConst($vals, C$.c$, "FILE_TYPE_CT", 3, []);
Clazz.newEnumConst($vals, C$.c$, "FILE_TYPE_DBN", 4, []);
Clazz.newEnumConst($vals, C$.c$, "FILE_TYPE_RNAML", 5, []);
Clazz.newEnumConst($vals, C$.c$, "FILE_TYPE_UNKNOWN", 6, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
