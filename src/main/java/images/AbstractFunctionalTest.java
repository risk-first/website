package images;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.StringReader;
import java.net.URL;

import org.apache.batik.transcoder.Transcoder;
import org.apache.batik.transcoder.TranscoderInput;
import org.apache.batik.transcoder.TranscoderOutput;
import org.junit.Before;
import org.kite9.diagram.batik.format.Kite9PNGTranscoder;
import org.kite9.diagram.batik.format.Kite9SVGTranscoder;
import org.kite9.framework.common.HelpMethods;
import org.kite9.framework.common.RepositoryHelp;
import org.kite9.framework.common.StackHelp;
import org.kite9.framework.logging.Kite9Log;
import org.kite9.framework.xml.ADLDocument;
import org.kite9.framework.xml.AbstractStyleableXMLElement;

public abstract class AbstractFunctionalTest extends HelpMethods {

	public AbstractFunctionalTest() {
		super();
	}

	@Before
	public void initTestDocument() {
		AbstractStyleableXMLElement.TESTING_DOCUMENT =  new ADLDocument();
	}
	
	@Before
	public void resetCounter() {
		AbstractStyleableXMLElement.resetCounter();
	}

	protected void transcodePNG(String s) throws Exception {
		TranscoderOutput out = getTranscoderOutputPNG();
		TranscoderInput in = getTranscoderInput(s);
		Transcoder transcoder = new Kite9PNGTranscoder();
		transcoder.transcode(in, out);
	}
	
	
	
	protected void transcodeSVG(String s) throws Exception {
		TranscoderOutput out = getTranscoderOutputSVG();
		TranscoderInput in = getTranscoderInput(s);
		Transcoder transcoder = new Kite9SVGTranscoder();
		transcoder.transcode(in, out);
	}

	protected TranscoderOutput getTranscoderOutputPNG() throws IOException {
		File f = getOutputFile(".png");
		TranscoderOutput out = new TranscoderOutput(new FileOutputStream(f));
		return out;
	}
	
	protected TranscoderOutput getTranscoderOutputSVG() throws IOException {
		File f = getOutputFile(".svg");
		TranscoderOutput out = new TranscoderOutput(new FileWriter(f));
		out.setURI(f.getAbsolutePath());
		return out;
	}

	protected TranscoderInput getTranscoderInput(String s) throws IOException {
		File f = getOutputFile("-input.svg");
		RepositoryHelp.streamCopy(new StringReader(s), new FileWriter(f), true);
		TranscoderInput out = new TranscoderInput(new StringReader(s));
		out.setURI(getInputURI(f));
		return out;
	}

	protected abstract File getOutputFile(String ending);
	
	protected String getInputURI(File f) {
		String name = f.getName();
		String packageName = this.getClass().getPackage().getName();
		String root = "src/test/resources";
		return root+"/"+packageName.replace('.', '/') + "/" + name;
	}

	public String getDesignerStylesheetReference() {
		URL u = this.getClass().getResource("/stylesheets/designer.css");
		return "<svg:defs><svg:style type=\"text/css\"> @import url(\""+u+"\");</svg:style></svg:defs>";
	}

	protected String addSVGFurniture(String xml) {
		String prefix = "<svg:svg xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svg='http://www.w3.org/2000/svg'>";
		String style = getDesignerStylesheetReference();
		String suffix = "</svg:svg>";
		xml = xml.replaceFirst("<\\?.*\\?>","");
		String full = prefix + style + xml + suffix;
		return full;
	}
	
	protected String getTestMethod() {
		return StackHelp.getAnnotatedMethod(org.junit.Test.class).getName();
	}
	
	static boolean firstRun = true;
	
	@Before
	public void setLogging() {
		Kite9Log.setLogging(true);
		
		// if we are running more than one test, then there's no point in logging.
		if (firstRun) {
			firstRun = false;
		} else {
			Kite9Log.setLogging(false);
		}
	}
	

	protected void copyToErrors(File output) {
		copyTo(output, "errors");
	}
	 
	
	protected void copyTo(File output, String dir) {
		try {
			File parent = output.getParentFile().getParentFile().getParentFile();
			File errors = new File(parent, dir);
			errors.mkdir();
			String name = output.getName();
			File newFile = new File(errors, name);
			RepositoryHelp.streamCopy(new FileInputStream(output), new FileOutputStream(newFile), true);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}