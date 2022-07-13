(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'java.awt.Taskbar',['java.awt.Taskbar','.Feature'],'jalview.util.ChannelProperties']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewTaskbar");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setTaskbar$jalview_bin_Jalview',  function (jalview) {
if ($I$(1).isTaskbarSupported$()) {
var tb=$I$(1).getTaskbar$();
if (tb.isSupported$java_awt_Taskbar_Feature($I$(2).ICON_IMAGE)) {
var image=$I$(3).getImage$S("logo.512");
if (image != null ) {
tb.setIconImage$java_awt_Image(image);
} else {
System.out.println$S("Unable to setIconImage()");
}}}}, 1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
