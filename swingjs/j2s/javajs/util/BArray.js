(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BArray");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['data','byte[]']]]

Clazz.newMeth(C$, 'c$$BA',  function (data) {
;C$.$init$.apply(this);
this.data=data;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (Clazz.instanceOf(o, "javajs.util.BArray")) {
var d=(o).data;
if (d.length == this.data.length) {
for (var i=0; i < d.length; i++) if (d[i] != this.data[i]) return false;

return true;
}}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.data.hashCode$();
});

Clazz.newMeth(C$, 'toString',  function () {
return  String.instantialize(this.data);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:25 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
