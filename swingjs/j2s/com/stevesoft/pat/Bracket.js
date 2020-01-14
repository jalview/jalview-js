(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt','java.util.Vector']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Bracket", null, 'com.stevesoft.pat.Or');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.neg=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (n) {
Clazz.super_(C$, this,1);
this.neg=n;
}, 1);

Clazz.newMeth(C$, 'leftForm$', function () {
if (this.neg) {
return "[^";
} else {
return "[";
}});

Clazz.newMeth(C$, 'rightForm$', function () {
return "]";
});

Clazz.newMeth(C$, 'sepForm$', function () {
return "";
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (pos >= pt.src.length$()) {
return -1;
}var r=C$.superclazz.prototype.matchInternal$I$com_stevesoft_pat_Pthings.apply(this, [pos, pt]);
if ((this.neg && r < 0 ) || (!this.neg && r >= 0 ) ) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos + 1, pt);
}return -1;
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(1).c$$I,[1]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(1).c$$I,[1]);
});

Clazz.newMeth(C$, 'addOr$com_stevesoft_pat_Pattern', function (p) {
this.pv=null;
this.v.addElement$TE(p);
p.setParent$com_stevesoft_pat_Pattern(null);
return this;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
var b=Clazz.new_(C$.c$$Z,[this.neg]);
b.v=Clazz.new_($I$(2));
for (var i=0; i < this.v.size$(); i++) {
b.v.addElement$TE((this.v.elementAt$I(i)).clone1$java_util_Hashtable(h));
}
return b;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
