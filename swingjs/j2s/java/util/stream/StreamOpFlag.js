(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,['java.util.stream.StreamOpFlag','.Type'],['java.util.stream.StreamOpFlag','.MaskBuilder'],'java.util.EnumMap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StreamOpFlag", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'Enum');
C$.SPLITERATOR_CHARACTERISTICS_MASK=0;
C$.STREAM_MASK=0;
C$.OP_MASK=0;
C$.TERMINAL_OP_MASK=0;
C$.UPSTREAM_TERMINAL_OP_MASK=0;
C$.FLAG_MASK=0;
C$.FLAG_MASK_IS=0;
C$.FLAG_MASK_NOT=0;
C$.INITIAL_OPS_VALUE=0;
C$.IS_DISTINCT=0;
C$.NOT_DISTINCT=0;
C$.IS_SORTED=0;
C$.NOT_SORTED=0;
C$.IS_ORDERED=0;
C$.NOT_ORDERED=0;
C$.IS_SIZED=0;
C$.NOT_SIZED=0;
C$.IS_SHORT_CIRCUIT=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I$java_util_stream_StreamOpFlag_MaskBuilder, "DISTINCT", 0, [0, C$.set$java_util_stream_StreamOpFlag_Type($I$(1).SPLITERATOR).set$java_util_stream_StreamOpFlag_Type($I$(1).STREAM).setAndClear$java_util_stream_StreamOpFlag_Type($I$(1).OP)]);
Clazz.newEnumConst($vals, C$.c$$I$java_util_stream_StreamOpFlag_MaskBuilder, "SORTED", 1, [1, C$.set$java_util_stream_StreamOpFlag_Type($I$(1).SPLITERATOR).set$java_util_stream_StreamOpFlag_Type($I$(1).STREAM).setAndClear$java_util_stream_StreamOpFlag_Type($I$(1).OP)]);
Clazz.newEnumConst($vals, C$.c$$I$java_util_stream_StreamOpFlag_MaskBuilder, "ORDERED", 2, [2, C$.set$java_util_stream_StreamOpFlag_Type($I$(1).SPLITERATOR).set$java_util_stream_StreamOpFlag_Type($I$(1).STREAM).setAndClear$java_util_stream_StreamOpFlag_Type($I$(1).OP).clear$java_util_stream_StreamOpFlag_Type($I$(1).TERMINAL_OP).clear$java_util_stream_StreamOpFlag_Type($I$(1).UPSTREAM_TERMINAL_OP)]);
Clazz.newEnumConst($vals, C$.c$$I$java_util_stream_StreamOpFlag_MaskBuilder, "SIZED", 3, [3, C$.set$java_util_stream_StreamOpFlag_Type($I$(1).SPLITERATOR).set$java_util_stream_StreamOpFlag_Type($I$(1).STREAM).clear$java_util_stream_StreamOpFlag_Type($I$(1).OP)]);
Clazz.newEnumConst($vals, C$.c$$I$java_util_stream_StreamOpFlag_MaskBuilder, "SHORT_CIRCUIT", 4, [12, C$.set$java_util_stream_StreamOpFlag_Type($I$(1).OP).set$java_util_stream_StreamOpFlag_Type($I$(1).TERMINAL_OP)]);
C$.SPLITERATOR_CHARACTERISTICS_MASK=C$.createMask$java_util_stream_StreamOpFlag_Type($I$(1).SPLITERATOR);
C$.STREAM_MASK=C$.createMask$java_util_stream_StreamOpFlag_Type($I$(1).STREAM);
C$.OP_MASK=C$.createMask$java_util_stream_StreamOpFlag_Type($I$(1).OP);
C$.TERMINAL_OP_MASK=C$.createMask$java_util_stream_StreamOpFlag_Type($I$(1).TERMINAL_OP);
C$.UPSTREAM_TERMINAL_OP_MASK=C$.createMask$java_util_stream_StreamOpFlag_Type($I$(1).UPSTREAM_TERMINAL_OP);
C$.FLAG_MASK=C$.createFlagMask$();
C$.FLAG_MASK_IS=C$.STREAM_MASK;
C$.FLAG_MASK_NOT=C$.STREAM_MASK << 1;
C$.INITIAL_OPS_VALUE=C$.FLAG_MASK_IS | C$.FLAG_MASK_NOT;
C$.IS_DISTINCT=C$.DISTINCT.set;
C$.NOT_DISTINCT=C$.DISTINCT.clear;
C$.IS_SORTED=C$.SORTED.set;
C$.NOT_SORTED=C$.SORTED.clear;
C$.IS_ORDERED=C$.ORDERED.set;
C$.NOT_ORDERED=C$.ORDERED.clear;
C$.IS_SIZED=C$.SIZED.set;
C$.NOT_SIZED=C$.SIZED.clear;
C$.IS_SHORT_CIRCUIT=C$.SHORT_CIRCUIT.set;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.maskTable=null;
this.bitPosition=0;
this.set=0;
this.clear=0;
this.preserve=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'set$java_util_stream_StreamOpFlag_Type', function (t) {
return Clazz.new_($I$(2).c$$java_util_Map,[Clazz.new_($I$(3).c$$Class,[Clazz.getClass($I$(1))])]).set$java_util_stream_StreamOpFlag_Type(t);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_util_stream_StreamOpFlag_MaskBuilder', function (position, maskBuilder) {
C$.$init$.apply(this);
this.maskTable=maskBuilder.build$();
position*=2;
this.bitPosition=position;
this.set=1 << position;
this.clear=2 << position;
this.preserve=3 << position;
}, 1);

Clazz.newMeth(C$, 'set$', function () {
return this.set;
});

Clazz.newMeth(C$, 'clear$', function () {
return this.clear;
});

Clazz.newMeth(C$, 'isStreamFlag$', function () {
return (this.maskTable.get$O($I$(1).STREAM)).intValue$() > 0 ;
});

Clazz.newMeth(C$, 'isKnown$I', function (flags) {
return (flags & this.preserve) == this.set;
});

Clazz.newMeth(C$, 'isCleared$I', function (flags) {
return (flags & this.preserve) == this.clear;
});

Clazz.newMeth(C$, 'isPreserved$I', function (flags) {
return (flags & this.preserve) == this.preserve;
});

Clazz.newMeth(C$, 'canSet$java_util_stream_StreamOpFlag_Type', function (t) {
return ((this.maskTable.get$O(t)).intValue$() & 1) > 0;
});

Clazz.newMeth(C$, 'createMask$java_util_stream_StreamOpFlag_Type', function (t) {
var mask=0;
for (var flag, $flag = 0, $$flag = C$.values$(); $flag<$$flag.length&&((flag=($$flag[$flag])),1);$flag++) {
mask|=(flag.maskTable.get$O(t)).intValue$() << flag.bitPosition;
}
return mask;
}, 1);

Clazz.newMeth(C$, 'createFlagMask$', function () {
var mask=0;
for (var flag, $flag = 0, $$flag = C$.values$(); $flag<$$flag.length&&((flag=($$flag[$flag])),1);$flag++) {
mask|=flag.preserve;
}
return mask;
}, 1);

Clazz.newMeth(C$, 'getMask$I', function (flags) {
return (flags == 0) ? C$.FLAG_MASK : ~(flags | ((C$.FLAG_MASK_IS & flags) << 1) | ((C$.FLAG_MASK_NOT & flags) >> 1) );
}, 1);

Clazz.newMeth(C$, 'combineOpFlags$I$I', function (newStreamOrOpFlags, prevCombOpFlags) {
return (prevCombOpFlags & C$.getMask$I(newStreamOrOpFlags)) | newStreamOrOpFlags;
}, 1);

Clazz.newMeth(C$, 'toStreamFlags$I', function (combOpFlags) {
return ((~combOpFlags) >> 1) & C$.FLAG_MASK_IS & combOpFlags ;
}, 1);

Clazz.newMeth(C$, 'toCharacteristics$I', function (streamFlags) {
return streamFlags & C$.SPLITERATOR_CHARACTERISTICS_MASK;
}, 1);

Clazz.newMeth(C$, 'fromCharacteristics$java_util_Spliterator', function (spliterator) {
var characteristics=spliterator.characteristics$();
if ((characteristics & 4) != 0 && spliterator.getComparator$() != null  ) {
return characteristics & C$.SPLITERATOR_CHARACTERISTICS_MASK & ~4 ;
} else {
return characteristics & C$.SPLITERATOR_CHARACTERISTICS_MASK;
}}, 1);

Clazz.newMeth(C$, 'fromCharacteristics$I', function (characteristics) {
return characteristics & C$.SPLITERATOR_CHARACTERISTICS_MASK;
}, 1);
;
(function(){var C$=Clazz.newClass(P$.StreamOpFlag, "Type", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "SPLITERATOR", 0, []);
Clazz.newEnumConst($vals, C$.c$, "STREAM", 1, []);
Clazz.newEnumConst($vals, C$.c$, "OP", 2, []);
Clazz.newEnumConst($vals, C$.c$, "TERMINAL_OP", 3, []);
Clazz.newEnumConst($vals, C$.c$, "UPSTREAM_TERMINAL_OP", 4, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){var C$=Clazz.newClass(P$.StreamOpFlag, "MaskBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.map=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (map) {
C$.$init$.apply(this);
this.map=map;
}, 1);

Clazz.newMeth(C$, 'mask$java_util_stream_StreamOpFlag_Type$Integer', function (t, i) {
this.map.put$TK$TV(t, i);
return this;
});

Clazz.newMeth(C$, 'set$java_util_stream_StreamOpFlag_Type', function (t) {
return this.mask$java_util_stream_StreamOpFlag_Type$Integer(t, new Integer(1));
});

Clazz.newMeth(C$, 'clear$java_util_stream_StreamOpFlag_Type', function (t) {
return this.mask$java_util_stream_StreamOpFlag_Type$Integer(t, new Integer(2));
});

Clazz.newMeth(C$, 'setAndClear$java_util_stream_StreamOpFlag_Type', function (t) {
return this.mask$java_util_stream_StreamOpFlag_Type$Integer(t, new Integer(3));
});

Clazz.newMeth(C$, 'build$', function () {
for (var t, $t = 0, $$t = $I$(1).values$(); $t<$$t.length&&((t=($$t[$t])),1);$t++) {
this.map.putIfAbsent$TK$TV(t, new Integer(0b00));
}
return this.map;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
