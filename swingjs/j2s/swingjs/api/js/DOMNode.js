(function(){var P$=Clazz.newPackage("swingjs.api.js"),I$=[[0,'swingjs.JSUtil','java.awt.Dimension']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DOMNode");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createElement', function (key, id) {
var node=null;

node = document.createElement(key);
id && (node.id = id);
return node;
}, 1);

Clazz.newMeth(C$, 'getElement', function (id) {
return (document.getElementById(id) ||null);
}, 1);

Clazz.newMeth(C$, 'createTextNode', function (text) {
return (document.createTextNode(text) ||null);
}, 1);

Clazz.newMeth(C$, 'getParent', function (node) {
return (node.parentNode ||null);
}, 1);

Clazz.newMeth(C$, 'getPreviousSibling', function (node) {
return (node.previousSibling ||null);
}, 1);

Clazz.newMeth(C$, 'firstChild', function (node) {
return (node.firstChild ||null);
}, 1);

Clazz.newMeth(C$, 'lastChild', function (node) {
return (node.lastChild ||null);
}, 1);

Clazz.newMeth(C$, 'setZ', function (node, z) {
return C$.setStyles(node, ["z-index", "" + z]);
}, 1);

Clazz.newMeth(C$, 'getAttr', function (node, attr) {
{
if (!node) return null;
var a = node[attr];
return (typeof a == "undefined" ? null : a);
}
}, 1);

Clazz.newMeth(C$, 'getAttrInt', function (node, attr) {
return (node && node[attr] ||0);
}, 1);

Clazz.newMeth(C$, 'getStyle', function (node, style) {
return (node && node.style[style] ||null);
}, 1);

Clazz.newMeth(C$, 'getCSSRectangle', function (node, r) {

r.x = parseInt(node.style.left.split("p")[0]);
r.y = parseInt(node.style.top.split("p")[0]);
r.width = parseInt(node.style.width.split("p")[0]);
r.height = parseInt(node.style.height.split("p")[0]);
}, 1);

Clazz.newMeth(C$, 'setAttr', function (node, attr, val) {

attr && (node[attr] = (val == "秘TRUE" ? true : val == "秘FALSE" ? false : val));
return node;
}, 1);

Clazz.newMeth(C$, 'setAttrInt', function (node, attr, val) {

node[attr] = val;
}, 1);

Clazz.newMeth(C$, 'setAttrs', function (node, attr) {

for (var i = 0; i < attr.length;) { C$.setAttr(node, attr[i++],attr[i++]);
}
return node;
}, 1);

Clazz.newMeth(C$, 'setStyles', function (node, attr) {

if (node) for (var i = 0; i < attr.length;) { node.style[attr[i++]] = attr[i++];
}
return node;
}, 1);

Clazz.newMeth(C$, 'setSize', function (node, width, height) {
return C$.setStyles(node, ["width", width + "px", "height", height + "px"]);
}, 1);

Clazz.newMeth(C$, 'setPositionAbsolute', function (node) {
return C$.setStyles(node, ["position", "absolute"]);
}, 1);

Clazz.newMeth(C$, 'setVisible', function (node, visible) {
C$.setStyles(node, ["display", visible ? "block" : "none"]);
}, 1);

Clazz.newMeth(C$, 'setTopLeftAbsolute', function (node, top, left) {
C$.setStyles(node, ["top", top + "px"]);
C$.setStyles(node, ["left", left + "px"]);
return C$.setStyles(node, ["position", "absolute"]);
}, 1);

Clazz.newMeth(C$, 'setCursor', function (c, comp) {
var ui=(comp == null  ? null : (comp).秘getUI$());
var node=(ui == null  ? null : ui.getDOMNode$());

if (node == null) {document.body.style.cursor = c} else {  node.style.cursor = c }
}, 1);

Clazz.newMeth(C$, 'addHorizontalGap', function (domNode, gap) {
var label=C$.setStyles(C$.createElement("label", null), ["letter-spacing", gap + "px", "font-size", "0pt"]);
label.appendChild(C$.createTextNode("."));
domNode.appendChild(label);
}, 1);

Clazz.newMeth(C$, 'appendChildSafely', function (parent, node) {

if (!parent || node.parentElement == parent) return;
parent.appendChild(node);
}, 1);

Clazz.newMeth(C$, 'getAudioElement', function (filePath, isLoop) {
var clip=C$.setAttrs(C$.createElement("audio", null), ["controls", "true", (isLoop ? "loop" : null), (isLoop ? "true" : null), "src", filePath]);

clip.play$ = clip.play;
clip.stop$ = clip.stop;
clip.loop$ = clip.loop;
return clip;
}, 1);

Clazz.newMeth(C$, 'getHeight', function (node) {
return $I$(1).jQuery.$(node).height();
}, 1);

Clazz.newMeth(C$, 'getWidth', function (node) {
return $I$(1).jQuery.$(node).width();
}, 1);

Clazz.newMeth(C$, 'dispose', function (node) {
if (node != null ) $I$(1).jQuery.$(node).remove();
}, 1);

Clazz.newMeth(C$, 'remove', function (node) {
var p=C$.getParent(node);
if (p != null ) p.removeChild(node);
}, 1);

Clazz.newMeth(C$, 'detachAll', function (node) {

if(node) while(node.lastChild) node.removeChild(node.lastChild);
}, 1);

Clazz.newMeth(C$, 'transferTo', function (node, container) {
if (node == null ) return null;
var p=C$.getParent(node);
try {
if (p != null ) $I$(1).jQuery.$(node).detach();
} catch (e) {
}
if (container == null ) return p;
$I$(1).jQuery.$(container).append(node);
return container;
}, 1);

Clazz.newMeth(C$, 'getComponentFor', function (node) {
if (node == null ) return null;
var ui=(node.ui || node["data-ui"] || node["data-component"] || node["data-textcomponent"] ||null);
return (ui == null  ? null : ui.jc);
}, 1);

Clazz.newMeth(C$, 'getEmbedded', function (name, type) {
var node=C$.getElement(name + "-div");
if (node == null ) return null;
switch (type) {
case "node":
return node;
case "dim":
return Clazz.new_([C$.getWidth(node), C$.getHeight(node)],$I$(2,1).c$$I$I);
default:
return C$.getAttr(node, type);
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 08:17:08 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
