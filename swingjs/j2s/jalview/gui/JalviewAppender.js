(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'javax.swing.SwingUtilities','jalview.gui.JalviewAppender']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewAppender", null, 'jalview.javascript.log4j.WriterAppender');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['jTextArea','javax.swing.JTextArea']]]

Clazz.newMeth(C$, 'setTextArea$javax_swing_JTextArea', function (jTextArea) {
C$.jTextArea=jTextArea;
}, 1);

Clazz.newMeth(C$, 'append$jalview_javascript_log4j_spi_LoggingEvent', function (loggingEvent) {
var message=this.layout.format$jalview_javascript_log4j_spi_LoggingEvent(loggingEvent);
$I$(1,"invokeLater$Runnable",[((P$.JalviewAppender$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewAppender$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
if ($I$(2).jTextArea != null ) {
$I$(2).jTextArea.append$S(this.$finals$.message);
}});
})()
), Clazz.new_(P$.JalviewAppender$1.$init$,[this, {message:message}]))]);
});

C$.$static$=function(){C$.$static$=0;
C$.jTextArea=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
