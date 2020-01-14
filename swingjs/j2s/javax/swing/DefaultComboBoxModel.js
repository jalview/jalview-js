(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.util.Vector']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DefaultComboBoxModel", null, 'javax.swing.AbstractListModel', 'javax.swing.MutableComboBoxModel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.objects=null;
this.selectedObject=null;
this._isQuiet=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.objects=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$TEA', function (items) {
Clazz.super_(C$, this,1);
this.objects=Clazz.new_($I$(1));
this.objects.ensureCapacity$I(items.length);
var i;
var c;
for (i=0, c=items.length; i < c; i++) this.objects.addElement$TE(items[i]);

if (this.getSize$() > 0) {
this.selectedObject=this.getElementAt$I(0);
}}, 1);

Clazz.newMeth(C$, 'c$$java_util_Vector', function (v) {
Clazz.super_(C$, this,1);
this.objects=v;
if (this.getSize$() > 0) {
this.selectedObject=this.getElementAt$I(0);
}}, 1);

Clazz.newMeth(C$, 'setSelectedItem$O', function (anObject) {
if ((this.selectedObject != null  && !this.selectedObject.equals$O(anObject) ) || this.selectedObject == null  && anObject != null   ) {
this.selectedObject=anObject;
if (!this._isQuiet) this.fireContentsChanged$O$I$I(this, -1, -1);
}});

Clazz.newMeth(C$, 'getSelectedItem$', function () {
return this.selectedObject;
});

Clazz.newMeth(C$, 'getSize$', function () {
return this.objects.size$();
});

Clazz.newMeth(C$, 'getElementAt$I', function (index) {
if (index >= 0 && index < this.objects.size$() ) return this.objects.elementAt$I(index);
 else return null;
});

Clazz.newMeth(C$, 'getIndexOf$O', function (anObject) {
return this.objects.indexOf$O(anObject);
});

Clazz.newMeth(C$, ['addElement$TE'], function (anObject) {
this.objects.addElement$TE(anObject);
this.fireIntervalAdded$O$I$I(this, this.objects.size$() - 1, this.objects.size$() - 1);
if (this.objects.size$() == 1 && this.selectedObject == null   && anObject != null  ) {
this._setSelectedItemQuiet$O(anObject);
}});

Clazz.newMeth(C$, ['insertElementAt$TE$I'], function (anObject, index) {
this.objects.insertElementAt$TE$I(anObject, index);
this.fireIntervalAdded$O$I$I(this, index, index);
});

Clazz.newMeth(C$, 'removeElementAt$I', function (index) {
if (this.getElementAt$I(index) === this.selectedObject ) this._setSelectedItemQuiet$O(index > 0 ? this.getElementAt$I(index - 1) : this.getSize$() == 1 ? null : this.getElementAt$I(index + 1));
this.objects.removeElementAt$I(index);
this.fireIntervalRemoved$O$I$I(this, index, index);
});

Clazz.newMeth(C$, 'removeElement$O', function (anObject) {
var index=this.objects.indexOf$O(anObject);
if (index != -1) {
this.removeElementAt$I(index);
}});

Clazz.newMeth(C$, 'removeAllElements$', function () {
if (this.objects.size$() > 0) {
var firstIndex=0;
var lastIndex=this.objects.size$() - 1;
this.objects.removeAllElements$();
this.selectedObject=null;
this.fireIntervalRemoved$O$I$I(this, firstIndex, lastIndex);
} else {
this.selectedObject=null;
}});

Clazz.newMeth(C$, '_setSelectedItemQuiet$O', function (o) {
this._isQuiet=(!!this.isAWT$ ||false);
this.setSelectedItem$O(o);
this._isQuiet=false;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
