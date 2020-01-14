(function(){var P$=Clazz.newPackage("sun.security.action"),I$=[];
var C$=Clazz.newClass(P$, "GetPropertyAction", null, null, 'java.security.PrivilegedAction');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.theProp=null;
this.defaultVal=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (theProp) {
C$.$init$.apply(this);
this.theProp=theProp;
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (theProp, defaultVal) {
C$.$init$.apply(this);
this.theProp=theProp;
this.defaultVal=defaultVal;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var value=System.getProperty$S(this.theProp);
return (value == null  ? this.defaultVal : value);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
