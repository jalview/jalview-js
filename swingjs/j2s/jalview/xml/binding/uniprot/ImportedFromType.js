(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
var C$=Clazz.newClass(P$, "ImportedFromType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dbReference=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getDbReference$', function () {
return this.dbReference;
});

Clazz.newMeth(C$, 'setDbReference$jalview_xml_binding_uniprot_DbReferenceType', function (value) {
this.dbReference=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.ImportedFromType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="importedFromType" propOrder={"dbReference"  } )']],
  [['dbReference','jalview.xml.binding.uniprot.DbReferenceType'],['@XmlElement(required="true" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
