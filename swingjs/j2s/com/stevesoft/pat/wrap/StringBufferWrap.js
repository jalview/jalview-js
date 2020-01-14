(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap"),I$=[[0,'StringBuffer','com.stevesoft.pat.wrap.StringWrap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StringBufferWrap", null, null, 'com.stevesoft.pat.BasicStringBufferLike');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sb=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sb=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'append$C', function (c) {
this.sb.append$C(c);
});

Clazz.newMeth(C$, 'append$S', function (s) {
this.sb.append$S(s);
});

Clazz.newMeth(C$, 'length$', function () {
return this.sb.length$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.sb.toString();
});

Clazz.newMeth(C$, 'toStringLike$', function () {
return Clazz.new_($I$(2).c$$S,[this.sb.toString()]);
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.sb;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
