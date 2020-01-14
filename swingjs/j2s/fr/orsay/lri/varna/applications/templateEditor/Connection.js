(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.templateEditor"),I$=[];
var C$=Clazz.newClass(P$, "Connection");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._h1=null;
this._edge1=null;
this._h2=null;
this._edge2=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (h1, edge1, h2, edge2) {
C$.$init$.apply(this);
this._h1=h1;
this._h2=h2;
this._edge1=edge1;
this._edge2=edge2;
}, 1);

Clazz.newMeth(C$, 'equals$fr_orsay_lri_varna_applications_templateEditor_Connection', function (c) {
return ((this._h1 === c._h1 ) && (this._h2 === c._h2 ) && (this._edge1 === c._edge1 ) && (this._edge2 === c._edge2 )  );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
