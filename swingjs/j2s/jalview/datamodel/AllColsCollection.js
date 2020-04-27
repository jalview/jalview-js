(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'jalview.datamodel.AllColsIterator']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AllColsCollection", null, null, 'jalview.api.AlignmentColsCollectionI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','end'],'O',['hidden','jalview.datamodel.HiddenColumns']]]

Clazz.newMeth(C$, 'c$$I$I$jalview_datamodel_AlignmentI', function (s, e, al) {
;C$.$init$.apply(this);
this.start=s;
this.end=e;
this.hidden=al.getHiddenColumns$();
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(1,1).c$$I$I$jalview_datamodel_HiddenColumns,[this.start, this.end, this.hidden]);
});

Clazz.newMeth(C$, 'isHidden$I', function (c) {
return !this.hidden.isVisible$I(c);
});

Clazz.newMeth(C$, 'hasHidden$', function () {
return this.hidden.hasHiddenColumns$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
