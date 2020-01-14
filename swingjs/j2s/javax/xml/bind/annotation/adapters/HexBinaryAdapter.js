(function(){var P$=Clazz.newPackage("javax.xml.bind.annotation.adapters"),I$=[[0,'javax.xml.bind.DatatypeConverter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HexBinaryAdapter", null, 'javax.xml.bind.annotation.adapters.XmlAdapter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['unmarshal$S','unmarshal$TValueType'], function (s) {
if (s == null ) return null;
return $I$(1).parseHexBinary$S(s);
});

Clazz.newMeth(C$, ['marshal$BA','marshal$TBoundType'], function (bytes) {
if (bytes == null ) return null;
return $I$(1).printHexBinary$BA(bytes);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:29 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
