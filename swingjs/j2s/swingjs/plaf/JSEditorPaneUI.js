(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'java.awt.Insets','swingjs.api.js.DOMNode','swingjs.JSToolkit','javajs.util.SB','javax.swing.text.StyleConstants','java.awt.Color','java.awt.Dimension','Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSEditorPaneUI", null, 'swingjs.plaf.JSTextViewUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.epTimer=0;
this.currentHTML=null;
this.ffamily=null;
this.fsize=0;
this.fback=null;
this.ffore=null;
this.fbold=false;
this.fital=false;
this.myInsets=null;
this.lastTextNode=null;
this.timeoutID=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.myInsets=Clazz.new_($I$(1).c$$I$I$I$I,[0, 0, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
this.mustWrap=true;
this.domNode=P$.JSComponentUI.newDOMObject$S$S$SA("div", this.id, []);
$I$(2).setStyles(this.domNode, []);
this.$$O(this.domNode).addClass("swingjs-doc");
this.setupViewNode$();
}this.textListener.checkDocument$();
this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font(this.domNode, this.c.getFont$());
$I$(2).setAttr(this.domNode, "contentEditable", "TRUE");
this.setText$S(null);
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
var prop=e.getPropertyName$();
switch (prop) {
case "text":
this.setCurrentText$();
return;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, ['handleJSEvent$O$I$O','handleJSEvent$'], function (target, eventType, jQueryEvent) {
if ($I$(3).isMouseEvent$I(eventType)) {
return false;
}if (target != null ) {
var b=this.checkAllowKey$O(jQueryEvent);
if (b != null ) return b.booleanValue$();

var me = this; clearTimeout(this.epTimer);this.epTimer = setTimeout(function(){me.handleJSEvent$O$I$O(null, eventType, jQueryEvent)},50);
return true;
}return C$.superclazz.prototype.handleJSEvent$O$I$O.apply(this, [null, eventType, jQueryEvent]);
});

Clazz.newMeth(C$, 'getJSDocOffset$swingjs_api_js_DOMNode', function (node) {
var pt=0;
while (node !== this.domNode ){
var sib=$I$(2).getPreviousSibling(node);
while (sib != null ){
pt+=p$1.getJSCharCount$swingjs_api_js_DOMNode.apply(this, [sib]);
sib=$I$(2).getPreviousSibling(sib);
}
node=$I$(2).getParent(node);
}
return pt;
}, p$1);

Clazz.newMeth(C$, 'getJSCharCount$swingjs_api_js_DOMNode', function (sib) {
var n=0;
switch (sib.tagName ||"") {
case "BR":
return 1;
case "DIV":
n=1;
break;
}
return n + (sib.textContent && sib.textContent.length ||0);
}, p$1);

Clazz.newMeth(C$, 'setText$S', function (text) {
var sb=Clazz.new_($I$(4));
var d=this.editor.getDocument$();
if (d == null ) return;
if (text == null ) text=this.editor.getText$();
p$1.fromJava$S$javajs_util_SB$javax_swing_text_Element$Z$javax_swing_text_AttributeSet.apply(this, [text, sb, d.getRootElements$()[0], true, null]);
var html=sb.toString();
if (html == this.currentHTML) return;
text=this.fixText$S(this.currentText=text);
$I$(2).setAttr(this.domNode, "innerHTML", this.currentHTML=html);
p$1.updateDataUI.apply(this, []);
var me=this;
{
setTimeout(function(){me.updateJSCursor$S("text")},10);
}
});

Clazz.newMeth(C$, 'updateDataUI', function () {
var divs=this.$$O(this.domNode).find("*");
for (var i=divs.length; --i >= 0; ) this.setDataUI$swingjs_api_js_DOMNode(divs[i]);

}, p$1);

Clazz.newMeth(C$, 'fromJava$S$javajs_util_SB$javax_swing_text_Element$Z$javax_swing_text_AttributeSet', function (text, sb, node, allowBR, currAttr) {
p$1.setEditorAttrs.apply(this, []);
var start=node.getStartOffset$();
var end=node.getEndOffset$();
if (end == start) return;
var isDiv=text.charAt$I(end - 1) == "\n";
if (isDiv && start + 1 == end ) {
if (allowBR) sb.append$S("<div><br></div>");
return;
}var isBranch=(Clazz.instanceOf(node, "javax.swing.text.AbstractDocument.BranchElement"));
var a=node.getAttributes$();
var style=p$1.getCSSStyle$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [a, currAttr]);
var haveStyle=(style.length$() > 0);
if (haveStyle) style=" style=\"" + style + "\"" ;
var isSub=p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [4, a, null]);
var isSup=!isSub && p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [8, a, null]) ;
if (isSub) sb.append$S("<sub>");
 else if (isSup) sb.append$S("<sup>");
if (isBranch) {
sb.append$S(isDiv ? "<div" + style + ">"  : haveStyle ? "<span" + style + ">"  : "");
for (var i=0, n=node.getElementCount$(); i < n; i++) {
p$1.fromJava$S$javajs_util_SB$javax_swing_text_Element$Z$javax_swing_text_AttributeSet.apply(this, [text, sb, node.getElement$I(i), !isDiv, a]);
}
sb.append$S(isDiv ? "</div>" : haveStyle ? "</span>" : "");
} else {
if (haveStyle) sb.append$S("<span" + style + ">" );
var t=text.substring$I$I(start, isDiv ? end - 1 : end);
if (t.indexOf$I(" ") >= 0) for (var i=0; i < t.length$(); i++) {
if (t.charAt$I(i) != " ") break;
t=t.substring$I$I(0, i) + "&nbsp;" + t.substring$I(i + 1) ;
i+=5;
}
sb.append$S(t);
if (haveStyle) sb.append$S("</span>");
}if (isSup) sb.append$S("</sup>");
 else if (isSub) sb.append$S("</sub>");
}, p$1);

Clazz.newMeth(C$, 'getCSSStyle$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet', function (a, currAttr) {
var style="";
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [128, a, currAttr])) style += "background:" + $I$(3).getCSSColor$java_awt_Color(p$1.getBackground$javax_swing_text_AttributeSet.apply(this, [a])) + ";" ;
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [64, a, currAttr])) style += "color:" + $I$(3).getCSSColor$java_awt_Color(p$1.getForeground$javax_swing_text_AttributeSet.apply(this, [a])) + ";" ;
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [1, a, currAttr])) style += "font-weight:" + (p$1.isBold$javax_swing_text_AttributeSet.apply(this, [a]) ? "bold;" : "normal;");
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [2, a, currAttr])) style += "font-style:" + (p$1.isItalic$javax_swing_text_AttributeSet.apply(this, [a]) ? "italic;" : "normal;");
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [32, a, currAttr])) style += "font-family:" + $I$(3).getCSSFontFamilyName$S(p$1.getFontFamily$javax_swing_text_AttributeSet.apply(this, [a])) + ";" ;
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [16, a, currAttr])) style += "font-size:" + p$1.getFontSize$javax_swing_text_AttributeSet.apply(this, [a]) + "px;" ;
return style;
}, p$1);

Clazz.newMeth(C$, 'setEditorAttrs', function () {
this.ffamily=this.editor.getFont$().getFamily$();
this.fsize=this.editor.getFont$().getSize$();
this.fback=this.editor.getBackground$();
this.ffore=this.editor.getForeground$();
this.fbold=this.editor.getFont$().isBold$();
this.fital=this.editor.getFont$().isItalic$();
}, p$1);

Clazz.newMeth(C$, 'getFontFamily$javax_swing_text_AttributeSet', function (a) {
var f=a.getAttribute$O($I$(5).Family);
return (f == null  ? this.ffamily : f);
}, p$1);

Clazz.newMeth(C$, 'getFontSize$javax_swing_text_AttributeSet', function (a) {
var f=a.getAttribute$O($I$(5).Size);
return (f == null  ? this.fsize : f.intValue$());
}, p$1);

Clazz.newMeth(C$, 'isItalic$javax_swing_text_AttributeSet', function (a) {
var f=a.getAttribute$O($I$(5).Italic);
return (f == null  ? this.fital : f.booleanValue$());
}, p$1);

Clazz.newMeth(C$, 'isBold$javax_swing_text_AttributeSet', function (a) {
var f=a.getAttribute$O($I$(5).Bold);
return (f == null  ? this.fbold : f.booleanValue$());
}, p$1);

Clazz.newMeth(C$, 'getForeground$javax_swing_text_AttributeSet', function (a) {
var f=a.getAttribute$O($I$(5).Foreground);
return (f == null  ? this.ffore : f);
}, p$1);

Clazz.newMeth(C$, 'getBackground$javax_swing_text_AttributeSet', function (a) {
var f=a.getAttribute$O($I$(5).Background);
return (f == null  ? this.fback : f);
}, p$1);

Clazz.newMeth(C$, 'checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet', function (attr, a, currAttr) {
switch (attr) {
case 1:
return (currAttr == null  || p$1.isBold$javax_swing_text_AttributeSet.apply(this, [a]) != p$1.isBold$javax_swing_text_AttributeSet.apply(this, [currAttr])  );
case 2:
return (currAttr == null  || p$1.isItalic$javax_swing_text_AttributeSet.apply(this, [a]) != p$1.isItalic$javax_swing_text_AttributeSet.apply(this, [currAttr])  );
case 4:
return $I$(5).isSubscript$javax_swing_text_AttributeSet(a);
case 8:
return $I$(5).isSuperscript$javax_swing_text_AttributeSet(a);
case 16:
return (currAttr == null  || p$1.getFontSize$javax_swing_text_AttributeSet.apply(this, [a]) != p$1.getFontSize$javax_swing_text_AttributeSet.apply(this, [currAttr]) );
case 32:
return (currAttr == null  || p$1.getFontFamily$javax_swing_text_AttributeSet.apply(this, [a]) != p$1.getFontFamily$javax_swing_text_AttributeSet.apply(this, [currAttr]) );
case 64:
var f=p$1.getForeground$javax_swing_text_AttributeSet.apply(this, [a]);
return f !== $I$(6).none  && (currAttr == null  || !f.equals$O(p$1.getForeground$javax_swing_text_AttributeSet.apply(this, [currAttr])) ) ;
case 128:
var b=p$1.getBackground$javax_swing_text_AttributeSet.apply(this, [a]);
return b !== $I$(6).none  && (currAttr == null  || !b.equals$O(p$1.getBackground$javax_swing_text_AttributeSet.apply(this, [currAttr])) ) ;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'getInsets$', function () {
return this.myInsets;
});

Clazz.newMeth(C$, 'getCSSAdjustment$Z', function (addingCSS) {
return Clazz.new_($I$(7).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'getPropertyPrefix$', function () {
return "EditorPane";
});

Clazz.newMeth(C$, 'getJSNodePt$swingjs_api_js_DOMNode$I$I', function (node, off, pt) {
var isRoot=(off < 0);
if (isRoot) {
this.lastTextNode=null;
off=0;
}{
var nodes = node.childNodes;
var tag = node.tagName;
var n = nodes.length;
if (tag == "BR" || n == 1 && nodes[0].tagName == "BR") { return (pt == off ? [node, 0] : [null, 1]);
} var ipt = off;
var nlen = 0;
var i1 = (tag == "DIV" || tag == "P" ? 1 : 0);
for (var i = 0; i < n; i++) { node = nodes[i];
if (node.innerText) { ret = this.getJSNodePt$swingjs_api_js_DOMNode$I$I(node, ipt, pt, false);
if (ret[0] != null) { return ret;
} nlen = ret[1];
} else if (node.tagName == "BR") { if (ipt == pt) return [node.parentNode, i];
nlen = (isRoot ? 1 : 0);
} else if (ipt + (nlen = (this.lastTextNode = node).length) >= pt) { return [node, Math.max(0, pt - ipt)];
} ipt += nlen;
} return (isRoot ? [this.lastTextNode, Math.max(0, ret[3] - 1)] : [null, ipt + i1 - off, node, nlen]);
}
});

Clazz.newMeth(C$, 'getJSTextValue$', function () {
return C$.getInnerTextSafely$swingjs_api_js_DOMNode$Z$javajs_util_SB(this.domNode, false, null).toString().replace$C$C("\u00a0", " ");
});

Clazz.newMeth(C$, 'getInnerTextSafely$swingjs_api_js_DOMNode$Z$javajs_util_SB', function (node, isLast, sb) {
var isRoot=(sb == null );
if (isRoot) sb=Clazz.new_($I$(4));
var ret;
var tagName=$I$(2).getAttr(node, "tagName");
if (tagName == null ) {
sb.append$S($I$(2).getAttr(node, "data"));
ret=$I$(8).TRUE;
} else {
ret=$I$(8).FALSE;
var nodes=$I$(2).getAttr(node, "childNodes");
if (tagName == "BR" || nodes.length == 1 && $I$(2).getAttr(nodes[0], "tagName") === "BR"   ) {
sb.append$S("\n");
} else {
for (var i=0, n=nodes.length; i < n; i++) ret=C$.getInnerTextSafely$swingjs_api_js_DOMNode$Z$javajs_util_SB(nodes[i], i == n - 1, sb);

if ((!isRoot || isLast ) && ret === $I$(8).TRUE  ) {
switch (tagName) {
case "DIV":
case "BR":
case "P":
sb.append$S("\n");
break;
}
}}}return (isRoot ? sb.toString() : ret);
}, 1);

Clazz.newMeth(C$, 'setJSTextDelayed$', function () {
var u=this;
var t=this.editor;

if (this.timeoutID) { clearTimeout(this.timeoutID);
} this.timeoutID = setTimeout(function(){u.timeoutID = 0;u.updateDOMNode$()},50);
});

Clazz.newMeth(C$, 'jsSelect$OA$OA$Z', function (r1, r2, andScroll) {

var range = document.createRange();
range.setStart(r1[0], r1[1] || 0);
range.setEnd(r2[0], r2[1] || 0);
var sel = window.getSelection();
sel.removeAllRanges();
sel.addRange(range);
if (andScroll) {
var node=r2[0];

if (node.scrollIntoView) { node.scrollIntoView();
} else { node.parentElement.scrollIntoView();
}
}});

Clazz.newMeth(C$, 'updateJSCursorFromCaret$', function () {
this.updateJSCursor$S("default");
});

Clazz.newMeth(C$, 'getJSMarkAndDot$java_awt_Point', function (pt) {
var dot=0;
var mark=0;
var apt=0;
var fpt=0;
var anode=null;
var fnode=null;
var atag=null;
var ftag=null;

var s = window.getSelection();
anode = s.anchorNode;
apt = s.anchorOffset;
if (anode.tagName) { anode = anode.childNodes[apt];
apt = 0;
} fnode = s.focusNode;
fpt = s.focusOffset;
if (fnode.tagName) { fnode = fnode.childNodes[fpt];
fpt = 0;
}
if (anode == null  || fnode == null  ) {
System.out.println$S("JSEditorPaneUI anode or fnode is null ");
return false;
}mark=p$1.getJSDocOffset$swingjs_api_js_DOMNode.apply(this, [anode]);
dot=(anode === fnode  ? mark : p$1.getJSDocOffset$swingjs_api_js_DOMNode.apply(this, [fnode])) + fpt;
mark+=apt;
pt.x=mark;
pt.y=dot;
return true;
});

Clazz.newMeth(C$, 'setJSMarkAndDot$I$I$Z', function (mark, dot, andScroll) {
this.editor.getCaret$().setDot$I(dot);
p$1.updateDataUI.apply(this, []);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:49 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
