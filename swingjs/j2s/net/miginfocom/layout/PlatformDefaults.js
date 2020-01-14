(function(){var P$=Clazz.newPackage("net.miginfocom.layout"),I$=[[0,'net.miginfocom.layout.UnitValue','java.util.HashMap','java.awt.Toolkit','net.miginfocom.layout.LayoutUtil','net.miginfocom.layout.BoundSize']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PlatformDefaults");
C$.VISUAL_PADDING_PROPERTY=null;
C$.DEF_H_UNIT=0;
C$.DEF_V_UNIT=0;
C$.GAP_PROVIDER=null;
C$.MOD_COUNT=0;
C$.LPX6=null;
C$.LPX7=null;
C$.LPX11=null;
C$.LPX12=null;
C$.LPX16=null;
C$.LPX18=null;
C$.LPX20=null;
C$.LPY6=null;
C$.LPY7=null;
C$.LPY11=null;
C$.LPY12=null;
C$.LPY16=null;
C$.LPY18=null;
C$.LPY20=null;
C$.CUR_PLAF=0;
C$.PANEL_INS=null;
C$.DIALOG_INS=null;
C$.BUTTON_FORMAT=null;
C$.HOR_DEFS=null;
C$.VER_DEFS=null;
C$.DEF_VGAP=null;
C$.DEF_HGAP=null;
C$.RELATED_X=null;
C$.RELATED_Y=null;
C$.UNRELATED_X=null;
C$.UNRELATED_Y=null;
C$.BUTT_WIDTH=null;
C$.BUTT_PADDING=null;
C$.horScale=null;
C$.verScale=null;
C$.LP_BASE=0;
C$.BASE_DPI_FORCED=null;
C$.BASE_DPI=0;
C$.dra=false;
C$.VISUAL_BOUNDS=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.VISUAL_PADDING_PROPERTY="visualPadding";
C$.DEF_H_UNIT=1;
C$.DEF_V_UNIT=2;
C$.GAP_PROVIDER=null;
C$.MOD_COUNT=0;
C$.LPX6=Clazz.new_($I$(1).c$$F$I$S,[6, 1, null]);
C$.LPX7=Clazz.new_($I$(1).c$$F$I$S,[7, 1, null]);
C$.LPX11=Clazz.new_($I$(1).c$$F$I$S,[11, 1, null]);
C$.LPX12=Clazz.new_($I$(1).c$$F$I$S,[12, 1, null]);
C$.LPX16=Clazz.new_($I$(1).c$$F$I$S,[16, 1, null]);
C$.LPX18=Clazz.new_($I$(1).c$$F$I$S,[18, 1, null]);
C$.LPX20=Clazz.new_($I$(1).c$$F$I$S,[20, 1, null]);
C$.LPY6=Clazz.new_($I$(1).c$$F$I$S,[6, 2, null]);
C$.LPY7=Clazz.new_($I$(1).c$$F$I$S,[7, 2, null]);
C$.LPY11=Clazz.new_($I$(1).c$$F$I$S,[11, 2, null]);
C$.LPY12=Clazz.new_($I$(1).c$$F$I$S,[12, 2, null]);
C$.LPY16=Clazz.new_($I$(1).c$$F$I$S,[16, 2, null]);
C$.LPY18=Clazz.new_($I$(1).c$$F$I$S,[18, 2, null]);
C$.LPY20=Clazz.new_($I$(1).c$$F$I$S,[20, 2, null]);
C$.CUR_PLAF=0;
C$.PANEL_INS=Clazz.array($I$(1), [4]);
C$.DIALOG_INS=Clazz.array($I$(1), [4]);
C$.BUTTON_FORMAT=null;
C$.HOR_DEFS=Clazz.new_($I$(2).c$$I,[32]);
C$.VER_DEFS=Clazz.new_($I$(2).c$$I,[32]);
C$.DEF_VGAP=null;
C$.DEF_HGAP=null;
C$.RELATED_X=null;
C$.RELATED_Y=null;
C$.UNRELATED_X=null;
C$.UNRELATED_Y=null;
C$.BUTT_WIDTH=null;
C$.BUTT_PADDING=null;
C$.horScale=null;
C$.verScale=null;
C$.LP_BASE=101;
C$.BASE_DPI_FORCED=null;
C$.BASE_DPI=96;
C$.dra=true;
C$.VISUAL_BOUNDS=Clazz.new_($I$(2).c$$I,[64]);
{
C$.setPlatform$I(C$.getCurrentPlatform$());
C$.MOD_COUNT=0;
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getCurrentPlatform$', function () {
if (true ||false) return 0;
var os=System.getProperty$S("os.name");
if (os.startsWith$S("Mac OS")) {
return 1;
} else if (os.startsWith$S("Linux")) {
return 2;
} else {
return 0;
}}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setPlatform$I', function (plaf) {
switch (plaf) {
case 0:
C$.setDefaultVisualPadding$S$IA("TabbedPane." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [1, 0, 1, 2]));
C$.setRelatedGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPX7, C$.LPY7);
C$.setUnrelatedGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPX11, C$.LPY11);
C$.setParagraphGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPX20, C$.LPY20);
C$.setIndentGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPX11, C$.LPY11);
C$.setGridCellGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPX7, C$.LPY7);
C$.setMinimumButtonWidth$net_miginfocom_layout_UnitValue(Clazz.new_($I$(1).c$$F$I$S,[75, 1, null]));
C$.setButtonOrder$S("L_E+U+YNBXOCAH_I_R");
C$.setDialogInsets$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPY11, C$.LPX11, C$.LPY11, C$.LPX11);
C$.setPanelInsets$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPY7, C$.LPX7, C$.LPY7, C$.LPX7);
break;
case 1:
C$.setDefaultVisualPadding$S$IA("Button." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [3, 6, 5, 6]));
C$.setDefaultVisualPadding$S$IA("Button.icon." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [3, 2, 3, 2]));
C$.setDefaultVisualPadding$S$IA("Button.square." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [4, 4, 4, 4]));
C$.setDefaultVisualPadding$S$IA("Button.square.icon." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [4, 4, 4, 4]));
C$.setDefaultVisualPadding$S$IA("Button.gradient." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [5, 4, 5, 4]));
C$.setDefaultVisualPadding$S$IA("Button.gradient.icon." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [5, 4, 5, 4]));
C$.setDefaultVisualPadding$S$IA("Button.bevel." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [2, 2, 3, 2]));
C$.setDefaultVisualPadding$S$IA("Button.bevel.icon." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [2, 2, 3, 2]));
C$.setDefaultVisualPadding$S$IA("Button.textured." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [3, 2, 3, 2]));
C$.setDefaultVisualPadding$S$IA("Button.textured.icon." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [3, 2, 3, 2]));
C$.setDefaultVisualPadding$S$IA("Button.roundRect." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [5, 4, 5, 4]));
C$.setDefaultVisualPadding$S$IA("Button.roundRect.icon." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [5, 4, 5, 4]));
C$.setDefaultVisualPadding$S$IA("Button.recessed." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [5, 4, 5, 4]));
C$.setDefaultVisualPadding$S$IA("Button.recessed.icon." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [5, 4, 5, 4]));
C$.setDefaultVisualPadding$S$IA("Button.help." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [4, 3, 3, 4]));
C$.setDefaultVisualPadding$S$IA("Button.help.icon." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [4, 3, 3, 4]));
C$.setDefaultVisualPadding$S$IA("ComboBox." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [2, 4, 4, 5]));
C$.setDefaultVisualPadding$S$IA("ComboBox.isPopDown." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [2, 5, 4, 5]));
C$.setDefaultVisualPadding$S$IA("ComboBox.isSquare." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [1, 6, 5, 7]));
C$.setDefaultVisualPadding$S$IA("ComboBox.editable." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [3, 3, 3, 2]));
C$.setDefaultVisualPadding$S$IA("ComboBox.editable.isSquare." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [3, 3, 3, 1]));
C$.setDefaultVisualPadding$S$IA("TextField." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [3, 3, 3, 3]));
C$.setDefaultVisualPadding$S$IA("TabbedPane." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [4, 8, 11, 8]));
C$.setDefaultVisualPadding$S$IA("Spinner." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [3, 3, 3, 1]));
C$.setDefaultVisualPadding$S$IA("RadioButton." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [4, 6, 3, 5]));
C$.setDefaultVisualPadding$S$IA("RadioButton.small." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [4, 6, 3, 5]));
C$.setDefaultVisualPadding$S$IA("RadioButton.mini." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [5, 7, 4, 5]));
C$.setDefaultVisualPadding$S$IA("CheckBox." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [5, 7, 4, 5]));
C$.setDefaultVisualPadding$S$IA("CheckBox.small." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [5, 7, 4, 5]));
C$.setDefaultVisualPadding$S$IA("CheckBox.mini." + C$.VISUAL_PADDING_PROPERTY, Clazz.array(Integer.TYPE, -1, [6, 7, 3, 5]));
C$.setRelatedGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPX7, C$.LPY7);
C$.setUnrelatedGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPX11, C$.LPY11);
C$.setParagraphGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPX20, C$.LPY20);
C$.setIndentGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPX11, C$.LPY11);
C$.setGridCellGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPX7, C$.LPY7);
C$.setMinimumButtonWidth$net_miginfocom_layout_UnitValue(Clazz.new_($I$(1).c$$F$I$S,[70, 1, null]));
C$.setMinimumButtonPadding$net_miginfocom_layout_UnitValue(Clazz.new_($I$(1).c$$F$I$S,[8, 1, null]));
C$.setButtonOrder$S("L_HE+U+NYBXCOA_I_R");
C$.setDialogInsets$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPY20, C$.LPX20, C$.LPY20, C$.LPX20);
C$.setPanelInsets$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPY16, C$.LPX16, C$.LPY16, C$.LPX16);
break;
case 2:
C$.setRelatedGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPX6, C$.LPY6);
C$.setUnrelatedGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPX12, C$.LPY12);
C$.setParagraphGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPX18, C$.LPY18);
C$.setIndentGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPX12, C$.LPY12);
C$.setGridCellGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPX6, C$.LPY6);
C$.setMinimumButtonWidth$net_miginfocom_layout_UnitValue(Clazz.new_($I$(1).c$$F$I$S,[85, 1, null]));
C$.setButtonOrder$S("L_HE+UNYACBXO_I_R");
C$.setDialogInsets$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPY12, C$.LPX12, C$.LPY12, C$.LPX12);
C$.setPanelInsets$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(C$.LPY6, C$.LPX6, C$.LPY6, C$.LPX6);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown platform: " + plaf]);
}
C$.CUR_PLAF=plaf;
C$.BASE_DPI=C$.BASE_DPI_FORCED != null  ? (C$.BASE_DPI_FORCED).intValue$() : C$.getPlatformDPI$I(plaf);
}, 1);

Clazz.newMeth(C$, 'setDefaultVisualPadding$S$IA', function (key, insets) {
C$.VISUAL_BOUNDS.put$TK$TV(key, insets);
}, 1);

Clazz.newMeth(C$, 'getDefaultVisualPadding$S', function (key) {
return C$.VISUAL_BOUNDS.get$O(key);
}, 1);

Clazz.newMeth(C$, 'getPlatformDPI$I', function (plaf) {
switch (plaf) {
case 0:
case 2:
return 96;
case 1:
try {
return $I$(3).getDefaultToolkit$().getScreenResolution$();
} catch (t) {
return 72;
}
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown platform: " + plaf]);
}
}, 1);

Clazz.newMeth(C$, 'getPlatform$', function () {
return C$.CUR_PLAF;
}, 1);

Clazz.newMeth(C$, 'getDefaultDPI$', function () {
return C$.BASE_DPI;
}, 1);

Clazz.newMeth(C$, 'setDefaultDPI$Integer', function (dpi) {
C$.BASE_DPI=dpi != null  ? (dpi).intValue$() : C$.getPlatformDPI$I(C$.CUR_PLAF);
C$.BASE_DPI_FORCED=dpi;
}, 1);

Clazz.newMeth(C$, 'getHorizontalScaleFactor$', function () {
return C$.horScale;
}, 1);

Clazz.newMeth(C$, 'setHorizontalScaleFactor$Float', function (f) {
if (!$I$(4).equals$O$O(C$.horScale, f)) {
C$.horScale=f;
C$.MOD_COUNT++;
}}, 1);

Clazz.newMeth(C$, 'getVerticalScaleFactor$', function () {
return C$.verScale;
}, 1);

Clazz.newMeth(C$, 'setVerticalScaleFactor$Float', function (f) {
if (!$I$(4).equals$O$O(C$.verScale, f)) {
C$.verScale=f;
C$.MOD_COUNT++;
}}, 1);

Clazz.newMeth(C$, 'getLogicalPixelBase$', function () {
return C$.LP_BASE;
}, 1);

Clazz.newMeth(C$, 'setLogicalPixelBase$I', function (base) {
if (C$.LP_BASE != base) {
if (base < 100 || base > 102 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unrecognized base: " + base]);
C$.LP_BASE=base;
C$.MOD_COUNT++;
}}, 1);

Clazz.newMeth(C$, 'setRelatedGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue', function (x, y) {
C$.setUnitValue$SA$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(Clazz.array(String, -1, ["r", "rel", "related"]), x, y);
C$.RELATED_X=Clazz.new_($I$(5).c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[x, x, null, "rel:rel"]);
C$.RELATED_Y=Clazz.new_($I$(5).c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[y, y, null, "rel:rel"]);
}, 1);

Clazz.newMeth(C$, 'setUnrelatedGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue', function (x, y) {
C$.setUnitValue$SA$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(Clazz.array(String, -1, ["u", "unrel", "unrelated"]), x, y);
C$.UNRELATED_X=Clazz.new_($I$(5).c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[x, x, null, "unrel:unrel"]);
C$.UNRELATED_Y=Clazz.new_($I$(5).c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[y, y, null, "unrel:unrel"]);
}, 1);

Clazz.newMeth(C$, 'setParagraphGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue', function (x, y) {
C$.setUnitValue$SA$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(Clazz.array(String, -1, ["p", "para", "paragraph"]), x, y);
}, 1);

Clazz.newMeth(C$, 'setIndentGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue', function (x, y) {
C$.setUnitValue$SA$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(Clazz.array(String, -1, ["i", "ind", "indent"]), x, y);
}, 1);

Clazz.newMeth(C$, 'setGridCellGap$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue', function (x, y) {
if (x != null ) C$.DEF_HGAP=Clazz.new_($I$(5).c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[x, x, null, null]);
if (y != null ) C$.DEF_VGAP=Clazz.new_($I$(5).c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[y, y, null, null]);
C$.MOD_COUNT++;
}, 1);

Clazz.newMeth(C$, 'setMinimumButtonWidth$net_miginfocom_layout_UnitValue', function (width) {
C$.BUTT_WIDTH=width;
C$.MOD_COUNT++;
}, 1);

Clazz.newMeth(C$, 'getMinimumButtonWidth$', function () {
return C$.BUTT_WIDTH;
}, 1);

Clazz.newMeth(C$, 'setMinimumButtonPadding$net_miginfocom_layout_UnitValue', function (padding) {
C$.BUTT_PADDING=padding;
C$.MOD_COUNT++;
}, 1);

Clazz.newMeth(C$, 'getMinimumButtonPadding$', function () {
return C$.BUTT_PADDING;
}, 1);

Clazz.newMeth(C$, 'getMinimumButtonWidthIncludingPadding$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper', function (refValue, parent, comp) {
var buttonMinWidth=C$.getMinimumButtonWidth$().getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refValue, parent, comp);
if (comp != null  && C$.getMinimumButtonPadding$() != null  ) {
return Math.max(comp.getMinimumWidth$I(comp.getWidth$()) + C$.getMinimumButtonPadding$().getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refValue, parent, comp) * 2, buttonMinWidth);
} else {
return buttonMinWidth;
}}, 1);

Clazz.newMeth(C$, 'getUnitValueX$S', function (unit) {
return C$.HOR_DEFS.get$O(unit);
}, 1);

Clazz.newMeth(C$, 'getUnitValueY$S', function (unit) {
return C$.VER_DEFS.get$O(unit);
}, 1);

Clazz.newMeth(C$, 'setUnitValue$SA$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue', function (unitStrings, x, y) {
for (var unitString, $unitString = 0, $$unitString = unitStrings; $unitString<$$unitString.length&&((unitString=($$unitString[$unitString])),1);$unitString++) {
var s=unitString.toLowerCase$().trim$();
if (x != null ) C$.HOR_DEFS.put$TK$TV(s, x);
if (y != null ) C$.VER_DEFS.put$TK$TV(s, y);
}
C$.MOD_COUNT++;
}, 1);

Clazz.newMeth(C$, 'convertToPixels$F$S$Z$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper', function (value, unit, isHor, ref, parent, comp) {
var uv=(isHor ? C$.HOR_DEFS : C$.VER_DEFS).get$O(unit);
return uv != null  ? Math.round(value * uv.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(ref, parent, comp)) : -87654312;
}, 1);

Clazz.newMeth(C$, 'getButtonOrder$', function () {
return C$.BUTTON_FORMAT;
}, 1);

Clazz.newMeth(C$, 'setButtonOrder$S', function (order) {
C$.BUTTON_FORMAT=order;
C$.MOD_COUNT++;
}, 1);

Clazz.newMeth(C$, 'getTagForChar$C', function (c) {
switch (c.$c()) {
case 111:
return "ok";
case 99:
return "cancel";
case 104:
return "help";
case 101:
return "help2";
case 121:
return "yes";
case 110:
return "no";
case 97:
return "apply";
case 120:
return "next";
case 98:
return "back";
case 105:
return "finish";
case 108:
return "left";
case 114:
return "right";
case 117:
return "other";
default:
return null;
}
}, 1);

Clazz.newMeth(C$, 'getGridGapX$', function () {
return C$.DEF_HGAP;
}, 1);

Clazz.newMeth(C$, 'getGridGapY$', function () {
return C$.DEF_VGAP;
}, 1);

Clazz.newMeth(C$, 'getDialogInsets$I', function (side) {
return C$.DIALOG_INS[side];
}, 1);

Clazz.newMeth(C$, 'setDialogInsets$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue', function (top, left, bottom, right) {
if (top != null ) C$.DIALOG_INS[0]=top;
if (left != null ) C$.DIALOG_INS[1]=left;
if (bottom != null ) C$.DIALOG_INS[2]=bottom;
if (right != null ) C$.DIALOG_INS[3]=right;
C$.MOD_COUNT++;
}, 1);

Clazz.newMeth(C$, 'getPanelInsets$I', function (side) {
return C$.PANEL_INS[side];
}, 1);

Clazz.newMeth(C$, 'setPanelInsets$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue', function (top, left, bottom, right) {
if (top != null ) C$.PANEL_INS[0]=top;
if (left != null ) C$.PANEL_INS[1]=left;
if (bottom != null ) C$.PANEL_INS[2]=bottom;
if (right != null ) C$.PANEL_INS[3]=right;
C$.MOD_COUNT++;
}, 1);

Clazz.newMeth(C$, 'getLabelAlignPercentage$', function () {
return C$.CUR_PLAF == 1 ? 1.0 : 0.0;
}, 1);

Clazz.newMeth(C$, 'getDefaultComponentGap$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_ComponentWrapper$I$S$Z', function (comp, adjacentComp, adjacentSide, tag, isLTR) {
if (C$.GAP_PROVIDER != null ) return C$.GAP_PROVIDER.getDefaultGap$(comp, adjacentComp, adjacentSide, tag, isLTR);
if (adjacentComp == null ) return null;
return (adjacentSide == 2 || adjacentSide == 4 ) ? C$.RELATED_X : C$.RELATED_Y;
}, 1);

Clazz.newMeth(C$, 'getGapProvider$', function () {
return C$.GAP_PROVIDER;
}, 1);

Clazz.newMeth(C$, 'setGapProvider$net_miginfocom_layout_InCellGapProvider', function (provider) {
C$.GAP_PROVIDER=provider;
}, 1);

Clazz.newMeth(C$, 'getModCount$', function () {
return C$.MOD_COUNT;
}, 1);

Clazz.newMeth(C$, 'invalidate$', function () {
C$.MOD_COUNT++;
});

Clazz.newMeth(C$, 'getDefaultHorizontalUnit$', function () {
return C$.DEF_H_UNIT;
}, 1);

Clazz.newMeth(C$, 'setDefaultHorizontalUnit$I', function (unit) {
if (unit < 0 || unit > 27 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal Unit: " + unit]);
if (C$.DEF_H_UNIT != unit) {
C$.DEF_H_UNIT=unit;
C$.MOD_COUNT++;
}}, 1);

Clazz.newMeth(C$, 'getDefaultVerticalUnit$', function () {
return C$.DEF_V_UNIT;
}, 1);

Clazz.newMeth(C$, 'setDefaultVerticalUnit$I', function (unit) {
if (unit < 0 || unit > 27 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal Unit: " + unit]);
if (C$.DEF_V_UNIT != unit) {
C$.DEF_V_UNIT=unit;
C$.MOD_COUNT++;
}}, 1);

Clazz.newMeth(C$, 'getDefaultRowAlignmentBaseline$', function () {
return C$.dra;
}, 1);

Clazz.newMeth(C$, 'setDefaultRowAlignmentBaseline$Z', function (b) {
C$.dra=b;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-02-03 08:07:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
