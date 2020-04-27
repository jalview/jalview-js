(function(){var P$=java.util,I$=[[0,'java.util.Objects']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractSet", null, 'java.util.AbstractCollection', 'java.util.Set');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o === this ) return true;
if (!(Clazz.instanceOf(o, "java.util.Set"))) return false;
var c=o;
if (c.size$() != this.size$()) return false;
try {
return this.containsAll$java_util_Collection(c);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassCastException")){
var unused = e$$;
{
return false;
}
} else if (Clazz.exceptionOf(e$$,"NullPointerException")){
var unused = e$$;
{
return false;
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'hashCode$', function () {
var h=0;
var i=this.iterator$();
while (i.hasNext$()){
var obj=i.next$();
if (obj != null ) h+=obj.hashCode$();
}
return h;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
$I$(1).requireNonNull$O(c);
var modified=false;
if (this.size$() > c.size$()) {
for (var i=c.iterator$(); i.hasNext$(); ) modified|=this.remove$O(i.next$());

} else {
for (var i=this.iterator$(); i.hasNext$(); ) {
if (c.contains$O(i.next$())) {
i.remove$();
modified=true;
}}
}return modified;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:36 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
