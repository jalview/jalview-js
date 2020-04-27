(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "HiddenCursorPosition");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['regionIndex','hiddenSoFar']]]

Clazz.newMeth(C$, 'c$$I$I', function (index, hiddencount) {
;C$.$init$.apply(this);
this.regionIndex=index;
this.hiddenSoFar=hiddencount;
}, 1);

Clazz.newMeth(C$, 'getRegionIndex$', function () {
return this.regionIndex;
});

Clazz.newMeth(C$, 'getHiddenSoFar$', function () {
return this.hiddenSoFar;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
