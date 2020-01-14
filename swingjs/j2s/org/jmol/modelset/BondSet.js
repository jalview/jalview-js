(function(){var P$=Clazz.newPackage("org.jmol.modelset"),I$=[[0,'org.jmol.util.BSUtil']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BondSet", null, 'javajs.util.BS');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.associatedAtoms=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'newBS$javajs_util_BS$IA', function (bs, atoms) {
var b=Clazz.new_(C$);
$I$(1).copy2$javajs_util_BS$javajs_util_BS(bs, b);
b.associatedAtoms=atoms;
return b;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
