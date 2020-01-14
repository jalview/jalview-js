(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.CaseMgr','com.stevesoft.pat.patInt']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "oneChar", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.c='\0';
this.altc='\0';
this.altc2='\0';
this.mask=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$C', function (ci) {
Clazz.super_(C$, this,1);
this.c=ci;
var cu;
var cl;
var ct;
cu=$I$(1).toUpperCase$C(this.c);
cl=$I$(1).toLowerCase$C(this.c);
ct=$I$(1).toTitleCase$C(this.c);
if (this.c == cu) {
this.altc=cl;
this.altc2=ct;
} else if (this.c == cl) {
this.altc=cu;
this.altc2=ct;
} else {
this.altc=cl;
this.altc2=cu;
}this.mask=this.c.$c() & this.altc.$c() & this.altc2.$c() ;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
var p;
var ret=-1;
if (pos < pt.src.length$() && !this.Masked$I$com_stevesoft_pat_Pthings(pos, pt)  && ((p=pt.src.charAt$I(pos)) == this.c || (pt.ignoreCase && (p == this.altc || p == this.altc2 ) ) ) ) {
ret=this.nextMatch$I$com_stevesoft_pat_Pthings(pos + 1, pt);
}return ret;
});

Clazz.newMeth(C$, 'toString', function () {
return P$.Pattern.protect$S$S$C("" + this.c, "[]{}(),$,-\"^.", "\\") + this.nextString$();
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(2).c$$I,[1]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(2).c$$I,[1]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$C,[this.c]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
