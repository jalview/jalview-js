(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'java.util.HashSet']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*e*/var C$=Clazz.newClass(P$, "Species", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['modelOrganism']]
,['O',['modelOrganisms','java.util.Set']]]

Clazz.newMeth(C$, 'c$$Z',  function (model) {
;C$.$init$.apply(this);
this.modelOrganism=model;
}, 1);

Clazz.newMeth(C$, 'isModelOrganism$',  function () {
return this.modelOrganism;
});

Clazz.newMeth(C$, 'getModelOrganisms$',  function () {
return C$.modelOrganisms;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$Z, "human", 0, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "mouse", 1, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "s_cerevisiae", 2, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "cow", 3, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "pig", 4, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "rattus_norvegicus", 5, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "celegans", 6, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "sheep", 7, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "horse", 8, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "gorilla", 9, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "rabbit", 10, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "gibbon", 11, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "dog", 12, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "orangutan", 13, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "xenopus_tropicalis", 14, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "chimpanzee", 15, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "cat", 16, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "zebrafish", 17, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "chicken", 18, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "drosophila_melanogaster", 19, [true]);
C$.modelOrganisms=Clazz.new_($I$(1,1));
{
for (var s, $s = 0, $$s = C$.values$(); $s<$$s.length&&((s=($$s[$s])),1);$s++) {
if (s.isModelOrganism$()) {
C$.modelOrganisms.add$O(s);
}}
};
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
