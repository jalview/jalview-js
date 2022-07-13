(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'jalview.util.MessageManager','java.util.StringTokenizer','java.util.Locale','jalview.datamodel.features.FeatureMatcher','jalview.util.ColorUtils','java.awt.Color','jalview.util.Format','StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureColour", null, null, 'jalview.api.FeatureColourI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['graduatedColour','colourByLabel','belowThreshold','aboveThreshold','isHighToLow','autoScaled'],'F',['threshold','base','range','minRed','minGreen','minBlue','deltaRed','deltaGreen','deltaBlue'],'O',['+colour','+minColour','+maxColour','+noColour','attributeName','String[]']]
,['S',['I18N_LABEL','I18N_SCORE'],'O',['DEFAULT_NO_COLOUR','java.awt.Color']]]

Clazz.newMeth(C$, 'parseJalviewFeatureColour$S',  function (descriptor) {
var gcol=Clazz.new_($I$(2,1).c$$S$S$Z,[descriptor, "|", true]);
var min=1.4E-45;
var max=3.4028235E38;
var byLabel=false;
var byAttribute=false;
var attName=null;
var mincol=null;
var maxcol=null;
var nextToken=gcol.nextToken$();
if (nextToken == "|") {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Expected either 'label' or a colour specification in the line: " + descriptor]);
}if (nextToken.toLowerCase$java_util_Locale($I$(3).ROOT).startsWith$S("label")) {
byLabel=true;
mincol=(gcol.hasMoreTokens$() ? gcol.nextToken$() : null);
mincol=(gcol.hasMoreTokens$() ? gcol.nextToken$() : null);
} else if (nextToken.toLowerCase$java_util_Locale($I$(3).ROOT).startsWith$S("score")) {
mincol=(gcol.hasMoreTokens$() ? gcol.nextToken$() : null);
mincol=(gcol.hasMoreTokens$() ? gcol.nextToken$() : null);
} else if (nextToken.toLowerCase$java_util_Locale($I$(3).ROOT).startsWith$S("attribute")) {
byAttribute=true;
attName=(gcol.hasMoreTokens$() ? gcol.nextToken$() : null);
attName=(gcol.hasMoreTokens$() ? gcol.nextToken$() : null);
mincol=(gcol.hasMoreTokens$() ? gcol.nextToken$() : null);
mincol=(gcol.hasMoreTokens$() ? gcol.nextToken$() : null);
} else {
mincol=nextToken;
}if (!gcol.hasMoreTokens$()) {
if (byLabel || byAttribute ) {
var fc=Clazz.new_(C$);
fc.setColourByLabel$Z(true);
if (byAttribute) {
fc.setAttributeName$SA($I$(4).fromAttributeDisplayName$S(attName));
}return fc;
}var colour=$I$(5).parseColourString$S(descriptor);
if (colour == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid colour descriptor: " + descriptor]);
}return Clazz.new_(C$.c$$java_awt_Color,[colour]);
}var autoScaled=true;
var tok=null;
var minval;
var maxval;
var noValueColour="noValueMin";
if (mincol != null ) {
if (mincol.equals$O("|")) {
mincol=null;
} else {
gcol.nextToken$();
}maxcol=gcol.nextToken$();
if (maxcol.equals$O("|")) {
maxcol=null;
} else {
gcol.nextToken$();
}tok=gcol.nextToken$();
if (tok.equalsIgnoreCase$S("noValueMin")) {
tok=gcol.nextToken$();
tok=gcol.nextToken$();
} else if (tok.equalsIgnoreCase$S("noValueMax")) {
noValueColour="noValueMax";
tok=gcol.nextToken$();
tok=gcol.nextToken$();
} else if (tok.equalsIgnoreCase$S("noValueNone")) {
noValueColour="noValueNone";
tok=gcol.nextToken$();
tok=gcol.nextToken$();
}gcol.nextToken$();
if (tok.toLowerCase$java_util_Locale($I$(3).ROOT).startsWith$S("abso")) {
minval=gcol.nextToken$();
gcol.nextToken$();
autoScaled=false;
} else {
minval=tok;
}maxval=gcol.nextToken$();
if (gcol.hasMoreTokens$()) {
gcol.nextToken$();
}try {
if (minval.length$() > 0) {
min=Float.valueOf$S(minval).floatValue$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Couldn't parse the minimum value for graduated colour ('" + minval + "')" ]);
} else {
throw e;
}
}
try {
if (maxval.length$() > 0) {
max=Float.valueOf$S(maxval).floatValue$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Couldn't parse the maximum value for graduated colour (" + descriptor + ")" ]);
} else {
throw e;
}
}
} else {
mincol="white";
maxcol="black";
byLabel=true;
}var featureColour;
try {
var minColour=$I$(5).parseColourString$S(mincol);
var maxColour=$I$(5).parseColourString$S(maxcol);
var noColour=noValueColour.equals$O("noValueMax") ? maxColour : (noValueColour.equals$O("noValueNone") ? null : minColour);
featureColour=Clazz.new_(C$.c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color$F$F,[maxColour, minColour, maxColour, noColour, min, max]);
featureColour.setColourByLabel$Z(minColour == null );
featureColour.setAutoScaled$Z(autoScaled);
if (byAttribute) {
featureColour.setAttributeName$SA($I$(4).fromAttributeDisplayName$S(attName));
}var ttype=null;
var tval=null;
if (gcol.hasMoreTokens$()) {
ttype=gcol.nextToken$();
if (ttype.toLowerCase$java_util_Locale($I$(3).ROOT).startsWith$S("below")) {
featureColour.setBelowThreshold$Z(true);
} else if (ttype.toLowerCase$java_util_Locale($I$(3).ROOT).startsWith$S("above")) {
featureColour.setAboveThreshold$Z(true);
} else {
if (!ttype.toLowerCase$java_util_Locale($I$(3).ROOT).startsWith$S("no")) {
System.err.println$S("Ignoring unrecognised threshold type : " + ttype);
}}}if (featureColour.hasThreshold$()) {
try {
gcol.nextToken$();
tval=gcol.nextToken$();
featureColour.setThreshold$F(Float.valueOf$S(tval).floatValue$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Couldn't parse threshold value as a float: (" + tval + ")" );
} else {
throw e;
}
}
}if (gcol.hasMoreTokens$()) {
System.err.println$S("Ignoring additional tokens in parameters in graduated colour specification\n");
while (gcol.hasMoreTokens$()){
System.err.println$S("|" + gcol.nextToken$());
}
System.err.println$S("\n");
}return featureColour;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_awt_Color.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color',  function (c) {
C$.c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color$F$F.apply(this, [c, c == null  ? $I$(6).white : $I$(5).bleachColour$java_awt_Color$F(c, 0.9), c == null  ? $I$(6).black : c, C$.DEFAULT_NO_COLOUR, 0, 0]);
this.setGraduatedColour$Z(false);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_schemes_FeatureColour',  function (fc) {
;C$.$init$.apply(this);
this.graduatedColour=fc.graduatedColour;
this.colour=fc.colour;
this.minColour=fc.minColour;
this.maxColour=fc.maxColour;
this.noColour=fc.noColour;
this.minRed=fc.minRed;
this.minGreen=fc.minGreen;
this.minBlue=fc.minBlue;
this.deltaRed=fc.deltaRed;
this.deltaGreen=fc.deltaGreen;
this.deltaBlue=fc.deltaBlue;
this.base=fc.base;
this.range=fc.range;
this.isHighToLow=fc.isHighToLow;
this.attributeName=fc.attributeName;
this.setAboveThreshold$Z(fc.isAboveThreshold$());
this.setBelowThreshold$Z(fc.isBelowThreshold$());
this.setThreshold$F(fc.getThreshold$());
this.setAutoScaled$Z(fc.isAutoScaled$());
this.setColourByLabel$Z(fc.isColourByLabel$());
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color$F$F',  function (myColour, low, high, noValueColour, min, max) {
;C$.$init$.apply(this);
if (low == null ) {
low=$I$(6).white;
}if (high == null ) {
high=$I$(6).black;
}this.colour=myColour;
this.minColour=low;
this.maxColour=high;
this.setGraduatedColour$Z(true);
this.noColour=noValueColour;
this.threshold=NaN;
this.isHighToLow=min >= max ;
this.minRed=low.getRed$() / 255.0;
this.minGreen=low.getGreen$() / 255.0;
this.minBlue=low.getBlue$() / 255.0;
this.deltaRed=(high.getRed$() / 255.0) - this.minRed;
this.deltaGreen=(high.getGreen$() / 255.0) - this.minGreen;
this.deltaBlue=(high.getBlue$() / 255.0) - this.minBlue;
if (this.isHighToLow) {
this.base=max;
this.range=min - max;
} else {
this.base=min;
this.range=max - min;
}}, 1);

Clazz.newMeth(C$, 'isGraduatedColour$',  function () {
return this.graduatedColour;
});

Clazz.newMeth(C$, 'setGraduatedColour$Z',  function (b) {
this.graduatedColour=b;
if (b) {
this.setColourByLabel$Z(false);
}});

Clazz.newMeth(C$, 'getColour$',  function () {
return this.colour;
});

Clazz.newMeth(C$, 'getMinColour$',  function () {
return this.minColour;
});

Clazz.newMeth(C$, 'getMaxColour$',  function () {
return this.maxColour;
});

Clazz.newMeth(C$, 'getNoColour$',  function () {
return this.noColour;
});

Clazz.newMeth(C$, 'isColourByLabel$',  function () {
return this.colourByLabel;
});

Clazz.newMeth(C$, 'setColourByLabel$Z',  function (b) {
this.colourByLabel=b;
if (b) {
this.setGraduatedColour$Z(false);
}});

Clazz.newMeth(C$, 'isBelowThreshold$',  function () {
return this.belowThreshold;
});

Clazz.newMeth(C$, 'setBelowThreshold$Z',  function (b) {
this.belowThreshold=b;
if (b) {
this.setAboveThreshold$Z(false);
}});

Clazz.newMeth(C$, 'isAboveThreshold$',  function () {
return this.aboveThreshold;
});

Clazz.newMeth(C$, 'setAboveThreshold$Z',  function (b) {
this.aboveThreshold=b;
if (b) {
this.setBelowThreshold$Z(false);
}});

Clazz.newMeth(C$, 'getThreshold$',  function () {
return this.threshold;
});

Clazz.newMeth(C$, 'setThreshold$F',  function (f) {
this.threshold=f;
});

Clazz.newMeth(C$, 'isAutoScaled$',  function () {
return this.autoScaled;
});

Clazz.newMeth(C$, 'setAutoScaled$Z',  function (b) {
this.autoScaled=b;
});

Clazz.newMeth(C$, 'updateBounds$F$F',  function (min, max) {
if (max < min ) {
this.base=max;
this.range=min - max;
this.isHighToLow=true;
} else {
this.base=min;
this.range=max - min;
this.isHighToLow=false;
}});

Clazz.newMeth(C$, 'getColor$jalview_datamodel_SequenceFeature',  function (feature) {
if (this.isColourByLabel$()) {
var label=this.attributeName == null  ? feature.getDescription$() : feature.getValueAsString$SA(this.attributeName);
return label == null  ? this.noColour : $I$(5).createColourFromName$S(label);
}if (!this.isGraduatedColour$()) {
return this.getColour$();
}var scr=feature.getScore$();
if (this.attributeName != null ) {
try {
var attVal=feature.getValueAsString$SA(this.attributeName);
scr=(Float.valueOf$S(attVal)).valueOf();
} catch (e) {
scr=NaN;
}
}if (Float.isNaN$F(scr)) {
return this.noColour;
}if (this.isAboveThreshold$() && scr <= this.threshold  ) {
return null;
}if (this.isBelowThreshold$() && scr >= this.threshold  ) {
return null;
}if (this.range == 0.0 ) {
return this.getMaxColour$();
}var scl=(scr - this.base) / this.range;
if (this.isHighToLow) {
scl=-scl;
}if (scl < 0.0 ) {
scl=0.0;
}if (scl > 1.0 ) {
scl=1.0;
}return Clazz.new_($I$(6,1).c$$F$F$F,[this.minRed + scl * this.deltaRed, this.minGreen + scl * this.deltaGreen, this.minBlue + scl * this.deltaBlue]);
});

Clazz.newMeth(C$, 'getMax$',  function () {
return (this.isHighToLow) ? this.base : (this.base + this.range);
});

Clazz.newMeth(C$, 'getMin$',  function () {
return (this.isHighToLow) ? (this.base + this.range) : this.base;
});

Clazz.newMeth(C$, 'isSimpleColour$',  function () {
return (!this.isColourByLabel$() && !this.isGraduatedColour$() );
});

Clazz.newMeth(C$, 'hasThreshold$',  function () {
return this.isAboveThreshold$() || this.isBelowThreshold$() ;
});

Clazz.newMeth(C$, 'toJalviewFormat$S',  function (featureType) {
var colourString=null;
if (this.isSimpleColour$()) {
colourString=$I$(7,"getHexString$java_awt_Color",[this.getColour$()]);
} else {
var sb=Clazz.new_($I$(8,1).c$$I,[32]);
if (this.isColourByAttribute$()) {
sb.append$S("attribute").append$S("|");
sb.append$S($I$(4,"toAttributeDisplayName$SA",[this.getAttributeName$()]));
} else if (this.isColourByLabel$()) {
sb.append$S("label");
} else {
sb.append$S("score");
}if (this.isGraduatedColour$()) {
sb.append$S("|").append$S($I$(7,"getHexString$java_awt_Color",[this.getMinColour$()])).append$S("|");
sb.append$S($I$(7,"getHexString$java_awt_Color",[this.getMaxColour$()])).append$S("|");
var noValue="noValueMin";
if (this.maxColour.equals$O(this.noColour)) {
noValue="noValueMax";
}if (this.noColour == null ) {
noValue="noValueNone";
}sb.append$S(noValue).append$S("|");
if (!this.isAutoScaled$()) {
sb.append$S("abso").append$S("|");
}} else {
if (this.hasThreshold$()) {
sb.append$S("|").append$S("|").append$S("|");
}}if (this.hasThreshold$() || this.isGraduatedColour$() ) {
sb.append$F(this.getMin$()).append$S("|");
sb.append$F(this.getMax$()).append$S("|");
if (this.isBelowThreshold$()) {
sb.append$S("below").append$S("|").append$F(this.getThreshold$());
} else if (this.isAboveThreshold$()) {
sb.append$S("above").append$S("|").append$F(this.getThreshold$());
} else {
sb.append$S("none");
}}colourString=sb.toString();
}return String.format$S$OA("%s\t%s", Clazz.array(java.lang.Object, -1, [featureType, colourString]));
});

Clazz.newMeth(C$, 'isColourByAttribute$',  function () {
return this.attributeName != null ;
});

Clazz.newMeth(C$, 'getAttributeName$',  function () {
return this.attributeName;
});

Clazz.newMeth(C$, 'setAttributeName$SA',  function (name) {
this.attributeName=name;
});

Clazz.newMeth(C$, 'isOutwithThreshold$jalview_datamodel_SequenceFeature',  function (feature) {
if (!this.isGraduatedColour$()) {
return false;
}var scr=feature.getScore$();
if (this.attributeName != null ) {
try {
var attVal=feature.getValueAsString$SA(this.attributeName);
scr=(Float.valueOf$S(attVal)).valueOf();
} catch (e) {
scr=NaN;
}
}if (Float.isNaN$F(scr)) {
return false;
}return ((this.isAboveThreshold$() && scr <= this.threshold  ) || (this.isBelowThreshold$() && scr >= this.threshold  ) );
});

Clazz.newMeth(C$, 'getDescription$',  function () {
if (this.isSimpleColour$()) {
return "r=" + this.colour.getRed$() + ",g=" + this.colour.getGreen$() + ",b=" + this.colour.getBlue$() ;
}var tt=Clazz.new_($I$(8,1));
var by=null;
if (this.getAttributeName$() != null ) {
by=$I$(4,"toAttributeDisplayName$SA",[this.getAttributeName$()]);
} else if (this.isColourByLabel$()) {
by=C$.I18N_LABEL;
} else {
by=C$.I18N_SCORE;
}tt.append$S($I$(1,"formatMessage$S$OA",["action.by_title_param", Clazz.array(java.lang.Object, -1, [by])]));
if (this.isAboveThreshold$() || this.isBelowThreshold$() ) {
tt.append$S(" (");
if (this.isColourByLabel$()) {
tt.append$S(C$.I18N_SCORE).append$S(" ");
}tt.append$S(this.isAboveThreshold$() ? "> " : "< ");
tt.append$F(this.getThreshold$()).append$S(")");
}return tt.toString();
});

C$.$static$=function(){C$.$static$=0;
C$.I18N_LABEL=$I$(1).getString$S("label.label");
C$.I18N_SCORE=$I$(1).getString$S("label.score");
C$.DEFAULT_NO_COLOUR=null;
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
