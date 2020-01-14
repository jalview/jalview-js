(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt','com.stevesoft.pat.patInf']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Validator");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.argsave=null;
this.pattern=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.argsave=null;
this.pattern=".";
}, 1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (src, start, end) {
return end;
});

Clazz.newMeth(C$, 'arg$S', function (s) {
return null;
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(1).c$$I,[0]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(2));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
