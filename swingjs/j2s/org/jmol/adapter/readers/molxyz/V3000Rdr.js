(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.molxyz"),p$1={},I$=[[0,'javajs.util.PT','java.util.Hashtable']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "V3000Rdr");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['line'],'O',['mr','org.jmol.adapter.readers.molxyz.MolReader','userData','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_adapter_smarter_AtomSetCollectionReader', function (mr) {
this.mr=mr;
return this;
});

Clazz.newMeth(C$, 'readAtomsAndBonds$SA', function (tokens) {
var ac=this.mr.parseIntStr$S(tokens[3]);
p$1.readAtoms$I.apply(this, [ac]);
p$1.readBonds$I.apply(this, [this.mr.parseIntStr$S(tokens[4])]);
p$1.readUserData$I.apply(this, [ac]);
});

Clazz.newMeth(C$, 'readAtoms$I', function (ac) {
this.mr.discardLinesUntilContains$S("BEGIN ATOM");
for (var i=0; i < ac; ++i) {
p$1.rd.apply(this, []);
p$1.checkLineContinuation.apply(this, []);
var tokens=this.mr.getTokens$();
var iAtom=this.mr.parseIntStr$S(tokens[2]);
var elementSymbol=tokens[3];
if (elementSymbol.equals$O("*")) continue;
var x=this.mr.parseFloatStr$S(tokens[4]);
var y=this.mr.parseFloatStr$S(tokens[5]);
var z=this.mr.parseFloatStr$S(tokens[6]);
var charge=0;
var isotope=0;
for (var j=7; j < tokens.length; j++) {
var s=tokens[j].toUpperCase$();
if (s.startsWith$S("CHG=")) charge=this.mr.parseIntAt$S$I(tokens[j], 4);
 else if (s.startsWith$S("MASS=")) isotope=this.mr.parseIntAt$S$I(tokens[j], 5);
}
if (isotope > 1 && elementSymbol.equals$O("H") ) isotope=1 - isotope;
this.mr.addMolAtom$I$I$S$I$F$F$F(iAtom, isotope, elementSymbol, charge, x, y, z);
}
this.mr.discardLinesUntilContains$S("END ATOM");
}, p$1);

Clazz.newMeth(C$, 'readBonds$I', function (bondCount) {
this.mr.discardLinesUntilContains$S("BEGIN BOND");
if (bondCount == 0) this.mr.asc.setNoAutoBond$();
for (var i=0; i < bondCount; ++i) {
p$1.rd.apply(this, []);
var stereo=0;
p$1.checkLineContinuation.apply(this, []);
var tokens=this.mr.getTokens$();
var order=this.mr.parseIntStr$S(tokens[3]);
var iAtom1=tokens[4];
var iAtom2=tokens[5];
var cfg=p$1.getField$S.apply(this, ["CFG"]);
if (cfg == null ) {
var endpts=p$1.getField$S.apply(this, ["ENDPTS"]);
if (endpts != null  && this.line.indexOf$S("ATTACH=ALL") >= 0 ) {
tokens=$I$(1).getTokens$S(endpts);
var n=this.mr.parseIntStr$S(tokens[0]);
var o=this.mr.fixOrder$I$I(order, 0);
for (var k=1; k <= n; k++) this.mr.asc.addNewBondFromNames$S$S$I(iAtom1, tokens[k], o);

}} else {
stereo=this.mr.parseIntStr$S(cfg);
}this.mr.addMolBond$S$S$I$I(iAtom1, iAtom2, order, stereo);
}
this.mr.discardLinesUntilContains$S("END BOND");
}, p$1);

Clazz.newMeth(C$, 'readUserData$I', function (ac) {
this.userData=null;
var pc=null;
while (!p$1.rd.apply(this, []).contains$CharSequence("END CTAB")){
if (!this.line.contains$CharSequence("BEGIN SGROUP")) continue;
var atoms;
var name;
var data;
while (!p$1.rd.apply(this, []).contains$CharSequence("END SGROUP")){
if (this.userData == null ) this.userData=Clazz.new_($I$(2,1));
if ((atoms=p$1.getField$S.apply(this, ["ATOMS"])) == null  || (name=p$1.getField$S.apply(this, ["FIELDNAME"])) == null   || (data=p$1.getField$S.apply(this, ["FIELDDATA"])) == null  ) continue;
name=name.toLowerCase$();
var isPartial=(name.indexOf$S("partial") >= 0);
if (isPartial) {
if (pc == null ) pc=name;
 else if (!pc.equals$O(name)) isPartial=false;
}if (isPartial) {
var at=this.mr.asc.atoms;
for (var i=this.mr.asc.getLastAtomSetAtomIndex$(), n=this.mr.asc.ac; i < n; i++) at[i].partialCharge=0;

}var a=null;
var f=0;
if (isPartial) f=this.mr.parseFloatStr$S(data);
 else if ((a=this.userData.get$O(name)) == null ) this.userData.put$O$O(name, a=Clazz.array(String, [ac]));
try {
var tokens=$I$(1).getTokens$S(atoms);
for (var i=tokens.length; --i >= 1; ) {
var atom=tokens[i];
if (isPartial) this.mr.asc.getAtomFromName$S(atom).partialCharge=f;
 else a[this.mr.parseIntStr$S(atom) - 1]=data;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}
}
if (this.userData == null ) return;
for (var key, $key = this.userData.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var a=this.userData.get$O(key);
var f=Clazz.array(Float.TYPE, [a.length]);
for (var i=0; i < a.length; i++) f[i]=(a[i] == null  ? 0 : this.mr.parseFloatStr$S(a[i]));

this.mr.asc.setAtomProperties$S$O$I$Z(key, f, -1, false);
}
}, p$1);

Clazz.newMeth(C$, 'getField$S', function (key) {
var pt=this.line.indexOf$S(key + "=");
if (pt < 0) return null;
pt+=key.length$() + 1;
var term=" ";
switch ((this.line.charCodeAt$I(pt))) {
case 34:
term="\"";
break;
case 40:
term=")";
break;
case 43:
break;
default:
pt--;
break;
}
return this.line.substring$I$I(pt + 1, (this.line + term).indexOf$I$I(term, pt + 1));
}, p$1);

Clazz.newMeth(C$, 'rd', function () {
return (this.line=this.mr.rd$());
}, p$1);

Clazz.newMeth(C$, 'checkLineContinuation', function () {
while (this.line.endsWith$S("-")){
var s=this.line;
p$1.rd.apply(this, []);
this.line=s + this.line;
}
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
