(function(){var P$=Clazz.newPackage("sun.applet"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AppletEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['id'],'O',['arg','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O$I$O', function (source, id, argument) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
this.arg=argument;
this.id=id;
}, 1);

Clazz.newMeth(C$, 'getID$', function () {
return this.id;
});

Clazz.newMeth(C$, 'getArgument$', function () {
return this.arg;
});

Clazz.newMeth(C$, 'toString', function () {
var str=this.getClass$().getName$() + "[source=" + this.source + " + id=" + this.id ;
if (this.arg != null ) {
str += " + arg=" + this.arg;
}str += " ]";
return str;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:34 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
