(function(){var P$=Clazz.newPackage("org.jmol.viewer"),I$=[[0,'java.util.Hashtable','java.io.BufferedInputStream','java.util.Properties','javajs.util.PT','javajs.util.V3','org.jmol.util.Elements','org.jmol.util.Logger']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JC");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['versionInt','FORMAL_CHARGE_COLIX_RED','PARTIAL_CHARGE_COLIX_RED','PARTIAL_CHARGE_RANGE_SIZE','LABEL_DEFAULT_OFFSET'],'S',['version','majorVersion','date','READER_NOT_FOUND'],'O',['ruleNames','String[]','+databaseArray','databases','java.util.Map','center','javajs.util.V3','+axisX','+axisY','+axisZ','+axisNX','+axisNY','+axisNZ','unitAxisVectors','javajs.util.V3[]','altArgbsCpk','int[]','+argbsFormalCharge','+argbsRwbScale','+argbsRoygbScale','predefinedVariable','String[]','+predefinedStatic','+shapeClassBases','+echoNames','+hAlignNames']]]

Clazz.newMeth(C$, 'getNBOTypeFromName$S', function (nboType) {
var pt=";AO;;;;PNAO;;NAO;;;PNHO;;NHO;;;PNBO;;NBO;;;PNLMO;NLMO;;MO;;;;NO;;;;;;;;;;;;;;;;PRNBO;RNBO;;".indexOf$S(";" + nboType + ";" );
return (pt < 0 ? pt : (pt/6|0) + 31);
}, 1);

Clazz.newMeth(C$, 'getCIPChiralityName$I', function (flags) {
switch (flags) {
case 13:
case 5:
return "Z";
case 14:
case 6:
return "E";
case 17:
return "M";
case 18:
return "P";
case 1:
return "R";
case 2:
return "S";
case 9:
return "r";
case 10:
return "s";
case 25:
return "m";
case 26:
return "p";
case 7:
return "?";
case 3:
case 0:
default:
return "";
}
}, 1);

Clazz.newMeth(C$, 'getCIPRuleName$I', function (i) {
return C$.ruleNames[i];
}, 1);

Clazz.newMeth(C$, 'getCIPChiralityCode$C', function (c) {
switch (c.$c()) {
case 90:
return 13;
case 69:
return 14;
case 82:
return 1;
case 83:
return 2;
case 114:
return 9;
case 115:
return 10;
case 63:
return 7;
default:
return 0;
}
}, 1);

Clazz.newMeth(C$, 'resolveDataBase$S$S$S', function (database, id, format) {
if (format == null ) {
if ((format=C$.databases.get$O(database.toLowerCase$())) == null ) return null;
var pt=id.indexOf$S("/");
if (pt < 0) {
if (database.equals$O("pubchem")) id="name/" + id;
 else if (database.equals$O("nci")) id += "/file?format=sdf&get3d=true";
}if (format.startsWith$S("\'")) {
pt=id.indexOf$S(".");
var n=(pt > 0 ? $I$(4,"parseInt$S",[id.substring$I(pt + 1)]) : 0);
if (pt > 0) id=id.substring$I$I(0, pt);
format=$I$(4).rep$S$S$S(format, "%n", "" + n);
}} else if (id.indexOf$S(".") >= 0 && format.indexOf$S("%FILE.") >= 0 ) {
format=format.substring$I$I(0, format.indexOf$S("%FILE"));
}if (format.indexOf$S("%c") >= 0) for (var i=1, n=id.length$(); i <= n; i++) if (format.indexOf$S("%c" + i) >= 0) format=$I$(4,"rep$S$S$S",[format, "%c" + i, id.substring$I$I(i - 1, i).toLowerCase$()]);

return (format.indexOf$S("%FILE") >= 0 ? $I$(4).rep$S$S$S(format, "%FILE", id) : format.indexOf$S("%file") >= 0 ? $I$(4,"rep$S$S$S",[format, "%file", id.toLowerCase$()]) : format + id);
}, 1);

Clazz.newMeth(C$, 'fixProtocol$S', function (name) {
var newname=(name == null  ? null : name.indexOf$S("http://www.rcsb.org/pdb/files/") == 0 ? C$.resolveDataBase$S$S$S(name.indexOf$S("/ligand/") >= 0 ? "ligand" : "pdb", name.substring$I(name.lastIndexOf$S("/") + 1), null) : name.indexOf$S("http://www.ebi") == 0 || name.indexOf$S("http://pubchem") == 0  || name.indexOf$S("http://cactus") == 0  || name.indexOf$S("http://www.materialsproject") == 0  ? "https://" + name.substring$I(7) : name);
if (newname != name) $I$(7).info$S("JC.fixProtocol " + name + " --> " + newname );
return newname;
}, 1);

Clazz.newMeth(C$, 'embedScript$S', function (s) {
return "\n/**" + "**** Jmol Embedded Script ****" + " \n" + s + "\n**/" ;
}, 1);

Clazz.newMeth(C$, 'getShapeVisibilityFlag$I', function (shapeID) {
return 16 << Math.min(shapeID, 26);
}, 1);

Clazz.newMeth(C$, 'shapeTokenIndex$I', function (tok) {
switch (tok) {
case 1140850689:
case 1073741859:
return 0;
case 1677721602:
case 659488:
return 1;
case 1613238294:
return 2;
case 1611141176:
return 3;
case 659482:
return 4;
case 1825200146:
return 5;
case 1745489939:
case 537006096:
return 6;
case 1112152076:
return 7;
case 1112152070:
return 8;
case 1114249217:
return 9;
case 1112152078:
return 10;
case 1112152066:
return 11;
case 1649022989:
return 12;
case 1112152071:
return 13;
case 1112152073:
return 14;
case 1112152074:
return 15;
case 1112150019:
return 16;
case 135175:
return 17;
case 135198:
return 18;
case 1112150021:
return 19;
case 1112150020:
return 20;
case 1275203608:
return 21;
case 135174:
return 23;
case 135176:
return 22;
case 135180:
return 24;
case 134353926:
return 25;
case 135182:
return 26;
case 1073877010:
return 27;
case 1073877011:
return 28;
case 135188:
return 29;
case 135190:
return 30;
case 537022465:
return 31;
case 1611272194:
return 34;
case 1678381065:
return 32;
case 1814695966:
return 33;
case 544771:
return 35;
case 1611272202:
return 36;
}
return -1;
}, 1);

Clazz.newMeth(C$, 'getShapeClassName$I$Z', function (shapeID, isRenderer) {
if (shapeID < 0) return C$.shapeClassBases[~shapeID];
return "org.jmol." + (isRenderer ? "render" : "shape") + (shapeID >= 9 && shapeID < 16  ? "bio." : shapeID >= 16 && shapeID < 23  ? "special." : shapeID >= 24 && shapeID < 30  ? "surface." : shapeID == 23 ? "cgo." : ".") + C$.shapeClassBases[shapeID] ;
}, 1);

Clazz.newMeth(C$, 'getEchoName$I', function (type) {
return C$.echoNames[type];
}, 1);

Clazz.newMeth(C$, 'setZPosition$I$I', function (offset, pos) {
return (offset & ~48) | pos;
}, 1);

Clazz.newMeth(C$, 'setPointer$I$I', function (offset, pointer) {
return (offset & ~3) | pointer;
}, 1);

Clazz.newMeth(C$, 'getPointer$I', function (offset) {
return offset & 3;
}, 1);

Clazz.newMeth(C$, 'getPointerName$I', function (pointer) {
return ((pointer & 1) == 0 ? "" : (pointer & 2) > 0 ? "background" : "on");
}, 1);

Clazz.newMeth(C$, 'isOffsetAbsolute$I', function (offset) {
return ((offset & 64) != 0);
}, 1);

Clazz.newMeth(C$, 'getOffset$I$I$Z', function (xOffset, yOffset, isAbsolute) {
xOffset=Math.min(Math.max(xOffset, -500), 500);
yOffset=(Math.min(Math.max(yOffset, -500), 500));
var offset=((xOffset & 1023) << 21) | ((yOffset & 1023) << 11) | (isAbsolute ? 64 : 0) ;
if (offset == C$.LABEL_DEFAULT_OFFSET) offset=0;
 else if (!isAbsolute && (xOffset == 0 || yOffset == 0 ) ) offset|=256;
return offset;
}, 1);

Clazz.newMeth(C$, 'getXOffset$I', function (offset) {
if (offset == 0) return 4;
var x=(offset >> 21) & 1023;
x=(x > 500 ? x - 1023 - 1  : x);
return x;
}, 1);

Clazz.newMeth(C$, 'getYOffset$I', function (offset) {
if (offset == 0) return 4;
var y=(offset >> 11) & 1023;
return (y > 500 ? y - 1023 - 1  : y);
}, 1);

Clazz.newMeth(C$, 'getAlignment$I', function (offset) {
return (offset & 12);
}, 1);

Clazz.newMeth(C$, 'setHorizAlignment$I$I', function (offset, hAlign) {
return (offset & ~12) | hAlign;
}, 1);

Clazz.newMeth(C$, 'getHorizAlignmentName$I', function (align) {
return C$.hAlignNames[(align >> 2) & 3];
}, 1);

Clazz.newMeth(C$, 'isSmilesCanonical$S', function (options) {
return (options != null  && $I$(4,"isOneOf$S$S",[options.toLowerCase$(), ";/cactvs///;/cactus///;/nci///;/canonical///;"]) );
}, 1);

Clazz.newMeth(C$, 'getServiceCommand$S', function (script) {
return (script.length$() < 7 ? -1 : ("JSPECVIPEAKS: SELECT:JSVSTR:H1SIMULC13SIMUNBO:MODNBO:RUNNBO:VIENBO:SEANBO:CONNONESIM").indexOf$S(script.substring$I$I(0, 7).toUpperCase$()));
}, 1);

Clazz.newMeth(C$, 'getUnitIDFlags$S', function (type) {
var i=14;
if (type.indexOf$S("-") == 0) {
if (type.indexOf$S("m") > 0) i|=1;
if (type.indexOf$S("a") < 0) i^=4;
if (type.indexOf$S("t") > 0) i|=16;
}return i;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.ruleNames=Clazz.array(String, -1, ["", "1a", "1b", "2", "3", "4a", "4b", "4c", "5", "6"]);
C$.databaseArray=Clazz.array(String, -1, ["aflowbin", "http://aflowlib.mems.duke.edu/users/jmolers/binary_new/%FILE.aflow_binary", "aflow", "http://aflowlib.mems.duke.edu/users/jmolers/binary_new/%FILE.aflow_binary", "ams", "\'http://rruff.geo.arizona.edu/AMS/viewJmol.php?\'+(0+\'%file\'==0? \'mineral\':(\'%file\'.length==7? \'amcsd\':\'id\'))+\'=%file&action=showcif#_DOCACHE_\'", "dssr", "http://dssr-jmol.x3dna.org/report.php?id=%FILE&opts=--json=ebi", "dssrModel", "http://dssr-jmol.x3dna.org/report.php?POST?opts=--json=ebi&model=", "iucr", "http://scripts.iucr.org/cgi-bin/sendcif_yard?%FILE", "cod", "http://www.crystallography.net/cod/cif/%c1/%c2%c3/%c4%c5/%FILE.cif", "nmr", "http://www.nmrdb.org/new_predictor?POST?molfile=", "nmrdb", "http://www.nmrdb.org/service/predictor?POST?molfile=", "nmrdb13", "http://www.nmrdb.org/service/jsmol13c?POST?molfile=", "magndata", "http://webbdcrista1.ehu.es/magndata/mcif/%FILE.mcif", "rna3d", "http://rna.bgsu.edu/rna3dhub/%TYPE/download/%FILE", "mmtf", "https://mmtf.rcsb.org/v1.0/full/%FILE", "chebi", "https://www.ebi.ac.uk/chebi/saveStructure.do?defaultImage=true&chebiId=%file%2D%", "ligand", "https://files.rcsb.org/ligands/download/%FILE.cif", "mp", "https://www.materialsproject.org/materials/mp-%FILE/cif#_DOCACHE_", "nci", "https://cactus.nci.nih.gov/chemical/structure/%FILE", "pdb", "https://files.rcsb.org/download/%FILE.pdb", "pdb0", "https://files.rcsb.org/download/%FILE.pdb", "pdbe", "https://www.ebi.ac.uk/pdbe/entry-files/download/%FILE.cif", "pdbe2", "https://www.ebi.ac.uk/pdbe/static/entry/%FILE_updated.cif", "pubchem", "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/%FILE/SDF?record_type=3d", "map", "https://www.ebi.ac.uk/pdbe/api/%TYPE/%FILE?pretty=false&metadata=true", "pdbemap", "https://www.ebi.ac.uk/pdbe/coordinates/files/%file.ccp4", "pdbemapdiff", "https://www.ebi.ac.uk/pdbe/coordinates/files/%file_diff.ccp4", "pdbemapserver", "https://www.ebi.ac.uk/pdbe/densities/x-ray/%file/box/0,0,0/0,0,0?space=cartesian&encoding=bcif", "pdbemapdiffserver", "https://www.ebi.ac.uk/pdbe/densities/x-ray/%file/box/0,0,0/0,0,0?space=cartesian&encoding=bcif&diff=1"]);
C$.databases=Clazz.new_($I$(1,1));
{
for (var i=0; i < C$.databaseArray.length; i+=2) C$.databases.put$O$O(C$.databaseArray[i].toLowerCase$(), C$.databaseArray[i + 1]);

};
{
var tmpVersion=null;
var tmpDate=null;
var bis=null;
var is=null;
try {
is=Clazz.getClass(C$).getClassLoader$().getResourceAsStream$S("core/Jmol.properties" ||"org/jmol/viewer/Jmol.properties");
bis=Clazz.new_($I$(2,1).c$$java_io_InputStream,[is]);
var props=Clazz.new_($I$(3,1));
props.load$java_io_InputStream(bis);
var s=props.getProperty$S$S("Jmol.___JmolVersion", tmpVersion);
if (s != null  && s.lastIndexOf$S("\"") > 0 ) s=s.substring$I$I(0, s.lastIndexOf$S("\"") + 1);
tmpVersion=$I$(4).trimQuotes$S(s);
tmpDate=$I$(4,"trimQuotes$S",[props.getProperty$S$S("Jmol.___JmolDate", tmpDate)]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
} finally {
if (bis != null ) {
try {
bis.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}if (is != null ) {
try {
is.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}}
if (tmpDate != null ) {
tmpDate=tmpDate.substring$I$I(7, 23);
}C$.version=(tmpVersion != null  ? tmpVersion : "(Unknown_version)");
C$.majorVersion=(tmpVersion != null  ? tmpVersion : "(Unknown_version)");
C$.date=(tmpDate != null  ? tmpDate : "");
var v=-1;
if (tmpVersion != null ) try {
var s=C$.version;
var major="";
var i=s.indexOf$S(".");
if (i < 0) {
v=100000 * Integer.parseInt$S(s);
s=null;
}if (s != null ) {
v=100000 * Integer.parseInt$S(major=s.substring$I$I(0, i));
s=s.substring$I(i + 1);
i=s.indexOf$S(".");
if (i < 0) {
v+=1000 * Integer.parseInt$S(s);
s=null;
}if (s != null ) {
var m=s.substring$I$I(0, i);
major += "." + m;
C$.majorVersion=major;
v+=1000 * Integer.parseInt$S(m);
s=s.substring$I(i + 1);
i=s.indexOf$S("_");
if (i >= 0) s=s.substring$I$I(0, i);
i=s.indexOf$S(" ");
if (i >= 0) s=s.substring$I$I(0, i);
v+=Integer.parseInt$S(s);
}}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
C$.versionInt=v;
};
C$.center=$I$(5).new3$F$F$F(0, 0, 0);
C$.axisX=$I$(5).new3$F$F$F(1, 0, 0);
C$.axisY=$I$(5).new3$F$F$F(0, 1, 0);
C$.axisZ=$I$(5).new3$F$F$F(0, 0, 1);
C$.axisNX=$I$(5).new3$F$F$F(-1, 0, 0);
C$.axisNY=$I$(5).new3$F$F$F(0, -1, 0);
C$.axisNZ=$I$(5).new3$F$F$F(0, 0, -1);
C$.unitAxisVectors=Clazz.array($I$(5), -1, [C$.axisX, C$.axisY, C$.axisZ, C$.axisNX, C$.axisNY, C$.axisNZ]);
C$.altArgbsCpk=Clazz.array(Integer.TYPE, -1, [-60269, -4217178, -208, -11069553, -64, -96, -2565928, -11513776, -12566464, -15708080]);
C$.argbsFormalCharge=Clazz.array(Integer.TYPE, -1, [-65536, -49088, -32640, -16192, -1, -2565889, -4934401, -7302913, -9671425, -12039937, -14408449, -16776961]);
C$.argbsRwbScale=Clazz.array(Integer.TYPE, -1, [-65536, -61424, -57312, -53200, -49088, -44976, -40864, -36752, -32640, -28528, -24416, -20304, -16192, -12080, -7968, -1, -2039553, -3092225, -4144897, -5197569, -6250241, -7302913, -8355585, -9408257, -10460929, -11513601, -12566273, -13618945, -14671617, -15724289, -16776961]);
C$.FORMAL_CHARGE_COLIX_RED=$I$(6).elementSymbols.length + C$.altArgbsCpk.length;
C$.PARTIAL_CHARGE_COLIX_RED=C$.FORMAL_CHARGE_COLIX_RED + C$.argbsFormalCharge.length;
C$.PARTIAL_CHARGE_RANGE_SIZE=C$.argbsRwbScale.length;
C$.argbsRoygbScale=Clazz.array(Integer.TYPE, -1, [-65536, -57344, -49152, -40960, -32768, -24576, -16384, -8192, -4096, -256, -987136, -2031872, -4129024, -6226176, -8323328, -10420480, -12517632, -14614784, -16711936, -16711904, -16711872, -16711840, -16711808, -16711776, -16711744, -16711712, -16711681, -16719617, -16727809, -16736001, -16744193, -16752385, -16760577, -16768769, -16776961]);
C$.predefinedVariable=Clazz.array(String, -1, ["@_1H _H & !(_2H,_3H)", "@_12C _C & !(_13C,_14C)", "@_14N _N & !(_15N)", "@solvent water, (_g>=45 & _g<48)", "@ligand _g=0|!(_g<46,protein,nucleic,water)", "@turn structure=1", "@sheet structure=2", "@helix structure=3", "@helix310 substructure=7", "@helixalpha substructure=8", "@helixpi substructure=9", "@bulges within(dssr,\'bulges\')", "@coaxStacks within(dssr,\'coaxStacks\')", "@hairpins within(dssr,\'hairpins\')", "@hbonds within(dssr,\'hbonds\')", "@helices within(dssr,\'helices\')", "@iloops within(dssr,\'iloops\')", "@isoCanonPairs within(dssr,\'isoCanonPairs\')", "@junctions within(dssr,\'junctions\')", "@kissingLoops within(dssr,\'kissingLoops\')", "@multiplets within(dssr,\'multiplets\')", "@nonStack within(dssr,\'nonStack\')", "@nts within(dssr,\'nts\')", "@pairs within(dssr,\'pairs\')", "@ssSegments within(dssr,\'ssSegments\')", "@stacks within(dssr,\'stacks\')", "@stems within(dssr,\'stems\')"]);
C$.predefinedStatic=Clazz.array(String, -1, ["@amino _g>0 & _g<=23", "@acidic asp,glu", "@basic arg,his,lys", "@charged acidic,basic", "@negative acidic", "@positive basic", "@neutral amino&!(acidic,basic)", "@polar amino&!hydrophobic", "@peptide protein&within(chain,monomer>1)&!within(chain,monomer>12)", "@cyclic his,phe,pro,trp,tyr", "@acyclic amino&!cyclic", "@aliphatic ala,gly,ile,leu,val", "@aromatic his,phe,trp,tyr", "@cystine within(group,(cys,cyx)&atomname=sg&connected((cys,cyx)&atomname=sg))", "@buried ala,cys,ile,leu,met,phe,trp,val", "@surface amino&!buried", "@hydrophobic ala,gly,ile,leu,met,phe,pro,trp,tyr,val", "@mainchain backbone", "@small ala,gly,ser", "@medium asn,asp,cys,pro,thr,val", "@large arg,glu,gln,his,ile,leu,lys,met,phe,trp,tyr", "@c nucleic & ([C] or [DC] or within(group,_a=42))", "@g nucleic & ([G] or [DG] or within(group,_a=43))", "@cg c,g", "@a nucleic & ([A] or [DA] or within(group,_a=44))", "@t nucleic & ([T] or [DT] or within(group,_a=45 | _a=49))", "@at a,t", "@i nucleic & ([I] or [DI] or within(group,_a=46) & !g)", "@u nucleic & ([U] or [DU] or within(group,_a=47) & !t)", "@tu nucleic & within(group,_a=48)", "@ions _g>=46&_g<48", "@alpha _a=2", "@_bb protein&(_a>=1&_a<6|_a=64) | nucleic&(_a>=6&_a<14|_a>=73&&_a<=79||_a==99||_a=100)", "@backbone _bb | _H && connected(single, _bb)", "@spine protein&_a>=1&_a<4|nucleic&(_a>=6&_a<11|_a=13)", "@sidechain (protein,nucleic) & !backbone", "@base nucleic & !backbone", "@dynamic_flatring search(\'[a]\')", "@nonmetal _H,_He,_B,_C,_N,_O,_F,_Ne,_Si,_P,_S,_Cl,_Ar,_As,_Se,_Br,_Kr,_Te,_I,_Xe,_At,_Rn", "@metal !nonmetal", "@alkaliMetal _Li,_Na,_K,_Rb,_Cs,_Fr", "@alkalineEarth _Be,_Mg,_Ca,_Sr,_Ba,_Ra", "@nobleGas _He,_Ne,_Ar,_Kr,_Xe,_Rn", "@metalloid _B,_Si,_Ge,_As,_Sb,_Te", "@transitionMetal elemno>=21&elemno<=30|elemno=57|elemno=89|elemno>=39&elemno<=48|elemno>=72&elemno<=80|elemno>=104&elemno<=112", "@lanthanide elemno>57&elemno<=71", "@actinide elemno>89&elemno<=103"]);
C$.shapeClassBases=Clazz.array(String, -1, ["Balls", "Sticks", "Hsticks", "Sssticks", "Struts", "Labels", "Measures", "Stars", "Halos", "Backbone", "Trace", "Cartoon", "Strands", "MeshRibbon", "Ribbons", "Rockets", "Dots", "Dipoles", "Vectors", "GeoSurface", "Ellipsoids", "Polyhedra", "Draw", "CGO", "Isosurface", "Contact", "LcaoCartoon", "MolecularOrbital", "NBO", "Pmesh", "Plot3D", "Echo", "Bbcage", "Uccage", "Axes", "Hover", "Frank"]);
{
{

}
};
C$.LABEL_DEFAULT_OFFSET=8396800;
C$.echoNames=Clazz.array(String, -1, ["top", "bottom", "middle", "xy", "xyz"]);
C$.hAlignNames=Clazz.array(String, -1, ["", "left", "center", "right"]);
C$.READER_NOT_FOUND="File reader was not found:";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
