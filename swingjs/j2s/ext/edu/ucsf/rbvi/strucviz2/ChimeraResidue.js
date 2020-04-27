(function(){var P$=Clazz.newPackage("ext.edu.ucsf.rbvi.strucviz2"),I$=[[0,'org.slf4j.LoggerFactory','java.util.ArrayList','ext.edu.ucsf.rbvi.strucviz2.ChimUtils','java.util.regex.Pattern']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChimeraResidue", null, null, ['ext.edu.ucsf.rbvi.strucviz2.ChimeraStructuralObject', 'Comparable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.selected=false;
},1);

C$.$fields$=[['Z',['selected'],'I',['modelNumber','subModelNumber','residueNumber'],'S',['type','index','chainId','insertionCode'],'O',['chimeraModel','ext.edu.ucsf.rbvi.strucviz2.ChimeraModel','userData','java.lang.Object']]
,['I',['displayType']]]

Clazz.newMeth(C$, 'c$$S$S$I', function (type, index, modelNumber) {
C$.c$$S$S$I$I.apply(this, [type, index, modelNumber, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I$I', function (type, index, modelNumber, subModelNumber) {
;C$.$init$.apply(this);
this.type=type;
this.index=index;
this.modelNumber=modelNumber;
this.subModelNumber=subModelNumber;
this.splitInsertionCode$S(this.index);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (chimeraInputLine) {
;C$.$init$.apply(this);
var split1=chimeraInputLine.split$S(":");
var numberOffset=split1[0].indexOf$I("#");
var model=split1[0].substring$I(numberOffset + 1);
var decimalOffset=model.indexOf$I(".");
try {
this.subModelNumber=0;
if (decimalOffset > 0) {
this.subModelNumber=Integer.parseInt$S(model.substring$I(decimalOffset + 1));
this.modelNumber=Integer.parseInt$S(model.substring$I$I(0, decimalOffset));
} else {
this.modelNumber=Integer.parseInt$S(model);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(1,"getLogger$Class",[Clazz.getClass(C$)]).error$S("Unexpected return from Chimera: " + model);
this.modelNumber=-1;
} else {
throw e;
}
}
var rTokens=split1[1].split$S(" ");
this.type=rTokens[2];
var iTokens=rTokens[0].split$S("\\.");
if (iTokens.length > 0) {
this.index=iTokens[0];
if (iTokens.length > 1) this.chainId=iTokens[1];
 else this.chainId="_";
} else this.index=rTokens[0];
this.splitInsertionCode$S(this.index);
}, 1);

Clazz.newMeth(C$, 'setSelected$Z', function (selected) {
this.selected=selected;
});

Clazz.newMeth(C$, 'isSelected$', function () {
return this.selected;
});

Clazz.newMeth(C$, 'getChildren$', function () {
var v=Clazz.new_($I$(2,1));
v.add$O(this);
return v;
});

Clazz.newMeth(C$, 'displayName$', function () {
return this.toString();
});

Clazz.newMeth(C$, 'toString', function () {
if (C$.displayType == 2) {
return ($I$(3).toFullName$S(this.type) + " " + this.index );
} else if (C$.displayType == 0) {
return ($I$(3).toSingleLetter$S(this.type) + " " + this.index );
} else if (C$.displayType == 1) {
return ($I$(3).toThreeLetter$S(this.type) + " " + this.index );
} else {
return (this.type + " " + this.index );
}});

Clazz.newMeth(C$, 'toSpec$', function () {
if (!this.chainId.equals$O("_")) return ("#" + this.modelNumber + ":" + this.index + "." + this.chainId );
 else return ("#" + this.modelNumber + ":" + this.index + "." );
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.index;
});

Clazz.newMeth(C$, 'getChainId$', function () {
return this.chainId;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'getModelNumber$', function () {
return this.modelNumber;
});

Clazz.newMeth(C$, 'getSubModelNumber$', function () {
return this.subModelNumber;
});

Clazz.newMeth(C$, 'getChimeraModel$', function () {
return this.chimeraModel;
});

Clazz.newMeth(C$, 'setChimeraModel$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel', function (chimeraModel) {
this.chimeraModel=chimeraModel;
});

Clazz.newMeth(C$, 'getUserData$', function () {
return this.userData;
});

Clazz.newMeth(C$, 'setUserData$O', function (data) {
this.userData=data;
});

Clazz.newMeth(C$, ['compareTo$ext_edu_ucsf_rbvi_strucviz2_ChimeraResidue','compareTo$O'], function (c2) {
if (this.residueNumber < c2.residueNumber) return -1;
 else if (this.residueNumber == c2.residueNumber) {
if (this.insertionCode == null  && c2.insertionCode == null  ) return 0;
 else if (this.insertionCode == null ) return -1;
 else if (c2.insertionCode == null ) return 1;
return (this.insertionCode.compareTo$S(c2.insertionCode));
}return 1;
});

Clazz.newMeth(C$, 'splitInsertionCode$S', function (residue) {
var p=$I$(4,"compile$S",["(\\d*)([A-Z]?)"]);
var m=p.matcher$CharSequence(residue);
if (m.matches$()) {
this.residueNumber=Integer.parseInt$S(m.group$I(1));
if (m.groupCount$() > 1) this.insertionCode=m.group$I(2);
 else this.insertionCode=null;
}});

Clazz.newMeth(C$, 'setDisplayType$I', function (type) {
C$.displayType=type;
}, 1);

Clazz.newMeth(C$, 'getDisplayType$', function () {
return C$.displayType;
}, 1);

Clazz.newMeth(C$, 'hasSelectedChildren$', function () {
return false;
});

C$.$static$=function(){C$.$static$=0;
C$.displayType=1;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:41 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
