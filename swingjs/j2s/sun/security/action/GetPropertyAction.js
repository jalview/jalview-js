(function(){var P$=Clazz.newPackage("sun.security.action"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "GetPropertyAction", null, null, 'java.security.PrivilegedAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['theProp','defaultVal']]]

Clazz.newMeth(C$, 'c$$S', function (theProp) {
;C$.$init$.apply(this);
this.theProp=theProp;
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (theProp, defaultVal) {
;C$.$init$.apply(this);
this.theProp=theProp;
this.defaultVal=defaultVal;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var value=System.getProperty$S(this.theProp);
return (value == null  ? this.defaultVal : value);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:43 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
