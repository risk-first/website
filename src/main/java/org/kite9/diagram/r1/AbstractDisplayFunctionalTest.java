package org.kite9.diagram.r1;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Method;

import org.junit.Test;
import org.kite9.framework.common.StackHelp;
import org.kite9.framework.common.TestingHelp;
import org.kite9.framework.dom.XMLHelper;
import org.kite9.framework.xml.ADLDocument;
import org.kite9.framework.xml.DiagramKite9XMLElement;

public class AbstractDisplayFunctionalTest extends AbstractFunctionalTest {

	protected boolean checkXML() {
		return true;
	}

	
	private void writeTemplateExpandedSVG(DiagramKite9XMLElement lastDiagram) throws IOException {
		ADLDocument d = lastDiagram.getOwnerDocument();
		File f = getOutputFile("-expanded.svg");
		String input2 = new XMLHelper().toXML(d);
		FileWriter fw = new FileWriter(f);
		fw.write(input2);
		fw.close();
	}

	
	protected void renderDiagram(String xml) throws Exception {
		//transcodePNG(addSVGFurniture(xml));
		transcodeSVG(addSVGFurniture(xml));
	}

	protected InputStream getExpectedInputStream(String ending) throws FileNotFoundException {
		Method m = StackHelp.getAnnotatedMethod(Test.class);
		Class<?> theTest = m.getDeclaringClass();
		String name = m.getName()+ending;
		File f = new File(theTest.getResource("").getFile());
		File f2 = new File(f, name);
		
		InputStream is2 = new FileInputStream(f2);
		return is2;
	}
	
	protected File getOutputFile(String ending) {
		Method m = StackHelp.getAnnotatedMethod(Test.class);
		Class<?> theTest = m.getDeclaringClass();
		File f = TestingHelp.prepareFileName(theTest, m.getName(), m.getName()+ending);
		return f;
	}
}
