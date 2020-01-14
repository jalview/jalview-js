(function(){var P$=Clazz.newPackage("sun.nio.cs"),p$1={},I$=[[0,'sun.nio.cs.US_ASCII']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FastCharsetProvider", null, 'java.nio.charset.spi.CharsetProvider');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.classMap=null;
this.aliasMap=null;
this.cache=null;
this.packagePrefix=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Map$java_util_Map$java_util_Map', function (pp, am, cm, c) {
Clazz.super_(C$, this,1);
this.packagePrefix=pp;
this.aliasMap=am;
this.classMap=cm;
this.cache=c;
}, 1);

Clazz.newMeth(C$, 'canonicalize$S', function (csn) {
var acn=this.aliasMap.get$O(csn);
return (acn != null ) ? acn : csn;
}, p$1);

Clazz.newMeth(C$, 'toLower$S', function (s) {
var n=s.length$();
var allLower=true;
for (var i=0; i < n; i++) {
var c=s.charAt$I(i).$c();
if (((c - 65) | (90 - c)) >= 0) {
allLower=false;
break;
}}
if (allLower) return s;
var ca=Clazz.array(Character.TYPE, [n]);
for (var i=0; i < n; i++) {
var c=s.charAt$I(i).$c();
if (((c - 65) | (90 - c)) >= 0) ca[i]=String.fromCharCode((c + 32));
 else ca[i]=String.fromCharCode(c);
}
return  String.instantialize(ca);
}, 1);

Clazz.newMeth(C$, 'lookup$S', function (charsetName) {
var csn=p$1.canonicalize$S.apply(this, [C$.toLower$S(charsetName)]);
var cs=this.cache.get$O(csn);
if (cs != null ) return cs;
var cln=this.classMap.get$O(csn);
if (cln == null ) return null;
if (cln.equals$O("US_ASCII")) {
cs=Clazz.new_($I$(1));
this.cache.put$TK$TV(csn, cs);
return cs;
}try {
var c=Clazz.forName(this.packagePrefix + "." + cln , true, this.getClass$().getClassLoader$());
cs=c.newInstance$();
this.cache.put$TK$TV(csn, cs);
return cs;
} catch (x) {
if (Clazz.exceptionOf(x,"ClassNotFoundException") || Clazz.exceptionOf(x,"IllegalAccessException") || Clazz.exceptionOf(x,"InstantiationException")){
return null;
} else {
throw x;
}
}
}, p$1);

Clazz.newMeth(C$, 'charsetForName$S', function (charsetName) {
{
return p$1.lookup$S.apply(this, [p$1.canonicalize$S.apply(this, [charsetName])]);
}});

Clazz.newMeth(C$, 'charsets$', function () {
return ((P$.FastCharsetProvider$1||
(function(){var C$=Clazz.newClass(P$, "FastCharsetProvider$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.i=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.i=this.b$['sun.nio.cs.FastCharsetProvider'].classMap.keySet$().iterator$();
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.i.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
var csn=this.i.next$();
return p$1.lookup$S.apply(this.b$['sun.nio.cs.FastCharsetProvider'], [csn]);
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.FastCharsetProvider$1.$init$, [this, null]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
