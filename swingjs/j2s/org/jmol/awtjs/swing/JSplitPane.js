(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'org.jmol.awtjs.swing.JComponentImp','javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSplitPane", null, 'org.jmol.awtjs.swing.JComponent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isH=false;
this.split=0;
this.right=null;
this.left=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isH=true;
this.split=1;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (split) {
C$.superclazz.c$$S.apply(this, ["JSpP"]);
C$.$init$.apply(this);
this.split=split;
this.isH=(split == 1);
}, 1);

Clazz.newMeth(C$, 'setRightComponent$org_jmol_awtjs_swing_JComponent', function (r) {
this.right=Clazz.new_($I$(1).c$$S,[null]);
this.right.add$javajs_awt_Component(r);
});

Clazz.newMeth(C$, 'setLeftComponent$org_jmol_awtjs_swing_JComponent', function (l) {
this.left=Clazz.new_($I$(1).c$$S,[null]);
this.left.add$javajs_awt_Component(l);
});

Clazz.newMeth(C$, 'getSubcomponentWidth$', function () {
var w=this.width;
if (w == 0) {
var wleft=this.left.getSubcomponentWidth$();
var wright=this.right.getSubcomponentWidth$();
if (wleft > 0 && wright > 0 ) {
if (this.isH) w=wleft + wright;
 else w=Math.max(wleft, wright);
}}return w;
});

Clazz.newMeth(C$, 'getSubcomponentHeight$', function () {
var h=this.height;
if (h == 0) {
var hleft=this.left.getSubcomponentHeight$();
var hright=this.right.getSubcomponentHeight$();
if (hleft > 0 && hright > 0 ) {
if (this.isH) h=Math.max(hleft, hright);
 else h=hleft + hright;
}}return h;
});

Clazz.newMeth(C$, 'toHTML$', function () {
if (this.left == null  || this.right == null  ) return "";
var isH=(this.split == 1);
if (this.width == 0) this.width=this.getSubcomponentWidth$();
if (this.height == 0) this.height=this.getSubcomponentHeight$();
var sb=Clazz.new_($I$(2));
sb.append$S("<div id='" + this.id + "' class='JSplitPane' style='" + this.getCSSstyle$I$I(100, 100) + "'>" );
if (isH) sb.append$S("<div id='" + this.id + "_left' style='width:50%;height:100%;position:absolute;top:0%;left:0%'>" );
 else sb.append$S("<div id='" + this.id + "_top' style='width:100%;height:50%;position:absolute;top:0%;left:0%'>" );
sb.append$S(this.left.getComponents$()[0].toHTML$());
if (isH) sb.append$S("</div><div id='" + this.id + "_right' style='width:50%;height:100%;position:absolute;top:0%;left:50%'>" );
 else sb.append$S("</div><div id='" + this.id + "_bottom' style='width:100%;height:50%;position:absolute;top:50%;left:0%'>" );
sb.append$S(this.right.getComponents$()[0].toHTML$());
sb.append$S("</div></div>\n");
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
