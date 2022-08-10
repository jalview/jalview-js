(function(){var P$=Clazz.newPackage("org.jmol.bspt"),I$=[[0,'javajs.util.P3','org.jmol.bspt.Node']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Leaf", null, 'org.jmol.bspt.Element');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['tuples','javajs.util.T3[]']]]

Clazz.newMeth(C$, 'c$$org_jmol_bspt_Bspt$org_jmol_bspt_Leaf$I', function (bspt, leaf, countToKeep) {
Clazz.super_(C$, this);
this.bspt=bspt;
this.count=0;
this.tuples=Clazz.array($I$(1), [2]);
if (leaf == null ) return;
for (var i=countToKeep; i < 2; ++i) {
this.tuples[this.count++]=leaf.tuples[i];
leaf.tuples[i]=null;
}
leaf.count=countToKeep;
}, 1);

Clazz.newMeth(C$, 'sort$I', function (dim) {
for (var i=this.count; --i > 0; ) {
var champion=this.tuples[i];
var championValue=$I$(2).getDimensionValue$javajs_util_T3$I(champion, dim);
for (var j=i; --j >= 0; ) {
var challenger=this.tuples[j];
var challengerValue=$I$(2).getDimensionValue$javajs_util_T3$I(challenger, dim);
if (challengerValue > championValue ) {
this.tuples[i]=challenger;
this.tuples[j]=champion;
champion=challenger;
championValue=challengerValue;
}}
}
});

Clazz.newMeth(C$, 'addTuple$I$javajs_util_T3', function (level, tuple) {
if (this.count < 2) {
this.tuples[this.count++]=tuple;
return this;
}var node=Clazz.new_($I$(2,1).c$$org_jmol_bspt_Bspt$I$org_jmol_bspt_Leaf,[this.bspt, level, this]);
return node.addTuple$I$javajs_util_T3(level, tuple);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
