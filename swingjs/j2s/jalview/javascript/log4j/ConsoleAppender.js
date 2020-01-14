(function(){var P$=Clazz.newPackage("jalview.javascript.log4j"),I$=[];
var C$=Clazz.newClass(P$, "ConsoleAppender");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.layout=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_javascript_log4j_Layout$S', function (layout, name) {
C$.$init$.apply(this);
this.layout=layout;
this.name=name;
}, 1);

Clazz.newMeth(C$, 'setLayout$jalview_javascript_log4j_Layout', function (layout) {
this.layout=layout;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'append$jalview_javascript_log4j_spi_LoggingEvent', function (event) {
System.out.println$S(event.getLevel$() + ": " + event.getRenderedMessage$() );
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
