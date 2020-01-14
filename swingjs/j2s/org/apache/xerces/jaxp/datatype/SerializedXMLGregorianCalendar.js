(function(){var P$=Clazz.newPackage("org.apache.xerces.jaxp.datatype"),p$1={},I$=[[0,'org.apache.xerces.jaxp.datatype.DatatypeFactoryImpl']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SerializedXMLGregorianCalendar", null, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lexicalValue=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (lexicalValue) {
C$.$init$.apply(this);
this.lexicalValue=lexicalValue;
}, 1);

Clazz.newMeth(C$, 'readResolve', function () {
return Clazz.new_($I$(1)).newXMLGregorianCalendar$S(this.lexicalValue);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:31 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
