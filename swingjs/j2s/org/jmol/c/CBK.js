(function(){var P$=Clazz.newPackage("org.jmol.c"),I$=[[0,'javajs.util.SB']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*e*/var C$=Clazz.newClass(P$, "CBK", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['nameList']]]

Clazz.newMeth(C$, 'getCallback$S', function (name) {
name=name.toUpperCase$();
name=name.substring$I$I(0, Math.max(name.indexOf$S("CALLBACK"), 0));
for (var item, $item = 0, $$item = C$.values$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) if (item.name$().equalsIgnoreCase$S(name)) return item;

return null;
}, 1);

Clazz.newMeth(C$, 'getNameList$', function () {
if (C$.nameList == null ) {
var names=Clazz.new_($I$(1,1));
for (var item, $item = 0, $$item = C$.values$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) names.append$S(item.name$().toLowerCase$()).append$S("Callback;");

C$.nameList=names.toString();
}return C$.nameList;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ANIMFRAME", 0, []);
Clazz.newEnumConst($vals, C$.c$, "APPLETREADY", 1, []);
Clazz.newEnumConst($vals, C$.c$, "ATOMMOVED", 2, []);
Clazz.newEnumConst($vals, C$.c$, "AUDIO", 3, []);
Clazz.newEnumConst($vals, C$.c$, "CLICK", 4, []);
Clazz.newEnumConst($vals, C$.c$, "DRAGDROP", 5, []);
Clazz.newEnumConst($vals, C$.c$, "ECHO", 6, []);
Clazz.newEnumConst($vals, C$.c$, "ERROR", 7, []);
Clazz.newEnumConst($vals, C$.c$, "EVAL", 8, []);
Clazz.newEnumConst($vals, C$.c$, "HOVER", 9, []);
Clazz.newEnumConst($vals, C$.c$, "IMAGE", 10, []);
Clazz.newEnumConst($vals, C$.c$, "LOADSTRUCT", 11, []);
Clazz.newEnumConst($vals, C$.c$, "MEASURE", 12, []);
Clazz.newEnumConst($vals, C$.c$, "MESSAGE", 13, []);
Clazz.newEnumConst($vals, C$.c$, "MINIMIZATION", 14, []);
Clazz.newEnumConst($vals, C$.c$, "SERVICE", 15, []);
Clazz.newEnumConst($vals, C$.c$, "PICK", 16, []);
Clazz.newEnumConst($vals, C$.c$, "RESIZE", 17, []);
Clazz.newEnumConst($vals, C$.c$, "SCRIPT", 18, []);
Clazz.newEnumConst($vals, C$.c$, "SYNC", 19, []);
Clazz.newEnumConst($vals, C$.c$, "STRUCTUREMODIFIED", 20, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
