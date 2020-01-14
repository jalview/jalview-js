(function(){var P$=Clazz.newPackage("swingjs.api"),I$=[];
var C$=Clazz.newClass(P$, "Interface");
C$.instances=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.instances="";
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getInstanceWithParams$S$ClassA$OA', function (name, classes, params) {
try {
var cl=Clazz.forName(name);
return cl.getConstructor$ClassA(classes).newInstance$OA(params);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getInstance$S$Z', function (name, isQuiet) {
var x=null;
{
Clazz._isQuiet = isQuiet;
}
try {
if (!isQuiet && C$.instances.indexOf$S(name + ";") <= 0 ) {
System.out.println$S("swingjs.api.Interface creating instance of " + name);
C$.instances += name + ";";
}var y=Clazz.forName(name);
if (y != null ) x=y.newInstance$();
} catch (e) {
System.out.println$S("Swingjs.api.Interface Error creating instance for " + name + ": \n" + e );
{
if (e.stack)System.out.println(e.stack);
}
} finally {
{
Clazz._isQuiet = false;
}
}
return x;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:46 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
