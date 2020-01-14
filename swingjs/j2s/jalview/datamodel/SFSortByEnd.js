(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "SFSortByEnd", null, null, 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$jalview_datamodel_SequenceFeature$jalview_datamodel_SequenceFeature','compare$','compare$TT$TT'], function (a, b) {
return a.getEnd$() - b.getEnd$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
