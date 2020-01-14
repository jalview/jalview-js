(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,['javax.swing.Spring','.StaticSpring'],['javax.swing.Spring','.NegativeSpring'],['javax.swing.Spring','.SumSpring'],['javax.swing.Spring','.MaxSpring'],['javax.swing.Spring','.ScaleSpring'],['javax.swing.Spring','.WidthSpring'],['javax.swing.Spring','.HeightSpring']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Spring", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'range$Z', function (contract) {
return contract ? (this.getPreferredValue$() - this.getMinimumValue$()) : (this.getMaximumValue$() - this.getPreferredValue$());
}, p$1);

Clazz.newMeth(C$, 'getStrain$', function () {
var delta=(this.getValue$() - this.getPreferredValue$());
return delta / p$1.range$Z.apply(this, [this.getValue$() < this.getPreferredValue$()]);
});

Clazz.newMeth(C$, 'setStrain$D', function (strain) {
this.setValue$I(this.getPreferredValue$() + ((strain * p$1.range$Z.apply(this, [strain < 0 ]))|0));
});

Clazz.newMeth(C$, 'isCyclic$javax_swing_SpringLayout', function (l) {
return false;
});

Clazz.newMeth(C$, 'constant$I', function (pref) {
return C$.constant$I$I$I(pref, pref, pref);
}, 1);

Clazz.newMeth(C$, 'constant$I$I$I', function (min, pref, max) {
return Clazz.new_($I$(1).c$$I$I$I,[min, pref, max]);
}, 1);

Clazz.newMeth(C$, 'minus$javax_swing_Spring', function (s) {
return Clazz.new_($I$(2).c$$javax_swing_Spring,[s]);
}, 1);

Clazz.newMeth(C$, 'sum$javax_swing_Spring$javax_swing_Spring', function (s1, s2) {
return Clazz.new_($I$(3).c$$javax_swing_Spring$javax_swing_Spring,[s1, s2]);
}, 1);

Clazz.newMeth(C$, 'max$javax_swing_Spring$javax_swing_Spring', function (s1, s2) {
return Clazz.new_($I$(4).c$$javax_swing_Spring$javax_swing_Spring,[s1, s2]);
}, 1);

Clazz.newMeth(C$, 'difference$javax_swing_Spring$javax_swing_Spring', function (s1, s2) {
return C$.sum$javax_swing_Spring$javax_swing_Spring(s1, C$.minus$javax_swing_Spring(s2));
}, 1);

Clazz.newMeth(C$, 'scale$javax_swing_Spring$F', function (s, factor) {
C$.checkArg$O(s);
return Clazz.new_($I$(5).c$$javax_swing_Spring$F,[s, factor]);
}, 1);

Clazz.newMeth(C$, 'width$java_awt_Component', function (c) {
C$.checkArg$O(c);
return Clazz.new_($I$(6).c$$java_awt_Component,[c]);
}, 1);

Clazz.newMeth(C$, 'height$java_awt_Component', function (c) {
C$.checkArg$O(c);
return Clazz.new_($I$(7).c$$java_awt_Component,[c]);
}, 1);

Clazz.newMeth(C$, 'checkArg$O', function (s) {
if (s == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Argument must not be null"]);
}}, 1);
;
(function(){var C$=Clazz.newClass(P$.Spring, "AbstractSpring", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.Spring');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.size=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.size=-2147483648;
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.size != -2147483648 ? this.size : this.getPreferredValue$();
});

Clazz.newMeth(C$, 'setValue$I', function (size) {
if (this.size == size) {
return;
}if (size == -2147483648) {
this.clear$();
} else {
this.setNonClearValue$I(size);
}});

Clazz.newMeth(C$, 'clear$', function () {
this.size=-2147483648;
});

Clazz.newMeth(C$, 'setNonClearValue$I', function (size) {
this.size=size;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spring, "StaticSpring", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.Spring','.AbstractSpring']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.min=0;
this.pref=0;
this.max=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (pref) {
C$.c$$I$I$I.apply(this, [pref, pref, pref]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (min, pref, max) {
Clazz.super_(C$, this,1);
this.min=min;
this.pref=pref;
this.max=max;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "StaticSpring [" + this.min + ", " + this.pref + ", " + this.max + "]" ;
});

Clazz.newMeth(C$, 'getMinimumValue$', function () {
return this.min;
});

Clazz.newMeth(C$, 'getPreferredValue$', function () {
return this.pref;
});

Clazz.newMeth(C$, 'getMaximumValue$', function () {
return this.max;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spring, "NegativeSpring", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.Spring');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.s=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Spring', function (s) {
Clazz.super_(C$, this,1);
this.s=s;
}, 1);

Clazz.newMeth(C$, 'getMinimumValue$', function () {
return -this.s.getMaximumValue$();
});

Clazz.newMeth(C$, 'getPreferredValue$', function () {
return -this.s.getPreferredValue$();
});

Clazz.newMeth(C$, 'getMaximumValue$', function () {
return -this.s.getMinimumValue$();
});

Clazz.newMeth(C$, 'getValue$', function () {
return -this.s.getValue$();
});

Clazz.newMeth(C$, 'setValue$I', function (size) {
this.s.setValue$I(-size);
});

Clazz.newMeth(C$, 'isCyclic$javax_swing_SpringLayout', function (l) {
return this.s.isCyclic$javax_swing_SpringLayout(l);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spring, "ScaleSpring", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.Spring');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.s=null;
this.factor=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Spring$F', function (s, factor) {
Clazz.super_(C$, this,1);
this.s=s;
this.factor=factor;
}, 1);

Clazz.newMeth(C$, 'getMinimumValue$', function () {
return Math.round((this.factor < 0  ? this.s.getMaximumValue$() : this.s.getMinimumValue$()) * this.factor);
});

Clazz.newMeth(C$, 'getPreferredValue$', function () {
return Math.round(this.s.getPreferredValue$() * this.factor);
});

Clazz.newMeth(C$, 'getMaximumValue$', function () {
return Math.round((this.factor < 0  ? this.s.getMinimumValue$() : this.s.getMaximumValue$()) * this.factor);
});

Clazz.newMeth(C$, 'getValue$', function () {
return Math.round(this.s.getValue$() * this.factor);
});

Clazz.newMeth(C$, 'setValue$I', function (value) {
if (value == -2147483648) {
this.s.setValue$I(-2147483648);
} else {
this.s.setValue$I(Math.round(value / this.factor));
}});

Clazz.newMeth(C$, 'isCyclic$javax_swing_SpringLayout', function (l) {
return this.s.isCyclic$javax_swing_SpringLayout(l);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spring, "WidthSpring", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.Spring','.AbstractSpring']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.c=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component', function (c) {
Clazz.super_(C$, this,1);
this.c=c;
}, 1);

Clazz.newMeth(C$, 'getMinimumValue$', function () {
return this.c.getMinimumSize$().width;
});

Clazz.newMeth(C$, 'getPreferredValue$', function () {
return this.c.getPreferredSize$().width;
});

Clazz.newMeth(C$, 'getMaximumValue$', function () {
return Math.min(32767, this.c.getMaximumSize$().width);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spring, "HeightSpring", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.Spring','.AbstractSpring']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.c=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component', function (c) {
Clazz.super_(C$, this,1);
this.c=c;
}, 1);

Clazz.newMeth(C$, 'getMinimumValue$', function () {
return this.c.getMinimumSize$().height;
});

Clazz.newMeth(C$, 'getPreferredValue$', function () {
return this.c.getPreferredSize$().height;
});

Clazz.newMeth(C$, 'getMaximumValue$', function () {
return Math.min(32767, this.c.getMaximumSize$().height);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spring, "SpringMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.Spring');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.s=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Spring', function (s) {
Clazz.super_(C$, this,1);
this.s=s;
}, 1);

Clazz.newMeth(C$, 'getMinimumValue$', function () {
return this.map$I(this.s.getMinimumValue$());
});

Clazz.newMeth(C$, 'getPreferredValue$', function () {
return this.map$I(this.s.getPreferredValue$());
});

Clazz.newMeth(C$, 'getMaximumValue$', function () {
return Math.min(32767, this.map$I(this.s.getMaximumValue$()));
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.map$I(this.s.getValue$());
});

Clazz.newMeth(C$, 'setValue$I', function (value) {
if (value == -2147483648) {
this.s.setValue$I(-2147483648);
} else {
this.s.setValue$I(this.inv$I(value));
}});

Clazz.newMeth(C$, 'isCyclic$javax_swing_SpringLayout', function (l) {
return this.s.isCyclic$javax_swing_SpringLayout(l);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spring, "CompoundSpring", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.Spring','.StaticSpring']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.s1=null;
this.s2=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Spring$javax_swing_Spring', function (s1, s2) {
C$.superclazz.c$$I.apply(this, [-2147483648]);
C$.$init$.apply(this);
this.s1=s1;
this.s2=s2;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "CompoundSpring of " + this.s1 + " and " + this.s2 ;
});

Clazz.newMeth(C$, 'clear$', function () {
C$.superclazz.prototype.clear$.apply(this, []);
this.min=this.pref=this.max=-2147483648;
this.s1.setValue$I(-2147483648);
this.s2.setValue$I(-2147483648);
});

Clazz.newMeth(C$, 'getMinimumValue$', function () {
if (this.min == -2147483648) {
this.min=this.op$I$I(this.s1.getMinimumValue$(), this.s2.getMinimumValue$());
}return this.min;
});

Clazz.newMeth(C$, 'getPreferredValue$', function () {
if (this.pref == -2147483648) {
this.pref=this.op$I$I(this.s1.getPreferredValue$(), this.s2.getPreferredValue$());
}return this.pref;
});

Clazz.newMeth(C$, 'getMaximumValue$', function () {
if (this.max == -2147483648) {
this.max=this.op$I$I(this.s1.getMaximumValue$(), this.s2.getMaximumValue$());
}return this.max;
});

Clazz.newMeth(C$, 'getValue$', function () {
if (this.size == -2147483648) {
this.size=this.op$I$I(this.s1.getValue$(), this.s2.getValue$());
}return this.size;
});

Clazz.newMeth(C$, 'isCyclic$javax_swing_SpringLayout', function (l) {
return l.isCyclic$javax_swing_Spring(this.s1) || l.isCyclic$javax_swing_Spring(this.s2) ;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spring, "SumSpring", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.Spring','.CompoundSpring']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Spring$javax_swing_Spring', function (s1, s2) {
C$.superclazz.c$$javax_swing_Spring$javax_swing_Spring.apply(this, [s1, s2]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'op$I$I', function (x, y) {
return x + y;
});

Clazz.newMeth(C$, 'setNonClearValue$I', function (size) {
C$.superclazz.prototype.setNonClearValue$I.apply(this, [size]);
this.s1.setStrain$D(this.getStrain$());
this.s2.setValue$I(size - this.s1.getValue$());
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spring, "MaxSpring", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.Spring','.CompoundSpring']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Spring$javax_swing_Spring', function (s1, s2) {
C$.superclazz.c$$javax_swing_Spring$javax_swing_Spring.apply(this, [s1, s2]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'op$I$I', function (x, y) {
return Math.max(x, y);
});

Clazz.newMeth(C$, 'setNonClearValue$I', function (size) {
C$.superclazz.prototype.setNonClearValue$I.apply(this, [size]);
this.s1.setValue$I(size);
this.s2.setValue$I(size);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
