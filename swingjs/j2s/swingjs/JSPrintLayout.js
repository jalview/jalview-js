(function(){var P$=Clazz.newPackage("swingjs"),I$=[];
var C$=Clazz.newClass(P$, "JSPrintLayout");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.imageableX=0;
this.imageableY=0;
this.paperHeight=0;
this.paperWidth=0;
this.imageableHeight=0;
this.imageableWidth=0;
this.layout=null;
this.paper=null;
this.asPDF=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.imageableX=0;
this.imageableY=0;
this.paperHeight=((Math.min(11.0, 11.69) * 72)|0);
this.paperWidth=((Math.min(8.5, 8.27) * 72)|0);
this.imageableHeight=this.paperHeight;
this.imageableWidth=this.paperWidth;
this.layout="portrait";
this.asPDF=true;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.asPDF=true;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
