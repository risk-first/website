package preprocessor;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.StringReader;

import org.apache.batik.transcoder.TranscoderInput;
import org.apache.batik.transcoder.TranscoderOutput;
import org.kite9.diagram.batik.format.Kite9PNGTranscoder;
import org.kite9.framework.common.RepositoryHelp;
import org.kite9.framework.logging.Kite9Log;

/**
 * We're bound to need preprocessing of some kind, let's do it here.
 * 
 * @author robmoffat
 *
 */
public class ImagePreprocessor {
	
	public static void main(String[] args) throws Exception {
		String file = args[0];
		File f = new File(file);
		
		Kite9Log.setLogging(false);
		
		BufferedReader br = createBufferedReader(f);
		process(br, f);
	}

	public static BufferedReader createBufferedReader(File f) throws FileNotFoundException {
		return new BufferedReader(new FileReader(f));
	}

	private static void process(BufferedReader br, File origin) throws Exception {
		String line = br.readLine();
		while (line != null) {
			if (line.trim().contains("images/generated/")) {
				processGeneratedImage(line);
				System.out.println(line);
			}
			line = br.readLine();
		}
	}

	private static void processGeneratedImage(String line) throws Exception {
		
		try {
			String imagePath = line.substring(line.lastIndexOf("{")+1, line.lastIndexOf(".png}"));
			String outputPath = "../website.wiki/"+imagePath+".png";
			
			// check if we have a template
			TranscoderInput in = null;
			File sourceFile = new File("../website.wiki/src/"+imagePath+".xml");
			if (sourceFile.exists()) {
				// a pre-existing file
				in = new TranscoderInput(new FileReader(sourceFile));
			} else {
				// create one
				String str = RepositoryHelp.stream(ImagePreprocessor.class.getResourceAsStream("icon-template.svg"));
				String name = line.substring(line.lastIndexOf("/")+1, line.lastIndexOf("-risk."));
				str = str.replaceAll("\\$\\{TYPE\\}", name);
				in = new TranscoderInput(new StringReader(str));
			}
			
			TranscoderOutput out = new TranscoderOutput(new FileOutputStream(new File(outputPath)));
			File kite9Dir = new File("kite9/somefile.svg");
			in.setURI(kite9Dir.toURI().toString());
			Kite9PNGTranscoder transcoder = new Kite9PNGTranscoder();
			transcoder.addTranscodingHint(Kite9PNGTranscoder.KEY_PIXEL_UNIT_TO_MILLIMETER, .0635f);	// 400dpi
			transcoder.transcode(in, out);
			System.out.println("Wrote: "+outputPath);
		} catch (Exception e) {
			throw new Exception("Couldn't generate: "+line, e);
		}
	}

}
