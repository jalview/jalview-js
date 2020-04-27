(function(){var P$=Clazz.newPackage("sun.swing"),p$1={},I$=[[0,'javax.swing.plaf.ColorUIResource']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PrintColorUIResource", null, 'javax.swing.plaf.ColorUIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['printColor','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$I$java_awt_Color', function (rgb, printColor) {
;C$.superclazz.c$$I.apply(this,[rgb]);C$.$init$.apply(this);
this.printColor=printColor;
}, 1);

Clazz.newMeth(C$, 'getPrintColor$', function () {
return ((this.printColor != null ) ? this.printColor : this);
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(1,1).c$$java_awt_Color,[this]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:43 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
