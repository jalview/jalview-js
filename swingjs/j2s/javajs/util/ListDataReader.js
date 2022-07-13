(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ListDataReader", null, 'javajs.util.DataReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['pt','len'],'O',['data','javajs.util.Lst']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setData$O',  function (data) {
this.data=data;
this.len=this.data.size$();
return this;
});

Clazz.newMeth(C$, 'read$CA$I$I',  function (buf, off, len) {
return this.readBuf$CA$I$I(buf, off, len);
});

Clazz.newMeth(C$, 'readLine$',  function () {
return (this.pt < this.len ? this.data.get$I(this.pt++) : null);
});

Clazz.newMeth(C$, 'mark$J',  function (ptr) {
this.ptMark=this.pt;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.pt=this.ptMark;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:26 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
