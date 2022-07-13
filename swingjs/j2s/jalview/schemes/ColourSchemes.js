(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.util.LinkedHashMap','jalview.schemes.JalviewColourScheme','java.util.Locale']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColourSchemes");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['schemes','java.util.Map']]
,['O',['instance','jalview.schemes.ColourSchemes']]]

Clazz.newMeth(C$, 'getInstance$',  function () {
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.loadColourSchemes$();
}, 1);

Clazz.newMeth(C$, 'loadColourSchemes$',  function () {
this.schemes=Clazz.new_($I$(1,1));
for (var cs, $cs = 0, $$cs = $I$(2).values$(); $cs<$$cs.length&&((cs=($$cs[$cs])),1);$cs++) {
try {
this.registerColourScheme$jalview_schemes_ColourSchemeI(cs.getSchemeClass$().getDeclaredConstructor$ClassA(Clazz.array(Class, -1, [])).newInstance$OA(Clazz.array(java.lang.Object, -1, [])));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InstantiationException") || Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
System.err.println$S("Error instantiating colour scheme for " + cs.toString() + " " + e.getMessage$() );
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"ReflectiveOperationException")){
var roe = e$$;
{
roe.printStackTrace$();
}
} else {
throw e$$;
}
}
}
});

Clazz.newMeth(C$, 'registerColourScheme$jalview_schemes_ColourSchemeI',  function (cs) {
var name=cs.getSchemeName$();
if (name == null ) {
System.err.println$S("ColourScheme name may not be null");
return;
}var lower=name.toLowerCase$java_util_Locale($I$(3).ROOT);
if (this.schemes.containsKey$O(lower)) {
System.err.println$S("Warning: overwriting colour scheme named " + name);
}this.schemes.put$O$O(lower, cs);
});

Clazz.newMeth(C$, 'removeColourScheme$S',  function (name) {
if (name != null ) {
this.schemes.remove$O(name.toLowerCase$java_util_Locale($I$(3).ROOT));
}});

Clazz.newMeth(C$, 'getColourScheme$S$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$java_util_Map',  function (name, viewport, forData, hiddenRepSequences) {
if (name == null ) {
return null;
}var cs=this.schemes.get$O(name.toLowerCase$java_util_Locale($I$(3).ROOT));
return cs == null  ? null : cs.getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI(viewport, forData);
});

Clazz.newMeth(C$, 'getColourScheme$S$jalview_datamodel_AnnotatedCollectionI',  function (name, forData) {
return this.getColourScheme$S$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$java_util_Map(name, null, forData, null);
});

Clazz.newMeth(C$, 'getColourSchemes$',  function () {
return this.schemes.values$();
});

Clazz.newMeth(C$, 'nameExists$S',  function (name) {
if (name == null ) {
return false;
}return this.schemes.containsKey$O(name.toLowerCase$java_util_Locale($I$(3).ROOT));
});

C$.$static$=function(){C$.$static$=0;
C$.instance=Clazz.new_(C$);
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
