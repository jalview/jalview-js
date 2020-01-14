(function(){var P$=Clazz.newPackage("javajs.api"),I$=[];
var C$=Clazz.newClass(P$, "Interface");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getInterface$S', function (name) {
try {
var x=Clazz.forName(name);
return (x == null  ? null : x.newInstance$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Interface.getInterface Error creating instance for " + name + ": \n" + e );
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getInstanceWithParams$S$ClassA$OA', function (name, classes, params) {
try {
var cl=Clazz.forName(name);
return cl.getConstructor$ClassA(classes).newInstance$OA(params);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Interface.getInterfaceWithParams Error creating instance for " + name + ": \n" + e );
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:59 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
