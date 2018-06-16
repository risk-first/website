package org.riskfirst.website.images;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;
import java.io.StringReader;
import java.io.StringWriter;
import java.lang.reflect.Method;

import org.apache.batik.transcoder.TranscoderInput;
import org.junit.Test;
import org.kite9.framework.common.RepositoryHelp;
import org.kite9.framework.common.StackHelp;

public class TestR1Primitives extends AbstractDisplayFunctionalTest {

	protected File getWorkingDirectory() {
		return new File("kite9");
	}
	
	@Test
	public void test_r1example() throws Exception {
		StringWriter out = new StringWriter();
		Reader in = new FileReader(new File(getWorkingDirectory(),"r1example.xml"));
		RepositoryHelp.streamCopy(in, out, true);
		String xml = out.toString();
		transcodeSVG(xml);
	}
	
	@Test
	public void test_r1example2() throws Exception {
		StringWriter out = new StringWriter();
		Reader in = new FileReader(new File(getWorkingDirectory(),"r1example2.xml"));
		RepositoryHelp.streamCopy(in, out, true);
		String xml = out.toString();
		transcodeSVG(xml);
	}
	
	protected String getInputURI(File f) {
		return getWorkingDirectory().toString()+"/r1example.xml";
	}
	
	protected TranscoderInput getTranscoderInput(String s) throws IOException {
		File f = getOutputFile("-input.svg");
		RepositoryHelp.streamCopy(new StringReader(s), new FileWriter(f), true);
		TranscoderInput out = new TranscoderInput(new StringReader(s));
		out.setURI(getInputURI(f));
		return out;
	}
	
	protected File getOutputFile(String ending) {
		Method m = StackHelp.getAnnotatedMethod(Test.class);
		File f = new File("kite9", m.getName()+ending);
		return f;
	}
}
