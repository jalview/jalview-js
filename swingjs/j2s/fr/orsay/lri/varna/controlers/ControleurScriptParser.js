(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),I$=[[0,['fr.orsay.lri.varna.controlers.ControleurScriptParser','.ArgumentType'],'java.util.Hashtable',['fr.orsay.lri.varna.controlers.ControleurScriptParser','.Function'],'fr.orsay.lri.varna.models.annotations.ChemProbAnnotation','fr.orsay.lri.varna.models.rna.ModeleColorMap','java.util.ArrayList','java.awt.Color','java.util.Vector',['fr.orsay.lri.varna.controlers.ControleurScriptParser','.NumberArgument'],['fr.orsay.lri.varna.controlers.ControleurScriptParser','.ColorArgument'],['fr.orsay.lri.varna.controlers.ControleurScriptParser','.BooleanArgument'],['fr.orsay.lri.varna.controlers.ControleurScriptParser','.StringArgument'],['fr.orsay.lri.varna.controlers.ControleurScriptParser','.ArrayArgument'],'java.io.StreamTokenizer','java.io.StringReader',['fr.orsay.lri.varna.controlers.ControleurScriptParser','.Command']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ControleurScriptParser", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.SCRIPT_ERROR_PREFIX=null;
C$._name2Fun=null;
C$._fun2Prot=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.SCRIPT_ERROR_PREFIX="Error";
C$._name2Fun=Clazz.new_($I$(2));
C$._fun2Prot=Clazz.new_($I$(2));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initFunctions$', function () {
if (C$._name2Fun.size$() > 0) {
return;
}var funs=$I$(3).values$();
for (var i=0; i < funs.length; i++) {
var fun=funs[i];
C$._name2Fun.put$TK$TV(fun.getFunName$(), fun);
C$._fun2Prot.put$TK$TV(fun, fun.getPrototype$());
}
}, 1);

Clazz.newMeth(C$, 'getFunction$S', function (f) {
var s=f.trim$().toLowerCase$();
if (C$._name2Fun.containsKey$O(s)) return C$._name2Fun.get$O(s);
return $I$(3).UNKNOWN;
}, 1);

Clazz.newMeth(C$, 'getPrototype$fr_orsay_lri_varna_controlers_ControleurScriptParser_Function', function (f) {
if (C$._fun2Prot.containsKey$O(f)) return C$._fun2Prot.get$O(f);
return Clazz.array($I$(1), [0]);
}, 1);

Clazz.newMeth(C$, 'executeScript$fr_orsay_lri_varna_VARNAPanel$S', function (vp, cmdtxt) {
var cmds=C$.parseScript$S(cmdtxt);
for (var i=0; i < cmds.size$(); i++) {
var cmd=cmds.get$I(i);
switch (cmd._f) {
case $I$(3).ADD_CHEM_PROB:
{
var from=(cmd._argv.get$I(0)).getNumber$().intValue$();
var to=(cmd._argv.get$I(1)).getNumber$().intValue$();
var t=$I$(4).annotTypeFromString$S((cmd._argv.get$I(2)).toString());
var intensity=(cmd._argv.get$I(3)).getNumber$().doubleValue$();
var c=(cmd._argv.get$I(4)).getColor$();
var out=(cmd._argv.get$I(5)).getBoolean$();
vp.getRNA$().addChemProbAnnotation$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation(Clazz.new_($I$(4).c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation_ChemProbAnnotationType$D$java_awt_Color$Z,[vp.getRNA$().getBaseAt$I(from), vp.getRNA$().getBaseAt$I(to), t, intensity, c, out]));
}break;
case $I$(3).ERASE_SEQ:
{
vp.eraseSequence$();
}break;
case $I$(3).RESET_CHEM_PROB:
{
vp.getRNA$().clearChemProbAnnotations$();
vp.repaint$();
}break;
case $I$(3).SET_COLOR_MAP_MIN:
{
vp.setColorMapMinValue$D((cmd._argv.get$I(0)).getNumber$().doubleValue$());
}break;
case $I$(3).SET_COLOR_MAP_MAX:
{
vp.setColorMapMaxValue$D((cmd._argv.get$I(0)).getNumber$().doubleValue$());
}break;
case $I$(3).SET_COLOR_MAP:
{
vp.setColorMap$fr_orsay_lri_varna_models_rna_ModeleColorMap($I$(5).parseColorMap$S(cmd._argv.get$I(0).toString()));
}break;
case $I$(3).SET_CUSTOM_COLOR_MAP:
{
var cm=Clazz.new_($I$(5));
var arg=cmd._argv.get$I(0);
for (var j=0; j < arg.getSize$(); j++) {
var a=arg.getArgument$I(j);
if (a._t === $I$(1).ARRAY_TYPE ) {
var aarg=a;
if (aarg.getSize$() == 2) {
var a1=aarg.getArgument$I(0);
var a2=aarg.getArgument$I(1);
if ((a1.getType$() === $I$(1).NUMBER_TYPE ) && (a2.getType$() === $I$(1).COLOR_TYPE ) ) {
cm.addColor$D$java_awt_Color((a1).getNumber$().doubleValue$(), (a2).getColor$());
}}}}
vp.setColorMap$fr_orsay_lri_varna_models_rna_ModeleColorMap(cm);
}break;
case $I$(3).SET_RNA:
{
var seq=cmd._argv.get$I(0).toString();
var str=cmd._argv.get$I(1).toString();
vp.drawRNA$S$S(seq, str);
}break;
case $I$(3).SET_RNA_SMOOTH:
{
var seq=cmd._argv.get$I(0).toString();
var str=cmd._argv.get$I(1).toString();
vp.drawRNAInterpolated$S$S(seq, str);
vp.repaint$();
}break;
case $I$(3).SET_SELECTION:
{
var arg=cmd._argv.get$I(0);
var vals=Clazz.new_($I$(6));
for (var j=0; j < arg.getSize$(); j++) {
var a=arg.getArgument$I(j);
if (a._t === $I$(1).NUMBER_TYPE ) {
var narg=a;
vals.add$TE(new Integer(narg.getNumber$().intValue$()));
}}
vp.setSelection$java_util_ArrayList(vals);
vp.repaint$();
}break;
case $I$(3).SET_SEQ:
{
var seq=cmd._argv.get$I(0).toString();
vp.setSequence$S(seq);
}break;
case $I$(3).SET_STRUCT:
{
var seq=vp.getRNA$().getSeq$();
var str=cmd._argv.get$I(0).toString();
vp.drawRNA$S$S(seq, str);
}break;
case $I$(3).SET_STRUCT_SMOOTH:
{
var seq=vp.getRNA$().getSeq$();
var str=cmd._argv.get$I(0).toString();
vp.drawRNAInterpolated$S$S(seq, str);
vp.repaint$();
}break;
case $I$(3).SET_TITLE:
{
vp.setTitle$S(cmd._argv.get$I(0).toString());
}break;
case $I$(3).SET_VALUES:
{
var arg=cmd._argv.get$I(0);
var vals=Clazz.array(Double, [arg.getSize$()]);
for (var j=0; j < arg.getSize$(); j++) {
var a=arg.getArgument$I(j);
if (a._t === $I$(1).NUMBER_TYPE ) {
var narg=a;
vals[j]=new Double(narg.getNumber$().doubleValue$());
}}
vp.setColorMapValues$DoubleA(vals);
vp.repaint$();
}break;
case $I$(3).REDRAW:
{
var mode=-1;
var modeStr=cmd._argv.get$I(0).toString().toLowerCase$();
if (modeStr.equals$O("radiate")) mode=2;
 else if (modeStr.equals$O("circular")) mode=1;
 else if (modeStr.equals$O("naview")) mode=3;
 else if (modeStr.equals$O("linear")) mode=4;
if (mode != -1) vp.drawRNA$fr_orsay_lri_varna_models_rna_RNA$I(vp.getRNA$(), mode);
}break;
case $I$(3).TOGGLE_SHOW_COLOR_MAP:
{
vp.setColorMapVisible$Z(!vp.getColorMapVisible$());
}break;
default:
throw Clazz.new_(Clazz.load('Exception').c$$S,[C$.SCRIPT_ERROR_PREFIX + ": Method '" + cmd._f + "' unimplemented." ]);
}
vp.repaint$();
}
}, 1);

Clazz.newMeth(C$, 'parseColor$S', function (s) {
var result=null;
try {
result=$I$(7).decode$S(s);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return result;
}, 1);

Clazz.newMeth(C$, 'parseBoolean$S', function (s) {
var result=null;
if (s.toLowerCase$().equals$O("true")) result= Boolean.from(true);
if (s.toLowerCase$().equals$O("false")) result= Boolean.from(false);
return result;
}, 1);

Clazz.newMeth(C$, 'parseArguments$java_io_StreamTokenizer$Z', function (st, parType) {
var result=Clazz.new_($I$(8));
while ((st.ttype != 41  && parType ) || (st.ttype != 93  && !parType ) ){
st.nextToken$();
switch (st.ttype) {
case (-2):
{
result.add$TE(Clazz.new_($I$(9).c$$Number,[new Double(st.nval)]));
}break;
case (-3):
{
var c=C$.parseColor$S(st.sval);
if (c != null ) {
result.add$TE(Clazz.new_($I$(10).c$$java_awt_Color,[c]));
} else {
var b=C$.parseBoolean$S(st.sval);
if (b != null ) {
result.add$TE(Clazz.new_($I$(11).c$$Z,[(b).booleanValue$()]));
} else {
result.add$TE(Clazz.new_($I$(12).c$$S,[st.sval]));
}}}break;
case 34:
{
result.add$TE(Clazz.new_($I$(12).c$$S,[st.sval]));
}break;
case 91:
{
result.add$TE(Clazz.new_($I$(13).c$$java_util_Vector,[C$.parseArguments$java_io_StreamTokenizer$Z(st, false)]));
}break;
case 40:
{
result.add$TE(Clazz.new_($I$(13).c$$java_util_Vector,[C$.parseArguments$java_io_StreamTokenizer$Z(st, true)]));
}break;
case 41:
{
if (parType) return result;
 else throw Clazz.new_(Clazz.load('Exception').c$$S,[C$.SCRIPT_ERROR_PREFIX + ": Opening " + (parType ? "parenthesis" : "bracket") + " matched with a closing " + (!parType ? "parenthesis" : "bracket") ]);
}case 93:
{
if (!parType) return result;
 else throw Clazz.new_(Clazz.load('Exception').c$$S,[C$.SCRIPT_ERROR_PREFIX + ": Opening " + (parType ? "parenthesis" : "bracket") + " matched with a closing " + (!parType ? "parenthesis" : "bracket") ]);
}case 44:
break;
case (-1):
{
throw Clazz.new_(Clazz.load('Exception').c$$S,[C$.SCRIPT_ERROR_PREFIX + ": Unmatched opening " + (parType ? "parenthesis" : "bracket") ]);
}}
}
return result;
}, 1);

Clazz.newMeth(C$, 'parseCommand$S', function (cmd) {
var cut=cmd.indexOf$S("(");
if (cut == -1) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[C$.SCRIPT_ERROR_PREFIX + ": Syntax error"]);
}var fun=cmd.substring$I$I(0, cut);
var f=C$.getFunction$S(fun);
if (f === $I$(3).UNKNOWN ) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[C$.SCRIPT_ERROR_PREFIX + ": Unknown function \"" + fun + "\"" ]);
}var st=Clazz.new_($I$(14).c$$java_io_Reader,[Clazz.new_($I$(15).c$$S,[cmd.substring$I(cut + 1)])]);
st.eolIsSignificant$Z(false);
st.parseNumbers$();
st.quoteChar$I("\"".$c());
st.ordinaryChar$I("=".$c());
st.ordinaryChar$I(",".$c());
st.ordinaryChar$I("[".$c());
st.ordinaryChar$I("]".$c());
st.ordinaryChar$I("(".$c());
st.ordinaryChar$I(")".$c());
st.wordChars$I$I("#".$c(), "#".$c());
var argv=C$.parseArguments$java_io_StreamTokenizer$Z(st, true);
C$.checkArgs$fr_orsay_lri_varna_controlers_ControleurScriptParser_Function$java_util_Vector(f, argv);
var result=Clazz.new_($I$(16).c$$fr_orsay_lri_varna_controlers_ControleurScriptParser_Function$java_util_Vector,[f, argv]);
return result;
}, 1);

Clazz.newMeth(C$, 'checkArgs$fr_orsay_lri_varna_controlers_ControleurScriptParser_Function$java_util_Vector', function (f, argv) {
var argtypes=C$.getPrototype$fr_orsay_lri_varna_controlers_ControleurScriptParser_Function(f);
if (argtypes.length != argv.size$()) throw Clazz.new_(Clazz.load('Exception').c$$S,[C$.SCRIPT_ERROR_PREFIX + ": Wrong number of argument for function \"" + f + "\"." ]);
for (var i=0; i < argtypes.length; i++) {
if (argtypes[i] !== argv.get$I(i)._t ) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[C$.SCRIPT_ERROR_PREFIX + ": Bad type (" + argtypes[i] + "!=" + argv.get$I(i)._t + ") for argument #" + (i + 1) + " in function \"" + f + "\"." ]);
}}
return true;
}, 1);

Clazz.newMeth(C$, 'parseScript$S', function (cmd) {
C$.initFunctions$();
var cmds=Clazz.new_($I$(8));
var data=cmd.split$S(";");
for (var i=0; i < data.length; i++) {
cmds.add$TE(C$.parseCommand$S(data[i].trim$()));
}
return cmds;
}, 1);
;
(function(){var C$=Clazz.newClass(P$.ControleurScriptParser, "Command", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._f=null;
this._argv=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_controlers_ControleurScriptParser_Function$java_util_Vector', function (f, argv) {
C$.$init$.apply(this);
this._f=f;
this._argv=argv;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ControleurScriptParser, "Argument", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._t=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentType', function (t) {
C$.$init$.apply(this);
this._t=t;
}, 1);

Clazz.newMeth(C$, 'getType$', function () {
return this._t;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ControleurScriptParser, "NumberArgument", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['fr.orsay.lri.varna.controlers.ControleurScriptParser','.Argument']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._val=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Number', function (val) {
C$.superclazz.c$$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentType.apply(this, [$I$(1).NUMBER_TYPE]);
C$.$init$.apply(this);
this._val=val;
}, 1);

Clazz.newMeth(C$, 'getNumber$', function () {
return this._val;
});

Clazz.newMeth(C$, 'toString', function () {
return this._val.toString();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ControleurScriptParser, "ColorArgument", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['fr.orsay.lri.varna.controlers.ControleurScriptParser','.Argument']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._val=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color', function (val) {
C$.superclazz.c$$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentType.apply(this, [$I$(1).COLOR_TYPE]);
C$.$init$.apply(this);
this._val=val;
}, 1);

Clazz.newMeth(C$, 'getColor$', function () {
return this._val;
});

Clazz.newMeth(C$, 'toString', function () {
return this._val.toString();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ControleurScriptParser, "BooleanArgument", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['fr.orsay.lri.varna.controlers.ControleurScriptParser','.Argument']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._val=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (val) {
C$.superclazz.c$$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentType.apply(this, [$I$(1).BOOLEAN_TYPE]);
C$.$init$.apply(this);
this._val=val;
}, 1);

Clazz.newMeth(C$, 'getBoolean$', function () {
return this._val;
});

Clazz.newMeth(C$, 'toString', function () {
return "" + this._val;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ControleurScriptParser, "StringArgument", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['fr.orsay.lri.varna.controlers.ControleurScriptParser','.Argument']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._val=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (val) {
C$.superclazz.c$$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentType.apply(this, [$I$(1).STRING_TYPE]);
C$.$init$.apply(this);
this._val=val;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this._val.toString();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ControleurScriptParser, "ArrayArgument", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['fr.orsay.lri.varna.controlers.ControleurScriptParser','.Argument']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._val=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Vector', function (val) {
C$.superclazz.c$$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentType.apply(this, [$I$(1).ARRAY_TYPE]);
C$.$init$.apply(this);
this._val=val;
}, 1);

Clazz.newMeth(C$, 'getSize$', function () {
return this._val.size$();
});

Clazz.newMeth(C$, 'getArgument$I', function (i) {
return this._val.get$I(i);
});

Clazz.newMeth(C$, 'toString', function () {
return this._val.toString();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ControleurScriptParser, "ArgumentType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "STRING_TYPE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "NUMBER_TYPE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "BOOLEAN_TYPE", 2, []);
Clazz.newEnumConst($vals, C$.c$, "ARRAY_TYPE", 3, []);
Clazz.newEnumConst($vals, C$.c$, "COLOR_TYPE", 4, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){var C$=Clazz.newClass(P$.ControleurScriptParser, "Function", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "ADD_CHEM_PROB", 0, ["addchemprob", Clazz.array($I$(1), -1, [$I$(1).NUMBER_TYPE, $I$(1).NUMBER_TYPE, $I$(1).STRING_TYPE, $I$(1).NUMBER_TYPE, $I$(1).COLOR_TYPE, $I$(1).BOOLEAN_TYPE])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "ERASE_SEQ", 1, ["eraseseq", Clazz.array($I$(1), -1, [])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "RESET_CHEM_PROB", 2, ["resetchemprob", Clazz.array($I$(1), -1, [])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "SET_COLOR_MAP_MIN", 3, ["setcolormapminvalue", Clazz.array($I$(1), -1, [$I$(1).NUMBER_TYPE])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "SET_COLOR_MAP_MAX", 4, ["setcolormapmaxvalue", Clazz.array($I$(1), -1, [$I$(1).NUMBER_TYPE])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "SET_COLOR_MAP", 5, ["setcolormap", Clazz.array($I$(1), -1, [$I$(1).STRING_TYPE])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "SET_CUSTOM_COLOR_MAP", 6, ["setcustomcolormap", Clazz.array($I$(1), -1, [$I$(1).ARRAY_TYPE])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "SET_SEQ", 7, ["setseq", Clazz.array($I$(1), -1, [$I$(1).STRING_TYPE])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "SET_STRUCT", 8, ["setstruct", Clazz.array($I$(1), -1, [$I$(1).STRING_TYPE])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "SET_STRUCT_SMOOTH", 9, ["setstructsmooth", Clazz.array($I$(1), -1, [$I$(1).STRING_TYPE])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "SET_TITLE", 10, ["settitle", Clazz.array($I$(1), -1, [$I$(1).STRING_TYPE])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "SET_RNA", 11, ["setrna", Clazz.array($I$(1), -1, [$I$(1).STRING_TYPE, $I$(1).STRING_TYPE])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "SET_RNA_SMOOTH", 12, ["setrnasmooth", Clazz.array($I$(1), -1, [$I$(1).STRING_TYPE, $I$(1).STRING_TYPE])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "SET_SELECTION", 13, ["setselection", Clazz.array($I$(1), -1, [$I$(1).ARRAY_TYPE])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "SET_VALUES", 14, ["setvalues", Clazz.array($I$(1), -1, [$I$(1).ARRAY_TYPE])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "TOGGLE_SHOW_COLOR_MAP", 15, ["toggleshowcolormap", Clazz.array($I$(1), -1, [])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "REDRAW", 16, ["redraw", Clazz.array($I$(1), -1, [$I$(1).STRING_TYPE])]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA, "UNKNOWN", 17, ["N/A", Clazz.array($I$(1), -1, [])]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._funName=null;
this._args=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$fr_orsay_lri_varna_controlers_ControleurScriptParser_ArgumentTypeA', function (funName, args) {
C$.$init$.apply(this);
this._funName=funName;
this._args=args;
}, 1);

Clazz.newMeth(C$, 'getPrototype$', function () {
return this._args;
});

Clazz.newMeth(C$, 'getFunName$', function () {
return this._funName;
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
