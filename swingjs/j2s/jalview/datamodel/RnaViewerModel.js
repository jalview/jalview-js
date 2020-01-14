(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "RnaViewerModel");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.viewId=null;
this.title=null;
this.x=0;
this.y=0;
this.width=0;
this.height=0;
this.dividerLocation=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I$I$I$I$I', function (viewId, title, xpos, ypos, width, height, dividerLocation) {
C$.$init$.apply(this);
this.viewId=viewId;
this.title=title;
this.x=xpos;
this.y=ypos;
this.width=width;
this.height=height;
this.dividerLocation=dividerLocation;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
