(function(){var P$=Clazz.newPackage("jalview.structure"),I$=[];
var C$=Clazz.newClass(P$, "StructureMappingcommandSet");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mapping=null;
this.commands=null;
this.handledBy=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$S$SA', function (handledBy, files, commands) {
C$.$init$.apply(this);
this.mapping=files;
this.handledBy=handledBy;
this.commands=commands;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
