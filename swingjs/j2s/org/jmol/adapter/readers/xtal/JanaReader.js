(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'Boolean','org.jmol.util.Logger','javajs.util.Lst','javajs.util.Matrix','org.jmol.api.Interface','javajs.util.PT','javajs.util.Rdr','javajs.util.BS','org.jmol.adapter.smarter.Atom','javajs.util.P3','javajs.util.V3','javajs.util.Quat','javajs.util.A4','java.util.Hashtable']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JanaReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.floats=Clazz.array(Float.TYPE, [6]);
},1);

C$.$fields$=[['Z',['haveM40Data','molHasTLS','firstPosition','isLegendre'],'I',['thisSub','qicount'],'S',['modAxes','molName'],'O',['lattvecs','javajs.util.Lst','+molAtoms','+molTtypes','+modelMolecule','matR','javajs.util.M3','rho','javajs.util.P3','vR','javajs.util.V3','+v0Cart','floats','float[]']]
,['O',['XYZ','String[]']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.modAxes=this.getFilter$S("MODAXES=");
this.setFractionalCoordinates$Z(true);
this.asc.newAtomSet$();
this.asc.setCurrentModelInfo$S$O("autoBondUsingOccupation", $I$(1).TRUE);
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.length$() < 3) return true;
$I$(2).info$S(this.line);
this.parseTokenStr$S(this.line);
switch ("tit  cell ndim qi   lat  sym  spg  end  wma".indexOf$S(this.line.substring$I$I(0, 3))) {
case 0:
this.asc.setAtomSetName$S(this.line.substring$I(5).trim$());
break;
case 5:
p$1.cell.apply(this, []);
this.setSymmetryOperator$S("x,y,z");
break;
case 10:
p$1.ndim.apply(this, []);
break;
case 20:
if (this.lattvecs == null ) this.lattvecs=Clazz.new_($I$(3,1));
if (!this.ms.addLatticeVector$javajs_util_Lst$S(this.lattvecs, this.line.substring$I(8))) this.appendLoadNote$S(this.line + " not supported");
break;
case 30:
this.setSpaceGroupName$S(this.getTokens$()[1]);
break;
case 25:
p$1.symmetry.apply(this, []);
break;
case 15:
p$1.qi.apply(this, []);
break;
case 35:
while (this.rd$() != null ){
if (this.line.startsWith$S("command") || this.parseIntStr$S(this.line) >= 0 ) {
p$1.readM40Data$Z.apply(this, [true]);
break;
}}
this.continuing=false;
break;
case 40:
var n=3 + this.modDim;
var m;
if (this.thisSub++ == 0) {
m=$I$(4).identity$I$I(n, n);
this.ms.addSubsystem$S$javajs_util_Matrix("" + this.thisSub++, m);
}m=Clazz.new_($I$(4,1).c$$DAA$I$I,[null, n, n]);
var a=m.getArray$();
var data=Clazz.array(Float.TYPE, [n * n]);
this.fillFloatArray$S$I$FA(null, 0, data);
for (var i=0, pt=0; i < n; i++) for (var j=0; j < n; j++, pt++) a[i][j]=data[pt];


this.ms.addSubsystem$S$javajs_util_Matrix("" + this.thisSub, m);
}
return true;
});

Clazz.newMeth(C$, 'doPreSymmetry$', function () {
if (this.ms != null ) this.ms.setModulation$Z$org_jmol_api_SymmetryInterface(false, null);
if (this.vibsFractional) this.asc.getXSymmetry$().scaleFractionalVibs$();
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
if (!this.haveM40Data) p$1.readM40Data$Z.apply(this, [false]);
if (this.lattvecs != null  && this.lattvecs.size$() > 0 ) this.asc.getSymmetry$().addLatticeVectors$javajs_util_Lst(this.lattvecs);
this.applySymmetryAndSetTrajectory$();
this.finalizeReaderASCR$();
});

Clazz.newMeth(C$, 'finalizeSubclassSymmetry$Z', function (haveSymmetry) {
p$1.adjustM40Occupancies.apply(this, []);
if (this.ms != null  && haveSymmetry ) {
this.ms.setModulation$Z$org_jmol_api_SymmetryInterface(true, this.asc.getXSymmetry$().getBaseSymmetry$());
this.ms.finalizeModulation$();
}});

Clazz.newMeth(C$, 'cell', function () {
for (var ipt=0; ipt < 6; ipt++) this.setUnitCellItem$I$F(ipt, this.parseFloat$());

}, p$1);

Clazz.newMeth(C$, 'ndim', function () {
this.ms=$I$(5).getOption$S$org_jmol_viewer_Viewer$S("adapter.readers.cif.MSRdr", this.vwr, "file");
this.modDim=this.ms.initialize$org_jmol_adapter_smarter_AtomSetCollectionReader$I(this, (this.parseIntStr$S(this.getTokens$()[1]) - 3));
}, p$1);

Clazz.newMeth(C$, 'qi', function () {
var pt=Clazz.array(Double.TYPE, [this.modDim]);
pt[this.qicount]=1;
var a=Clazz.array(Double.TYPE, -1, [this.parseFloat$(), this.parseFloat$(), this.parseFloat$()]);
this.parseTokenStr$S(this.rd$());
for (var i=0; i < 3; i++) a[i] += this.parseFloat$();

this.ms.addModulation$java_util_Map$S$DA$I(null, "W_" + (++this.qicount), a, -1);
this.ms.addModulation$java_util_Map$S$DA$I(null, "F_" + this.qicount + "_coefs_" , pt, -1);
}, p$1);

Clazz.newMeth(C$, 'symmetry', function () {
this.setSymmetryOperator$S((function(a,f){return f.apply(null,a)})([this.line.substring$I(9).trim$(), " ", ","],$I$(6).rep$S$S$S));
}, p$1);

Clazz.newMeth(C$, 'readM40Data$Z', function (haveReader) {
if (haveReader) {
p$1.parseM40Floats.apply(this, []);
} else {
var m40File=this.filePath;
var ipt=m40File.lastIndexOf$S(".");
if (ipt < 0) return;
m40File=m40File.substring$I$I(0, ipt + 2) + "40";
var id=m40File.substring$I$I(0, ipt);
this.reader.close$();
this.reader=(function(a,f){return f.apply(null,a)})([this.vwr.getLigandModel$S$S$S$S(id, m40File, "_file", "----")],$I$(7).getBR$S);
if (this.out != null ) this.out.append$S("******************************* M40 DATA *******************************\n");
p$1.readM40Floats.apply(this, []);
}this.haveM40Data=true;
if (this.line.startsWith$S("command")) p$1.readM40WaveVectors.apply(this, []);
var nFree=0;
var nGroups=0;
var isAxial=false;
var newSub=(this.thisSub == 0 ? null : Clazz.new_($I$(8,1)));
var iSub=(this.thisSub == 0 ? 1 : this.thisSub);
for (var i=0, n=0, pt=0; i < iSub; i++, pt+=10) {
nFree=p$1.getInt$I$I.apply(this, [pt, pt + 5]);
nGroups=p$1.getInt$I$I.apply(this, [pt + 5, pt + 10]);
isAxial=(p$1.getInt$I$I.apply(this, [pt + 15, pt + 20]) == 1);
if (nGroups != 0 && i > 0 ) {
throw Clazz.new_(Clazz.load('Exception').c$$S,["Jmol cannot read rigid body M40 files for composites"]);
}if (newSub != null ) newSub.set$I(n=n + nFree);
}
iSub=(newSub == null  ? 0 : 1);
var nAtoms=-1;
var refAtomName=null;
this.rho=null;
if (nGroups > 0) {
$I$(2).info$S("JanaReader found " + nFree + " free atoms and " + nGroups + " groups" );
this.molName=null;
this.molAtoms=Clazz.new_($I$(3,1));
this.molTtypes=Clazz.new_($I$(3,1));
}while (p$1.skipToNextAtom.apply(this, []) != null ){
nAtoms++;
var atom=Clazz.new_($I$(9,1));
$I$(2).info$S(this.line);
var name=this.line.substring$I$I(0, 9).trim$();
atom.atomName=name;
var isRefAtom=name.equals$O(refAtomName);
atom.foccupancy=this.floats[2];
var isJanaMolecule=Float.isNaN$F(atom.foccupancy);
if (isJanaMolecule) {
var pointGroup=p$1.getStr$I$I.apply(this, [12, 18]);
if (pointGroup.length$() > 0 && !pointGroup.equals$O("1") ) {
throw Clazz.new_(Clazz.load('Exception').c$$S,["Jmol cannot process M40 files with molecule positions based on point-group symmetry."]);
}refAtomName=null;
if (Float.isNaN$F(this.floats[4])) refAtomName=p$1.getStr$I$I.apply(this, [28, 37]);
 else this.rho=$I$(10).new3$F$F$F(this.floats[3], this.floats[4], this.floats[5]);
this.molName=name;
this.molAtoms.clear$();
this.molTtypes.clear$();
this.molHasTLS=false;
this.firstPosition=true;
this.modelMolecule=Clazz.new_($I$(3,1));
continue;
}var isExcluded=false;
var posName=(name.startsWith$S("pos#") ? name : null);
if (posName == null ) {
if (!this.filterAtom$org_jmol_adapter_smarter_Atom$I(atom, 0)) {
if (!isRefAtom) continue;
isExcluded=true;
}this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, this.floats[3], this.floats[4], this.floats[5]);
if (isRefAtom) {
this.rho=$I$(10).newP$javajs_util_T3(atom);
if (isExcluded) continue;
}this.asc.addAtom$org_jmol_adapter_smarter_Atom(atom);
if (iSub > 0) {
if (newSub.get$I(nAtoms)) iSub++;
atom.altLoc=("" + iSub).charAt$I(0);
}p$1.readAtomRecord$org_jmol_adapter_smarter_Atom$javajs_util_P3$javajs_util_P3$Z.apply(this, [atom, null, null, false]);
if (this.molAtoms != null ) this.molAtoms.addLast$O(atom);
} else {
if (this.molAtoms.size$() == 0) continue;
p$1.processPosition$S$org_jmol_adapter_smarter_Atom$Z.apply(this, [posName, atom, isAxial]);
}}
}, p$1);

Clazz.newMeth(C$, 'getInt$I$I', function (col1, col2) {
var n=this.line.length$();
return (n > col1 ? this.parseIntStr$S(p$1.getStr$I$I.apply(this, [col1, col2])) : 0);
}, p$1);

Clazz.newMeth(C$, 'getStr$I$I', function (col1, col2) {
var n=this.line.length$();
return (n > col1 ? this.line.substring$I$I(col1, Math.min(n, col2)).trim$() : "");
}, p$1);

Clazz.newMeth(C$, 'getFlag$I', function (i) {
return (p$1.getInt$I$I.apply(this, [i, i + 1]) > 0);
}, p$1);

Clazz.newMeth(C$, 'skipToNextAtom', function () {
while (p$1.readM40Floats.apply(this, []) != null  && (this.line.length$() == 0 || this.line.charAt$I(0) == " "  || this.line.charAt$I(0) == "-" ) ){
}
return this.line;
}, p$1);

Clazz.newMeth(C$, 'readM40WaveVectors', function () {
while (!p$1.readM40Floats.apply(this, []).contains$CharSequence("end"))if (this.line.startsWith$S("wave")) {
var tokens=this.getTokens$();
var pt=Clazz.array(Double.TYPE, [this.modDim]);
for (var i=0; i < this.modDim; i++) pt[i]=this.parseFloatStr$S(tokens[i + 2]);

this.ms.addModulation$java_util_Map$S$DA$I(null, "F_" + this.parseIntStr$S(tokens[1]) + "_coefs_" , pt, -1);
}
p$1.readM40Floats.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'processPosition$S$org_jmol_adapter_smarter_Atom$Z', function (posName, pos, isAxial) {
pos.atomName=this.molName + "_" + posName ;
var isImproper=(p$1.getInt$I$I.apply(this, [9, 11]) == -1);
var systType=p$1.getInt$I$I.apply(this, [13, 14]);
var rm=(systType == 0 ? null : Clazz.new_($I$(10,1)));
var rp=(systType == 0 ? null : Clazz.new_($I$(10,1)));
if (systType != 0) {
throw Clazz.new_(Clazz.load('Exception').c$$S,["Jmol can only read rigid body groups with basic crystallographic settings."]);
}var rotData=p$1.readAtomRecord$org_jmol_adapter_smarter_Atom$javajs_util_P3$javajs_util_P3$Z.apply(this, [pos, rm, rp, true]);
var name=pos.atomName;
var n=this.molAtoms.size$();
$I$(2).info$S(name + " Molecular group " + this.molName + " has " + n + " atoms" );
var ext="_" + posName.substring$I(4);
var vTrans=$I$(11).new3$F$F$F(pos.anisoBorU[3], pos.anisoBorU[4], pos.anisoBorU[5]);
var phi=(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([$I$(11).new3$F$F$F(0, 0, 1), (pos.anisoBorU[0] / 180 * 3.141592653589793)],$I$(13).newVA$javajs_util_V3$F)],$I$(12).newAA$javajs_util_A4);
var chi=(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([isAxial ? $I$(11).new3$F$F$F(0, 1, 0) : $I$(11).new3$F$F$F(1, 0, 0), (pos.anisoBorU[1] / 180 * 3.141592653589793)],$I$(13).newVA$javajs_util_V3$F)],$I$(12).newAA$javajs_util_A4);
var psi=(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([isAxial ? $I$(11).new3$F$F$F(1, 0, 0) : $I$(11).new3$F$F$F(0, 0, 1), (pos.anisoBorU[2] / 180 * 3.141592653589793)],$I$(13).newVA$javajs_util_V3$F)],$I$(12).newAA$javajs_util_A4);
this.matR=phi.mulQ$javajs_util_Quat(chi).mulQ$javajs_util_Quat(psi).getMatrix$();
if (isImproper) this.matR.scale$F(-1);
var script="";
for (var i=0; i < n; i++) {
var a=this.molAtoms.get$I(i);
var newName=a.atomName;
script += ", " + newName;
if (this.firstPosition) {
newName += ext;
this.modelMolecule.addLast$O($I$(10).newP$javajs_util_T3(a));
} else {
a=this.asc.newCloneAtom$org_jmol_adapter_smarter_Atom(a);
newName=newName.substring$I$I(0, newName.lastIndexOf$S("_")) + ext;
}a.atomName=newName;
var v0=(function(a,f){return f.apply(null,a)})([this.modelMolecule.get$I(i), this.rho],$I$(11).newVsub$javajs_util_T3$javajs_util_T3);
this.getSymmetry$().toCartesian$javajs_util_T3$Z(this.v0Cart=$I$(11).newV$javajs_util_T3(v0), true);
this.vR=$I$(11).newV$javajs_util_T3(v0);
p$1.cartesianProduct$javajs_util_T3$javajs_util_T3.apply(this, [this.vR, null]);
a.setT$javajs_util_T3(this.rho);
a.add$javajs_util_T3(vTrans);
a.add$javajs_util_T3(this.vR);
p$1.copyModulations$S$S.apply(this, [";" + pos.atomName, ";" + newName]);
if (rotData != null ) p$1.setRigidBodyRotations$S$FAA.apply(this, [";" + newName, rotData]);
}
this.firstPosition=false;
script="@" + this.molName + ext + script.substring$I(1) ;
this.addJmolScript$S(script);
this.appendLoadNote$S(script);
}, p$1);

Clazz.newMeth(C$, 'cartesianProduct$javajs_util_T3$javajs_util_T3', function (vA, vB) {
this.symmetry.toCartesian$javajs_util_T3$Z(vA, true);
if (vB == null ) this.matR.rotate2$javajs_util_T3$javajs_util_T3(vA, vA);
 else vA.cross$javajs_util_T3$javajs_util_T3(vA, vB);
this.symmetry.toFractional$javajs_util_T3$Z(vA, true);
}, p$1);

Clazz.newMeth(C$, 'readAtomRecord$org_jmol_adapter_smarter_Atom$javajs_util_P3$javajs_util_P3$Z', function (atom, rm, rp, isPos) {
var label=";" + atom.atomName;
var tType=(isPos ? -1 : p$1.getInt$I$I.apply(this, [13, 14]));
if (!isPos && this.molTtypes != null  ) this.molTtypes.addLast$O(Integer.valueOf$I(tType));
var haveSpecialOcc=p$1.getFlag$I.apply(this, [60]);
var haveSpecialDisp=p$1.getFlag$I.apply(this, [61]);
var haveSpecialUij=p$1.getFlag$I.apply(this, [62]);
var nOcc=p$1.getInt$I$I.apply(this, [65, 68]);
var nDisp=p$1.getInt$I$I.apply(this, [68, 71]);
var nUij=p$1.getInt$I$I.apply(this, [71, 74]);
if (rm != null ) {
p$1.readM40Floats.apply(this, []);
rm.set$F$F$F(this.floats[0], this.floats[1], this.floats[2]);
rp.set$F$F$F(this.floats[3], this.floats[4], this.floats[5]);
}if (tType > 2) p$1.readM40Floats.apply(this, []);
p$1.readM40Floats.apply(this, []);
switch (tType) {
case 6:
case 5:
case 4:
case 3:
this.readLines$I(tType - 1);
this.appendLoadNote$S("Skipping temperature factors with order > 2");
case 2:
case -1:
for (var j=0; j < 6; j++) this.asc.setU$org_jmol_adapter_smarter_Atom$I$F(atom, j, this.floats[j]);

break;
case 1:
if (this.floats[0] != 0 ) this.asc.setU$org_jmol_adapter_smarter_Atom$I$F(atom, 7, this.floats[0]);
break;
case 0:
this.molHasTLS=true;
this.appendLoadNote$S("Jmol cannot process molecular TLS parameters");
break;
}
if (this.modDim == 0) return null;
if (isPos && this.molHasTLS ) this.readLines$I(4);
var pt;
var o_0=(nOcc > 0 && !haveSpecialOcc  ? this.parseFloatStr$S(this.rd$()) : 1);
if (o_0 != 1 ) this.ms.addModulation$java_util_Map$S$DA$I(null, "J_O#0" + label, Clazz.array(Double.TYPE, -1, [atom.foccupancy, o_0, 0]), -1);
atom.foccupancy *= o_0;
var wv=0;
var a1;
var a2;
this.isLegendre=false;
for (var j=0; j < nOcc; j++) {
if (haveSpecialOcc) {
var data=p$1.readM40FloatLines$I$I.apply(this, [2, 1]);
a2=data[0][0];
a1=data[1][0];
} else {
wv=j + 1;
p$1.readM40Floats.apply(this, []);
a1=this.floats[0];
a2=this.floats[1];
}pt=Clazz.array(Double.TYPE, -1, [a1, a2, 0]);
if (a1 != 0  || a2 != 0  ) this.ms.addModulation$java_util_Map$S$DA$I(null, "O_" + wv + "#0" + label , pt, -1);
}
for (var j=0; j < nDisp; j++) {
if (haveSpecialDisp) {
p$1.readM40Floats.apply(this, []);
var c=this.floats[3];
var w=this.floats[4];
for (var k=0; k < 3; k++) if (this.floats[k] != 0 ) this.ms.addModulation$java_util_Map$S$DA$I(null, "D_S#" + C$.XYZ[k] + label , Clazz.array(Double.TYPE, -1, [c, w, this.floats[k]]), -1);

} else {
p$1.addSinCos$I$S$S$Z.apply(this, [j, "D_", label, isPos]);
}}
var rotData=(isPos && nDisp > 0  ? p$1.readM40FloatLines$I$I.apply(this, [nDisp, 6]) : null);
if (!isPos) {
if (this.isLegendre) nUij*=2;
for (var j=0; j < nUij; j++) {
if (tType == 1) {
p$1.addSinCos$I$S$S$Z.apply(this, [j, "U_", label, false]);
} else {
if (haveSpecialUij) {
$I$(2).error$S("JanaReader -- not interpreting SpecialUij flag: " + this.line);
} else if (this.isLegendre) {
var data=p$1.readM40FloatLines$I$I.apply(this, [1, 6]);
var order=j + 1;
var coeff=0;
for (var k=0, p=0; k < 6; k++, p+=3) {
if ((coeff=data[0][k]) != 0 ) this.ms.addModulation$java_util_Map$S$DA$I(null, "U_L" + order + "#" + "U11U22U33U12U13U23UISO".substring$I$I(p, p + 3) + label , Clazz.array(Double.TYPE, -1, [coeff, order, 0]), -1);
}
} else {
var data=p$1.readM40FloatLines$I$I.apply(this, [2, 6]);
for (var k=0, p=0; k < 6; k++, p+=3) {
var csin=data[1][k];
var ccos=data[0][k];
this.ms.addModulation$java_util_Map$S$DA$I(null, "U_" + (j + 1) + "#" + "U11U22U33U12U13U23UISO".substring$I$I(p, p + 3) + label , Clazz.array(Double.TYPE, -1, [csin, ccos, 0]), -1);
}
}}}
}return rotData;
}, p$1);

Clazz.newMeth(C$, 'addSinCos$I$S$S$Z', function (j, key, label, isPos) {
p$1.readM40Floats.apply(this, []);
if (this.isLegendre) {
for (var i=0; i < 2; i++) {
var order=(j * 2 + i + 1);
for (var k=0; k < 3; ++k) {
var coeff=this.floats[3 * i + k];
if (coeff == 0 ) {
continue;
}var axis=C$.XYZ[k % 3];
if (this.modAxes != null  && this.modAxes.indexOf$S(axis.toUpperCase$()) < 0 ) continue;
var id=key + "L#" + axis + order + label ;
this.ms.addModulation$java_util_Map$S$DA$I(null, id, Clazz.array(Double.TYPE, -1, [coeff, order, 0]), -1);
}
}
return;
}p$1.ensureFourier$I.apply(this, [j]);
for (var k=0; k < 3; ++k) {
var csin=this.floats[k];
var ccos=this.floats[k + 3];
if (csin == 0  && ccos == 0  ) {
if (!isPos) continue;
csin=1.0E-10;
}var axis=C$.XYZ[k % 3];
if (this.modAxes != null  && this.modAxes.indexOf$S(axis.toUpperCase$()) < 0 ) continue;
var id=key + (j + 1) + "#" + axis + label ;
this.ms.addModulation$java_util_Map$S$DA$I(null, id, Clazz.array(Double.TYPE, -1, [csin, ccos, 0]), -1);
}
}, p$1);

Clazz.newMeth(C$, 'ensureFourier$I', function (j) {
var pt;
if (j > 0 && this.ms.getMod$S("F_" + (++j) + "_coefs_" ) == null   && (pt=this.ms.getMod$S("F_1_coefs_")) != null  ) {
var p=Clazz.array(Double.TYPE, [this.modDim]);
for (var i=this.modDim; --i >= 0; ) p[i]=pt[i] * j;

this.ms.addModulation$java_util_Map$S$DA$I(null, "F_" + j + "_coefs_" , p, -1);
}}, p$1);

Clazz.newMeth(C$, 'readM40Floats', function () {
if ((this.line=this.rd$()) == null  || this.line.indexOf$S("-------") >= 0 ) return (this.line=null);
if (this.debugging) $I$(2).debug$S(this.line);
p$1.parseM40Floats.apply(this, []);
return this.line;
}, p$1);

Clazz.newMeth(C$, 'parseM40Floats', function () {
var ptLast=this.line.length$() - 9;
for (var i=0, pt=0; i < 6; i++, pt+=9) {
this.floats[i]=(pt <= ptLast ? this.parseFloatStr$S(this.line.substring$I$I(pt, pt + 9)) : NaN);
}
}, p$1);

Clazz.newMeth(C$, 'readM40FloatLines$I$I', function (nLines, nFloats) {
var data=Clazz.array(Float.TYPE, [nLines, nFloats]);
for (var i=0; i < nLines; i++) {
p$1.readM40Floats.apply(this, []);
if (this.line.indexOf$S("Legendre") == 19) this.isLegendre=true;
for (var j=0; j < nFloats; j++) data[i][j]=this.floats[j];

}
return data;
}, p$1);

Clazz.newMeth(C$, 'adjustM40Occupancies', function () {
var htSiteMult=Clazz.new_($I$(14,1));
var atoms=this.asc.atoms;
var symmetry=this.asc.getSymmetry$();
for (var i=this.asc.ac; --i >= 0; ) {
var a=atoms[i];
var ii=htSiteMult.get$O(a.atomName);
if (ii == null ) htSiteMult.put$O$O(a.atomName, ii=Integer.valueOf$I(symmetry.getSiteMultiplicity$javajs_util_P3(a)));
a.foccupancy *= ii.intValue$();
}
}, p$1);

Clazz.newMeth(C$, 'copyModulations$S$S', function (label, newLabel) {
var mapTemp=Clazz.new_($I$(14,1));
for (var e, $e = this.ms.getModulationMap$().entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$();
if (!key.contains$CharSequence(label)) continue;
key=$I$(6).rep$S$S$S(key, label, newLabel);
var val=e.getValue$();
switch ((key.charCodeAt$I(0))) {
case 79:
p$1.setRigidBodyPhase$S$DA.apply(this, [key, val=Clazz.array(Double.TYPE, -1, [val[0], val[1], 0])]);
break;
case 68:
break;
case 85:
continue;
}
mapTemp.put$O$O(key, val);
}
for (var e, $e = mapTemp.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) this.ms.addModulation$java_util_Map$S$DA$I(null, e.getKey$(), e.getValue$(), -1);

}, p$1);

Clazz.newMeth(C$, 'setRigidBodyPhase$S$DA', function (key, v) {
var isCenter=false;
switch ((this.ms.getModType$S(key)).$c()) {
case 111:
case 102:
case 117:
break;
case 99:
case 115:
isCenter=true;
break;
}
var nqDotD=0;
var n=-1;
var qcoefs=this.ms.getQCoefs$S(key);
for (var i=this.modDim; --i >= 0; ) {
if (qcoefs[i] != 0 ) {
n=qcoefs[i];
var q=this.ms.getMod$S("W_" + (i + 1));
nqDotD=n * (q[0] * this.vR.x + q[1] * this.vR.y + q[2] * this.vR.z);
break;
}}
if (isCenter) {
v[0] += nqDotD;
} else {
var sA=v[0];
var cA=v[1];
var sX=Math.sin(2 * 3.141592653589793 * nqDotD );
var cX=Math.cos(2 * 3.141592653589793 * nqDotD );
v[0]=sA * cX + cA * sX;
v[1]=-sA * sX + cA * cX;
}return v;
}, p$1);

Clazz.newMeth(C$, 'setRigidBodyRotations$S$FAA', function (label, params) {
var n=params.length;
for (var i=0; i < n; i++) {
p$1.ensureFourier$I.apply(this, [i]);
var key="D_" + (i + 1);
var data=params[i];
var vsin=$I$(11).new3$F$F$F(data[0], data[1], data[2]);
var vcos=$I$(11).new3$F$F$F(data[3], data[4], data[5]);
p$1.cartesianProduct$javajs_util_T3$javajs_util_T3.apply(this, [vcos, this.v0Cart]);
p$1.cartesianProduct$javajs_util_T3$javajs_util_T3.apply(this, [vsin, this.v0Cart]);
var keyx=key + "#x" + label ;
var keyy=key + "#y" + label ;
var keyz=key + "#z" + label ;
var vx=p$1.combineModulation$S$F$F.apply(this, [keyx, vsin.x, vcos.x]);
var vy=p$1.combineModulation$S$F$F.apply(this, [keyy, vsin.y, vcos.y]);
var vz=p$1.combineModulation$S$F$F.apply(this, [keyz, vsin.z, vcos.z]);
vsin.set$F$F$F(vx[0], vy[0], vz[0]);
vcos.set$F$F$F(vx[1], vy[1], vz[1]);
p$1.cartesianProduct$javajs_util_T3$javajs_util_T3.apply(this, [vsin, null]);
p$1.cartesianProduct$javajs_util_T3$javajs_util_T3.apply(this, [vcos, null]);
p$1.setMolecularModulation$S$F$F.apply(this, [keyx, vsin.x, vcos.x]);
p$1.setMolecularModulation$S$F$F.apply(this, [keyy, vsin.y, vcos.y]);
p$1.setMolecularModulation$S$F$F.apply(this, [keyz, vsin.z, vcos.z]);
}
}, p$1);

Clazz.newMeth(C$, 'combineModulation$S$F$F', function (key, csin, ccos) {
var v=this.ms.getMod$S(key);
return Clazz.array(Double.TYPE, -1, [v[0] + csin, v[1] + ccos, 0]);
}, p$1);

Clazz.newMeth(C$, 'setMolecularModulation$S$F$F', function (key, csin, ccos) {
this.ms.addModulation$java_util_Map$S$DA$I(null, key, p$1.setRigidBodyPhase$S$DA.apply(this, [key, Clazz.array(Double.TYPE, -1, [csin, ccos, 0])]), -1);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.XYZ=Clazz.array(String, -1, ["x", "y", "z"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
