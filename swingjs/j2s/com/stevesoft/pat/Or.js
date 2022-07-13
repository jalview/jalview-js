(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'java.util.Vector','StringBuffer','com.stevesoft.pat.Pattern','com.stevesoft.pat.patInt']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Or", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pv=null;
},1);

C$.$fields$=[['O',['v','java.util.Vector','pv','com.stevesoft.pat.Pattern[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.v=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'leftForm$',  function () {
return "(?:";
});

Clazz.newMeth(C$, 'rightForm$',  function () {
return ")";
});

Clazz.newMeth(C$, 'sepForm$',  function () {
return "|";
});

Clazz.newMeth(C$, 'addOr$com_stevesoft_pat_Pattern',  function (p) {
this.pv=null;
this.v.addElement$O(p);
p.setParent$com_stevesoft_pat_Pattern(this);
return this;
});

Clazz.newMeth(C$, 'toString',  function () {
var i;
var sb=Clazz.new_($I$(2,1));
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

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
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

Clazz.newMeth(C$, 'minChars$',  function () {
if (this.v.size$() == 0) {
return Clazz.new_($I$(4,1).c$$I,[0]);
}var m=(this.v.elementAt$I(0)).countMinChars$();
for (var i=1; i < this.v.size$(); i++) {
var p=this.v.elementAt$I(i);
m.mineq$com_stevesoft_pat_patInt(p.countMinChars$());
}
return m;
});

Clazz.newMeth(C$, 'maxChars$',  function () {
if (this.v.size$() == 0) {
return Clazz.new_($I$(4,1).c$$I,[0]);
}var m=(this.v.elementAt$I(0)).countMaxChars$();
for (var i=1; i < this.v.size$(); i++) {
var p=this.v.elementAt$I(i);
m.maxeq$com_stevesoft_pat_patInt(p.countMaxChars$());
}
return m;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable',  function (h) {
var o=Clazz.new_(C$);
h.put$O$O(this, o);
h.put$O$O(o, o);
for (var i=0; i < this.v.size$(); i++) {
o.v.addElement$O((this.v.elementAt$I(i)).clone$java_util_Hashtable(h));
}
return o;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:23 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
