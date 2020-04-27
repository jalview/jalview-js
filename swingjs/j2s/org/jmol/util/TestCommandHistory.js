(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'org.jmol.util.CommandHistory','junit.framework.Assert']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
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
(function(a,f){return f.apply(null,a)})(["d", h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["c", h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["b", h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["a", h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})([null, h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["b", h.getCommandDown$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["c", h.getCommandDown$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["d", h.getCommandDown$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["", h.getCommandDown$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})([null, h.getCommandDown$()],$I$(2).assertEquals$S$S);
h.setMaxSize$I(2);
(function(a,f){return f.apply(null,a)})(["d", h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["c", h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})([null, h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})([null, h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})([null, h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["d", h.getCommandDown$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["", h.getCommandDown$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})([null, h.getCommandDown$()],$I$(2).assertEquals$S$S);
h.setMaxSize$I(4);
(function(a,f){return f.apply(null,a)})(["d", h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["c", h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})([null, h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})([null, h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})([null, h.getCommandUp$()],$I$(2).assertEquals$S$S);
h.addCommand$S("e");
h.addCommand$S("f");
(function(a,f){return f.apply(null,a)})(["f", h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["e", h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["d", h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["c", h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})([null, h.getCommandUp$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["d", h.getCommandDown$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["e", h.getCommandDown$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["f", h.getCommandDown$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})(["", h.getCommandDown$()],$I$(2).assertEquals$S$S);
(function(a,f){return f.apply(null,a)})([null, h.getCommandDown$()],$I$(2).assertEquals$S$S);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
