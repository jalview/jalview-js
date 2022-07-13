(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'java.util.Hashtable','com.stevesoft.pat.Regex',['jalview.io.ModellerDescription','.resCode'],'java.util.StringTokenizer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ModellerDescription", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['resCode',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.seqTypes=Clazz.array(String, -1, ["sequence", "structure", "structureX", "structureN"]);
this.Fields=Clazz.array(String, -1, ["objectType", "objectId", "startField", "startCode", "endField", "endCode", "description1", "description2", "resolutionField", "tailField"]);
this.TYPE=0;
this.LOCALID=1;
this.START=2;
this.START_CHAIN=3;
this.END=4;
this.END_CHAIN=5;
this.DESCRIPTION1=6;
this.DESCRIPTION2=7;
this.RESOLUTION=8;
this.TAIL=9;
this.Types=Clazz.array(Integer.TYPE, -1, [0, 0, 1, 0, 1, 0, 0, 0, 0, 0]);
this.Padding=Clazz.array(Character.TYPE, -1, [" ", " ", " ", ".", " ", ".", ".", ".", ".", "."]);
this.fields=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['TYPE','LOCALID','START','START_CHAIN','END','END_CHAIN','DESCRIPTION1','DESCRIPTION2','RESOLUTION','TAIL'],'O',['seqTypes','String[]','+Fields','Types','int[]','Padding','char[]','fields','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.fields.put$O$O(this.Fields[9], "");
}, 1);

Clazz.newMeth(C$, 'validResidueCode$S',  function (field) {
var val=null;
var r=Clazz.new_(["\\s*((([-0-9]+).?)|FIRST|LAST|@)"],$I$(2,1).c$$S);
if (!r.search$S(field)) {
return null;
}var value=r.stringMatched$I(3);
if (value == null ) {
value=r.stringMatched$I(1);
}try {
val=Integer.valueOf$S(value);
return Clazz.new_($I$(3,1).c$$S$Integer,[this, null, field, val]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return Clazz.new_($I$(3,1).c$$S$Integer,[this, null, field, null]);
}, p$1);

Clazz.newMeth(C$, 'parseDescription$S',  function (desc) {
var fields=Clazz.new_($I$(1,1));
var st=Clazz.new_($I$(4,1).c$$S$S$Z,[desc, ":", true]);
var field;
var type=-1;
if (st.countTokens$() > 0) {
var i=0;
field=st.nextToken$S(":");
do {
if (this.seqTypes[i].equalsIgnoreCase$S(field)) {
break;
}} while (++i < this.seqTypes.length);
if (i < this.seqTypes.length) {
st.nextToken$();
type=i;
i=1;
while (i < 9 && st.hasMoreTokens$() ){
if ((field=st.nextToken$S(":")) != null ) {
if (!field.equals$O(":")) {
if (this.Types[i] == 1) {
var val=p$1.validResidueCode$S.apply(this, [field]);
if (val != null ) {
fields.put$O$O( String.instantialize(this.Fields[i] + "num"), val);
} else {
type=-1;
};}fields.put$O$O(this.Fields[i++], field);
if (st.hasMoreTokens$()) {
st.nextToken$();
}} else {
++i;
}}}
if (i == 9) {
while (st.hasMoreTokens$()){
var tl=st.nextToken$S(":");
field+=tl.equals$O(":") ? tl : (":" + tl);
}
fields.put$O$O(this.Fields[9], field);
}}}if (type == -1) {
fields=Clazz.new_($I$(1,1));
fields.put$O$O(this.Fields[9],  String.instantialize(desc));
} else {
fields.put$O$O(this.Fields[0], this.seqTypes[type]);
}return fields;
}, p$1);

Clazz.newMeth(C$, 'c$$S',  function (desc) {
;C$.$init$.apply(this);
if (desc == null ) {
desc="";
}this.fields=p$1.parseDescription$S.apply(this, [desc]);
}, 1);

Clazz.newMeth(C$, 'setStartCode$I',  function (v) {
var r;
this.fields.put$O$O(this.Fields[2] + "num", r=Clazz.new_($I$(3,1).c$$I,[this, null, v]));
this.fields.put$O$O(this.Fields[2], r.field);
});

Clazz.newMeth(C$, 'setEndCode$I',  function (v) {
var r;
this.fields.put$O$O(this.Fields[4] + "num", r=Clazz.new_($I$(3,1).c$$I,[this, null, v]));
this.fields.put$O$O(this.Fields[4], r.field);
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI',  function (seq) {
;C$.$init$.apply(this);
if (seq.getDescription$() != null ) {
this.fields=p$1.parseDescription$S.apply(this, [seq.getDescription$()]);
}if (this.isModellerFieldset$()) {
if (this.getStartCode$() == null  || (this.getStartNum$() != seq.getStart$() && this.getStartCode$().val != null  ) ) {
this.setStartCode$I(seq.getStart$());
}if (this.getEndCode$() == null  || (this.getEndNum$() != seq.getEnd$() && this.getStartCode$() != null   && this.getStartCode$().val != null  ) ) {
this.setEndCode$I(seq.getEnd$());
}} else {
this.setStartCode$I(seq.getStart$());
this.setEndCode$I(seq.getEnd$());
this.fields.put$O$O(this.Fields[1], seq.getName$());
var t=0;
if (seq.getDatasetSequence$() != null  && seq.getDatasetSequence$().getDBRefs$() != null  ) {
var dbr=seq.getDatasetSequence$().getDBRefs$();
for (var i=0, ni=dbr.size$(); i < ni; i++) {
var dbri=dbr.get$I(i);
if (dbri != null ) {
if (dbri.getSource$().equals$O("PDB")) {
this.fields.put$O$O(this.Fields[1], dbri.getAccessionId$());
t=2;
break;
}}}
}this.fields.put$O$O(this.Fields[0], this.seqTypes[t]);
}}, 1);

Clazz.newMeth(C$, 'isModellerFieldset$',  function () {
return (this.fields.containsKey$O(this.Fields[0]));
});

Clazz.newMeth(C$, 'getDescriptionLine$',  function () {
var desc="";
var lastfield=this.Fields.length - 1;
if (this.isModellerFieldset$()) {
var value;
for (; lastfield > 6; lastfield--) {
if (this.fields.containsKey$O(this.Fields[lastfield])) {
break;
}}
for (var i=0; i < lastfield; i++) {
value=this.fields.get$O(this.Fields[i]);
if (value != null  && value.length$() > 0 ) {
desc+=(this.fields.get$O(this.Fields[i])) + ":";
} else {
desc+=this.Padding[i] + ":";
}}
}if (this.fields.containsKey$O(this.Fields[lastfield])) {
desc+=this.fields.get$O(this.Fields[lastfield]);
} else {
desc+=".";
}return desc;
});

Clazz.newMeth(C$, 'getStartNum$',  function () {
var start=0;
var val=this.getStartCode$();
if (val != null  && val.val != null  ) {
return val.val.intValue$();
}return start;
});

Clazz.newMeth(C$, 'getStartCode$',  function () {
if (this.isModellerFieldset$() && this.fields.containsKey$O(this.Fields[2] + "num") ) {
return this.fields.get$O(this.Fields[2] + "num");
}return null;
});

Clazz.newMeth(C$, 'getEndCode$',  function () {
if (this.isModellerFieldset$() && this.fields.containsKey$O(this.Fields[4] + "num") ) {
return this.fields.get$O(this.Fields[4] + "num");
}return null;
});

Clazz.newMeth(C$, 'getEndNum$',  function () {
var end=0;
var val=this.getEndCode$();
if (val != null  && val.val != null  ) {
return val.val.intValue$();
}return end;
});

Clazz.newMeth(C$, 'updateSequenceI$jalview_datamodel_SequenceI',  function (newSeq) {
if (this.isModellerFieldset$()) {
var rc=this.getStartCode$();
if (rc != null  && rc.val != null  ) {
newSeq.setStart$I(this.getStartNum$());
} else {
newSeq.setStart$I(1);
}rc=this.getEndCode$();
if (rc != null  && rc.val != null  ) {
newSeq.setEnd$I(this.getEndNum$());
} else {
newSeq.setEnd$I(newSeq.getStart$() + newSeq.getLength$());
}return true;
}return false;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ModellerDescription, "resCode", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['field'],'O',['val','Integer']]]

Clazz.newMeth(C$, 'c$$S$Integer',  function (f, v) {
;C$.$init$.apply(this);
this.val=v;
this.field=f;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (v) {
;C$.$init$.apply(this);
this.val=Integer.valueOf$I(v);
this.field=this.val.toString();
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
