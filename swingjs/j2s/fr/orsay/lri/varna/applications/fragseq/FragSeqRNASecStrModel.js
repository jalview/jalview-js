(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.fragseq"),I$=[[0,'java.awt.datatransfer.DataFlavor']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FragSeqRNASecStrModel", null, 'fr.orsay.lri.varna.applications.fragseq.FragSeqModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._r=null;
},1);

C$.$fields$=[['O',['_r','fr.orsay.lri.varna.models.rna.RNA']]
,['O',['Flavor','java.awt.datatransfer.DataFlavor']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_RNA', function (r) {
Clazz.super_(C$, this);
this._r=r;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this._r.getName$();
});

Clazz.newMeth(C$, 'getID$', function () {
return this._r.getID$();
});

Clazz.newMeth(C$, 'getRNA$', function () {
return this._r;
});

C$.$static$=function(){C$.$static$=0;
C$.Flavor=Clazz.new_([Clazz.getClass(C$), "RNA Sec Str Object"],$I$(1,1).c$$Class$S);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:18 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
