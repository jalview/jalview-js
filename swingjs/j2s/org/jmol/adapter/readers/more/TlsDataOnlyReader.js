(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.more"),p$1={},I$=[[0,'javajs.util.Lst','javajs.util.PT','java.util.Hashtable','javajs.util.P3','org.jmol.util.Escape','org.jmol.util.Logger','javajs.util.SB']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TlsDataOnlyReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['tlsGroupID'],'O',['vTlsModels','javajs.util.Lst','sbTlsErrors','javajs.util.SB']]
,['O',['TLnn','String[]','+Snn']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
p$1.readTlsData.apply(this, []);
this.continuing=false;
});

Clazz.newMeth(C$, 'readTlsData', function () {
this.vTlsModels=Clazz.new_($I$(1,1));
var tlsGroups;
var tlsGroup=null;
var ranges=null;
var range=null;
tlsGroups=Clazz.new_($I$(1,1));
while (this.rd$() != null ){
var tokens=(function(a,f){return f.apply(null,a)})([this.line.replace$C$C("\'", " ")],$I$(2).getTokens$S);
if (tokens.length == 0) continue;
if (tokens[0].equals$O("TLS")) {
tlsGroup=Clazz.new_($I$(3,1));
ranges=Clazz.new_($I$(1,1));
tlsGroup.put$O$O("ranges", ranges);
tlsGroups.addLast$O(tlsGroup);
tlsGroup.put$O$O("id", Integer.valueOf$I(++this.tlsGroupID));
} else if (tokens[0].equals$O("RANGE")) {
range=Clazz.new_($I$(3,1));
var chain1=tokens[1].charAt$I(0);
var chain2=tokens[3].charAt$I(0);
var res1=$I$(2).parseInt$S(tokens[2]);
var res2=$I$(2).parseInt$S(tokens[4]);
if (chain1 == chain2) {
range.put$O$O("chains", "" + chain1 + chain2 );
if (res1 <= res2) {
range.put$O$O("residues", Clazz.array(Integer.TYPE, -1, [res1, res2]));
ranges.addLast$O(range);
} else {
p$1.tlsAddError$S.apply(this, [" TLS group residues are not in order (range ignored)"]);
}} else {
p$1.tlsAddError$S.apply(this, [" TLS group chains are different (range ignored)"]);
}} else if (tokens[0].equals$O("ORIGIN")) {
var origin=Clazz.new_($I$(4,1));
tlsGroup.put$O$O("origin", origin);
origin.set$F$F$F(this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[2]), this.parseFloatStr$S(tokens[3]));
if (Float.isNaN$F(origin.x) || Float.isNaN$F(origin.y) || Float.isNaN$F(origin.z)  ) {
origin.set$F$F$F(NaN, NaN, NaN);
p$1.tlsAddError$S.apply(this, ["invalid origin: " + this.line]);
}} else if (tokens[0].equals$O("T") || tokens[0].equals$O("L") || tokens[0].equals$O("S")  ) {
var tensorType=tokens[0].charAt$I(0);
var nn=(tensorType == "S" ? C$.Snn : C$.TLnn);
var tensor=Clazz.array(Float.TYPE, [3, 3]);
tlsGroup.put$O$O("t" + tensorType, tensor);
for (var i=1; i < tokens.length; i++) {
var ti=(nn[i].charCodeAt$I(0)) - 49;
var tj=(nn[i].charCodeAt$I(1)) - 49;
tensor[ti][tj]=this.parseFloatStr$S(tokens[++i]);
if (ti < tj) tensor[tj][ti]=tensor[ti][tj];
}
if (tensorType == "S") tensor[0][0]=-tensor[0][0];
for (var i=0; i < 3; i++) for (var j=0; j < 3; j++) if (Float.isNaN$F(tensor[i][j])) {
p$1.tlsAddError$S.apply(this, ["invalid tensor: " + $I$(5).escapeFloatAA$FAA$Z(tensor, false)]);
}

}}
$I$(6).info$S(this.tlsGroupID + " TLS groups read");
var groups=Clazz.new_($I$(3,1));
groups.put$O$O("groupCount", Integer.valueOf$I(this.tlsGroupID));
groups.put$O$O("groups", tlsGroups);
this.vTlsModels.addLast$O(groups);
this.htParams.put$O$O("vTlsModels", this.vTlsModels);
}, p$1);

Clazz.newMeth(C$, 'tlsAddError$S', function (error) {
if (this.sbTlsErrors == null ) this.sbTlsErrors=Clazz.new_($I$(7,1));
this.sbTlsErrors.append$S(this.fileName).appendC$C("\t").append$S("TLS group ").appendI$I(this.tlsGroupID).appendC$C("\t").append$S(error).appendC$C("\n");
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.TLnn=Clazz.array(String, -1, ["11", "22", "33", "12", "13", "23"]);
C$.Snn=Clazz.array(String, -1, ["22", "11", "12", "13", "23", "21", "31", "32"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
