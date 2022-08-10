(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'jalview.datamodel.MappingType']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*e*/var C$=Clazz.newClass(P$, "MappingType", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['fromRatio','toRatio']]]

Clazz.newMeth(C$, 'c$$I$I',  function (fromSize, toSize) {
;C$.$init$.apply(this);
this.fromRatio=fromSize;
this.toRatio=toSize;
}, 1);

Clazz.newMeth(C$, 'getFromRatio$',  function () {
return this.fromRatio;
});

Clazz.newMeth(C$, 'getToRatio$',  function () {
return this.toRatio;
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
(P$.MappingType$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MappingType$1", null, Clazz.load('jalview.datamodel.MappingType'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getInverse$',  function () {
return $I$(1).PeptideToNucleotide;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$I$I, "NucleotideToPeptide", 0, [3, 1], jalview.datamodel.MappingType$1);
(P$.MappingType$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "MappingType$2", null, Clazz.load('jalview.datamodel.MappingType'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getInverse$',  function () {
return $I$(1).NucleotideToPeptide;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$I$I, "PeptideToNucleotide", 1, [1, 3], jalview.datamodel.MappingType$2);
(P$.MappingType$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "MappingType$3", null, Clazz.load('jalview.datamodel.MappingType'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getInverse$',  function () {
return $I$(1).NucleotideToNucleotide;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$I$I, "NucleotideToNucleotide", 2, [1, 1], jalview.datamodel.MappingType$3);
(P$.MappingType$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "MappingType$4", null, Clazz.load('jalview.datamodel.MappingType'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getInverse$',  function () {
return $I$(1).PeptideToPeptide;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$I$I, "PeptideToPeptide", 3, [1, 1], jalview.datamodel.MappingType$4);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
