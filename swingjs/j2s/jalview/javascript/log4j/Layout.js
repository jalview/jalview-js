(function(){var P$=Clazz.newPackage("jalview.javascript.log4j"),I$=[];
var C$=Clazz.newClass(P$, "Layout", null, null, 'jalview.javascript.log4j.spi.OptionHandler');
C$.LINE_SEP=null;
C$.LINE_SEP_LEN=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.LINE_SEP=System.getProperty$S("line.separator");
C$.LINE_SEP_LEN=C$.LINE_SEP.length$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getContentType$', function () {
return "text/plain";
});

Clazz.newMeth(C$, 'getHeader$', function () {
return null;
});

Clazz.newMeth(C$, 'getFooter$', function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
