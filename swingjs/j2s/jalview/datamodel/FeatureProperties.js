(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FeatureProperties");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isCodingFeature$S$S',  function (dbrefsource, type) {
if (type.equalsIgnoreCase$S("CDS")) {
return (dbrefsource == null  || dbrefsource.equalsIgnoreCase$S("EMBL")  || dbrefsource.equalsIgnoreCase$S("EMBLCDS") );
}return false;
}, 1);

Clazz.newMeth(C$, 'getCodingFeature$S',  function (dbrefsource) {
if ("EMBL".equalsIgnoreCase$S(dbrefsource) || "EMBLCDS".equalsIgnoreCase$S(dbrefsource) ) {
return "CDS";
}return null;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
