(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'jalview.util.Platform','jalview.util.ShortcutKeyMaskExWrapper11','jalview.util.ShortcutKeyMaskExWrapper8']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ShortcutKeyMaskExWrapper");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['F',['modern'],'I',['SHIFT_DOWN_MASK','ALT_DOWN_MASK'],'O',['specversion','Float','wrapper','jalview.util.ShortcutKeyMaskExWrapperI']]]

Clazz.newMeth(C$, 'getMenuShortcutKeyMaskEx$',  function () {
return C$.wrapper.getMenuShortcutKeyMaskEx$();
}, 1);

Clazz.newMeth(C$, 'getModifiersEx$java_awt_event_MouseEvent',  function (e) {
return C$.wrapper.getModifiersEx$java_awt_event_MouseEvent(e);
}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.specversion=Float.valueOf$F($I$(1).isJS$() ? (Float.valueOf$F(8)).valueOf() : Float.parseFloat$S(System.getProperty$S("java.specification.version")));
C$.modern=11;
if ((C$.specversion).$c() >= C$.modern ) {
C$.wrapper=Clazz.new_($I$(2,1));
C$.SHIFT_DOWN_MASK=$I$(2).SHIFT_DOWN_MASK;
C$.ALT_DOWN_MASK=$I$(2).ALT_DOWN_MASK;
} else {
C$.wrapper=Clazz.new_($I$(3,1));
C$.SHIFT_DOWN_MASK=$I$(3).SHIFT_DOWN_MASK;
C$.ALT_DOWN_MASK=$I$(3).ALT_DOWN_MASK;
}};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
