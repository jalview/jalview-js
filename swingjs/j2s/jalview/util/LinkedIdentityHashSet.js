(function(){var P$=Clazz.newPackage("jalview.util"),p$1={},I$=[[0,'java.util.LinkedHashMap',['jalview.util.LinkedIdentityHashSet','.IdentityWrapper']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LinkedIdentityHashSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractSet');
C$.$classes$=[['IdentityWrapper',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.set=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['set','java.util.LinkedHashMap']]]

Clazz.newMeth(C$, 'add$O',  function (e) {
var el=(Clazz.new_([e, this.set.size$()],$I$(2,1).c$$O$I));
return p$1.putIfAbsent$jalview_util_LinkedIdentityHashSet_IdentityWrapper$jalview_util_LinkedIdentityHashSet_IdentityWrapper.apply(this, [el, el]) == null ;
});

Clazz.newMeth(C$, 'putIfAbsent$jalview_util_LinkedIdentityHashSet_IdentityWrapper$jalview_util_LinkedIdentityHashSet_IdentityWrapper',  function (key, value) {
var v=this.set.get$O(key);
if (v == null ) {
v=this.set.put$O$O(key, value);
}return v;
}, p$1);

Clazz.newMeth(C$, 'iterator$',  function () {
return ((P$.LinkedIdentityHashSet$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LinkedIdentityHashSet$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.se=this.b$['jalview.util.LinkedIdentityHashSet'].set.keySet$().iterator$();
},1);

C$.$fields$=[['O',['se','java.util.Iterator']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.se.hasNext$();
});

Clazz.newMeth(C$, 'next$',  function () {
return this.se.next$().obj;
});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.LinkedIdentityHashSet$1.$init$,[this, null]));
});

Clazz.newMeth(C$, 'size$',  function () {
return this.set.size$();
});

Clazz.newMeth(C$, 'indexOf$O',  function (e) {
return this.set.get$O(e).p;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedIdentityHashSet, "IdentityWrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['p'],'O',['obj','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O$I',  function (obj, p) {
;C$.$init$.apply(this);
this.obj=obj;
this.p=p;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return this.obj === (obj).obj ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return System.identityHashCode$O(this.obj);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
