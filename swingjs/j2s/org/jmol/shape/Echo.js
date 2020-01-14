(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[[0,'javajs.util.PT','org.jmol.modelset.Text','org.jmol.util.C','java.util.Hashtable','javajs.util.Lst']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Echo", null, 'org.jmol.shape.TextShape');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initShape$', function () {
this.setProperty$S$O$javajs_util_BS("target", "top", null);
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("scalereference" == propertyName) {
if (this.currentObject != null ) {
var val=(value).floatValue$();
this.currentObject.setScalePixelsPerMicron$F(val == 0  ? 0 : 10000.0 / val);
}return;
}if ("point" == propertyName) {
if (this.currentObject != null ) {
var t=this.currentObject;
t.pointerPt=(value == null  ? null : value);
t.pointer=(value == null  ? 0 : 1);
}return;
}if ("xyz" == propertyName) {
if (this.currentObject != null  && this.vwr.getBoolean$I(603979845) ) this.currentObject.setScalePixelsPerMicron$F(this.vwr.getScalePixelsPerAngstrom$Z(false) * 10000.0);
}if ("scale" == propertyName) {
if (this.currentObject != null ) {
(this.currentObject).setScale$F((value).floatValue$());
} else if (this.isAll) {
for (var t, $t = this.objects.values$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) t.setScale$F((value).floatValue$());

}return;
}if ("image" == propertyName) {
if (this.currentObject != null ) {
(this.currentObject).setImage$O(value);
} else if (this.isAll) {
for (var t, $t = this.objects.values$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) t.setImage$O(value);

}return;
}if ("thisID" == propertyName) {
var target=value;
this.currentObject=this.objects.get$O(target);
if (this.currentObject == null  && $I$(1).isWild$S(target) ) this.thisID=target.toUpperCase$();
return;
}if ("hidden" == propertyName) {
var isHidden=(value).booleanValue$();
if (this.currentObject != null ) {
(this.currentObject).hidden=isHidden;
} else if (this.isAll || this.thisID != null  ) {
for (var t, $t = this.objects.values$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) if (this.isAll || $I$(1).isMatch$S$S$Z$Z(t.target.toUpperCase$(), this.thisID, true, true) ) t.hidden=isHidden;

}return;
}if ("script" == propertyName) {
if (this.currentObject != null ) this.currentObject.setScript$S(value);
return;
}if ("xpos" == propertyName) {
if (this.currentObject != null ) this.currentObject.setMovableX$I((value).intValue$());
return;
}if ("ypos" == propertyName) {
if (this.currentObject != null ) this.currentObject.setMovableY$I((value).intValue$());
return;
}if ("%xpos" == propertyName) {
if (this.currentObject != null ) this.currentObject.setMovableXPercent$I((value).intValue$());
return;
}if ("%ypos" == propertyName) {
if (this.currentObject != null ) this.currentObject.setMovableYPercent$I((value).intValue$());
return;
}if ("%zpos" == propertyName) {
if (this.currentObject != null ) this.currentObject.setMovableZPercent$I((value).intValue$());
return;
}if ("xypos" == propertyName) {
if (this.currentObject != null ) {
var pt=value;
this.currentObject.setXYZ$javajs_util_P3$Z(null, true);
if (pt.z == 3.4028235E38 ) {
this.currentObject.setMovableX$I((pt.x|0));
this.currentObject.setMovableY$I((pt.y|0));
} else {
this.currentObject.setMovableXPercent$I((pt.x|0));
this.currentObject.setMovableYPercent$I((pt.y|0));
}}return;
}if ("xyz" == propertyName) {
if (this.currentObject != null ) {
this.currentObject.setXYZ$javajs_util_P3$Z(value, true);
}return;
}if ("offset" == propertyName) {
if (this.currentObject != null ) {
this.currentObject.pymolOffset=value;
}return;
}if ("target" == propertyName) {
this.thisID=null;
var target=(value).intern$().toLowerCase$();
if (target != "none" && target != "all" ) {
this.isAll=false;
var text=this.objects.get$O(target);
if (text == null ) {
var valign=3;
var halign=4;
if ("top" == target) {
valign=0;
halign=8;
} else if ("middle" == target) {
valign=2;
halign=8;
} else if ("bottom" == target) {
valign=1;
} else if ("error" == target) {
valign=0;
}text=$I$(2).newEcho$org_jmol_viewer_Viewer$javajs_awt_Font$S$H$I$I$F(this.vwr, this.vwr.gdata.getFont3DFS$S$F("Serif", 20), target, 10, valign, halign, 0);
text.adjustForWindow=true;
this.objects.put$TK$TV(target, text);
if (this.currentFont != null ) text.setFont$javajs_awt_Font$Z(this.currentFont, true);
if (this.currentColor != null ) text.colix=$I$(3).getColixO$O(this.currentColor);
if (this.currentBgColor != null ) text.bgcolix=$I$(3).getColixO$O(this.currentBgColor);
if (this.currentTranslucentLevel != 0 ) text.setTranslucent$F$Z(this.currentTranslucentLevel, false);
if (this.currentBgTranslucentLevel != 0 ) text.setTranslucent$F$Z(this.currentBgTranslucentLevel, true);
}this.currentObject=text;
return;
}}this.setPropTS$S$O$javajs_util_BS(propertyName, value, null);
});

Clazz.newMeth(C$, 'getPropertyData$S$OA', function (property, data) {
if ("currentTarget" == property) {
return (this.currentObject != null  && (data[0]=this.currentObject.target) != null  );
}if (property == "checkID") {
var key=(data[0]).toUpperCase$();
var isWild=$I$(1).isWild$S(key);
for (var t, $t = this.objects.values$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
var id=t.target;
if (id.equalsIgnoreCase$S(key) || isWild && $I$(1).isMatch$S$S$Z$Z(id.toUpperCase$(), key, true, true)  ) {
data[1]=id;
return true;
}}
return false;
}return this.getPropShape$S$OA(property, data);
});

Clazz.newMeth(C$, 'getShapeDetail$', function () {
var lst=Clazz.new_($I$(4));
for (var e, $e = this.objects.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var info=Clazz.new_($I$(4));
var t=e.getValue$();
var name=e.getKey$();
info.put$TK$TV("boxXY", t.boxXY);
if (t.xyz != null ) info.put$TK$TV("xyz", t.xyz);
var o=t.image;
if (o == null ) {
info.put$TK$TV("text", t.text == null  ? "" : t.text);
} else {
info.put$TK$TV("imageFile", t.text);
info.put$TK$TV("imageWidth", Integer.valueOf$I(this.vwr.apiPlatform.getImageWidth$O(o)));
info.put$TK$TV("imageHeight", Integer.valueOf$I(this.vwr.apiPlatform.getImageHeight$O(o)));
}lst.put$TK$TV(name, info);
}
var lst2=Clazz.new_($I$(5));
lst2.addLast$TV(lst);
return lst2;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
