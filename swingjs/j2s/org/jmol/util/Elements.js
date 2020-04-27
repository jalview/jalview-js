(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'javajs.util.BS','org.jmol.util.Logger','java.util.Hashtable','javajs.util.PT']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Elements");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['elementNumberMax','altElementMax','covalentVersion','bondingVersion'],'O',['elementSymbols','String[]','atomicMass','float[]','isotopeMass','int[]','htElementMap','java.util.Map','elementNames','String[]','altElementNumbers','int[]','altElementSymbols','String[]','+altElementNames','vanderwaalsMars','short[]','+defaultBondingMars','+cationLookupTable','+anionLookupTable','bsCations','javajs.util.BS','+bsAnions','hydrophobicities','float[]','+electroNegativities']]]

Clazz.newMeth(C$, 'getNaturalIsotope$I', function (elementNumber) {
return C$.isotopeMass[elementNumber & 127];
}, 1);

Clazz.newMeth(C$, 'getAtomicMass$I', function (i) {
return (i < 1 || i >= C$.atomicMass.length  ? 0 : C$.atomicMass[i]);
}, 1);

Clazz.newMeth(C$, 'elementNumberFromSymbol$S$Z', function (elementSymbol, isSilent) {
if (C$.htElementMap == null ) {
var map=Clazz.new_($I$(3,1));
for (var elementNumber=C$.elementNumberMax; --elementNumber >= 0; ) {
var symbol=C$.elementSymbols[elementNumber];
var boxed=Integer.valueOf$I(elementNumber);
map.put$O$O(symbol, boxed);
if (symbol.length$() == 2) map.put$O$O(symbol.toUpperCase$(), boxed);
}
for (var i=C$.altElementMax; --i >= 4; ) {
var symbol=C$.altElementSymbols[i];
var boxed=Integer.valueOf$I(C$.altElementNumbers[i]);
map.put$O$O(symbol, boxed);
if (symbol.length$() == 2) map.put$O$O(symbol.toUpperCase$(), boxed);
}
C$.htElementMap=map;
}if (elementSymbol == null ) return 0;
var boxedAtomicNumber=C$.htElementMap.get$O(elementSymbol);
if (boxedAtomicNumber != null ) return boxedAtomicNumber.intValue$();
if ((function(a,f){return f.apply(null,a)})([elementSymbol.charAt$I(0)],$I$(4).isDigit$C)) {
var pt=elementSymbol.length$() - 2;
if (pt >= 0 && (function(a,f){return f.apply(null,a)})([elementSymbol.charAt$I(pt)],$I$(4).isDigit$C) ) pt++;
var isotope=(pt > 0 ? (function(a,f){return f.apply(null,a)})([elementSymbol.substring$I$I(0, pt)],$I$(4).parseInt$S) : 0);
if (isotope > 0) {
var n=C$.elementNumberFromSymbol$S$Z(elementSymbol.substring$I(pt), true);
if (n > 0) {
isotope=C$.getAtomicAndIsotopeNumber$I$I(n, isotope);
C$.htElementMap.put$O$O(elementSymbol.toUpperCase$(), Integer.valueOf$I(isotope));
return isotope;
}}}if (!isSilent) $I$(2).error$S("'" + elementSymbol + "' is not a recognized symbol" );
return 0;
}, 1);

Clazz.newMeth(C$, 'elementSymbolFromNumber$I', function (elemNo) {
var isoNumber=0;
if (elemNo >= C$.elementNumberMax) {
for (var j=C$.altElementMax; --j >= 0; ) if (elemNo == C$.altElementNumbers[j]) return C$.altElementSymbols[j];

isoNumber=C$.getIsotopeNumber$I(elemNo);
elemNo%=128;
return "" + isoNumber + C$.getElementSymbol$I(elemNo) ;
}return C$.getElementSymbol$I(elemNo);
}, 1);

Clazz.newMeth(C$, 'getElementSymbol$I', function (elemNo) {
if (elemNo < 0 || elemNo >= C$.elementNumberMax ) elemNo=0;
return C$.elementSymbols[elemNo];
}, 1);

Clazz.newMeth(C$, 'elementNameFromNumber$I', function (elementNumber) {
if (elementNumber >= C$.elementNumberMax) {
for (var j=C$.altElementMax; --j >= 0; ) if (elementNumber == C$.altElementNumbers[j]) return C$.altElementNames[j];

elementNumber%=128;
}if (elementNumber < 0 || elementNumber >= C$.elementNumberMax ) elementNumber=0;
return C$.elementNames[elementNumber];
}, 1);

Clazz.newMeth(C$, 'elementNumberFromName$S', function (name) {
for (var i=1; i < C$.elementNumberMax; i++) if (C$.elementNames[i].equalsIgnoreCase$S(name)) return i;

return -1;
}, 1);

Clazz.newMeth(C$, 'altElementNameFromIndex$I', function (i) {
return C$.altElementNames[i];
}, 1);

Clazz.newMeth(C$, 'altElementNumberFromIndex$I', function (i) {
return C$.altElementNumbers[i];
}, 1);

Clazz.newMeth(C$, 'altElementSymbolFromIndex$I', function (i) {
return C$.altElementSymbols[i];
}, 1);

Clazz.newMeth(C$, 'altIsotopeSymbolFromIndex$I', function (i) {
var code=C$.altElementNumbers[i];
return (code >> 7) + C$.elementSymbolFromNumber$I(code & 127);
}, 1);

Clazz.newMeth(C$, 'altIsotopeSymbolFromIndex2$I', function (i) {
var code=C$.altElementNumbers[i];
return C$.elementSymbolFromNumber$I(code & 127) + (code >> 7);
}, 1);

Clazz.newMeth(C$, 'getElementNumber$I', function (atomicAndIsotopeNumber) {
return atomicAndIsotopeNumber & 127;
}, 1);

Clazz.newMeth(C$, 'getIsotopeNumber$I', function (atomicAndIsotopeNumber) {
return atomicAndIsotopeNumber >> 7;
}, 1);

Clazz.newMeth(C$, 'getAtomicAndIsotopeNumber$I$I', function (n, mass) {
return ((n < 0 ? 0 : n) + (mass <= 0 ? 0 : mass << 7));
}, 1);

Clazz.newMeth(C$, 'altElementIndexFromNumber$I', function (atomicAndIsotopeNumber) {
for (var i=0; i < C$.altElementMax; i++) if (C$.altElementNumbers[i] == atomicAndIsotopeNumber) return i;

return 0;
}, 1);

Clazz.newMeth(C$, 'isNaturalIsotope$S', function (isotopeSymbol) {
return ("1H,12C,14N".indexOf$S(isotopeSymbol + ",") >= 0);
}, 1);

Clazz.newMeth(C$, 'getBondingRadius$I$I', function (atomicNumberAndIsotope, charge) {
var atomicNumber=atomicNumberAndIsotope & 127;
return (charge > 0 && C$.bsCations.get$I(atomicNumber)  ? C$.getBondingRadFromTable$I$I$HA(atomicNumber, charge, C$.cationLookupTable) : charge < 0 && C$.bsAnions.get$I(atomicNumber)  ? C$.getBondingRadFromTable$I$I$HA(atomicNumber, charge, C$.anionLookupTable) : C$.defaultBondingMars[(atomicNumber << 1) + C$.bondingVersion] / 1000.0);
}, 1);

Clazz.newMeth(C$, 'getCovalentRadius$I', function (atomicNumberAndIsotope) {
return C$.defaultBondingMars[((atomicNumberAndIsotope & 127) << 1) + C$.covalentVersion] / 1000.0;
}, 1);

Clazz.newMeth(C$, 'getBondingRadFromTable$I$I$HA', function (atomicNumber, charge, table) {
var ionic=(atomicNumber << 4) + (charge + 4);
var iVal=0;
var iMid=0;
var iMin=0;
var iMax=(table.length/2|0);
while (iMin != iMax){
iMid=((iMin + iMax)/2|0);
iVal=table[iMid << 1];
if (iVal > ionic) iMax=iMid;
 else if (iVal < ionic) iMin=iMid + 1;
 else return table[(iMid << 1) + 1] / 1000.0;
}
if (iVal > ionic) iMid--;
iVal=table[iMid << 1];
if (atomicNumber != (iVal >> 4)) iMid++;
return table[(iMid << 1) + 1] / 1000.0;
}, 1);

Clazz.newMeth(C$, 'getVanderwaalsMar$I$org_jmol_c_VDW', function (atomicAndIsotopeNumber, type) {
return C$.vanderwaalsMars[((atomicAndIsotopeNumber & 127) << 2) + (type.pt % 4)];
}, 1);

Clazz.newMeth(C$, 'getHydrophobicity$I', function (i) {
return (i < 1 || i >= C$.hydrophobicities.length  ? 0 : C$.hydrophobicities[i]);
}, 1);

Clazz.newMeth(C$, 'getAllredRochowElectroNeg$I', function (elemno) {
return (elemno > 0 && elemno < C$.electroNegativities.length  ? C$.electroNegativities[elemno] : 0);
}, 1);

Clazz.newMeth(C$, 'isElement$I$I', function (atomicAndIsotopeNumber, elemNo) {
return ((atomicAndIsotopeNumber & 127) == elemNo);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.elementSymbols=Clazz.array(String, -1, ["Xx", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt"]);
C$.atomicMass=Clazz.array(Float.TYPE, -1, [0, 1.008, 4.002, 6.9675, 9.012, 10.8135, 12.0106, 14.006, 15.999, 18.998, 20.1797, 22.989, 24.307, 26.981, 28.084, 30.973, 32.059, 35.4515, 39.948, 39.0983, 40.078, 44.955, 47.867, 50.9415, 51.9961, 54.938, 55.845, 58.933, 58.6934, 63.546, 65.38, 69.723, 72.63, 74.921, 78.971, 79.904, 83.798, 85.4678, 87.62, 88.905, 91.224, 92.906, 95.95, 98.91, 101.07, 102.905, 106.42, 107.8682, 112.414, 114.818, 118.71, 121.76, 127.6, 126.904, 131.293, 132.905, 137.327, 138.905, 140.116, 140.907, 144.242, 144.9, 150.36, 151.964, 157.25, 158.925, 162.5, 164.93, 167.259, 168.934, 173.054, 174.9668, 178.49, 180.947, 183.84, 186.207, 190.23, 192.217, 195.084, 196.966, 200.592, 204.3835, 207.2, 208.98, 210.0, 210.0, 222.0, 223.0, 226.03, 227.03, 232.0377, 231.035, 238.028, 237.05, 239.1, 243.1, 247.1, 247.1, 252.1, 252.1, 257.1, 256.1, 259.1, 260.1, 261.0, 262.0, 263.0, 262.0, 265.0, 268.0]);
C$.isotopeMass=Clazz.array(Integer.TYPE, -1, [0, 1, 4, 7, 9, 11, 12, 14, 16, 19, 20, 23, 24, 27, 28, 31, 32, 35, 40, 39, 40, 45, 48, 51, 52, 55, 56, 59, 59, 64, 65, 70, 73, 75, 79, 80, 84, 85, 88, 89, 91, 93, 96, 98, 101, 103, 106, 108, 112, 115, 119, 122, 128, 127, 131, 133, 137, 139, 140, 141, 144, 145, 150, 152, 157, 159, 163, 165, 167, 169, 173, 175, 179, 181, 184, 186, 190, 192, 195, 197, 201, 204, 207, 209, 209, 210, 222, 223, 226, 227, 232, 231, 238, 237, 244, 243, 247, 247, 251, 252, 257, 258, 259, 260, 261, 262, 263, 262, 265, 268]);
C$.elementNumberMax=C$.elementSymbols.length;
C$.elementNames=Clazz.array(String, -1, ["unknown", "hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen", "fluorine", "neon", "sodium", "magnesium", "aluminum", "silicon", "phosphorus", "sulfur", "chlorine", "argon", "potassium", "calcium", "scandium", "titanium", "vanadium", "chromium", "manganese", "iron", "cobalt", "nickel", "copper", "zinc", "gallium", "germanium", "arsenic", "selenium", "bromine", "krypton", "rubidium", "strontium", "yttrium", "zirconium", "niobium", "molybdenum", "technetium", "ruthenium", "rhodium", "palladium", "silver", "cadmium", "indium", "tin", "antimony", "tellurium", "iodine", "xenon", "cesium", "barium", "lanthanum", "cerium", "praseodymium", "neodymium", "promethium", "samarium", "europium", "gadolinium", "terbium", "dysprosium", "holmium", "erbium", "thulium", "ytterbium", "lutetium", "hafnium", "tantalum", "tungsten", "rhenium", "osmium", "iridium", "platinum", "gold", "mercury", "thallium", "lead", "bismuth", "polonium", "astatine", "radon", "francium", "radium", "actinium", "thorium", "protactinium", "uranium", "neptunium", "plutonium", "americium", "curium", "berkelium", "californium", "einsteinium", "fermium", "mendelevium", "nobelium", "lawrencium", "rutherfordium", "dubnium", "seaborgium", "bohrium", "hassium", "meitnerium"]);
C$.altElementNumbers=Clazz.array(Integer.TYPE, -1, [0, 13, 16, 55, 257, 385, 1414, 1670, 1798, 1927]);
C$.altElementMax=C$.altElementNumbers.length;
C$.altElementSymbols=Clazz.array(String, -1, ["Xx", "Al", "S", "Cs", "D", "T", "11C", "13C", "14C", "15N"]);
C$.altElementNames=Clazz.array(String, -1, ["dummy", "aluminium", "sulphur", "caesium", "deuterium", "tritium", "", "", "", ""]);
C$.vanderwaalsMars=Clazz.array(Short.TYPE, -1, [1000, 1000, 1000, 1000, 1200, 1100, 1100, 1200, 1400, 1400, 2200, 1400, 1820, 1810, 1220, 2200, 1700, 1530, 628, 1900, 2080, 1920, 1548, 1800, 1950, 1700, 1548, 1700, 1850, 1550, 1400, 1600, 1700, 1520, 1348, 1550, 1730, 1470, 1300, 1500, 1540, 1540, 2020, 1540, 2270, 2270, 2200, 2400, 1730, 1730, 1500, 2200, 2050, 1840, 1500, 2100, 2100, 2100, 2200, 2100, 2080, 1800, 1880, 1950, 2000, 1800, 1808, 1800, 1970, 1750, 1748, 1800, 1880, 1880, 2768, 1880, 2750, 2750, 2388, 2800, 1973, 2310, 1948, 2400, 1700, 2300, 1320, 2300, 1700, 2150, 1948, 2150, 1700, 2050, 1060, 2050, 1700, 2050, 1128, 2050, 1700, 2050, 1188, 2050, 1700, 2050, 1948, 2050, 1700, 2000, 1128, 2000, 1630, 2000, 1240, 2000, 1400, 2000, 1148, 2000, 1390, 2100, 1148, 2100, 1870, 1870, 1548, 2100, 1700, 2110, 3996, 2100, 1850, 1850, 828, 2050, 1900, 1900, 900, 1900, 2100, 1830, 1748, 1900, 2020, 2020, 1900, 2020, 1700, 3030, 2648, 2900, 1700, 2490, 2020, 2550, 1700, 2400, 1608, 2400, 1700, 2300, 1420, 2300, 1700, 2150, 1328, 2150, 1700, 2100, 1748, 2100, 1700, 2050, 1800, 2050, 1700, 2050, 1200, 2050, 1700, 2000, 1220, 2000, 1630, 2050, 1440, 2050, 1720, 2100, 1548, 2100, 1580, 2200, 1748, 2200, 1930, 2200, 1448, 2200, 2170, 1930, 1668, 2250, 2200, 2170, 1120, 2200, 2060, 2060, 1260, 2100, 2150, 1980, 1748, 2100, 2160, 2160, 2100, 2160, 1700, 3430, 3008, 3000, 1700, 2680, 2408, 2700, 1700, 2500, 1828, 2500, 1700, 2480, 1860, 2480, 1700, 2470, 1620, 2470, 1700, 2450, 1788, 2450, 1700, 2430, 1760, 2430, 1700, 2420, 1740, 2420, 1700, 2400, 1960, 2400, 1700, 2380, 1688, 2380, 1700, 2370, 1660, 2370, 1700, 2350, 1628, 2350, 1700, 2330, 1608, 2330, 1700, 2320, 1588, 2320, 1700, 2300, 1568, 2300, 1700, 2280, 1540, 2280, 1700, 2270, 1528, 2270, 1700, 2250, 1400, 2250, 1700, 2200, 1220, 2200, 1700, 2100, 1260, 2100, 1700, 2050, 1300, 2050, 1700, 2000, 1580, 2000, 1700, 2000, 1220, 2000, 1720, 2050, 1548, 2050, 1660, 2100, 1448, 2100, 1550, 2050, 1980, 2050, 1960, 1960, 1708, 2200, 2020, 2020, 2160, 2300, 1700, 2070, 1728, 2300, 1700, 1970, 1208, 2000, 1700, 2020, 1120, 2000, 1700, 2200, 2300, 2000, 1700, 3480, 3240, 2000, 1700, 2830, 2568, 2000, 1700, 2000, 2120, 2000, 1700, 2400, 1840, 2400, 1700, 2000, 1600, 2000, 1860, 2300, 1748, 2300, 1700, 2000, 1708, 2000, 1700, 2000, 1668, 2000, 1700, 2000, 1660, 2000, 1700, 2000, 1648, 2000, 1700, 2000, 1640, 2000, 1700, 2000, 1628, 2000, 1700, 2000, 1620, 2000, 1700, 2000, 1608, 2000, 1700, 2000, 1600, 2000, 1700, 2000, 1588, 2000, 1700, 2000, 1580, 2000, 1700, 2000, 1600, 2000, 1700, 2000, 1600, 2000, 1700, 2000, 1600, 2000, 1700, 2000, 1600, 2000, 1700, 2000, 1600, 2000, 1700, 2000, 1600, 2000]);
C$.covalentVersion=1;
C$.bondingVersion=0;
C$.defaultBondingMars=Clazz.array(Short.TYPE, -1, [0, 0, 230, 320, 930, 460, 680, 1330, 350, 1020, 830, 850, 680, 750, 680, 710, 680, 630, 640, 640, 1120, 670, 970, 1550, 1100, 1390, 1350, 1260, 1200, 1160, 750, 1110, 1020, 1030, 990, 990, 1570, 960, 1330, 1960, 990, 1710, 1440, 1480, 1470, 1360, 1330, 1340, 1350, 1220, 1350, 1190, 1340, 1160, 1330, 1110, 1500, 1100, 1520, 1120, 1450, 1180, 1220, 1240, 1170, 1210, 1210, 1210, 1220, 1160, 1210, 1140, 1910, 1170, 1470, 2100, 1120, 1850, 1780, 1630, 1560, 1540, 1480, 1470, 1470, 1380, 1350, 1280, 1400, 1250, 1450, 1250, 1500, 1200, 1590, 1280, 1690, 1360, 1630, 1420, 1460, 1400, 1460, 1400, 1470, 1360, 1400, 1330, 1980, 1310, 1670, 2320, 1340, 1960, 1870, 1800, 1830, 1630, 1820, 1760, 1810, 1740, 1800, 1730, 1800, 1720, 1990, 1680, 1790, 1690, 1760, 1680, 1750, 1670, 1740, 1660, 1730, 1650, 1720, 1640, 1940, 1700, 1720, 1620, 1570, 1520, 1430, 1460, 1370, 1370, 1350, 1310, 1370, 1290, 1320, 1220, 1500, 1230, 1500, 1240, 1700, 1330, 1550, 1440, 1540, 1440, 1540, 1510, 1680, 1450, 1700, 1470, 2400, 1420, 2000, 2230, 1900, 2010, 1880, 1860, 1790, 1750, 1610, 1690, 1580, 1700, 1550, 1710, 1530, 1720, 1510, 1660, 1500, 1660, 1500, 1680, 1500, 1680, 1500, 1650, 1500, 1670, 1500, 1730, 1500, 1760, 1500, 1610, 1600, 1570, 1600, 1490, 1600, 1430, 1600, 1410, 1600, 1340, 1600, 1290]);
C$.cationLookupTable=Clazz.array(Short.TYPE, -1, [53, 680, 69, 440, 70, 350, 85, 350, 87, 230, 104, 160, 117, 680, 119, 160, 121, 130, 133, 220, 138, 90, 155, 80, 165, 1120, 181, 970, 197, 820, 198, 660, 215, 510, 229, 650, 232, 420, 247, 440, 249, 350, 262, 2190, 264, 370, 266, 300, 281, 340, 283, 270, 293, 1540, 309, 1330, 325, 1180, 326, 990, 343, 732, 357, 960, 358, 940, 359, 760, 360, 680, 374, 880, 375, 740, 376, 630, 377, 590, 389, 810, 390, 890, 391, 630, 394, 520, 406, 800, 407, 660, 408, 600, 411, 460, 422, 740, 423, 640, 438, 720, 439, 630, 454, 690, 469, 960, 470, 720, 485, 880, 486, 740, 501, 810, 503, 620, 518, 730, 520, 530, 535, 580, 537, 460, 549, 660, 552, 500, 554, 420, 569, 470, 571, 390, 597, 1470, 614, 1120, 631, 893, 645, 1090, 648, 790, 661, 1000, 664, 740, 665, 690, 677, 930, 680, 700, 682, 620, 699, 979, 712, 670, 727, 680, 742, 800, 744, 650, 757, 1260, 758, 890, 773, 1140, 774, 970, 791, 810, 806, 930, 808, 710, 823, 760, 825, 620, 837, 820, 840, 700, 842, 560, 857, 620, 859, 500, 885, 1670, 901, 1530, 902, 1340, 917, 1390, 919, 1016, 933, 1270, 935, 1034, 936, 920, 951, 1013, 952, 900, 967, 995, 983, 979, 999, 964, 1014, 1090, 1015, 950, 1031, 938, 1047, 923, 1048, 840, 1063, 908, 1079, 894, 1095, 881, 1111, 870, 1126, 930, 1127, 858, 1143, 850, 1160, 780, 1177, 680, 1192, 700, 1194, 620, 1208, 720, 1211, 560, 1224, 880, 1226, 690, 1240, 680, 1254, 800, 1256, 650, 1269, 1370, 1271, 850, 1285, 1270, 1286, 1100, 1301, 1470, 1303, 950, 1318, 1200, 1320, 840, 1333, 980, 1335, 960, 1337, 740, 1354, 670, 1371, 620, 1397, 1800, 1414, 1430, 1431, 1180, 1448, 1020, 1463, 1130, 1464, 980, 1465, 890, 1480, 970, 1482, 800, 1495, 1100, 1496, 950, 1499, 710, 1511, 1080, 1512, 930, 1527, 1070, 1528, 920]);
C$.anionLookupTable=Clazz.array(Short.TYPE, -1, [19, 1540, 96, 2600, 113, 1710, 130, 1360, 131, 680, 147, 1330, 241, 2120, 258, 1840, 275, 1810, 512, 2720, 529, 2220, 546, 1980, 563, 1960, 800, 2940, 803, 3700, 817, 2450, 834, 2110, 835, 2500, 851, 2200]);
C$.bsCations=Clazz.new_($I$(1,1));
C$.bsAnions=Clazz.new_($I$(1,1));
{
for (var i=0; i < C$.anionLookupTable.length; i+=2) C$.bsAnions.set$I(C$.anionLookupTable[i] >> 4);

for (var i=0; i < C$.cationLookupTable.length; i+=2) C$.bsCations.set$I(C$.cationLookupTable[i] >> 4);

};
C$.hydrophobicities=Clazz.array(Float.TYPE, -1, [0.0, 0.62, -2.53, -0.78, -0.9, 0.29, -0.85, -0.74, 0.48, -0.4, 1.38, 1.06, -1.5, 0.64, 1.19, 0.12, -0.18, -0.05, 0.81, 0.26, 1.08]);
{
if ((C$.elementNames.length != C$.elementNumberMax) || (C$.vanderwaalsMars.length >> 2 != C$.elementNumberMax) || (C$.defaultBondingMars.length >> 1 != C$.elementNumberMax)  ) {
(function(a,f){return f.apply(null,a)})(["ERROR!!! Element table length mismatch:\n elementSymbols.length=" + C$.elementSymbols.length + "\n elementNames.length=" + C$.elementNames.length + "\n vanderwaalsMars.length=" + C$.vanderwaalsMars.length + "\n covalentMars.length=" + C$.defaultBondingMars.length ],$I$(2).error$S);
}};
C$.electroNegativities=Clazz.array(Float.TYPE, -1, [0, 2.2, 0, 0.97, 1.47, 2.01, 2.5, 3.07, 3.5, 4.1, 0.0, 1.01, 1.23, 1.47, 1.74, 2.06, 2.44, 2.83, 0.0, 0.91, 1.04, 1.2, 1.32, 1.45, 1.56, 1.6, 1.64, 1.7, 1.75, 1.75, 1.66, 1.82, 2.02, 2.2, 2.48, 2.74, 0.0, 0.89, 0.99, 1.11, 1.22, 1.23, 1.3, 1.36, 1.42, 1.45, 1.35, 1.42, 1.46, 1.49, 1.72, 1.82, 2.01, 2.21]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
