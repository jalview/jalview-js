(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Regex']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Custom", null, 'com.stevesoft.pat.PatternSub');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.select=null;
this.v=null;
this.start=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
Clazz.super_(C$, this,1);
this.select=s;
this.v=$I$(1).validators.get$O(s);
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
this.start=pos;
return this.sub.matchInternal$I$com_stevesoft_pat_Pthings(pos, pt);
});

Clazz.newMeth(C$, 'toString', function () {
var a=this.v.argsave == null  ? "" : ":" + this.v.argsave;
return "(??" + this.select + a + ")" + this.nextString$() ;
});

Clazz.newMeth(C$, 'minChars$', function () {
return this.v.minChars$();
});

Clazz.newMeth(C$, 'maxChars$', function () {
return this.v.maxChars$();
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
var c=Clazz.new_(C$.c$$S,[this.select]);
h.put$TK$TV(c, c);
h.put$TK$TV(this, c);
c.sub=this.sub.clone$java_util_Hashtable(h);
return c;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
