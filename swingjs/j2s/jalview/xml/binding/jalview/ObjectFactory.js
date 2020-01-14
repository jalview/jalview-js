(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'javax.xml.namespace.QName','jalview.xml.binding.jalview.AlcodonFrame','jalview.xml.binding.jalview.MapListType','jalview.xml.binding.jalview.Sequence','jalview.xml.binding.jalview.Annotation','jalview.xml.binding.jalview.SequenceSet','jalview.xml.binding.jalview.FeatureMatcherSet','jalview.xml.binding.jalview.JalviewUserColours','jalview.xml.binding.jalview.Pdbentry','jalview.xml.binding.jalview.Feature','jalview.xml.binding.jalview.JalviewModel',['jalview.xml.binding.jalview.JalviewModel','.FeatureSettings'],['jalview.xml.binding.jalview.JalviewModel','.PcaViewer'],['jalview.xml.binding.jalview.JalviewModel','.Viewport'],['jalview.xml.binding.jalview.JalviewModel','.JSeq'],['jalview.xml.binding.jalview.JalviewModel','.JSeq','.RnaViewer'],['jalview.xml.binding.jalview.JalviewModel','.JSeq','.Pdbids'],'jalview.xml.binding.jalview.DoubleMatrix','jalview.xml.binding.jalview.AnnotationColourScheme','jalview.xml.binding.jalview.PcaDataType','jalview.xml.binding.jalview.DoubleVector',['jalview.xml.binding.jalview.AlcodonFrame','.Alcodon'],['jalview.xml.binding.jalview.AlcodonFrame','.AlcodMap'],'jalview.xml.binding.jalview.AnnotationElement','jalview.xml.binding.jalview.Mapping',['jalview.xml.binding.jalview.MapListType','.MapListFrom'],['jalview.xml.binding.jalview.MapListType','.MapListTo'],'jalview.xml.binding.jalview.SequenceType',['jalview.xml.binding.jalview.Sequence','.DBRef'],['jalview.xml.binding.jalview.Annotation','.ThresholdLine'],['jalview.xml.binding.jalview.Annotation','.Property'],['jalview.xml.binding.jalview.SequenceSet','.SequenceSetProperties'],'jalview.xml.binding.jalview.VAMSAS','jalview.xml.binding.jalview.FeatureMatcher','jalview.xml.binding.jalview.WebServiceParameterSet',['jalview.xml.binding.jalview.FeatureMatcherSet','.CompoundMatcher'],['jalview.xml.binding.jalview.JalviewUserColours','.Colour'],['jalview.xml.binding.jalview.JalviewUserColours','.Filter'],['jalview.xml.binding.jalview.Pdbentry','.Property'],['jalview.xml.binding.jalview.Feature','.OtherData'],['jalview.xml.binding.jalview.JalviewModel','.JGroup'],['jalview.xml.binding.jalview.JalviewModel','.UserColours'],['jalview.xml.binding.jalview.JalviewModel','.Tree'],['jalview.xml.binding.jalview.JalviewModel','.FeatureSettings','.Setting'],['jalview.xml.binding.jalview.JalviewModel','.FeatureSettings','.Group'],['jalview.xml.binding.jalview.JalviewModel','.PcaViewer','.SequencePoint'],['jalview.xml.binding.jalview.JalviewModel','.PcaViewer','.Axis'],['jalview.xml.binding.jalview.JalviewModel','.PcaViewer','.SeqPointMin'],['jalview.xml.binding.jalview.JalviewModel','.PcaViewer','.SeqPointMax'],['jalview.xml.binding.jalview.JalviewModel','.Viewport','.HiddenColumns'],['jalview.xml.binding.jalview.JalviewModel','.Viewport','.CalcIdParam'],['jalview.xml.binding.jalview.JalviewModel','.JSeq','.RnaViewer','.SecondaryStructure'],['jalview.xml.binding.jalview.JalviewModel','.JSeq','.Pdbids','.StructureState'],'javax.xml.bind.JAXBElement']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ObjectFactory");
C$._WebServiceParameterSet_QNAME=null;
C$._JalviewModel_QNAME=null;
C$._JalviewUserColours_QNAME=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$._WebServiceParameterSet_QNAME=Clazz.new_($I$(1).c$$S$S,["www.jalview.org/xml/wsparamset", "WebServiceParameterSet"]);
C$._JalviewModel_QNAME=Clazz.new_($I$(1).c$$S$S,["www.jalview.org", "JalviewModel"]);
C$._JalviewUserColours_QNAME=Clazz.new_($I$(1).c$$S$S,["www.jalview.org/colours", "JalviewUserColours"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createAlcodonFrame$', function () {
return Clazz.new_($I$(2));
});

Clazz.newMeth(C$, 'createMapListType$', function () {
return Clazz.new_($I$(3));
});

Clazz.newMeth(C$, 'createSequence$', function () {
return Clazz.new_($I$(4));
});

Clazz.newMeth(C$, 'createAnnotation$', function () {
return Clazz.new_($I$(5));
});

Clazz.newMeth(C$, 'createSequenceSet$', function () {
return Clazz.new_($I$(6));
});

Clazz.newMeth(C$, 'createFeatureMatcherSet$', function () {
return Clazz.new_($I$(7));
});

Clazz.newMeth(C$, 'createJalviewUserColours$', function () {
return Clazz.new_($I$(8));
});

Clazz.newMeth(C$, 'createPdbentry$', function () {
return Clazz.new_($I$(9));
});

Clazz.newMeth(C$, 'createFeature$', function () {
return Clazz.new_($I$(10));
});

Clazz.newMeth(C$, 'createJalviewModel$', function () {
return Clazz.new_($I$(11));
});

Clazz.newMeth(C$, 'createJalviewModelFeatureSettings$', function () {
return Clazz.new_($I$(12));
});

Clazz.newMeth(C$, 'createJalviewModelPcaViewer$', function () {
return Clazz.new_($I$(13));
});

Clazz.newMeth(C$, 'createJalviewModelViewport$', function () {
return Clazz.new_($I$(14));
});

Clazz.newMeth(C$, 'createJalviewModelJSeq$', function () {
return Clazz.new_($I$(15));
});

Clazz.newMeth(C$, 'createJalviewModelJSeqRnaViewer$', function () {
return Clazz.new_($I$(16));
});

Clazz.newMeth(C$, 'createJalviewModelJSeqPdbids$', function () {
return Clazz.new_($I$(17));
});

Clazz.newMeth(C$, 'createDoubleMatrix$', function () {
return Clazz.new_($I$(18));
});

Clazz.newMeth(C$, 'createAnnotationColourScheme$', function () {
return Clazz.new_($I$(19));
});

Clazz.newMeth(C$, 'createPcaDataType$', function () {
return Clazz.new_($I$(20));
});

Clazz.newMeth(C$, 'createDoubleVector$', function () {
return Clazz.new_($I$(21));
});

Clazz.newMeth(C$, 'createAlcodonFrameAlcodon$', function () {
return Clazz.new_($I$(22));
});

Clazz.newMeth(C$, 'createAlcodonFrameAlcodMap$', function () {
return Clazz.new_($I$(23));
});

Clazz.newMeth(C$, 'createAnnotationElement$', function () {
return Clazz.new_($I$(24));
});

Clazz.newMeth(C$, 'createMapping$', function () {
return Clazz.new_($I$(25));
});

Clazz.newMeth(C$, 'createMapListTypeMapListFrom$', function () {
return Clazz.new_($I$(26));
});

Clazz.newMeth(C$, 'createMapListTypeMapListTo$', function () {
return Clazz.new_($I$(27));
});

Clazz.newMeth(C$, 'createSequenceType$', function () {
return Clazz.new_($I$(28));
});

Clazz.newMeth(C$, 'createSequenceDBRef$', function () {
return Clazz.new_($I$(29));
});

Clazz.newMeth(C$, 'createAnnotationThresholdLine$', function () {
return Clazz.new_($I$(30));
});

Clazz.newMeth(C$, 'createAnnotationProperty$', function () {
return Clazz.new_($I$(31));
});

Clazz.newMeth(C$, 'createSequenceSetSequenceSetProperties$', function () {
return Clazz.new_($I$(32));
});

Clazz.newMeth(C$, 'createVAMSAS$', function () {
return Clazz.new_($I$(33));
});

Clazz.newMeth(C$, 'createFeatureMatcher$', function () {
return Clazz.new_($I$(34));
});

Clazz.newMeth(C$, 'createWebServiceParameterSet$', function () {
return Clazz.new_($I$(35));
});

Clazz.newMeth(C$, 'createFeatureMatcherSetCompoundMatcher$', function () {
return Clazz.new_($I$(36));
});

Clazz.newMeth(C$, 'createJalviewUserColoursColour$', function () {
return Clazz.new_($I$(37));
});

Clazz.newMeth(C$, 'createJalviewUserColoursFilter$', function () {
return Clazz.new_($I$(38));
});

Clazz.newMeth(C$, 'createPdbentryProperty$', function () {
return Clazz.new_($I$(39));
});

Clazz.newMeth(C$, 'createFeatureOtherData$', function () {
return Clazz.new_($I$(40));
});

Clazz.newMeth(C$, 'createJalviewModelJGroup$', function () {
return Clazz.new_($I$(41));
});

Clazz.newMeth(C$, 'createJalviewModelUserColours$', function () {
return Clazz.new_($I$(42));
});

Clazz.newMeth(C$, 'createJalviewModelTree$', function () {
return Clazz.new_($I$(43));
});

Clazz.newMeth(C$, 'createJalviewModelFeatureSettingsSetting$', function () {
return Clazz.new_($I$(44));
});

Clazz.newMeth(C$, 'createJalviewModelFeatureSettingsGroup$', function () {
return Clazz.new_($I$(45));
});

Clazz.newMeth(C$, 'createJalviewModelPcaViewerSequencePoint$', function () {
return Clazz.new_($I$(46));
});

Clazz.newMeth(C$, 'createJalviewModelPcaViewerAxis$', function () {
return Clazz.new_($I$(47));
});

Clazz.newMeth(C$, 'createJalviewModelPcaViewerSeqPointMin$', function () {
return Clazz.new_($I$(48));
});

Clazz.newMeth(C$, 'createJalviewModelPcaViewerSeqPointMax$', function () {
return Clazz.new_($I$(49));
});

Clazz.newMeth(C$, 'createJalviewModelViewportHiddenColumns$', function () {
return Clazz.new_($I$(50));
});

Clazz.newMeth(C$, 'createJalviewModelViewportCalcIdParam$', function () {
return Clazz.new_($I$(51));
});

Clazz.newMeth(C$, 'createJalviewModelJSeqRnaViewerSecondaryStructure$', function () {
return Clazz.new_($I$(52));
});

Clazz.newMeth(C$, 'createJalviewModelJSeqPdbidsStructureState$', function () {
return Clazz.new_($I$(53));
});

Clazz.newMeth(C$, 'createWebServiceParameterSet$jalview_xml_binding_jalview_WebServiceParameterSet', function (value) {
return Clazz.new_($I$(54).c$$javax_xml_namespace_QName$Class$Class$TT,[C$._WebServiceParameterSet_QNAME, Clazz.getClass($I$(35)), null, value]);
});

Clazz.newMeth(C$, 'createJalviewModel$jalview_xml_binding_jalview_JalviewModel', function (value) {
return Clazz.new_($I$(54).c$$javax_xml_namespace_QName$Class$Class$TT,[C$._JalviewModel_QNAME, Clazz.getClass($I$(11)), null, value]);
});

Clazz.newMeth(C$, 'createJalviewUserColours$jalview_xml_binding_jalview_JalviewUserColours', function (value) {
return Clazz.new_($I$(54).c$$javax_xml_namespace_QName$Class$Class$TT,[C$._JalviewUserColours_QNAME, Clazz.getClass($I$(8)), null, value]);
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.ObjectFactory'],['@XmlRegistry']],
  [['M:createWebServiceParameterSet','javax.xml.bind.JAXBElement<jalview.xml.binding.jalview.WebServiceParameterSet>'],['@XmlElementDecl(namespace="www.jalview.org/xml/wsparamset" name="WebServiceParameterSet" )']],
  [['M:createJalviewModel','javax.xml.bind.JAXBElement<jalview.xml.binding.jalview.JalviewModel>'],['@XmlElementDecl(namespace="www.jalview.org" name="JalviewModel" )']],
  [['M:createJalviewUserColours','javax.xml.bind.JAXBElement<jalview.xml.binding.jalview.JalviewUserColours>'],['@XmlElementDecl(namespace="www.jalview.org/colours" name="JalviewUserColours" )']]];
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
