(function(){var P$=Clazz.newPackage("jalview.util"),p$1={},I$=[[0,'java.util.LinkedHashMap',['jalview.util.LinkedIdentityHashSet','.IdentityWrapper']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "LinkedIdentityHashSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractSet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.set=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.set=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, ['add$TE'], function (e) {
var el=(Clazz.new_($I$(2).c$$O$I,[e, this.set.size$()]));
return p$1.putIfAbsent$jalview_util_LinkedIdentityHashSet_IdentityWrapper$jalview_util_LinkedIdentityHashSet_IdentityWrapper.apply(this, [el, el]) == null ;
});

Clazz.newMeth(C$, 'putIfAbsent$jalview_util_LinkedIdentityHashSet_IdentityWrapper$jalview_util_LinkedIdentityHashSet_IdentityWrapper', function (key, value) {
var v=this.set.get$O(key);
if (v == null ) {
v=this.set.put$TK$TV(key, value);
}return v;
}, p$1);

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.LinkedIdentityHashSet$1||
(function(){var C$=Clazz.newClass(P$, "LinkedIdentityHashSet$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.se=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.se=this.b$['jalview.util.LinkedIdentityHashSet'].set.keySet$().iterator$();
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.se.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
return this.se.next$().obj;
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.LinkedIdentityHashSet$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'size$', function () {
return this.set.size$();
});

Clazz.newMeth(C$, ['indexOf$TE'], function (e) {
return this.set.get$O(e).p;
});
;
(function(){var C$=Clazz.newClass(P$.LinkedIdentityHashSet, "IdentityWrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.obj=null;
this.p=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$I', function (obj, p) {
C$.$init$.apply(this);
this.obj=obj;
this.p=p;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
return this.obj === (obj).obj ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return System.identityHashCode$O(this.obj);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
