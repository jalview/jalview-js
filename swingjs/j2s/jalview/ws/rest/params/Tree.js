(function(){var P$=Clazz.newPackage("jalview.ws.rest.params"),I$=[[0,'jalview.analysis.NJTree','Error','jalview.util.MessageManager','java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Tree", null, 'jalview.ws.rest.InputType');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$ClassA.apply(this, [Clazz.array(Class, -1, [Clazz.getClass($I$(1))])]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'formatForInput$jalview_ws_rest_RestJob', function (rj) {
throw Clazz.new_($I$(2).c$$S,[$I$(3).getString$S("error.tree_inputtype_not_yet_implemented")]);
});

Clazz.newMeth(C$, 'getURLtokenPrefix$', function () {
return "NEWICK";
});

Clazz.newMeth(C$, 'getURLEncodedParameter$', function () {
var prms=Clazz.new_($I$(4));
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
