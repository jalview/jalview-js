(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap"),I$=[[0,'java.io.RandomAccessFile','jalview.util.MessageManager','Error','StringBuffer','com.stevesoft.pat.wrap.StringBufferWrap']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RandomAccessFileWrap", null, null, 'com.stevesoft.pat.StringLike');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.offset=0;
this.i0=0;
this.iend=0;
this.buf=Clazz.array(Byte.TYPE, [1024]);
},1);

C$.$fields$=[['I',['i0','iend'],'J',['offset'],'O',['raf','java.io.RandomAccessFile','buf','byte[]']]]

Clazz.newMeth(C$, 'setOffset$J',  function (o) {
this.offset=o;
this.i0=this.iend=0;
});

Clazz.newMeth(C$, 'getOffset$',  function () {
return this.offset;
});

Clazz.newMeth(C$, 'getBufferSize$',  function () {
return this.buf.length;
});

Clazz.newMeth(C$, 'setBufferSize$I',  function (bs) {
this.buf=Clazz.array(Byte.TYPE, [bs]);
this.i0=this.iend=0;
});

Clazz.newMeth(C$, 'c$$S',  function (file) {
;C$.$init$.apply(this);
this.raf=Clazz.new_($I$(1,1).c$$S$S,[file, "r"]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_RandomAccessFile',  function (raf) {
;C$.$init$.apply(this);
this.raf=raf;
}, 1);

Clazz.newMeth(C$, 'charAt$I',  function (i) {
if (i >= this.i0 && i < this.iend ) {
return String.fromCharCode(this.buf[i - this.i0]);
}try {
this.i0=i - 5;
if (this.i0 < 0) {
this.i0=0;
}this.raf.seek$J(Long.$add(this.i0,this.offset));
this.iend=this.i0 + this.raf.read$BA$I$I(this.buf, 0, this.buf.length);
if (i >= this.i0 && i < this.iend ) {
return String.fromCharCode(this.buf[i - this.i0]);
}} catch (t) {
}
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,[$I$(2,"formatMessage$S$SA",["exception.out_of_bounds_for_file", Clazz.array(String, -1, [Integer.valueOf$I(i).toString(), Integer.valueOf$I(this.i0).toString(), Integer.valueOf$I(this.iend).toString()])])]);
});

Clazz.newMeth(C$, 'toString',  function () {
throw Clazz.new_([$I$(2).getString$S("error.not_implemented")],$I$(3,1).c$$S);
});

Clazz.newMeth(C$, 'length$',  function () {
try {
var len=Long.$sub(this.raf.length$(),this.offset);
if (Long.$gt(len,2147483647 )) {
return 2147483647;
}return Long.$ival(len);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
return 0;
} else {
throw ioe;
}
}
});

Clazz.newMeth(C$, 'substring$I$I',  function (i1, i2) {
var sb=Clazz.new_($I$(4,1));
for (var i=i1; i < i2; i++) {
sb.append$C(this.charAt$I(i));
}
return sb.toString();
});

Clazz.newMeth(C$, 'unwrap$',  function () {
return this.raf;
});

Clazz.newMeth(C$, 'newStringBufferLike$',  function () {
return Clazz.new_($I$(5,1));
});

Clazz.newMeth(C$, 'indexOf$C',  function (c) {
for (var i=0; i < this.length$(); i++) {
if (this.charAt$I(i) == c) {
return i;
}}
return -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
