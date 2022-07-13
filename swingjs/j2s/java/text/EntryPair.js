(function(){var P$=Clazz.newPackage("java.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EntryPair");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['fwd'],'I',['value'],'S',['entryName']]]

Clazz.newMeth(C$, 'c$$S$I',  function (name, value) {
C$.c$$S$I$Z.apply(this, [name, value, true]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$Z',  function (name, value, fwd) {
;C$.$init$.apply(this);
this.entryName=name;
this.value=value;
this.fwd=fwd;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:09 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
