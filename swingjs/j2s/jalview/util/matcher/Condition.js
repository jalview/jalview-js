(function(){var P$=Clazz.newPackage("jalview.util.matcher"),I$=[[0,'jalview.util.MessageManager']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*e*/var C$=Clazz.newClass(P$, "Condition", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['numeric','needsAPattern'],'S',['stableName']]]

Clazz.newMeth(C$, 'fromString$S',  function (stableName) {
for (var c, $c = 0, $$c = C$.values$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c.stableName.equalsIgnoreCase$S(stableName)) {
return c;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z$S',  function (isNumeric, needsPattern, stablename) {
;C$.$init$.apply(this);
this.numeric=isNumeric;
this.needsAPattern=needsPattern;
this.stableName=stablename;
}, 1);

Clazz.newMeth(C$, 'isNumeric$',  function () {
return this.numeric;
});

Clazz.newMeth(C$, 'needsAPattern$',  function () {
return this.needsAPattern;
});

Clazz.newMeth(C$, 'getStableName$',  function () {
return this.stableName;
});

Clazz.newMeth(C$, 'toString',  function () {
return $I$(1,"getStringOrReturn$S$S",["label.matchCondition_", this.name$()]);
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$Z$Z$S, "Contains", 0, [false, true, "Contains"]);
Clazz.newEnumConst($vals, C$.c$$Z$Z$S, "NotContains", 1, [false, true, "NotContains"]);
Clazz.newEnumConst($vals, C$.c$$Z$Z$S, "Matches", 2, [false, true, "Matches"]);
Clazz.newEnumConst($vals, C$.c$$Z$Z$S, "NotMatches", 3, [false, true, "NotMatches"]);
Clazz.newEnumConst($vals, C$.c$$Z$Z$S, "Present", 4, [false, false, "Present"]);
Clazz.newEnumConst($vals, C$.c$$Z$Z$S, "NotPresent", 5, [false, false, "NotPresent"]);
Clazz.newEnumConst($vals, C$.c$$Z$Z$S, "EQ", 6, [true, true, "EQ"]);
Clazz.newEnumConst($vals, C$.c$$Z$Z$S, "NE", 7, [true, true, "NE"]);
Clazz.newEnumConst($vals, C$.c$$Z$Z$S, "LT", 8, [true, true, "LT"]);
Clazz.newEnumConst($vals, C$.c$$Z$Z$S, "LE", 9, [true, true, "LE"]);
Clazz.newEnumConst($vals, C$.c$$Z$Z$S, "GT", 10, [true, true, "GT"]);
Clazz.newEnumConst($vals, C$.c$$Z$Z$S, "GE", 11, [true, true, "GE"]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
