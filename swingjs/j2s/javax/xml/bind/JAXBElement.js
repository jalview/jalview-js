(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[[0,['javax.xml.bind.JAXBElement','.GlobalScope']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JAXBElement", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['GlobalScope',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nil=false;
},1);

C$.$fields$=[['Z',['nil'],'O',['name','javax.xml.namespace.QName','declaredType','Class','+scope','value','<T>']]]

Clazz.newMeth(C$, 'c$$javax_xml_namespace_QName$Class$Class$O', function (name, declaredType, scope, value) {
;C$.$init$.apply(this);
if (declaredType == null  || name == null  ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.declaredType=declaredType;
if (scope == null ) scope=Clazz.getClass($I$(1));
this.scope=scope;
this.name=name;
this.setValue$O(value);
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_namespace_QName$Class$O', function (name, declaredType, value) {
C$.c$$javax_xml_namespace_QName$Class$Class$O.apply(this, [name, declaredType, Clazz.getClass($I$(1)), value]);
}, 1);

Clazz.newMeth(C$, 'getDeclaredType$', function () {
return this.declaredType;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setValue$O', function (t) {
this.value=t;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'getScope$', function () {
return this.scope;
});

Clazz.newMeth(C$, 'isNil$', function () {
return (this.value == null ) || this.nil ;
});

Clazz.newMeth(C$, 'setNil$Z', function (value) {
this.nil=value;
});

Clazz.newMeth(C$, 'isGlobalScope$', function () {
return this.scope === Clazz.getClass($I$(1)) ;
});

Clazz.newMeth(C$, 'isTypeSubstituted$', function () {
if (this.value == null ) return false;
return this.value.getClass$() !== this.declaredType ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JAXBElement, "GlobalScope", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
