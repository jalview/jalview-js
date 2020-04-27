(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.plaf.JSComponentUI','javax.swing.LookAndFeel','swingjs.api.js.DOMNode','java.awt.Toolkit','java.awt.Color']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSDialogUI", null, 'swingjs.plaf.JSFrameUI', 'java.awt.peer.DialogPeer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.z=$I$(1).frameZ + 500;
this.zModal=this.z - 1;
this.isFrame=true;
this.isDialog=true;
this.defaultWidth=500;
this.defaultHeight=300;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
this.frame=jc;
$I$(2).installColors$javax_swing_JComponent$S$S(jc, "Frame.background", "Frame.foreground");
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (jc) {
});

Clazz.newMeth(C$, 'blockWindows$java_util_List', function (windows) {
});

Clazz.newMeth(C$, 'setVisible$Z', function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
if (b) {
this.setComponentFocus$();
}});

Clazz.newMeth(C$, 'isModal$', function () {
var isModal=(this.jc).isModal$();
if (isModal && this.modalNode == null  ) {
this.modalNode=$I$(3).createElement("div", this.id + "_modaldiv");
var screen=$I$(4).getDefaultToolkit$().getScreenSize$();
$I$(3,"setStyles",[this.modalNode, ["position", "sticky", "left", "0px", "top", "0px", "background", $I$(1,"toCSSString$java_awt_Color",[Clazz.new_($I$(5,1).c$$I$I$I$I,[100, 100, 100, 100])])]]);
$I$(3).setSize(this.modalNode, screen.width, screen.height);
}return isModal;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 08:17:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
