(function(){var P$=Clazz.newPackage("net.miginfocom.swing"),p$1={},I$=[[0,'java.util.IdentityHashMap','java.util.HashMap','net.miginfocom.layout.PlatformDefaults','net.miginfocom.layout.ConstraintParser','net.miginfocom.swing.SwingComponentWrapper','java.util.ArrayList','javax.swing.Timer',['net.miginfocom.swing.MigLayout','.MyDebugRepaintListener'],'javax.swing.SwingUtilities','net.miginfocom.layout.LayoutUtil','net.miginfocom.layout.Grid','java.util.HashSet','java.util.Arrays','net.miginfocom.swing.SwingContainerWrapper','java.awt.Window','net.miginfocom.layout.BoundSize','java.awt.Point','javax.swing.JPopupMenu','java.awt.Dimension']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MigLayout", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.awt.LayoutManager2', 'java.io.Externalizable']);
C$.$classes$=[['MyDebugRepaintListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.scrConstrMap=Clazz.new_($I$(1,1).c$$I,[8]);
this.layoutConstraints="";
this.colConstraints="";
this.rowConstraints="";
this.cacheParentW=null;
this.ccMap=Clazz.new_($I$(2,1).c$$I,[8]);
this.debugTimer=null;
this.lc=null;
this.colSpecs=null;
this.rowSpecs=null;
this.grid=null;
this.lastModCount=$I$(3).getModCount$();
this.lastHash=-1;
this.lastInvalidSize=null;
this.lastWasInvalid=false;
this.lastParentSize=null;
this.callbackList=null;
this.dirty=true;
this.lastSize=0;
},1);

C$.$fields$=[['Z',['lastWasInvalid','dirty'],'I',['lastModCount','lastHash'],'J',['lastSize'],'O',['scrConstrMap','java.util.Map','layoutConstraints','java.lang.Object','+colConstraints','+rowConstraints','cacheParentW','net.miginfocom.layout.ContainerWrapper','ccMap','java.util.Map','debugTimer','javax.swing.Timer','lc','net.miginfocom.layout.LC','colSpecs','net.miginfocom.layout.AC','+rowSpecs','grid','net.miginfocom.layout.Grid','lastInvalidSize','java.awt.Dimension','+lastParentSize','callbackList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S$S$S.apply(this, ["", "", ""]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (layoutConstraints) {
C$.c$$S$S$S.apply(this, [layoutConstraints, "", ""]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (layoutConstraints, colConstraints) {
C$.c$$S$S$S.apply(this, [layoutConstraints, colConstraints, ""]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S', function (layoutConstraints, colConstraints, rowConstraints) {
;C$.$init$.apply(this);
this.setLayoutConstraints$O(layoutConstraints);
this.setColumnConstraints$O(colConstraints);
this.setRowConstraints$O(rowConstraints);
}, 1);

Clazz.newMeth(C$, 'c$$net_miginfocom_layout_LC', function (layoutConstraints) {
C$.c$$net_miginfocom_layout_LC$net_miginfocom_layout_AC$net_miginfocom_layout_AC.apply(this, [layoutConstraints, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$net_miginfocom_layout_LC$net_miginfocom_layout_AC', function (layoutConstraints, colConstraints) {
C$.c$$net_miginfocom_layout_LC$net_miginfocom_layout_AC$net_miginfocom_layout_AC.apply(this, [layoutConstraints, colConstraints, null]);
}, 1);

Clazz.newMeth(C$, 'c$$net_miginfocom_layout_LC$net_miginfocom_layout_AC$net_miginfocom_layout_AC', function (layoutConstraints, colConstraints, rowConstraints) {
;C$.$init$.apply(this);
this.setLayoutConstraints$O(layoutConstraints);
this.setColumnConstraints$O(colConstraints);
this.setRowConstraints$O(rowConstraints);
}, 1);

Clazz.newMeth(C$, 'getLayoutConstraints$', function () {
return this.layoutConstraints;
});

Clazz.newMeth(C$, 'setLayoutConstraints$O', function (constr) {
if (constr == null  || Clazz.instanceOf(constr, "java.lang.String") ) {
constr=$I$(4).prepare$S(constr);
this.lc=$I$(4).parseLayoutConstraint$S(constr);
} else if (Clazz.instanceOf(constr, "net.miginfocom.layout.LC")) {
this.lc=constr;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal constraint type: " + constr.getClass$().toString()]);
}this.layoutConstraints=constr;
this.dirty=true;
});

Clazz.newMeth(C$, 'getColumnConstraints$', function () {
return this.colConstraints;
});

Clazz.newMeth(C$, 'setColumnConstraints$O', function (constr) {
if (constr == null  || Clazz.instanceOf(constr, "java.lang.String") ) {
constr=$I$(4).prepare$S(constr);
this.colSpecs=$I$(4).parseColumnConstraints$S(constr);
} else if (Clazz.instanceOf(constr, "net.miginfocom.layout.AC")) {
this.colSpecs=constr;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal constraint type: " + constr.getClass$().toString()]);
}this.colConstraints=constr;
this.dirty=true;
});

Clazz.newMeth(C$, 'getRowConstraints$', function () {
return this.rowConstraints;
});

Clazz.newMeth(C$, 'setRowConstraints$O', function (constr) {
if (constr == null  || Clazz.instanceOf(constr, "java.lang.String") ) {
constr=$I$(4).prepare$S(constr);
this.rowSpecs=$I$(4).parseRowConstraints$S(constr);
} else if (Clazz.instanceOf(constr, "net.miginfocom.layout.AC")) {
this.rowSpecs=constr;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal constraint type: " + constr.getClass$().toString()]);
}this.rowConstraints=constr;
this.dirty=true;
});

Clazz.newMeth(C$, 'getConstraintMap$', function () {
return Clazz.new_($I$(1,1).c$$java_util_Map,[this.scrConstrMap]);
});

Clazz.newMeth(C$, 'setConstraintMap$java_util_Map', function (map) {
this.scrConstrMap.clear$();
this.ccMap.clear$();
for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) p$1.setComponentConstraintsImpl$java_awt_Component$O$Z.apply(this, [e.getKey$(), e.getValue$(), true]);

});

Clazz.newMeth(C$, 'getComponentConstraints$java_awt_Component', function (comp) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(comp.getParent$().getTreeLock$());
{
return this.scrConstrMap.get$O(comp);
}});

Clazz.newMeth(C$, 'setComponentConstraints$java_awt_Component$O', function (comp, constr) {
p$1.setComponentConstraintsImpl$java_awt_Component$O$Z.apply(this, [comp, constr, false]);
});

Clazz.newMeth(C$, 'setComponentConstraintsImpl$java_awt_Component$O$Z', function (comp, constr, noCheck) {
var parent=comp.getParent$();
/*sync org.eclipse.jdt.core.dom.ConditionalExpression*/(parent != null  ? parent.getTreeLock$() :  Clazz.new_());
{
if (noCheck == false  && this.scrConstrMap.containsKey$O(comp) == false  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component must already be added to parent!"]);
var cw=Clazz.new_($I$(5,1).c$$java_awt_Component,[comp]);
if (constr == null  || Clazz.instanceOf(constr, "java.lang.String") ) {
var cStr=$I$(4).prepare$S(constr);
this.scrConstrMap.put$O$O(comp, constr);
this.ccMap.put$O$O(cw, $I$(4).parseComponentConstraint$S(cStr));
} else if (Clazz.instanceOf(constr, "net.miginfocom.layout.CC")) {
this.scrConstrMap.put$O$O(comp, constr);
this.ccMap.put$O$O(cw, constr);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Constraint must be String or ComponentConstraint: " + constr.getClass$().toString()]);
}this.dirty=true;
}}, p$1);

Clazz.newMeth(C$, 'isManagingComponent$java_awt_Component', function (c) {
return this.scrConstrMap.containsKey$O(c);
});

Clazz.newMeth(C$, 'addLayoutCallback$net_miginfocom_layout_LayoutCallback', function (callback) {
if (callback == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.callbackList == null ) this.callbackList=Clazz.new_($I$(6,1).c$$I,[1]);
this.callbackList.add$O(callback);
this.grid=null;
});

Clazz.newMeth(C$, 'removeLayoutCallback$net_miginfocom_layout_LayoutCallback', function (callback) {
if (this.callbackList != null ) this.callbackList.remove$O(callback);
});

Clazz.newMeth(C$, 'setDebug$net_miginfocom_layout_ComponentWrapper$Z', function (parentW, b) {
if (b && (this.debugTimer == null  || this.debugTimer.getDelay$() != p$1.getDebugMillis.apply(this, []) ) ) {
if (this.debugTimer != null ) this.debugTimer.stop$();
var pCW=parentW.getParent$();
var parent=pCW != null  ? pCW.getComponent$() : null;
this.debugTimer=Clazz.new_([p$1.getDebugMillis.apply(this, []), Clazz.new_($I$(8,1),[this, null])],$I$(7,1).c$$I$java_awt_event_ActionListener);
if (parent != null ) {
$I$(9,"invokeLater$Runnable",[((P$.MigLayout$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MigLayout$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var p=this.$finals$.parent.getParent$();
if (p != null ) {
if (Clazz.instanceOf(p, "javax.swing.JComponent")) {
(p).revalidate$();
} else {
this.$finals$.parent.invalidate$();
p.validate$();
}}});
})()
), Clazz.new_(P$.MigLayout$1.$init$,[this, {parent:parent}]))]);
}this.debugTimer.setInitialDelay$I(100);
this.debugTimer.start$();
} else if (!b && this.debugTimer != null  ) {
this.debugTimer.stop$();
this.debugTimer=null;
}}, p$1);

Clazz.newMeth(C$, 'getDebug', function () {
return this.debugTimer != null ;
}, p$1);

Clazz.newMeth(C$, 'getDebugMillis', function () {
var globalDebugMillis=$I$(10).getGlobalDebugMillis$();
return globalDebugMillis > 0 ? globalDebugMillis : this.lc.getDebugMillis$();
}, p$1);

Clazz.newMeth(C$, 'checkCache$java_awt_Container', function (parent) {
if (parent == null ) return;
if (this.dirty) this.grid=null;
p$1.cleanConstraintMaps$java_awt_Container.apply(this, [parent]);
var mc=$I$(3).getModCount$();
if (this.lastModCount != mc) {
this.grid=null;
this.lastModCount=mc;
}if (!parent.isValid$()) {
if (!this.lastWasInvalid) {
this.lastWasInvalid=true;
var hash=0;
var resetLastInvalidOnParent=false;
for (var wrapper, $wrapper = this.ccMap.keySet$().iterator$(); $wrapper.hasNext$()&&((wrapper=($wrapper.next$())),1);) {
var component=wrapper.getComponent$();
if (Clazz.instanceOf(component, "javax.swing.JTextArea") || Clazz.instanceOf(component, "javax.swing.JEditorPane") ) resetLastInvalidOnParent=true;
hash^=wrapper.getLayoutHashCode$();
hash+=285134905;
}
if (resetLastInvalidOnParent) p$1.resetLastInvalidOnParent$java_awt_Container.apply(this, [parent]);
if (hash != this.lastHash) {
this.grid=null;
this.lastHash=hash;
}var ps=parent.getSize$();
if (this.lastInvalidSize == null  || !this.lastInvalidSize.equals$O(ps) ) {
this.grid=null;
this.lastInvalidSize=ps;
}}} else {
this.lastWasInvalid=false;
}var par=p$1.checkParent$java_awt_Container.apply(this, [parent]);
p$1.setDebug$net_miginfocom_layout_ComponentWrapper$Z.apply(this, [par, p$1.getDebugMillis.apply(this, []) > 0]);
if (this.grid == null ) this.grid=Clazz.new_($I$(11,1).c$$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_LC$net_miginfocom_layout_AC$net_miginfocom_layout_AC$java_util_Map$java_util_ArrayList,[par, this.lc, this.rowSpecs, this.colSpecs, this.ccMap, this.callbackList]);
this.dirty=false;
}, p$1);

Clazz.newMeth(C$, 'cleanConstraintMaps$java_awt_Container', function (parent) {
var parentCompSet=Clazz.new_([$I$(13,"asList$OA",[parent.getComponents$()])],$I$(12,1).c$$java_util_Collection);
var it=this.ccMap.entrySet$().iterator$();
while (it.hasNext$()){
var c=it.next$().getKey$().getComponent$();
if (parentCompSet.contains$O(c) == false ) {
it.remove$();
this.scrConstrMap.remove$O(c);
}}
}, p$1);

Clazz.newMeth(C$, 'resetLastInvalidOnParent$java_awt_Container', function (parent) {
while (parent != null ){
var layoutManager=parent.getLayout$();
if (Clazz.instanceOf(layoutManager, "net.miginfocom.swing.MigLayout")) {
(layoutManager).lastWasInvalid=false;
}parent=parent.getParent$();
}
}, p$1);

Clazz.newMeth(C$, 'checkParent$java_awt_Container', function (parent) {
if (parent == null ) return null;
if (this.cacheParentW == null  || this.cacheParentW.getComponent$() !== parent  ) this.cacheParentW=Clazz.new_($I$(14,1).c$$java_awt_Container,[parent]);
return this.cacheParentW;
}, p$1);

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container', function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
p$1.checkCache$java_awt_Container.apply(this, [parent]);
var i=parent.getInsets$();
var b=Clazz.array(Integer.TYPE, -1, [i.left, i.top, parent.getWidth$() - i.left - i.right , parent.getHeight$() - i.top - i.bottom ]);
if (this.grid.layout$IA$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z(b, this.lc.getAlignX$(), this.lc.getAlignY$(), p$1.getDebug.apply(this, []))) {
this.grid=null;
p$1.checkCache$java_awt_Container.apply(this, [parent]);
this.grid.layout$IA$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z(b, this.lc.getAlignX$(), this.lc.getAlignY$(), p$1.getDebug.apply(this, []));
}var newSize=this.grid.getHeight$()[1] + ((this.grid.getWidth$()[1]) << 32);
if (this.lastSize != newSize) {
this.lastSize=newSize;
var containerWrapper=p$1.checkParent$java_awt_Container.apply(this, [parent]);
var win=($I$(9,"getAncestorOfClass$Class$java_awt_Component",[Clazz.getClass($I$(15)), containerWrapper.getComponent$()]));
if (win != null ) {
if (win.isVisible$()) {
$I$(9,"invokeLater$Runnable",[((P$.MigLayout$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "MigLayout$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
p$1.adjustWindowSize$net_miginfocom_layout_ContainerWrapper.apply(this.b$['net.miginfocom.swing.MigLayout'], [this.$finals$.containerWrapper]);
});
})()
), Clazz.new_(P$.MigLayout$2.$init$,[this, {containerWrapper:containerWrapper}]))]);
} else {
p$1.adjustWindowSize$net_miginfocom_layout_ContainerWrapper.apply(this, [containerWrapper]);
}}}this.lastInvalidSize=null;
}});

Clazz.newMeth(C$, 'adjustWindowSize$net_miginfocom_layout_ContainerWrapper', function (parent) {
var wBounds=this.lc.getPackWidth$();
var hBounds=this.lc.getPackHeight$();
if (wBounds === $I$(16).NULL_SIZE  && hBounds === $I$(16).NULL_SIZE  ) return;
var packable=p$1.getPackable$java_awt_Component.apply(this, [parent.getComponent$()]);
if (packable != null ) {
var pc=parent.getComponent$();
var c=Clazz.instanceOf(pc, "java.awt.Container") ? pc : pc.getParent$();
for (; c != null ; c=c.getParent$()) {
var layout=c.getLayout$();
if (Clazz.instanceOf(layout, "javax.swing.BoxLayout") || Clazz.instanceOf(layout, "javax.swing.OverlayLayout") ) (layout).invalidateLayout$java_awt_Container(c);
}
var prefSize=packable.getPreferredSize$();
var targW=p$1.constrain$net_miginfocom_layout_ContainerWrapper$I$I$net_miginfocom_layout_BoundSize.apply(this, [p$1.checkParent$java_awt_Container.apply(this, [packable]), packable.getWidth$(), prefSize.width, wBounds]);
var targH=p$1.constrain$net_miginfocom_layout_ContainerWrapper$I$I$net_miginfocom_layout_BoundSize.apply(this, [p$1.checkParent$java_awt_Container.apply(this, [packable]), packable.getHeight$(), prefSize.height, hBounds]);
var p=packable.isShowing$() ? packable.getLocationOnScreen$() : packable.getLocation$();
var x=Math.round(p.x - ((targW - packable.getWidth$()) * (1 - this.lc.getPackWidthAlign$())));
var y=Math.round(p.y - ((targH - packable.getHeight$()) * (1 - this.lc.getPackHeightAlign$())));
if (Clazz.instanceOf(packable, "javax.swing.JPopupMenu")) {
var popupMenu=packable;
popupMenu.setVisible$Z(false);
popupMenu.setPopupSize$I$I(targW, targH);
var invoker=popupMenu.getInvoker$();
var popPoint=Clazz.new_($I$(17,1).c$$I$I,[x, y]);
$I$(9).convertPointFromScreen$java_awt_Point$java_awt_Component(popPoint, invoker);
(packable).show$java_awt_Component$I$I(invoker, popPoint.x, popPoint.y);
packable.setPreferredSize$java_awt_Dimension(null);
} else {
packable.setBounds$I$I$I$I(x, y, targW, targH);
}}}, p$1);

Clazz.newMeth(C$, 'getPackable$java_awt_Component', function (comp) {
var popup=C$.findType$Class$java_awt_Component(Clazz.getClass($I$(18)), comp);
if (popup != null ) {
var popupComp=popup;
while (popupComp != null ){
if (popupComp.getClass$().getName$().contains$CharSequence("HeavyWeightWindow")) return popupComp;
popupComp=popupComp.getParent$();
}
return popup;
}return C$.findType$Class$java_awt_Component(Clazz.getClass($I$(15)), comp);
}, p$1);

Clazz.newMeth(C$, 'findType$Class$java_awt_Component', function (clazz, comp) {
while (comp != null  && !clazz.isInstance$O(comp) )comp=comp.getParent$();

return comp;
}, 1);

Clazz.newMeth(C$, 'constrain$net_miginfocom_layout_ContainerWrapper$I$I$net_miginfocom_layout_BoundSize', function (parent, winSize, prefSize, constrain) {
if (constrain == null ) return winSize;
var retSize=winSize;
var wUV=constrain.getPreferred$();
if (wUV != null ) retSize=wUV.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(prefSize, parent, parent);
retSize=constrain.constrain$I$F$net_miginfocom_layout_ContainerWrapper(retSize, prefSize, parent);
return constrain.getGapPush$() ? Math.max(winSize, retSize) : retSize;
}, p$1);

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container', function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
return p$1.getSizeImpl$java_awt_Container$I.apply(this, [parent, 0]);
}});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container', function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
if (this.lastParentSize == null  || !parent.getSize$().equals$O(this.lastParentSize) ) {
for (var wrapper, $wrapper = this.ccMap.keySet$().iterator$(); $wrapper.hasNext$()&&((wrapper=($wrapper.next$())),1);) {
if (wrapper.getContentBias$() != -1) {
this.layoutContainer$java_awt_Container(parent);
break;
}}
}this.lastParentSize=parent.getSize$();
return p$1.getSizeImpl$java_awt_Container$I.apply(this, [parent, 1]);
}});

Clazz.newMeth(C$, 'maximumLayoutSize$java_awt_Container', function (parent) {
return Clazz.new_($I$(19,1).c$$I$I,[2147483647, 2147483647]);
});

Clazz.newMeth(C$, 'getSizeImpl$java_awt_Container$I', function (parent, sizeType) {
p$1.checkCache$java_awt_Container.apply(this, [parent]);
var i=parent.getInsets$();
var w=$I$(10,"getSizeSafe$IA$I",[this.grid != null  ? this.grid.getWidth$() : null, sizeType]) + i.left + i.right ;
var h=$I$(10,"getSizeSafe$IA$I",[this.grid != null  ? this.grid.getHeight$() : null, sizeType]) + i.top + i.bottom ;
return Clazz.new_($I$(19,1).c$$I$I,[w, h]);
}, p$1);

Clazz.newMeth(C$, 'getLayoutAlignmentX$java_awt_Container', function (parent) {
return this.lc != null  && this.lc.getAlignX$() != null   ? this.lc.getAlignX$().getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(1, p$1.checkParent$java_awt_Container.apply(this, [parent]), null) : 0;
});

Clazz.newMeth(C$, 'getLayoutAlignmentY$java_awt_Container', function (parent) {
return this.lc != null  && this.lc.getAlignY$() != null   ? this.lc.getAlignY$().getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(1, p$1.checkParent$java_awt_Container.apply(this, [parent]), null) : 0;
});

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component', function (s, comp) {
this.addLayoutComponent$java_awt_Component$O(comp, s);
});

Clazz.newMeth(C$, 'addLayoutComponent$java_awt_Component$O', function (comp, constraints) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(comp.getParent$().getTreeLock$());
{
p$1.setComponentConstraintsImpl$java_awt_Component$O$Z.apply(this, [comp, constraints, true]);
}});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component', function (comp) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(comp.getParent$().getTreeLock$());
{
this.scrConstrMap.remove$O(comp);
this.ccMap.remove$O(Clazz.new_($I$(5,1).c$$java_awt_Component,[comp]));
this.grid=null;
}});

Clazz.newMeth(C$, 'invalidateLayout$java_awt_Container', function (target) {
this.dirty=true;
});

Clazz.newMeth(C$, 'readResolve', function () {
return $I$(10).getSerializedObject$O(this);
}, p$1);

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$I$(10,"setSerializedObject$O$O",[this, $I$(10).readAsXML$java_io_ObjectInput($in)]);
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
if (this.getClass$() === Clazz.getClass(C$) ) $I$(10).writeAsXML$java_io_ObjectOutput$O(out, this);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.MigLayout, "MyDebugRepaintListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.this$0.grid != null ) {
var comp=this.this$0.grid.getContainer$().getComponent$();
if (comp.isShowing$()) {
this.this$0.grid.paintDebug$();
return;
}}this.this$0.debugTimer.stop$();
this.this$0.debugTimer=null;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:26 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
