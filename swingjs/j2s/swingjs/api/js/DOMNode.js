(function(){var P$=Clazz.newPackage("swingjs.api.js"),I$=[[0,'swingjs.JSUtil']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DOMNode");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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

node[attr] = (val == "TRUE" ? true : val == "FALSE" ? false : val);
return node;
}, 1);

Clazz.newMeth(C$, 'setAttrInt', function (node, attr, val) {

node[attr] = val;
}, 1);

Clazz.newMeth(C$, 'setAttrs', function (node, attr) {

for (var i = 0; i < attr.length;) { var key = attr[i++];
var val = attr[i++];
key && (node[key] = val);
}
return node;
}, 1);

Clazz.newMeth(C$, 'setStyles', function (node, attr) {

if (node) for (var i = 0; i < attr.length;) { //
node.style[attr[i++]] = attr[i++];
//
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
var ui=(comp == null  ? null : (comp).getUI$());
var node=(ui == null  ? null : ui.getDOMNode$());

if (node == null) {document.body.style.cursor = c} else {  node.style.cursor = c }
}, 1);

Clazz.newMeth(C$, 'getImageNode', function (img) {
return (img._canvas || img._imgNode ||null);
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

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:46 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
