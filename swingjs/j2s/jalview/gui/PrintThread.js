(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.util.ArrayList','jalview.gui.AlignViewport','jalview.gui.AlignmentPanel','jalview.bin.Jalview','jalview.gui.ProgressBar','jalview.controller.AlignViewController','jalview.bin.Cache','jalview.gui.Desktop','java.awt.dnd.DropTarget','jalview.util.Platform','jalview.util.MessageManager','jalview.gui.ViewSelectionMenu','java.util.Arrays','java.awt.event.FocusAdapter','jalview.gui.Help','java.awt.event.KeyAdapter','jalview.gui.PaintRefresher','javax.swing.SwingUtilities','javax.swing.event.InternalFrameAdapter','Thread','jalview.gui.ColourMenuHelper','jalview.gui.SequenceFetcher','jalview.io.FileFormat','jalview.io.FileLoader','jalview.io.DataSourceType','jalview.io.JalviewFileChooser','jalview.io.JalviewFileView','jalview.gui.JvOptionPane','java.io.File','jalview.project.Jalview2XML','jalview.datamodel.AlignExportSettingsAdapter','jalview.io.FormatAdapter','jalview.io.BackupFiles','java.io.PrintWriter','java.io.FileWriter','jalview.gui.AlignExportOptions','jalview.io.FileFormats','jalview.gui.CutAndPasteTransfer','jalview.gui.OOMWarning','jalview.io.HtmlSvgOutput','jalview.io.BioJsHTMLOutput',['jalview.util.ImageMaker','.TYPE'],'java.awt.print.PrinterJob','jalview.gui.PrintThread','jalview.gui.AnnotationExporter','jalview.datamodel.AlignmentI','jalview.datamodel.SequenceI','jalview.commands.SlideSequencesCommand','java.awt.datatransfer.StringSelection','java.awt.Toolkit','jalview.datamodel.HiddenColumns','java.awt.datatransfer.DataFlavor','jalview.io.IdentifyFile','jalview.datamodel.Sequence','jalview.datamodel.Alignment','java.util.Vector','jalview.datamodel.AlignmentAnnotation','jalview.commands.EditCommand',['jalview.commands.EditCommand','.Action'],'jalview.analysis.AlignmentUtils','jalview.datamodel.SequenceGroup','jalview.commands.TrimRegionCommand','jalview.commands.RemoveGapColCommand','jalview.commands.RemoveGapsCommand','jalview.gui.Finder','jalview.gui.FontChooser','jalview.gui.FeatureSettings','jalview.io.AlignmentProperties','javax.swing.JLabel','java.awt.Color','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JInternalFrame','javax.swing.JScrollPane','jalview.gui.OverviewPanel','javax.swing.JLayeredPane','jalview.gui.TextColourChooser','jalview.gui.AnnotationColourChooser','jalview.gui.AnnotationColumnChooser','jalview.gui.UserDefinedColours','jalview.schemes.ColourSchemes','jalview.gui.SliderPanel','jalview.analysis.AlignmentSorter','jalview.commands.OrderCommand','jalview.gui.RedundancyPanel','jalview.gui.PairwiseAlignPanel','jalview.gui.TreePanel','javax.swing.JMenuItem','java.util.Hashtable','jalview.datamodel.SeqCigar','jalview.io.NewickFile','jalview.io.FileParse','javax.swing.JMenu','jalview.ws.jws1.Discoverer','jalview.ws.jws2.Jws2Discoverer','jalview.ws.rest.RestClient','jalview.gui.JvSwingUtils','jalview.analysis.CrossRef','jalview.gui.CrossRefAction','jalview.analysis.Dna','jalview.analysis.SequenceIdMatcher','jalview.io.AppletFormatAdapter','java.net.URL','jalview.gui.AssociatePdbFileWithSeq','jalview.io.AnnotationFile','jalview.io.TCoffeeScoreFile','jalview.schemes.TCoffeeColourScheme','jalview.io.ScoreMatrixFile','jalview.io.JPredFile','jalview.io.JnetAnnotationMaker','jalview.analysis.ParseProperties','javax.swing.JCheckBoxMenuItem','Boolean','jalview.ws.DBRefFetcher','jalview.ws.seqfetcher.DbSourceProxy','Error','jalview.gui.CalculationChooser','jalview.io.vcf.VCFLoader']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PrintThread", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['ap','jalview.gui.AlignmentPanel']]
,['O',['pf','java.awt.print.PageFormat']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel', function (ap) {
Clazz.super_(C$, this);
this.ap=ap;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var printJob=$I$(43).getPrinterJob$();
if (C$.pf != null ) {
printJob.setPrintable$java_awt_print_Printable$java_awt_print_PageFormat(this.ap, C$.pf);
} else {
printJob.setPrintable$java_awt_print_Printable(this.ap);
}if (printJob.printDialog$()) {
try {
printJob.print$();
} catch (PrintException) {
if (Clazz.exceptionOf(PrintException,"Exception")){
PrintException.printStackTrace$();
} else {
throw PrintException;
}
}
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
