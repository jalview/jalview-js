(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,['sun.java2d.StateTrackable','.State']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DataBufferInt", null, 'java.awt.image.DataBuffer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.data=null;
this.bankdata=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (size) {
C$.superclazz.c$$sun_java2d_StateTrackable_State$I$I.apply(this, [$I$(1).STABLE, 3, size]);
C$.$init$.apply(this);
this.data=Clazz.array(Integer.TYPE, [size]);
this.bankdata=Clazz.array(Integer.TYPE, [1, null]);
this.bankdata[0]=this.data;
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (size, numBanks) {
C$.superclazz.c$$sun_java2d_StateTrackable_State$I$I$I.apply(this, [$I$(1).STABLE, 3, size, numBanks]);
C$.$init$.apply(this);
this.bankdata=Clazz.array(Integer.TYPE, [numBanks, null]);
for (var i=0; i < numBanks; i++) {
this.bankdata[i]=Clazz.array(Integer.TYPE, [size]);
}
this.data=this.bankdata[0];
}, 1);

Clazz.newMeth(C$, 'c$$IA$I', function (dataArray, size) {
C$.superclazz.c$$sun_java2d_StateTrackable_State$I$I.apply(this, [$I$(1).UNTRACKABLE, 3, size]);
C$.$init$.apply(this);
this.data=dataArray;
this.bankdata=Clazz.array(Integer.TYPE, [1, null]);
this.bankdata[0]=this.data;
}, 1);

Clazz.newMeth(C$, 'c$$IA$I$I', function (dataArray, size, offset) {
C$.superclazz.c$$sun_java2d_StateTrackable_State$I$I$I$I.apply(this, [$I$(1).UNTRACKABLE, 3, size, 1, offset]);
C$.$init$.apply(this);
this.data=dataArray;
this.bankdata=Clazz.array(Integer.TYPE, [1, null]);
this.bankdata[0]=this.data;
}, 1);

Clazz.newMeth(C$, 'c$$IAA$I', function (dataArray, size) {
C$.superclazz.c$$sun_java2d_StateTrackable_State$I$I$I.apply(this, [$I$(1).UNTRACKABLE, 3, size, dataArray.length]);
C$.$init$.apply(this);
this.bankdata=dataArray.clone$();
this.data=this.bankdata[0];
}, 1);

Clazz.newMeth(C$, 'c$$IAA$I$IA', function (dataArray, size, offsets) {
C$.superclazz.c$$sun_java2d_StateTrackable_State$I$I$I$IA.apply(this, [$I$(1).UNTRACKABLE, 3, size, dataArray.length, offsets]);
C$.$init$.apply(this);
this.bankdata=dataArray.clone$();
this.data=this.bankdata[0];
}, 1);

Clazz.newMeth(C$, 'getData$', function () {
this.theTrackable.setUntrackable$();
return this.data;
});

Clazz.newMeth(C$, 'getData$I', function (bank) {
this.theTrackable.setUntrackable$();
return this.bankdata[bank];
});

Clazz.newMeth(C$, 'getBankData$', function () {
this.theTrackable.setUntrackable$();
return this.bankdata.clone$();
});

Clazz.newMeth(C$, 'getElem$I', function (i) {
return this.data[i + this.offset];
});

Clazz.newMeth(C$, 'getElem$I$I', function (bank, i) {
return this.bankdata[bank][i + this.offsets[bank]];
});

Clazz.newMeth(C$, 'setElem$I$I', function (i, val) {
this.data[i + this.offset]=val;
this.theTrackable.markDirty$();
});

Clazz.newMeth(C$, 'setElem$I$I$I', function (bank, i, val) {
this.bankdata[bank][i + this.offsets[bank]]=val;
this.theTrackable.markDirty$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:31 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
