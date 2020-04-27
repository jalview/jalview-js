(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.util.HashMap','java.util.Random','java.awt.Color']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColorUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['myColours','java.util.Map']]]

Clazz.newMeth(C$, 'generateRandomColor$java_awt_Color', function (mix) {
var random=Clazz.new_($I$(2,1));
var red=random.nextInt$I(256);
var green=random.nextInt$I(256);
var blue=random.nextInt$I(256);
if (mix != null ) {
red=((red + mix.getRed$())/2|0);
green=((green + mix.getGreen$())/2|0);
blue=((blue + mix.getBlue$())/2|0);
}var color=Clazz.new_($I$(3,1).c$$I$I$I,[red, green, blue]);
return color;
}, 1);

Clazz.newMeth(C$, 'toTkCode$java_awt_Color', function (colour) {
var colstring="#" + ((colour.getRed$() < 16) ? "0" : "") + Integer.toHexString$I(colour.getRed$()) + ((colour.getGreen$() < 16) ? "0" : "") + Integer.toHexString$I(colour.getGreen$()) + ((colour.getBlue$() < 16) ? "0" : "") + Integer.toHexString$I(colour.getBlue$()) ;
return colstring;
}, 1);

Clazz.newMeth(C$, 'darkerThan$java_awt_Color', function (col) {
return col == null  ? null : col.darker$().darker$().darker$();
}, 1);

Clazz.newMeth(C$, 'brighterThan$java_awt_Color', function (col) {
return col == null  ? null : col.brighter$().brighter$().brighter$();
}, 1);

Clazz.newMeth(C$, 'getGraduatedColour$F$F$java_awt_Color$F$java_awt_Color', function (value, minValue, minColour, maxValue, maxColour) {
if (minValue == maxValue ) {
return minColour;
}if (value < minValue ) {
value=minValue;
}if (value > maxValue ) {
value=maxValue;
}var prop=(value - minValue) / (maxValue - minValue);
var r=minColour.getRed$() + prop * (maxColour.getRed$() - minColour.getRed$());
var g=minColour.getGreen$() + prop * (maxColour.getGreen$() - minColour.getGreen$());
var b=minColour.getBlue$() + prop * (maxColour.getBlue$() - minColour.getBlue$());
return Clazz.new_($I$(3,1).c$$F$F$F,[r / 255, g / 255, b / 255]);
}, 1);

Clazz.newMeth(C$, 'bleachColour$java_awt_Color$F', function (colour, bleachFactor) {
if (bleachFactor >= 1.0 ) {
return $I$(3).WHITE;
}if (bleachFactor <= -1.0 ) {
return $I$(3).BLACK;
}if (bleachFactor == 0.0 ) {
return colour;
}var red=colour.getRed$();
var green=colour.getGreen$();
var blue=colour.getBlue$();
if (bleachFactor > 0 ) {
red=(red+((255 - red) * bleachFactor)|0);
green=(green+((255 - green) * bleachFactor)|0);
blue=(blue+((255 - blue) * bleachFactor)|0);
return Clazz.new_($I$(3,1).c$$I$I$I,[red, green, blue]);
} else {
var factor=1 + bleachFactor;
red=(red*(factor)|0);
green=(green*(factor)|0);
blue=(blue*(factor)|0);
return Clazz.new_($I$(3,1).c$$I$I$I,[red, green, blue]);
}}, 1);

Clazz.newMeth(C$, 'parseColourString$S', function (colour) {
if (colour == null ) {
return null;
}colour=colour.trim$();
var col=null;
try {
var value=Integer.parseInt$S$I(colour, 16);
col=Clazz.new_($I$(3,1).c$$I,[value]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
if (col == null ) {
col=C$.getAWTColorFromName$S(colour);
}if (col == null ) {
try {
var tokens=colour.split$S(",");
if (tokens.length == 3) {
var r=Integer.parseInt$S(tokens[0].trim$());
var g=Integer.parseInt$S(tokens[1].trim$());
var b=Integer.parseInt$S(tokens[2].trim$());
col=Clazz.new_($I$(3,1).c$$I$I$I,[r, g, b]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}return col;
}, 1);

Clazz.newMeth(C$, 'createColourFromName$S', function (name) {
if (name == null ) {
return $I$(3).white;
}if (C$.myColours.containsKey$O(name)) {
return C$.myColours.get$O(name);
}var lsize=name.length$();
var start=0;
var end=(lsize/3|0);
var rgbOffset=Math.abs(name.hashCode$() % 10) * 15;
var r=Math.abs(name.substring$I$I(start, end).hashCode$() + rgbOffset) % 210 + 20;
start=end;
end+=(lsize/3|0);
if (end > lsize) {
end=lsize;
}var g=Math.abs(name.substring$I$I(start, end).hashCode$() + rgbOffset) % 210 + 20;
var b=Math.abs(name.substring$I(end).hashCode$() + rgbOffset) % 210 + 20;
var color=Clazz.new_($I$(3,1).c$$I$I$I,[r, g, b]);
if (C$.myColours.size$() < 1729) {
C$.myColours.put$O$O(name, color);
}return color;
}, 1);

Clazz.newMeth(C$, 'getAWTColorFromName$S', function (name) {
if (name == null ) {
return null;
}var col=null;
name=name.toLowerCase$();
switch (name) {
case "black":
col=$I$(3).black;
break;
case "blue":
col=$I$(3).blue;
break;
case "cyan":
col=$I$(3).cyan;
break;
case "darkgray":
col=$I$(3).darkGray;
break;
case "gray":
col=$I$(3).gray;
break;
case "green":
col=$I$(3).green;
break;
case "lightgray":
col=$I$(3).lightGray;
break;
case "magenta":
col=$I$(3).magenta;
break;
case "orange":
col=$I$(3).orange;
break;
case "pink":
col=$I$(3).pink;
break;
case "red":
col=$I$(3).red;
break;
case "white":
col=$I$(3).white;
break;
case "yellow":
col=$I$(3).yellow;
break;
}
return col;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.myColours=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
