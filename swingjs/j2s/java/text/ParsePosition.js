(function(){var P$=Clazz.newPackage("java.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ParsePosition");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.index=0;
this.errorIndex=-1;
},1);

C$.$fields$=[['I',['index','errorIndex']]]

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.index;
});

Clazz.newMeth(C$, 'setIndex$I',  function (index) {
this.index=index;
});

Clazz.newMeth(C$, 'c$$I',  function (index) {
;C$.$init$.apply(this);
this.index=index;
}, 1);

Clazz.newMeth(C$, 'setErrorIndex$I',  function (ei) {
this.errorIndex=ei;
});

Clazz.newMeth(C$, 'getErrorIndex$',  function () {
return this.errorIndex;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null ) return false;
if (!(Clazz.instanceOf(obj, "java.text.ParsePosition"))) return false;
var other=obj;
return (this.index == other.index && this.errorIndex == other.errorIndex );
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return (this.errorIndex << 16) | this.index;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[index=" + this.index + ",errorIndex=" + this.errorIndex + ']' ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:09 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
