(function(){var P$=Clazz.newPackage("jalview.structures.models"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SequenceStructureBindingModel", null, null, 'jalview.api.SequenceStructureBinding');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.loadingFromArchive=false;
this.loadingFinished=true;
},1);

C$.$fields$=[['Z',['loadingFromArchive','loadingFinished']]]

Clazz.newMeth(C$, 'setLoadingFromArchive$Z',  function (loadingFromArchive) {
this.loadingFromArchive=loadingFromArchive;
});

Clazz.newMeth(C$, 'isLoadingFromArchive$',  function () {
return this.loadingFromArchive && !this.loadingFinished ;
});

Clazz.newMeth(C$, 'isLoadingFinished$',  function () {
return this.loadingFinished;
});

Clazz.newMeth(C$, 'setFinishedLoadingFromArchive$Z',  function (finishedLoading) {
this.loadingFinished=finishedLoading;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
