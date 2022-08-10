(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'jalview.datamodel.AllRowsIterator']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AllRowsCollection", null, null, 'jalview.api.AlignmentRowsCollectionI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','end'],'O',['alignment','jalview.datamodel.AlignmentI','hidden','jalview.datamodel.HiddenSequences']]]

Clazz.newMeth(C$, 'c$$I$I$jalview_datamodel_AlignmentI',  function (s, e, al) {
;C$.$init$.apply(this);
this.start=s;
this.end=e;
this.alignment=al;
this.hidden=al.getHiddenSequences$();
}, 1);

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(1,1).c$$I$I$jalview_datamodel_AlignmentI,[this.start, this.end, this.alignment]);
});

Clazz.newMeth(C$, 'isHidden$I',  function (seq) {
return this.hidden.isHidden$I(seq);
});

Clazz.newMeth(C$, 'getSequence$I',  function (seq) {
return this.alignment.getSequenceAtAbsoluteIndex$I(seq);
});

Clazz.newMeth(C$, 'hasHidden$',  function () {
return (this.hidden.getSize$() > 0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
