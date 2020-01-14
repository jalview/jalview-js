(function(){var P$=Clazz.newPackage("java.text"),I$=[];
var C$=Clazz.newClass(P$, "ParsePosition");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.index=0;
this.errorIndex=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.index=0;
this.errorIndex=-1;
}, 1);

Clazz.newMeth(C$, 'getIndex$', function () {
return this.index;
});

Clazz.newMeth(C$, 'setIndex$I', function (index) {
this.index=index;
});

Clazz.newMeth(C$, 'c$$I', function (index) {
C$.$init$.apply(this);
this.index=index;
}, 1);

Clazz.newMeth(C$, 'setErrorIndex$I', function (ei) {
this.errorIndex=ei;
});

Clazz.newMeth(C$, 'getErrorIndex$', function () {
return this.errorIndex;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null ) return false;
if (!(Clazz.instanceOf(obj, "java.text.ParsePosition"))) return false;
var other=obj;
return (this.index == other.index && this.errorIndex == other.errorIndex );
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (this.errorIndex << 16) | this.index;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getName$() + "[index=" + this.index + ",errorIndex=" + this.errorIndex + ']' ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
