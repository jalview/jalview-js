(function(){var P$=Clazz.newPackage("java.beans"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PropertyVetoException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['evt','java.beans.PropertyChangeEvent']]]

Clazz.newMeth(C$, 'c$$S$java_beans_PropertyChangeEvent',  function (mess, evt) {
;C$.superclazz.c$$S.apply(this,[mess]);C$.$init$.apply(this);
this.evt=evt;
}, 1);

Clazz.newMeth(C$, 'getPropertyChangeEvent$',  function () {
return this.evt;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:08:55 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
