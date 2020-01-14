(function(){var P$=Clazz.newPackage("jalview.jbgui"),I$=[];
var C$=Clazz.newClass(P$, "BackupFilesPresetEntry");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.suffix=null;
this.digits=0;
this.reverse=false;
this.keepAll=false;
this.rollMax=0;
this.confirmDelete=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$I$Z$Z$I$Z', function (suffix, digits, reverse, keepAll, rollMax, confirmDelete) {
C$.$init$.apply(this);
this.suffix=suffix;
this.digits=digits;
this.reverse=reverse;
this.keepAll=keepAll;
this.rollMax=rollMax;
this.confirmDelete=confirmDelete;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
