(function(){var P$=Clazz.newPackage("org.jmol.bspt"),I$=[[0,'org.jmol.bspt.Leaf','org.jmol.bspt.CubeIterator']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Bspt");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['treeDepth','dimMax','index'],'O',['eleRoot','org.jmol.bspt.Element']]]

Clazz.newMeth(C$, 'c$$I$I', function (dimMax, index) {
;C$.$init$.apply(this);
this.dimMax=dimMax;
this.index=index;
this.reset$();
}, 1);

Clazz.newMeth(C$, 'reset$', function () {
this.eleRoot=Clazz.new_($I$(1,1).c$$org_jmol_bspt_Bspt$org_jmol_bspt_Leaf$I,[this, null, 0]);
this.treeDepth=1;
});

Clazz.newMeth(C$, 'addTuple$javajs_util_T3', function (tuple) {
this.eleRoot=this.eleRoot.addTuple$I$javajs_util_T3(0, tuple);
});

Clazz.newMeth(C$, 'stats$', function () {
});

Clazz.newMeth(C$, 'allocateCubeIterator$', function () {
return Clazz.new_($I$(2,1).c$$org_jmol_bspt_Bspt,[this]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
