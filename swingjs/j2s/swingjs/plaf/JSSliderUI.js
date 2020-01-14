(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'swingjs.jquery.JQueryUI','swingjs.JSUtil','swingjs.api.js.DOMNode','swingjs.plaf.JSComponentUI','swingjs.JSToolkit','java.awt.Color','javax.swing.LookAndFeel','java.awt.Dimension','sun.swing.DefaultLookup']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSSliderUI", null, 'swingjs.plaf.JSLightweightUI', ['java.beans.PropertyChangeListener', 'javax.swing.event.ChangeListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
var jqueryui=Clazz.getClass($I$(1));
$I$(2).loadStaticResource$S("swingjs/jquery/jquery-ui-j2sslider.css");
$I$(2).loadStaticResource$S("swingjs/jquery/jquery-ui-j2sslider.js");
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.slider=null;
this.min=0;
this.max=0;
this.val=0;
this.majorSpacing=0;
this.minorSpacing=0;
this.paintTicks=false;
this.paintLabels=false;
this.snapToTicks=false;
this.labelTable=null;
this.orientation=null;
this.jqSlider=null;
this.z0=0;
this.model=null;
this.paintTrack=false;
this.myScrollPaneUI=null;
this.isScrollBar=false;
this.jScrollBar=null;
this.sliderTrack=null;
this.sliderHandle=null;
this.disabled=0;
this.myHeight=0;
this.isHoriz=false;
this.isVerticalScrollBar=false;
this.isInverted=false;
this.ticks=null;
this.noSnapping=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.z0=-2147483648;
this.paintTrack=true;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.needPreferred=true;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
p$1.setSliderFields.apply(this, []);
this.min=this.slider.getMinimum$();
this.max=this.slider.getMaximum$();
this.val=this.slider.getValue$();
if (!this.isScrollBar) {
this.minorSpacing=this.slider.getMinorTickSpacing$();
this.majorSpacing=this.slider.getMajorTickSpacing$();
this.paintTicks=this.slider.getPaintTicks$();
this.paintLabels=this.slider.getPaintLabels$();
this.paintTrack=this.slider.getPaintTrack$();
this.snapToTicks=this.slider.getSnapToTicks$();
}this.orientation=(this.slider.getOrientation$() == 1 ? "vertical" : "horizontal");
this.model=this.slider.getModel$();
var isHoriz=(this.slider.getOrientation$() == 0);
var isVerticalScrollBar=(this.isScrollBar && !isHoriz );
var isInverted=isVerticalScrollBar || !this.isScrollBar && this.slider.getInverted$()  ;
var isChanged=false;
if (isHoriz != this.isHoriz  || isVerticalScrollBar != this.isVerticalScrollBar   || isInverted != this.isInverted  ) {
this.isHoriz=isHoriz;
this.isVerticalScrollBar=isVerticalScrollBar;
this.isInverted=isInverted;
isChanged=true;
}var isNew=(this.domNode == null );
if (isNew) {
this.domNode=P$.JSComponentUI.wrap$S$S$swingjs_api_js_DOMNodeA("div", this.id + "_wrap", [this.jqSlider=$I$(3).createElement("div", this.id)]);
this.$$O(this.domNode).addClass("swingjs");
this.$$O(this.domNode).addClass("ui-j2sslider-wrap");
p$1.setJQuerySliderAndEvents.apply(this, []);
this.setTainted$();
} else if (isChanged) {
p$1.disposeSlider.apply(this, []);
this.domNode.appendChild(this.jqSlider=$I$(3).createElement("div", this.id + (++$I$(4).incr)));
p$1.setJQuerySliderAndEvents.apply(this, []);
this.setTainted$();
this.setInnerComponentBounds$I$I(this.jc.getWidth$(), this.jc.getHeight$());
}p$1.setup$Z.apply(this, [isNew || isChanged ]);
this.setSlider$();
this.setBackground$java_awt_Color(this.getBackground$());
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color', function (background) {
if (this.awtPeerBG != null  && !this.awtPeerBG.equals$O(background) ) this.awtPeerBG=null;
if (this.isScrollBar ? background != null  : this.jc.isOpaque$()) {
var node=(this.myScrollPaneUI == null  && !this.paintTicks  ? this.jqSlider : this.sliderTrack);
$I$(3).setStyles(node, ["background-color", $I$(5).getCSSColor$java_awt_Color(background)]);
if (this.isScrollBar && $I$(6).WHITE.equals$O(background) ) $I$(3).setStyles(this.sliderHandle, ["background", "#ccc"]);
}if (this.paintTicks) $I$(3).setStyles(this.jqSlider, ["background-color", "black"]);
});

Clazz.newMeth(C$, 'setBackgroundFor$swingjs_api_js_DOMNode$java_awt_Color', function (node, color) {
this.setBackground$java_awt_Color(color);
});

Clazz.newMeth(C$, 'disposeSlider', function () {
var slider=this.$$O(this.jqSlider);

slider.j2sslider("destroy");
$I$(3).dispose(this.jqSlider);
}, p$1);

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
p$1.setSliderFields.apply(this, []);
$I$(7).installColorsAndFont$javax_swing_JComponent$S$S$S(jc, "Slider.background", "Slider.foreground", "Slider.font");
});

Clazz.newMeth(C$, 'setSliderFields', function () {
this.slider=this.jc;
if (this.isScrollBar) this.jScrollBar=this.jc;
}, p$1);

Clazz.newMeth(C$, 'setJQuerySliderAndEvents', function () {
var slider=this.$$O(this.jqSlider);
{
var me = this;
slider.j2sslider( { orientation: me.orientation, jslider: me.c, isScrollBar: me.isScrollBar, range: false, min: me.min, max: me.max, value: me.val, disabled: me.disabled, inverted: me.isInverted, change: function(jqevent, handle) { me.jqueryCallback$O$O(jqevent, handle); }, slide: function(jqevent, handle) { me.jqueryCallback$O$O(jqevent, handle); }, start: function(jqevent, handle) { me.jqueryStart$O$O(jqevent, handle); }, stop: function(jqevent, handle) { me.jqueryStop$O$O(jqevent, handle); } });
}
}, p$1);

Clazz.newMeth(C$, 'jqueryStart$O$O', function (event, ui) {
this.setValueIsAdjusting$Z(true);
});

Clazz.newMeth(C$, 'jqueryStop$O$O', function (event, ui) {
this.setValueIsAdjusting$Z(false);
if (this.isScrollBar || this.slider.getSnapToTicks$() ) this.jqueryCallback$O$O(event, ui);
});

Clazz.newMeth(C$, 'setValueIsAdjusting$Z', function (b) {
this.slider.setValueIsAdjusting$Z(b);
});

Clazz.newMeth(C$, 'jqueryCallback$O$O', function (event, ui) {
this.val=Math.round(ui.value ||0);
var ok=(this.noSnapping || !this.slider.getSnapToValue$() || this.slider.getValueIsAdjusting$()  );
this.setValue$I(ok ? this.val : p$1.snapTo$I.apply(this, [this.val]));
});

Clazz.newMeth(C$, 'setValue$I', function (val) {
if (val == this.slider.getValue$()) return;
this.slider.setValue$I(val);
});

Clazz.newMeth(C$, 'setEnabled$Z', function (b) {
C$.superclazz.prototype.setEnabled$Z.apply(this, [b]);
this.setSliderAttr$S$F("disabled", (this.disabled=(b ? 0 : 1)));
});

Clazz.newMeth(C$, 'setup$Z', function (isNew) {
this.sliderTrack=$I$(3).lastChild(this.domNode);
this.sliderHandle=$I$(3).firstChild(this.sliderTrack);
if (isNew) {
this.ignoreAllMouseEvents$swingjs_api_js_DOMNode(this.sliderHandle);
this.ignoreAllMouseEvents$swingjs_api_js_DOMNode(this.sliderTrack);
this.setDataComponent$swingjs_api_js_DOMNode(this.domNode);
this.setDataComponent$swingjs_api_js_DOMNode(this.sliderHandle);
}}, p$1);

Clazz.newMeth(C$, 'setSliderAttr$S$F', function (key, val) {
this.noSnapping=true;
var id=null;
try {
var jsslider=this.$$O(this.jqSlider);

id = this.jqSlider.id;
jsslider.j2sslider("option",key,val);
} catch (t) {
System.out.println$S(key + ":" + new Float(val).toString() + " could not be set for " + id );
}
this.noSnapping=this.isScrollBar;
});

Clazz.newMeth(C$, 'setSlider$', function () {
this.setSliderAttr$S$F("min", this.min);
var max=this.max;
this.setSliderAttr$S$F("max", max);
this.setSliderAttr$S$F("value", this.val);
this.myHeight=10;
var barPlace=40;
if (this.isHoriz && this.slider.getBorder$() != null  ) barPlace+=10;
var tickClass="ui-j2sslider-tick-mark" + (this.isHoriz ? "-vert" : "-horiz");
this.$$O(this.domNode).find("." + tickClass).remove();
this.$$O(this.domNode).find(".jslider-labels").remove();
this.getHTMLSizePreferred$swingjs_api_js_DOMNode$Z(this.jqSlider, false);
if (this.majorSpacing == 0 && this.minorSpacing == 0  || !this.paintTicks && !this.paintLabels  ) {
if (this.myScrollPaneUI != null ) {
$I$(3).setStyles(this.sliderHandle, ["transform", null]);
$I$(3).setStyles(this.sliderTrack, ["transform", null]);
} else if (this.isHoriz) {
$I$(3).setStyles(this.sliderHandle, ["top", "50%", "transform", "translateY(-50%)"]);
$I$(3).setStyles(this.sliderTrack, ["top", "50%", "transform", "translateY(-50%)"]);
} else {
$I$(3).setStyles(this.sliderHandle, ["left", "50%", "transform", "translateX(-50%)"]);
$I$(3).setStyles(this.sliderTrack, ["left", "50%", "transform", "translateX(-50%)"]);
}return;
}var margin=10;
var length=(this.isHoriz ? this.slider.getWidth$() : this.slider.getHeight$());
if (length <= 0) length=(this.isHoriz ? this.getPreferredHorizontalSize$().width : this.getPreferredVerticalSize$().height);
if (this.isHoriz) this.actualWidth=length;
 else this.actualHeight=length;
length-=2 * margin;
if (this.paintTicks) {
if (this.minorSpacing == 0) this.minorSpacing=this.majorSpacing;
var check=(this.majorSpacing/this.minorSpacing|0);
var fracSpacing=this.minorSpacing * 1.0 / (max - this.min);
var numTicks=(((max - this.min)/this.minorSpacing|0)) + 1;
this.myHeight+=10;
this.ticks=Clazz.array(Integer.TYPE, [numTicks]);
for (var i=0; i < numTicks; i++) {
var node=$I$(3).createElement("div", this.id + "_t" + i );
this.$$O(node).addClass("swingjs");
this.$$O(node).addClass(tickClass);
var isMajor=(i % check == 0);
this.ticks[i]=this.minorSpacing * i + this.min;
var frac=(this.isHoriz == this.isInverted  ? 1 - fracSpacing * i : fracSpacing * i);
var spt=(new Float(frac * length + margin).toString()) + "px";
if (isMajor) this.$$O(node).css(this.isHoriz ? "height" : "width", "8px");
this.$$O(node).css(this.isHoriz ? "left" : "top", spt);
this.domNode.insertBefore(node, this.sliderTrack);
}
if (!this.paintLabels) this.getHTMLSizePreferred$swingjs_api_js_DOMNode$Z(this.domNode, false);
}if (this.paintLabels) {
this.myHeight+=20;
this.labelTable=this.slider.getLabelTable$();
var keys=this.labelTable.keys$();
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
var n=Integer.parseInt$S(key.toString());
var label=this.labelTable.get$O(key);
var labelNode=(label.getUI$()).getOuterNode$();
var frac=(n - this.min) * 1.0 / (max - this.min);
if (this.isHoriz == this.isInverted ) frac=1 - frac;
var px=(frac * length + margin);
var left;
var top;
if (this.isHoriz) {
top=20;
left=((px - (label.getWidth$()/2|0))|0);
} else {
top=((px - (label.getHeight$()/2|0))|0);
left=28;
}$I$(3).setTopLeftAbsolute(labelNode, top, left);
this.domNode.insertBefore(labelNode, this.sliderTrack);
}
}if (this.paintTicks) {
if (this.isHoriz) {
$I$(3).setStyles(this.sliderHandle, ["transform", "scaleX(0.5) rotateZ(45deg)", "top", "-8px"]);
$I$(3).setStyles(this.sliderTrack, ["height", "1px", "background", "black", "top", "12px", "border", "none"]);
this.setSliderAttr$S$F("scaleX", 0.5);
} else {
$I$(3).setStyles(this.sliderHandle, ["transform", "scaleY(0.5) rotateZ(45deg)", "left", "-10px", "margin-bottom", "-7px"]);
$I$(3).setStyles(this.sliderTrack, ["width", "1px", "left", "12px", "background", "black", "border", "none"]);
this.setSliderAttr$S$F("scaleY", 0.5);
}} else {
$I$(3).setStyles(this.sliderTrack, [this.isHoriz ? "top" : "left", barPlace + "%"]);
}if (this.isScrollBar) {
this.setScrollBarExtentAndCSS$();
} else {
if (!this.isHoriz) $I$(3).setStyles(this.sliderTrack, ["height", length + "px"]);
}this.getHTMLSizePreferred$swingjs_api_js_DOMNode$Z(this.domNode, false);
});

Clazz.newMeth(C$, 'getHTMLSizePreferred$swingjs_api_js_DOMNode$Z', function (obj, addCSS) {
var d=20;
if (this.paintLabels) d+=10;
if (this.paintTicks) d+=10;
if (this.slider.getBorder$() != null ) d+=10;
return Clazz.new_($I$(8).c$$I$I,[(this.isHoriz ? this.actualWidth : d), (this.isHoriz ? d : this.actualHeight)]);
});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
var v;
if ((v=this.slider.getMinimum$()) != this.min) this.setSliderAttr$S$F("min", this.min=v);
if ((v=this.slider.getMaximum$()) != this.max) this.setSliderAttr$S$F("max", this.max=v);
if ((v=this.slider.getValue$()) != this.val) {
this.setSliderAttr$S$F("value", this.val=v);
}p$1.setup$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'setScrollBarExtentAndCSS$', function () {
});

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent', function (jc) {
return (this.isScrollBar ? C$.superclazz.prototype.getMinimumSize$javax_swing_JComponent.apply(this, [jc]) : this.isHoriz ? p$1.getMinimumHorizontalSize.apply(this, []) : p$1.getMinimumVerticalSize.apply(this, []));
});

Clazz.newMeth(C$, 'getMinimumHorizontalSize', function () {
var horizDim=$I$(9).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.slider, this, "Slider.minimumHorizontalSize");
if (horizDim == null ) {
horizDim=Clazz.new_($I$(8).c$$I$I,[36, this.paintLabels ? 35 : 21]);
}return horizDim;
}, p$1);

Clazz.newMeth(C$, 'getMinimumVerticalSize', function () {
var vertDim=$I$(9).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.slider, this, "Slider.minimumVerticalSize");
if (vertDim == null ) {
vertDim=Clazz.new_($I$(8).c$$I$I,[this.paintLabels ? 35 : 21, 36]);
}return vertDim;
}, p$1);

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent', function (jc) {
return (this.isScrollBar ? C$.superclazz.prototype.getPreferredSize$javax_swing_JComponent.apply(this, [jc]) : this.isHoriz ? this.getPreferredHorizontalSize$() : this.getPreferredVerticalSize$());
});

Clazz.newMeth(C$, 'getPreferredHorizontalSize$', function () {
var horizDim=$I$(9).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.slider, this, "Slider.horizontalSize");
return Clazz.new_($I$(8).c$$I$I,[horizDim.width, Math.max(horizDim.height, this.myHeight)]);
});

Clazz.newMeth(C$, 'getPreferredVerticalSize$', function () {
var vertDim=$I$(9).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.slider, this, "Slider.verticalSize");
return Clazz.new_($I$(8).c$$I$I,[Math.max(vertDim.height, this.myHeight), vertDim.width]);
});

Clazz.newMeth(C$, 'scrollDueToClickInTrack$I$I', function (dir, val) {
this.scrollByBlock$I$I(dir, val);
});

Clazz.newMeth(C$, 'scrollByBlock$I', function (direction) {
this.scrollByBlock$I$I(direction, 2147483647);
});

Clazz.newMeth(C$, 'scrollByBlock$I$I', function (direction, val0) {
var val=0;
var blockIncrement=-1;
if (this.slider.getSnapToTicks$()) {
var jsslider=this.$$O(this.jqSlider);
if (this.slider.getSnapToValue$()) {
val=val0;
} else {
blockIncrement=p$1.getTickSpacing.apply(this, []);
}} else {
blockIncrement=((this.slider.getMaximum$() - this.slider.getMinimum$())/10|0);
if (blockIncrement == 0) {
blockIncrement=1;
}}if (blockIncrement >= 0) val=this.slider.getValue$() + blockIncrement * ((direction > 0) ? 1 : direction == 0 ? 0 : -1);
this.setValue$I(p$1.snapTo$I.apply(this, [val]));
});

Clazz.newMeth(C$, 'snapTo$I', function (val) {
if (this.ticks != null  && this.ticks.length > 2  && this.slider.getSnapToTicks$() ) {
var dc=2147483647;
var v=val;
for (var i=this.ticks.length; --i >= 0; ) {
var d=Math.abs(this.ticks[i] - val);
if (d < dc) {
dc=d;
v=this.ticks[i];
}}
val=v;
}return val;
}, p$1);

Clazz.newMeth(C$, 'scrollByUnit$I', function (direction) {
{
var delta=((direction > 0) ? 1 : -1);
if (this.slider.getSnapToTicks$()) {
delta*=p$1.getTickSpacing.apply(this, []);
}this.setValue$I(this.slider.getValue$() + delta);
}});

Clazz.newMeth(C$, 'getUnitIncrement$', function () {
return -1;
});

Clazz.newMeth(C$, 'getTickSpacing', function () {
var majorTickSpacing=this.slider.getMajorTickSpacing$();
var minorTickSpacing=this.slider.getMinorTickSpacing$();
var result;
if (minorTickSpacing > 0) {
result=minorTickSpacing;
} else if (majorTickSpacing > 0) {
result=majorTickSpacing;
} else {
result=0;
}return result;
}, p$1);

Clazz.newMeth(C$, 'setInnerComponentBounds$I$I', function (width, height) {
if (!this.paintTicks && !this.paintLabels ) {
var margin=(this.isScrollBar ? 6 : 10);
if (this.orientation == "vertical") {
$I$(3).setStyles(this.sliderTrack, ["height", (height - margin * 2) + "px"]);
} else if (this.isScrollBar) {
$I$(3).setStyles(this.sliderTrack, ["width", (width - margin * 2) + "px"]);
}this.setScrollBarExtentAndCSS$();
}});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent', function (jc) {
var d=C$.superclazz.prototype.getMaximumSize$javax_swing_JComponent.apply(this, [jc]);
return (d != null  ? d : this.isHoriz ? Clazz.new_($I$(8).c$$I$I,[32767, 40]) : Clazz.new_($I$(8).c$$I$I,[40, 32767]));
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:52 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
