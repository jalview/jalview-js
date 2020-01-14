(function(){var P$=Clazz.newPackage("org.jmol.bspt"),I$=[[0,'javajs.util.P3','org.jmol.bspt.Node']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Leaf", null, 'org.jmol.bspt.Element');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tuples=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_bspt_Bspt$org_jmol_bspt_Leaf$I', function (bspt, leaf, countToKeep) {
Clazz.super_(C$, this,1);
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
}var node=Clazz.new_($I$(2).c$$org_jmol_bspt_Bspt$I$org_jmol_bspt_Leaf,[this.bspt, level, this]);
return node.addTuple$I$javajs_util_T3(level, tuple);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
