(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications"),I$=[[0,'java.util.Hashtable','java.util.ArrayList','java.io.FileWriter','java.util.Arrays','java.io.File','java.io.FileReader','java.io.StreamTokenizer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BasicINI");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._data=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['_data','java.util.Hashtable']]]

Clazz.newMeth(C$, 'addItem$S$S$S', function (category, key, val) {
if (!this._data.containsKey$O(category)) {
this._data.put$O$O(category, Clazz.new_($I$(1,1)));
}System.out.println$S("[E]" + key + "->" + val );
this._data.get$O(category).put$O$O(key, val);
});

Clazz.newMeth(C$, 'getItem$S$S', function (category, key) {
var result="";
if (this._data.containsKey$O(category)) {
if (this._data.get$O(category).containsKey$O(key)) {
result=this._data.get$O(category).get$O(key);
}}return result;
});

Clazz.newMeth(C$, 'getItemList$S', function (category) {
var result=Clazz.new_($I$(2,1));
if (this._data.containsKey$O(category)) {
for (var key, $key = this._data.get$O(category).keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
result.add$O(this._data.get$O(category).get$O(key));
}
}return result;
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'saveINI$fr_orsay_lri_varna_applications_BasicINI$S', function (data, filename) {
try {
var out=Clazz.new_($I$(3,1).c$$S,[filename]);
var cats=data._data.keySet$();
var sortedCats=Clazz.array(String, [cats.size$()]);
sortedCats=cats.toArray$OA(sortedCats);
$I$(4).sort$OA(sortedCats);
for (var i=0; i < sortedCats.length; i++) {
var cat=sortedCats[i];
out.write$S("[" + cat + "]\n" );
var vals=data._data.get$O(cat);
var keys=vals.keySet$();
var sortedKeys=Clazz.array(String, [keys.size$()]);
sortedKeys=keys.toArray$OA(sortedKeys);
for (var j=0; j < sortedKeys.length; j++) {
var key=sortedKeys[j];
var val=vals.get$O(key);
out.write$S(key + "=" + val + "\n" );
}
}
out.close$();
} catch (e3) {
if (Clazz.exceptionOf(e3,"Exception")){
e3.printStackTrace$();
} else {
throw e3;
}
}
}, 1);

Clazz.newMeth(C$, 'loadINI$S', function (filename) {
var result=Clazz.new_(C$);
var CATEGORY=0;
var KEY=1;
var VAL=2;
var state=1;
var category="";
var key="";
var val="";
try {
System.out.println$S("Loading " + Clazz.new_($I$(5,1).c$$S,[filename]).getAbsolutePath$());
var r=Clazz.new_($I$(6,1).c$$S,[filename]);
var s=Clazz.new_($I$(7,1).c$$java_io_Reader,[r]);
s.resetSyntax$();
s.eolIsSignificant$Z(true);
s.wordChars$I$I("\u0000".$c(), "\u00ff".$c());
s.whitespaceChars$I$I("\u0000".$c(), "\u000f".$c());
s.ordinaryChar$I("[".$c());
s.ordinaryChar$I("]".$c());
s.ordinaryChar$I("=".$c());
var token=s.nextToken$();
while (token != -1){
switch (token) {
case 91:
{
state=0;
}break;
case 93:
{
state=1;
}break;
case 61:
{
state=2;
}break;
case (10):
{
if (state == 2) {
state=1;
result.addItem$S$S$S(category, key, val);
key="";
val="";
}}case (-3):
{
var word=s.sval;
switch (state) {
case (0):
{
category=word;
}break;
case (1):
{
key=word;
}break;
case (2):
{
val=word;
}break;
}
}break;
}
token=s.nextToken$();
}
} catch (exc1) {
if (Clazz.exceptionOf(exc1,"Exception")){
exc1.printStackTrace$();
} else {
throw exc1;
}
}
return result;
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:16 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
