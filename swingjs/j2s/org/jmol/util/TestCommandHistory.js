(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'org.jmol.util.CommandHistory','junit.framework.Assert']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TestCommandHistory", null, 'junit.framework.TestCase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S', function (arg0) {
;C$.superclazz.c$$S.apply(this,[arg0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'testHistory$', function () {
var h=Clazz.new_($I$(1,1));
h.reset$I(4);
h.addCommand$S("x");
h.addCommand$S("y");
h.addCommand$S("z");
h.addCommand$S("a");
h.addCommand$S("b");
h.addCommand$S("c");
h.addCommand$S("d");
$I$(2,"assertEquals$S$S",["d", h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",["c", h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",["b", h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",["a", h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",[null, h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",["b", h.getCommandDown$()]);
$I$(2,"assertEquals$S$S",["c", h.getCommandDown$()]);
$I$(2,"assertEquals$S$S",["d", h.getCommandDown$()]);
$I$(2,"assertEquals$S$S",["", h.getCommandDown$()]);
$I$(2,"assertEquals$S$S",[null, h.getCommandDown$()]);
h.setMaxSize$I(2);
$I$(2,"assertEquals$S$S",["d", h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",["c", h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",[null, h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",[null, h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",[null, h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",["d", h.getCommandDown$()]);
$I$(2,"assertEquals$S$S",["", h.getCommandDown$()]);
$I$(2,"assertEquals$S$S",[null, h.getCommandDown$()]);
h.setMaxSize$I(4);
$I$(2,"assertEquals$S$S",["d", h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",["c", h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",[null, h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",[null, h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",[null, h.getCommandUp$()]);
h.addCommand$S("e");
h.addCommand$S("f");
$I$(2,"assertEquals$S$S",["f", h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",["e", h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",["d", h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",["c", h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",[null, h.getCommandUp$()]);
$I$(2,"assertEquals$S$S",["d", h.getCommandDown$()]);
$I$(2,"assertEquals$S$S",["e", h.getCommandDown$()]);
$I$(2,"assertEquals$S$S",["f", h.getCommandDown$()]);
$I$(2,"assertEquals$S$S",["", h.getCommandDown$()]);
$I$(2,"assertEquals$S$S",[null, h.getCommandDown$()]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
