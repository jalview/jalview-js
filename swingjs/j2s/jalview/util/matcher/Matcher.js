(function(){var P$=Clazz.newPackage("jalview.util.matcher"),I$=[[0,'java.util.Objects',['jalview.util.matcher.Matcher','.PatternType'],'java.util.Locale','jalview.util.matcher.Condition','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Matcher", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'jalview.util.matcher.MatcherI');
C$.$classes$=[['PatternType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.floatValue=0.0;
this.longValue=0;
},1);

C$.$fields$=[['F',['floatValue'],'J',['longValue'],'S',['pattern','uppercasePattern'],'O',['condition','jalview.util.matcher.Condition','patternType','jalview.util.matcher.Matcher.PatternType']]]

Clazz.newMeth(C$, 'c$$jalview_util_matcher_Condition$S',  function (cond, compareTo) {
;C$.$init$.apply(this);
$I$(1).requireNonNull$O(cond);
this.condition=cond;
if (cond.isNumeric$()) {
try {
this.longValue=(Long.valueOf$S(compareTo)).valueOf();
this.pattern=String.valueOf$J(this.longValue);
this.patternType=$I$(2).Integer;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.floatValue=(Float.valueOf$S(compareTo)).valueOf();
this.pattern=String.valueOf$F(this.floatValue);
this.patternType=$I$(2).Float;
} else {
throw e;
}
}
} else {
this.pattern=compareTo;
this.patternType=$I$(2).String;
}this.uppercasePattern=this.pattern == null  ? null : this.pattern.toUpperCase$java_util_Locale($I$(3).ROOT);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_util_matcher_Condition$F',  function (cond, compareTo) {
C$.c$$jalview_util_matcher_Condition$S.apply(this, [cond, String.valueOf$F(compareTo)]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_util_matcher_Condition$J',  function (cond, compareTo) {
C$.c$$jalview_util_matcher_Condition$S.apply(this, [cond, String.valueOf$J(compareTo)]);
}, 1);

Clazz.newMeth(C$, 'matches$S',  function (compareTo) {
if (compareTo == null ) {
return this.matchesNull$();
}var matched=false;
switch (this.patternType) {
case $I$(2).Float:
matched=this.matchesFloat$S$F(compareTo, this.floatValue);
break;
case $I$(2).Integer:
matched=this.matchesLong$S(compareTo);
break;
default:
matched=this.matchesString$S(compareTo);
break;
}
return matched;
});

Clazz.newMeth(C$, 'matchesString$S',  function (compareTo) {
var matched=false;
var upper=compareTo.toUpperCase$java_util_Locale($I$(3).ROOT).trim$();
switch (this.condition) {
case $I$(4).Matches:
matched=upper.equals$O(this.uppercasePattern);
break;
case $I$(4).NotMatches:
matched=!upper.equals$O(this.uppercasePattern);
break;
case $I$(4).Contains:
matched=upper.indexOf$S(this.uppercasePattern) > -1;
break;
case $I$(4).NotContains:
matched=upper.indexOf$S(this.uppercasePattern) == -1;
break;
case $I$(4).Present:
matched=true;
break;
default:
break;
}
return matched;
});

Clazz.newMeth(C$, 'matchesFloat$S$F',  function (testee, compareTo) {
if (!this.condition.isNumeric$()) {
return this.matches$S(testee);
}var f=0.0;
try {
f=(Float.valueOf$S(testee)).valueOf();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return false;
} else {
throw e;
}
}
var matched=false;
switch (this.condition) {
case $I$(4).LT:
matched=f < compareTo ;
break;
case $I$(4).LE:
matched=f <= compareTo ;
break;
case $I$(4).EQ:
matched=f == compareTo ;
break;
case $I$(4).NE:
matched=f != compareTo ;
break;
case $I$(4).GT:
matched=f > compareTo ;
break;
case $I$(4).GE:
matched=f >= compareTo ;
break;
default:
break;
}
return matched;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.pattern.hashCode$() + this.condition.hashCode$() + (this.floatValue|0) ;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null  || !(Clazz.instanceOf(obj, "jalview.util.matcher.Matcher")) ) {
return false;
}var m=obj;
if (this.condition !== m.condition  || this.floatValue != m.floatValue   || Long.$ne(this.longValue,m.longValue ) ) {
return false;
}if (this.pattern == null ) {
return m.pattern == null ;
}return this.uppercasePattern.equals$O(m.uppercasePattern);
});

Clazz.newMeth(C$, 'getCondition$',  function () {
return this.condition;
});

Clazz.newMeth(C$, 'getPattern$',  function () {
return this.pattern;
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(5,1));
sb.append$S(this.condition.toString()).append$S(" ");
if (this.condition.isNumeric$()) {
sb.append$S(this.pattern);
} else {
sb.append$S("\'").append$S(this.pattern).append$S("\'");
}return sb.toString();
});

Clazz.newMeth(C$, 'matchesLong$S',  function (compareTo) {
if (!this.condition.isNumeric$()) {
return this.matches$S(String.valueOf$O(compareTo));
}var val=0;
try {
val=(Long.valueOf$S(compareTo)).valueOf();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return this.matchesFloat$S$F(compareTo, Long.$fval(this.longValue));
} else {
throw e;
}
}
var matched=false;
switch (this.condition) {
case $I$(4).LT:
matched=Long.$lt(val,this.longValue );
break;
case $I$(4).LE:
matched=Long.$le(val,this.longValue );
break;
case $I$(4).EQ:
matched=Long.$eq(val,this.longValue );
break;
case $I$(4).NE:
matched=Long.$ne(val,this.longValue );
break;
case $I$(4).GT:
matched=Long.$gt(val,this.longValue );
break;
case $I$(4).GE:
matched=Long.$ge(val,this.longValue );
break;
default:
break;
}
return matched;
});

Clazz.newMeth(C$, 'matchesNull$',  function () {
if (this.condition.isNumeric$()) {
return false;
} else {
return this.condition === $I$(4).NotContains  || this.condition === $I$(4).NotMatches   || this.condition === $I$(4).NotPresent  ;
}});
;
(function(){/*e*/var C$=Clazz.newClass(P$.Matcher, "PatternType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "String", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Integer", 1, []);
Clazz.newEnumConst($vals, C$.c$, "Float", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
