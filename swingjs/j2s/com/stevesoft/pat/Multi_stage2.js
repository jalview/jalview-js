(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Multi_stage2", null, 'com.stevesoft.pat.PatternSub');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.matchFewest=false;
this.pos_old=-1;
},1);

C$.$fields$=[['Z',['matchFewest'],'I',['pos_old'],'O',['nextRet','com.stevesoft.pat.Pattern','count','com.stevesoft.pat.patInt','+matchMin','+matchMax']]]

Clazz.newMeth(C$, 'toString', function () {
var ret="";
ret += this.sub.toString();
ret += "{" + this.matchMin + "," + this.matchMax + "}" ;
if (this.matchFewest) {
ret += "?";
}ret += this.parent.nextString$();
return ret;
});

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern', function (a, b, p) {
Clazz.super_(C$, this);
if (p == null ) {
$I$(1).endItAll$S("Multiple match of Null pattern requested.");
}this.sub=p;
this.nextRet=this;
this.sub.setParent$com_stevesoft_pat_Pattern(this);
this.matchMin=a;
this.matchMax=b;
this.count=Clazz.new_($I$(2,1).c$$I,[0]);
if (!a.lessEq$com_stevesoft_pat_patInt(b)) {
$I$(1).endItAll$S("Bad Multi Args: " + a + ">" + b );
}var i=Clazz.new_($I$(2,1).c$$I,[-1]);
if (a.lessEq$com_stevesoft_pat_patInt(i)) {
$I$(1).endItAll$S("Bad Multi Args: " + a + "< 0" );
}}, 1);

Clazz.newMeth(C$, 'getNext$', function () {
return this.nextRet;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
this.sub.setParent$com_stevesoft_pat_Pattern(this);
var canUse=-1;
if (this.pos_old >= 0 && pos == this.pos_old ) {
return -1;
}this.pos_old=pos;
if (this.matchMin.lessEq$com_stevesoft_pat_patInt(this.count)) {
canUse=pos;
}if (!this.count.lessEq$com_stevesoft_pat_patInt(this.matchMax) || pos > pt.src.length$() ) {
return -1;
}if ((this.matchFewest || this.count.equals$com_stevesoft_pat_patInt(this.matchMax) ) && canUse >= 0 ) {
var n=C$.superclazz.prototype.getNext$.apply(this, []);
if (n == null ) {
return canUse;
}var ret=this.testMatch$com_stevesoft_pat_Pattern$I$com_stevesoft_pat_Pthings(n, pos, pt);
if (ret >= 0) {
return ret;
} else {
canUse=-1;
}}this.count.inc$();
try {
if (this.count.lessEq$com_stevesoft_pat_patInt(this.matchMax)) {
var r=this.testMatch$com_stevesoft_pat_Pattern$I$com_stevesoft_pat_Pthings(this.sub, pos, pt);
if (r >= 0) {
return r;
}}} finally {
this.count.dec$();
}
if (!this.matchFewest && canUse >= 0 ) {
var n=C$.superclazz.prototype.getNext$.apply(this, []);
if (n == null ) {
return canUse;
}var ret=this.testMatch$com_stevesoft_pat_Pattern$I$com_stevesoft_pat_Pthings(n, pos, pt);
return ret;
} else {
return canUse;
}});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
try {
var m=Clazz.new_(C$.c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern,[this.matchMin, this.matchMax, this.sub.clone$java_util_Hashtable(h)]);
m.matchFewest=this.matchFewest;
return m;
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
return null;
} else {
throw rs;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
