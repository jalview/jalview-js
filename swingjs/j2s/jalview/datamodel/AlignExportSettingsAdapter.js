(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AlignExportSettingsAdapter", null, null, 'jalview.api.AlignExportSettingsI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['exportHiddenSeqs','exportHiddenCols','exportAnnotations','exportFeatures','exportGroups']]]

Clazz.newMeth(C$, 'c$$Z',  function (defaultOption) {
;C$.$init$.apply(this);
this.exportAnnotations=defaultOption;
this.exportFeatures=defaultOption;
this.exportGroups=defaultOption;
this.exportHiddenCols=defaultOption;
this.exportHiddenSeqs=defaultOption;
}, 1);

Clazz.newMeth(C$, 'isExportHiddenSequences$',  function () {
return this.exportHiddenSeqs;
});

Clazz.newMeth(C$, 'isExportHiddenColumns$',  function () {
return this.exportHiddenCols;
});

Clazz.newMeth(C$, 'isExportAnnotations$',  function () {
return this.exportAnnotations;
});

Clazz.newMeth(C$, 'isExportFeatures$',  function () {
return this.exportFeatures;
});

Clazz.newMeth(C$, 'isExportGroups$',  function () {
return this.exportGroups;
});

Clazz.newMeth(C$, 'setExportHiddenSequences$Z',  function (exportHiddenSeqs) {
this.exportHiddenSeqs=exportHiddenSeqs;
});

Clazz.newMeth(C$, 'setExportHiddenColumns$Z',  function (exportHiddenCols) {
this.exportHiddenCols=exportHiddenCols;
});

Clazz.newMeth(C$, 'setExportAnnotations$Z',  function (exportAnnotations) {
this.exportAnnotations=exportAnnotations;
});

Clazz.newMeth(C$, 'setExportFeatures$Z',  function (exportFeatures) {
this.exportFeatures=exportFeatures;
});

Clazz.newMeth(C$, 'setExportGroups$Z',  function (exportGroups) {
this.exportGroups=exportGroups;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
