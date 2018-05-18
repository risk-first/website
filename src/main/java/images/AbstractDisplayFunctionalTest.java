package images;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Method;

import org.junit.Test;
import org.kite9.diagram.adl.DiagramKite9XMLElement;
import org.kite9.diagram.dom.XMLHelper;
import org.kite9.diagram.dom.elements.ADLDocument;
import org.kite9.framework.common.StackHelp;
import org.kite9.framework.common.TestingHelp;

public class AbstractDisplayFunctionalTest extends AbstractFunctionalTest {

	protected boolean checkXML() {
		return true;
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
