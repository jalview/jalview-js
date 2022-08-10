(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControleurSelectionHighlight", null, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_selection','java.util.Collection','_target','fr.orsay.lri.varna.VARNAPanel','_parent','javax.swing.JMenuItem']]]

Clazz.newMeth(C$, 'c$$I$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem', function (elem, v, parent) {
;C$.$init$.apply(this);
var sel=Clazz.new_($I$(1,1));
sel.add$O(new Integer(elem));
this._selection=v.getRNA$().getBasesAt$java_util_Collection(sel);
this._target=v;
this._parent=parent;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Vector$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem', function (sel, v, parent) {
C$.c$$java_util_ArrayList$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem.apply(this, [Clazz.new_($I$(1,1).c$$java_util_Collection,[sel]), v, parent]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ArrayList$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem', function (sel, v, parent) {
C$.c$$java_util_Collection$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem.apply(this, [v.getRNA$().getBasesAt$java_util_Collection(sel), v, parent]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem', function (sel, v, parent) {
;C$.$init$.apply(this);
this._selection=sel;
this._target=v;
this._parent=parent;
}, 1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
if (this._parent.isSelected$()) {
this._target.saveSelection$();
this._target.setSelection$java_util_Collection(this._selection);
} else {
this._target.restoreSelection$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
