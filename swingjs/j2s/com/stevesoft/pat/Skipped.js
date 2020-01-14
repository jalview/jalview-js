(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.CaseMgr','com.stevesoft.pat.patInt']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Skipped", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.s=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
Clazz.super_(C$, this,1);
this.s=s;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.s + this.nextString$();
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (pt.no_check || $I$(1).regionMatches$S$Z$I$com_stevesoft_pat_StringLike$I$I(this.s, pt.ignoreCase, 0, pt.src, pos, this.s.length$()) ) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos + this.s.length$(), pt);
}return -1;
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(2).c$$I,[this.s.length$()]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(2).c$$I,[this.s.length$()]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$S,[this.s]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
