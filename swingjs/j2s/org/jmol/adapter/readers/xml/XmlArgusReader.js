(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xml"),p$1={},I$=[[0,'org.jmol.adapter.smarter.Atom']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XmlArgusReader", null, 'org.jmol.adapter.readers.xml.XmlReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['bondOrder','elementContext','ptTrans'],'S',['atomName1','atomName2'],'O',['trans','float[]']]
,['O',['keepCharsList','String[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'processStartElement$S$S', function (localName, nodeName) {
for (var i=C$.keepCharsList.length; --i >= 0; ) if (C$.keepCharsList[i].equals$O(localName)) {
this.setKeepChars$Z(true);
break;
}
if ("molecule".equals$O(localName)) {
this.asc.newAtomSet$();
return;
}if ("atom".equals$O(localName)) {
this.elementContext=2;
this.atom=Clazz.new_($I$(1,1));
return;
}if ("bond".equals$O(localName)) {
this.elementContext=3;
this.atomName1=null;
this.atomName2=null;
this.bondOrder=p$1.parseBondToken$S.apply(this, [this.atts.get$O("order")]);
return;
}if ("transformmat".equals$O(localName)) {
this.elementContext=4;
this.trans=Clazz.array(Float.TYPE, [16]);
return;
}});

Clazz.newMeth(C$, 'parseBondToken$S', function (str) {
var floatOrder=this.parseFloatStr$S(str);
if (Float.isNaN$F(floatOrder) && str.length$() >= 1 ) {
str=str.toUpperCase$();
switch ((str.charCodeAt$I(0))) {
case 83:
return 1;
case 68:
return 2;
case 84:
return 3;
case 65:
return 515;
}
return this.parseIntStr$S(str);
}if (floatOrder == 1.5 ) return 515;
if (floatOrder == 2 ) return 2;
if (floatOrder == 3 ) return 3;
return 1;
}, p$1);

Clazz.newMeth(C$, 'processEndElement$S', function (localName) {
var n=this.chars.length$();
if (n > 0 && this.chars.charAt$I(n - 1) == "\n" ) this.chars.setLength$I(n - 1);
if ("molecule".equals$O(localName)) {
this.elementContext=0;
return;
}if ("atom".equals$O(localName)) {
if (this.atom.elementSymbol != null  && !Float.isNaN$F(this.atom.z) ) {
this.parent.setAtomCoord$org_jmol_adapter_smarter_Atom(this.atom);
this.asc.addAtomWithMappedName$org_jmol_adapter_smarter_Atom(this.atom);
}this.atom=null;
this.elementContext=0;
return;
}if ("bond".equals$O(localName)) {
if (this.atomName2 != null ) this.asc.addNewBondFromNames$S$S$I(this.atomName1, this.atomName2, this.bondOrder);
this.elementContext=0;
return;
}if ("transformmat".equals$O(localName)) {
this.elementContext=0;
this.parent.setTransform$F$F$F$F$F$F$F$F$F(this.trans[0], this.trans[1], this.trans[2], this.trans[4], this.trans[5], this.trans[6], this.trans[8], this.trans[9], this.trans[10]);
return;
}if (this.elementContext == 1) {
if ("name".equals$O(localName)) {
this.asc.setAtomSetName$S(this.chars.toString());
this.setKeepChars$Z(false);
}return;
}if (this.atom != null  && this.elementContext == 2 ) {
if ("x".equals$O(localName)) {
this.atom.x=this.parseFloatStr$S(this.chars.toString());
} else if ("y".equals$O(localName)) {
this.atom.y=this.parseFloatStr$S(this.chars.toString());
return;
} else if ("z".equals$O(localName)) {
this.atom.z=this.parseFloatStr$S(this.chars.toString());
return;
} else if ("atsym".equals$O(localName)) {
this.atom.elementSymbol=this.chars.toString();
return;
} else if ("formalchg".equals$O(localName)) {
this.atom.formalCharge=this.parseIntStr$S(this.chars.toString());
} else if ("atomkey".equals$O(localName)) {
this.atom.atomName=this.chars.toString();
}this.setKeepChars$Z(false);
return;
}if (this.elementContext == 3) {
if ("atomkey".equals$O(localName)) {
if (this.atomName1 == null ) this.atomName1=this.chars.toString();
 else this.atomName2=this.chars.toString();
this.setKeepChars$Z(false);
}return;
}if (this.elementContext == 4) {
this.trans[this.ptTrans++]=this.parseFloatStr$S(this.chars.toString());
this.setKeepChars$Z(false);
return;
}});

C$.$static$=function(){C$.$static$=0;
C$.keepCharsList=Clazz.array(String, -1, ["name", "x", "y", "z", "formalchg", "atomkey", "atsym", "e00", "e01", "e02", "e03", "e10", "e11", "e12", "e13", "e20", "e21", "e22", "e23", "e30", "e31", "e32", "e33"]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:27 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
