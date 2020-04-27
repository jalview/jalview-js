(function(){var P$=Clazz.newPackage("java.beans"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PropertyChangeEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['propertyName'],'O',['newValue','java.lang.Object','+oldValue','+propagationId']]]

Clazz.newMeth(C$, 'c$$O$S$O$O', function (source, propertyName, oldValue, newValue) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
this.propertyName=propertyName;
this.newValue=newValue;
this.oldValue=oldValue;
}, 1);

Clazz.newMeth(C$, 'getPropertyName$', function () {
return this.propertyName;
});

Clazz.newMeth(C$, 'getNewValue$', function () {
return this.newValue;
});

Clazz.newMeth(C$, 'getOldValue$', function () {
return this.oldValue;
});

Clazz.newMeth(C$, 'setPropagationId$O', function (propagationId) {
this.propagationId=propagationId;
});

Clazz.newMeth(C$, 'getPropagationId$', function () {
return this.propagationId;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
