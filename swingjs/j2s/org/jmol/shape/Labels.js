(function(){var P$=Clazz.newPackage("org.jmol.shape"),p$1={},I$=[[0,'org.jmol.modelset.LabelToken','java.util.Hashtable','javajs.util.P3','org.jmol.viewer.JC','org.jmol.c.PAL','org.jmol.util.C','org.jmol.modelset.Text','org.jmol.script.SV','javajs.util.BS','javajs.util.AU','org.jmol.util.BSUtil','org.jmol.util.Font','javajs.util.PT']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Labels", null, 'org.jmol.shape.AtomShape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.atomLabels=Clazz.new_($I$(2,1));
this.defaultsOnlyForNone=true;
this.setDefaults=false;
this.ptTemp=Clazz.new_($I$(3,1));
this.pickedAtom=-1;
this.lastPicked=-1;
this.pickedOffset=0;
},1);

C$.$fields$=[['Z',['defaultsOnlyForNone','setDefaults','isScaled'],'B',['defaultFontId','defaultPaletteID','zeroFontId'],'F',['scalePixelsPerMicron'],'I',['defaultOffset','defaultAlignment','defaultZPos','defaultPointer','pickedAtom','lastPicked','pickedOffset','pickedX','pickedY'],'H',['defaultColix','defaultBgcolix'],'O',['strings','String[]','+formats','bgcolixes','short[]','fids','byte[]','offsets','int[]','atomLabels','java.util.Map','+labelBoxes','bsFontSet','javajs.util.BS','+bsBgColixSet','ptTemp','javajs.util.P3']]
,['O',['nullToken','org.jmol.modelset.LabelToken[][]']]]

Clazz.newMeth(C$, 'initShape$', function () {
this.defaultFontId=this.zeroFontId=this.vwr.gdata.getFont3DFSS$S$S$F("SansSerif", "Plain", 13).fid;
this.defaultColix=($s$[0] = 0, $s$[0]);
this.defaultBgcolix=($s$[0] = 0, $s$[0]);
this.defaultOffset=$I$(4).LABEL_DEFAULT_OFFSET;
this.defaultAlignment=4;
this.defaultPointer=0;
this.defaultZPos=0;
this.translucentAllowed=false;
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bsSelected) {
this.isActive=true;
if ("setDefaults" === propertyName ) {
this.setDefaults=(value).booleanValue$();
return;
}if ("color" === propertyName ) {
var pid=$I$(5).pidOf$O(value);
var colix=$I$(6).getColixO$O(value);
if (!this.setDefaults) {
var n=this.checkColixLength$H$I(colix, bsSelected.length$());
for (var i=bsSelected.nextSetBit$I(0); i >= 0 && i < n ; i=bsSelected.nextSetBit$I(i + 1)) p$1.setLabelColix$I$H$B.apply(this, [i, colix, pid]);

}if (this.setDefaults || !this.defaultsOnlyForNone ) {
this.defaultColix=colix;
this.defaultPaletteID=pid;
}return;
}if ("scalereference" === propertyName ) {
if (this.strings == null ) return;
var val=(value).floatValue$();
var scalePixelsPerMicron=(val == 0  ? 0 : 10000.0 / val);
var n=Math.min(this.ac, this.strings.length);
for (var i=bsSelected.nextSetBit$I(0); i >= 0 && i < n ; i=bsSelected.nextSetBit$I(i + 1)) {
var text=this.getLabel$I(i);
if (text == null ) {
text=$I$(7).newLabel$org_jmol_viewer_Viewer$org_jmol_util_Font$S$H$H$I$F(this.vwr, null, this.strings[i], 0, 0, 0, scalePixelsPerMicron);
this.putLabel$I$org_jmol_modelset_Text(i, text);
} else {
text.setScalePixelsPerMicron$F(scalePixelsPerMicron);
}}
return;
}if ("label" === propertyName ) {
var isPicked=(p$1.isPickingMode.apply(this, []) && bsSelected.cardinality$() == 1  && bsSelected.nextSetBit$I(0) == this.lastPicked );
p$1.setScaling.apply(this, []);
var tokens=null;
var nbs=p$1.checkStringLength$I.apply(this, [bsSelected.length$()]);
if (this.defaultColix != 0 || this.defaultPaletteID != 0 ) this.checkColixLength$H$I(this.defaultColix, bsSelected.length$());
if (this.defaultBgcolix != 0) p$1.checkBgColixLength$H$I.apply(this, [this.defaultBgcolix, bsSelected.length$()]);
if (Clazz.instanceOf(value, "javajs.util.Lst")) {
var list=value;
var n=list.size$();
tokens=Clazz.array($I$(1), -2, [null]);
for (var pt=0, i=bsSelected.nextSetBit$I(0); i >= 0 && i < nbs ; i=bsSelected.nextSetBit$I(i + 1)) {
if (pt >= n) {
p$1.setLabel$org_jmol_modelset_LabelTokenAA$S$I$Z.apply(this, [C$.nullToken, "", i, !isPicked]);
continue;
}tokens[0]=null;
p$1.setLabel$org_jmol_modelset_LabelTokenAA$S$I$Z.apply(this, [tokens, $I$(8,"sValue$org_jmol_script_T",[list.get$I(pt++)]), i, !isPicked]);
}
} else {
var strLabel=value;
tokens=(strLabel == null  || strLabel.length$() == 0  ? C$.nullToken : Clazz.array($I$(1), -2, [null]));
for (var i=bsSelected.nextSetBit$I(0); i >= 0 && i < this.ac ; i=bsSelected.nextSetBit$I(i + 1)) p$1.setLabel$org_jmol_modelset_LabelTokenAA$S$I$Z.apply(this, [tokens, strLabel, i, !isPicked]);

}return;
}if (propertyName.startsWith$S("label:")) {
p$1.setScaling.apply(this, []);
p$1.checkStringLength$I.apply(this, [this.ac]);
var label=propertyName.substring$I(6);
if (label.length$() == 0) label=null;
p$1.setLabel$org_jmol_modelset_LabelTokenAA$S$I$Z.apply(this, [Clazz.array($I$(1), -2, [null]), label, (value).intValue$(), false]);
return;
}if ("clearBoxes" === propertyName ) {
this.labelBoxes=null;
return;
}if ("translucency" === propertyName  || "bgtranslucency" === propertyName  ) {
return;
}if ("bgcolor" === propertyName ) {
this.isActive=true;
if (this.bsBgColixSet == null ) this.bsBgColixSet=$I$(9).newN$I(this.ac);
var bgcolix=$I$(6).getColixO$O(value);
if (!this.setDefaults) {
var n=p$1.checkBgColixLength$H$I.apply(this, [bgcolix, bsSelected.length$()]);
for (var i=bsSelected.nextSetBit$I(0); i >= 0 && i < n ; i=bsSelected.nextSetBit$I(i + 1)) p$1.setBgcolix$I$H.apply(this, [i, bgcolix]);

}if (this.setDefaults || !this.defaultsOnlyForNone ) this.defaultBgcolix=bgcolix;
return;
}if (this.bsFontSet == null ) this.bsFontSet=$I$(9).newN$I(this.ac);
if ("fontsize" === propertyName ) {
var fontsize=(value).intValue$();
if (fontsize < 0) {
this.fids=null;
return;
}var fid=this.vwr.gdata.getFontFid$F(fontsize);
if (!this.setDefaults) for (var i=bsSelected.nextSetBit$I(0); i >= 0 && i < this.ac ; i=bsSelected.nextSetBit$I(i + 1)) p$1.setFont$I$B.apply(this, [i, fid]);

if (this.setDefaults || !this.defaultsOnlyForNone ) this.defaultFontId=fid;
return;
}if ("font" === propertyName ) {
var fid=(value).fid;
if (!this.setDefaults) for (var i=bsSelected.nextSetBit$I(0); i >= 0 && i < this.ac ; i=bsSelected.nextSetBit$I(i + 1)) p$1.setFont$I$B.apply(this, [i, fid]);

if (this.setDefaults || !this.defaultsOnlyForNone ) this.defaultFontId=fid;
return;
}if ("offset" === propertyName ) {
if (!(Clazz.instanceOf(value, "java.lang.Integer"))) {
if (!this.setDefaults) {
for (var i=bsSelected.nextSetBit$I(0); i >= 0 && i < this.ac ; i=bsSelected.nextSetBit$I(i + 1)) p$1.setPymolOffset$I$FA.apply(this, [i, value]);

}return;
}var offset=(value).intValue$();
if (!this.setDefaults) for (var i=bsSelected.nextSetBit$I(0); i >= 0 && i < this.ac ; i=bsSelected.nextSetBit$I(i + 1)) p$1.setOffsets$I$I.apply(this, [i, offset]);

if (this.setDefaults || !this.defaultsOnlyForNone ) this.defaultOffset=offset;
return;
}if ("align" === propertyName ) {
var type=value;
var hAlignment=(type.equalsIgnoreCase$S("right") ? 12 : type.equalsIgnoreCase$S("center") ? 8 : 4);
for (var i=bsSelected.nextSetBit$I(0); i >= 0 && i < this.ac ; i=bsSelected.nextSetBit$I(i + 1)) p$1.setHorizAlignment$I$I.apply(this, [i, hAlignment]);

if (this.setDefaults || !this.defaultsOnlyForNone ) this.defaultAlignment=hAlignment;
return;
}if ("pointer" === propertyName ) {
var pointer=(value).intValue$();
if (!this.setDefaults) for (var i=bsSelected.nextSetBit$I(0); i >= 0 && i < this.ac ; i=bsSelected.nextSetBit$I(i + 1)) p$1.setPointer$I$I.apply(this, [i, pointer]);

if (this.setDefaults || !this.defaultsOnlyForNone ) this.defaultPointer=pointer;
return;
}if ("front" === propertyName ) {
var TF=(value).booleanValue$();
if (!this.setDefaults) for (var i=bsSelected.nextSetBit$I(0); i >= 0 && i < this.ac ; i=bsSelected.nextSetBit$I(i + 1)) p$1.setZPos$I$I$Z.apply(this, [i, 32, TF]);

if (this.setDefaults || !this.defaultsOnlyForNone ) this.defaultZPos=(TF ? 32 : 0);
return;
}if ("group" === propertyName ) {
var TF=(value).booleanValue$();
if (!this.setDefaults) for (var i=bsSelected.nextSetBit$I(0); i >= 0 && i < this.ac ; i=bsSelected.nextSetBit$I(i + 1)) p$1.setZPos$I$I$Z.apply(this, [i, 16, TF]);

if (this.setDefaults || !this.defaultsOnlyForNone ) this.defaultZPos=(TF ? 16 : 0);
return;
}if ("display" === propertyName  || "toggleLabel" === propertyName  ) {
var mode=("toggleLabel" === propertyName  ? 0 : (value).booleanValue$() ? 1 : -1);
if (this.mads == null ) this.mads=Clazz.array(Short.TYPE, [this.ac]);
var strLabelPDB=null;
var tokensPDB=null;
var strLabelUNK=null;
var tokensUNK=null;
var strLabel;
var tokens;
var nstr=p$1.checkStringLength$I.apply(this, [bsSelected.length$()]);
var bgcolix=this.defaultBgcolix;
var nbg=p$1.checkBgColixLength$H$I.apply(this, [bgcolix, bsSelected.length$()]);
var thisMad=($s$[0] = (mode >= 0 ? 1 : -1), $s$[0]);
for (var i=bsSelected.nextSetBit$I(0); i >= 0 && i < this.ac ; i=bsSelected.nextSetBit$I(i + 1)) {
var atom=this.atoms[i];
if (i < nstr && this.strings[i] != null  ) {
this.mads[i]=((mode == 1 || mode == 0 && this.mads[i] < 0   ? 1 : -1)|0);
} else {
this.mads[i]=thisMad;
if (atom.getGroup3$Z(false).equals$O("UNK")) {
if (strLabelUNK == null ) {
strLabelUNK=this.vwr.getStandardLabelFormat$I(1);
tokensUNK=$I$(1).compile$org_jmol_viewer_Viewer$S$C$java_util_Map(this.vwr, strLabelUNK, "\u0000", null);
}strLabel=strLabelUNK;
tokens=tokensUNK;
} else {
if (strLabelPDB == null ) {
strLabelPDB=this.vwr.getStandardLabelFormat$I(2);
tokensPDB=$I$(1).compile$org_jmol_viewer_Viewer$S$C$java_util_Map(this.vwr, strLabelPDB, "\u0000", null);
}strLabel=strLabelPDB;
tokens=tokensPDB;
}this.strings[i]=$I$(1).formatLabelAtomArray$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_LabelTokenA$C$IA$javajs_util_P3(this.vwr, atom, tokens, "\u0000", null, this.ptTemp);
this.formats[i]=strLabel;
this.bsSizeSet.set$I(i);
if (i < nbg && !this.bsBgColixSet.get$I(i) ) p$1.setBgcolix$I$H.apply(this, [i, this.defaultBgcolix]);
}atom.setShapeVisibility$I$Z(this.vf, this.strings != null  && i < this.strings.length  && this.strings[i] != null   && this.mads[i] >= 0 );
}
return;
}if ("pymolLabels" === propertyName ) {
p$1.setPymolLabels$java_util_Map$javajs_util_BS.apply(this, [value, bsSelected]);
return;
}if (propertyName === "deleteModelAtoms" ) {
this.labelBoxes=null;
var firstAtomDeleted=((value)[2])[1];
var nAtomsDeleted=((value)[2])[2];
this.fids=$I$(10).deleteElements$O$I$I(this.fids, firstAtomDeleted, nAtomsDeleted);
this.bgcolixes=$I$(10).deleteElements$O$I$I(this.bgcolixes, firstAtomDeleted, nAtomsDeleted);
this.offsets=$I$(10).deleteElements$O$I$I(this.offsets, firstAtomDeleted, nAtomsDeleted);
this.formats=$I$(10).deleteElements$O$I$I(this.formats, firstAtomDeleted, nAtomsDeleted);
this.strings=$I$(10).deleteElements$O$I$I(this.strings, firstAtomDeleted, nAtomsDeleted);
$I$(11).deleteBits$javajs_util_BS$javajs_util_BS(this.bsFontSet, bsSelected);
$I$(11).deleteBits$javajs_util_BS$javajs_util_BS(this.bsBgColixSet, bsSelected);
}this.setPropAS$S$O$javajs_util_BS(propertyName, value, bsSelected);
});

Clazz.newMeth(C$, 'isPickingMode', function () {
return (this.vwr.getPickingMode$() == 2 && this.labelBoxes != null  );
}, p$1);

Clazz.newMeth(C$, 'checkStringLength$I', function (n) {
n=Math.min(this.ac, n);
if (this.strings == null  || n > this.strings.length ) {
this.formats=$I$(10).ensureLengthS$SA$I(this.formats, n);
this.strings=$I$(10).ensureLengthS$SA$I(this.strings, n);
if (this.bsSizeSet == null ) this.bsSizeSet=$I$(9).newN$I(n);
}return n;
}, p$1);

Clazz.newMeth(C$, 'checkBgColixLength$H$I', function (colix, n) {
n=Math.min(this.ac, n);
if (colix == 0) return (this.bgcolixes == null  ? 0 : this.bgcolixes.length);
if (this.bgcolixes == null  || n > this.bgcolixes.length ) this.bgcolixes=$I$(10).ensureLengthShort$HA$I(this.bgcolixes, n);
return n;
}, p$1);

Clazz.newMeth(C$, 'setPymolLabels$java_util_Map$javajs_util_BS', function (labels, bsSelected) {
p$1.setScaling.apply(this, []);
var n=p$1.checkStringLength$I.apply(this, [this.ac]);
this.checkColixLength$H$I(-1, n);
for (var i=bsSelected.nextSetBit$I(0); i >= 0 && i < n ; i=bsSelected.nextSetBit$I(i + 1)) p$1.setPymolLabel$I$org_jmol_modelset_Text$S.apply(this, [i, labels.get$O(Integer.valueOf$I(i)), null]);

}, p$1);

Clazz.newMeth(C$, 'setPymolOffset$I$FA', function (i, value) {
var text=this.getLabel$I(i);
if (text == null ) {
if (this.strings == null  || i >= this.strings.length  || this.strings[i] == null  ) return;
var fid=(this.bsFontSet != null  && this.bsFontSet.get$I(i)  ? this.fids[i] : ($b$[0] = -1, $b$[0]));
if (fid < 0) p$1.setFont$I$B.apply(this, [i, fid=this.defaultFontId]);
text=$I$(7,"newLabel$org_jmol_viewer_Viewer$org_jmol_util_Font$S$H$H$I$F",[this.vwr, $I$(12).getFont3D$B(fid), this.strings[i], this.getColix2$I$org_jmol_modelset_Atom$Z(i, this.atoms[i], false), this.getColix2$I$org_jmol_modelset_Atom$Z(i, this.atoms[i], true), 0, this.scalePixelsPerMicron]);
p$1.setPymolLabel$I$org_jmol_modelset_Text$S.apply(this, [i, text, this.formats[i]]);
}text.pymolOffset=value;
}, p$1);

Clazz.newMeth(C$, 'setScaling', function () {
this.isActive=true;
if (this.bsSizeSet == null ) this.bsSizeSet=$I$(9).newN$I(this.ac);
this.isScaled=this.vwr.getBoolean$I(603979845);
this.scalePixelsPerMicron=(this.isScaled ? this.vwr.getScalePixelsPerAngstrom$Z(false) * 10000.0 : 0);
}, p$1);

Clazz.newMeth(C$, 'setPymolLabel$I$org_jmol_modelset_Text$S', function (i, t, format) {
if (t == null ) return;
var label=t.text;
var atom=this.atoms[i];
p$1.addString$org_jmol_modelset_Atom$I$S$S.apply(this, [atom, i, label, format == null  ? $I$(13).rep$S$S$S(label, "%", "%%") : format]);
atom.setShapeVisibility$I$Z(this.vf, true);
if (t.colix >= 0) p$1.setLabelColix$I$H$B.apply(this, [i, t.colix, $I$(5).UNKNOWN.id]);
p$1.setFont$I$B.apply(this, [i, t.font.fid]);
this.putLabel$I$org_jmol_modelset_Text(i, t);
}, p$1);

Clazz.newMeth(C$, 'setLabel$org_jmol_modelset_LabelTokenAA$S$I$Z', function (temp, strLabel, i, doAll) {
var atom=this.atoms[i];
var tokens=temp[0];
if (tokens == null ) tokens=temp[0]=$I$(1).compile$org_jmol_viewer_Viewer$S$C$java_util_Map(this.vwr, strLabel, "\u0000", null);
var label=(tokens == null  ? null : $I$(1).formatLabelAtomArray$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_LabelTokenA$C$IA$javajs_util_P3(this.vwr, atom, tokens, "\u0000", null, this.ptTemp));
var isNew=p$1.addString$org_jmol_modelset_Atom$I$S$S.apply(this, [atom, i, label, strLabel]);
doAll|=isNew || label == null  ;
var text=this.getLabel$I(i);
if (this.isScaled && doAll ) {
text=$I$(7).newLabel$org_jmol_viewer_Viewer$org_jmol_util_Font$S$H$H$I$F(this.vwr, null, label, 0, 0, 0, this.scalePixelsPerMicron);
this.putLabel$I$org_jmol_modelset_Text(i, text);
} else if (text != null  && label != null  ) {
text.setText$S(label);
text.textUnformatted=strLabel;
}if (!doAll) return;
if (this.defaultOffset != $I$(4).LABEL_DEFAULT_OFFSET) p$1.setOffsets$I$I.apply(this, [i, this.defaultOffset]);
if (this.defaultAlignment != 4) p$1.setHorizAlignment$I$I.apply(this, [i, this.defaultAlignment]);
if ((this.defaultZPos & 32) != 0) p$1.setZPos$I$I$Z.apply(this, [i, 32, true]);
 else if ((this.defaultZPos & 16) != 0) p$1.setZPos$I$I$Z.apply(this, [i, 16, true]);
if (this.defaultPointer != 0) p$1.setPointer$I$I.apply(this, [i, this.defaultPointer]);
if (this.defaultColix != 0 || this.defaultPaletteID != 0 ) p$1.setLabelColix$I$H$B.apply(this, [i, this.defaultColix, this.defaultPaletteID]);
if (this.defaultBgcolix != 0) p$1.setBgcolix$I$H.apply(this, [i, this.defaultBgcolix]);
if (this.defaultFontId != this.zeroFontId) p$1.setFont$I$B.apply(this, [i, this.defaultFontId]);
}, p$1);

Clazz.newMeth(C$, 'addString$org_jmol_modelset_Atom$I$S$S', function (atom, i, label, strLabel) {
atom.setShapeVisibility$I$Z(this.vf, label != null );
var notNull=(strLabel != null );
var isNew=(this.strings[i] == null );
this.strings[i]=label;
this.formats[i]=(notNull && strLabel.indexOf$S("%{") >= 0  ? label : strLabel);
this.bsSizeSet.setBitTo$I$Z(i, notNull);
return isNew;
}, p$1);

Clazz.newMeth(C$, 'getProperty$S$I', function (property, index) {
if (property.equals$O("offsets")) return this.offsets;
if (property.equals$O("label")) return (this.strings != null  && index < this.strings.length  && this.strings[index] != null   ? this.strings[index] : "");
return null;
});

Clazz.newMeth(C$, 'putLabel$I$org_jmol_modelset_Text', function (i, text) {
if (text == null ) this.atomLabels.remove$O(Integer.valueOf$I(i));
 else {
this.atomLabels.put$O$O(Integer.valueOf$I(i), text);
text.textUnformatted=this.formats[i];
}});

Clazz.newMeth(C$, 'getLabel$I', function (i) {
return this.atomLabels.get$O(Integer.valueOf$I(i));
});

Clazz.newMeth(C$, 'putBox$I$FA', function (i, boxXY) {
if (this.labelBoxes == null ) this.labelBoxes=Clazz.new_($I$(2,1));
this.labelBoxes.put$O$O(Integer.valueOf$I(i), boxXY);
});

Clazz.newMeth(C$, 'getBox$I', function (i) {
if (this.labelBoxes == null ) return null;
return this.labelBoxes.get$O(Integer.valueOf$I(i));
});

Clazz.newMeth(C$, 'setLabelColix$I$H$B', function (i, colix, pid) {
this.setColixAndPalette$H$B$I(colix, pid, i);
var text;
if (this.colixes != null  && ((text=this.getLabel$I(i)) != null ) ) text.colix=this.colixes[i];
}, p$1);

Clazz.newMeth(C$, 'setBgcolix$I$H', function (i, bgcolix) {
this.bgcolixes[i]=bgcolix;
this.bsBgColixSet.setBitTo$I$Z(i, bgcolix != 0);
var text=this.getLabel$I(i);
if (text != null ) text.bgcolix=bgcolix;
}, p$1);

Clazz.newMeth(C$, 'setOffsets$I$I', function (i, offset) {
if (this.offsets == null  || i >= this.offsets.length ) {
if (offset == $I$(4).LABEL_DEFAULT_OFFSET) return;
this.offsets=$I$(10).ensureLengthI$IA$I(this.offsets, this.ac);
}this.offsets[i]=(this.offsets[i] & 63) | offset;
var text=this.getLabel$I(i);
if (text != null ) text.setOffset$I(offset);
}, p$1);

Clazz.newMeth(C$, 'setHorizAlignment$I$I', function (i, hAlign) {
if (this.offsets == null  || i >= this.offsets.length ) {
switch (hAlign) {
case 0:
case 4:
return;
}
this.offsets=$I$(10).ensureLengthI$IA$I(this.offsets, this.ac);
}if (hAlign == 0) hAlign=4;
this.offsets[i]=$I$(4).setHorizAlignment$I$I(this.offsets[i], hAlign);
var text=this.getLabel$I(i);
if (text != null ) text.setAlignment$I(hAlign);
}, p$1);

Clazz.newMeth(C$, 'setPointer$I$I', function (i, pointer) {
if (this.offsets == null  || i >= this.offsets.length ) {
if (pointer == 0) return;
this.offsets=$I$(10).ensureLengthI$IA$I(this.offsets, this.ac);
}this.offsets[i]=$I$(4).setPointer$I$I(this.offsets[i], pointer);
var text=this.getLabel$I(i);
if (text != null ) text.pointer=pointer;
}, p$1);

Clazz.newMeth(C$, 'setZPos$I$I$Z', function (i, flag, TF) {
if (this.offsets == null  || i >= this.offsets.length ) {
if (!TF) return;
this.offsets=$I$(10).ensureLengthI$IA$I(this.offsets, this.ac);
}this.offsets[i]=$I$(4).setZPosition$I$I(this.offsets[i], TF ? flag : 0);
}, p$1);

Clazz.newMeth(C$, 'setFont$I$B', function (i, fid) {
if (this.fids == null  || i >= this.fids.length ) {
if (fid == this.zeroFontId) return;
this.fids=$I$(10).ensureLengthByte$BA$I(this.fids, this.ac);
}this.fids[i]=fid;
this.bsFontSet.set$I(i);
var text=this.getLabel$I(i);
if (text != null ) {
text.setFontFromFid$B(fid);
}}, p$1);

Clazz.newMeth(C$, 'setAtomClickability$', function () {
if (this.strings == null ) return;
for (var i=this.strings.length; --i >= 0; ) {
var label=this.strings[i];
if (label != null  && this.ms.at.length > i  && !this.ms.isAtomHidden$I(i) ) this.ms.at[i].setClickable$I(this.vf);
}
});

Clazz.newMeth(C$, 'checkObjectClicked$I$I$I$javajs_util_BS$Z', function (x, y, modifiers, bsVisible, drawPicking) {
if (!p$1.isPickingMode.apply(this, [])) return null;
var iAtom=p$1.findNearestLabel$I$I.apply(this, [x, y]);
if (iAtom < 0) return null;
var map=Clazz.new_($I$(2,1));
map.put$O$O("type", "label");
map.put$O$O("atomIndex", Integer.valueOf$I(iAtom));
this.lastPicked=iAtom;
return map;
});

Clazz.newMeth(C$, 'checkObjectDragged$I$I$I$I$I$javajs_util_BS', function (prevX, prevY, x, y, dragAction, bsVisible) {
if (!p$1.isPickingMode.apply(this, [])) return false;
if (prevX == -2147483648) {
var iAtom=p$1.findNearestLabel$I$I.apply(this, [x, y]);
if (iAtom >= 0) {
this.pickedAtom=iAtom;
this.lastPicked=this.pickedAtom;
this.vwr.acm.setDragAtomIndex$I(iAtom);
this.pickedX=x;
this.pickedY=y;
this.pickedOffset=(this.offsets == null  || this.pickedAtom >= this.offsets.length  ? $I$(4).LABEL_DEFAULT_OFFSET : this.offsets[this.pickedAtom]);
return true;
}return false;
}if (prevX == 2147483647) this.pickedAtom=-1;
if (this.pickedAtom < 0) return false;
p$1.move2D$I$I$I.apply(this, [this.pickedAtom, x, y]);
return true;
});

Clazz.newMeth(C$, 'findNearestLabel$I$I', function (x, y) {
if (this.labelBoxes == null ) return -1;
var dmin=3.4028235E38;
var imin=-1;
var zmin=3.4028235E38;
var afactor=(this.vwr.antialiased ? 2 : 1);
for (var entry, $entry = this.labelBoxes.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (!this.atoms[entry.getKey$().intValue$()].isVisible$I(this.vf | 9)) continue;
var boxXY=entry.getValue$();
var dx=(x - boxXY[0]) * afactor;
var dy=(y - boxXY[1]) * afactor;
if (dx <= 0  || dy <= 0   || dx >= boxXY[2]   || dy >= boxXY[3]   || boxXY[4] > zmin  ) continue;
zmin=boxXY[4];
var d=Math.min(Math.abs(dx - boxXY[2] / 2), Math.abs(dy - boxXY[3] / 2));
if (d <= dmin ) {
dmin=d;
imin=entry.getKey$().intValue$();
}}
return imin;
}, p$1);

Clazz.newMeth(C$, 'move2D$I$I$I', function (pickedAtom, x, y) {
var xOffset=$I$(4).getXOffset$I(this.pickedOffset);
var yOffset=$I$(4).getYOffset$I(this.pickedOffset);
xOffset+=x - this.pickedX;
yOffset-=y - this.pickedY;
var offset=$I$(4).getOffset$I$I$Z(xOffset, yOffset, true);
p$1.setOffsets$I$I.apply(this, [pickedAtom, offset]);
}, p$1);

Clazz.newMeth(C$, 'getColix2$I$org_jmol_modelset_Atom$Z', function (i, atom, isBg) {
var colix;
if (isBg) {
colix=(this.bgcolixes == null  || i >= this.bgcolixes.length ) ? ($s$[0] = 0, $s$[0]) : this.bgcolixes[i];
} else {
colix=(this.colixes == null  || i >= this.colixes.length ) ? ($s$[0] = 0, $s$[0]) : this.colixes[i];
colix=$I$(6).getColixInherited$H$H(colix, atom.colixAtom);
if ($I$(6).isColixTranslucent$H(colix)) colix=$I$(6).getColixTranslucent3$H$Z$F(colix, false, 0);
}return colix;
});

C$.$static$=function(){C$.$static$=0;
C$.nullToken=Clazz.array($I$(1), -2, [null]);
};
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
