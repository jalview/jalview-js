(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Regex']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Custom", null, 'com.stevesoft.pat.PatternSub');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start'],'S',['select'],'O',['v','com.stevesoft.pat.Validator']]]

Clazz.newMeth(C$, 'c$$S', function (s) {
Clazz.super_(C$, this);
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
h.put$O$O(c, c);
h.put$O$O(this, c);
c.sub=this.sub.clone$java_util_Hashtable(h);
return c;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
