(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'javax.swing.SwingUtilities','jalview.gui.JalviewAppender']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JalviewAppender", null, 'jalview.javascript.log4j.WriterAppender');
C$.jTextArea=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.jTextArea=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setTextArea$javax_swing_JTextArea', function (jTextArea) {
C$.jTextArea=jTextArea;
}, 1);

Clazz.newMeth(C$, 'append$jalview_javascript_log4j_spi_LoggingEvent', function (loggingEvent) {
var message=this.layout.format$jalview_javascript_log4j_spi_LoggingEvent(loggingEvent);
$I$(1).invokeLater$Runnable(((P$.JalviewAppender$1||
(function(){var C$=Clazz.newClass(P$, "JalviewAppender$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if ($I$(2).jTextArea != null ) {
$I$(2).jTextArea.append$S(this.$finals$.message);
}});
})()
), Clazz.new_(P$.JalviewAppender$1.$init$, [this, {message: message}])));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
