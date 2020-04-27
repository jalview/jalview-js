(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'javax.swing.LookAndFeel','javax.swing.SwingUtilities']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSToolTipUI", null, 'swingjs.plaf.JSLabelUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['toolTip','javax.swing.JToolTip']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.allowTextAlignment=false;
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
var isNew=(this.domNode == null );
C$.superclazz.prototype.updateDOMNode$.apply(this, []);
if (isNew) {
}return this.domNode;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (e) {
var prop=e.getPropertyName$();
if (prop === "component" ) {
return;
}C$.superclazz.prototype.propertyChangedCUI$java_beans_PropertyChangeEvent$S.apply(this, [e, prop]);
});

Clazz.newMeth(C$, 'getIconAndText$', function () {
this.icon=null;
this.iconNode=null;
this.gap=0;
this.text=this.toolTip.getTipText$();
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
this.toolTip=jc;
$I$(1).installColorsAndFont$javax_swing_JComponent$S$S$S(jc, "ToolTip.background", "ToolTip.foreground", "ToolTip.font");
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (jc) {
System.out.println$S("Uninstalling ToolTipUI");
});

Clazz.newMeth(C$, 'setVisible$Z', function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
$I$(2).windowForComponent$java_awt_Component(this.toolTip).setBackground$java_awt_Color(this.toolTip.getBackground$());
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 08:17:08 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
