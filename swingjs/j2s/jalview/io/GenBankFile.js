(function(){var P$=Clazz.newPackage("jalview.io"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "GenBankFile", null, 'jalview.io.EMBLLikeFlatFile');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse$S',  function (fp, sourceId) {
;C$.superclazz.c$$jalview_io_FileParse$S.apply(this,[fp, sourceId]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parse$',  function () {
var line=this.nextLine$();
while (line != null ){
if (line.startsWith$S("LOCUS")) {
line=this.parseLocus$S(line);
} else if (line.startsWith$S("DEFINITION")) {
line=this.parseDefinition$S(line);
} else if (line.startsWith$S("ACCESSION")) {
this.accession=line.split$S("\\s+")[1];
line=this.nextLine$();
} else if (line.startsWith$S("VERSION")) {
line=this.parseVersion$S(line);
} else if (line.startsWith$S("ORIGIN")) {
line=this.parseSequence$();
} else if (line.startsWith$S("FEATURES")) {
line=this.nextLine$();
while (line.startsWith$S(" ")){
line=this.parseFeature$S(line);
}
} else {
line=this.nextLine$();
}}
this.buildSequence$();
});

Clazz.newMeth(C$, 'parseLocus$S',  function (line) {
var tokens=line.split$S("\\s+");
if (tokens.length < 2 || !"LOCUS".equals$O(tokens[0]) ) {
return this.nextLine$();
}var token=tokens[1].trim$();
if (!token.isEmpty$()) {
this.accession=token;
}return this.nextLine$();
});

Clazz.newMeth(C$, 'parseDefinition$S',  function (line) {
var desc=line.substring$I("DEFINITION".length$()).trim$();
if (desc.endsWith$S(".")) {
desc=desc.substring$I$I(0, desc.length$() - 1);
}while ((line=this.nextLine$()) != null ){
if (line.startsWith$S(" ")) {
desc+=line.trim$();
} else {
break;
}}
this.description=desc;
return line;
});

Clazz.newMeth(C$, 'parseVersion$S',  function (line) {
var tokens=line.split$S("\\s+");
if (tokens.length > 1) {
tokens=tokens[1].split$S("\\.");
if (tokens.length > 1) {
this.version=tokens[1];
}}return this.nextLine$();
});

Clazz.newMeth(C$, 'isFeatureContinuationLine$S',  function (line) {
return line.startsWith$S("      ");
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
