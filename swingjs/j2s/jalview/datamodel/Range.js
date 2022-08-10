(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Range", null, null, 'jalview.datamodel.ContiguousI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','end']]]

Clazz.newMeth(C$, 'getBegin$',  function () {
return this.start;
});

Clazz.newMeth(C$, 'getEnd$',  function () {
return this.end;
});

Clazz.newMeth(C$, 'c$$I$I',  function (i, j) {
;C$.$init$.apply(this);
this.start=i;
this.end=j;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return String.valueOf$I(this.start) + "-" + String.valueOf$I(this.end) ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.start * 31 + this.end;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (Clazz.instanceOf(obj, "jalview.datamodel.Range")) {
var r=obj;
return (this.start == r.start && this.end == r.end );
}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
