(function(){var P$=Clazz.newPackage("intervalstore.impl"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Range", null, null, 'intervalstore.api.IntervalI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','end']]]

Clazz.newMeth(C$, 'getBegin$', function () {
return this.start;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'c$$I$I', function (i, j) {
;C$.$init$.apply(this);
this.start=i;
this.end=j;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return String.valueOf$I(this.start) + "-" + String.valueOf$I(this.end) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.start * 31 + this.end;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return (Clazz.instanceOf(o, "intervalstore.impl.Range")) && this.equalsInterval$intervalstore_api_IntervalI(o) ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
