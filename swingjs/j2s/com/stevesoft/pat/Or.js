(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'java.util.Vector','StringBuffer','com.stevesoft.pat.Pattern','com.stevesoft.pat.patInt']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Or", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.v=null;
this.pv=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.pv=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.v=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'leftForm$', function () {
return "(?:";
});

Clazz.newMeth(C$, 'rightForm$', function () {
return ")";
});

Clazz.newMeth(C$, 'sepForm$', function () {
return "|";
});

Clazz.newMeth(C$, 'addOr$com_stevesoft_pat_Pattern', function (p) {
this.pv=null;
this.v.addElement$TE(p);
p.setParent$com_stevesoft_pat_Pattern(this);
return this;
});

Clazz.newMeth(C$, 'toString', function () {
var i;
var sb=Clazz.new_($I$(2));
sb.append$S(this.leftForm$());
if (this.v.size$() > 0) {
sb.append$S((this.v.elementAt$I(0)).toString());
}for (i=1; i < this.v.size$(); i++) {
sb.append$S(this.sepForm$());
sb.append$S((this.v.elementAt$I(i)).toString());
}
sb.append$S(this.rightForm$());
sb.append$S(this.nextString$());
return sb.toString();
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (this.pv == null ) {
this.pv=Clazz.array($I$(3), [this.v.size$()]);
this.v.copyInto$OA(this.pv);
}for (var i=0; i < this.v.size$(); i++) {
var p=this.pv[i];
var r=p.matchInternal$I$com_stevesoft_pat_Pthings(pos, pt);
if (r >= 0) {
return r;
}}
return -1;
});

Clazz.newMeth(C$, 'minChars$', function () {
if (this.v.size$() == 0) {
return Clazz.new_($I$(4).c$$I,[0]);
}var m=(this.v.elementAt$I(0)).countMinChars$();
for (var i=1; i < this.v.size$(); i++) {
var p=this.v.elementAt$I(i);
m.mineq$com_stevesoft_pat_patInt(p.countMinChars$());
}
return m;
});

Clazz.newMeth(C$, 'maxChars$', function () {
if (this.v.size$() == 0) {
return Clazz.new_($I$(4).c$$I,[0]);
}var m=(this.v.elementAt$I(0)).countMaxChars$();
for (var i=1; i < this.v.size$(); i++) {
var p=this.v.elementAt$I(i);
m.maxeq$com_stevesoft_pat_patInt(p.countMaxChars$());
}
return m;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
var o=Clazz.new_(C$);
h.put$TK$TV(this, o);
h.put$TK$TV(o, o);
for (var i=0; i < this.v.size$(); i++) {
o.v.addElement$TE((this.v.elementAt$I(i)).clone$java_util_Hashtable(h));
}
return o;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
