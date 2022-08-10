(function(){var P$=Clazz.newPackage("jalview.jbgui"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FilterOption");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['addSeparatorAfter'],'S',['name','value','view'],'O',['querySource','jalview.gui.structurechooser.StructureChooserQuerySource']]]

Clazz.newMeth(C$, 'c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource',  function (name, value, view, addSeparatorAfter, structureChooserQuerySource) {
;C$.$init$.apply(this);
this.name=name;
this.value=value;
this.view=view;
this.querySource=structureChooserQuerySource;
this.addSeparatorAfter=addSeparatorAfter;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getView$',  function () {
return this.view;
});

Clazz.newMeth(C$, 'setView$S',  function (view) {
this.view=view;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

Clazz.newMeth(C$, 'isAddSeparatorAfter$',  function () {
return this.addSeparatorAfter;
});

Clazz.newMeth(C$, 'setAddSeparatorAfter$Z',  function (addSeparatorAfter) {
this.addSeparatorAfter=addSeparatorAfter;
});

Clazz.newMeth(C$, 'getQuerySource$',  function () {
return this.querySource;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (Clazz.instanceOf(obj, "jalview.jbgui.FilterOption")) {
var o=obj;
return o.name.equals$O(this.name) && o.querySource === this.querySource   && o.value.equals$O(this.value)  && o.view == this.view ;
} else {
return C$.superclazz.prototype.equals$O.apply(this, [obj]);
}});

Clazz.newMeth(C$, 'hashCode$',  function () {
return ("" + this.name + ":" + this.value ).hashCode$() + (this.view != null  ? this.view.hashCode$() : 0) + (this.querySource != null  ? this.querySource.hashCode$() : 0) ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
