(function(){var P$=Clazz.newPackage("org.jmol.modelset"),I$=[];
var C$=Clazz.newClass(P$, "TickInfo");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.id=null;
this.type=null;
this.ticks=null;
this.tickLabelFormats=null;
this.scale=null;
this.first=0;
this.signFactor=0;
this.reference=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.id="";
this.type=" ";
this.signFactor=1;
}, 1);

Clazz.newMeth(C$, 'c$$javajs_util_P3', function (ticks) {
C$.$init$.apply(this);
this.ticks=ticks;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
