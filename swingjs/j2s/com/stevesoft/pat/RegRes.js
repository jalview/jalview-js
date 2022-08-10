(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RegRes", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.marks=null;
this.didMatch_=false;
this.src=null;
this.charsMatched_=0;
this.matchFrom_=0;
this.numSubs_=0;
},1);

C$.$fields$=[['Z',['didMatch_'],'I',['charsMatched_','matchFrom_','numSubs_'],'O',['marks','int[]','src','com.stevesoft.pat.StringLike']]]

Clazz.newMeth(C$, 'getString$',  function () {
return this.src.toString();
});

Clazz.newMeth(C$, 'getStringLike$',  function () {
return this.src;
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(1,1));
sb.append$S("match=" + this.matchedFrom$() + ":" + this.charsMatched$() );
if (!this.didMatch$()) {
return sb.toString();
}for (var i=0; i < this.numSubs$(); i++) {
var n=i + 1;
sb.append$S(" sub(" + n + ")=" + this.matchedFrom$I(n) + ":" + this.charsMatched$I(n) );
}
return sb.toString();
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_RegRes',  function (r) {
;C$.$init$.apply(this);
this.copyOutOf$com_stevesoft_pat_RegRes(r);
}, 1);

Clazz.newMeth(C$, 'copyOutOf$com_stevesoft_pat_RegRes',  function (r) {
if (r.marks == null ) {
this.marks=null;
} else {
try {
this.marks=Clazz.array(Integer.TYPE, [r.marks.length]);
for (var i=0; i < this.marks.length; i++) {
this.marks[i]=r.marks[i];
}
} catch (t) {
}
}this.didMatch_=r.didMatch_;
this.src=r.src;
this.charsMatched_=r.charsMatched_;
this.matchFrom_=r.matchFrom_;
this.numSubs_=r.numSubs_;
});

Clazz.newMeth(C$, 'clone$',  function () {
return Clazz.new_(C$.c$$com_stevesoft_pat_RegRes,[this]);
});

Clazz.newMeth(C$, 'equals$com_stevesoft_pat_RegRes',  function (r) {
if (this.charsMatched_ != r.charsMatched_ || this.matchFrom_ != r.matchFrom_  || this.didMatch_ != r.didMatch_   || this.numSubs_ != r.numSubs_  || !this.src.unwrap$().equals$O(r.src.unwrap$()) ) {
return false;
}if (this.marks == null  && r.marks != null  ) {
return false;
}if (this.marks != null  && r.marks == null  ) {
return false;
}for (var i=1; i <= this.numSubs_; i++) {
if (this.matchedFrom$I(i) != r.matchedFrom$I(i)) {
return false;
} else if (this.charsMatched$I(i) != r.charsMatched$I(i)) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'stringMatched$',  function () {
var mf=this.matchedFrom$();
var cm=this.charsMatched$();
return !this.didMatch_ || mf < 0  || cm < 0  ? null : this.src.substring$I$I(mf, mf + cm);
});

Clazz.newMeth(C$, 'matchedFrom$I',  function (i) {
if (this.marks == null  || i > this.numSubs_ ) {
return -1;
}return this.marks[i];
});

Clazz.newMeth(C$, 'charsMatched$I',  function (i) {
if (this.marks == null  || i > this.numSubs_  || !this.didMatch_ ) {
return -1;
}var mf=this.matchedFrom$I(i);
return mf < 0 ? -1 : this.marks[i + this.numSubs_] - this.matchedFrom$I(i);
});

Clazz.newMeth(C$, 'matchedTo$I',  function (i) {
if (this.marks == null  || i > this.numSubs_  || !this.didMatch_ ) {
return -1;
}return this.marks[i + this.numSubs_];
});

Clazz.newMeth(C$, 'stringMatched$I',  function (i) {
var mf=this.matchedFrom$I(i);
var cm=this.charsMatched$I(i);
return !this.didMatch_ || mf < 0  || cm < 0  ? null : this.src.substring$I$I(mf, mf + cm);
});

Clazz.newMeth(C$, 'left$',  function () {
var mf=this.matchedFrom$();
return !this.didMatch_ || (mf < 0)  ? null : this.src.substring$I$I(0, mf);
});

Clazz.newMeth(C$, 'left$I',  function (i) {
var mf=this.matchedFrom$I(i);
return !this.didMatch_ || (mf < 0)  ? null : this.src.substring$I$I(0, mf);
});

Clazz.newMeth(C$, 'right$',  function () {
var mf=this.matchedFrom$();
var cm=this.charsMatched$();
return !this.didMatch_ || mf < 0  || cm < 0  ? null : this.src.substring$I$I(mf + cm, this.src.length$());
});

Clazz.newMeth(C$, 'right$I',  function (i) {
var mf=this.matchedFrom$I(i);
var cm=this.charsMatched$I(i);
return !this.didMatch_ || mf < 0  || cm < 0  ? null : this.src.substring$I$I(mf + cm, this.src.length$());
});

Clazz.newMeth(C$, 'matchedFrom$',  function () {
return !this.didMatch_ ? -1 : this.matchFrom_;
});

Clazz.newMeth(C$, 'charsMatched$',  function () {
return !this.didMatch_ || this.matchFrom_ < 0  ? -1 : this.charsMatched_;
});

Clazz.newMeth(C$, 'matchedTo$',  function () {
return !this.didMatch_ ? -1 : this.matchFrom_ + this.charsMatched_;
});

Clazz.newMeth(C$, 'numSubs$',  function () {
return this.numSubs_;
});

Clazz.newMeth(C$, 'didMatch$',  function () {
return this.didMatch_;
});

Clazz.newMeth(C$, 'matchFrom$',  function () {
return this.matchedFrom$();
});

Clazz.newMeth(C$, 'substring$',  function () {
return this.stringMatched$();
});

Clazz.newMeth(C$, 'matchFrom$I',  function (i) {
return this.matchedFrom$I(i);
});

Clazz.newMeth(C$, 'substring$I',  function (i) {
return this.stringMatched$I(i);
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
