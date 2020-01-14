(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'jalview.datamodel.MappingType']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MappingType", null, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
(P$.MappingType$1||
(function(){var C$=Clazz.newClass(P$, "MappingType$1", null, Clazz.load('jalview.datamodel.MappingType'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getInverse$', function () {
return $I$(1).PeptideToNucleotide;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$I$I, "NucleotideToPeptide", 0, [3, 1], jalview.datamodel.MappingType$1);
(P$.MappingType$2||
(function(){var C$=Clazz.newClass(P$, "MappingType$2", null, Clazz.load('jalview.datamodel.MappingType'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getInverse$', function () {
return $I$(1).NucleotideToPeptide;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$I$I, "PeptideToNucleotide", 1, [1, 3], jalview.datamodel.MappingType$2);
(P$.MappingType$3||
(function(){var C$=Clazz.newClass(P$, "MappingType$3", null, Clazz.load('jalview.datamodel.MappingType'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getInverse$', function () {
return $I$(1).NucleotideToNucleotide;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$I$I, "NucleotideToNucleotide", 2, [1, 1], jalview.datamodel.MappingType$3);
(P$.MappingType$4||
(function(){var C$=Clazz.newClass(P$, "MappingType$4", null, Clazz.load('jalview.datamodel.MappingType'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getInverse$', function () {
return $I$(1).PeptideToPeptide;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$I$I, "PeptideToPeptide", 3, [1, 1], jalview.datamodel.MappingType$4);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fromRatio=0;
this.toRatio=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (fromSize, toSize) {
C$.$init$.apply(this);
this.fromRatio=fromSize;
this.toRatio=toSize;
}, 1);

Clazz.newMeth(C$, 'getFromRatio$', function () {
return this.fromRatio;
});

Clazz.newMeth(C$, 'getToRatio$', function () {
return this.toRatio;
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
