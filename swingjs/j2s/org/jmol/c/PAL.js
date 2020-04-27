(function(){var P$=Clazz.newPackage("org.jmol.c"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "PAL", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['B',['id'],'S',['$name']]
,['O',['argbsCpkRasmol','int[]','+argbsCpk']]]

Clazz.newMeth(C$, 'c$$S$I', function (name, id) {
;C$.$init$.apply(this);
this.$name=name;
this.id=($b$[0] = id, $b$[0]);
}, 1);

Clazz.newMeth(C$, 'pidOf$O', function (value) {
return (Clazz.instanceOf(value, "org.jmol.c.PAL") ? (value).id : Clazz.instanceOf(value, "java.lang.Byte") ? (value).byteValue$() : C$.UNKNOWN.id);
}, 1);

Clazz.newMeth(C$, 'isPaletteVariable$B', function (pid) {
return ((pid & 64) != 0);
}, 1);

Clazz.newMeth(C$, 'getPalette$S', function (paletteName) {
if (paletteName.indexOf$I("_") < 0) for (var item, $item = 0, $$item = C$.values$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) if (paletteName.equalsIgnoreCase$S(item.$name)) return item;

return (paletteName.indexOf$S("property_") == 0 ? C$.PROPERTY : C$.UNKNOWN);
}, 1);

Clazz.newMeth(C$, 'getPaletteID$S', function (paletteName) {
if (paletteName.indexOf$I("_") < 0) for (var item, $item = 0, $$item = C$.values$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) if (paletteName.equalsIgnoreCase$S(item.$name)) return item.id;

return (paletteName.indexOf$S("property_") == 0 ? C$.PROPERTY.id : C$.UNKNOWN.id);
}, 1);

Clazz.newMeth(C$, 'getPaletteName$B', function (pid) {
for (var item, $item = 0, $$item = C$.values$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) if (item.id == pid) return item.$name;

return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S$I, "UNKNOWN", 0, [null, -1]);
Clazz.newEnumConst($vals, C$.c$$S$I, "NONE", 1, ["none", 0]);
Clazz.newEnumConst($vals, C$.c$$S$I, "CPK", 2, ["cpk", 1]);
Clazz.newEnumConst($vals, C$.c$$S$I, "PARTIAL_CHARGE", 3, ["partialcharge", 2]);
Clazz.newEnumConst($vals, C$.c$$S$I, "FORMAL_CHARGE", 4, ["formalcharge", 3]);
Clazz.newEnumConst($vals, C$.c$$S$I, "TEMP", 5, ["temperature", 68]);
Clazz.newEnumConst($vals, C$.c$$S$I, "FIXEDTEMP", 6, ["fixedtemperature", 5]);
Clazz.newEnumConst($vals, C$.c$$S$I, "SURFACE", 7, ["surfacedistance", 70]);
Clazz.newEnumConst($vals, C$.c$$S$I, "STRUCTURE", 8, ["structure", 7]);
Clazz.newEnumConst($vals, C$.c$$S$I, "AMINO", 9, ["amino", 8]);
Clazz.newEnumConst($vals, C$.c$$S$I, "SHAPELY", 10, ["shapely", 9]);
Clazz.newEnumConst($vals, C$.c$$S$I, "CHAIN", 11, ["chain", 10]);
Clazz.newEnumConst($vals, C$.c$$S$I, "GROUP", 12, ["group", 75]);
Clazz.newEnumConst($vals, C$.c$$S$I, "MONOMER", 13, ["monomer", 76]);
Clazz.newEnumConst($vals, C$.c$$S$I, "MOLECULE", 14, ["molecule", 77]);
Clazz.newEnumConst($vals, C$.c$$S$I, "ALTLOC", 15, ["altloc", 14]);
Clazz.newEnumConst($vals, C$.c$$S$I, "INSERTION", 16, ["insertion", 15]);
Clazz.newEnumConst($vals, C$.c$$S$I, "JMOL", 17, ["jmol", 16]);
Clazz.newEnumConst($vals, C$.c$$S$I, "RASMOL", 18, ["rasmol", 17]);
Clazz.newEnumConst($vals, C$.c$$S$I, "TYPE", 19, ["type", 18]);
Clazz.newEnumConst($vals, C$.c$$S$I, "ENERGY", 20, ["energy", 19]);
Clazz.newEnumConst($vals, C$.c$$S$I, "PROPERTY", 21, ["property", 84]);
Clazz.newEnumConst($vals, C$.c$$S$I, "VARIABLE", 22, ["variable", 85]);
Clazz.newEnumConst($vals, C$.c$$S$I, "STRAIGHTNESS", 23, ["straightness", 86]);
Clazz.newEnumConst($vals, C$.c$$S$I, "POLYMER", 24, ["polymer", 87]);
Clazz.newEnumConst($vals, C$.c$$S$I, "NUCLEIC", 25, ["nucleic", 24]);
C$.argbsCpkRasmol=Clazz.array(Integer.TYPE, -1, [16716947, 33554431, 50315467, 62005794, 83951360, 113821896, 126849023, 149946368, 165324064, 184549631, 203590434, 226525328, 249210144, 268412160, 285198386, 285277952, 343965840, 377520272, 411074704, 427851920, 452961536, 480586282, 497363498, 514140714, 598026794, 796950672, 899686640, 956278016, 1339729184]);
C$.argbsCpk=Clazz.array(Integer.TYPE, -1, [-60269, -1, -2490369, -3374849, -3997952, -19019, -7303024, -13610760, -62195, -7282608, -4987915, -5546766, -7667968, -4217178, -997216, -32768, -208, -14684129, -8334877, -7388972, -12714240, -1644826, -4209977, -5855573, -7693881, -6522169, -2070989, -1011552, -11481008, -3637197, -8552272, -4026481, -10055793, -4357917, -24320, -5887703, -10700591, -9425232, -16711936, -7012353, -7020320, -9190711, -11225675, -12869986, -14381169, -16089716, -16750203, -4144960, -9841, -5868173, -10059648, -6397003, -2852352, -7077740, -12411216, -11069553, -16725760, -9382657, -57, -2490425, -3670073, -6029369, -7340089, -10354745, -12189753, -13566009, -14680121, -16711780, -16718219, -16722862, -16728264, -16733404, -11681025, -11688193, -14576426, -14254677, -14260586, -15248249, -3092256, -11997, -4671280, -5876659, -11052703, -6402123, -5547008, -9089211, -12418410, -12451738, -16745216, -9393158, -16729345, -16735745, -16740353, -16744193, -16749569, -11248398, -8889117, -7712797, -6211884, -5038124, -5038150, -5042778, -4387449, -3735450, -3407783, -3080113, -2555835, -2097096, -1703890, -1376218]);
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
