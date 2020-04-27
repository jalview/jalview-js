(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'java.util.Hashtable','java.util.Vector','com.stevesoft.pat.oneChar','com.stevesoft.pat.FastChar','com.stevesoft.pat.patInt','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegOpt','com.stevesoft.pat.Or','StringBuffer','com.stevesoft.pat.FastBracket','com.stevesoft.pat.Branch','com.stevesoft.pat.FastMulti']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RegOpt");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opt$com_stevesoft_pat_Pattern$Z$Z', function (p, ignoreCase, dontMinQ) {
if (p == null ) {
return p;
}if (Clazz.instanceOf(p, "com.stevesoft.pat.Bracket")) {
var b=p;
p=$I$(10).process$com_stevesoft_pat_Bracket$Z(b, ignoreCase);
p.next=b.next;
p.parent=b.parent;
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.oneChar") && !ignoreCase && !dontMinQ  ) {
var o=p;
p=Clazz.new_($I$(4,1).c$$C,[o.c]);
p.next=o.next;
p.parent=o.parent;
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.Or") && (p).leftForm$().equals$O("(?:") && (p).v.size$() == 1  ) {
var o=p;
p=o.v.elementAt$I(0);
p.setParent$com_stevesoft_pat_Pattern(null);
p=C$.opt$com_stevesoft_pat_Pattern$Z$Z(p, ignoreCase, dontMinQ);
p.add$com_stevesoft_pat_Pattern(o.next);
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.Or")) {
var o=p;
o.pv=null;
var v=o.v;
o.v=Clazz.new_($I$(2,1));
var b=Clazz.new_($I$(11,1));
b.parent=o.parent;
for (var i=0; i < v.size$(); i++) {
var pp=v.elementAt$I(i);
if (Clazz.instanceOf(pp, "com.stevesoft.pat.oneChar") && (b.h.size$() >= 1 || (i + 1 < v.size$() && Clazz.instanceOf(v.elementAt$I(i + 1), "com.stevesoft.pat.oneChar") ) ) ) {
b.addc$com_stevesoft_pat_oneChar$Z$Z(pp, ignoreCase, dontMinQ);
} else {
if (b.keys.size$() > 0) {
var p2=b.reduce$Z$Z(ignoreCase, dontMinQ);
if (p2 != null ) {
o.addOr$com_stevesoft_pat_Pattern(p2);
b=Clazz.new_($I$(11,1));
b.parent=o.parent;
}}o.addOr$com_stevesoft_pat_Pattern(C$.opt$com_stevesoft_pat_Pattern$Z$Z(pp, ignoreCase, dontMinQ));
}}
if (b.keys.size$() > 0) {
var p2=b.reduce$Z$Z(ignoreCase, dontMinQ);
if (p2 != null ) {
o.addOr$com_stevesoft_pat_Pattern(p2);
}}if (o.v.size$() == 1 && o.leftForm$().equals$O("(?:") ) {
p=o.v.elementAt$I(0);
p.setParent$com_stevesoft_pat_Pattern(null);
p=C$.opt$com_stevesoft_pat_Pattern$Z$Z(p, ignoreCase, dontMinQ);
p.add$com_stevesoft_pat_Pattern(o.next);
}} else if (Clazz.instanceOf(p, "com.stevesoft.pat.FastMulti")) {
var ps=p;
ps.sub=C$.opt$com_stevesoft_pat_Pattern$Z$Z(ps.sub, ignoreCase, dontMinQ);
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.Multi") && C$.safe4fm$com_stevesoft_pat_Pattern((p).sub) ) {
var m=p;
var fm=null;
try {
fm=Clazz.new_([m.a, m.b, C$.opt$com_stevesoft_pat_Pattern$Z$Z(m.sub, ignoreCase, dontMinQ)],$I$(12,1).c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern);
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
} else {
throw rs;
}
}
fm.parent=m.parent;
fm.matchFewest=m.matchFewest;
fm.next=m.next;
p=fm;
}if (p.next != null ) {
p.next=C$.opt$com_stevesoft_pat_Pattern$Z$Z(p.next, ignoreCase, dontMinQ);
}return p;
}, 1);

Clazz.newMeth(C$, 'safe4fm$com_stevesoft_pat_Pattern', function (x) {
while (x != null ){
if (Clazz.instanceOf(x, "com.stevesoft.pat.Bracket")) {
;} else if (Clazz.instanceOf(x, "com.stevesoft.pat.Range")) {
;} else if (Clazz.instanceOf(x, "com.stevesoft.pat.oneChar")) {
;} else if (Clazz.instanceOf(x, "com.stevesoft.pat.Any")) {
;} else if (Clazz.instanceOf(x, "com.stevesoft.pat.Custom") && Clazz.instanceOf((x).v, "com.stevesoft.pat.UniValidator") ) {
;} else if (Clazz.instanceOf(x, "com.stevesoft.pat.Or")) {
var o=x;
if (!o.leftForm$().equals$O("(?:")) {
return false;
}var lo=o.countMinChars$();
var hi=o.countMaxChars$();
if (!lo.equals$com_stevesoft_pat_patInt(hi)) {
return false;
}for (var i=0; i < o.v.size$(); i++) {
if (!C$.safe4fm$com_stevesoft_pat_Pattern(o.v.elementAt$I(i))) {
return false;
}}
} else {
return false;
}x=x.next;
}
return true;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
