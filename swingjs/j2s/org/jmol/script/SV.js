(function(){var P$=Clazz.newPackage("org.jmol.script"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.AU','javajs.util.Lst','java.util.Hashtable','Boolean','javajs.util.Measure','org.jmol.util.Escape','javajs.util.SB','javajs.util.PT','java.util.Arrays','org.jmol.modelset.BondSet','org.jmol.util.BSUtil','javajs.util.BArray','javajs.util.Base64','javajs.util.BS','java.util.Collections',['org.jmol.script.SV','.Sort']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SV", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.script.T', 'javajs.api.JSONEncodable');
C$.vT=null;
C$.vF=null;
C$.pt0=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.vT=C$.newSV$I$I$O(1073742335, 1, "true");
C$.vF=C$.newSV$I$I$O(1073742334, 0, "false");
C$.pt0=Clazz.new_($I$(1));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.index=0;
this.myName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.index=2147483647;
}, 1);

Clazz.newMeth(C$, 'newV$I$O', function (tok, value) {
var sv=Clazz.new_(C$);
sv.tok=tok;
sv.value=value;
return sv;
}, 1);

Clazz.newMeth(C$, 'newI$I', function (i) {
var sv=Clazz.new_(C$);
sv.tok=2;
sv.intValue=i;
return sv;
}, 1);

Clazz.newMeth(C$, 'newF$F', function (f) {
var sv=Clazz.new_(C$);
sv.tok=3;
sv.value=Float.valueOf$F(f);
return sv;
}, 1);

Clazz.newMeth(C$, 'newS$S', function (s) {
return C$.newV$I$O(4, s);
}, 1);

Clazz.newMeth(C$, 'newT$org_jmol_script_T', function (x) {
return C$.newSV$I$I$O(x.tok, x.intValue, x.value);
}, 1);

Clazz.newMeth(C$, 'newSV$I$I$O', function (tok, intValue, value) {
var sv=C$.newV$I$O(tok, value);
sv.intValue=intValue;
return sv;
}, 1);

Clazz.newMeth(C$, 'setv$org_jmol_script_SV', function (v) {
this.index=v.index;
this.intValue=v.intValue;
this.tok=v.tok;
this.value=v.value;
return this;
});

Clazz.newMeth(C$, 'sizeOf$org_jmol_script_T', function (x) {
switch (x == null  ? 0 : x.tok) {
case 10:
return C$.bsSelectToken$org_jmol_script_T(x).cardinality$();
case 1073742335:
case 1073742334:
return -1;
case 2:
return -2;
case 3:
return -4;
case 8:
return -8;
case 9:
return -16;
case 11:
return -32;
case 12:
return -64;
case 15:
return (x.value).data.length;
case 4:
return (x.value).length$();
case 7:
return x.intValue == 2147483647 ? (x).getList$().size$() : C$.sizeOf$org_jmol_script_T(C$.selectItemTok$org_jmol_script_T$I(x, -2147483648));
case 6:
return (x.value).size$();
case 14:
return (x.value).getFullMap$().size$();
default:
return 0;
}
}, 1);

Clazz.newMeth(C$, 'isVariableType$O', function (x) {
return (Clazz.instanceOf(x, "org.jmol.script.SV") || Clazz.instanceOf(x, "java.lang.Boolean") || Clazz.instanceOf(x, "java.lang.Integer") || Clazz.instanceOf(x, "java.lang.Float") || Clazz.instanceOf(x, "java.lang.String") || Clazz.instanceOf(x, "javajs.util.T3") || Clazz.instanceOf(x, "javajs.util.BS") || Clazz.instanceOf(x, "javajs.util.P4") || Clazz.instanceOf(x, "javajs.util.Quat") || Clazz.instanceOf(x, "javajs.util.M34") || Clazz.instanceOf(x, "java.util.Map") || Clazz.instanceOf(x, "javajs.util.Lst") || Clazz.instanceOf(x, "javajs.util.BArray") || Clazz.instanceOf(x, "org.jmol.script.ScriptContext") || C$.isArray$O(x)  );
}, 1);

Clazz.newMeth(C$, 'isArray$O', function (x) {
{
return Clazz.instanceOf(x, Array);
}
}, 1);

Clazz.newMeth(C$, 'getVariable$O', function (x) {
if (x == null ) return C$.newS$S("");
if (Clazz.instanceOf(x, "org.jmol.script.SV")) return x;
if (Clazz.instanceOf(x, "java.lang.Boolean")) return C$.getBoolean$Z((x).booleanValue$());
if (Clazz.instanceOf(x, "java.lang.Integer")) return C$.newI$I((x).intValue$());
if (Clazz.instanceOf(x, "java.lang.Float")) return C$.newV$I$O(3, x);
if (Clazz.instanceOf(x, "java.lang.String")) {
x=C$.unescapePointOrBitsetAsVariable$O(x);
if (Clazz.instanceOf(x, "org.jmol.script.SV")) return x;
return C$.newV$I$O(4, x);
}if (Clazz.instanceOf(x, "javajs.util.P3")) return C$.newV$I$O(8, x);
if (Clazz.instanceOf(x, "javajs.util.V3")) return C$.newV$I$O(8, $I$(1).newP$javajs_util_T3(x));
if (Clazz.instanceOf(x, "javajs.util.BS")) return C$.newV$I$O(10, x);
if (Clazz.instanceOf(x, "javajs.util.P4")) return C$.newV$I$O(9, x);
if (Clazz.instanceOf(x, "javajs.util.Quat")) return C$.newV$I$O(9, (x).toPoint4f$());
if (Clazz.instanceOf(x, "javajs.util.M34")) return C$.newV$I$O(Clazz.instanceOf(x, "javajs.util.M4") ? 12 : 11, x);
if (Clazz.instanceOf(x, "java.util.Map")) return C$.getVariableMap$java_util_Map(x);
if (Clazz.instanceOf(x, "javajs.util.Lst")) return C$.getVariableList$javajs_util_Lst(x);
if (Clazz.instanceOf(x, "javajs.util.BArray")) return C$.newV$I$O(15, x);
if (Clazz.instanceOf(x, "org.jmol.script.ScriptContext")) return C$.newV$I$O(14, x);
if (Clazz.instanceOf(x, Clazz.array(C$, -1))) return C$.getVariableAV$org_jmol_script_SVA(x);
if ($I$(2).isAI$O(x)) return C$.getVariableAI$IA(x);
if ($I$(2).isAB$O(x)) return C$.getVariableAB$BA(x);
if ($I$(2).isAF$O(x)) return C$.getVariableAF$FA(x);
if ($I$(2).isAD$O(x)) return C$.getVariableAD$DA(x);
if ($I$(2).isAS$O(x)) return C$.getVariableAS$SA(x);
if ($I$(2).isAP$O(x)) return C$.getVariableAP$javajs_util_T3A(x);
if ($I$(2).isAII$O(x)) return C$.getVariableAII$IAA(x);
if ($I$(2).isAFF$O(x)) return C$.getVariableAFF$FAA(x);
if ($I$(2).isASS$O(x)) return C$.getVariableASS$SAA(x);
if ($I$(2).isADD$O(x)) return C$.getVariableADD$DAA(x);
if ($I$(2).isAFloat$O(x)) return C$.newV$I$O(13, x);
return C$.newJSVar$O(x);
}, 1);

Clazz.newMeth(C$, 'newJSVar$O', function (x) {
var itype;
var itest;
var inum;
var array;
var keys;
{
switch(x.BYTES_PER_ELEMENT ? Array : x.constructor) { case Boolean: itype = 0;
itest = x;
break;
case Number: itype = 1;
inum = x;
break;
case Array: itype = 2;
array = x;
break;
case Object: itype = 3;
array = x;
keys = Object.keys(x);
break;
}
}
switch (itype) {
case 0:
return (itest ? C$.vT : C$.vF);
case 1:
return (inum > 2147483647  || inum != Math.floor(inum)   ? C$.newF$F(inum) : C$.newI$I((inum|0)));
case 2:
var v=Clazz.new_($I$(3));
for (var i=0, n=array.length; i < n; i++) v.addLast$TV(C$.newJSVar$O(array[i]));

return C$.getVariableList$javajs_util_Lst(v);
case 3:
var map=Clazz.new_($I$(4));
for (var i=keys.length; --i >= 0; ) {
var o=null;
{
o = array[keys[i]];
}
map.put$TK$TV(keys[i], C$.newJSVar$O(o));
}
return C$.getVariableMap$java_util_Map(map);
}
return C$.newS$S(x.toString());
}, 1);

Clazz.newMeth(C$, 'getVariableMap$java_util_Map', function (x) {
var ht=x;
var o=null;
for (var oo, $oo = ht.values$().iterator$(); $oo.hasNext$()&&((oo=($oo.next$())),1);) {
o=oo;
break;
}
if (!(Clazz.instanceOf(o, "org.jmol.script.SV"))) {
var x2=Clazz.new_($I$(4));
for (var entry, $entry = ht.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) x2.put$TK$TV(entry.getKey$(), C$.getVariable$O(entry.getValue$()));

x=x2;
}return C$.newV$I$O(6, x);
}, 1);

Clazz.newMeth(C$, 'getVariableList$javajs_util_Lst', function (v) {
var len=v.size$();
if (len > 0 && Clazz.instanceOf(v.get$I(0), "org.jmol.script.SV") ) return C$.newV$I$O(7, v);
var objects=Clazz.new_($I$(3));
for (var i=0; i < len; i++) objects.addLast$TV(C$.getVariable$O(v.get$I(i)));

return C$.newV$I$O(7, objects);
}, 1);

Clazz.newMeth(C$, 'getVariableAV$org_jmol_script_SVA', function (v) {
var objects=Clazz.new_($I$(3));
for (var i=0; i < v.length; i++) objects.addLast$TV(v[i]);

return C$.newV$I$O(7, objects);
}, 1);

Clazz.newMeth(C$, 'getVariableAD$DA', function (f) {
var objects=Clazz.new_($I$(3));
for (var i=0; i < f.length; i++) objects.addLast$TV(C$.newV$I$O(3, Float.valueOf$F(f[i])));

return C$.newV$I$O(7, objects);
}, 1);

Clazz.newMeth(C$, 'getVariableAO$OA', function (o) {
var objects=Clazz.new_($I$(3));
for (var i=0; i < o.length; i++) objects.addLast$TV(C$.getVariable$O(o[i]));

return C$.newV$I$O(7, objects);
}, 1);

Clazz.newMeth(C$, 'getVariableAS$SA', function (s) {
var objects=Clazz.new_($I$(3));
for (var i=0; i < s.length; i++) objects.addLast$TV(C$.newV$I$O(4, s[i]));

return C$.newV$I$O(7, objects);
}, 1);

Clazz.newMeth(C$, 'getVariableAP$javajs_util_T3A', function (p) {
var objects=Clazz.new_($I$(3));
for (var i=0; i < p.length; i++) objects.addLast$TV(C$.newV$I$O(8, p[i]));

return C$.newV$I$O(7, objects);
}, 1);

Clazz.newMeth(C$, 'getVariableAFF$FAA', function (fx) {
var objects=Clazz.new_($I$(3));
for (var i=0; i < fx.length; i++) objects.addLast$TV(C$.getVariableAF$FA(fx[i]));

return C$.newV$I$O(7, objects);
}, 1);

Clazz.newMeth(C$, 'getVariableADD$DAA', function (fx) {
var objects=Clazz.new_($I$(3));
for (var i=0; i < fx.length; i++) objects.addLast$TV(C$.getVariableAD$DA(fx[i]));

return C$.newV$I$O(7, objects);
}, 1);

Clazz.newMeth(C$, 'getVariableASS$SAA', function (fx) {
var objects=Clazz.new_($I$(3));
for (var i=0; i < fx.length; i++) objects.addLast$TV(C$.getVariableAS$SA(fx[i]));

return C$.newV$I$O(7, objects);
}, 1);

Clazz.newMeth(C$, 'getVariableAII$IAA', function (ix) {
var objects=Clazz.new_($I$(3));
for (var i=0; i < ix.length; i++) objects.addLast$TV(C$.getVariableAI$IA(ix[i]));

return C$.newV$I$O(7, objects);
}, 1);

Clazz.newMeth(C$, 'getVariableAF$FA', function (f) {
var objects=Clazz.new_($I$(3));
for (var i=0; i < f.length; i++) objects.addLast$TV(C$.newV$I$O(3, Float.valueOf$F(f[i])));

return C$.newV$I$O(7, objects);
}, 1);

Clazz.newMeth(C$, 'getVariableAI$IA', function (ix) {
var objects=Clazz.new_($I$(3));
for (var i=0; i < ix.length; i++) objects.addLast$TV(C$.newI$I(ix[i]));

return C$.newV$I$O(7, objects);
}, 1);

Clazz.newMeth(C$, 'getVariableAB$BA', function (ix) {
var objects=Clazz.new_($I$(3));
for (var i=0; i < ix.length; i++) objects.addLast$TV(C$.newI$I(ix[i]));

return C$.newV$I$O(7, objects);
}, 1);

Clazz.newMeth(C$, 'setName$S', function (name) {
this.myName=name;
return this;
});

Clazz.newMeth(C$, 'canIncrement$', function () {
switch (this.tok) {
case 2:
case 3:
return true;
default:
return false;
}
});

Clazz.newMeth(C$, 'increment$I', function (n) {
switch (this.tok) {
case 2:
this.intValue+=n;
return true;
case 3:
this.value=Float.valueOf$F((this.value).floatValue$() + n);
return true;
default:
return false;
}
});

Clazz.newMeth(C$, 'asBoolean$', function () {
return C$.bValue$org_jmol_script_T(this);
});

Clazz.newMeth(C$, 'asInt$', function () {
return C$.iValue$org_jmol_script_T(this);
});

Clazz.newMeth(C$, 'asFloat$', function () {
return C$.fValue$org_jmol_script_T(this);
});

Clazz.newMeth(C$, 'asString$', function () {
return C$.sValue$org_jmol_script_T(this);
});

Clazz.newMeth(C$, 'oValue$O', function (xx) {
if (!(Clazz.instanceOf(xx, "org.jmol.script.SV"))) return xx;
var x=xx;
switch (x.tok) {
case 1073742335:
return $I$(5).TRUE;
case 0:
case 1073742334:
return $I$(5).FALSE;
case 2:
return Integer.valueOf$I(x.intValue);
case 10:
case 1275068418:
return C$.selectItemVar$org_jmol_script_SV(x).value;
default:
return x.value;
}
}, 1);

Clazz.newMeth(C$, 'nValue$org_jmol_script_T', function (x) {
var iValue;
switch (x == null  ? 0 : x.tok) {
case 3:
return x.value;
case 2:
iValue=x.intValue;
break;
case 4:
if ((x.value).indexOf$S(".") >= 0) return Float.valueOf$F(C$.toFloat$S(x.value));
iValue=(C$.toFloat$S(x.value)|0);
break;
case 8:
return Float.valueOf$F((x.value).length$());
default:
iValue=0;
}
return Integer.valueOf$I(iValue);
}, 1);

Clazz.newMeth(C$, 'bValue$org_jmol_script_T', function (x) {
switch (x == null  ? 0 : x.tok) {
case 1073742335:
case 14:
return true;
case 1073742334:
return false;
case 2:
return x.intValue != 0;
case 3:
case 4:
case 7:
return C$.fValue$org_jmol_script_T(x) != 0 ;
case 10:
case 15:
return C$.iValue$org_jmol_script_T(x) != 0;
case 8:
case 9:
case 11:
case 12:
return Math.abs(C$.fValue$org_jmol_script_T(x)) > 1.0E-4 ;
case 6:
return !(x).getMap$().isEmpty$();
default:
return false;
}
}, 1);

Clazz.newMeth(C$, 'iValue$org_jmol_script_T', function (x) {
switch (x == null  ? 0 : x.tok) {
case 1073742335:
return 1;
case 1073742334:
return 0;
case 2:
return x.intValue;
case 3:
case 7:
case 4:
return (C$.fValue$org_jmol_script_T(x)|0);
case 10:
return C$.bsSelectToken$org_jmol_script_T(x).cardinality$();
case 15:
return (x.value).data.length;
default:
return 0;
}
}, 1);

Clazz.newMeth(C$, 'fValue$org_jmol_script_T', function (x) {
switch (x == null  ? 0 : x.tok) {
case 1073742335:
return 1;
case 1073742334:
return 0;
case 2:
return x.intValue;
case 3:
return (x.value).floatValue$();
case 7:
var i=x.intValue;
if (i == 2147483647) return (x).getList$().size$();
case 4:
return C$.toFloat$S(C$.sValue$org_jmol_script_T(x));
case 10:
case 15:
return C$.iValue$org_jmol_script_T(x);
case 8:
return (x.value).length$();
case 9:
return $I$(6).distanceToPlane$javajs_util_P4$javajs_util_T3(x.value, C$.pt0);
case 11:
var pt=Clazz.new_($I$(1));
(x.value).rotate$javajs_util_T3(pt);
return pt.length$();
case 12:
var pt1=Clazz.new_($I$(1));
(x.value).rotTrans$javajs_util_T3(pt1);
return pt1.length$();
default:
return 0;
}
}, 1);

Clazz.newMeth(C$, 'sValue$org_jmol_script_T', function (x) {
if (x == null ) return "";
var i;
var sb;
switch (x.tok) {
case 1073742335:
return "true";
case 1073742334:
return "false";
case 2:
return "" + x.intValue;
case 10:
var bs=C$.bsSelectToken$org_jmol_script_T(x);
return (Clazz.instanceOf(x.value, "org.jmol.modelset.BondSet") ? $I$(7).eBond$javajs_util_BS(bs) : $I$(7).eBS$javajs_util_BS(bs));
case 7:
var sv=(x).getList$();
i=x.intValue;
if (i <= 0) i=sv.size$() - i;
if (i != 2147483647) return (i < 1 || i > sv.size$()  ? "" : C$.sValue$org_jmol_script_T(sv.get$I(i - 1)));
case 6:
case 14:
if (Clazz.instanceOf(x.value, "java.lang.String")) return x.value;
sb=Clazz.new_($I$(8));
C$.sValueArray$javajs_util_SB$org_jmol_script_SV$S$S$Z$Z$Z$I$Z(sb, x, "", "", false, true, true, 2147483647, false);
return $I$(9).rep$S$S$S(sb.toString(), "\n\u0000", " ");
case 4:
var s=x.value;
i=x.intValue;
if (i <= 0) i=s.length$() - i;
if (i == 2147483647) return s;
if (i < 1 || i > s.length$() ) return "";
return "" + s.charAt$I(i - 1);
case 8:
return $I$(7).eP$javajs_util_T3(x.value);
case 9:
return $I$(7).eP4$javajs_util_P4(x.value);
case 11:
case 12:
return $I$(7).e$O(x.value);
default:
return x.value.toString();
}
}, 1);

Clazz.newMeth(C$, 'sValueArray$javajs_util_SB$org_jmol_script_SV$S$S$Z$Z$Z$I$Z', function (sb, vx, path, tabs, isEscaped, isRaw, addValues, maxLevels, skipEmpty) {
switch (vx.tok) {
case 6:
case 14:
case 7:
var thiskey=";" + vx.hashCode$() + ";" ;
if (path.indexOf$S(thiskey) >= 0) {
sb.append$S(isEscaped ? (vx.tok == 7 ? "[ ]" : "{ }") : (vx.tok == 7 ? "" : "\u0000") + "\"<" + (vx.myName == null  ? "circular reference" : vx.myName) + ">\"" );
break;
}path += thiskey;
if (vx.tok == 7) {
if (!addValues) return;
if (!isRaw) sb.append$S(isEscaped ? "[ " : tabs + "[\n");
var sx=vx.getList$();
for (var i=0; i < sx.size$(); i++) {
if (isEscaped && i > 0 ) sb.append$S(",");
var sv=sx.get$I(i);
C$.sValueArray$javajs_util_SB$org_jmol_script_SV$S$S$Z$Z$Z$I$Z(sb, sv, path, tabs + "  ", isEscaped, tabs.length$() == 0 && !isEscaped  && C$.isRawType$I(sv.tok) , addValues, maxLevels, skipEmpty);
if (!isEscaped) sb.append$S("\n");
}
if (!isRaw) sb.append$S(isEscaped ? " ]" : tabs + "]");
} else if (--maxLevels >= 0) {
var ht=(vx.tok == 14 ? (vx.value).getFullMap$() : vx.getMap$());
C$.sValueAddKeys$javajs_util_SB$S$java_util_Map$S$Z$Z$I$Z(sb, path, ht, tabs, isEscaped, addValues, maxLevels, skipEmpty);
}break;
default:
if (!addValues) return;
if (!isRaw && !isEscaped ) sb.append$S(tabs);
sb.append$S(isEscaped ? vx.escape$() : C$.sValue$org_jmol_script_T(vx));
}
}, 1);

Clazz.newMeth(C$, 'sValueAddKeys$javajs_util_SB$S$java_util_Map$S$Z$Z$I$Z', function (sb, path, ht, tabs, isEscaped, addValues, maxLevels, skipEmpty) {
if (maxLevels < 0) return;
var keyset=ht.keySet$();
var keys=ht.keySet$().toArray$TTA(Clazz.array(String, [keyset.size$()]));
$I$(10).sort$OA(keys);
if (isEscaped) {
sb.append$S("{ ");
var sep="";
for (var i=0; i < keys.length; i++) {
var key=keys[i];
var val=ht.get$O(key);
if (skipEmpty && (val.tok == 7 && val.getList$().size$() == 0  || val.tok == 6 && val.getMap$().isEmpty$()  ) ) continue;
if (addValues) sb.append$S(sep).append$S($I$(9).esc$S(key)).append$S(":");
 else sb.appendC$C(" ").append$S(key);
C$.sValueArray$javajs_util_SB$org_jmol_script_SV$S$S$Z$Z$Z$I$Z(sb, val, path, tabs + "  ", true, false, addValues, maxLevels, skipEmpty);
sep=",";
}
sb.append$S(" }");
if (!addValues) sb.append$S("\n");
return;
}sb.append$S(tabs).append$S("{\n");
tabs += "  ";
for (var i=0; i < keys.length; i++) {
sb.append$S(tabs);
var key=keys[i];
sb.append$S($I$(9).esc$S(key)).append$S("  :");
var sb2=Clazz.new_($I$(8));
if (!(Clazz.instanceOf(ht.get$O(key), "org.jmol.script.SV"))) ht.put$TK$TV(key, C$.getVariable$O(ht.get$O(key)));
var v=ht.get$O(key);
isEscaped=C$.isRawType$I(v.tok);
C$.sValueArray$javajs_util_SB$org_jmol_script_SV$S$S$Z$Z$Z$I$Z(sb2, v, path, tabs, isEscaped, false, addValues, maxLevels, skipEmpty);
var value=sb2.toString();
if (isEscaped && addValues ) sb.append$S("  ");
 else sb.append$S("\n");
sb.append$S(value).append$S("\n");
}
sb.append$S(tabs.substring$I(1)).append$S("}");
}, 1);

Clazz.newMeth(C$, 'isRawType$I', function (tok) {
switch (tok) {
case 4:
case 3:
case 2:
case 8:
case 9:
case 10:
case 15:
case 1073742335:
case 1073742334:
return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'ptValue$org_jmol_script_SV', function (x) {
switch (x.tok) {
case 8:
return x.value;
case 4:
var o=$I$(7).uP$S(x.value);
if (Clazz.instanceOf(o, "javajs.util.P3")) return o;
}
return null;
}, 1);

Clazz.newMeth(C$, 'pt4Value$org_jmol_script_SV', function (x) {
switch (x.tok) {
case 9:
return x.value;
case 4:
var o=$I$(7).uP$S(x.value);
if (!(Clazz.instanceOf(o, "javajs.util.P4"))) break;
return o;
}
return null;
}, 1);

Clazz.newMeth(C$, 'toFloat$S', function (s) {
return (s.equalsIgnoreCase$S("true") ? 1 : s.length$() == 0 || s.equalsIgnoreCase$S("false")  ? 0 : $I$(9).parseFloatStrict$S($I$(9).trim$S$S(s, " \t\n")));
}, 1);

Clazz.newMeth(C$, 'concatList$org_jmol_script_SV$org_jmol_script_SV$Z', function (x1, x2, asNew) {
var v1=x1.getList$();
var v2=x2.getList$();
if (!asNew) {
if (v2 == null ) v1.addLast$TV(C$.newT$org_jmol_script_T(x2));
 else for (var i=0; i < v2.size$(); i++) v1.addLast$TV(v2.get$I(i));

return x1;
}var vlist=Clazz.new_($I$(3));
if (v1 == null ) vlist.addLast$TV(x1);
 else for (var i=0; i < v1.size$(); i++) vlist.addLast$TV(v1.get$I(i));

if (v2 == null ) vlist.addLast$TV(x2);
 else for (var i=0; i < v2.size$(); i++) vlist.addLast$TV(v2.get$I(i));

return C$.getVariableList$javajs_util_Lst(vlist);
}, 1);

Clazz.newMeth(C$, 'bsSelectToken$org_jmol_script_T', function (x) {
return C$.selectItemTok$org_jmol_script_T$I(x, -2147483648).value;
}, 1);

Clazz.newMeth(C$, 'bsSelectRange$org_jmol_script_T$I', function (x, n) {
x=C$.selectItemTok$org_jmol_script_T$I(x, -2147483648);
x=C$.selectItemTok$org_jmol_script_T$I(x, (n <= 0 ? n : 1));
x=C$.selectItemTok$org_jmol_script_T$I(x, (n <= 0 ? 2147483646 : n));
return x.value;
}, 1);

Clazz.newMeth(C$, 'selectItemVar$org_jmol_script_SV', function ($var) {
return ($var.index != 2147483647 || ($var.tok == 7 || $var.tok == 15 ) && $var.intValue == 2147483647   ? $var : C$.selectItemTok$org_jmol_script_T$I($var, -2147483648));
}, 1);

Clazz.newMeth(C$, 'selectItemTok$org_jmol_script_T$I', function (tokenIn, i2) {
switch (tokenIn.tok) {
case 11:
case 12:
case 10:
case 7:
case 15:
case 4:
break;
default:
return ((Clazz.instanceOf(tokenIn, "org.jmol.script.SV")) && (tokenIn).myName != null   ? C$.newI$I(0).setv$org_jmol_script_SV(tokenIn) : tokenIn);
}
var bs=null;
var s=null;
var i1=tokenIn.intValue;
var isOne=(i2 == -2147483648);
if (i1 == 2147483647) {
return C$.newSV$I$I$O(tokenIn.tok, (isOne ? i1 : i2), tokenIn.value);
}var len=0;
var isInputSelected=(Clazz.instanceOf(tokenIn, "org.jmol.script.SV") && (tokenIn).index != 2147483647 );
var tokenOut=C$.newSV$I$I$O(tokenIn.tok, 2147483647, null);
switch (tokenIn.tok) {
case 10:
if (Clazz.instanceOf(tokenIn.value, "org.jmol.modelset.BondSet")) {
bs=$I$(11).newBS$javajs_util_BS$IA(tokenIn.value, (tokenIn.value).associatedAtoms);
len=bs.cardinality$();
} else {
bs=$I$(12).copy$javajs_util_BS(tokenIn.value);
len=(isInputSelected ? 1 : bs.cardinality$());
}break;
case 15:
len=(((tokenIn).value)).data.length;
break;
case 7:
len=(tokenIn).getList$().size$();
break;
case 4:
s=tokenIn.value;
len=s.length$();
break;
case 11:
len=-3;
break;
case 12:
len=-4;
break;
}
if (len < 0) {
len=-len;
if (i1 > 0 && Math.abs(i1) > len ) {
var col=i1 % 10;
var row=((i1 - col)/10|0);
if (col > 0 && col <= len  && row <= len ) {
if (tokenIn.tok == 11) return C$.newV$I$O(3, Float.valueOf$F((tokenIn.value).getElement$I$I(row - 1, col - 1)));
return C$.newV$I$O(3, Float.valueOf$F((tokenIn.value).getElement$I$I(row - 1, col - 1)));
}return C$.newV$I$O(4, "");
}if (Math.abs(i1) > len) return C$.newV$I$O(4, "");
var data=Clazz.array(Float.TYPE, [len]);
if (len == 3) {
if (i1 < 0) (tokenIn.value).getColumn$I$FA(-1 - i1, data);
 else (tokenIn.value).getRow$I$FA(i1 - 1, data);
} else {
if (i1 < 0) (tokenIn.value).getColumn$I$FA(-1 - i1, data);
 else (tokenIn.value).getRow$I$FA(i1 - 1, data);
}if (isOne) return C$.getVariableAF$FA(data);
if (i2 < 1 || i2 > len ) return C$.newV$I$O(4, "");
return C$.newV$I$O(3, Float.valueOf$F(data[i2 - 1]));
}if (i1 <= 0) i1=len + i1;
if (!isOne) {
if (i1 < 1) i1=1;
if (i2 == 0) i2=len;
 else if (i2 < 0) i2=len + i2;
if (i2 < i1) i2=i1;
}switch (tokenIn.tok) {
case 10:
tokenOut.value=bs;
if (isInputSelected) {
if (i1 > 1) bs.clearAll$();
break;
}if (isOne) {
if (i1 == len) {
i2=bs.length$() - 1;
} else if (i1 == 1) {
i2=bs.nextSetBit$I(0);
}if (i2 >= -1) {
bs.clearAll$();
if (i2 >= 0) bs.set$I(i2);
break;
}i2=i1;
}var n=0;
for (var j=bs.nextSetBit$I(0); j >= 0; j=bs.nextSetBit$I(j + 1)) if (++n < i1 || n > i2 ) bs.clear$I(j);

break;
case 4:
tokenOut.value=(--i1 < 0 || i1 >= len  ? "" : isOne ? s.substring$I$I(i1, i1 + 1) : s.substring$I$I(i1, Math.min(i2, len)));
break;
case 7:
if (--i1 < 0 || i1 >= len ) return C$.newV$I$O(4, "");
if (isOne) return (tokenIn).getList$().get$I(i1);
var o2=Clazz.new_($I$(3));
var o1=(tokenIn).getList$();
var nn=Math.min(i2, len) - i1;
for (var i=0; i < nn; i++) o2.addLast$TV(C$.newT$org_jmol_script_T(o1.get$I(i + i1)));

tokenOut.value=o2;
break;
case 15:
if (--i1 < 0 || i1 >= len ) return C$.newV$I$O(4, "");
var data=(((tokenIn).value)).data;
if (isOne) return C$.newI$I(data[i1]);
var b=Clazz.array(Byte.TYPE, [Math.min(i2, len) - i1]);
for (var i=b.length; --i >= 0; ) b[i]=(data[i1 + i]|0);

tokenOut.value=Clazz.new_($I$(13).c$$BA,[b]);
break;
}
return tokenOut;
}, 1);

Clazz.newMeth(C$, 'setSelectedValue$I$I$org_jmol_script_SV', function (pt1, pt2, $var) {
if (pt1 == 2147483647) return;
var len;
switch (this.tok) {
case 11:
case 12:
len=(this.tok == 11 ? 3 : 4);
if (pt2 != 2147483647) {
var col=pt2;
var row=pt1;
if (col > 0 && col <= len  && row <= len ) {
if (this.tok == 11) (this.value).setElement$I$I$F(row - 1, col - 1, C$.fValue$org_jmol_script_T($var));
 else (this.value).setElement$I$I$F(row - 1, col - 1, C$.fValue$org_jmol_script_T($var));
return;
}}if (pt1 != 0 && Math.abs(pt1) <= len  && $var.tok == 7 ) {
var sv=$var.getList$();
if (sv.size$() == len) {
var data=Clazz.array(Float.TYPE, [len]);
for (var i=0; i < len; i++) data[i]=C$.fValue$org_jmol_script_T(sv.get$I(i));

if (pt1 > 0) {
if (this.tok == 11) (this.value).setRowA$I$FA(pt1 - 1, data);
 else (this.value).setRowA$I$FA(pt1 - 1, data);
} else {
if (this.tok == 11) (this.value).setColumnA$I$FA(-1 - pt1, data);
 else (this.value).setColumnA$I$FA(-1 - pt1, data);
}break;
}}break;
case 4:
var str=this.value;
var pt=str.length$();
if (pt1 <= 0) pt1=pt + pt1;
if (--pt1 < 0) pt1=0;
while (pt1 >= str.length$())str += " ";

if (pt2 == 2147483647) {
pt2=pt1;
} else {
if (--pt2 < 0) pt2=pt + pt2;
while (pt2 >= str.length$())str += " ";

}if (pt2 >= pt1) this.value=str.substring$I$I(0, pt1) + C$.sValue$org_jmol_script_T($var) + str.substring$I(++pt2) ;
this.intValue=this.index=2147483647;
break;
case 7:
var v=this.value;
len=v.size$();
if (pt1 <= 0) pt1=len + pt1;
if (--pt1 < 0) pt1=0;
if (len <= pt1) for (var i=len; i <= pt1; i++) v.addLast$TV(C$.newV$I$O(4, ""));

v.set$I$TE(pt1, $var);
break;
}
});

Clazz.newMeth(C$, 'escape$', function () {
switch (this.tok) {
case 4:
return $I$(9).esc$S(this.value);
case 11:
case 12:
return $I$(9).toJSON$S$O(null, this.value);
case 7:
case 6:
case 14:
var sb=Clazz.new_($I$(8));
C$.sValueArray$javajs_util_SB$org_jmol_script_SV$S$S$Z$Z$Z$I$Z(sb, this, "", "", true, false, true, 2147483647, false);
return sb.toString();
default:
return C$.sValue$org_jmol_script_T(this);
}
});

Clazz.newMeth(C$, 'unescapePointOrBitsetAsVariable$O', function (o) {
if (o == null ) return o;
var v=null;
var s=null;
if (Clazz.instanceOf(o, "org.jmol.script.SV")) {
var sv=o;
switch (sv.tok) {
case 8:
case 9:
case 11:
case 12:
case 10:
v=sv.value;
break;
case 4:
s=sv.value;
break;
default:
s=C$.sValue$org_jmol_script_T(sv);
break;
}
} else if (Clazz.instanceOf(o, "java.lang.String")) {
s=o;
}if (s != null  && s.length$() == 0 ) return s;
if (v == null ) v=$I$(7).uABsM$S(s);
if (Clazz.instanceOf(v, "javajs.util.P3")) return (C$.newV$I$O(8, v));
if (Clazz.instanceOf(v, "javajs.util.P4")) return C$.newV$I$O(9, v);
if (Clazz.instanceOf(v, "javajs.util.BS")) {
if (s != null  && s.indexOf$S("[{") == 0 ) v=$I$(11).newBS$javajs_util_BS$IA(v, null);
return C$.newV$I$O(10, v);
}if (Clazz.instanceOf(v, "javajs.util.M34")) return (C$.newV$I$O(Clazz.instanceOf(v, "javajs.util.M3") ? 11 : 12, v));
return o;
}, 1);

Clazz.newMeth(C$, 'getBoolean$Z', function (value) {
return C$.newT$org_jmol_script_T(value ? C$.vT : C$.vF);
}, 1);

Clazz.newMeth(C$, 'sprintf$S$org_jmol_script_SV', function (strFormat, $var) {
if ($var == null ) return strFormat;
var isArray=($var.tok == 7);
var vd=(strFormat.indexOf$S("d") >= 0 || strFormat.indexOf$S("i") >= 0  ? Clazz.array(Integer.TYPE, [1]) : null);
var vf=(strFormat.indexOf$S("f") >= 0 ? Clazz.array(Float.TYPE, [1]) : null);
var ve=(strFormat.indexOf$S("e") >= 0 ? Clazz.array(Double.TYPE, [1]) : null);
var getS=(strFormat.indexOf$S("s") >= 0);
var getP=(strFormat.indexOf$S("p") >= 0 && (isArray || $var.tok == 8 ) );
var getQ=(strFormat.indexOf$S("q") >= 0 && (isArray || $var.tok == 9 ) );
var of=Clazz.array(java.lang.Object, -1, [vd, vf, ve, null, null, null]);
if (!isArray) return C$.sprintf$S$org_jmol_script_SV$OA$IA$FA$DA$Z$Z$Z(strFormat, $var, of, vd, vf, ve, getS, getP, getQ);
var sv=$var.getList$();
var list2=Clazz.array(String, [sv.size$()]);
for (var i=0; i < list2.length; i++) list2[i]=C$.sprintf$S$org_jmol_script_SV$OA$IA$FA$DA$Z$Z$Z(strFormat, sv.get$I(i), of, vd, vf, ve, getS, getP, getQ);

return list2;
}, 1);

Clazz.newMeth(C$, 'sprintf$S$org_jmol_script_SV$OA$IA$FA$DA$Z$Z$Z', function (strFormat, $var, of, vd, vf, ve, getS, getP, getQ) {
if ($var.tok == 6) {
var pt=strFormat.indexOf$S("[");
if (pt >= 0) {
var pt1;
$var=$var.getMap$().get$O(strFormat.substring$I$I(pt + 1, pt1=strFormat.indexOf$S("]")));
strFormat=strFormat.substring$I$I(0, pt) + strFormat.substring$I(pt1 + 1);
}}if (vd != null ) vd[0]=C$.iValue$org_jmol_script_T($var);
if (vf != null ) vf[0]=C$.fValue$org_jmol_script_T($var);
if (ve != null ) ve[0]=C$.fValue$org_jmol_script_T($var);
if (getS) of[3]=C$.sValue$org_jmol_script_T($var);
if (getP) of[4]=$var.value;
if (getQ) of[5]=$var.value;
return $I$(9).sprintf$S$S$OA(strFormat, "IFDspq", of);
}, 1);

Clazz.newMeth(C$, 'getFormatType$S', function (format) {
return (format.indexOf$S(";") >= 0 ? -1 : ";json;base64;bytearray;array;".indexOf$S(";" + format.toLowerCase$() + ";" ));
}, 1);

Clazz.newMeth(C$, 'format$org_jmol_script_SVA$I', function (args, pt) {
switch (args.length) {
case 0:
return "";
case 1:
return C$.sValue$org_jmol_script_T(args[0]);
case 2:
if (pt == 2147483647) pt=C$.getFormatType$S(args[0].asString$());
switch (pt) {
case 0:
var name=args[1].myName;
args[1].myName=null;
var o=args[1].toJSON$();
args[1].myName=name;
return o;
case 5:
case 12:
case 22:
var bytes;
switch (args[1].tok) {
case 15:
bytes=$I$(2).arrayCopyByte$BA$I((args[1].value).data, -1);
break;
case 7:
var l=args[1].getList$();
if (pt == 22) {
var l1=Clazz.new_($I$(3));
for (var i=l.size$(); --i >= 0; ) l1.addLast$TV(l.get$I(i));

return l1;
}bytes=Clazz.array(Byte.TYPE, [l.size$()]);
for (var i=bytes.length; --i >= 0; ) bytes[i]=((l.get$I(i).asInt$()|0)|0);

break;
default:
var s=args[1].asString$();
if (s.startsWith$S(";base64,")) {
if (pt == 5) return s;
bytes=$I$(14).decodeBase64$S(s);
} else {
bytes=s.getBytes$();
}}
return (pt == 22 ? C$.getVariable$O(bytes) : pt == 12 ? Clazz.new_($I$(13).c$$BA,[bytes]) : ";base64," + $I$(14).getBase64$BA(bytes).toString());
}
}
var format=$I$(9).split$S$S($I$(9).rep$S$S$S(C$.sValue$org_jmol_script_T(args[0]), "%%", "\u0001"), "%");
if (format.length == 0) return "";
var sb=Clazz.new_($I$(8));
sb.append$S(format[0]);
for (var i=1; i < format.length; i++) {
var ret=C$.sprintf$S$org_jmol_script_SV($I$(9).formatCheck$S("%" + format[i]), (args[1].tok == 6 ? args[1] : args[1].tok == 7 ? args[1].getList$().get$I(i - 1) : i < args.length ? args[i] : null));
if ($I$(2).isAS$O(ret)) {
var list=ret;
for (var j=0; j < list.length; j++) sb.append$S(list[j]).append$S("\n");

continue;
}sb.append$S(ret);
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'getBitSet$org_jmol_script_SV$Z', function (x, allowNull) {
switch (x.tok) {
case 10:
return (x.index == 2147483647 ? C$.selectItemTok$org_jmol_script_T$I(x, -2147483648) : x).value;
case 7:
return C$.unEscapeBitSetArray$javajs_util_Lst$Z(x.getList$(), allowNull);
default:
return (allowNull ? null : Clazz.new_($I$(15)));
}
}, 1);

Clazz.newMeth(C$, 'unEscapeBitSetArray$javajs_util_Lst$Z', function (x, allowNull) {
var bs=Clazz.new_($I$(15));
for (var i=0; i < x.size$(); i++) {
var v=x.get$I(i);
if (v.tok == 2 && v.intValue >= 0 ) {
bs.set$I(v.intValue);
} else if (v.tok == 7) {
var bs2=C$.unEscapeBitSetArray$javajs_util_Lst$Z(v.getList$(), true);
if (bs2 == null ) return (allowNull ? null : Clazz.new_($I$(15)));
bs.or$javajs_util_BS(bs2);
} else if (!C$.unEscapeBitSet$org_jmol_script_SV$javajs_util_BS(v, bs)) {
return (allowNull ? null : Clazz.new_($I$(15)));
}}
return bs;
}, 1);

Clazz.newMeth(C$, 'areEqual$org_jmol_script_SV$org_jmol_script_SV', function (x1, x2) {
if (x1 == null  || x2 == null  ) return false;
if (x1.tok == x2.tok) {
switch (x1.tok) {
case 4:
return (x1.value).equalsIgnoreCase$S(x2.value);
case 10:
case 15:
case 6:
case 7:
case 14:
return x1.equals$O(x2);
case 8:
return ((x1.value).distance$javajs_util_T3(x2.value) < 1.0E-6 );
case 9:
return ((x1.value).distance4$javajs_util_P4(x2.value) < 1.0E-6 );
case 11:
return (x1.value).equals$O(x2.value);
case 12:
return (x1.value).equals$O(x2.value);
}
}return (Math.abs(C$.fValue$org_jmol_script_T(x1) - C$.fValue$org_jmol_script_T(x2)) < 1.0E-6 );
}, 1);

Clazz.newMeth(C$, 'isLike$org_jmol_script_SV$org_jmol_script_SV', function (x1, x2) {
return (x1 != null  && x2 != null   && x1.tok == 4  && x2.tok == 4  && $I$(9).isLike$S$S(x1.value, x2.value) );
}, 1);

Clazz.newMeth(C$, 'sortOrReverse$I', function (arrayPt) {
var x=this.getList$();
if (x != null  && x.size$() > 1 ) {
if (arrayPt == -2147483648) {
var n=x.size$();
for (var i=0; i < n; i++) {
var v=x.get$I(i);
x.set$I$TE(i, x.get$I(--n));
x.set$I$TE(n, v);
}
} else {
$I$(16).sort$java_util_List$java_util_Comparator(this.getList$(), Clazz.new_($I$(17).c$$I$S, [this, null, --arrayPt, null]));
}}return this;
});

Clazz.newMeth(C$, 'pushPop$org_jmol_script_SV$org_jmol_script_SV', function (mapKey, value) {
if (mapKey == null ) {
var m=this.getMap$();
if (m == null ) {
var x=this.getList$();
if (value == null  || x == null  ) {
return (x == null  || x.size$() == 0  ? C$.newS$S("") : x.removeItemAt$I(x.size$() - 1));
}x.addLast$TV(C$.newI$I(0).setv$org_jmol_script_SV(value));
} else {
if (value == null ) {
m.clear$();
} else {
var m1=value.getMap$();
if (m1 != null ) m.putAll$java_util_Map(m1);
}}} else {
var m=this.getMap$();
if (value == null ) {
var v=null;
if (m == null ) {
var lst=this.getList$();
var len=lst.size$();
var i=C$.iValue$org_jmol_script_T(mapKey) - 1;
if (i < 0) i+=len;
if (i >= 0 && i < len ) {
v=lst.removeItemAt$I(i);
}} else {
v=m.remove$O(mapKey.asString$());
}return (v == null  ? C$.newS$S("") : v);
}if (m != null ) {
m.put$TK$TV(mapKey.asString$(), C$.newI$I(0).setv$org_jmol_script_SV(value));
}}return this;
});

Clazz.newMeth(C$, 'unEscapeBitSet$org_jmol_script_SV$javajs_util_BS', function (x, bs) {
switch (x.tok) {
case 4:
var bs1=$I$(15).unescape$S(x.value);
if (bs1 == null ) return false;
bs.or$javajs_util_BS(bs1);
return true;
case 10:
bs.or$javajs_util_BS(x.value);
return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'strListValue$org_jmol_script_T', function (x) {
if (x.tok != 7) return Clazz.array(String, -1, [C$.sValue$org_jmol_script_T(x)]);
var sv=(x).getList$();
var list=Clazz.array(String, [sv.size$()]);
for (var i=sv.size$(); --i >= 0; ) list[i]=C$.sValue$org_jmol_script_T(sv.get$I(i));

return list;
}, 1);

Clazz.newMeth(C$, 'flistValue$org_jmol_script_T$I', function (x, nMin) {
if (x.tok != 7) return Clazz.array(Float.TYPE, -1, [C$.fValue$org_jmol_script_T(x)]);
var sv=(x).getList$();
var list;
list=Clazz.array(Float.TYPE, [Math.max(nMin, sv.size$())]);
if (nMin == 0) nMin=list.length;
for (var i=Math.min(sv.size$(), nMin); --i >= 0; ) list[i]=C$.fValue$org_jmol_script_T(sv.get$I(i));

return list;
}, 1);

Clazz.newMeth(C$, 'toArray$', function () {
var dim;
var o2;
var m3=null;
var m4=null;
switch (this.tok) {
case 11:
m3=this.value;
dim=3;
break;
case 12:
m4=this.value;
dim=4;
break;
case 7:
return this;
default:
o2=Clazz.new_($I$(3));
o2.addLast$TV(this);
return C$.newV$I$O(7, o2);
}
o2=Clazz.new_($I$(3));
for (var i=0; i < dim; i++) {
var a=Clazz.array(Float.TYPE, [dim]);
if (m3 == null ) m4.getRow$I$FA(i, a);
 else m3.getRow$I$FA(i, a);
o2.addLast$TV(C$.getVariableAF$FA(a));
}
return C$.newV$I$O(7, o2);
});

Clazz.newMeth(C$, 'mapValue$S', function (key) {
switch (this.tok) {
case 6:
return (this.value).get$O(key);
case 14:
var sc=(this.value);
return (key.equals$O("_path") ? C$.newS$S(sc.contextPath) : sc.getVariable$S(key));
}
return null;
});

Clazz.newMeth(C$, 'getList$', function () {
return (this.tok == 7 ? this.value : null);
});

Clazz.newMeth(C$, 'isScalar$org_jmol_script_SV', function (x) {
switch (x.tok) {
case 7:
return false;
case 4:
return ((x.value).indexOf$S("\n") < 0);
default:
return true;
}
}, 1);

Clazz.newMeth(C$, 'toJSON$', function () {
switch (this.tok) {
case 1073742335:
case 1073742334:
case 2:
case 3:
return C$.sValue$org_jmol_script_T(this);
case 15:
return $I$(9).byteArrayToJSON$BA((this.value).data);
case 14:
return $I$(9).toJSON$S$O(null, (this.value).getFullMap$());
case 7:
case 6:
if (this.myName != null ) {
this.myName=null;
return (this.tok == 6 ? "{  }" : "[  ]");
}this.myName="x";
var s=$I$(9).toJSON$S$O(null, this.value);
this.myName=null;
return s;
default:
return $I$(9).toJSON$S$O(null, this.value);
}
});

Clazz.newMeth(C$, 'mapGet$S', function (key) {
return this.getMap$().get$O(key);
});

Clazz.newMeth(C$, 'mapPut$S$org_jmol_script_SV', function (key, v) {
this.getMap$().put$TK$TV(key, v);
});

Clazz.newMeth(C$, 'getMap$', function () {
switch (this.tok) {
case 6:
return this.value;
case 14:
return (this.value).vars;
}
return null;
});

Clazz.newMeth(C$, 'getMapKeys$I$Z', function (nLevels, skipEmpty) {
if (this.tok != 6) return "";
var sb=Clazz.new_($I$(8));
C$.sValueArray$javajs_util_SB$org_jmol_script_SV$S$S$Z$Z$Z$I$Z(sb, this, "", "", true, false, false, nLevels + 1, skipEmpty);
return sb.toString();
});

Clazz.newMeth(C$, 'toString', function () {
return this.toString2$() + "[" + this.myName + " index =" + this.index + " intValue=" + this.intValue + "]" ;
});

Clazz.newMeth(C$, 'getKeys$Z', function (isAll) {
switch (this.tok) {
case 6:
case 14:
case 7:
break;
default:
return null;
}
var keys=Clazz.new_($I$(3));
p$1.getKeyList$Z$javajs_util_Lst$S.apply(this, [isAll, keys, ""]);
var skeys=keys.toArray$TTA(Clazz.array(String, [keys.size$()]));
$I$(10).sort$OA(skeys);
return skeys;
});

Clazz.newMeth(C$, 'getKeyList$Z$javajs_util_Lst$S', function (isAll, keys, prefix) {
var map=this.getMap$();
if (map == null ) {
if (isAll) {
var lst;
var n;
if ((lst=this.getList$()) != null  && (n=lst.size$()) > 0 ) p$1.getKeyList$Z$javajs_util_Lst$S.apply(lst.get$I(n - 1), [true, keys, prefix + "." + n + "." ]);
}return;
}for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var k=e.getKey$();
if (isAll && (k.length$() == 0 || !$I$(9).isLetter$C(k.charAt$I(0)) ) ) {
if (prefix.endsWith$S(".")) prefix=prefix.substring$I$I(0, prefix.length$() - 1);
k="[" + $I$(9).esc$S(k) + "]" ;
}keys.addLast$TV(prefix + k);
if (isAll) p$1.getKeyList$Z$javajs_util_Lst$S.apply(e.getValue$(), [true, keys, prefix + k + "." ]);
}
}, p$1);

Clazz.newMeth(C$, 'deepCopy$O$Z$Z', function (v, isHash, isDeep) {
if (isHash) {
var vold=v;
var vnew=Clazz.new_($I$(4));
for (var e, $e = vold.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var v1=e.getValue$();
vnew.put$TK$TV(e.getKey$(), isDeep ? C$.deepCopySV$org_jmol_script_SV(v1) : v1);
}
return vnew;
}var vold2=v;
var vnew2=Clazz.new_($I$(3));
for (var i=0, n=vold2.size$(); i < n; i++) {
var vm=vold2.get$I(i);
vnew2.addLast$TV(isDeep ? C$.deepCopySV$org_jmol_script_SV(vm) : vm);
}
return vnew2;
}, 1);

Clazz.newMeth(C$, 'deepCopySV$org_jmol_script_SV', function (vm) {
switch (vm.tok) {
case 6:
case 7:
if ("\r".equals$O(vm.myName)) {
vm.myName=null;
vm=C$.newV$I$O(vm.tok, (vm.tok == 6 ? Clazz.new_($I$(4)) : Clazz.new_($I$(3))));
} else {
var name0=vm.myName;
vm.myName="\r";
var vm0=vm;
vm=C$.newV$I$O(vm.tok, C$.deepCopy$O$Z$Z(vm.value, vm.tok == 6, true));
vm0.myName=name0;
}break;
}
return vm;
}, 1);

Clazz.newMeth(C$, 'sortMapArray$S', function (key) {
var lst=this.getList$();
if (lst != null ) {
$I$(16).sort$java_util_List$java_util_Comparator(this.getList$(), Clazz.new_($I$(17).c$$I$S, [this, null, 0, key]));
}return this;
});

Clazz.newMeth(C$, 'safeJSON$S$O', function (key, property) {
return "{" + (Clazz.instanceOf(property, "org.jmol.script.SV") ? $I$(9).esc$S(key) + " : " + C$.format$org_jmol_script_SVA$I(Clazz.array(C$, -1, [null, property]), 0)  : $I$(9).toJSON$S$O(key, property)) + "}" ;
}, 1);
;
(function(){var C$=Clazz.newClass(P$.SV, "Sort", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.arrayPt=0;
this.myKey=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$S', function (arrayPt, myKey) {
C$.$init$.apply(this);
this.arrayPt=arrayPt;
this.myKey=myKey;
}, 1);

Clazz.newMeth(C$, ['compare$org_jmol_script_SV$org_jmol_script_SV','compare$','compare$TT$TT'], function (x, y) {
if (x.tok != y.tok) {
if (x.tok == 3 || x.tok == 2  || y.tok == 3  || y.tok == 2 ) {
var fx=P$.SV.fValue$org_jmol_script_T(x);
var fy=P$.SV.fValue$org_jmol_script_T(y);
return (fx < fy  ? -1 : fx > fy  ? 1 : 0);
}if (x.tok == 4 || y.tok == 4 ) return P$.SV.sValue$org_jmol_script_T(x).compareTo$S(P$.SV.sValue$org_jmol_script_T(y));
}switch (x.tok) {
case 4:
return P$.SV.sValue$org_jmol_script_T(x).compareTo$S(P$.SV.sValue$org_jmol_script_T(y));
case 7:
var sx=x.getList$();
var sy=y.getList$();
if (sx.size$() != sy.size$()) return (sx.size$() < sy.size$() ? -1 : 1);
var iPt=this.arrayPt;
if (iPt < 0) iPt+=sx.size$();
if (iPt < 0 || iPt >= sx.size$() ) return 0;
return this.compare$org_jmol_script_SV$org_jmol_script_SV(sx.get$I(iPt), sy.get$I(iPt));
case 6:
if (this.myKey != null ) {
return this.compare$org_jmol_script_SV$org_jmol_script_SV(x.getMap$().get$O(this.myKey), y.getMap$().get$O(this.myKey));
}default:
var fx=P$.SV.fValue$org_jmol_script_T(x);
var fy=P$.SV.fValue$org_jmol_script_T(y);
return (fx < fy  ? -1 : fx > fy  ? 1 : 0);
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:21 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
