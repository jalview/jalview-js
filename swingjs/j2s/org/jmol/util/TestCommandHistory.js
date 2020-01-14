(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'org.jmol.util.CommandHistory']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TestCommandHistory", null, 'junit.framework.TestCase');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (arg0) {
C$.superclazz.c$$S.apply(this, [arg0]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'testHistory$', function () {
var h=Clazz.new_($I$(1));
h.reset$I(4);
h.addCommand$S("x");
h.addCommand$S("y");
h.addCommand$S("z");
h.addCommand$S("a");
h.addCommand$S("b");
h.addCommand$S("c");
h.addCommand$S("d");
junit.framework.Assert.assertEquals$S$S("d", h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S("c", h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S("b", h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S("a", h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S(null, h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S("b", h.getCommandDown$());
junit.framework.Assert.assertEquals$S$S("c", h.getCommandDown$());
junit.framework.Assert.assertEquals$S$S("d", h.getCommandDown$());
junit.framework.Assert.assertEquals$S$S("", h.getCommandDown$());
junit.framework.Assert.assertEquals$S$S(null, h.getCommandDown$());
h.setMaxSize$I(2);
junit.framework.Assert.assertEquals$S$S("d", h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S("c", h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S(null, h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S(null, h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S(null, h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S("d", h.getCommandDown$());
junit.framework.Assert.assertEquals$S$S("", h.getCommandDown$());
junit.framework.Assert.assertEquals$S$S(null, h.getCommandDown$());
h.setMaxSize$I(4);
junit.framework.Assert.assertEquals$S$S("d", h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S("c", h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S(null, h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S(null, h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S(null, h.getCommandUp$());
h.addCommand$S("e");
h.addCommand$S("f");
junit.framework.Assert.assertEquals$S$S("f", h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S("e", h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S("d", h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S("c", h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S(null, h.getCommandUp$());
junit.framework.Assert.assertEquals$S$S("d", h.getCommandDown$());
junit.framework.Assert.assertEquals$S$S("e", h.getCommandDown$());
junit.framework.Assert.assertEquals$S$S("f", h.getCommandDown$());
junit.framework.Assert.assertEquals$S$S("", h.getCommandDown$());
junit.framework.Assert.assertEquals$S$S(null, h.getCommandDown$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
