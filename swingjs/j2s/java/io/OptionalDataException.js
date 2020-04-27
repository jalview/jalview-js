(function(){var P$=java.io,I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionalDataException", null, 'java.io.ObjectStreamException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['eof'],'I',['length']]]

Clazz.newMeth(C$, 'c$$I', function (len) {
Clazz.super_(C$, this);
this.eof=false;
this.length=len;
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (end) {
Clazz.super_(C$, this);
this.length=0;
this.eof=end;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
