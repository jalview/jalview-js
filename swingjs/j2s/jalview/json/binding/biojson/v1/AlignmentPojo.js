(function(){var P$=Clazz.newPackage("jalview.json.binding.biojson.v1"),I$=[[0,'java.util.ArrayList','java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignmentPojo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.svid="1.0";
this.seqs=Clazz.new_($I$(1,1));
this.alignAnnotation=Clazz.new_($I$(1,1));
this.seqGroups=Clazz.new_($I$(1,1));
this.seqFeatures=Clazz.new_($I$(1,1));
this.appSettings=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['S',['svid','colourScheme'],'O',['seqs','java.util.List','+alignAnnotation','+seqGroups','+seqFeatures','appSettings','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getSeqs$',  function () {
return this.seqs;
});

Clazz.newMeth(C$, 'setSeqs$java_util_ArrayList',  function (seqs) {
this.seqs=seqs;
});

Clazz.newMeth(C$, 'getAppSettings$',  function () {
return this.appSettings;
});

Clazz.newMeth(C$, 'setAppSettings$java_util_Map',  function (appSettings) {
this.appSettings=appSettings;
});

Clazz.newMeth(C$, 'getAlignAnnotation$',  function () {
return this.alignAnnotation;
});

Clazz.newMeth(C$, 'setAlignAnnotation$java_util_List',  function (alignAnnotation) {
this.alignAnnotation=alignAnnotation;
});

Clazz.newMeth(C$, 'getSeqGroups$',  function () {
return this.seqGroups;
});

Clazz.newMeth(C$, 'setSeqGroups$java_util_List',  function (seqGroups) {
this.seqGroups=seqGroups;
});

Clazz.newMeth(C$, 'getSeqFeatures$',  function () {
return this.seqFeatures;
});

Clazz.newMeth(C$, 'setSeqFeatures$java_util_List',  function (seqFeatures) {
this.seqFeatures=seqFeatures;
});

Clazz.newMeth(C$, 'getSvid$',  function () {
return this.svid;
});

Clazz.newMeth(C$, 'setGlobalColorScheme$S',  function (globalColorScheme) {
this.appSettings.put$O$O("globalColorScheme", globalColorScheme);
});

Clazz.newMeth(C$, 'getColourScheme$',  function () {
return this.colourScheme;
});

Clazz.newMeth(C$, 'setColourScheme$S',  function (colourScheme) {
this.colourScheme=colourScheme;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.json.binding.biojson.v1.AlignmentPojo',null,['com.github.reinert.jjschema.Attributes']],['title="BioJSON" description="A specification for the representation and exchange of bioinformatics data" ']],
  [['svid','String',null,['com.github.reinert.jjschema.Attributes']],['required="true" description="Serial version identifier for <b>BioJSON</b> schema" ']],
  [['seqs','java.util.List',null,['com.github.reinert.jjschema.Attributes']],['required="true" minItems="1" description="An array of Sequences which makes up the Alignment" ']],
  [['alignAnnotation','.',null,['com.github.reinert.jjschema.Attributes']],['required="false" minItems="0" exclusiveMaximum="true" description="Alignment annotations stores symbols and graphs usually rendered </br>below the alignment and often reflect properties of the alignment </br>as a whole." ']],
  [['seqGroups','.',null,['com.github.reinert.jjschema.Attributes']],['required="false" minItems="0" description="A sequence group is a rectangular region of an alignment <br>bounded by startRes and endRes positions in the alignment <br>coordinate system for a set of sequences" ']],
  [['seqFeatures','.',null,['com.github.reinert.jjschema.Attributes']],['required="false" minItems="0" description="Sequence features are properties of the individual sequences, <br>they do not change with the alignment, but are shown mapped<br> on to specific residues within the alignment" ']],
  [['colourScheme','String',null,['com.github.reinert.jjschema.Attributes']],['required="false" enums={"None"  "User Defined"  "Clustal"  "Zappo"  "Taylor"  "Nucleotide"  "Pyrimidine"  "Purine"  "Turn"  "Helix"  "Strand"  "Buried"  "Hydro"  "T-Coffee Scores"  "RNA Interaction type"  "Blosum62"  "RNA Helices"  "% Identity"  } description="The <a href="#colourScheme">Colour Scheme</a> applied to the alignment" ']],
  [['appSettings','java.util.Map',null,['com.github.reinert.jjschema.Attributes']],['required="true" maxItems="0" description="AppSettings stores key=value pairs of custom application specific <br>settings (i.e visualisation settings, etc) for different applications<br>that consume or generate BioJSON" ']],
  [['M:getSeqs','java.util.List<jalview.json.binding.biojson.v1.SequencePojo>'],['@XmlElement']],
  [['M:getAppSettings','java.util.Map<java.lang.String,java.lang.Object>'],['@XmlElement']],
  [['M:getAlignAnnotation','java.util.List<jalview.json.binding.biojson.v1.AlignmentAnnotationPojo>'],['@XmlElement']],
  [['M:getSeqGroups','java.util.List<jalview.json.binding.biojson.v1.SequenceGrpPojo>'],['@XmlElement']],
  [['M:getSeqFeatures','java.util.List<jalview.json.binding.biojson.v1.SequenceFeaturesPojo>'],['@XmlElement']],
  [['M:getColourScheme','String'],['@XmlElement']]]}
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
