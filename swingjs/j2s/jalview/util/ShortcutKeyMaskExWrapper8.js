(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.awt.GraphicsEnvironment','java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ShortcutKeyMaskExWrapper8", null, null, 'jalview.util.ShortcutKeyMaskExWrapperI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['SHIFT_DOWN_MASK','ALT_DOWN_MASK']]]

Clazz.newMeth(C$, 'getMenuShortcutKeyMaskEx$',  function () {
try {
if (!$I$(1).isHeadless$()) {
return $I$(2).getDefaultToolkit$().getMenuShortcutKeyMask$();
}} catch (t) {
}
return 0;
});

Clazz.newMeth(C$, 'getModifiersEx$java_awt_event_MouseEvent',  function (e) {
return e.getModifiers$();
});

C$.$static$=function(){C$.$static$=0;
{
C$.SHIFT_DOWN_MASK=1;
C$.ALT_DOWN_MASK=8;
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
