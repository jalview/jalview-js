(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.simple"),p$1={},I$=[[0,'javajs.util.PT','org.jmol.util.Logger','org.jmol.adapter.smarter.Atom','org.jmol.adapter.smarter.Bond','javajs.util.Rdr']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FAHReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.factor=1;
this.pt=Clazz.array(Integer.TYPE, [1]);
},1);

C$.$fields$=[['F',['factor'],'S',['units'],'O',['pt','int[]','readerSave','java.io.BufferedReader']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.asc.setNoAutoBond$();
this.setModelPDB$Z(true);
this.finalizeReaderASCR$();
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.startsWith$S("{")) {
return this.readTopAtomsAndBonds$();
}if (this.line.startsWith$S("[")) {
return p$1.readVnnCoords.apply(this, []);
}return true;
});

Clazz.newMeth(C$, 'readTopAtomsAndBonds$', function () {
if (this.readerSave == null ) this.appendLoadNote$S(" -- FAH:: is required for Frame files but not the Top file.\n -- automatic calculation of structure using DSSP\n -- Both files are required; three load options:\n    \n    LOAD FILES \"ViewerTop.json\" + \"ViewerFrame22.json\" // explicit joining to two files\n    \n    LOAD ViewerTop.json; \n    LOAD XYZ FAH::ViewerFrame22.json   // first the atoms, then the coordinates\n    \n    LOAD FAH::ViewerFrame22.json        // just the coordinates with associated ViewerTop.json assumed present\n    \n -- Subsequent calls to LOAD XYZ will replace coordinates and recalculate DSSP only.\n\n    LOAD ViewerTop.json; \n    LOAD XYZ FAH::ViewerFrame0.json \n    delay 1.0\n    LOAD XYZ FAH::ViewerFrame22.json \n \n");
this.discardLinesUntilContains$S("\"");
if (this.line.indexOf$S("units") >= 0) {
this.pt[0]=this.line.indexOf$S(":");
this.units=$I$(1).getQuotedStringNext$S$IA(this.line, this.pt);
if (this.units != null  && (this.units.equalsIgnoreCase$S("NM") || this.units.toUpperCase$().indexOf$S("NANOMETER") >= 0 ) ) {
this.factor=0.1;
}$I$(2,"info$S",["FAHReader units are " + this.units + " factor = " + new Float(this.factor).toString() ]);
}this.discardLinesUntilContains$S("atoms");
var index=0;
while (this.rd$() != null ){
var tokens=this.getTokens$();
this.pt[0]=0;
var name=$I$(1).getQuotedStringNext$S$IA(tokens[0], this.pt);
this.pt[0]=0;
var group=$I$(1).getQuotedStringNext$S$IA(tokens[5], this.pt);
var elemNo=this.parseIntStr$S(tokens[4]);
var atom=Clazz.new_($I$(3,1));
atom.elementNumber=($s$[0] = elemNo, $s$[0]);
atom.atomName=name;
atom.group3=group;
atom.set$F$F$F(0, 0, index++);
this.asc.addAtom$org_jmol_adapter_smarter_Atom(atom);
if (this.line.trim$().endsWith$S("]")) break;
}
this.discardLinesUntilContains$S("bonds");
while (this.rd$() != null ){
this.pt[0]=this.line.indexOf$S("[") + 1;
var a=$I$(1).parseIntNext$S$IA(this.line, this.pt);
this.pt[0]=this.line.indexOf$S(",") + 1;
var b=$I$(1).parseIntNext$S$IA(this.line, this.pt);
this.asc.addBond$org_jmol_adapter_smarter_Bond(Clazz.new_($I$(4,1).c$$I$I$I,[a, b, 1]));
if (this.line.trim$().endsWith$S("]")) break;
}
$I$(2).info$S("FAHReader " + this.asc.ac + " top atoms read" );
this.rd$();
this.rd$();
return true;
});

Clazz.newMeth(C$, 'readVnnCoords', function () {
var iatom=0;
if (this.asc.ac == 0 && this.readerSave == null   && !"xyz".equals$O(this.htParams.get$O("dataType")) ) {
p$1.getTopData.apply(this, []);
}var atoms=this.asc.atoms;
var atomCount=this.asc.ac;
while (this.rd$() != null ){
this.pt[0]=0;
this.line=this.line.trim$();
var tokens=this.line.substring$I$I(1, this.line.length$() - 1).split$S(",");
var x=this.parseFloatStr$S(tokens[0]) * this.factor;
var y=this.parseFloatStr$S(tokens[1]) * this.factor;
var z=this.parseFloatStr$S(tokens[2]) * this.factor;
var atom=(iatom >= atomCount ? this.asc.addAtom$org_jmol_adapter_smarter_Atom(Clazz.new_($I$(3,1))) : atoms[iatom]);
atom.set$F$F$F(x, y, z);
iatom++;
if (this.line.trim$().endsWith$S("]")) break;
}
$I$(2).info$S("FAHReader " + iatom + " atom coordinates read" );
if (!p$1.checkBondlengths.apply(this, [])) p$1.checkBondlengths.apply(this, []);
this.rd$();
return true;
}, p$1);

Clazz.newMeth(C$, 'checkBondlengths', function () {
var d=1;
if (this.asc.bondCount > 0) {
var b=this.asc.bonds[0];
d=this.asc.atoms[b.atomIndex1].distance$javajs_util_T3(this.asc.atoms[b.atomIndex2]);
} else {
for (var i=Math.min(this.asc.ac, 10); --i >= 0; ) {
for (var j=i; --j >= 0; ) {
d=Math.min(d, this.asc.atoms[i].distance$javajs_util_T3(this.asc.atoms[j]));
}
}
}if (d < 0.5 ) {
for (var i=this.asc.ac; --i >= 0; ) {
this.asc.atoms[i].scale$F(10);
}
var msg="FAHReader CORRECTION: Top.json file units=" + this.units + "\n but we found NANOMETERS based on\n " + (this.asc.bondCount > 0 ? "bonds[0].length" : "shortest distance among first 10 atoms") + "=" + new Double(d).toString() ;
this.appendLoadNote$S(msg);
return false;
}return true;
}, p$1);

Clazz.newMeth(C$, 'getTopData', function () {
var fileName=this.htParams.get$O("fullPathName");
var pt=fileName.indexOf$S("::");
if (pt > 0) fileName=fileName.substring$I(pt + 2);
pt=fileName.lastIndexOf$S(".");
if (pt < 0) pt=fileName.length$();
var ptv=fileName.lastIndexOf$S$I("Frame", pt);
fileName=fileName.substring$I$I(0, ptv) + "Top" + fileName.substring$I(pt) ;
var data=this.vwr.getFileAsString3$S$Z$S(fileName, false, null);
$I$(2,"info$S",["FAHReader " + data.length$() + " bytes read from " + fileName ]);
var isError=(data.indexOf$S("\"atoms\"") < 0);
if (isError) {
$I$(2).error$S("FAHReader " + fileName + "was not found" );
} else {
this.readerSave=this.reader;
this.reader=$I$(5).getBR$S(data);
try {
this.rd$();
this.checkLine$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.reader=this.readerSave;
}}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:26 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
