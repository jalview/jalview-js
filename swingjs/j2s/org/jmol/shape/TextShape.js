(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[[0,'java.util.Hashtable','javajs.util.PT','org.jmol.util.Logger','org.jmol.util.C','javajs.util.P3']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TextShape", null, 'org.jmol.shape.Shape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.objects=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['isHover','isAll'],'F',['currentTranslucentLevel','currentBgTranslucentLevel'],'S',['thisID'],'O',['objects','java.util.Map','currentObject','org.jmol.modelset.Text','currentFont','org.jmol.util.Font','currentColor','java.lang.Object','+currentBgColor']]]

Clazz.newMeth(C$, 'setPropTS$S$O$javajs_util_BS', function (propertyName, value, bsSelected) {
if ("text" == propertyName) {
var text=value;
if (this.currentObject != null ) {
this.currentObject.setText$S(text);
} else if (this.isAll) {
for (var t, $t = this.objects.values$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) t.setText$S(text);

}return;
}if ("font" == propertyName) {
this.currentFont=value;
if (this.currentObject != null ) {
this.currentObject.setFont$org_jmol_util_Font$Z(this.currentFont, true);
this.currentObject.setFontScale$F(0);
} else if (this.isAll) {
for (var t, $t = this.objects.values$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) t.setFont$org_jmol_util_Font$Z(this.currentFont, true);

}return;
}if ("allOff" == propertyName) {
this.currentObject=null;
this.isAll=true;
this.objects=Clazz.new_($I$(1,1));
return;
}if ("delete" == propertyName) {
if (this.currentObject != null ) {
this.objects.remove$O(this.currentObject.target);
this.currentObject=null;
} else if (this.isAll || this.thisID != null  ) {
var e=this.objects.values$().iterator$();
while (e.hasNext$()){
var text=e.next$();
if (this.isAll || (function(a,f){return f.apply(null,a)})([text.target.toUpperCase$(), this.thisID, true, true],$I$(2).isMatch$S$S$Z$Z) ) {
e.remove$();
}}
}return;
}if ("off" == propertyName) {
if (this.isAll) {
this.objects=Clazz.new_($I$(1,1));
this.isAll=false;
this.currentObject=null;
}if (this.currentObject == null ) {
return;
}this.objects.remove$O(this.currentObject.target);
this.currentObject=null;
return;
}if ("model" == propertyName) {
var modelIndex=(value).intValue$();
if (this.currentObject != null ) {
this.currentObject.modelIndex=modelIndex;
} else if (this.isAll) {
for (var t, $t = this.objects.values$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) t.modelIndex=modelIndex;

}return;
}if ("align" == propertyName) {
var align=value;
if (this.currentObject != null ) {
if (!this.currentObject.setAlignmentLCR$S(align)) $I$(3).error$S("unrecognized align:" + align);
} else if (this.isAll) {
for (var obj, $obj = this.objects.values$().iterator$(); $obj.hasNext$()&&((obj=($obj.next$())),1);) obj.setAlignmentLCR$S(align);

}return;
}if ("bgcolor" == propertyName) {
this.currentBgColor=value;
if (this.currentObject != null ) {
this.currentObject.bgcolix=$I$(4).getColixO$O(value);
} else if (this.isAll) {
var e=this.objects.values$().iterator$();
while (e.hasNext$()){
e.next$().bgcolix=$I$(4).getColixO$O(value);
}
}return;
}if ("color" == propertyName) {
this.currentColor=value;
if (this.currentObject != null ) {
this.currentObject.colix=$I$(4).getColixO$O(value);
} else if (this.isAll || this.thisID != null  ) {
var e=this.objects.values$().iterator$();
while (e.hasNext$()){
var text=e.next$();
if (this.isAll || (function(a,f){return f.apply(null,a)})([text.target.toUpperCase$(), this.thisID, true, true],$I$(2).isMatch$S$S$Z$Z) ) {
text.colix=$I$(4).getColixO$O(value);
}}
}return;
}if ("target" == propertyName) {
var target=value;
this.isAll=target.equals$O("all");
if (this.isAll || target.equals$O("none") ) {
this.currentObject=null;
}return;
}var isBackground;
if ((isBackground=("bgtranslucency" == propertyName)) || "translucency" == propertyName ) {
var isTranslucent=("translucent" === value );
if (isBackground) this.currentBgTranslucentLevel=(isTranslucent ? this.translucentLevel : 0);
 else this.currentTranslucentLevel=(isTranslucent ? this.translucentLevel : 0);
if (this.currentObject != null ) {
this.currentObject.setTranslucent$F$Z(this.translucentLevel, isBackground);
} else if (this.isAll) {
var e=this.objects.values$().iterator$();
while (e.hasNext$()){
e.next$().setTranslucent$F$Z(this.translucentLevel, isBackground);
}
}return;
}if (propertyName == "deleteModelAtoms") {
var modelIndex=((value)[2])[0];
var e=this.objects.values$().iterator$();
while (e.hasNext$()){
var text=e.next$();
if (text.modelIndex == modelIndex) {
e.remove$();
} else if (text.modelIndex > modelIndex) {
text.modelIndex--;
}}
return;
}this.setPropS$S$O$javajs_util_BS(propertyName, value, bsSelected);
});

Clazz.newMeth(C$, 'getShapeState$', function () {
return null;
});

Clazz.newMeth(C$, 'initModelSet$', function () {
this.currentObject=null;
this.isAll=false;
});

Clazz.newMeth(C$, 'setModelVisibilityFlags$javajs_util_BS', function (bsModels) {
if (!this.isHover) for (var t, $t = this.objects.values$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) t.visible=(t.modelIndex < 0 || bsModels.get$I(t.modelIndex) );

});

Clazz.newMeth(C$, 'checkObjectClicked$I$I$I$javajs_util_BS$Z', function (x, y, modifiers, bsVisible, drawPicking) {
if (this.isHover || modifiers == 0 ) return null;
var isAntialiased=this.vwr.antialiased;
for (var obj, $obj = this.objects.values$().iterator$(); $obj.hasNext$()&&((obj=($obj.next$())),1);) {
if (obj.checkObjectClicked$Z$I$I$javajs_util_BS(isAntialiased, x, y, bsVisible)) {
if (obj.script != null ) this.vwr.evalStringQuiet$S(obj.script);
var map=Clazz.new_($I$(1,1));
map.put$O$O("pt", (obj.xyz == null  ? Clazz.new_($I$(5,1)) : obj.xyz));
var modelIndex=obj.modelIndex;
if (modelIndex < 0) modelIndex=0;
map.put$O$O("modelIndex", Integer.valueOf$I(modelIndex));
map.put$O$O("model", this.vwr.getModelNumberDotted$I(modelIndex));
map.put$O$O("id", obj.target);
map.put$O$O("type", "echo");
return map;
}}
return null;
});

Clazz.newMeth(C$, 'checkObjectHovered$I$I$javajs_util_BS', function (x, y, bsVisible) {
if (this.isHover) return false;
var haveScripts=false;
var isAntialiased=this.vwr.antialiased;
for (var obj, $obj = this.objects.values$().iterator$(); $obj.hasNext$()&&((obj=($obj.next$())),1);) {
if (obj.script != null ) {
haveScripts=true;
if (obj.checkObjectClicked$Z$I$I$javajs_util_BS(isAntialiased, x, y, bsVisible)) {
this.vwr.setCursor$I(12);
return true;
}}}
if (haveScripts) this.vwr.setCursor$I(0);
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
