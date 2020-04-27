(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'swingjs.JSUtil']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSApplet", null, 'javax.swing.JApplet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['runMain$S$SA','runMain'], function (className, args) {
var theClass=null;
try {
theClass=Clazz.forName(className);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
System.out.println$S("Running main but cannot find class " + className);
$I$(1,"alert$O",["Cannot find class " + className + " for running main(args)" ]);
e.printStackTrace$();
return null;
} else {
throw e;
}
}
System.out.println$S("Running main(args) in class " + className);
{
setTimeout(function(){theClass.$clazz$.main$SA.call(null, args || []);},1);
}
return theClass;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-27 13:55:44 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
