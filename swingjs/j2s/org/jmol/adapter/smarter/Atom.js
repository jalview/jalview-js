(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),I$=[[0,'javajs.util.Lst','javajs.util.V3','javajs.util.AU']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Atom", null, 'javajs.util.P3', 'Cloneable');
C$.elementCharMasks=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.elementCharMasks=Clazz.array(Integer.TYPE, -1, [1972292, -2147351151, -2146019271, -2130706430, 1441792, -2147348464, 25, -2147205008, -2147344384, 0, -2147352576, 1179905, 548936, -2147434213, -2147221504, -2145759221, 0, 1056947, -2147339946, -2147477097, -2147483648, -2147483648, -2147483648, 8388624, -2147483646, 139264]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.atomSetIndex=0;
this.index=0;
this.bsSymmetry=null;
this.atomSite=0;
this.elementSymbol=null;
this.elementNumber=0;
this.atomName=null;
this.formalCharge=0;
this.partialCharge=0;
this.vib=null;
this.bfactor=0;
this.foccupancy=0;
this.radius=0;
this.isHetero=false;
this.atomSerial=0;
this.chainID=0;
this.altLoc='\0';
this.group3=null;
this.sequenceNumber=0;
this.insertionCode='\0';
this.anisoBorU=null;
this.tensors=null;
this.ignoreSymmetry=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.elementNumber=($s$[0] = -1, $s$[0]);
this.formalCharge=-2147483648;
this.partialCharge=NaN;
this.bfactor=NaN;
this.foccupancy=1;
this.radius=NaN;
this.atomSerial=-2147483648;
this.altLoc="\u0000";
this.sequenceNumber=-2147483648;
this.insertionCode="\u0000";
}, 1);

Clazz.newMeth(C$, 'addTensor$org_jmol_util_Tensor$S$Z', function (tensor, type, reset) {
if (tensor == null ) return null;
if (reset || this.tensors == null  ) this.tensors=Clazz.new_($I$(1));
this.tensors.addLast$TV(tensor);
if (type != null ) tensor.setType$S(type);
return tensor;
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.set$F$F$F(NaN, NaN, NaN);
}, 1);

Clazz.newMeth(C$, 'getClone$', function () {
var a=this.clone$();
if (this.vib != null ) {
if (Clazz.instanceOf(this.vib, "org.jmol.util.Vibration")) {
a.vib=(this.vib).clone$();
} else {
a.vib=$I$(2).newV$javajs_util_T3(a.vib);
}}if (this.anisoBorU != null ) a.anisoBorU=$I$(3).arrayCopyF$FA$I(this.anisoBorU, -1);
if (this.tensors != null ) {
a.tensors=Clazz.new_($I$(1));
for (var i=this.tensors.size$(); --i >= 0; ) a.tensors.addLast$TV((this.tensors.get$I(i)).copyTensor$());

}return a;
});

Clazz.newMeth(C$, 'getElementSymbol$', function () {
if (this.elementSymbol == null  && this.atomName != null  ) {
var len=this.atomName.length$();
var ichFirst=0;
var chFirst=String.fromCharCode(0);
while (ichFirst < len && !C$.isValidSymChar1$C(chFirst=this.atomName.charAt$I(ichFirst)) )++ichFirst;

switch (len - ichFirst) {
case 0:
break;
default:
var chSecond=this.atomName.charAt$I(ichFirst + 1);
if (C$.isValidSymNoCase$C$C(chFirst, chSecond)) {
this.elementSymbol="" + chFirst + chSecond ;
break;
}case 1:
if (C$.isValidSym1$C(chFirst)) this.elementSymbol="" + chFirst;
break;
}
}return this.elementSymbol;
});

Clazz.newMeth(C$, 'isValidSym1$C', function (ch) {
return (ch >= "A" && ch <= "Z"  && C$.elementCharMasks[ch.$c() - 65] < 0 );
}, 1);

Clazz.newMeth(C$, 'isValidSym2$C$C', function (ch1, ch2) {
return (ch1 >= "A" && ch1 <= "Z"  && ch2 >= "a"  && ch2 <= "z"  && ((C$.elementCharMasks[ch1.$c() - 65] >> (ch2.$c() - 97)) & 1) != 0 );
}, 1);

Clazz.newMeth(C$, 'isValidSymNoCase$C$C', function (ch1, ch2) {
return C$.isValidSym2$C$C(ch1, ch2 < "a" ? String.fromCharCode((ch2.$c() + 32)) : ch2);
}, 1);

Clazz.newMeth(C$, 'isValidSymChar1$C', function (ch) {
return (ch >= "A" && ch <= "Z"  && C$.elementCharMasks[ch.$c() - 65] != 0 );
}, 1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
