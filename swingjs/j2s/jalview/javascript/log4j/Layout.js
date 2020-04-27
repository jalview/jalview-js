(function(){var P$=Clazz.newPackage("jalview.javascript.log4j"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Layout", null, null, 'jalview.javascript.log4j.spi.OptionHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['LINE_SEP_LEN'],'S',['LINE_SEP']]]

Clazz.newMeth(C$, 'getContentType$', function () {
return "text/plain";
});

Clazz.newMeth(C$, 'getHeader$', function () {
return null;
});

Clazz.newMeth(C$, 'getFooter$', function () {
return null;
});

C$.$static$=function(){C$.$static$=0;
C$.LINE_SEP=System.getProperty$S("line.separator");
C$.LINE_SEP_LEN=C$.LINE_SEP.length$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
