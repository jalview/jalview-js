(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,['sun.java2d.StateTrackable','.State'],'sun.java2d.StateTrackableDelegate']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataBuffer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['dataType','banks','offset','size'],'O',['+offsets','theTrackable','sun.java2d.StateTrackableDelegate']]
,['O',['dataTypeSize','int[]']]]

Clazz.newMeth(C$, 'getDataTypeSize$I', function (type) {
if (type < 0 || type > 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown data type " + type]);
}return C$.dataTypeSize[type];
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (dataType, size) {
C$.c$$sun_java2d_StateTrackable_State$I$I.apply(this, [$I$(1).UNTRACKABLE, dataType, size]);
}, 1);

Clazz.newMeth(C$, 'c$$sun_java2d_StateTrackable_State$I$I', function (initialState, dataType, size) {
;C$.$init$.apply(this);
this.theTrackable=$I$(2).createInstance$sun_java2d_StateTrackable_State(initialState);
this.dataType=dataType;
this.banks=1;
this.size=size;
this.offset=0;
this.offsets=Clazz.array(Integer.TYPE, [1]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (dataType, size, numBanks) {
C$.c$$sun_java2d_StateTrackable_State$I$I$I.apply(this, [$I$(1).UNTRACKABLE, dataType, size, numBanks]);
}, 1);

Clazz.newMeth(C$, 'c$$sun_java2d_StateTrackable_State$I$I$I', function (initialState, dataType, size, numBanks) {
;C$.$init$.apply(this);
this.theTrackable=$I$(2).createInstance$sun_java2d_StateTrackable_State(initialState);
this.dataType=dataType;
this.banks=numBanks;
this.size=size;
this.offset=0;
this.offsets=Clazz.array(Integer.TYPE, [this.banks]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (dataType, size, numBanks, offset) {
C$.c$$sun_java2d_StateTrackable_State$I$I$I$I.apply(this, [$I$(1).UNTRACKABLE, dataType, size, numBanks, offset]);
}, 1);

Clazz.newMeth(C$, 'c$$sun_java2d_StateTrackable_State$I$I$I$I', function (initialState, dataType, size, numBanks, offset) {
;C$.$init$.apply(this);
this.theTrackable=$I$(2).createInstance$sun_java2d_StateTrackable_State(initialState);
this.dataType=dataType;
this.banks=numBanks;
this.size=size;
this.offset=offset;
this.offsets=Clazz.array(Integer.TYPE, [numBanks]);
for (var i=0; i < numBanks; i++) {
this.offsets[i]=offset;
}
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$IA', function (dataType, size, numBanks, offsets) {
C$.c$$sun_java2d_StateTrackable_State$I$I$I$IA.apply(this, [$I$(1).UNTRACKABLE, dataType, size, numBanks, offsets]);
}, 1);

Clazz.newMeth(C$, 'c$$sun_java2d_StateTrackable_State$I$I$I$IA', function (initialState, dataType, size, numBanks, offsets) {
;C$.$init$.apply(this);
if (numBanks != offsets.length) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Number of banks does not match number of bank offsets"]);
}this.theTrackable=$I$(2).createInstance$sun_java2d_StateTrackable_State(initialState);
this.dataType=dataType;
this.banks=numBanks;
this.size=size;
this.offset=offsets[0];
this.offsets=offsets.clone$();
}, 1);

Clazz.newMeth(C$, 'getDataType$', function () {
return this.dataType;
});

Clazz.newMeth(C$, 'getSize$', function () {
return this.size;
});

Clazz.newMeth(C$, 'getOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'getOffsets$', function () {
return this.offsets.clone$();
});

Clazz.newMeth(C$, 'getNumBanks$', function () {
return this.banks;
});

Clazz.newMeth(C$, 'getElem$I', function (i) {
return this.getElem$I$I(0, i);
});

Clazz.newMeth(C$, 'setElem$I$I', function (i, val) {
this.setElem$I$I$I(0, i, val);
});

Clazz.newMeth(C$, 'getElemFloat$I', function (i) {
return this.getElem$I(i);
});

Clazz.newMeth(C$, 'getElemFloat$I$I', function (bank, i) {
return this.getElem$I$I(bank, i);
});

Clazz.newMeth(C$, 'setElemFloat$I$F', function (i, val) {
this.setElem$I$I(i, (val|0));
});

Clazz.newMeth(C$, 'setElemFloat$I$I$F', function (bank, i, val) {
this.setElem$I$I$I(bank, i, (val|0));
});

Clazz.newMeth(C$, 'getElemDouble$I', function (i) {
return this.getElem$I(i);
});

Clazz.newMeth(C$, 'getElemDouble$I$I', function (bank, i) {
return this.getElem$I$I(bank, i);
});

Clazz.newMeth(C$, 'setElemDouble$I$D', function (i, val) {
this.setElem$I$I(i, (val|0));
});

Clazz.newMeth(C$, 'setElemDouble$I$I$D', function (bank, i, val) {
this.setElem$I$I$I(bank, i, (val|0));
});

Clazz.newMeth(C$, 'toIntArray$O', function (obj) {
if (Clazz.instanceOf(obj, Clazz.array(Integer.TYPE, -1))) {
return obj;
} else if (obj == null ) {
return null;
} else if (Clazz.instanceOf(obj, Clazz.array(Short.TYPE, -1))) {
var sdata=obj;
var idata=Clazz.array(Integer.TYPE, [sdata.length]);
for (var i=0; i < sdata.length; i++) {
idata[i]=sdata[i] & 65535;
}
return idata;
} else if (Clazz.instanceOf(obj, Clazz.array(Byte.TYPE, -1))) {
var bdata=obj;
var idata=Clazz.array(Integer.TYPE, [bdata.length]);
for (var i=0; i < bdata.length; i++) {
idata[i]=255 & bdata[i];
}
return idata;
}return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.dataTypeSize=Clazz.array(Integer.TYPE, -1, [8, 16, 16, 32, 32, 64]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
