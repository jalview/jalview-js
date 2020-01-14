(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
var C$=Clazz.newClass(P$, "ArrayDataReader", null, 'javajs.util.DataReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.data=null;
this.pt=0;
this.len=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setData$O', function (data) {
this.data=data;
this.len=this.data.length;
return this;
});

Clazz.newMeth(C$, 'read$CA$I$I', function (buf, off, len) {
return this.readBuf$CA$I$I(buf, off, len);
});

Clazz.newMeth(C$, 'readLine$', function () {
return (this.pt < this.len ? this.data[this.pt++] : null);
});

Clazz.newMeth(C$, 'mark$J', function (ptr) {
this.ptMark=this.pt;
});

Clazz.newMeth(C$, 'reset$', function () {
this.pt=this.ptMark;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
