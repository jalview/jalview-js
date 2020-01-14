(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "lookAhead", null, 'com.stevesoft.pat.Or');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.reverse=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (b) {
Clazz.super_(C$, this,1);
this.reverse=b;
}, 1);

Clazz.newMeth(C$, 'getNext$', function () {
return null;
});

Clazz.newMeth(C$, 'nextMatch$I$com_stevesoft_pat_Pthings', function (pos, pt) {
var p=C$.superclazz.prototype.getNext$.apply(this, []);
if (p != null ) {
return p.matchInternal$I$com_stevesoft_pat_Pthings(pos, pt);
} else {
return pos;
}});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (C$.superclazz.prototype.matchInternal$I$com_stevesoft_pat_Pthings.apply(this, [pos, pt]) >= 0) {
if (this.reverse) {
return -1;
} else {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
}} else {
if (this.reverse) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
} else {
return -1;
}}});

Clazz.newMeth(C$, 'leftForm$', function () {
if (this.reverse) {
return "(?!";
} else {
return "(?=";
}});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(1).c$$I,[0]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(1).c$$I,[0]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
var la=Clazz.new_(C$.c$$Z,[this.reverse]);
h.put$TK$TV(this, la);
h.put$TK$TV(la, la);
for (var i=0; i < this.v.size$(); i++) {
la.v.addElement$TE((this.v.elementAt$I(i)).clone$java_util_Hashtable(h));
}
return la;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
