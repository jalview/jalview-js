(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AttributeValue");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['value'],'O',['names','String[]']]]

Clazz.newMeth(C$, 'c$$I$SA',  function (value, names) {
;C$.$init$.apply(this);
this.value=value;
this.names=names;
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.names[this.value];
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:08:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
