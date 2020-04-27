(function(){var P$=Clazz.newPackage("jalview.datamodel"),p$1={},I$=[[0,'java.util.HashMap','jalview.analysis.Rna','java.util.Arrays','jalview.datamodel.SFSortByEnd','StringBuffer','jalview.schemes.ResidueProperties',['jalview.datamodel.AlignmentAnnotation','.AnnotCharSequence'],'jalview.datamodel.GraphLine','jalview.datamodel.Annotation','StringBuilder','Error','java.util.Collections','java.util.ArrayList']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignmentAnnotation", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AnnotCharSequence',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.autoCalculated=false;
this.bps=null;
this._rnasecstr=null;
this.invalidrnastruc=-2;
this.score=NaN;
this.hasScore=false;
this.editable=false;
this.visible=true;
this.graphGroup=-1;
this.height=0;
this.graph=0;
this.graphHeight=40;
this.padGaps=false;
this.belowAlignment=true;
this.groupRef=null;
this.showAllColLabels=false;
this.scaleColLabel=false;
this.centreColLabels=false;
this._lastrnaannot=-1;
this.calcId="";
this.properties=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['autoCalculated','hasScore','editable','hasIcons','hasText','visible','padGaps','belowAlignment','showAllColLabels','scaleColLabel','centreColLabels','isrna'],'D',['score'],'F',['graphMin','graphMax'],'I',['graphGroup','height','graph','graphHeight'],'J',['invalidrnastruc','_lastrnaannot'],'S',['annotationId','label','description','calcId'],'O',['sequenceRef','jalview.datamodel.SequenceI','annotations','jalview.datamodel.Annotation[]','bps','java.util.List','_rnasecstr','jalview.datamodel.SequenceFeature[]','sequenceMapping','java.util.Map','threshold','jalview.datamodel.GraphLine','groupRef','jalview.datamodel.SequenceGroup','properties','java.util.Map','_linecolour','java.awt.Color']]
,['J',['counter']]]

Clazz.newMeth(C$, '_updateRnaSecStr$CharSequence', function (rnaAnnotation) {
try {
this._rnasecstr=$I$(2).getHelixMap$CharSequence(rnaAnnotation);
this.invalidrnastruc=-1;
} catch (px) {
if (Clazz.exceptionOf(px,"jalview.analysis.WUSSParseException")){
this.invalidrnastruc=px.getProblemPos$();
} else {
throw px;
}
}
if (this.invalidrnastruc > -1) {
return;
}if (this._rnasecstr != null  && this._rnasecstr.length > 0 ) {
this.isrna=true;
this.showAllColLabels=true;
this.scaleColLabel=true;
p$1._markRnaHelices.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, '_markRnaHelices', function () {
var mxval=0;
for (var x=0; x < this._rnasecstr.length; x++) {
var val=0;
try {
val=(Integer.valueOf$S(this._rnasecstr[x].getFeatureGroup$())).valueOf();
if (mxval < val) {
mxval=val;
}} catch (q) {
if (Clazz.exceptionOf(q,"NumberFormatException")){
} else {
throw q;
}
}
;this.annotations[this._rnasecstr[x].getBegin$()].value=val;
this.annotations[this._rnasecstr[x].getEnd$()].value=val;
}
this.setScore$D(mxval);
}, p$1);

Clazz.newMeth(C$, 'getRnaSecondaryStructure$', function () {
return this._rnasecstr;
});

Clazz.newMeth(C$, 'rnaSecondaryStructureEquivalent$jalview_datamodel_AlignmentAnnotation', function (that) {
return this.rnaSecondaryStructureEquivalent$jalview_datamodel_AlignmentAnnotation$Z(that, true);
});

Clazz.newMeth(C$, 'rnaSecondaryStructureEquivalent$jalview_datamodel_AlignmentAnnotation$Z', function (that, compareType) {
var thisSfArray=this.getRnaSecondaryStructure$();
var thatSfArray=that.getRnaSecondaryStructure$();
if (thisSfArray == null  || thatSfArray == null  ) {
return thisSfArray == null  && thatSfArray == null  ;
}if (thisSfArray.length != thatSfArray.length) {
return false;
}$I$(3,"sort$OA$java_util_Comparator",[thisSfArray, Clazz.new_($I$(4,1))]);
$I$(3,"sort$OA$java_util_Comparator",[thatSfArray, Clazz.new_($I$(4,1))]);
for (var i=0; i < thisSfArray.length; i++) {
var thisSf=thisSfArray[i];
var thatSf=thatSfArray[i];
if (compareType) {
if (thisSf.getType$() == null  || thatSf.getType$() == null  ) {
if (thisSf.getType$() == null  && thatSf.getType$() == null  ) {
continue;
} else {
return false;
}}if (!thisSf.getType$().equals$O(thatSf.getType$())) {
return false;
}}if (!(thisSf.getBegin$() == thatSf.getBegin$() && thisSf.getEnd$() == thatSf.getEnd$() )) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'getGraphValueFromString$S', function (string) {
if (string.equalsIgnoreCase$S("BAR_GRAPH")) {
return 1;
} else if (string.equalsIgnoreCase$S("LINE_GRAPH")) {
return 2;
} else {
return 0;
}}, 1);

Clazz.newMeth(C$, 'c$$S$S$jalview_datamodel_AnnotationA', function (label, description, annotations) {
;C$.$init$.apply(this);
this.setAnnotationId$();
this.editable=true;
this.label=label;
this.description=description;
this.annotations=annotations;
this.validateRangeAndDisplay$();
}, 1);

Clazz.newMeth(C$, 'areLabelsSecondaryStructure$', function () {
var nonSSLabel=false;
this.isrna=false;
var rnastring=Clazz.new_($I$(5,1));
var firstChar=String.fromCharCode(0);
for (var i=0; i < this.annotations.length; i++) {
if (this.annotations[i] == null ) {
continue;
}if (this.annotations[i].secondaryStructure == "H" || this.annotations[i].secondaryStructure == "E" ) {
this.hasIcons|=true;
} else {
if (this.annotations[i].secondaryStructure == "(" || this.annotations[i].secondaryStructure == "["  || this.annotations[i].secondaryStructure == "<"  || this.annotations[i].secondaryStructure == "{"  || this.annotations[i].secondaryStructure == "A"  || this.annotations[i].secondaryStructure == "B"  || this.annotations[i].secondaryStructure == "C"  || this.annotations[i].secondaryStructure == "D"  || this.annotations[i].secondaryStructure == "F"  || this.annotations[i].secondaryStructure == "G"  || this.annotations[i].secondaryStructure == "I"  || this.annotations[i].secondaryStructure == "J"  || this.annotations[i].secondaryStructure == "K"  || this.annotations[i].secondaryStructure == "L"  || this.annotations[i].secondaryStructure == "M"  || this.annotations[i].secondaryStructure == "N"  || this.annotations[i].secondaryStructure == "O"  || this.annotations[i].secondaryStructure == "P"  || this.annotations[i].secondaryStructure == "Q"  || this.annotations[i].secondaryStructure == "R"  || this.annotations[i].secondaryStructure == "S"  || this.annotations[i].secondaryStructure == "T"  || this.annotations[i].secondaryStructure == "U"  || this.annotations[i].secondaryStructure == "V"  || this.annotations[i].secondaryStructure == "W"  || this.annotations[i].secondaryStructure == "X"  || this.annotations[i].secondaryStructure == "Y"  || this.annotations[i].secondaryStructure == "Z" ) {
this.hasIcons|=true;
this.isrna|=true;
}}if (this.annotations[i].displayCharacter == null  || this.annotations[i].displayCharacter.length$() == 0 ) {
rnastring.append$C(".");
continue;
}if (this.annotations[i].displayCharacter.length$() == 1) {
firstChar=this.annotations[i].displayCharacter.charAt$I(0);
if (this.annotations[i].secondaryStructure != " " && !this.hasIcons  && firstChar != " "  && firstChar != "$"  && firstChar.$c() != 206   && firstChar != "("  && firstChar != "["  && firstChar != "<"  && firstChar != "{"  && firstChar != "A"  && firstChar != "B"  && firstChar != "C"  && firstChar != "D"  && firstChar != "E"  && firstChar != "F"  && firstChar != "G"  && firstChar != "H"  && firstChar != "I"  && firstChar != "J"  && firstChar != "K"  && firstChar != "L"  && firstChar != "M"  && firstChar != "N"  && firstChar != "O"  && firstChar != "P"  && firstChar != "Q"  && firstChar != "R"  && firstChar != "S"  && firstChar != "T"  && firstChar != "U"  && firstChar != "V"  && firstChar != "W"  && firstChar != "X"  && firstChar != "Y"  && firstChar != "Z"  && firstChar != "-"  && firstChar.$c() < $I$(6).aaIndex.length  ) {
if ($I$(6).aaIndex[firstChar.$c()] < 23) {
nonSSLabel=true;
}}} else {
rnastring.append$C(this.annotations[i].displayCharacter.charAt$I(1));
}if (this.annotations[i].displayCharacter.length$() > 0) {
this.hasText=true;
}}
if (nonSSLabel) {
this.hasIcons=false;
for (var j=0; j < this.annotations.length; j++) {
if (this.annotations[j] != null  && this.annotations[j].secondaryStructure != " " ) {
this.annotations[j].displayCharacter=String.valueOf$C(this.annotations[j].secondaryStructure);
this.annotations[j].secondaryStructure=" ";
}}
} else {
if (this.isrna) {
p$1._updateRnaSecStr$CharSequence.apply(this, [Clazz.new_($I$(7,1),[this, null])]);
}}});

Clazz.newMeth(C$, 'getRNAStruc$', function () {
if (this.isrna) {
var rnastruc=Clazz.new_($I$(7,1),[this, null]).toString();
if (this._lastrnaannot != rnastruc.hashCode$()) {
this._lastrnaannot=rnastruc.hashCode$();
p$1._updateRnaSecStr$CharSequence.apply(this, [rnastruc]);
}return rnastruc;
}return null;
});

Clazz.newMeth(C$, 'c$$S$S$jalview_datamodel_AnnotationA$F$F$I', function (label, description, annotations, min, max, graphType) {
;C$.$init$.apply(this);
this.setAnnotationId$();
this.editable=graphType == 0;
this.label=label;
this.description=description;
this.annotations=annotations;
this.graph=graphType;
this.graphMin=min;
this.graphMax=max;
this.validateRangeAndDisplay$();
}, 1);

Clazz.newMeth(C$, 'validateRangeAndDisplay$', function () {
if (this.annotations == null ) {
this.visible=false;
this.invalidrnastruc=-1;
return;
}var graphType=this.graph;
var min=this.graphMin;
var max=this.graphMax;
var drawValues=true;
this._linecolour=null;
if (min == max ) {
min=999999999;
for (var i=0; i < this.annotations.length; i++) {
if (this.annotations[i] == null ) {
continue;
}if (drawValues && this.annotations[i].displayCharacter != null   && this.annotations[i].displayCharacter.length$() > 1 ) {
drawValues=false;
}if (this.annotations[i].value > max ) {
max=this.annotations[i].value;
}if (this.annotations[i].value < min ) {
min=this.annotations[i].value;
}if (this._linecolour == null  && this.annotations[i].colour != null  ) {
this._linecolour=this.annotations[i].colour;
}}
if (min > 0 ) {
min=0;
} else {
if (max < 0 ) {
max=0;
}}}this.graphMin=min;
this.graphMax=max;
this.areLabelsSecondaryStructure$();
if (!drawValues && graphType != 0 ) {
for (var i=0; i < this.annotations.length; i++) {
if (this.annotations[i] != null ) {
this.annotations[i].displayCharacter="";
}}
}});

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentAnnotation', function (annotation) {
;C$.$init$.apply(this);
this.setAnnotationId$();
this.label= String.instantialize(annotation.label);
if (annotation.description != null ) {
this.description= String.instantialize(annotation.description);
}this.graphMin=annotation.graphMin;
this.graphMax=annotation.graphMax;
this.graph=annotation.graph;
this.graphHeight=annotation.graphHeight;
this.graphGroup=annotation.graphGroup;
this.groupRef=annotation.groupRef;
this.editable=annotation.editable;
this.autoCalculated=annotation.autoCalculated;
this.hasIcons=annotation.hasIcons;
this.hasText=annotation.hasText;
this.height=annotation.height;
this.label=annotation.label;
this.padGaps=annotation.padGaps;
this.visible=annotation.visible;
this.centreColLabels=annotation.centreColLabels;
this.scaleColLabel=annotation.scaleColLabel;
this.showAllColLabels=annotation.showAllColLabels;
this.calcId=annotation.calcId;
if (annotation.properties != null ) {
this.properties=Clazz.new_($I$(1,1));
for (var val, $val = annotation.properties.entrySet$().iterator$(); $val.hasNext$()&&((val=($val.next$())),1);) {
this.properties.put$O$O(val.getKey$(), val.getValue$());
}
}if (this.hasScore=annotation.hasScore) {
this.score=annotation.score;
}if (annotation.threshold != null ) {
this.threshold=Clazz.new_($I$(8,1).c$$jalview_datamodel_GraphLine,[annotation.threshold]);
}var ann=annotation.annotations;
if (annotation.annotations != null ) {
this.annotations=Clazz.array($I$(9), [ann.length]);
for (var i=0; i < ann.length; i++) {
if (ann[i] != null ) {
this.annotations[i]=Clazz.new_($I$(9,1).c$$jalview_datamodel_Annotation,[ann[i]]);
if (this._linecolour != null ) {
this._linecolour=this.annotations[i].colour;
}}}
}if (annotation.sequenceRef != null ) {
this.sequenceRef=annotation.sequenceRef;
if (annotation.sequenceMapping != null ) {
var p=null;
this.sequenceMapping=Clazz.new_($I$(1,1));
var pos=annotation.sequenceMapping.keySet$().iterator$();
while (pos.hasNext$()){
p=pos.next$();
var a=annotation.sequenceMapping.get$O(p);
if (a == null ) {
continue;
}if (ann != null ) {
for (var i=0; i < ann.length; i++) {
if (ann[i] === a ) {
this.sequenceMapping.put$O$O(p, this.annotations[i]);
}}
}}
} else {
this.sequenceMapping=null;
}}{
}this.validateRangeAndDisplay$();
}, 1);

Clazz.newMeth(C$, 'restrict$I$I', function (startRes, endRes) {
if (this.annotations == null ) {
return;
}if (startRes < 0) {
startRes=0;
}if (startRes >= this.annotations.length) {
startRes=this.annotations.length - 1;
}if (endRes >= this.annotations.length) {
endRes=this.annotations.length - 1;
}if (this.annotations == null ) {
return;
}var temp=Clazz.array($I$(9), [endRes - startRes + 1]);
if (startRes < this.annotations.length) {
System.arraycopy$O$I$O$I$I(this.annotations, startRes, temp, 0, endRes - startRes + 1);
}if (this.sequenceRef != null ) {
var spos=this.sequenceRef.findPosition$I(startRes);
var epos=this.sequenceRef.findPosition$I(endRes);
if (this.sequenceMapping != null ) {
var newmapping=Clazz.new_($I$(1,1));
var e=this.sequenceMapping.keySet$().iterator$();
while (e.hasNext$()){
var pos=e.next$();
if (pos.intValue$() >= spos && pos.intValue$() <= epos ) {
newmapping.put$O$O(pos, this.sequenceMapping.get$O(pos));
}}
this.sequenceMapping.clear$();
this.sequenceMapping=newmapping;
}}this.annotations=temp;
});

Clazz.newMeth(C$, 'padAnnotation$I', function (length) {
if (this.annotations == null ) {
return true;
}if (this.annotations.length < length) {
var na=Clazz.array($I$(9), [length]);
System.arraycopy$O$I$O$I$I(this.annotations, 0, na, 0, this.annotations.length);
this.annotations=na;
return true;
}return this.annotations.length > length;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.annotations == null ) {
return "";
}var buffer=Clazz.new_($I$(10,1).c$$I,[256]);
for (var i=0; i < this.annotations.length; i++) {
if (this.annotations[i] != null ) {
if (this.graph != 0) {
buffer.append$F(this.annotations[i].value);
} else if (this.hasIcons) {
buffer.append$C(this.annotations[i].secondaryStructure);
} else {
buffer.append$S(this.annotations[i].displayCharacter);
}}buffer.append$S(", ");
}
if (this.label.indexOf$S("Consensus") == 0) {
buffer.append$S("\n");
for (var i=0; i < this.annotations.length; i++) {
if (this.annotations[i] != null ) {
buffer.append$S(this.annotations[i].description);
}buffer.append$S(", ");
}
}return buffer.toString();
});

Clazz.newMeth(C$, 'setThreshold$jalview_datamodel_GraphLine', function (line) {
this.threshold=line;
});

Clazz.newMeth(C$, 'getThreshold$', function () {
return this.threshold;
});

Clazz.newMeth(C$, 'createSequenceMapping$jalview_datamodel_SequenceI$I$Z', function (seqRef, startRes, alreadyMapped) {
if (seqRef == null ) {
return;
}this.sequenceRef=seqRef;
if (this.annotations == null ) {
return;
}this.sequenceMapping=Clazz.new_($I$(1,1));
var seqPos;
for (var i=0; i < this.annotations.length; i++) {
if (this.annotations[i] != null ) {
if (alreadyMapped) {
seqPos=seqRef.findPosition$I(i);
} else {
seqPos=i + startRes;
}this.sequenceMapping.put$O$O(Integer.valueOf$I(seqPos), this.annotations[i]);
}}
});

Clazz.newMeth(C$, 'adjustForAlignment$', function () {
if (this.sequenceRef == null ) {
return;
}if (this.annotations == null ) {
return;
}var a=0;
var aSize=this.sequenceRef.getLength$();
if (aSize == 0) {
return;
}var position;
var temp=Clazz.array($I$(9), [aSize]);
var index;
if (this.sequenceMapping != null ) {
for (a=this.sequenceRef.getStart$(); a <= this.sequenceRef.getEnd$(); a++) {
index=Integer.valueOf$I(a);
var annot=this.sequenceMapping.get$O(index);
if (annot != null ) {
position=this.sequenceRef.findIndex$I(a) - 1;
temp[position]=annot;
}}
}this.annotations=temp;
});

Clazz.newMeth(C$, 'compactAnnotationArray$', function () {
var i=0;
var iSize=this.annotations.length;
while (i < iSize){
if (this.annotations[i] == null ) {
if (i + 1 < iSize) {
System.arraycopy$O$I$O$I$I(this.annotations, i + 1, this.annotations, i, iSize - i - 1 );
}iSize--;
} else {
i++;
}}
var ann=this.annotations;
this.annotations=Clazz.array($I$(9), [i]);
System.arraycopy$O$I$O$I$I(ann, 0, this.annotations, 0, i);
ann=null;
return iSize;
});

Clazz.newMeth(C$, 'setSequenceRef$jalview_datamodel_SequenceI', function (sequenceI) {
if (sequenceI != null ) {
if (this.sequenceRef != null ) {
var rIsDs=this.sequenceRef.getDatasetSequence$() == null ;
var tIsDs=sequenceI.getDatasetSequence$() == null ;
if (this.sequenceRef !== sequenceI  && (rIsDs && !tIsDs && this.sequenceRef !== sequenceI.getDatasetSequence$()   )  && (!rIsDs && tIsDs && this.sequenceRef.getDatasetSequence$() !== sequenceI   )  && (!rIsDs && !tIsDs && this.sequenceRef.getDatasetSequence$() !== sequenceI.getDatasetSequence$()   )  && !this.sequenceRef.equals$O(sequenceI) ) {
this.sequenceRef=null;
if (this.sequenceMapping != null ) {
this.sequenceMapping=null;
}this.createSequenceMapping$jalview_datamodel_SequenceI$I$Z(sequenceI, 1, true);
this.adjustForAlignment$();
} else {
this.sequenceRef=sequenceI;
}} else {
this.createSequenceMapping$jalview_datamodel_SequenceI$I$Z(sequenceI, 1, true);
this.adjustForAlignment$();
}} else {
this.sequenceMapping=null;
this.sequenceRef=null;
}});

Clazz.newMeth(C$, 'getScore$', function () {
return this.score;
});

Clazz.newMeth(C$, 'setScore$D', function (score) {
this.hasScore=true;
this.score=score;
});

Clazz.newMeth(C$, 'hasScore$', function () {
return this.hasScore || !Double.isNaN$D(this.score) ;
});

Clazz.newMeth(C$, 'c$$S$S$D', function (label, description, score) {
C$.c$$S$S$jalview_datamodel_AnnotationA.apply(this, [label, description, null]);
this.setScore$D(score);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_HiddenColumns', function (alignmentAnnotation, hidden) {
C$.c$$jalview_datamodel_AlignmentAnnotation.apply(this, [alignmentAnnotation]);
if (this.annotations == null ) {
return;
}this.makeVisibleAnnotation$jalview_datamodel_HiddenColumns(hidden);
}, 1);

Clazz.newMeth(C$, 'setPadGaps$Z$C', function (padgaps, gapchar) {
this.padGaps=padgaps;
if (padgaps) {
this.hasText=true;
for (var i=0; i < this.annotations.length; i++) {
if (this.annotations[i] == null ) {
this.annotations[i]=Clazz.new_([String.valueOf$C(gapchar), null, " ", 0.0, null],$I$(9,1).c$$S$S$C$F$java_awt_Color);
} else if (this.annotations[i].displayCharacter == null  || this.annotations[i].displayCharacter.equals$O(" ") ) {
this.annotations[i].displayCharacter=String.valueOf$C(gapchar);
}}
}});

Clazz.newMeth(C$, 'getDescription$Z', function (seqname) {
if (seqname && this.sequenceRef != null  ) {
var i=this.description.toLowerCase$().indexOf$S("<html>");
if (i > -1) {
return "<html>" + this.sequenceRef.getName$() + " : " + this.description.substring$I(i + 6) ;
}return this.sequenceRef.getName$() + " : " + this.description ;
}return this.description;
});

Clazz.newMeth(C$, 'isValidStruc$', function () {
return this.invalidrnastruc == -1;
});

Clazz.newMeth(C$, 'getInvalidStrucPos$', function () {
return this.invalidrnastruc;
});

Clazz.newMeth(C$, 'getCalcId$', function () {
return this.calcId;
});

Clazz.newMeth(C$, 'setCalcId$S', function (calcId) {
this.calcId=calcId;
});

Clazz.newMeth(C$, 'isRNA$', function () {
return this.isrna;
});

Clazz.newMeth(C$, 'liftOver$jalview_datamodel_SequenceI$jalview_datamodel_Mapping', function (sq, sp2sq) {
if (sp2sq.getMappedWidth$() != sp2sq.getWidth$()) {
throw Clazz.new_($I$(11,1).c$$S,["liftOver currently not implemented for transfer of annotation between different types of seqeunce"]);
}var mapIsTo=(sp2sq != null ) ? (sp2sq.getTo$() === sq  || sp2sq.getTo$() === sq.getDatasetSequence$()  ) : false;
var mapForsq=Clazz.new_($I$(1,1));
if (this.sequenceMapping != null ) {
if (sp2sq != null ) {
for (var ie, $ie = this.sequenceMapping.entrySet$().iterator$(); $ie.hasNext$()&&((ie=($ie.next$())),1);) {
var mpos=Integer.valueOf$I(mapIsTo ? sp2sq.getMappedPosition$I((ie.getKey$()).valueOf()) : sp2sq.getPosition$I((ie.getKey$()).valueOf()));
if ((mpos).valueOf() >= sq.getStart$()  && (mpos).valueOf() <= sq.getEnd$()  ) {
mapForsq.put$O$O(mpos, ie.getValue$());
}}
this.sequenceMapping=mapForsq;
this.sequenceRef=sq;
this.adjustForAlignment$();
} else {
}}});

Clazz.newMeth(C$, 'remap$jalview_datamodel_SequenceI$java_util_HashMap$I$I$I', function (newref, mapping, from, to, idxoffset) {
if (mapping != null ) {
var old=this.sequenceMapping;
var remap=Clazz.new_($I$(1,1));
var index=-1;
for (var mp, $mp = mapping.values$().iterator$(); $mp.hasNext$()&&((mp=($mp.next$())),1);) {
if (index++ < 0) {
continue;
}var ann=null;
if (from == -1) {
ann=this.sequenceMapping.get$O(Integer.valueOf$I(idxoffset + index));
} else {
if (mp != null  && mp.length > from ) {
ann=this.sequenceMapping.get$O(Integer.valueOf$I(mp[from]));
}}if (ann != null ) {
if (to == -1) {
remap.put$O$O(Integer.valueOf$I(idxoffset + index), ann);
} else {
if (to > -1 && to < mp.length ) {
remap.put$O$O(Integer.valueOf$I(mp[to]), ann);
}}}}
this.sequenceMapping=remap;
old.clear$();
if (newref != null ) {
this.sequenceRef=newref;
}this.adjustForAlignment$();
}});

Clazz.newMeth(C$, 'getProperty$S', function (property) {
if (this.properties == null ) {
return null;
}return this.properties.get$O(property);
});

Clazz.newMeth(C$, 'setProperty$S$S', function (property, value) {
if (this.properties == null ) {
this.properties=Clazz.new_($I$(1,1));
}this.properties.put$O$O(property, value);
});

Clazz.newMeth(C$, 'hasProperties$', function () {
return this.properties != null  && this.properties.size$() > 0 ;
});

Clazz.newMeth(C$, 'getProperties$', function () {
if (this.properties == null ) {
return $I$(12).emptyList$();
}return this.properties.keySet$();
});

Clazz.newMeth(C$, 'getAnnotationForPosition$I', function (position) {
return this.sequenceMapping == null  ? null : this.sequenceMapping.get$O(new Integer(position));
});

Clazz.newMeth(C$, 'setAnnotationId$', function () {
this.annotationId="ann" + Long.toString$J(C$.nextId$());
});

Clazz.newMeth(C$, 'getDefaultRnaHelixSymbol$I', function (column) {
var result="(";
if (this.annotations == null ) {
return result;
}for (var col=column - 1; col >= 0; col--) {
var annotation=this.annotations[col];
if (annotation == null ) {
continue;
}var displayed=annotation.displayCharacter;
if (displayed == null  || displayed.length$() != 1 ) {
continue;
}var symbol=displayed.charAt$I(0);
if (!$I$(2).isOpeningParenthesis$C(symbol)) {
continue;
}var closer=String.valueOf$C($I$(2).getMatchingClosingParenthesis$C(symbol));
var opener=String.valueOf$C(symbol);
var count=0;
for (var j=col + 1; j < column; j++) {
if (this.annotations[j] != null ) {
var s=this.annotations[j].displayCharacter;
if (closer.equals$O(s)) {
count++;
} else if (opener.equals$O(s)) {
count--;
}}}
if (count < 1) {
return closer;
}}
return result;
});

Clazz.newMeth(C$, 'nextId$', function () {
return C$.counter++;
}, 1);

Clazz.newMeth(C$, 'isQuantitative$', function () {
return this.graphMin < this.graphMax ;
});

Clazz.newMeth(C$, 'makeVisibleAnnotation$jalview_datamodel_HiddenColumns', function (hiddenColumns) {
if (this.annotations != null ) {
this.makeVisibleAnnotation$I$I$jalview_datamodel_HiddenColumns(0, this.annotations.length, hiddenColumns);
}});

Clazz.newMeth(C$, 'makeVisibleAnnotation$I$I$jalview_datamodel_HiddenColumns', function (start, end, hiddenColumns) {
if (this.annotations != null ) {
if (hiddenColumns.hasHiddenColumns$()) {
p$1.removeHiddenAnnotation$I$I$jalview_datamodel_HiddenColumns.apply(this, [start, end, hiddenColumns]);
} else {
this.restrict$I$I(start, end);
}}});

Clazz.newMeth(C$, 'removeHiddenAnnotation$I$I$jalview_datamodel_HiddenColumns', function (start, end, hiddenColumns) {
var annels=Clazz.new_($I$(13,1));
var els=null;
var w=0;
var blocks=hiddenColumns.getVisContigsIterator$I$I$Z(start, end + 1, false);
var copylength;
var annotationLength;
while (blocks.hasNext$()){
var block=blocks.next$();
annotationLength=block[1] - block[0] + 1;
if (blocks.hasNext$()) {
copylength=annotationLength;
} else {
if (annotationLength + block[0] <= this.annotations.length) {
copylength=annotationLength;
} else {
copylength=this.annotations.length - block[0];
}}els=Clazz.array($I$(9), [annotationLength]);
annels.add$O(els);
System.arraycopy$O$I$O$I$I(this.annotations, block[0], els, 0, copylength);
w+=annotationLength;
}
if (w != 0) {
this.annotations=Clazz.array($I$(9), [w]);
w=0;
for (var chnk, $chnk = annels.iterator$(); $chnk.hasNext$()&&((chnk=($chnk.next$())),1);) {
System.arraycopy$O$I$O$I$I(chnk, 0, this.annotations, w, chnk.length);
w+=chnk.length;
}
}}, p$1);

Clazz.newMeth(C$, 'findAnnotations$Iterable$jalview_datamodel_SequenceI$S$S', function (list, seq, calcId, label) {
var aa=Clazz.new_($I$(13,1));
for (var ann, $ann = list.iterator$(); $ann.hasNext$()&&((ann=($ann.next$())),1);) {
if ((calcId == null  || (ann.getCalcId$() != null  && ann.getCalcId$().equals$O(calcId) ) ) && (seq == null  || (ann.sequenceRef != null  && ann.sequenceRef === seq  ) ) && (label == null  || (ann.label != null  && ann.label.equals$O(label) ) )  ) {
aa.add$O(ann);
}}
return aa;
}, 1);

Clazz.newMeth(C$, 'hasAnnotation$java_util_List$S', function (list, calcId) {
if (calcId != null  && !"".equals$O(calcId) ) {
for (var a, $a = list.iterator$(); $a.hasNext$()&&((a=($a.next$())),1);) {
if (a.getCalcId$() == calcId) {
return true;
}}
}return false;
}, 1);

Clazz.newMeth(C$, 'findAnnotation$java_util_List$S', function (list, calcId) {
var aa=Clazz.new_($I$(13,1));
if (calcId == null ) {
return aa;
}for (var a, $a = list.iterator$(); $a.hasNext$()&&((a=($a.next$())),1);) {
if (a.getCalcId$() == calcId || (a.getCalcId$() != null  && calcId != null   && a.getCalcId$().equals$O(calcId) ) ) {
aa.add$O(a);
}}
return aa;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.counter=0;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AlignmentAnnotation, "AnnotCharSequence", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'CharSequence');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.offset=0;
this.max=0;
},1);

C$.$fields$=[['I',['offset','max']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I$I.apply(this, [0, this.this$0.annotations.length]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (start, end) {
;C$.$init$.apply(this);
this.offset=start;
this.max=end;
}, 1);

Clazz.newMeth(C$, 'subSequence$I$I', function (start, end) {
return Clazz.new_(C$.c$$I$I,[this, null, this.offset + start, this.offset + end]);
});

Clazz.newMeth(C$, 'length$', function () {
return this.max - this.offset;
});

Clazz.newMeth(C$, 'charAt$I', function (index) {
return ((index + this.offset < 0) || (index + this.offset) >= this.max  || this.this$0.annotations[index + this.offset] == null   || (this.this$0.annotations[index + this.offset].secondaryStructure <= " ")  ? " " : this.this$0.annotations[index + this.offset].displayCharacter == null  || this.this$0.annotations[index + this.offset].displayCharacter.length$() == 0  ? this.this$0.annotations[index + this.offset].secondaryStructure : this.this$0.annotations[index + this.offset].displayCharacter.charAt$I(0));
});

Clazz.newMeth(C$, 'toString', function () {
var string=Clazz.array(Character.TYPE, [this.max - this.offset]);
var mx=this.this$0.annotations.length;
for (var i=this.offset; i < mx; i++) {
string[i]=(this.this$0.annotations[i] == null  || ((this.this$0.annotations[i].secondaryStructure).$c() <= 32 ) ) ? " " : (this.this$0.annotations[i].displayCharacter == null  || this.this$0.annotations[i].displayCharacter.length$() == 0  ? this.this$0.annotations[i].secondaryStructure : this.this$0.annotations[i].displayCharacter.charAt$I(0));
}
return  String.instantialize(string);
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
