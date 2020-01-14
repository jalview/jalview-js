(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "AlignmentExportData");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.alignment=null;
this.omitHidden=null;
this.startEnd=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$SA$IA', function (align, ommit, startEnd) {
C$.$init$.apply(this);
this.alignment=align;
this.omitHidden=ommit;
this.startEnd=startEnd;
}, 1);

Clazz.newMeth(C$, 'getAlignment$', function () {
return this.alignment;
});

Clazz.newMeth(C$, 'setAlignment$jalview_datamodel_AlignmentI', function (alignment) {
this.alignment=alignment;
});

Clazz.newMeth(C$, 'getOmitHidden$', function () {
return this.omitHidden;
});

Clazz.newMeth(C$, 'setOmitHidden$SA', function (omitHidden) {
this.omitHidden=omitHidden;
});

Clazz.newMeth(C$, 'getStartEndPostions$', function () {
return this.startEnd;
});

Clazz.newMeth(C$, 'setStartEndPostions$IA', function (startEnd) {
this.startEnd=startEnd;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
