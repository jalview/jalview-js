(function(){var P$=Clazz.newPackage("sun.swing"),p$1={},I$=[[0,'java.util.HashMap',['sun.swing.SwingUtilities2','.BearingCacheEntry'],'java.util.HashSet','java.awt.font.FontRenderContext','sun.swing.StringUIClientPropertyKey','java.lang.ref.SoftReference','java.text.AttributedString','java.awt.font.LineBreakMeasurer','java.awt.RenderingHints','java.awt.font.TextLayout','java.awt.font.TextHitInfo','javax.swing.SwingUtilities','StringBuffer','javax.swing.UIManager',['sun.swing.SwingUtilities2','.Section']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SwingUtilities2", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.LAF_STATE_KEY=null;
C$.strongBearingCache=null;
C$.strongBearingCacheNextIndex=0;
C$.softBearingCache=null;
C$.DEFAULT_FRC=null;
C$.AA_TEXT_PROPERTY_KEY=null;
C$.COMPONENT_UI_PROPERTY_KEY=null;
C$.BASICMENUITEMUI_MAX_TEXT_OFFSET=null;
C$.charsBufferLock=null;
C$.charsBuffer=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.LAF_STATE_KEY= Clazz.new_();
C$.strongBearingCache=Clazz.array($I$(2), [10]);
C$.strongBearingCacheNextIndex=0;
C$.softBearingCache=Clazz.new_($I$(3));
C$.DEFAULT_FRC=Clazz.new_($I$(4).c$$java_awt_geom_AffineTransform$Z$Z,[null, false, false]);
C$.AA_TEXT_PROPERTY_KEY= Clazz.new_();
C$.COMPONENT_UI_PROPERTY_KEY= Clazz.new_();
C$.BASICMENUITEMUI_MAX_TEXT_OFFSET=Clazz.new_($I$(5).c$$S,["maxTextOffset"]);
C$.charsBufferLock= Clazz.new_();
C$.charsBuffer=Clazz.array(Character.TYPE, [100]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isComplexLayout$CA$I$I', function (text, start, limit) {
return false;
}, 1);

Clazz.newMeth(C$, 'drawTextAntialiased$javax_swing_JComponent', function (c) {
if (c != null ) {
return c.getClientProperty$O(C$.AA_TEXT_PROPERTY_KEY);
}return null;
}, 1);

Clazz.newMeth(C$, 'getLeftSideBearing$javax_swing_JComponent$java_awt_FontMetrics$S', function (c, fm, string) {
if ((string == null ) || (string.length$() == 0) ) {
return 0;
}return C$.getLeftSideBearing$javax_swing_JComponent$java_awt_FontMetrics$C(c, fm, string.charAt$I(0));
}, 1);

Clazz.newMeth(C$, 'getLeftSideBearing$javax_swing_JComponent$java_awt_FontMetrics$C', function (c, fm, firstChar) {
return 0;
}, 1);

Clazz.newMeth(C$, 'getRightSideBearing$javax_swing_JComponent$java_awt_FontMetrics$S', function (c, fm, string) {
if ((string == null ) || (string.length$() == 0) ) {
return 0;
}return C$.getRightSideBearing$javax_swing_JComponent$java_awt_FontMetrics$C(c, fm, string.charAt$I(string.length$() - 1));
}, 1);

Clazz.newMeth(C$, 'getRightSideBearing$javax_swing_JComponent$java_awt_FontMetrics$C', function (c, fm, lastChar) {
return C$.getBearing$javax_swing_JComponent$java_awt_FontMetrics$C$Z(c, fm, lastChar, false);
}, 1);

Clazz.newMeth(C$, 'getBearing$javax_swing_JComponent$java_awt_FontMetrics$C$Z', function (comp, fm, c, isLeftBearing) {
if (fm == null ) {
if (comp == null ) {
return 0;
} else {
fm=comp.getFontMetrics$java_awt_Font(comp.getFont$());
}}{
var entry=null;
var searchKey=Clazz.new_($I$(2).c$$java_awt_FontMetrics,[fm]);
for (var cacheEntry, $cacheEntry = 0, $$cacheEntry = C$.strongBearingCache; $cacheEntry<$$cacheEntry.length&&((cacheEntry=($$cacheEntry[$cacheEntry])),1);$cacheEntry++) {
if (searchKey.equals$O(cacheEntry)) {
entry=cacheEntry;
break;
}}
if (entry == null ) {
var iter=C$.softBearingCache.iterator$();
while (iter.hasNext$()){
var cacheEntry=iter.next$().get$();
if (cacheEntry == null ) {
iter.remove$();
continue;
}if (searchKey.equals$O(cacheEntry)) {
entry=cacheEntry;
C$.putEntryInStrongCache$sun_swing_SwingUtilities2_BearingCacheEntry(entry);
break;
}}
}if (entry == null ) {
entry=searchKey;
C$.cacheEntry$sun_swing_SwingUtilities2_BearingCacheEntry(entry);
}return (isLeftBearing) ? entry.getLeftSideBearing$C(c) : entry.getRightSideBearing$C(c);
}}, 1);

Clazz.newMeth(C$, 'cacheEntry$sun_swing_SwingUtilities2_BearingCacheEntry', function (entry) {
var oldestEntry=C$.strongBearingCache[C$.strongBearingCacheNextIndex];
if (oldestEntry != null ) {
C$.softBearingCache.add$TE(Clazz.new_($I$(6).c$$TT,[oldestEntry]));
}C$.putEntryInStrongCache$sun_swing_SwingUtilities2_BearingCacheEntry(entry);
}, 1);

Clazz.newMeth(C$, 'putEntryInStrongCache$sun_swing_SwingUtilities2_BearingCacheEntry', function (entry) {
C$.strongBearingCache[C$.strongBearingCacheNextIndex]=entry;
C$.strongBearingCacheNextIndex=(C$.strongBearingCacheNextIndex + 1) % 10;
}, 1);

Clazz.newMeth(C$, 'getFontMetrics$javax_swing_JComponent$java_awt_Graphics', function (c, g) {
if (c != null ) {
return c.getFontMetrics$java_awt_Font(g.getFont$());
}return g.getFont$().getFontMetrics$();
}, 1);

Clazz.newMeth(C$, 'getFontMetrics$javax_swing_JComponent$java_awt_Graphics$java_awt_Font', function (c, g, font) {
if (c != null ) {
return c.getFontMetrics$java_awt_Font(font);
}return font.getFontMetrics$();
}, 1);

Clazz.newMeth(C$, 'stringWidth$javax_swing_JComponent$java_awt_FontMetrics$S', function (c, fm, string) {
if (string == null  || string.equals$O("") ) {
return 0;
}return fm.stringWidth$S(string);
}, 1);

Clazz.newMeth(C$, 'clipStringIfNecessary$javax_swing_JComponent$java_awt_FontMetrics$S$I', function (c, fm, string, availTextWidth) {
if ((string == null ) || (string.equals$O("")) ) {
return "";
}var textWidth=C$.stringWidth$javax_swing_JComponent$java_awt_FontMetrics$S(c, fm, string);
if (textWidth > availTextWidth) {
return C$.clipString$javax_swing_JComponent$java_awt_FontMetrics$S$I(c, fm, string, availTextWidth);
}return string;
}, 1);

Clazz.newMeth(C$, 'clipString$javax_swing_JComponent$java_awt_FontMetrics$S$I', function (c, fm, string, availTextWidth) {
var clipString="...";
var stringLength=string.length$();
availTextWidth-=C$.stringWidth$javax_swing_JComponent$java_awt_FontMetrics$S(c, fm, clipString);
if (availTextWidth <= 0) {
return clipString;
}var needsTextLayout=false;
{
if (C$.charsBuffer == null  || C$.charsBuffer.length < stringLength ) {
C$.charsBuffer=string.toCharArray$();
} else {
string.getChars$I$I$CA$I(0, stringLength, C$.charsBuffer, 0);
}needsTextLayout=C$.isComplexLayout$CA$I$I(C$.charsBuffer, 0, stringLength);
if (!needsTextLayout) {
var width=0;
for (var nChars=0; nChars < stringLength; nChars++) {
width+=fm.charWidth$C(C$.charsBuffer[nChars]);
if (width > availTextWidth) {
string=string.substring$I$I(0, nChars);
break;
}}
}}if (needsTextLayout) {
var frc=C$.getFontRenderContext$java_awt_Component$java_awt_FontMetrics(c, fm);
var aString=Clazz.new_($I$(7).c$$S,[string]);
var measurer=Clazz.new_($I$(8).c$$java_text_AttributedCharacterIterator$java_awt_font_FontRenderContext,[aString.getIterator$(), frc]);
var nChars=measurer.nextOffset$F(availTextWidth);
string=string.substring$I$I(0, nChars);
}return string + clipString;
}, 1);

Clazz.newMeth(C$, 'drawString$javax_swing_JComponent$java_awt_Graphics$S$I$I', function (c, g, text, x, y) {
if (text == null  || text.length$() <= 0 ) {
return;
}var info=C$.drawTextAntialiased$javax_swing_JComponent(c);
if (info != null  && (Clazz.instanceOf(g, "java.awt.Graphics2D")) ) {
var g2=g;
var oldContrast=null;
var oldAAValue=g2.getRenderingHint$java_awt_RenderingHints_Key($I$(9).KEY_TEXT_ANTIALIASING);
if (info.aaHint !== oldAAValue ) {
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(9).KEY_TEXT_ANTIALIASING, info.aaHint);
} else {
oldAAValue=null;
}if (info.lcdContrastHint != null ) {
oldContrast=g2.getRenderingHint$java_awt_RenderingHints_Key($I$(9).KEY_TEXT_LCD_CONTRAST);
if (info.lcdContrastHint.equals$O(oldContrast)) {
oldContrast=null;
} else {
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(9).KEY_TEXT_LCD_CONTRAST, info.lcdContrastHint);
}}g.drawString$S$I$I(text, x, y);
if (oldAAValue != null ) {
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(9).KEY_TEXT_ANTIALIASING, oldAAValue);
}if (oldContrast != null ) {
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(9).KEY_TEXT_LCD_CONTRAST, oldContrast);
}} else {
g.drawString$S$I$I(text, x, y);
}}, 1);

Clazz.newMeth(C$, 'drawStringUnderlineCharAt$javax_swing_JComponent$java_awt_Graphics$S$I$I$I', function (c, g, text, underlinedIndex, x, y) {
if (text == null  || text.length$() <= 0 ) {
return;
}C$.drawString$javax_swing_JComponent$java_awt_Graphics$S$I$I(c, g, text, x, y);
var textLength=text.length$();
if (underlinedIndex >= 0 && underlinedIndex < textLength ) {
var underlineRectY=y;
var underlineRectHeight=1;
var underlineRectX=0;
var underlineRectWidth=0;
var isPrinting=C$.isPrinting$java_awt_Graphics(g);
var needsTextLayout=isPrinting;
if (!needsTextLayout) {
{
if (C$.charsBuffer == null  || C$.charsBuffer.length < textLength ) {
C$.charsBuffer=text.toCharArray$();
} else {
text.getChars$I$I$CA$I(0, textLength, C$.charsBuffer, 0);
}needsTextLayout=C$.isComplexLayout$CA$I$I(C$.charsBuffer, 0, textLength);
}}if (!needsTextLayout) {
var fm=g.getFontMetrics$();
underlineRectX=x + C$.stringWidth$javax_swing_JComponent$java_awt_FontMetrics$S(c, fm, text.substring$I$I(0, underlinedIndex));
underlineRectWidth=fm.charWidth$C(text.charAt$I(underlinedIndex));
} else {
var g2d=C$.getGraphics2D$java_awt_Graphics(g);
if (g2d != null ) {
var layout=Clazz.new_($I$(10).c$$S$java_awt_Font$java_awt_font_FontRenderContext,[text, g2d.getFont$(), g2d.getFontRenderContext$()]);
if (isPrinting) {
var screenWidth=g2d.getFont$().getStringBounds$S$java_awt_font_FontRenderContext(text, C$.DEFAULT_FRC).getWidth$();
layout=layout.getJustifiedLayout$F(screenWidth);
}var leading=$I$(11).leading$I(underlinedIndex);
var trailing=$I$(11).trailing$I(underlinedIndex);
var shape=layout.getVisualHighlightShape$java_awt_font_TextHitInfo$java_awt_font_TextHitInfo(leading, trailing);
var rect=shape.getBounds$();
underlineRectX=x + rect.x;
underlineRectWidth=rect.width;
}}g.fillRect$I$I$I$I(underlineRectX, underlineRectY + 1, underlineRectWidth, underlineRectHeight);
}}, 1);

Clazz.newMeth(C$, 'loc2IndexFileList$javax_swing_JList$java_awt_Point', function (list, point) {
var index=list.locationToIndex$java_awt_Point(point);
if (index != -1) {
var bySize=list.getClientProperty$O("List.isFileList");
if (Clazz.instanceOf(bySize, "java.lang.Boolean") && (bySize).booleanValue$() && !C$.pointIsInActualBounds$javax_swing_JList$I$java_awt_Point(list, index, point)  ) {
index=-1;
}}return index;
}, 1);

Clazz.newMeth(C$, 'pointIsInActualBounds$javax_swing_JList$I$java_awt_Point', function (list, index, point) {
var renderer=list.getCellRenderer$();
var dataModel=list.getModel$();
var value=dataModel.getElementAt$I(index);
var item=renderer.getListCellRendererComponent$(list, value, index, false, false);
var itemSize=item.getPreferredSize$();
var cellBounds=list.getCellBounds$I$I(index, index);
if (!item.getComponentOrientation$().isLeftToRight$()) {
cellBounds.x+=(cellBounds.width - itemSize.width);
}cellBounds.width=itemSize.width;
return cellBounds.contains$java_awt_Point(point);
}, 1);

Clazz.newMeth(C$, 'pointOutsidePrefSize$javax_swing_JTable$I$I$java_awt_Point', function (table, row, column, p) {
if (table.convertColumnIndexToModel$I(column) != 0 || row == -1 ) {
return true;
}var tcr=table.getCellRenderer$I$I(row, column);
var value=table.getValueAt$I$I(row, column);
var cell=tcr.getTableCellRendererComponent$(table, value, false, false, row, column);
var itemSize=cell.getPreferredSize$();
var cellBounds=table.getCellRect$I$I$Z(row, column, false);
cellBounds.width=itemSize.width;
cellBounds.height=itemSize.height;
if (p.x > cellBounds.x + cellBounds.width || p.y > cellBounds.y + cellBounds.height ) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'setLeadAnchorWithoutSelection$javax_swing_ListSelectionModel$I$I', function (model, lead, anchor) {
if (anchor == -1) {
anchor=lead;
}if (lead == -1) {
model.setAnchorSelectionIndex$I(-1);
model.setLeadSelectionIndex$I(-1);
} else {
if (model.isSelectedIndex$I(lead)) {
model.addSelectionInterval$I$I(lead, lead);
} else {
model.removeSelectionInterval$I$I(lead, lead);
}model.setAnchorSelectionIndex$I(anchor);
}}, 1);

Clazz.newMeth(C$, 'shouldIgnore$java_awt_event_MouseEvent$javax_swing_JComponent', function (me, c) {
return c == null  || !c.isEnabled$()  || !$I$(12).isLeftMouseButton$java_awt_event_MouseEvent(me)  || me.isConsumed$() ;
}, 1);

Clazz.newMeth(C$, 'adjustFocus$javax_swing_JComponent', function (c) {
if (!c.hasFocus$() && c.isRequestFocusEnabled$() ) {
c.requestFocus$();
}}, 1);

Clazz.newMeth(C$, 'getGraphics2D$java_awt_Graphics', function (g) {
if (Clazz.instanceOf(g, "java.awt.Graphics2D")) {
return g;
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'getFontRenderContext$java_awt_Component', function (c) {
if (c == null ) {
return C$.DEFAULT_FRC;
} else {
return c.getFontMetrics$java_awt_Font(c.getFont$()).getFontRenderContext$();
}}, 1);

Clazz.newMeth(C$, 'getFontRenderContext$java_awt_Component$java_awt_FontMetrics', function (c, fm) {
return (fm != null ) ? fm.getFontRenderContext$() : C$.getFontRenderContext$java_awt_Component(c);
}, 1);

Clazz.newMeth(C$, 'isPrinting$java_awt_Graphics', function (g) {
return false;
}, 1);

Clazz.newMeth(C$, 'useSelectedTextColor$javax_swing_text_Highlighter_Highlight$javax_swing_text_JTextComponent', function (h, c) {
var painter=h.getPainter$();
var painterClass=painter.getClass$().getName$();
if (painterClass.indexOf$S("javax.swing.text.DefaultHighlighter") != 0 && painterClass.indexOf$S("com.sun.java.swing.plaf.windows.WindowsTextUI") != 0 ) {
return false;
}try {
var defPainter=painter;
if (defPainter.getColor$() != null  && !defPainter.getColor$().equals$O(c.getSelectionColor$()) ) {
return false;
}} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
return false;
} else {
throw e;
}
}
return true;
}, 1);

Clazz.newMeth(C$, 'canAccessSystemClipboard$', function () {
var canAccess=false;
return canAccess;
}, 1);

Clazz.newMeth(C$, 'canCurrentEventAccessSystemClipboard$', function () {
return false;
}, 1);

Clazz.newMeth(C$, 'displayPropertiesToCSS$java_awt_Font$java_awt_Color', function (font, fg) {
var rule=Clazz.new_($I$(13).c$$S,["body {"]);
if (font != null ) {
rule.append$S(" font-family: ");
rule.append$S(font.getFamily$());
rule.append$S(" ; ");
rule.append$S(" font-size: ");
rule.append$S("" + font.getSize$());
rule.append$S("pt ;");
if (font.isBold$()) {
rule.append$S(" font-weight: 700 ; ");
}if (font.isItalic$()) {
rule.append$S(" font-style: italic ; ");
}}if (fg != null ) {
rule.append$S(" color: #");
if (fg.getRed$() < 16) {
rule.append$C("0");
}rule.append$S(Integer.toHexString$I(fg.getRed$()));
if (fg.getGreen$() < 16) {
rule.append$C("0");
}rule.append$S(Integer.toHexString$I(fg.getGreen$()));
if (fg.getBlue$() < 16) {
rule.append$C("0");
}rule.append$S(Integer.toHexString$I(fg.getBlue$()));
rule.append$S(" ; ");
}rule.append$S(" }");
return rule.toString();
}, 1);

Clazz.newMeth(C$, 'makeIcon$Class$Class$S', function (baseClass, rootClass, imageFile) {
return null;
}, 1);

Clazz.newMeth(C$, 'isLocalDisplay$', function () {
return true;
}, 1);

Clazz.newMeth(C$, 'getUIDefaultsInt$O', function (key) {
return C$.getUIDefaultsInt$O$I(key, 0);
}, 1);

Clazz.newMeth(C$, 'getUIDefaultsInt$O$java_util_Locale', function (key, l) {
return C$.getUIDefaultsInt$O$java_util_Locale$I(key, l, 0);
}, 1);

Clazz.newMeth(C$, 'getUIDefaultsInt$O$I', function (key, defaultValue) {
return C$.getUIDefaultsInt$O$java_util_Locale$I(key, null, defaultValue);
}, 1);

Clazz.newMeth(C$, 'getUIDefaultsInt$O$java_util_Locale$I', function (key, l, defaultValue) {
var value=$I$(14).get$O$java_util_Locale(key, l);
if (Clazz.instanceOf(value, "java.lang.Integer")) {
return (value).intValue$();
}if (Clazz.instanceOf(value, "java.lang.String")) {
try {
return Integer.parseInt$S(value);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
}return defaultValue;
}, 1);

Clazz.newMeth(C$, 'tabbedPaneChangeFocusTo$java_awt_Component', function (comp) {
if (comp != null ) {
if (comp.isFocusTraversable$()) {
C$.compositeRequestFocus$java_awt_Component(comp);
return true;
} else if (Clazz.instanceOf(comp, "javax.swing.JComponent") && (comp).requestDefaultFocus$() ) {
return true;
}}return false;
}, 1);

Clazz.newMeth(C$, 'liesIn$java_awt_Rectangle$java_awt_Point$Z$Z$Z', function (rect, p, horizontal, ltr, three) {
var p0;
var pComp;
var length;
var forward;
if (horizontal) {
p0=rect.x;
pComp=p.x;
length=rect.width;
forward=ltr;
} else {
p0=rect.y;
pComp=p.y;
length=rect.height;
forward=true;
}if (three) {
var boundary=(length >= 30) ? 10 : (length/3|0);
if (pComp < p0 + boundary) {
return forward ? $I$(15).LEADING : $I$(15).TRAILING;
} else if (pComp >= p0 + length - boundary) {
return forward ? $I$(15).TRAILING : $I$(15).LEADING;
}return $I$(15).MIDDLE;
} else {
var middle=p0 + (length/2|0);
if (forward) {
return pComp >= middle ? $I$(15).TRAILING : $I$(15).LEADING;
} else {
return pComp < middle ? $I$(15).TRAILING : $I$(15).LEADING;
}}}, 1);

Clazz.newMeth(C$, 'liesInHorizontal$java_awt_Rectangle$java_awt_Point$Z$Z', function (rect, p, ltr, three) {
return C$.liesIn$java_awt_Rectangle$java_awt_Point$Z$Z$Z(rect, p, true, ltr, three);
}, 1);

Clazz.newMeth(C$, 'liesInVertical$java_awt_Rectangle$java_awt_Point$Z', function (rect, p, three) {
return C$.liesIn$java_awt_Rectangle$java_awt_Point$Z$Z$Z(rect, p, false, false, three);
}, 1);

Clazz.newMeth(C$, 'compositeRequestFocus$java_awt_Component', function (editorComponent) {
}, 1);
;
(function(){var C$=Clazz.newClass(P$.SwingUtilities2, "AATextInfo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.aaHint=null;
this.lcdContrastHint=null;
this.frc=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getAATextInfo$Z', function (lafCondition) {
return null;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.SwingUtilities2, "BearingCacheEntry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.oneChar=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.oneChar=Clazz.array(Character.TYPE, [1]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fontMetrics=null;
this.font=null;
this.frc=null;
this.cache=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_FontMetrics', function (fontMetrics) {
C$.$init$.apply(this);
this.fontMetrics=fontMetrics;
this.font=fontMetrics.getFont$();
this.frc=fontMetrics.getFontRenderContext$();
this.cache=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getLeftSideBearing$C', function (aChar) {
var bearing=this.cache.get$O(new Character(aChar));
if (bearing == null ) {
bearing=new Short(p$1.calcBearing$C.apply(this, [aChar]));
this.cache.put$TK$TV(new Character(aChar), bearing);
}return ((65280 & (bearing).shortValue$()) >>> 8) - 127;
});

Clazz.newMeth(C$, 'getRightSideBearing$C', function (aChar) {
var bearing=this.cache.get$O(new Character(aChar));
if (bearing == null ) {
bearing=new Short(p$1.calcBearing$C.apply(this, [aChar]));
this.cache.put$TK$TV(new Character(aChar), bearing);
}return (255 & (bearing).shortValue$()) - 127;
});

Clazz.newMeth(C$, 'calcBearing$C', function (aChar) {
var width=this.fontMetrics.charWidth$C(aChar);
var lsb=(width/2|0);
var rsb=(width/2|0);
if (lsb < -127 || lsb > 127 ) {
lsb=0;
}if (rsb < -127 || rsb > 127 ) {
rsb=0;
}return ($s$[0] = (((lsb + 127) << 8) + (rsb + 127)), $s$[0]);
}, p$1);

Clazz.newMeth(C$, 'equals$O', function (entry) {
if (entry === this ) {
return true;
}if (!(Clazz.instanceOf(entry, "sun.swing.SwingUtilities2.BearingCacheEntry"))) {
return false;
}var oEntry=entry;
return (this.font.equals$O(oEntry.font) && this.frc.equals$java_awt_font_FontRenderContext(oEntry.frc) );
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=17;
if (this.font != null ) {
result=37 * result + this.font.hashCode$();
}if (this.frc != null ) {
result=37 * result + this.frc.hashCode$();
}return result;
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.SwingUtilities2, "Section", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "LEADING", 0, []);
Clazz.newEnumConst($vals, C$.c$, "MIDDLE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "TRAILING", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
