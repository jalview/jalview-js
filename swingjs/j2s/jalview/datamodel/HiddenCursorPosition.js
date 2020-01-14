(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "HiddenCursorPosition");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.regionIndex=0;
this.hiddenSoFar=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (index, hiddencount) {
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
