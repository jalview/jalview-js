(function(){var P$=Clazz.newPackage("jalview.ws.rest.params"),I$=[[0,'jalview.analysis.NJTree','Error','jalview.util.MessageManager','java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Tree", null, 'jalview.ws.rest.InputType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$ClassA.apply(this,[Clazz.array(Class, -1, [Clazz.getClass($I$(1))])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'formatForInput$jalview_ws_rest_RestJob', function (rj) {
throw Clazz.new_([$I$(3).getString$S("error.tree_inputtype_not_yet_implemented")],$I$(2,1).c$$S);
});

Clazz.newMeth(C$, 'getURLtokenPrefix$', function () {
return "NEWICK";
});

Clazz.newMeth(C$, 'getURLEncodedParameter$', function () {
var prms=Clazz.new_($I$(4,1));
C$.superclazz.prototype.addBaseParams$java_util_ArrayList.apply(this, [prms]);
return prms;
});

Clazz.newMeth(C$, 'configureProperty$S$S$StringBuffer', function (tok, val, warnings) {
return true;
});

Clazz.newMeth(C$, 'getOptions$', function () {
return this.getBaseOptions$();
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
