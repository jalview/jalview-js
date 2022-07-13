(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.cif"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.PT','org.jmol.util.Logger','java.util.Hashtable','javajs.util.Lst','org.jmol.util.Escape','javajs.util.Matrix','org.jmol.util.Modulation','org.jmol.adapter.readers.cif.Subsystem','javajs.util.M3','org.jmol.util.ModulationSet','org.jmol.util.BoxInfo','org.jmol.util.BSUtil','org.jmol.adapter.smarter.AtomSetCollectionReader']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MSRdr", null, null, 'org.jmol.adapter.smarter.MSInterface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.modSelected=-1;
this.iopLast=-1;
this.atModel="@0";
},1);

C$.$fields$=[['Z',['modAverage','isCommensurate','modPack','modVib','modDebug','modLast','haveOccupancy','haveAtomMods','modCoord','finalized'],'I',['modDim','commensurateSection1','modSelected','iopLast','nOps','ac','modCount'],'S',['modAxes','modType','modCell','atModel'],'O',['cr','org.jmol.adapter.smarter.AtomSetCollectionReader','sigma','javajs.util.Matrix','htModulation','java.util.Map','+htAtomMods','gammaE','javajs.util.M3','atoms','org.jmol.adapter.smarter.Atom[]','symmetry','org.jmol.api.SymmetryInterface','+supercellSymmetry','legendres','javajs.util.Lst','modMatrices','javajs.util.Matrix[]','qlist100','double[]','qs','javajs.util.P3[]','modTUV','javajs.util.T3','htSubsystems','java.util.Map','minXYZ0','javajs.util.P3','+maxXYZ0']]]

Clazz.newMeth(C$, 'getSigma$', function () {
return this.sigma;
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initialize$org_jmol_adapter_smarter_AtomSetCollectionReader$I', function (r, modDim) {
this.cr=r;
this.modCoord=r.checkFilterKey$S("MODCOORD");
this.modDebug=r.checkFilterKey$S("MODDEBUG");
this.modPack=!r.checkFilterKey$S("MODNOPACK");
this.modLast=r.checkFilterKey$S("MODLAST");
this.modAxes=r.getFilter$S("MODAXES=");
this.modType=r.getFilter$S("MODTYPE=");
this.modCell=r.getFilter$S("MODCELL=");
this.modSelected=r.parseIntStr$S("" + r.getFilter$S("MOD="));
this.modVib=r.checkFilterKey$S("MODVIB");
this.modAverage=r.checkFilterKey$S("MODAVE");
var smodTUV=r.getFilter$S("MODT=");
if (smodTUV != null  || (smodTUV=r.getFilter$S("MODTUV=")) != null  ) {
this.modTUV=Clazz.new_($I$(1,1));
var tuv=($I$(2,"replaceAllCharacters$S$S$S",[smodTUV, "{}()", ""]) + ",0,0,0").split$S(",");
this.modTUV.x=$I$(2).parseFloatFraction$S(tuv[0]);
this.modTUV.y=$I$(2).parseFloatFraction$S(tuv[1]);
this.modTUV.z=$I$(2).parseFloatFraction$S(tuv[2]);
if (Float.isNaN$F(this.modTUV.lengthSquared$())) {
$I$(3,"error$S",["MSRdr cannot read modTUV=" + smodTUV]);
this.modTUV=null;
}}this.setModDim$I(modDim);
return modDim;
});

Clazz.newMeth(C$, 'setSubsystemOptions', function () {
this.cr.forceSymmetry$Z(this.modPack);
if (this.modCell != null ) this.cr.addJmolScript$S("unitcell {%" + this.modCell + "}" );
}, p$1);

Clazz.newMeth(C$, 'setModDim$I', function (ndim) {
this.htModulation=Clazz.new_($I$(4,1));
this.modDim=ndim;
this.cr.appendLoadNote$S("Modulation dimension = " + this.modDim);
});

Clazz.newMeth(C$, 'addModulation$java_util_Map$S$DA$I', function (map, id, pt, iModel) {
var ch=id.charAt$I(0);
switch (ch.$c()) {
case 79:
case 68:
case 77:
case 85:
if (this.modType != null  && this.modType.indexOf$I(ch) < 0  || this.modSelected > 0 && this.modSelected != 1  ) return;
break;
}
var isOK=false;
for (var i=pt.length; --i >= 0; ) {
if (this.modSelected > 0 && i + 1 != this.modSelected  && id.contains$CharSequence("_coefs_") ) {
pt[i]=0;
} else if (pt[i] != 0 ) {
isOK=true;
break;
}}
if (!isOK) return;
if (map == null ) map=this.htModulation;
if (id.indexOf$S("@") < 0) id += "@" + (iModel >= 0 ? iModel : this.cr.asc.iSet);
if (id.startsWith$S("D_L#") || id.startsWith$S("U_L") ) {
if (this.legendres == null ) this.legendres=Clazz.new_($I$(5,1));
this.legendres.addLast$O(id);
}$I$(3,"info$S",["Adding " + id + " " + $I$(6).e$O(pt) ]);
map.put$O$O(id, pt);
});

Clazz.newMeth(C$, 'setModulation$Z$org_jmol_api_SymmetryInterface', function (isPost, symmetry) {
if (this.modDim == 0 || this.htModulation == null  ) return;
if (this.modDebug) $I$(3).debugging=$I$(3).debuggingHigh=true;
this.cr.asc.setInfo$S$O("someModelsAreModulated", Boolean.TRUE);
this.symmetry=symmetry;
p$1.setModulationForStructure$I$Z.apply(this, [this.cr.asc.iSet, isPost]);
if (this.modDebug) $I$(3).debugging=$I$(3).debuggingHigh=false;
});

Clazz.newMeth(C$, 'finalizeModulation$', function () {
if (!this.finalized && this.modDim > 0  && !this.modVib ) {
if (this.modTUV != null ) this.cr.appendLoadNote$S("modTUV=" + this.modTUV);
this.cr.asc.setInfo$S$O("modulationOn", this.modTUV == null  ? Boolean.TRUE : this.modTUV);
this.cr.addJmolScript$S("set modulateOccupancy " + (this.haveOccupancy && !this.isCommensurate  ? true : false));
}this.finalized=true;
});

Clazz.newMeth(C$, 'checkKey$S$Z', function (key, checkQ) {
var pt=key.indexOf$S(this.atModel);
return (pt < 0 || key.indexOf$S("_pos#") >= 0  || key.indexOf$S("*;*") >= 0  || checkQ && key.indexOf$S("?") >= 0   ? null : key.substring$I$I(0, pt));
}, p$1);

Clazz.newMeth(C$, 'getMod$S', function (key) {
return this.htModulation.get$O(key + this.atModel);
});

Clazz.newMeth(C$, 'getModulationMap$', function () {
return this.htModulation;
});

Clazz.newMeth(C$, 'setModulationForStructure$I$Z', function (iModel, isPost) {
this.atModel="@" + iModel;
if (this.htModulation.containsKey$O("X_" + this.atModel)) return;
if (!isPost) {
p$1.initModForStructure$I.apply(this, [iModel]);
return;
}this.htModulation.put$O$O("X_" + this.atModel, Clazz.array(Double.TYPE, [0]));
this.cr.appendLoadNote$S(this.modCount + " modulations for " + this.ac + " modulated atoms" );
if (!this.haveAtomMods) return;
var n=this.cr.asc.ac;
this.atoms=this.cr.asc.atoms;
if (this.symmetry != null ) this.nOps=this.symmetry.getSpaceGroupOperationCount$();
this.supercellSymmetry=this.cr.asc.getXSymmetry$().symmetry;
if (this.supercellSymmetry === this.symmetry ) this.supercellSymmetry=null;
this.iopLast=-1;
var i0=this.cr.asc.getLastAtomSetAtomIndex$();
for (var i=i0; i < n; i++) p$1.modulateAtom$org_jmol_adapter_smarter_Atom.apply(this, [this.atoms[i]]);

this.htAtomMods=null;
if (this.minXYZ0 != null ) p$1.trimAtomSet.apply(this, []);
this.htSubsystems=null;
}, p$1);

Clazz.newMeth(C$, 'initModForStructure$I', function (iModel) {
var key;
if (this.legendres != null ) p$1.fixLegendre.apply(this, []);
this.sigma=Clazz.new_($I$(7,1).c$$DAA$I$I,[null, this.modDim, 3]);
this.qs=null;
this.modMatrices=Clazz.array($I$(7), -1, [this.sigma, null]);
var pt;
for (var i=0; i < this.modDim; i++) {
pt=this.getMod$S("W_" + (i + 1));
if (pt == null ) {
this.cr.appendLoadNote$S("NOTE!: Not enough cell wave vectors for d=" + this.modDim);
return;
}p$1.fixDouble$DA.apply(this, [pt]);
this.cr.appendLoadNote$S("W_" + (i + 1) + " = " + $I$(6).e$O(pt) );
this.cr.appendUunitCellInfo$S("q" + (i + 1) + "=" + new Double(pt[0]).toString() + " " + new Double(pt[1]).toString() + " " + new Double(pt[2]).toString() );
this.sigma.getArray$()[i]=Clazz.array(Double.TYPE, -1, [pt[0], pt[1], pt[2]]);
}
var map=Clazz.new_($I$(4,1));
for (var e, $e = this.htModulation.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if ((key=p$1.checkKey$S$Z.apply(this, [e.getKey$(), false])) == null ) continue;
pt=e.getValue$();
switch ((key.charCodeAt$I(0))) {
case 79:
this.haveOccupancy=true;
case 68:
case 77:
case 85:
if (pt[2] == 1  && key.charAt$I(2) != "S"  && key.charAt$I(2) != "T"  && key.charAt$I(2) != "L" ) {
var ipt=key.indexOf$S("?");
if (ipt >= 0) {
var s=key.substring$I(ipt + 1);
pt=this.getMod$S(key.substring$I$I(0, 2) + s + "#*;*" );
if (pt != null ) this.addModulation$java_util_Map$S$DA$I(map, key=key.substring$I$I(0, ipt), pt, iModel);
} else {
var a=pt[0];
var d=2 * 3.141592653589793 * pt[1] ;
pt[0]=(a * Math.cos(d));
pt[1]=(a * Math.sin(-d));
pt[2]=0;
$I$(3,"info$S",["msCIF setting " + key + " " + $I$(6).e$O(pt) ]);
}}break;
case 87:
if (this.modDim > 1) {
continue;
}case 70:
if (key.indexOf$S("_coefs_") >= 0) {
this.cr.appendLoadNote$S("Wave vector " + key + "=" + $I$(6).eAD$DA(pt) );
} else {
var ptHarmonic=p$1.calculateQCoefs$DA.apply(this, [pt]);
if (ptHarmonic == null ) {
this.cr.appendLoadNote$S("Cannot match atom wave vector " + key + " " + $I$(6).eAD$DA(pt) + " to a cell wave vector or its harmonic" );
} else {
var k2=key + "_coefs_";
if (!this.htModulation.containsKey$O(k2 + this.atModel)) {
this.addModulation$java_util_Map$S$DA$I(map, k2, ptHarmonic, iModel);
if (key.startsWith$S("F_")) this.cr.appendLoadNote$S("atom wave vector " + key + " = " + $I$(6).e$O(pt) + " fn = " + $I$(6).e$O(ptHarmonic) );
}}}break;
}
}
if (!map.isEmpty$()) this.htModulation.putAll$java_util_Map(map);
if (this.htSubsystems == null ) {
this.haveAtomMods=false;
} else {
this.cr.strSupercell=null;
this.haveAtomMods=true;
this.htAtomMods=Clazz.new_($I$(4,1));
}for (var e, $e = this.htModulation.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if ((key=p$1.checkKey$S$Z.apply(this, [e.getKey$(), true])) == null ) continue;
var params=e.getValue$();
var atomName=key.substring$I(key.indexOf$S(";") + 1);
var pt_=atomName.indexOf$S("#=");
if (pt_ >= 0) {
params=this.getMod$S(atomName.substring$I(pt_ + 2));
atomName=atomName.substring$I$I(0, pt_);
}if ($I$(3).debuggingHigh) $I$(3,"debug$S",["SetModulation: " + key + " " + $I$(6).e$O(params) ]);
var type=key.charAt$I(0);
pt_=key.indexOf$S("#") + 1;
var utens=null;
switch (type.$c()) {
case 85:
utens=key.substring$I$I(pt_, key.indexOf$S(";"));
case 79:
case 68:
case 77:
if (this.modAverage) break;
var axis=key.charAt$I(pt_);
type=this.getModType$S(key);
if (this.htAtomMods == null ) this.htAtomMods=Clazz.new_($I$(4,1));
var p=Clazz.array(Double.TYPE, [params.length]);
for (var i=p.length; --i >= 0; ) p[i]=params[i];

var qcoefs=this.getQCoefs$S(key);
if (qcoefs == null ) throw Clazz.new_(Clazz.load('Exception').c$$S,["Missing cell wave vector for atom wave vector for " + key + " " + $I$(6).e$O(params) ]);
p$1.addAtomModulation$S$C$C$DA$S$DA.apply(this, [atomName, axis, type, p, utens, qcoefs]);
this.haveAtomMods=true;
break;
}
}
}, p$1);

Clazz.newMeth(C$, 'fixLegendre', function () {
for (var i=this.legendres.size$(); --i >= 0; ) {
var key=this.legendres.get$I(i);
var pt=this.htModulation.get$O(key);
if (pt != null ) {
var key1="O_0#0" + key.substring$I(key.indexOf$S(";"));
var pt1=this.htModulation.get$O(key1);
if (pt1 == null ) {
$I$(3).error$S("Crenel " + key1 + " not found for legendre modulation " + key );
pt[2]=NaN;
} else {
this.htModulation.put$O$O(key, Clazz.array(Double.TYPE, -1, [pt1[0], pt1[1], pt[0], pt[1]]));
}}}
}, p$1);

Clazz.newMeth(C$, 'fixDouble$DA', function (pt) {
if (this.cr.fixJavaFloat) for (var i=pt.length; --i >= 0; ) pt[i]=$I$(2).fixDouble$D$D(pt[i], 100000.0);

}, p$1);

Clazz.newMeth(C$, 'getQCoefs$S', function (key) {
var fn=Math.max(0, this.cr.parseIntAt$S$I(key, 2));
if (fn == 0) {
if (this.qlist100 == null ) {
this.qlist100=Clazz.array(Double.TYPE, [this.modDim]);
this.qlist100[0]=1;
}return this.qlist100;
}return this.getMod$S("F_coefs_" + fn);
});

Clazz.newMeth(C$, 'getModType$S', function (key) {
var type=key.charAt$I(0);
var id=key.charAt$I(2);
return (id == "S" ? "s" : id == "T" ? "t" : id == "L" ? (type == "D" ? "l" : "L") : id == "0" ? "c" : type == "D" ? "f" : type == "O" ? "o" : type == "M" ? "m" : type == "U" ? "u" : "?");
});

Clazz.newMeth(C$, 'calculateQCoefs$DA', function (p) {
if (this.qs == null ) {
this.qs=Clazz.array($I$(1), [this.modDim]);
for (var i=0; i < this.modDim; i++) {
this.qs[i]=p$1.toP3$DA.apply(this, [this.getMod$S("W_" + (i + 1))]);
}
}var pt=p$1.toP3$DA.apply(this, [p]);
for (var i=0; i < this.modDim; i++) if (this.qs[i] != null ) {
var ifn=p$1.approxInt$F.apply(this, [pt.dot$javajs_util_T3(this.qs[i]) / this.qs[i].dot$javajs_util_T3(this.qs[i])]);
if (ifn != 0) {
p=Clazz.array(Double.TYPE, [this.modDim]);
p[i]=ifn;
return p;
}}
var p3=p$1.toP3$DA.apply(this, [p]);
var jmin=(this.modDim < 2 ? 0 : -3);
var jmax=(this.modDim < 2 ? 0 : 3);
var kmin=(this.modDim < 3 ? 0 : -3);
var kmax=(this.modDim < 3 ? 0 : 3);
for (var i=-3; i <= 3; i++) for (var j=jmin; j <= jmax; j++) for (var k=kmin; k <= kmax; k++) {
pt.setT$javajs_util_T3(this.qs[0]);
pt.scale$F(i);
if (this.modDim > 1 && this.qs[1] != null  ) pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(j, this.qs[1], pt);
if (this.modDim > 2 && this.qs[2] != null  ) pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(k, this.qs[2], pt);
if (pt.distanceSquared$javajs_util_T3(p3) < 1.0E-4 ) {
p=Clazz.array(Double.TYPE, [this.modDim]);
switch (this.modDim) {
default:
p[2]=k;
case 2:
p[1]=j;
case 1:
p[0]=i;
break;
}
return p;
}pt.setT$javajs_util_T3(this.qs[0]);
pt.scale$F(1.0 / i);
if (this.modDim > 1 && this.qs[1] != null  ) pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(1.0 / j, this.qs[1], pt);
if (this.modDim > 2 && this.qs[2] != null  ) pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(1.0 / k, this.qs[2], pt);
if (pt.distanceSquared$javajs_util_T3(p3) < 1.0E-4 ) {
p=Clazz.array(Double.TYPE, [this.modDim]);
switch (this.modDim) {
default:
p[2]=1.0 / k;
case 2:
p[1]=1.0 / j;
case 1:
p[0]=1.0 / i;
break;
}
return p;
}}


pt=p$1.toP3$DA.apply(this, [p]);
for (var i=0; i < this.modDim; i++) if (this.qs[i] != null ) {
p3=this.qs[i];
var ifn=0;
if (pt.x != 0 ) ifn=p$1.approxInt$F.apply(this, [pt.x / p3.x]);
if (pt.y != 0 ) ifn=Math.max(p$1.approxInt$F.apply(this, [pt.y / p3.y]), ifn);
if (ifn == 0 && pt.z != 0  ) ifn=Math.max(p$1.approxInt$F.apply(this, [pt.z / p3.z]), ifn);
if (ifn == 0) continue;
if (p3.x != 0  && p$1.approxInt$F.apply(this, [10 + p3.x * ifn - pt.x]) == 0  || p3.y != 0  && p$1.approxInt$F.apply(this, [10 + p3.y * ifn - pt.y]) == 0   || p3.z != 0  && p$1.approxInt$F.apply(this, [10 + p3.z * ifn - pt.z]) == 0  ) continue;
p=Clazz.array(Double.TYPE, [this.modDim]);
p[i]=ifn;
return p;
}
return null;
}, p$1);

Clazz.newMeth(C$, 'approxInt$F', function (fn) {
var ifn=Math.round(fn);
return (Math.abs(fn - ifn) < 0.001  ? ifn : 0);
}, p$1);

Clazz.newMeth(C$, 'toP3$DA', function (x) {
return $I$(1).new3$F$F$F(x[0], x[1], x[2]);
}, p$1);

Clazz.newMeth(C$, 'addAtomModulation$S$C$C$DA$S$DA', function (atomName, axis, type, params, utens, qcoefs) {
var list=this.htAtomMods.get$O(atomName);
if (list == null ) {
this.ac++;
this.htAtomMods.put$O$O(atomName, list=Clazz.new_($I$(5,1)));
}list.addLast$O(Clazz.new_($I$(8,1).c$$C$C$DA$S$DA,[axis, type, params, utens, qcoefs]));
this.modCount++;
}, p$1);

Clazz.newMeth(C$, 'addSubsystem$S$javajs_util_Matrix', function (code, w) {
if (code == null ) return;
var ss=Clazz.new_($I$(9,1).c$$org_jmol_adapter_readers_cif_MSRdr$S$javajs_util_Matrix,[this, code, w]);
this.cr.appendLoadNote$S("subsystem " + code + "\n" + w );
p$1.setSubsystem$S$org_jmol_adapter_readers_cif_Subsystem.apply(this, [code, ss]);
});

Clazz.newMeth(C$, 'addUStr$org_jmol_adapter_smarter_Atom$S$F', function (atom, id, val) {
var i=("U11U22U33U12U13U23UISO".indexOf$S(id)/3|0);
if ($I$(3).debuggingHigh) $I$(3,"debug$S",["MOD RDR adding " + id + " " + i + " " + new Float(val).toString() + " to " + new Float(atom.anisoBorU[i]).toString() ]);
this.cr.asc.setU$org_jmol_adapter_smarter_Atom$I$F(atom, i, val + atom.anisoBorU[i]);
}, p$1);

Clazz.newMeth(C$, 'modulateAtom$org_jmol_adapter_smarter_Atom', function (a) {
if (this.modCoord && this.htSubsystems != null  ) {
var ptc=$I$(1).newP$javajs_util_T3(a);
var spt=p$1.getSymmetry$org_jmol_adapter_smarter_Atom.apply(this, [a]);
spt.toCartesian$javajs_util_T3$Z(ptc, true);
}var list=this.htAtomMods.get$O(a.atomName);
if (list == null  && a.altLoc != "\u0000"  && this.htSubsystems != null  ) {
list=Clazz.new_($I$(5,1));
}if (list == null  || this.symmetry == null   || a.bsSymmetry == null  ) return;
var iop=Math.max(a.bsSymmetry.nextSetBit$I(0), 0);
if (this.modLast) iop=Math.max((a.bsSymmetry.length$() - 1) % this.nOps, iop);
if ($I$(3).debuggingHigh) $I$(3,"debug$S",["\nsetModulation: i=" + a.index + " " + a.atomName + " xyz=" + a + " occ=" + new Float(a.foccupancy).toString() ]);
if (iop != this.iopLast) {
this.iopLast=iop;
this.gammaE=Clazz.new_($I$(10,1));
p$1.getSymmetry$org_jmol_adapter_smarter_Atom.apply(this, [a]).getSpaceGroupOperation$I(iop).getRotationScale$javajs_util_M3(this.gammaE);
}if ($I$(3).debugging) {
$I$(3,"debug$S",["setModulation iop = " + iop + " " + this.symmetry.getSpaceGroupXyz$I$Z(iop, false) + " " + a.bsSymmetry ]);
}var ms=Clazz.new_($I$(11,1)).setMod$S$javajs_util_P3$javajs_util_P3$I$javajs_util_Lst$javajs_util_M3$javajs_util_MatrixA$org_jmol_api_SymmetryInterface$I$I$org_jmol_util_Vibration$Z(a.index + " " + a.atomName , p$1.getAtomR0$org_jmol_adapter_smarter_Atom.apply(this, [this.cr.asc.atoms[a.atomSite]]), p$1.getAtomR0$org_jmol_adapter_smarter_Atom.apply(this, [a]), this.modDim, list, this.gammaE, p$1.getMatrices$org_jmol_adapter_smarter_Atom.apply(this, [a]), p$1.getSymmetry$org_jmol_adapter_smarter_Atom.apply(this, [a]), this.nOps, iop, Clazz.instanceOf(a.vib, "org.jmol.util.Vibration") ? a.vib : null, this.isCommensurate);
ms.calculate$javajs_util_T3$Z(this.modTUV, false);
if (!Float.isNaN$F(ms.vOcc)) {
a.foccupancy=ms.setOccupancy$DA$D$D(this.getMod$S("J_O#0;" + a.atomName), a.foccupancy, (a.vib == null  ? 0 : a.vib.x));
}if (ms.htUij != null ) {
var t=(a.tensors == null  ? null : a.tensors.get$I(0));
if (t != null  && t.parBorU != null  ) {
a.anisoBorU=Clazz.array(Float.TYPE, [8]);
for (var i=0; i < 8; i++) a.anisoBorU[i]=t.parBorU[i];

t.isUnmodulated=true;
}if (a.anisoBorU == null ) {
$I$(3).error$S("MOD RDR cannot modulate nonexistent atom anisoBorU for atom " + a.atomName);
} else {
if ($I$(3).debuggingHigh) {
$I$(3,"debug$S",["setModulation Uij(initial)=" + $I$(6).eAF$FA(a.anisoBorU)]);
$I$(3,"debug$S",["setModulation tensor=" + $I$(6,"e$O",[(a.tensors.get$I(0)).getInfo$S("all")])]);
}for (var e, $e = ms.htUij.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) p$1.addUStr$org_jmol_adapter_smarter_Atom$S$F.apply(this, [a, e.getKey$(), e.getValue$().floatValue$()]);

var sym=this.getAtomSymmetry$org_jmol_adapter_smarter_Atom$org_jmol_api_SymmetryInterface(a, this.symmetry);
t=this.cr.asc.getXSymmetry$().addRotatedTensor$org_jmol_adapter_smarter_Atom$org_jmol_util_Tensor$I$Z$org_jmol_api_SymmetryInterface(a, sym.getTensor$org_jmol_viewer_Viewer$FA(this.cr.vwr, a.anisoBorU), iop, false, sym);
t.isModulated=true;
t.id=$I$(6).e$O(a.anisoBorU);
a.bfactor=a.anisoBorU[7] * 100.0;
a.anisoBorU=null;
if ($I$(3).debuggingHigh) {
$I$(3,"debug$S",["setModulation Uij(final)=" + $I$(6).eAF$FA(a.anisoBorU) + "\n" ]);
$I$(3,"debug$S",["setModulation tensor=" + $I$(6,"e$O",[(a.tensors.get$I(1)).getInfo$S("all")])]);
}}}if (Float.isNaN$F(ms.x)) ms.set$F$F$F(0, 0, 0);
a.vib=ms;
}, p$1);

Clazz.newMeth(C$, 'getAtomR0$org_jmol_adapter_smarter_Atom', function (atom) {
var r0=$I$(1).newP$javajs_util_T3(atom);
if (this.supercellSymmetry != null ) {
this.supercellSymmetry.toCartesian$javajs_util_T3$Z(r0, true);
this.symmetry.toFractional$javajs_util_T3$Z(r0, true);
}return r0;
}, p$1);

Clazz.newMeth(C$, 'getAtomSymmetry$org_jmol_adapter_smarter_Atom$org_jmol_api_SymmetryInterface', function (a, defaultSymmetry) {
var ss;
return (this.htSubsystems == null  || (ss=p$1.getSubsystem$org_jmol_adapter_smarter_Atom.apply(this, [a])) == null   ? defaultSymmetry : ss.getSymmetry$());
});

Clazz.newMeth(C$, 'setSubsystem$S$org_jmol_adapter_readers_cif_Subsystem', function (code, system) {
if (this.htSubsystems == null ) this.htSubsystems=Clazz.new_($I$(4,1));
this.htSubsystems.put$O$O(code, system);
p$1.setSubsystemOptions.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getMatrices$org_jmol_adapter_smarter_Atom', function (a) {
var ss=p$1.getSubsystem$org_jmol_adapter_smarter_Atom.apply(this, [a]);
return (ss == null  ? this.modMatrices : ss.getModMatrices$());
}, p$1);

Clazz.newMeth(C$, 'getSymmetry$org_jmol_adapter_smarter_Atom', function (a) {
var ss=p$1.getSubsystem$org_jmol_adapter_smarter_Atom.apply(this, [a]);
return (ss == null  ? this.symmetry : ss.getSymmetry$());
}, p$1);

Clazz.newMeth(C$, 'getSubsystem$org_jmol_adapter_smarter_Atom', function (a) {
return (this.htSubsystems == null  ? null : this.htSubsystems.get$O("" + a.altLoc));
}, p$1);

Clazz.newMeth(C$, 'setMinMax0$javajs_util_P3$javajs_util_P3', function (minXYZ, maxXYZ) {
if (this.htSubsystems == null ) return;
var symmetry=p$1.getDefaultUnitCell.apply(this, []);
this.minXYZ0=$I$(1).newP$javajs_util_T3(minXYZ);
this.maxXYZ0=$I$(1).newP$javajs_util_T3(maxXYZ);
var pt0=$I$(1).newP$javajs_util_T3(minXYZ);
var pt1=$I$(1).newP$javajs_util_T3(maxXYZ);
var pt=Clazz.new_($I$(1,1));
symmetry.toCartesian$javajs_util_T3$Z(pt0, true);
symmetry.toCartesian$javajs_util_T3$Z(pt1, true);
var pts=$I$(12).unitCubePoints;
if (this.sigma == null ) {
$I$(3).error$S("Why are we in MSRdr.setMinMax0 without modulation init?");
return;
}for (var e, $e = this.htSubsystems.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var sym=e.getValue$().getSymmetry$();
for (var i=8; --i >= 0; ) {
pt.x=(pts[i].x == 0  ? pt0.x : pt1.x);
pt.y=(pts[i].y == 0  ? pt0.y : pt1.y);
pt.z=(pts[i].z == 0  ? pt0.z : pt1.z);
p$1.expandMinMax$javajs_util_P3$org_jmol_api_SymmetryInterface$javajs_util_P3$javajs_util_P3.apply(this, [pt, sym, minXYZ, maxXYZ]);
}
}
});

Clazz.newMeth(C$, 'expandMinMax$javajs_util_P3$org_jmol_api_SymmetryInterface$javajs_util_P3$javajs_util_P3', function (pt, sym, minXYZ, maxXYZ) {
var pt2=$I$(1).newP$javajs_util_T3(pt);
var slop=1.0E-4;
sym.toFractional$javajs_util_T3$Z(pt2, false);
if (minXYZ.x > pt2.x + slop ) minXYZ.x=(Math.floor(pt2.x)|0) - 1;
if (minXYZ.y > pt2.y + slop ) minXYZ.y=(Math.floor(pt2.y)|0) - 1;
if (minXYZ.z > pt2.z + slop ) minXYZ.z=(Math.floor(pt2.z)|0) - 1;
if (maxXYZ.x < pt2.x - slop ) maxXYZ.x=(Math.ceil(pt2.x)|0) + 1;
if (maxXYZ.y < pt2.y - slop ) maxXYZ.y=(Math.ceil(pt2.y)|0) + 1;
if (maxXYZ.z < pt2.z - slop ) maxXYZ.z=(Math.ceil(pt2.z)|0) + 1;
}, p$1);

Clazz.newMeth(C$, 'trimAtomSet', function () {
if (!this.cr.doApplySymmetry) return;
var asc=this.cr.asc;
var bs=asc.bsAtoms;
var sym=p$1.getDefaultUnitCell.apply(this, []);
var atoms=asc.atoms;
var pt=Clazz.new_($I$(1,1));
if (bs == null ) bs=asc.bsAtoms=$I$(13).newBitSet2$I$I(0, asc.ac);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var a=atoms[i];
var isOK=(!this.isCommensurate || this.modAverage || a.foccupancy >= 0.5   );
if (isOK) {
pt.setT$javajs_util_T3(a);
if (a.vib != null ) pt.add$javajs_util_T3(a.vib);
p$1.getSymmetry$org_jmol_adapter_smarter_Atom.apply(this, [a]).toCartesian$javajs_util_T3$Z(pt, false);
sym.toFractional$javajs_util_T3$Z(pt, false);
if (this.cr.fixJavaFloat) $I$(2).fixPtFloats$javajs_util_T3$F(pt, 100000.0);
isOK=asc.xtalSymmetry.isWithinCell$I$javajs_util_P3$F$F$F$F$F$F$F(3, pt, this.minXYZ0.x, this.maxXYZ0.x, this.minXYZ0.y, this.maxXYZ0.y, this.minXYZ0.z, this.maxXYZ0.z, 0.001);
}if (isOK) {
if (this.cr.fixJavaFloat) $I$(2).fixPtFloats$javajs_util_T3$F(a, 100000.0);
} else {
bs.clear$I(i);
}}
}, p$1);

Clazz.newMeth(C$, 'getDefaultUnitCell', function () {
return (this.modCell != null  && this.htSubsystems.containsKey$O(this.modCell)  ? this.htSubsystems.get$O(this.modCell).getSymmetry$() : this.cr.asc.getSymmetry$());
}, p$1);

Clazz.newMeth(C$, 'getSymmetryFromCode$S', function (code) {
return this.htSubsystems.get$O(code).getSymmetry$();
});

Clazz.newMeth(C$, 'addLatticeVector$javajs_util_Lst$S', function (lattvecs, data) {
var a=null;
var c=data.charAt$I(0);
var dim=this.modDim + 3;
switch (c.$c()) {
case 80:
case 88:
break;
case 65:
case 66:
case 67:
case 73:
a=Clazz.array(Float.TYPE, -1, [0.5, 0.5, 0.5]);
if (c != "I") a[c.$c() - 65]=0;
break;
case 70:
this.addLatticeVector$javajs_util_Lst$S(lattvecs, "A");
this.addLatticeVector$javajs_util_Lst$S(lattvecs, "B");
this.addLatticeVector$javajs_util_Lst$S(lattvecs, "C");
break;
case 77:
dim++;
case 48:
if (data.indexOf$S(".") >= 0) a=$I$(14).getTokensFloat$S$FA$I(data, null, dim);
break;
default:
return false;
}
if (a != null ) lattvecs.addLast$O(a);
return true;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
