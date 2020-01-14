(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.simple"),p$1={},I$=[[0,'org.jmol.adapter.smarter.Atom','org.jmol.api.JmolAdapter','javajs.util.P3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MopacArchiveReader", null, 'org.jmol.adapter.readers.simple.InputReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.energyWithUnits=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.asc.newAtomSet$();
if (!this.checkFilterKey$S("NOCENTER")) this.doCentralize=true;
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.indexOf$S("=") == 34) return p$1.getMyValue.apply(this, []);
if (this.line.indexOf$S("FINAL GEOMETRY OBTAINED") >= 0) return p$1.readCoordinates.apply(this, []);
return true;
});

Clazz.newMeth(C$, 'getMyValue', function () {
if (this.line.substring$I$I(0, 10).trim$().length$() != 0) return true;
var key=this.line.substring$I$I(0, 34).trim$().replace$C$C(" ", "_");
var value=this.line.substring$I(35).trim$();
this.asc.setCurrentModelInfo$S$O(key, value);
if (this.line.indexOf$S("TOTAL ENERGY") >= 0) {
var tokens=this.getTokens$();
this.energyWithUnits=" (" + tokens[3] + " " + tokens[4] + ")" ;
this.asc.setAtomSetEnergy$S$F(tokens[3], this.parseFloatStr$S(tokens[3]));
}return true;
}, p$1);

Clazz.newMeth(C$, 'readCoordinates', function () {
this.rd$();
this.line=this.rd$().trim$();
this.asc.setAtomSetName$S(this.line + (this.energyWithUnits == null  ? "" : this.energyWithUnits));
this.rd$();
var atom=null;
var sym=null;
this.setFractionalCoordinates$Z(false);
while (this.rd$() != null  && this.line.length$() >= 50 ){
this.vAtoms.addLast$TV(atom=Clazz.new_($I$(1)));
atom.x=this.parseFloatRange$S$I$I(this.line, 5, 18);
atom.y=this.parseFloatRange$S$I$I(this.line, 21, 34);
atom.z=this.parseFloatRange$S$I$I(this.line, 37, 50);
if (this.line.length$() > 58 && this.line.charAt$I(58) != " " ) {
switch (this.ac) {
case 0:
break;
case 1:
atom.sub$javajs_util_T3(this.vAtoms.get$I(0));
break;
case 2:
this.setAtom$org_jmol_adapter_smarter_Atom$I$I$I$F$F$F(atom, 0, 1, 0, atom.x, atom.y, 3.4028235E38);
break;
default:
this.setAtom$org_jmol_adapter_smarter_Atom$I$I$I$F$F$F(atom, this.parseIntRange$S$I$I(this.line, 54, 59) - 1, this.parseIntRange$S$I$I(this.line, 60, 65) - 1, this.parseIntRange$S$I$I(this.line, 66, 71) - 1, atom.x, atom.y, atom.z);
}
}sym=this.line.substring$I$I(1, 3).trim$();
atom.elementSymbol=sym;
if (!sym.equals$O("Tv")) {
this.ac++;
if (this.line.length$() >= 84) atom.partialCharge=this.parseFloatRange$S$I$I(this.line, 76, 84);
if ($I$(2).getElementNumber$S(sym) != 0) this.asc.addAtom$org_jmol_adapter_smarter_Atom(atom);
this.setAtomCoord$org_jmol_adapter_smarter_Atom(atom);
}}
if (sym.equals$O("Tv")) {
this.setSpaceGroupName$S("P1");
var nTv=this.vAtoms.size$() - this.ac;
for (var i=nTv; i < 3; i++) this.vAtoms.addLast$TV(Clazz.new_($I$(1)));

var xyz=Clazz.array(Float.TYPE, [9]);
for (var i=0; i < 3; i++) {
var j=i * 3;
atom=this.vAtoms.get$I(this.ac + i);
if (!Float.isNaN$F(atom.x)) {
xyz[j]=atom.x;
xyz[j + 1]=atom.y;
xyz[j + 2]=atom.z;
}this.addExplicitLatticeVector$I$FA$I(i, xyz, j);
}
for (var i=this.ac; --i >= 0; ) this.setAtomCoord$org_jmol_adapter_smarter_Atom(this.vAtoms.get$I(i));

var ptMax=$I$(3).new3$F$F$F(-3.4028235E38, -3.4028235E38, -3.4028235E38);
var ptMin=$I$(3).new3$F$F$F(3.4028235E38, 3.4028235E38, 3.4028235E38);
if (this.doCentralize) {
for (var i=this.ac; --i >= 0; ) {
atom=this.vAtoms.get$I(i);
ptMax.x=Math.max(ptMax.x, atom.x);
ptMax.y=Math.max(ptMax.y, atom.y);
ptMax.z=Math.max(ptMax.z, atom.z);
ptMin.x=Math.min(ptMin.x, atom.x);
ptMin.y=Math.min(ptMin.y, atom.y);
ptMin.z=Math.min(ptMin.z, atom.z);
}
var ptCenter=Clazz.new_($I$(3));
switch (nTv) {
case 3:
ptCenter.x=0.5;
case 2:
ptCenter.y=0.5;
case 1:
ptCenter.z=0.5;
}
ptCenter.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-0.5, ptMin, ptCenter);
ptCenter.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-0.5, ptMax, ptCenter);
for (var i=this.ac; --i >= 0; ) this.vAtoms.get$I(i).add$javajs_util_T3(ptCenter);

}this.doCentralize=false;
}return true;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
