(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[[0,['javax.xml.bind.JAXBElement','.GlobalScope']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JAXBElement", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.declaredType=null;
this.scope=null;
this.value=null;
this.nil=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.nil=false;
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_namespace_QName$Class$Class$TT', function (name, declaredType, scope, value) {
C$.$init$.apply(this);
if (declaredType == null  || name == null  ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.declaredType=declaredType;
if (scope == null ) scope=Clazz.getClass($I$(1));
this.scope=scope;
this.name=name;
this.setValue$TT(value);
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_namespace_QName$Class$TT', function (name, declaredType, value) {
C$.c$$javax_xml_namespace_QName$Class$Class$TT.apply(this, [name, declaredType, Clazz.getClass($I$(1)), value]);
}, 1);

Clazz.newMeth(C$, 'getDeclaredType$', function () {
return this.declaredType;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setValue$TT', function (t) {
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
(function(){var C$=Clazz.newClass(P$.JAXBElement, "GlobalScope", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
