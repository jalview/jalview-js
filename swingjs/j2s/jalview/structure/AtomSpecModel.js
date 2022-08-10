(function(){var P$=Clazz.newPackage("jalview.structure"),I$=[[0,'java.util.TreeMap','java.util.BitSet','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomSpecModel");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['atomSpec','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.atomSpec=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'addRange$S$I$I$S',  function (model, startPos, endPos, chain) {
var modelData=this.atomSpec.get$O(model);
if (modelData == null ) {
this.atomSpec.put$O$O(model, modelData=Clazz.new_($I$(1,1)));
}var chainData=modelData.get$O(chain);
if (chainData == null ) {
chainData=Clazz.new_($I$(2,1));
modelData.put$O$O(chain, chainData);
}chainData.set$I$I(startPos, endPos + 1);
});

Clazz.newMeth(C$, 'getModels$',  function () {
return this.atomSpec.keySet$();
});

Clazz.newMeth(C$, 'getModelCount$',  function () {
return this.atomSpec.size$();
});

Clazz.newMeth(C$, 'getChains$S',  function (model) {
return this.atomSpec.containsKey$O(model) ? this.atomSpec.get$O(model).keySet$() : null;
});

Clazz.newMeth(C$, 'getRanges$S$S',  function (model, chain) {
var ranges=Clazz.new_($I$(3,1));
if (this.atomSpec.containsKey$O(model)) {
var bs=this.atomSpec.get$O(model).get$O(chain);
var start=0;
if (bs != null ) {
start=bs.nextSetBit$I(start);
var end=0;
while (start != -1){
end=bs.nextClearBit$I(start);
ranges.add$O(Clazz.array(Integer.TYPE, -1, [start, end - 1]));
start=bs.nextSetBit$I(end);
}
}}return ranges;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
