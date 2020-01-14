(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'javajs.util.P3','org.jmol.util.Logger','Boolean','javajs.util.Rdr','org.jmol.adapter.readers.quantum.NBOParser','javajs.util.SB','javajs.util.Lst','javajs.util.AU','javajs.util.PT','java.util.Hashtable','org.jmol.viewer.JC']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GenNBOReader", null, 'org.jmol.adapter.readers.quantum.MOReader');
C$.$P_LIST=null;
C$.SP_LIST=null;
C$.$DS_LIST=null;
C$.$DC_LIST=null;
C$.$FS_LIST=null;
C$.$FC_LIST=null;
C$.GS_LIST=null;
C$.GC_LIST=null;
C$.HS_LIST=null;
C$.HC_LIST=null;
C$.IS_LIST=null;
C$.IC_LIST=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.$P_LIST="101   102   103";
C$.SP_LIST="1     101   102   103";
C$.$DS_LIST="255   252   253   254   251";
C$.$DC_LIST="201   204   206   202   203   205";
C$.$FS_LIST="351   352   353   354   355   356   357";
C$.$FC_LIST="301   307   310   304   302   303   306   309   308   305";
C$.GS_LIST="451   452   453   454   455   456   457   458   459";
C$.GC_LIST="415   414   413   412   411   410   409   408   407   406   405   404   403   402   401";
C$.HS_LIST="551   552   553   554   555   556   557   558   559   560   561";
C$.HC_LIST="521   520   519   518   517   516   515   514   513   512   511   510   509   508   507   506   505   504   503   502   501";
C$.IS_LIST="651   652   653   654   655   656   657   658   659   660   661   662   663";
C$.IC_LIST="628   627   626   625   624   623   622   621   620   619   618   617   616   615   614   613   612   611   610   609   608   607   606   605   604   603   602   601";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isOutputFile=false;
this.nboType=null;
this.nOrbitals0=0;
this.is47File=false;
this.isOpenShell=false;
this.alphaOnly=false;
this.betaOnly=false;
this.nAOs=0;
this.nNOs=0;
this.topoType=null;
this.nStructures=0;
this.nboParser=null;
this.addBetaSet=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.nboType="";
this.topoType="A";
this.nStructures=0;
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
var line1=this.rd$().trim$().toUpperCase$();
this.is47File=(line1.indexOf$S("$GENNBO") >= 0 || line1.indexOf$S("$NBO") >= 0 );
if (this.is47File) {
if (line1.indexOf$S("BOHR") >= 0) {
this.fileOffset=Clazz.new_($I$(1));
this.fileScaling=$I$(1).new3$F$F$F(0.5291772, 0.5291772, 0.5291772);
}p$1.readData47.apply(this, []);
return;
}this.alphaOnly=this.checkFilterKey$S("ALPHA");
this.betaOnly=this.checkFilterKey$S("BETA");
var isOK;
var line2=this.rd$();
this.line=line1 + line2;
this.isOutputFile=(line2.indexOf$S("****") >= 0);
if (this.isOutputFile) {
isOK=p$1.getFile31.apply(this, []);
C$.superclazz.prototype.initializeReader$.apply(this, []);
} else if (line2.indexOf$S("s in the AO basis:") >= 0) {
this.nboType=line2.substring$I$I(1, line2.indexOf$S("s"));
this.asc.setCollectionName$S(line1 + ": " + this.nboType + "s" );
isOK=p$1.getFile31.apply(this, []);
} else {
this.nboType="AO";
this.asc.setCollectionName$S(line1 + ": " + this.nboType + "s" );
isOK=p$1.readData31$S.apply(this, [line1]);
}if (!isOK) $I$(2).error$S("Unimplemented shell type -- no orbitals available: " + this.line);
if (this.isOutputFile) return;
if (isOK) p$1.readMOs.apply(this, []);
this.continuing=false;
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.appendLoadNote$S("NBO type " + this.nboType);
if (this.isOpenShell) this.asc.setCurrentModelInfo$S$O("isOpenShell", $I$(3).TRUE);
this.finalizeReaderASCR$();
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.indexOf$S("SECOND ORDER PERTURBATION THEORY ANALYSIS") >= 0 && !this.orbitalsRead ) {
this.nboType="NBO";
var data=p$1.getFileData$S.apply(this, [".37"]);
if (data == null ) return true;
var readerSave=this.reader;
this.reader=$I$(4).getBR$S(data);
this.rd$();
this.rd$();
p$1.readMOs.apply(this, []);
this.reader=readerSave;
this.orbitalsRead=false;
return true;
}if (this.line.indexOf$S("$NRTSTRA") >= 0) {
p$1.getStructures$S.apply(this, ["NRTSTRA"]);
return true;
}if (this.line.indexOf$S("$NRTSTRB") >= 0) {
p$1.getStructures$S.apply(this, ["NRTSTRB"]);
return true;
}if (this.line.indexOf$S("$NRTSTR") >= 0) {
p$1.getStructures$S.apply(this, ["NRTSTR"]);
return true;
}if (this.line.indexOf$S(" TOPO ") >= 0) {
p$1.getStructures$S.apply(this, ["TOPO" + this.topoType]);
this.topoType="B";
return true;
}if (this.line.indexOf$S("$CHOOSE") >= 0) {
p$1.getStructures$S.apply(this, ["CHOOSE"]);
return true;
}return this.checkNboLine$();
});

Clazz.newMeth(C$, 'getStructures$S', function (type) {
if (this.nboParser == null ) this.nboParser=Clazz.new_($I$(5));
var structures=p$1.getStructureList.apply(this, []);
var sb=Clazz.new_($I$(6));
while (!this.rd$().trim$().equals$O("$END"))sb.append$S(this.line).append$S("\n");

this.nStructures=this.nboParser.getStructures$S$S$javajs_util_Lst(sb.toString(), type, structures);
this.appendLoadNote$S(this.nStructures + " NBO " + type + " resonance structures" );
}, p$1);

Clazz.newMeth(C$, 'getStructureList', function () {
var structures=this.asc.getAtomSetAuxiliaryInfo$I(this.asc.iSet).get$O("nboStructures");
if (structures == null ) this.asc.setCurrentModelInfo$S$O("nboStructures", structures=Clazz.new_($I$(7)));
return structures;
}, p$1);

Clazz.newMeth(C$, 'getFileData$S', function (ext) {
var fileName=this.htParams.get$O("fullPathName");
var pt=fileName.lastIndexOf$S(".");
if (pt < 0) pt=fileName.length$();
fileName=fileName.substring$I$I(0, pt);
this.moData.put$TK$TV("nboRoot", fileName);
fileName += ext;
var data=this.vwr.getFileAsString3$S$Z$S(fileName, false, null);
$I$(2).info$S(data.length$() + " bytes read from " + fileName );
var isError=(data.indexOf$S("java.io.") >= 0);
if (data.length$() == 0 || isError && this.nboType != "AO"  ) throw Clazz.new_(Clazz.load('Exception').c$$S,[" supplemental file " + fileName + " was not found" ]);
return (isError ? null : data);
}, p$1);

Clazz.newMeth(C$, 'getFile31', function () {
try {
var data=p$1.getFileData$S.apply(this, [".31"]);
if (data == null ) return false;
var readerSave=this.reader;
this.reader=$I$(4).getBR$S(data);
return (p$1.readData31$S.apply(this, [null]) && (this.reader=readerSave) != null  );
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getFile46', function () {
var data=p$1.getFileData$S.apply(this, [".46"]);
if (data == null ) return;
var readerSave=this.reader;
this.reader=$I$(4).getBR$S(data);
p$1.readData46.apply(this, []);
this.reader=readerSave;
}, p$1);

Clazz.newMeth(C$, 'readData47', function () {
this.allowNoOrbitals=true;
this.discardLinesUntilContains$S("$COORD");
this.asc.newAtomSet$();
this.asc.setAtomSetName$S(this.rd$().trim$());
while (this.rd$().indexOf$S("$END") < 0){
var tokens=this.getTokens$();
this.addAtomXYZSymName$SA$I$S$S(tokens, 2, null, null).elementNumber=($s$[0] = this.parseIntStr$S(tokens[0]), $s$[0]);
}
if (this.doReadMolecularOrbitals && !p$1.getFile31.apply(this, []) ) {
this.alphaOnly=true;
this.betaOnly=false;
this.discardLinesUntilContains$S("$BASIS");
this.appendLoadNote$S("basis AOs are unnormalized");
var centers=p$1.getIntData.apply(this, []);
var labels=p$1.getIntData.apply(this, []);
this.discardLinesUntilContains$S("NSHELL =");
this.shellCount=this.parseIntAt$S$I(this.line, 10);
this.gaussianCount=this.parseIntAt$S$I(this.rd$(), 10);
this.rd$();
var ncomp=p$1.getIntData.apply(this, []);
var nprim=p$1.getIntData.apply(this, []);
var nptr=p$1.getIntData.apply(this, []);
this.shells=Clazz.new_($I$(7));
this.gaussians=$I$(8).newFloat2$I(this.gaussianCount);
for (var i=0; i < this.gaussianCount; i++) this.gaussians[i]=Clazz.array(Float.TYPE, [6]);

this.nOrbitals=0;
var ptCenter=0;
var l=this.line;
for (var i=0; i < this.shellCount; i++) {
var slater=Clazz.array(Integer.TYPE, [4]);
var nc=ncomp[i];
slater[0]=centers[ptCenter];
this.line="";
for (var ii=0; ii < nc; ii++) this.line += labels[ptCenter++] + " ";

if (!p$1.fillSlater$IA$I$I$I.apply(this, [slater, nc, nptr[i] - 1, nprim[i]])) return;
}
this.line=l;
p$1.getAlphasAndExponents.apply(this, []);
this.nboType="AO";
p$1.readMOs.apply(this, []);
}this.continuing=false;
}, p$1);

Clazz.newMeth(C$, 'getIntData', function () {
while (this.line.indexOf$S("=") < 0)this.rd$();

var s=this.line.substring$I(this.line.indexOf$S("=") + 1);
this.line="";
while (this.rd$().indexOf$S("=") < 0 && this.line.indexOf$S("$") < 0 )s += this.line;

var tokens=$I$(9).getTokens$S(s);
var f=Clazz.array(Integer.TYPE, [tokens.length]);
for (var i=f.length; --i >= 0; ) f[i]=this.parseIntStr$S(tokens[i]);

return f;
}, p$1);

Clazz.newMeth(C$, 'fillSlater$IA$I$I$I', function (slater, n, pt, ng) {
this.nOrbitals+=n;
switch (n) {
case 1:
slater[1]=0;
break;
case 3:
if (!this.getDFMap$S$S$I$S$I("P", this.line, 1, C$.$P_LIST, 3)) return false;
slater[1]=1;
break;
case 4:
if (!this.getDFMap$S$S$I$S$I("SP", this.line, 2, C$.SP_LIST, 1)) return false;
slater[1]=2;
break;
case 5:
if (!this.getDFMap$S$S$I$S$I("DS", this.line, 3, C$.$DS_LIST, 3)) return false;
slater[1]=3;
break;
case 6:
if (!this.getDFMap$S$S$I$S$I("DC", this.line, 4, C$.$DC_LIST, 3)) return false;
slater[1]=4;
break;
case 7:
if (!this.getDFMap$S$S$I$S$I("FS", this.line, 5, C$.$FS_LIST, 3)) return false;
slater[1]=5;
break;
case 10:
if (!this.getDFMap$S$S$I$S$I("FC", this.line, 6, C$.$FC_LIST, 3)) return false;
slater[1]=6;
break;
case 9:
if (!this.getDFMap$S$S$I$S$I("GS", this.line, 7, C$.GS_LIST, 3)) return false;
slater[1]=7;
break;
case 15:
if (!this.getDFMap$S$S$I$S$I("GC", this.line, 8, C$.GC_LIST, 3)) return false;
slater[1]=8;
break;
case 11:
if (!this.getDFMap$S$S$I$S$I("HS", this.line, 9, C$.HS_LIST, 3)) return false;
slater[1]=9;
break;
case 21:
if (!this.getDFMap$S$S$I$S$I("HC", this.line, 10, C$.HC_LIST, 3)) return false;
slater[1]=10;
break;
case 13:
if (!this.getDFMap$S$S$I$S$I("IS", this.line, 11, C$.IS_LIST, 3)) return false;
slater[1]=11;
break;
case 28:
if (!this.getDFMap$S$S$I$S$I("IC", this.line, 12, C$.IC_LIST, 3)) return false;
slater[1]=12;
break;
default:
$I$(2).error$S("Unrecognized orbital slater count: " + n);
break;
}
slater[2]=pt + 1;
slater[3]=ng;
this.shells.addLast$TV(slater);
return true;
}, p$1);

Clazz.newMeth(C$, 'getAlphasAndExponents', function () {
for (var j=0; j < 5; j++) {
if (this.line.indexOf$S("=") < 0) this.rd$();
if (this.line.indexOf$S("$END") >= 0) break;
this.line=this.line.substring$I(this.line.indexOf$S("=") + 1);
var temp=this.fillFloatArray$S$I$FA(this.line, 0, Clazz.array(Float.TYPE, [this.gaussianCount]));
for (var i=0; i < this.gaussianCount; i++) {
this.gaussians[i][j]=temp[i];
if (j > 1) this.gaussians[i][5] += temp[i];
}
}
for (var i=0; i < this.gaussianCount; i++) {
if (this.gaussians[i][1] == 0 ) this.gaussians[i][1]=this.gaussians[i][5];
}
if (this.debugging) {
$I$(2).debug$S(this.shells.size$() + " slater shells read");
$I$(2).debug$S(this.gaussians.length + " gaussian primitives read");
}}, p$1);

Clazz.newMeth(C$, 'readData31$S', function (line1) {
if (line1 == null ) {
line1=this.rd$();
this.rd$();
}this.rd$();
var tokens=$I$(9).getTokens$S(this.rd$());
var ac=this.parseIntStr$S(tokens[0]);
this.shellCount=this.parseIntStr$S(tokens[1]);
this.gaussianCount=this.parseIntStr$S(tokens[2]);
if (tokens.length < 4) $I$(2).error$S("NOTE! .31 file is old; d orbitals are not normalized");
this.rd$();
this.asc.newAtomSet$();
this.asc.setAtomSetName$S(this.nboType + "s: " + line1.trim$() );
this.asc.setCurrentModelInfo$S$O("nboType", this.nboType);
for (var i=0; i < ac; i++) {
tokens=$I$(9).getTokens$S(this.rd$());
var z=this.parseIntStr$S(tokens[0]);
if (z < 0) continue;
var atom=this.asc.addNewAtom$();
atom.elementNumber=($s$[0] = z, $s$[0]);
this.setAtomCoordTokens$org_jmol_adapter_smarter_Atom$SA$I(atom, tokens, 1);
}
this.shells=Clazz.new_($I$(7));
this.gaussians=$I$(8).newFloat2$I(this.gaussianCount);
for (var i=0; i < this.gaussianCount; i++) this.gaussians[i]=Clazz.array(Float.TYPE, [6]);

this.rd$();
this.nOrbitals=0;
for (var i=0; i < this.shellCount; i++) {
tokens=$I$(9).getTokens$S(this.rd$());
var slater=Clazz.array(Integer.TYPE, [4]);
slater[0]=this.parseIntStr$S(tokens[0]);
var n=this.parseIntStr$S(tokens[1]);
var pt=this.parseIntStr$S(tokens[2]) - 1;
var ng=this.parseIntStr$S(tokens[3]);
this.line=this.rd$();
for (var j=((n - 1)/10|0); --j >= 0; ) this.line += this.rd$().substring$I(1);

this.line=this.line.trim$();
System.out.println$S(this.line);
if (!p$1.fillSlater$IA$I$I$I.apply(this, [slater, n, pt, ng])) return false;
}
this.rd$();
p$1.getAlphasAndExponents.apply(this, []);
return true;
}, p$1);

Clazz.newMeth(C$, 'readData46', function () {
var map=Clazz.new_($I$(10));
var tokens=Clazz.array(String, [0]);
this.rd$();
var nNOs=this.nNOs=this.nAOs=this.nOrbitals;
var labelKey=C$.getLabelKey$S(this.nboType);
while (this.line != null  && this.line.length$() > 0 ){
tokens=$I$(9).getTokens$S(this.line);
var type=tokens[0];
this.isOpenShell=(tokens.length == 3);
var ab=(this.isOpenShell ? tokens[1] : "");
var count=tokens[tokens.length - 1];
var key=(ab.equals$O("BETA") ? "beta_" : "") + type;
if (this.parseIntStr$S(count) != this.nOrbitals) {
$I$(2).error$S("file 46 number of orbitals for " + this.line + " (" + count + ") does not match nOrbitals: " + this.nOrbitals + "\n" );
nNOs=this.parseIntStr$S(count);
}if (type.equals$O(labelKey)) this.nNOs=nNOs;
var sb=Clazz.new_($I$(6));
while (this.rd$() != null  && this.line.length$() > 4  && " NA NB AO NH".indexOf$S(this.line.substring$I$I(1, 4)) < 0 )sb.append$S(this.line.substring$I(1));

System.out.println$I(sb.length$());
tokens=Clazz.array(String, [(sb.length$()/10|0)]);
for (var i=0, pt=0; i < tokens.length; i++, pt+=10) tokens[i]=$I$(9).rep$S$S$S(sb.substring2$I$I(pt, pt + 10), " ", "");

map.put$TK$TV(key, tokens);
}
tokens=map.get$O((this.betaOnly ? "beta_" : "") + labelKey);
this.moData.put$TK$TV("nboLabelMap", map);
if (tokens == null ) {
tokens=Clazz.array(String, [nNOs]);
for (var i=0; i < nNOs; i++) tokens[i]=this.nboType + (i + 1);

map.put$TK$TV(labelKey, tokens);
if (this.isOpenShell) map.put$TK$TV("beta_" + labelKey, tokens);
}this.moData.put$TK$TV("nboLabels", tokens);
this.addBetaSet=(this.isOpenShell && !this.betaOnly && !this.is47File  );
if (this.addBetaSet) this.nOrbitals*=2;
for (var i=0; i < this.nOrbitals; i++) this.setMO$java_util_Map(Clazz.new_($I$(10)));

C$.setNboLabels$SA$I$javajs_util_Lst$I$S(tokens, nNOs, this.orbitals, this.nOrbitals0, this.nboType);
if (this.addBetaSet) {
this.moData.put$TK$TV("firstBeta", Integer.valueOf$I(nNOs));
C$.setNboLabels$SA$I$javajs_util_Lst$I$S(map.get$O("beta_" + labelKey), nNOs, this.orbitals, this.nOrbitals0 + nNOs, this.nboType);
}var structures=p$1.getStructureList.apply(this, []);
$I$(5).getStructures46$SA$S$javajs_util_Lst$I(map.get$O("NBO"), "alpha", structures, this.asc.ac);
$I$(5).getStructures46$SA$S$javajs_util_Lst$I(map.get$O("beta_NBO"), "beta", structures, this.asc.ac);
}, p$1);

Clazz.newMeth(C$, 'getLabelKey$S', function (labelKey) {
if (labelKey.startsWith$S("P")) labelKey=labelKey.substring$I(1);
if (labelKey.equals$O("NLMO")) labelKey="NBO";
if (labelKey.equals$O("MO")) labelKey="NO";
return labelKey;
}, 1);

Clazz.newMeth(C$, 'readNBOCoefficients$java_util_Map$S$org_jmol_viewer_Viewer', function (moData, nboType, vwr) {
var ext=$I$(11).getNBOTypeFromName$S(nboType);
var isAO=nboType.equals$O("AO");
var isNBO=nboType.equals$O("NBO");
var hasNoBeta=$I$(9).isOneOf$S$S(nboType, ";AO;PNAO;NAO;");
var map=moData.get$O("nboLabelMap");
var nAOs=map.get$O("AO").length;
var labelKey=C$.getLabelKey$S(nboType);
var nboLabels=map.get$O(labelKey);
if (nboLabels == null ) {
nboLabels=Clazz.array(String, [nAOs]);
for (var i=0; i < nAOs; i++) nboLabels[i]=nboType + (i + 1);

labelKey=nboType;
map.put$TK$TV(labelKey, nboLabels);
if (!hasNoBeta) map.put$TK$TV("beta_" + labelKey, nboLabels);
}var nMOs=nboLabels.length;
try {
var orbitals=moData.get$O(nboType + "_coefs");
if (orbitals == null ) {
var data=null;
if (!isAO) {
var fileName=moData.get$O("nboRoot") + "." + ext ;
if ((data=vwr.getFileAsString3$S$Z$S(fileName, true, null)) == null ) return false;
data=data.substring$I(data.indexOf$S("--\n") + 3).toLowerCase$();
if (ext == 33) data=data.substring$I$I(0, data.indexOf$S("--\n") + 3);
}orbitals=moData.get$O("mos");
var dfCoefMaps=orbitals.get$I(0).get$O("dfCoefMaps");
orbitals=Clazz.new_($I$(7));
var len=0;
var next=null;
var nOrbitals=nMOs;
if (!isAO) {
if (data.indexOf$S("alpha") >= 0) {
nOrbitals*=2;
data=data.substring$I(data.indexOf$S("alpha") + 10);
}len=data.length$();
next=Clazz.array(Integer.TYPE, [1]);
}for (var i=nOrbitals; --i >= 0; ) {
var mo=Clazz.new_($I$(10));
orbitals.addLast$TV(mo);
if (dfCoefMaps != null ) mo.put$TK$TV("dfCoefMaps", dfCoefMaps);
}
C$.setNboLabels$SA$I$javajs_util_Lst$I$S(nboLabels, nMOs, orbitals, 0, nboType);
for (var i=0; i < nOrbitals; i++) {
if (!isAO && i == nMOs ) {
if (isNBO) C$.getNBOOccupanciesStatic$javajs_util_Lst$I$I$S$I$IA(orbitals, nMOs, 0, data, len, next);
nboLabels=map.get$O("beta_" + labelKey);
next[0]=(hasNoBeta ? 0 : data.indexOf$S("beta  spin") + 12);
}var mo=orbitals.get$I(i);
var coefs=Clazz.array(Float.TYPE, [nAOs]);
if (isAO) {
coefs[i % nAOs]=1;
} else if (i >= nAOs && hasNoBeta ) {
coefs=orbitals.get$I(i % nAOs).get$O("coefficients");
} else {
for (var j=0; j < nAOs; j++) {
coefs[j]=$I$(9).parseFloatChecked$S$I$IA$Z(data, len, next, false);
if (Float.isNaN$F(coefs[j])) System.out.println$S("oops = IsoExt ");
}
}mo.put$TK$TV("coefficients", coefs);
}
if (isNBO) C$.getNBOOccupanciesStatic$javajs_util_Lst$I$I$S$I$IA(orbitals, nMOs, nOrbitals - nMOs, data, len, next);
moData.put$TK$TV(nboType + "_coefs", orbitals);
}moData.put$TK$TV("nboType", nboType);
moData.put$TK$TV("nboLabels", nboLabels);
moData.put$TK$TV("mos", orbitals);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
return false;
} else {
throw e;
}
}
return true;
}, 1);

Clazz.newMeth(C$, 'getNBOOccupanciesStatic$javajs_util_Lst$I$I$S$I$IA', function (orbitals, nAOs, pt, data, len, next) {
var occupancies=Clazz.array(Float.TYPE, [nAOs]);
for (var j=0; j < nAOs; j++) occupancies[j]=$I$(9).parseFloatChecked$S$I$IA$Z(data, len, next, false);

for (var i=0; i < nAOs; i++) {
var mo=orbitals.get$I(pt + i);
mo.put$TK$TV("occupancy", Float.valueOf$F(occupancies[i]));
}
}, 1);

Clazz.newMeth(C$, 'readMOs', function () {
var isAO=this.nboType.equals$O("AO");
var isNBO=this.nboType.equals$O("NBO");
var discardExtra=$I$(9).isOneOf$S$S(this.nboType, ";NBO;NLMO;");
var hasNoBeta=$I$(9).isOneOf$S$S(this.nboType, ";AO;PNAO;NAO;");
this.nOrbitals0=this.orbitals.size$();
p$1.getFile46.apply(this, []);
if (this.betaOnly) {
this.discardLinesUntilContains$S("BETA");
this.filterMO$();
}this.nOrbitals=this.orbitals.size$();
if (this.nOrbitals == 0) return;
this.line=null;
var pt=0;
for (var i=this.nOrbitals0, n=this.nOrbitals0 + this.nOrbitals; i < n; i++, pt++) {
if (pt == this.nNOs) {
if (isNBO) {
p$1.readNBO37Occupancies$I.apply(this, [pt]);
}if (discardExtra) this.discardLinesUntilContains2$S$S("BETA", "beta");
}var mo=this.orbitals.get$I(i);
var coefs=Clazz.array(Float.TYPE, [this.nAOs]);
if (isAO) {
coefs[pt % this.nAOs]=1;
} else if (pt >= this.nNOs && hasNoBeta ) {
coefs=this.orbitals.get$I(pt % this.nNOs).get$O("coefficients");
} else {
if (this.line == null ) {
while (this.rd$() != null  && Float.isNaN$F(this.parseFloatStr$S(this.line)) ){
this.filterMO$();
}
} else {
this.line=null;
}this.fillFloatArray$S$I$FA(this.line, 0, coefs);
this.line=null;
}mo.put$TK$TV("coefficients", coefs);
}
if (isNBO) p$1.readNBO37Occupancies$I.apply(this, [pt]);
this.moData.put$TK$TV(this.nboType + "_coefs", this.orbitals);
this.setMOData$Z(false);
this.moData.put$TK$TV("nboType", this.nboType);
$I$(2).info$S((this.orbitals.size$() - this.nOrbitals0) + " orbitals read");
}, p$1);

Clazz.newMeth(C$, 'readNBO37Occupancies$I', function (pt) {
var occupancies=Clazz.array(Float.TYPE, [this.nNOs]);
this.fillFloatArray$S$I$FA(null, 0, occupancies);
for (var i=0; i < this.nNOs; i++) {
var mo=this.orbitals.get$I(this.nOrbitals0 + pt - this.nNOs + i);
mo.put$TK$TV("occupancy", Float.valueOf$F(occupancies[i]));
}
}, p$1);

Clazz.newMeth(C$, 'setNboLabels$SA$I$javajs_util_Lst$I$S', function (tokens, nLabels, orbitals, nOrbitals0, moType) {
var alphaBeta=(orbitals.size$() == nLabels * 2);
var addOccupancy=!$I$(9).isOneOf$S$S(moType, ";AO;NAO;PNAO;MO;NO;");
var ab=(!alphaBeta ? "" : nOrbitals0 == 0 ? " alpha" : " beta");
for (var j=0; j < nLabels; j++) {
var mo=orbitals.get$I(j + nOrbitals0);
var type=tokens[j];
mo.put$TK$TV("type", moType + " " + type + ab );
if (addOccupancy) mo.put$TK$TV("occupancy", Float.valueOf$F(alphaBeta ? 1 : type.indexOf$S("*") >= 0 || type.indexOf$S("(ry)") >= 0  ? 0 : 2));
}
}, 1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
