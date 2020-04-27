(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AlignmentExportData");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['alignment','jalview.datamodel.AlignmentI','omitHidden','String[]','startEnd','int[]']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$SA$IA', function (align, ommit, startEnd) {
;C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
