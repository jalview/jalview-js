(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','java.awt.Dimension','javax.swing.LookAndFeel']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSProgressBarUI", null, 'swingjs.plaf.JSLightweightUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$frameZ=10003;
},1);

C$.$fields$=[['I',['$frameZ']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.isContainer=true;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
var root=this.jc.getRootPane$();
this.isContentPane=(root != null  && this.jc === root.getContentPane$()  );
this.domNode=$I$(1).newDOMObject$S$S$SA("div", this.id, []);
if (root != null  && root.getGlassPane$() === this.c  ) $I$(2).setVisible(this.domNode, false);
}return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'getHTMLSizePreferred$swingjs_api_js_DOMNode$Z', function (obj, addCSS) {
return Clazz.new_([this.c.getWidth$(), this.c.getHeight$()],$I$(3,1).c$$I$I);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
$I$(4).installColorsAndFont$javax_swing_JComponent$S$S$S(jc, "Panel.background", "Panel.foreground", "Panel.font");
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (jc) {
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent', function (jc) {
return null;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 08:17:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
