(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[[0,'swingjs.xml.JSJAXBMarshaller','swingjs.xml.JSJAXBUnmarshaller']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSJAXBContext", null, 'javax.xml.bind.JAXBContext');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.properties=null;
this.javaClasses=null;
this.contextPath=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$ClassA$java_util_Map', function (classes, properties) {
Clazz.super_(C$, this,1);
this.properties=properties;
this.javaClasses=classes;
}, 1);

Clazz.newMeth(C$, 'c$$S$ClassLoader$java_util_Map', function (contextPath, classLoader, properties) {
Clazz.super_(C$, this,1);
this.contextPath=contextPath;
this.properties=properties;
}, 1);

Clazz.newMeth(C$, 'getjavaClasses$', function () {
return this.javaClasses;
});

Clazz.newMeth(C$, 'createMarshaller$', function () {
return Clazz.new_($I$(1).c$$javax_xml_bind_JAXBContext,[this]);
});

Clazz.newMeth(C$, 'createUnmarshaller$', function () {
return Clazz.new_($I$(2).c$$javax_xml_bind_JAXBContext,[this]);
});

Clazz.newMeth(C$, 'createValidator$', function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
