(function(){var P$=Clazz.newPackage("jalview.javascript.log4j"),I$=[[0,'StringBuffer','jalview.javascript.log4j.Layout']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SimpleLayout", null, 'jalview.javascript.log4j.Layout');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sbuf=Clazz.new_($I$(1,1).c$$I,[128]);
},1);

C$.$fields$=[['O',['sbuf','StringBuffer']]]

Clazz.newMeth(C$, 'activateOptions$', function () {
});

Clazz.newMeth(C$, 'format$jalview_javascript_log4j_spi_LoggingEvent', function (event) {
this.sbuf.setLength$I(0);
this.sbuf.append$S(event.getLevel$().toString());
this.sbuf.append$S(" - ");
this.sbuf.append$S(event.getRenderedMessage$());
this.sbuf.append$S($I$(2).LINE_SEP);
return this.sbuf.toString();
});

Clazz.newMeth(C$, 'ignoresThrowable$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
