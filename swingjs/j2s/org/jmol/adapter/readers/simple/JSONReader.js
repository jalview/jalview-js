(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.simple"),p$1={},I$=[[0,'javajs.util.PT','javajs.util.P3','org.jmol.util.Logger','org.jmol.adapter.smarter.Bond']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSONReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['scale','javajs.util.P3']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.asc.setCollectionName$S("JSON");
this.asc.newAtomSet$();
var s="";
while (this.rd$() != null )s += this.line;

s=$I$(1).replaceAllCharacters$S$S$S(s, "\" ", "").replace$C$C(",", ":");
if (s.contains$CharSequence("_is2D:true")) this.set2D$();
if (s.contains$CharSequence("_scale:")) p$1.getScaling$SA.apply(this, [p$1.getSection$S$S$Z.apply(this, [s, "_scale", false])]);
s=$I$(1).replaceAllCharacters$S$S$S(s, "}", "").replace$C$C(",", ":");
p$1.readAtoms$SA.apply(this, [p$1.getSection$S$S$Z.apply(this, [s, "a", true])]);
p$1.readBonds$SA.apply(this, [p$1.getSection$S$S$Z.apply(this, [s, "b", true])]);
this.continuing=false;
});

Clazz.newMeth(C$, 'getScaling$SA', function (s) {
var xyz=$I$(1).split$S$S(s[0], ":");
this.scale=$I$(2).new3$F$F$F(1, 1, 1);
for (var j=0; j < xyz.length; j+=2) if (xyz[j].length$() == 1) switch ((xyz[j].charCodeAt$I(0))) {
case 120:
this.scale.x=this.parseFloatStr$S(xyz[j + 1]);
break;
case 121:
this.scale.y=this.parseFloatStr$S(xyz[j + 1]);
break;
case 122:
this.scale.z=this.parseFloatStr$S(xyz[j + 1]);
break;
}

$I$(3).info$S("scale set to " + this.scale);
}, p$1);

Clazz.newMeth(C$, 'getSection$S$S$Z', function (json, key, isArray) {
var a=(function(a,f){return f.apply(null,a)})([json, key + ":" + (isArray ? "[" : "") + "{" ],$I$(1).split$S$S);
if (a.length < 2) return a;
var data=a[1];
data=data.substring$I$I(0, data.indexOf$S((isArray ? "]" : "}"))) + ":";
return $I$(1).split$S$S(data, "{");
}, p$1);

Clazz.newMeth(C$, 'readAtoms$SA', function (atoms) {
for (var i=0; i < atoms.length; ++i) {
var lxyz=$I$(1).split$S$S(atoms[i], ":");
var atom=this.asc.addNewAtom$();
var x=0;
var y=0;
var z=0;
var l="C";
for (var j=0; j < lxyz.length; j+=2) if (lxyz[j].length$() == 1) switch ((lxyz[j].charCodeAt$I(0))) {
case 120:
x=this.parseFloatStr$S(lxyz[j + 1]);
break;
case 121:
y=this.parseFloatStr$S(lxyz[j + 1]);
break;
case 122:
z=this.parseFloatStr$S(lxyz[j + 1]);
break;
case 108:
l=lxyz[j + 1];
break;
}

if (this.scale != null ) {
x /= this.scale.x;
y /= this.scale.y;
z /= this.scale.z;
}this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, x, y, z);
atom.elementSymbol=l;
}
}, p$1);

Clazz.newMeth(C$, 'readBonds$SA', function (bonds) {
for (var i=0; i < bonds.length; ++i) {
var beo=$I$(1).split$S$S(bonds[i], ":");
var b=0;
var e=0;
var order=1;
for (var j=0; j < beo.length; j+=2) if (beo[j].length$() == 1) switch ((beo[j].charCodeAt$I(0))) {
case 98:
b=this.parseIntStr$S(beo[j + 1]);
break;
case 101:
e=this.parseIntStr$S(beo[j + 1]);
break;
case 111:
var o=((this.parseFloatStr$S(beo[j + 1]) * 2)|0);
switch (o) {
case 0:
continue;
case 2:
case 4:
case 6:
case 8:
order=(o/2|0);
break;
case 1:
order=33;
break;
case 3:
order=66;
break;
case 5:
order=97;
break;
default:
order=1;
break;
}
break;
}

this.asc.addBond$org_jmol_adapter_smarter_Bond(Clazz.new_($I$(4,1).c$$I$I$I,[b, e, order]));
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
