(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[];
var C$=Clazz.newClass(P$, "CodingUtils");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'encodeCodon$CA', function (codon) {
if (codon == null ) {
return -1;
}return C$.encodeCodon$C(codon[2]) + (C$.encodeCodon$C(codon[1]) << 2) + (C$.encodeCodon$C(codon[0]) << (4)) ;
}, 1);

Clazz.newMeth(C$, 'encodeCodon$C', function (c) {
var result=-2147483648;
switch (c.$c()) {
case 65:
case 97:
result=0;
break;
case 67:
case 99:
result=1;
break;
case 71:
case 103:
result=2;
break;
case 84:
case 116:
case 85:
case 117:
result=3;
break;
}
return result;
}, 1);

Clazz.newMeth(C$, 'decodeCodon$I', function (encoded) {
var result=Clazz.array(Character.TYPE, [3]);
result[2]=C$.decodeNucleotide$I(encoded & 3);
encoded=encoded >>> 2;
result[1]=C$.decodeNucleotide$I(encoded & 3);
encoded=encoded >>> 2;
result[0]=C$.decodeNucleotide$I(encoded & 3);
return result;
}, 1);

Clazz.newMeth(C$, 'decodeCodon2$I$CA', function (encoded, result) {
result[2]=C$.decodeNucleotide$I(encoded & 3);
encoded=encoded >>> 2;
result[1]=C$.decodeNucleotide$I(encoded & 3);
encoded=encoded >>> 2;
result[0]=C$.decodeNucleotide$I(encoded & 3);
}, 1);

Clazz.newMeth(C$, 'decodeNucleotide$I', function (i) {
var result="0";
switch (i) {
case 0:
result="A";
break;
case 1:
result="C";
break;
case 2:
result="G";
break;
case 3:
result="T";
break;
}
return result;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
