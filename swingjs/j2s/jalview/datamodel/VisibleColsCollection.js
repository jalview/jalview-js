(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "VisibleColsCollection", null, null, 'jalview.api.AlignmentColsCollectionI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','end'],'O',['hidden','jalview.datamodel.HiddenColumns']]]

Clazz.newMeth(C$, 'c$$I$I$jalview_datamodel_HiddenColumns',  function (s, e, h) {
;C$.$init$.apply(this);
this.start=s;
this.end=e;
this.hidden=h;
}, 1);

Clazz.newMeth(C$, 'iterator$',  function () {
return this.hidden.getVisibleColsIterator$I$I(this.start, this.end);
});

Clazz.newMeth(C$, 'isHidden$I',  function (c) {
return false;
});

Clazz.newMeth(C$, 'hasHidden$',  function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
