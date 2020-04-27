(function(){var P$=Clazz.newPackage("sun.font"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CompositeFontDescriptor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['coreComponentCount'],'S',['faceName'],'O',['componentFaceNames','String[]','+componentFileNames','exclusionRanges','int[]','+exclusionRangeLimits']]]

Clazz.newMeth(C$, 'c$$S$I$SA$SA$IA$IA', function (faceName, coreComponentCount, componentFaceNames, componentFileNames, exclusionRanges, exclusionRangeLimits) {
;C$.$init$.apply(this);
this.faceName=faceName;
this.coreComponentCount=coreComponentCount;
this.componentFaceNames=componentFaceNames;
this.componentFileNames=componentFileNames;
this.exclusionRanges=exclusionRanges;
this.exclusionRangeLimits=exclusionRangeLimits;
}, 1);

Clazz.newMeth(C$, 'getFaceName$', function () {
return this.faceName;
});

Clazz.newMeth(C$, 'getCoreComponentCount$', function () {
return this.coreComponentCount;
});

Clazz.newMeth(C$, 'getComponentFaceNames$', function () {
return this.componentFaceNames;
});

Clazz.newMeth(C$, 'getComponentFileNames$', function () {
return this.componentFileNames;
});

Clazz.newMeth(C$, 'getExclusionRanges$', function () {
return this.exclusionRanges;
});

Clazz.newMeth(C$, 'getExclusionRangeLimits$', function () {
return this.exclusionRangeLimits;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.8-v2');//Created 2020-02-19 17:35:44 Java2ScriptVisitor version 3.2.8-v2 net.sf.j2s.core.jar version 3.2.8-v2
