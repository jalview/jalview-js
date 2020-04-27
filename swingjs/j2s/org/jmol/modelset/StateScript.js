(function(){var P$=Clazz.newPackage("org.jmol.modelset"),I$=[[0,'org.jmol.util.BSUtil','javajs.util.SB','org.jmol.util.Escape']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StateScript");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['inDefinedStateBlock'],'I',['modelIndex'],'S',['script1','script2'],'O',['bsBonds','javajs.util.BS','+bsAtoms1','+bsAtoms2']]]

Clazz.newMeth(C$, 'c$$I$S$javajs_util_BS$javajs_util_BS$javajs_util_BS$S$Z', function (modelIndex, script1, bsBonds, bsAtoms1, bsAtoms2, script2, inDefinedStateBlock) {
;C$.$init$.apply(this);
this.modelIndex=modelIndex;
this.script1=script1;
this.bsBonds=$I$(1).copy$javajs_util_BS(bsBonds);
this.bsAtoms1=$I$(1).copy$javajs_util_BS(bsAtoms1);
this.bsAtoms2=$I$(1).copy$javajs_util_BS(bsAtoms2);
this.script2=script2;
this.inDefinedStateBlock=inDefinedStateBlock;
}, 1);

Clazz.newMeth(C$, 'isValid$', function () {
return this.script1 != null  && this.script1.length$() > 0  && (this.bsBonds == null  || this.bsBonds.nextSetBit$I(0) >= 0 )  && (this.bsAtoms1 == null  || this.bsAtoms1.nextSetBit$I(0) >= 0 )  && (this.bsAtoms2 == null  || this.bsAtoms2.nextSetBit$I(0) >= 0 ) ;
});

Clazz.newMeth(C$, 'toString', function () {
if (!this.isValid$()) return "";
var sb=$I$(2).newS$S(this.script1);
if (this.bsBonds != null ) sb.append$S(" ").append$S($I$(3).eBond$javajs_util_BS(this.bsBonds));
if (this.bsAtoms1 != null ) sb.append$S(" ").append$S($I$(3).eBS$javajs_util_BS(this.bsAtoms1));
if (this.bsAtoms2 != null ) sb.append$S(" ").append$S($I$(3).eBS$javajs_util_BS(this.bsAtoms2));
if (this.script2 != null ) sb.append$S(" ").append$S(this.script2);
var s=sb.toString();
if (!s.endsWith$S(";")) s += ";";
return s;
});

Clazz.newMeth(C$, 'isConnect$', function () {
return (this.script1.indexOf$S("connect") >= 0);
});

Clazz.newMeth(C$, 'deleteAtoms$I$javajs_util_BS$javajs_util_BS', function (modelIndex, bsBonds, bsAtoms) {
if (modelIndex == this.modelIndex) return false;
if (modelIndex > this.modelIndex) {
return true;
}$I$(1).deleteBits$javajs_util_BS$javajs_util_BS(this.bsBonds, bsBonds);
$I$(1).deleteBits$javajs_util_BS$javajs_util_BS(this.bsAtoms1, bsAtoms);
$I$(1).deleteBits$javajs_util_BS$javajs_util_BS(this.bsAtoms2, bsAtoms);
return this.isValid$();
});

Clazz.newMeth(C$, 'setModelIndex$I', function (index) {
this.modelIndex=index;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:13 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
