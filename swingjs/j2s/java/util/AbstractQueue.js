(function(){var P$=java.util,I$=[];
var C$=Clazz.newClass(P$, "AbstractQueue", null, 'java.util.AbstractCollection', 'java.util.Queue');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, ['add$TE'], function (e) {
if (this.offer$TE(e)) return true;
 else throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Queue full"]);
});

Clazz.newMeth(C$, 'remove$', function () {
var x=this.poll$();
if (x != null ) return x;
 else throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$, 'element$', function () {
var x=this.peek$();
if (x != null ) return x;
 else throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$, 'clear$', function () {
while (this.poll$() != null );
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
var modified=false;
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) if (this.add$TE(e)) modified=true;

return modified;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
