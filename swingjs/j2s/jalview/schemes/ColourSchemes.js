(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.util.LinkedHashMap','jalview.schemes.JalviewColourScheme']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ColourSchemes");
C$.instance=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.instance=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.schemes=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.loadColourSchemes$();
}, 1);

Clazz.newMeth(C$, 'loadColourSchemes$', function () {
this.schemes=Clazz.new_($I$(1));
for (var cs, $cs = 0, $$cs = $I$(2).values$(); $cs<$$cs.length&&((cs=($$cs[$cs])),1);$cs++) {
try {
this.registerColourScheme$jalview_schemes_ColourSchemeI(cs.getSchemeClass$().newInstance$());
} catch (e) {
if (Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException")){
System.err.println$S("Error instantiating colour scheme for " + cs.toString() + " " + e.getMessage$() );
e.printStackTrace$();
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$, 'registerColourScheme$jalview_schemes_ColourSchemeI', function (cs) {
var name=cs.getSchemeName$();
if (name == null ) {
System.err.println$S("ColourScheme name may not be null");
return;
}var lower=name.toLowerCase$();
if (this.schemes.containsKey$O(lower)) {
System.err.println$S("Warning: overwriting colour scheme named " + name);
}this.schemes.put$TK$TV(lower, cs);
});

Clazz.newMeth(C$, 'removeColourScheme$S', function (name) {
if (name != null ) {
this.schemes.remove$O(name.toLowerCase$());
}});

Clazz.newMeth(C$, 'getColourScheme$S$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$java_util_Map', function (name, viewport, forData, hiddenRepSequences) {
if (name == null ) {
return null;
}var cs=this.schemes.get$O(name.toLowerCase$());
return cs == null  ? null : cs.getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI(viewport, forData);
});

Clazz.newMeth(C$, 'getColourScheme$S$jalview_datamodel_AnnotatedCollectionI', function (name, forData) {
return this.getColourScheme$S$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$java_util_Map(name, null, forData, null);
});

Clazz.newMeth(C$, 'getColourSchemes$', function () {
return this.schemes.values$();
});

Clazz.newMeth(C$, 'nameExists$S', function (name) {
if (name == null ) {
return false;
}return this.schemes.containsKey$O(name.toLowerCase$());
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
