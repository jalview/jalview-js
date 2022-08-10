(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.plaf.JSComponentUI','javax.swing.LookAndFeel','swingjs.api.js.DOMNode']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSAppletUI", null, 'swingjs.plaf.JSLightweightUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.domNode == null ) {
this.containerNode=this.domNode=$I$(1,"newDOMObject$S$S$SA",["div", this.id, Clazz.array(String, -1, [])]);
this.addClass$swingjs_api_js_DOMNode$S(this.domNode, "swingjs-window");
}this.adjustCanvasForMenuBar$();
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
$I$(2).installColorsAndFont$javax_swing_JComponent$S$S$S(jc, null, null, "Panel.font");
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
});

Clazz.newMeth(C$, 'adjustCanvasForMenuBar$',  function () {
var mb=(this.c).getJMenuBar$();
var h=(mb == null  || !mb.isVisible$()  ? 0 : (mb.getUI$()).height);
$I$(3,"setStyles",[this.getCanvas$(), ["top", h + "px", "position", "absolute"]]);
});

Clazz.newMeth(C$, 'getCanvas$',  function () {
return this.c.getAppContext$().getThreadGroup$().秘html5Applet._getHtml5Canvas();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:23 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
