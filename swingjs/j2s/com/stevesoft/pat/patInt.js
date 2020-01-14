(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInf']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "patInt");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.i=0;
this.inf=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.i=0;
this.inf=false;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (init) {
C$.$init$.apply(this);
this.i=init;
this.inf=false;
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_patInt', function (p) {
C$.$init$.apply(this);
this.i=p.i;
this.inf=p.inf;
}, 1);

Clazz.newMeth(C$, 'setInf$Z', function (b) {
this.inf=b;
if (b) {
this.i=2147483647;
}});

Clazz.newMeth(C$, 'inc$', function () {
if (!this.inf) {
this.i++;
}});

Clazz.newMeth(C$, 'dec$', function () {
if (!this.inf) {
this.i--;
}});

Clazz.newMeth(C$, 'lessEq$com_stevesoft_pat_patInt', function (j) {
return !this.inf && (j.inf || this.i <= j.i ) ;
});

Clazz.newMeth(C$, 'equals$com_stevesoft_pat_patInt', function (j) {
return !j.inf && !this.inf && this.i == j.i  ;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.inf) {
return "";
} else {
return "" + this.i;
}});

Clazz.newMeth(C$, 'pluseq$com_stevesoft_pat_patInt', function (p) {
if (this.inf || p.inf ) {
this.setInf$Z(true);
} else {
this.i+=p.i;
}return this;
});

Clazz.newMeth(C$, 'mul$com_stevesoft_pat_patInt', function (p) {
if (this.inf || p.inf ) {
return Clazz.new_($I$(1));
}return Clazz.new_(C$.c$$I,[this.i * p.i]);
});

Clazz.newMeth(C$, 'mineq$com_stevesoft_pat_patInt', function (p) {
if (p.inf) {
return this;
}if (this.inf) {
this.i=p.i;
} else if (p.i < this.i) {
this.i=p.i;
}this.setInf$Z(false);
return this;
});

Clazz.newMeth(C$, 'maxeq$com_stevesoft_pat_patInt', function (p) {
if (this.inf || p.inf ) {
this.setInf$Z(true);
return this;
}if (p.i > this.i) {
this.i=p.i;
}return this;
});

Clazz.newMeth(C$, 'finite$', function () {
return !this.inf;
});

Clazz.newMeth(C$, 'intValue$', function () {
return this.inf ? 2147483647 : this.i;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
