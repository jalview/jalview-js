(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,['org.jmol.util.Edge','.EnumBondOrder']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Edge", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.jmol.util.SimpleEdge');
C$.$classes$=[['EnumBondOrder',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.index=-1;
},1);

C$.$fields$=[['I',['index','order']]
,['O',['argbsHbondType','int[]']]]

Clazz.newMeth(C$, 'getArgbHbondType$I', function (order) {
var argbIndex=((order & 30720) >> 11);
return C$.argbsHbondType[argbIndex];
}, 1);

Clazz.newMeth(C$, 'getBondOrderNumberFromOrder$I', function (order) {
order&=~131072;
if (order == 131071 || order == 65535 ) return "0";
if (C$.isOrderH$I(order) || C$.isAtropism$I(order) || (order & 256) != 0  ) return $I$(1).SINGLE.number;
if ((order & 224) != 0) return (order >> 5) + "." + (order & 31) ;
return $I$(1).getNumberFromCode$I(order);
}, 1);

Clazz.newMeth(C$, 'getCmlBondOrder$I', function (order) {
var sname=C$.getBondOrderNameFromOrder$I(order);
switch ((sname.charCodeAt$I(0))) {
case 115:
case 100:
case 116:
return "" + sname.toUpperCase$().charAt$I(0);
case 97:
if (sname.indexOf$S("Double") >= 0) return "D";
 else if (sname.indexOf$S("Single") >= 0) return "S";
return "aromatic";
case 112:
if (sname.indexOf$S(" ") >= 0) return sname.substring$I(sname.indexOf$S(" ") + 1);
return "partial12";
}
return null;
}, 1);

Clazz.newMeth(C$, 'getBondOrderNameFromOrder$I', function (order) {
order&=~131072;
switch (order) {
case 65535:
case 131071:
return "";
case 32768:
return $I$(1).STRUT.$name;
case 1:
return $I$(1).SINGLE.$name;
case 2:
return $I$(1).DOUBLE.$name;
}
if ((order & 224) != 0) return "partial " + C$.getBondOrderNumberFromOrder$I(order);
if (C$.isOrderH$I(order)) return $I$(1).H_REGULAR.$name;
if ((order & 65537) == 65537) {
var code=C$.getAtropismCode$I(order);
return "atropisomer_" + ((code/4|0)) + (code % 4) ;
}if ((order & 256) != 0) return $I$(1).SINGLE.$name;
return $I$(1).getNameFromCode$I(order);
}, 1);

Clazz.newMeth(C$, 'getAtropismOrder$I$I', function (nn, mm) {
return C$.getAtropismOrder12$I(((nn + 1) << 2) + mm + 1 );
}, 1);

Clazz.newMeth(C$, 'getAtropismOrder12$I', function (nnmm) {
return ((nnmm << 11) | 65537);
}, 1);

Clazz.newMeth(C$, 'getAtropismCode$I', function (order) {
return (order >> (11)) & 15;
}, 1);

Clazz.newMeth(C$, 'getAtropismNode$I$org_jmol_util_Node$Z', function (order, a1, isFirst) {
var i1=(order >> (11 + (isFirst ? 2 : 0))) & 3;
return a1.getEdges$()[i1 - 1].getOtherNode$org_jmol_util_SimpleNode(a1);
}, 1);

Clazz.newMeth(C$, 'isAtropism$I', function (order) {
return (order & 65537) == 65537;
}, 1);

Clazz.newMeth(C$, 'isOrderH$I', function (order) {
return (order & 30720) != 0 && (order & 65537) == 0 ;
}, 1);

Clazz.newMeth(C$, 'getPartialBondDotted$I', function (order) {
return (order & 31);
}, 1);

Clazz.newMeth(C$, 'getPartialBondOrder$I', function (order) {
return ((order & ~131072) >> 5);
}, 1);

Clazz.newMeth(C$, 'getCovalentBondOrder$I', function (order) {
if ((order & 1023) == 0) return 0;
order&=~131072;
if ((order & 224) != 0) return C$.getPartialBondOrder$I(order);
if ((order & 256) != 0) order&=~256;
if ((order & 248) != 0) order=1;
return order & 7;
}, 1);

Clazz.newMeth(C$, 'getBondOrderFromFloat$F', function (fOrder) {
switch (((fOrder * 10)|0)) {
case 10:
return 1;
case 5:
case -10:
return 33;
case 15:
return 515;
case -15:
return 66;
case 20:
return 2;
case 25:
return 97;
case -25:
return 100;
case 30:
return 3;
case 40:
return 4;
}
return 131071;
}, 1);

Clazz.newMeth(C$, 'getBondOrderFromString$S', function (name) {
var order=$I$(1).getCodeFromName$S(name);
try {
if (order == 131071 && name.length$() == 14  && name.toLowerCase$().startsWith$S("atropisomer_") ) order=C$.getAtropismOrder$I$I(Integer.parseInt$S(name.substring$I$I(12, 13)), Integer.parseInt$S(name.substring$I$I(13, 14)));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
return order;
}, 1);

Clazz.newMeth(C$, 'setCIPChirality$I', function (c) {
});

Clazz.newMeth(C$, 'getCIPChirality$Z', function (doCalculate) {
return "";
});

C$.$static$=function(){C$.$static$=0;
C$.argbsHbondType=Clazz.array(Integer.TYPE, -1, [-38476, -256, -256, -1, -65281, -65536, -23296, -16711681, -16711936, -32640]);
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.Edge, "EnumBondOrder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['code'],'S',['number','$name']]]

Clazz.newMeth(C$, 'c$$I$S$S', function (code, number, name) {
;C$.$init$.apply(this);
this.code=code;
this.number=number;
this.$name=name;
}, 1);

Clazz.newMeth(C$, 'getCodeFromName$S', function (name) {
for (var item, $item = 0, $$item = C$.values$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) if (item.$name.equalsIgnoreCase$S(name)) return item.code;

return 131071;
}, 1);

Clazz.newMeth(C$, 'getNameFromCode$I', function (code) {
for (var item, $item = 0, $$item = C$.values$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) if (item.code == code) return item.$name;

return "?";
}, 1);

Clazz.newMeth(C$, 'getNumberFromCode$I', function (code) {
for (var item, $item = 0, $$item = C$.values$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) if (item.code == code) return item.number;

return "?";
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "SINGLE", 0, [1, "1", "single"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "DOUBLE", 1, [2, "2", "double"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "TRIPLE", 2, [3, "3", "triple"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "QUADRUPLE", 3, [4, "4", "quadruple"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "QUINTUPLE", 4, [5, "5", "quintuple"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "sextuple", 5, [6, "6", "sextuple"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "AROMATIC", 6, [515, "1.5", "aromatic"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "STRUT", 7, [32768, "1", "struts"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "H_REGULAR", 8, [2048, "1", "hbond"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "PARTIAL01", 9, [33, "0.5", "partial"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "PARTIAL12", 10, [66, "1.5", "partialDouble"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "PARTIAL23", 11, [97, "2.5", "partialTriple"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "PARTIAL32", 12, [100, "2.5", "partialTriple2"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "AROMATIC_SINGLE", 13, [513, "1", "aromaticSingle"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "AROMATIC_DOUBLE", 14, [514, "2", "aromaticDouble"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "ATROPISOMER", 15, [65537, "1", "atropisomer"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "UNSPECIFIED", 16, [17, "1", "unspecified"]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
