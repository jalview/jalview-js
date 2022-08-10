(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'jalview.bin.Console','jalview.util.DBRefUtils','jalview.datamodel.DBRefEntry']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EmblFlatFile", null, 'jalview.io.EMBLLikeFlatFile');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse$S',  function (fp, sourceId) {
;C$.superclazz.c$$jalview_io_FileParse$S.apply(this,[fp, sourceId]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parse$',  function () {
var line=this.nextLine$();
while (line != null ){
if (line.startsWith$S("ID")) {
line=this.parseID$S(line);
} else if (line.startsWith$S("DE")) {
line=this.parseDE$S(line);
} else if (line.startsWith$S("DR")) {
line=this.parseDR$S(line);
} else if (line.startsWith$S("SQ")) {
line=this.parseSequence$();
} else if (line.startsWith$S("FT")) {
line=this.parseFeature$S(line.substring$I(2));
} else {
line=this.nextLine$();
}}
this.buildSequence$();
});

Clazz.newMeth(C$, 'parseID$S',  function (line) {
var tokens=line.substring$I(2).split$S(";");
var token=tokens[0].trim$();
if (!token.isEmpty$()) {
this.accession=token;
}if (tokens.length > 1) {
token=tokens[1].trim$();
if (token.startsWith$S("SV")) {
var bits=token.trim$().split$S("\\s+");
this.version=bits[bits.length - 1];
}}if (tokens.length > 6) {
token=tokens[6].trim$();
var bits=token.trim$().split$S("\\s+");
try {
this.length=(Integer.valueOf$S(bits[0])).$c();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
$I$(1).error$S("bad length read in flatfile, line: " + line);
} else {
throw e;
}
}
}return this.nextLine$();
});

Clazz.newMeth(C$, 'parseDE$S',  function (line) {
var desc=line.substring$I(2).trim$();
if (desc.endsWith$S(".")) {
desc=desc.substring$I$I(0, desc.length$() - 1);
}this.description=desc;
while ((line=this.nextLine$()) != null ){
if (!line.startsWith$S("DE")) {
break;
}}
return line;
});

Clazz.newMeth(C$, 'parseDR$S',  function (line) {
var tokens=line.substring$I(2).split$S(";");
if (tokens.length > 1) {
var db=tokens[0].trim$();
db=$I$(2).getCanonicalName$S(db);
var acc=tokens[1].trim$();
if (acc.endsWith$S(".")) {
acc=acc.substring$I$I(0, acc.length$() - 1);
}var version="0";
if (tokens.length > 2) {
var secondaryId=tokens[2].trim$();
if (!secondaryId.isEmpty$()) {
}}this.dbrefs.add$O(Clazz.new_($I$(3,1).c$$S$S$S,[db, version, acc]));
}return this.nextLine$();
});

Clazz.newMeth(C$, 'isFeatureContinuationLine$S',  function (line) {
return line.startsWith$S("FT    ");
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
