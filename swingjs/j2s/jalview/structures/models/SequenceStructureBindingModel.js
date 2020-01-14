(function(){var P$=Clazz.newPackage("jalview.structures.models"),I$=[];
var C$=Clazz.newClass(P$, "SequenceStructureBindingModel", null, null, 'jalview.api.SequenceStructureBinding');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.loadingFromArchive=false;
this.loadingFinished=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.loadingFromArchive=false;
this.loadingFinished=true;
}, 1);

Clazz.newMeth(C$, 'setLoadingFromArchive$Z', function (loadingFromArchive) {
this.loadingFromArchive=loadingFromArchive;
});

Clazz.newMeth(C$, 'isLoadingFromArchive$', function () {
return this.loadingFromArchive && !this.loadingFinished ;
});

Clazz.newMeth(C$, 'isLoadingFinished$', function () {
return this.loadingFinished;
});

Clazz.newMeth(C$, 'setFinishedLoadingFromArchive$Z', function (finishedLoading) {
this.loadingFinished=finishedLoading;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
