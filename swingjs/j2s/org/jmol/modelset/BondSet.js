(function(){var P$=Clazz.newPackage("org.jmol.modelset"),I$=[[0,'org.jmol.util.BSUtil']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BondSet", null, 'javajs.util.BS');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['associatedAtoms','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'newBS$javajs_util_BS$IA', function (bs, atoms) {
var b=Clazz.new_(C$);
$I$(1).copy2$javajs_util_BS$javajs_util_BS(bs, b);
b.associatedAtoms=atoms;
return b;
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:38 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
