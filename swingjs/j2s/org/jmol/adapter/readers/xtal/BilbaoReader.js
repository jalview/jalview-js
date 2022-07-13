(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'javajs.util.PT','javajs.util.V3','org.jmol.util.Vibration','javajs.util.SB']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BilbaoReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['getHigh','getSym','normDispl','doDisplace','isBCSfile'],'I',['i0','nAtoms'],'S',['kvec']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.normDispl=!this.checkFilterKey$S("NONORM");
this.doDisplace=this.isTrajectory;
this.getSym=true;
this.getHigh=this.checkFilterKey$S("HIGH") && !this.doDisplace ;
this.asc.vibScale=1;
this.appendLoadNote$S("Bilbao Crystallographic Server\ncryst@wm.lc.ehu.es");
if (this.rd$().indexOf$S("<") < 0) {
p$1.readBilbaoDataFile.apply(this, []);
this.continuing=false;
}});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.contains$CharSequence(">Bilbao Crystallographic Server<")) {
this.line=this.line.substring$I(this.line.lastIndexOf$S(">") + 1).trim$();
if (this.line.length$() > 0) this.appendLoadNote$S(this.line + "\n");
} else if (this.line.contains$CharSequence("High symmetry structure<")) {
if (this.getHigh) p$1.readBilbaoFormat$S$F.apply(this, ["high symmetry", NaN]);
} else if (this.line.contains$CharSequence("Low symmetry structure<")) {
if (!this.doDisplace) p$1.readBilbaoFormat$S$F.apply(this, ["low symmetry", NaN]);
} else if (this.line.contains$CharSequence("structure in the subgroup basis<")) {
if (!this.doDisplace) p$1.readBilbaoFormat$S$F.apply(this, ["high symmetry in the subgroup basis", NaN]);
} else if (this.line.contains$CharSequence("Low symmetry structure after the origin shift<")) {
p$1.readBilbaoFormat$S$F.apply(this, ["low symmetry after origin shift", NaN]);
} else if (this.line.contains$CharSequence("<h3>Irrep:")) {
p$1.readVirtual.apply(this, []);
}return true;
});

Clazz.newMeth(C$, 'readBilbaoDataFile', function () {
this.isBCSfile=true;
p$1.checkComment.apply(this, []);
while (this.line != null ){
p$1.readBilbaoFormat$S$F.apply(this, [null, NaN]);
if (p$1.rdLine.apply(this, []) == null  || this.line.indexOf$S("##disp-par##") < 0 ) {
this.applySymmetryAndSetTrajectory$();
} else {
p$1.readDisplacements$F.apply(this, [1]);
p$1.rdLine.apply(this, []);
}}
}, p$1);

Clazz.newMeth(C$, 'checkComment', function () {
if (!this.line.startsWith$S("#") || this.line.indexOf$S("disp-par") >= 0 ) return false;
if (this.isBCSfile) {
this.appendLoadNote$S(this.line);
if (this.line.startsWith$S("# Title:")) this.asc.setAtomSetName$S(this.line.substring$I(8).trim$());
}return true;
}, p$1);

Clazz.newMeth(C$, 'readBilbaoFormat$S$F', function (title, fAmp) {
this.setFractionalCoordinates$Z(true);
if (!this.doGetModel$I$S(++this.modelNumber, title)) return;
this.asc.newAtomSet$();
if (this.line.startsWith$S("Bilbao Crys:")) {
title=this.line.substring$I(13).trim$();
p$1.rdLine.apply(this, []);
}p$1.setTitle$S.apply(this, [title]);
var ptPre=this.line.indexOf$S("<pre>");
if (ptPre >= 0) this.line=this.line.substring$I(ptPre + 5);
var intTableNo=this.parseIntStr$S(this.line);
if (intTableNo == 0) {
this.setSpaceGroupName$S("bilbao:" + this.line.substring$I(2));
} else {
while (intTableNo < 0 && p$1.rdLine.apply(this, []) != null  )intTableNo=this.parseIntStr$S(this.line);

this.setSpaceGroupName$S("bilbao:" + intTableNo);
}var data=Clazz.array(Float.TYPE, [6]);
this.fillFloatArray$S$I$FA(null, 0, data);
for (var i=0; i < 6; i++) this.setUnitCellItem$I$F(i, data[i]);

this.i0=this.asc.ac;
this.nAtoms=this.parseIntStr$S(p$1.rdLine.apply(this, []));
for (var i=this.nAtoms; --i >= 0; ) {
var tokens=$I$(1,"getTokens$S",[p$1.rdLine.apply(this, [])]);
if (!this.getSym && tokens[1].contains$CharSequence("_") ) continue;
if (tokens.length == 3) this.addAtomXYZSymName$SA$I$S$S(tokens, 0, "Be", "Be1");
 else this.addAtomXYZSymName$SA$I$S$S(tokens, 3, tokens[0], tokens[0] + tokens[1]);
}
if (Float.isNaN$F(fAmp)) {
if (ptPre >= 0) this.applySymmetryAndSetTrajectory$();
return;
}this.line=null;
p$1.readDisplacements$F.apply(this, [fAmp]);
}, p$1);

Clazz.newMeth(C$, 'readDisplacements$F', function (fAmp) {
for (var i=0; i < this.nAtoms; i++) {
if (this.line == null ) p$1.rdLine.apply(this, []);
var tokens=$I$(1).split$S$S(this.line, "x|x");
if (this.getSym || !tokens[0].contains$CharSequence("_") ) this.asc.atoms[this.i0 + i].vib=$I$(2,"new3$F$F$F",[this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[2]), this.parseFloatStr$S(tokens[3])]);
this.line=null;
}
this.applySymmetryAndSetTrajectory$();
for (var i=this.asc.ac; --i >= this.i0; ) {
var a=this.asc.atoms[i];
if (a.vib != null ) {
var v=Clazz.new_($I$(3,1));
v.setT$javajs_util_T3(a.vib);
a.vib=v;
this.asc.getSymmetry$().toCartesian$javajs_util_T3$Z(v, true);
v.scale$F(1 / fAmp);
}}
this.appendLoadNote$S((this.asc.ac - this.i0) + " displacements");
}, p$1);

Clazz.newMeth(C$, 'setTitle$S', function (title) {
if (title != null ) {
this.asc.setAtomSetName$S(title);
this.appendLoadNote$S(title);
}}, p$1);

Clazz.newMeth(C$, 'rdLine', function () {
while (this.rd$() != null  && (this.line.trim$().length$() == 0 || p$1.checkComment.apply(this, []) ) ){
}
return this.line;
}, p$1);

Clazz.newMeth(C$, 'readVirtual', function () {
if (this.line.contains$CharSequence("<h3>K-vector:")) this.kvec=this.line.substring$I$I(this.line.indexOf$S("("), this.line.indexOf$S(")") + 1);
var s=p$1.getLinesUntil$S.apply(this, ["\"BCS\""]);
var pt=s.indexOf$S("The amplitude");
pt=s.indexOf$S$I("=", pt);
var amp=s.substring$I$I(pt + 2, s.indexOf$S$I(" ", pt + 2));
var fAmp=(this.normDispl ? this.parseFloatStr$S(amp) : 1);
var irrep=p$1.getAttr$S$S.apply(this, [s, "irrep"]);
if (irrep.indexOf$S(":") >= 0) irrep=irrep.substring$I$I(0, irrep.indexOf$S(":"));
this.line=this.line.substring$I(this.line.indexOf$S("value=") + 7);
p$1.readBilbaoFormat$S$F.apply(this, [this.kvec + " " + irrep + " (" + amp + " Ang.)" , fAmp]);
}, p$1);

Clazz.newMeth(C$, 'getAttr$S$S', function (s, key) {
var pt=s.indexOf$S$I("value", s.indexOf$S("\"" + key + "\"" ));
s=$I$(1).getQuotedStringAt$S$I(s, pt);
s=$I$(1).rep$S$S$S(s, "<i>", "");
s=$I$(1).rep$S$S$S(s, "</i>", "");
return s.trim$();
}, p$1);

Clazz.newMeth(C$, 'getLinesUntil$S', function (key) {
var sb=Clazz.new_($I$(4,1));
do {
sb.append$S(this.line);
} while (!this.rd$().contains$CharSequence(key));
return sb.toString();
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:28 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
