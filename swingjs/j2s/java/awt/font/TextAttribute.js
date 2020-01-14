(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[[0,'java.util.HashMap','Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TextAttribute", null, ['java.text.AttributedCharacterIterator','.Attribute']);
C$.$instanceMap=null;
C$.FAMILY=null;
C$.WEIGHT=null;
C$.WEIGHT_EXTRA_LIGHT=null;
C$.WEIGHT_LIGHT=null;
C$.WEIGHT_DEMILIGHT=null;
C$.WEIGHT_REGULAR=null;
C$.WEIGHT_SEMIBOLD=null;
C$.WEIGHT_MEDIUM=null;
C$.WEIGHT_DEMIBOLD=null;
C$.WEIGHT_BOLD=null;
C$.WEIGHT_HEAVY=null;
C$.WEIGHT_EXTRABOLD=null;
C$.WEIGHT_ULTRABOLD=null;
C$.WIDTH=null;
C$.WIDTH_CONDENSED=null;
C$.WIDTH_SEMI_CONDENSED=null;
C$.WIDTH_REGULAR=null;
C$.WIDTH_SEMI_EXTENDED=null;
C$.WIDTH_EXTENDED=null;
C$.POSTURE=null;
C$.POSTURE_REGULAR=null;
C$.POSTURE_OBLIQUE=null;
C$.SIZE=null;
C$.TRANSFORM=null;
C$.SUPERSCRIPT=null;
C$.SUPERSCRIPT_SUPER=null;
C$.SUPERSCRIPT_SUB=null;
C$.FONT=null;
C$.CHAR_REPLACEMENT=null;
C$.FOREGROUND=null;
C$.BACKGROUND=null;
C$.UNDERLINE=null;
C$.UNDERLINE_ON=null;
C$.STRIKETHROUGH=null;
C$.STRIKETHROUGH_ON=null;
C$.RUN_DIRECTION=null;
C$.RUN_DIRECTION_LTR=null;
C$.RUN_DIRECTION_RTL=null;
C$.BIDI_EMBEDDING=null;
C$.JUSTIFICATION=null;
C$.JUSTIFICATION_FULL=null;
C$.JUSTIFICATION_NONE=null;
C$.INPUT_METHOD_HIGHLIGHT=null;
C$.INPUT_METHOD_UNDERLINE=null;
C$.UNDERLINE_LOW_ONE_PIXEL=null;
C$.UNDERLINE_LOW_TWO_PIXEL=null;
C$.UNDERLINE_LOW_DOTTED=null;
C$.UNDERLINE_LOW_GRAY=null;
C$.UNDERLINE_LOW_DASHED=null;
C$.SWAP_COLORS=null;
C$.SWAP_COLORS_ON=null;
C$.NUMERIC_SHAPING=null;
C$.KERNING=null;
C$.KERNING_ON=null;
C$.LIGATURES=null;
C$.LIGATURES_ON=null;
C$.TRACKING=null;
C$.TRACKING_TIGHT=null;
C$.TRACKING_LOOSE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.$instanceMap=Clazz.new_($I$(1).c$$I,[29]);
C$.FAMILY=Clazz.new_(C$.c$$S,["family"]);
C$.WEIGHT=Clazz.new_(C$.c$$S,["weight"]);
C$.WEIGHT_EXTRA_LIGHT=Float.valueOf$F(0.5);
C$.WEIGHT_LIGHT=Float.valueOf$F(0.75);
C$.WEIGHT_DEMILIGHT=Float.valueOf$F(0.875);
C$.WEIGHT_REGULAR=Float.valueOf$F(1.0);
C$.WEIGHT_SEMIBOLD=Float.valueOf$F(1.25);
C$.WEIGHT_MEDIUM=Float.valueOf$F(1.5);
C$.WEIGHT_DEMIBOLD=Float.valueOf$F(1.75);
C$.WEIGHT_BOLD=Float.valueOf$F(2.0);
C$.WEIGHT_HEAVY=Float.valueOf$F(2.25);
C$.WEIGHT_EXTRABOLD=Float.valueOf$F(2.5);
C$.WEIGHT_ULTRABOLD=Float.valueOf$F(2.75);
C$.WIDTH=Clazz.new_(C$.c$$S,["width"]);
C$.WIDTH_CONDENSED=Float.valueOf$F(0.75);
C$.WIDTH_SEMI_CONDENSED=Float.valueOf$F(0.875);
C$.WIDTH_REGULAR=Float.valueOf$F(1.0);
C$.WIDTH_SEMI_EXTENDED=Float.valueOf$F(1.25);
C$.WIDTH_EXTENDED=Float.valueOf$F(1.5);
C$.POSTURE=Clazz.new_(C$.c$$S,["posture"]);
C$.POSTURE_REGULAR=Float.valueOf$F(0.0);
C$.POSTURE_OBLIQUE=Float.valueOf$F(0.2);
C$.SIZE=Clazz.new_(C$.c$$S,["size"]);
C$.TRANSFORM=Clazz.new_(C$.c$$S,["transform"]);
C$.SUPERSCRIPT=Clazz.new_(C$.c$$S,["superscript"]);
C$.SUPERSCRIPT_SUPER=Integer.valueOf$I(1);
C$.SUPERSCRIPT_SUB=Integer.valueOf$I(-1);
C$.FONT=Clazz.new_(C$.c$$S,["font"]);
C$.CHAR_REPLACEMENT=Clazz.new_(C$.c$$S,["char_replacement"]);
C$.FOREGROUND=Clazz.new_(C$.c$$S,["foreground"]);
C$.BACKGROUND=Clazz.new_(C$.c$$S,["background"]);
C$.UNDERLINE=Clazz.new_(C$.c$$S,["underline"]);
C$.UNDERLINE_ON=Integer.valueOf$I(0);
C$.STRIKETHROUGH=Clazz.new_(C$.c$$S,["strikethrough"]);
C$.STRIKETHROUGH_ON=$I$(2).TRUE;
C$.RUN_DIRECTION=Clazz.new_(C$.c$$S,["run_direction"]);
C$.RUN_DIRECTION_LTR=$I$(2).FALSE;
C$.RUN_DIRECTION_RTL=$I$(2).TRUE;
C$.BIDI_EMBEDDING=Clazz.new_(C$.c$$S,["bidi_embedding"]);
C$.JUSTIFICATION=Clazz.new_(C$.c$$S,["justification"]);
C$.JUSTIFICATION_FULL=Float.valueOf$F(1.0);
C$.JUSTIFICATION_NONE=Float.valueOf$F(0.0);
C$.INPUT_METHOD_HIGHLIGHT=Clazz.new_(C$.c$$S,["input method highlight"]);
C$.INPUT_METHOD_UNDERLINE=Clazz.new_(C$.c$$S,["input method underline"]);
C$.UNDERLINE_LOW_ONE_PIXEL=Integer.valueOf$I(1);
C$.UNDERLINE_LOW_TWO_PIXEL=Integer.valueOf$I(2);
C$.UNDERLINE_LOW_DOTTED=Integer.valueOf$I(3);
C$.UNDERLINE_LOW_GRAY=Integer.valueOf$I(4);
C$.UNDERLINE_LOW_DASHED=Integer.valueOf$I(5);
C$.SWAP_COLORS=Clazz.new_(C$.c$$S,["swap_colors"]);
C$.SWAP_COLORS_ON=$I$(2).TRUE;
C$.NUMERIC_SHAPING=Clazz.new_(C$.c$$S,["numeric_shaping"]);
C$.KERNING=Clazz.new_(C$.c$$S,["kerning"]);
C$.KERNING_ON=Integer.valueOf$I(1);
C$.LIGATURES=Clazz.new_(C$.c$$S,["ligatures"]);
C$.LIGATURES_ON=Integer.valueOf$I(1);
C$.TRACKING=Clazz.new_(C$.c$$S,["tracking"]);
C$.TRACKING_TIGHT=Float.valueOf$F(-0.04);
C$.TRACKING_LOOSE=Float.valueOf$F(0.04);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.superclazz.c$$S.apply(this, [name]);
C$.$init$.apply(this);
if (this.getClass$() === Clazz.getClass(C$) ) {
C$.$instanceMap.put$TK$TV(name, this);
}}, 1);

Clazz.newMeth(C$, 'readResolve$', function () {
if (this.getClass$() !== Clazz.getClass(C$) ) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["subclass didn\'t correctly implement readResolve"]);
}var instance=C$.$instanceMap.get$O(this.getName$());
if (instance != null ) {
return instance;
} else {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["unknown attribute name"]);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:29 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
