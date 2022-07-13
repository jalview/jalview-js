(function(){var P$=Clazz.newPackage("jalview.json.binding.biojson.v1"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AnnotationDisplaySettingPojo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['scaleColLabel','showAllColLabels','centreColLabels','belowAlignment','visible','hasIcon']]]

Clazz.newMeth(C$, 'isScaleColLabel$',  function () {
return this.scaleColLabel;
});

Clazz.newMeth(C$, 'setScaleColLabel$Z',  function (scaleColLabel) {
this.scaleColLabel=scaleColLabel;
});

Clazz.newMeth(C$, 'isShowAllColLabels$',  function () {
return this.showAllColLabels;
});

Clazz.newMeth(C$, 'setShowAllColLabels$Z',  function (showAllColLabels) {
this.showAllColLabels=showAllColLabels;
});

Clazz.newMeth(C$, 'isCentreColLabels$',  function () {
return this.centreColLabels;
});

Clazz.newMeth(C$, 'setCentreColLabels$Z',  function (centreColLabels) {
this.centreColLabels=centreColLabels;
});

Clazz.newMeth(C$, 'isBelowAlignment$',  function () {
return this.belowAlignment;
});

Clazz.newMeth(C$, 'setBelowAlignment$Z',  function (belowAlignment) {
this.belowAlignment=belowAlignment;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (visible) {
this.visible=visible;
});

Clazz.newMeth(C$, 'isHasIcon$',  function () {
return this.hasIcon;
});

Clazz.newMeth(C$, 'setHasIcon$Z',  function (hasIcon) {
this.hasIcon=hasIcon;
});
C$.$getAnn$ = function(){ return [
[['scaleColLabel','boolean',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Indicates if column label is scaled to fit within the <br>alignment column" ']],
  [['showAllColLabels','.',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Indicates if every column label is displayed." ']],
  [['centreColLabels','.',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Indicates if column labels is centred relative to the <br>alignment column" ']],
  [['belowAlignment','.',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Indicates if the Annotation is shown below the alignment" ']],
  [['visible','.',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Indicates if the annotation row is visible" ']],
  [['hasIcon','.',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Indicates if annotation has a graphical symbol track" ']],
  [['M:isScaleColLabel','boolean'],['@XmlElement']],
  [['M:isShowAllColLabels','boolean'],['@XmlElement']],
  [['M:isCentreColLabels','boolean'],['@XmlElement']],
  [['M:isBelowAlignment','boolean'],['@XmlElement']],
  [['M:isVisible','boolean'],['@XmlElement']],
  [['M:isHasIcon','boolean'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
