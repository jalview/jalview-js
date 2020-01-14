(function(){var P$=Clazz.newPackage("jalview.javascript.log4j"),I$=[[0,'StringBuffer','jalview.javascript.log4j.Layout']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SimpleLayout", null, 'jalview.javascript.log4j.Layout');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sbuf=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sbuf=Clazz.new_($I$(1).c$$I,[128]);
}, 1);

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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
