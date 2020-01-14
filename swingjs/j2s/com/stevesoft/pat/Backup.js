(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Backup", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bk=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (ii) {
Clazz.super_(C$, this,1);
this.bk=ii;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "(?" + (this.bk < 0 ? ">" + (-this.bk) : "<" + this.bk) + ")" + this.nextString$() ;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (pos < this.bk) {
return -1;
}return this.nextMatch$I$com_stevesoft_pat_Pthings(pos - this.bk, pt);
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(1).c$$I,[-this.bk]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(1).c$$I,[-this.bk]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$I,[this.bk]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
