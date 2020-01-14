(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'java.util.HashSet']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Species", null, 'Enum');
C$.modelOrganisms=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$Z, "human", 0, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "mouse", 1, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "s_cerevisiae", 2, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "cow", 3, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "pig", 4, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "rat", 5, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "celegans", 6, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "sheep", 7, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "horse", 8, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "gorilla", 9, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "rabbit", 10, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "gibbon", 11, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "dog", 12, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "orangutan", 13, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "xenopus", 14, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "chimpanzee", 15, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "cat", 16, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "zebrafish", 17, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "chicken", 18, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "dmelanogaster", 19, [true]);
C$.modelOrganisms=Clazz.new_($I$(1));
{
for (var s, $s = 0, $$s = C$.values$(); $s<$$s.length&&((s=($$s[$s])),1);$s++) {
if (s.isModelOrganism$()) {
C$.modelOrganisms.add$TE(s);
}}
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.modelOrganism=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (model) {
C$.$init$.apply(this);
this.modelOrganism=model;
}, 1);

Clazz.newMeth(C$, 'isModelOrganism$', function () {
return this.modelOrganism;
});

Clazz.newMeth(C$, 'getModelOrganisms$', function () {
return C$.modelOrganisms;
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
