(function(){var P$=Clazz.newPackage("jalview.javascript.log4j"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ConsoleAppender");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name'],'O',['layout','jalview.javascript.log4j.Layout']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_javascript_log4j_Layout$S', function (layout, name) {
;C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
