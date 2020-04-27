(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'java.awt.Taskbar',['java.awt.Taskbar','.Feature'],'java.awt.Toolkit']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewTaskbar");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setTaskbar$jalview_bin_Jalview', function (jalview) {
if ($I$(1).isTaskbarSupported$()) {
var tb=$I$(1).getTaskbar$();
if (tb.isSupported$java_awt_Taskbar_Feature($I$(2).ICON_IMAGE)) {
try {
var url=jalview.getClass$().getResource$S("/images/JalviewLogo_Huge.png");
if (url != null ) {
var image=$I$(3).getDefaultToolkit$().createImage$java_net_URL(url);
tb.setIconImage$java_awt_Image(image);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Unable to setIconImage()");
} else {
throw e;
}
}
}}}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
