(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'jalview.schemes.ResidueProperties','java.awt.Color','jalview.util.ColorUtils','java.util.StringTokenizer','java.util.Locale','java.util.HashMap','java.util.ArrayList','StringBuilder','java.util.Collections','jalview.util.StringUtils']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UserColourScheme", null, 'jalview.schemes.ResidueColourScheme');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['schemeName'],'O',['lowerCaseColours','java.awt.Color[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$IA.apply(this,[$I$(1).aaIndex]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_ColorA',  function (newColors) {
;C$.superclazz.c$$IA.apply(this,[$I$(1).aaIndex]);C$.$init$.apply(this);
this.colors=newColors;
}, 1);

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI',  function (view, sg) {
return Clazz.new_(C$.c$$jalview_schemes_UserColourScheme,[this]);
});

Clazz.newMeth(C$, 'c$$jalview_schemes_UserColourScheme',  function (from) {
C$.c$$java_awt_ColorA.apply(this, [from.colors]);
this.schemeName=from.schemeName;
if (from.lowerCaseColours != null ) {
this.lowerCaseColours=Clazz.array($I$(2), [from.lowerCaseColours.length]);
System.arraycopy$O$I$O$I$I(from.lowerCaseColours, 0, this.lowerCaseColours, 0, from.lowerCaseColours.length);
}}, 1);

Clazz.newMeth(C$, 'c$$S',  function (colour) {
;C$.superclazz.c$$IA.apply(this,[$I$(1).aaIndex]);C$.$init$.apply(this);
if (colour.contains$CharSequence("=")) {
this.parseAppletParameter$S(colour);
return;
}var col=$I$(3).parseColourString$S(colour);
if (col == null ) {
System.out.println$S("Making colour from name: " + colour);
col=$I$(3).createColourFromName$S(colour);
}this.setAll$java_awt_Color(col);
this.schemeName=colour;
}, 1);

Clazz.newMeth(C$, 'setAll$java_awt_Color',  function (col) {
if (this.symbolIndex == null ) {
return;
}var max=0;
for (var index, $index = 0, $$index = this.symbolIndex; $index<$$index.length&&((index=($$index[$index])),1);$index++) {
max=Math.max(max, index);
}
this.colors=Clazz.array($I$(2), [max + 1]);
for (var i=0; i <= max; i++) {
this.colors[i]=col;
}
});

Clazz.newMeth(C$, 'getColours$',  function () {
return this.colors;
});

Clazz.newMeth(C$, 'getLowerCaseColours$',  function () {
return this.lowerCaseColours;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.schemeName=name;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.schemeName;
});

Clazz.newMeth(C$, 'parseAppletParameter$S',  function (paramValue) {
this.setAll$java_awt_Color($I$(2).white);
var st=Clazz.new_($I$(4,1).c$$S$S,[paramValue, ";"]);
var st2;
var token=null;
var colour;
var residues;
try {
while (st.hasMoreElements$()){
token=st.nextToken$().trim$();
residues=token.substring$I$I(0, token.indexOf$S("="));
colour=token.substring$I(token.indexOf$S("=") + 1);
st2=Clazz.new_($I$(4,1).c$$S$S,[residues, " ,"]);
while (st2.hasMoreTokens$()){
var residue=st2.nextToken$();
var colIndex=$I$(1).aaIndex[(residue.charCodeAt$I(0))];
if (colIndex == -1) {
continue;
}if (residue.equalsIgnoreCase$S("lowerCase")) {
if (this.lowerCaseColours == null ) {
this.lowerCaseColours=Clazz.array($I$(2), [this.colors.length]);
}for (var i=0; i < this.lowerCaseColours.length; i++) {
if (this.lowerCaseColours[i] == null ) {
this.lowerCaseColours[i]=$I$(3).parseColourString$S(colour);
}}
continue;
}if (residue.equals$O(residue.toLowerCase$java_util_Locale($I$(5).ROOT))) {
if (this.lowerCaseColours == null ) {
this.lowerCaseColours=Clazz.array($I$(2), [this.colors.length]);
}this.lowerCaseColours[colIndex]=$I$(3).parseColourString$S(colour);
} else {
this.colors[colIndex]=$I$(3).parseColourString$S(colour);
}}
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("Error parsing userDefinedColours:\n" + token + "\n" + ex );
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'setLowerCaseColours$java_awt_ColorA',  function (lcolours) {
this.lowerCaseColours=lcolours;
});

Clazz.newMeth(C$, 'findColour$C',  function (c) {
if ("a" <= c && c <= "z"  && this.lowerCaseColours != null  ) {
var colour=this.lowerCaseColours[this.symbolIndex[c.$c()]];
if (colour != null ) {
return colour;
}}return C$.superclazz.prototype.findColour$C.apply(this, [c]);
});

Clazz.newMeth(C$, 'getSchemeName$',  function () {
if (this.schemeName != null  && this.schemeName.length$() > 0 ) {
return this.schemeName;
}return "User Defined";
});

Clazz.newMeth(C$, 'toAppletParameter$',  function () {
var colours=Clazz.new_($I$(6,1));
for (var symbol="A"; symbol <= "Z"; symbol=String.fromCharCode(symbol.$c()+1)) {
var residue=String.valueOf$C(symbol);
var index=this.symbolIndex[symbol.$c()];
var c=this.colors[index];
if (c != null  && !c.equals$O($I$(2).white) ) {
if (colours.get$O(c) == null ) {
colours.put$O$O(c, Clazz.new_($I$(7,1)));
}colours.get$O(c).add$O(residue);
}if (this.lowerCaseColours != null ) {
c=this.lowerCaseColours[index];
if (c != null  && !c.equals$O($I$(2).white) ) {
residue=residue.toLowerCase$java_util_Locale($I$(5).ROOT);
if (colours.get$O(c) == null ) {
colours.put$O$O(c, Clazz.new_($I$(7,1)));
}colours.get$O(c).add$O(residue);
}}}
var residueColours=Clazz.new_($I$(7,1));
for (var cols, $cols = colours.entrySet$().iterator$(); $cols.hasNext$()&&((cols=($cols.next$())),1);) {
var first=true;
var sb=Clazz.new_($I$(8,1));
for (var residue, $residue = cols.getValue$().iterator$(); $residue.hasNext$()&&((residue=($residue.next$())),1);) {
if (!first) {
sb.append$S(",");
}sb.append$S(residue);
first=false;
}
sb.append$S("=");
var hexString=Integer.toHexString$I(cols.getKey$().getRGB$()).substring$I(2);
sb.append$S(hexString);
residueColours.add$O(sb.toString());
}
$I$(9).sort$java_util_List(residueColours);
return $I$(10).listToDelimitedString$java_util_List$S(residueColours, ";");
});

Clazz.newMeth(C$, 'hasGapColour$',  function () {
return (this.findColour$C(" ") != null );
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
