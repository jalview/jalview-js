(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Multi_stage2']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Multi", null, 'com.stevesoft.pat.PatternSub');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.a=null;
this.b=null;
this.p=null;
this.st2=null;
this.matchFewest=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.matchFewest=false;
}, 1);

Clazz.newMeth(C$, 'minChars$', function () {
return this.a.mul$com_stevesoft_pat_patInt(this.p.countMinChars$());
});

Clazz.newMeth(C$, 'maxChars$', function () {
return this.b.mul$com_stevesoft_pat_patInt(this.p.countMaxChars$());
});

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern', function (a, b, p) {
Clazz.super_(C$, this,1);
this.a=a;
this.b=b;
this.p=p;
this.st2=Clazz.new_($I$(1).c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern,[a, b, p]);
this.st2.parent=this;
this.sub=this.st2.sub;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
this.st2.matchFewest=this.matchFewest;
return this.st2.toString();
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
try {
this.st2=Clazz.new_($I$(1).c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern,[this.a, this.b, this.p]);
} catch (r__) {
if (Clazz.exceptionOf(r__,"com.stevesoft.pat.RegSyntax")){
} else {
throw r__;
}
}
this.st2.matchFewest=this.matchFewest;
this.st2.parent=this;
return this.st2.matchInternal$I$com_stevesoft_pat_Pthings(pos, pt);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
try {
var m=Clazz.new_(C$.c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern,[this.a, this.b, (this.p).clone$java_util_Hashtable(h)]);
m.matchFewest=this.matchFewest;
return m;
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
return null;
} else {
throw rs;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
