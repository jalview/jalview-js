(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "End", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.retIsEnd=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (b) {
Clazz.super_(C$, this,1);
this.retIsEnd=b;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (this.retIsEnd && pt.mFlag && pos < pt.src.length$()  ) {
if (pt.src.charAt$I(pos) == "\n") {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
}}if (pt.src.length$() == pos) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
} else if (pos < pt.src.length$()) {
pt.src.charAt$I(pos);
}return -1;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.retIsEnd) {
return "$";
} else {
return "\\Z";
}});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(1).c$$I,[1]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$Z,[this.retIsEnd]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
