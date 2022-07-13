(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "lookAhead", null, 'com.stevesoft.pat.Or');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['reverse']]]

Clazz.newMeth(C$, 'c$$Z',  function (b) {
Clazz.super_(C$, this);
this.reverse=b;
}, 1);

Clazz.newMeth(C$, 'getNext$',  function () {
return null;
});

Clazz.newMeth(C$, 'nextMatch$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
var p=C$.superclazz.prototype.getNext$.apply(this, []);
if (p != null ) {
return p.matchInternal$I$com_stevesoft_pat_Pthings(pos, pt);
} else {
return pos;
}});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
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

Clazz.newMeth(C$, 'leftForm$',  function () {
if (this.reverse) {
return "(?!";
} else {
return "(?=";
}});

Clazz.newMeth(C$, 'minChars$',  function () {
return Clazz.new_($I$(1,1).c$$I,[0]);
});

Clazz.newMeth(C$, 'maxChars$',  function () {
return Clazz.new_($I$(1,1).c$$I,[0]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable',  function (h) {
var la=Clazz.new_(C$.c$$Z,[this.reverse]);
h.put$O$O(this, la);
h.put$O$O(la, la);
for (var i=0; i < this.v.size$(); i++) {
la.v.addElement$O((this.v.elementAt$I(i)).clone$java_util_Hashtable(h));
}
return la;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
