(function(){var P$=Clazz.newPackage("org.apache.xerces.jaxp.datatype"),p$1={},I$=[[0,'org.apache.xerces.jaxp.datatype.DatatypeFactoryImpl']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SerializedXMLGregorianCalendar", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['lexicalValue']]]

Clazz.newMeth(C$, 'c$$S',  function (lexicalValue) {
;C$.$init$.apply(this);
this.lexicalValue=lexicalValue;
}, 1);

Clazz.newMeth(C$, 'readResolve',  function () {
return Clazz.new_($I$(1,1)).newXMLGregorianCalendar$S(this.lexicalValue);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:58 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
