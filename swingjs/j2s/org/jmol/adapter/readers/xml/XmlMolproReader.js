(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xml"),I$=[[0,'javajs.util.PT']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "XmlMolproReader", null, 'org.jmol.adapter.readers.xml.XmlMOReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.dslist="d0 d2- d1+ d2+ d1-";
this.fclist="XXX YYY ZZZ XXY XXZ XYY YYZ XZZ YZZ XYZ";
this.fslist="f1+ f1- f0 f3+ f2- f3- f2+";
this.iHaveCoefMaps=true;
}, 1);

Clazz.newMeth(C$, 'processStartElement$S$S', function (localName, nodeName) {
if (!this.processing) return;
this.processStart2$S(localName);
if (!this.processStartMO$S(localName)) {
if (localName.equals$O("normalcoordinate")) {
this.setKeepChars$Z(false);
if (!this.parent.doGetVibration$I(++this.vibrationNumber)) return;
try {
this.asc.cloneLastAtomSet$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("" + e);
this.asc.errorMessage="Error processing normalCoordinate: " + e.getMessage$();
this.vibrationNumber=0;
return;
} else {
throw e;
}
}
if (this.atts.containsKey$O("wavenumber")) {
var wavenumber=this.atts.get$O("wavenumber");
var units="cm^-1";
if (this.atts.containsKey$O("units")) {
units=this.atts.get$O("units");
if (units.startsWith$S("inverseCent")) units="cm^-1";
}this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, null, null, wavenumber, units);
this.setKeepChars$Z(true);
}return;
}if (localName.equals$O("vibrations")) {
this.vibrationNumber=0;
return;
}}});

Clazz.newMeth(C$, 'processEndElement$S', function (localName) {
if (!this.processEndMO$S(localName)) {
if (localName.equals$O("normalcoordinate")) {
if (!this.keepChars) return;
var ac=this.asc.getLastAtomSetAtomCount$();
var baseAtomIndex=this.asc.getLastAtomSetAtomIndex$();
this.tokens=(function(a,f){return f.apply(null,a)})([this.chars.toString()],$I$(1).getTokens$S);
for (var offset=this.tokens.length - ac * 3, i=0; i < ac; i++) {
this.asc.addVibrationVector$I$F$F$F(i + baseAtomIndex, this.parseFloatStr$S(this.tokens[offset++]), this.parseFloatStr$S(this.tokens[offset++]), this.parseFloatStr$S(this.tokens[offset++]));
}
this.setKeepChars$Z(false);
}}this.processEnd2$S(localName);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
