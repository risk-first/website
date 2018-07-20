package org.riskfirst.website.preprocessor;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.StringReader;

import org.apache.batik.transcoder.TranscoderInput;
import org.apache.batik.transcoder.TranscoderOutput;
import org.kite9.diagram.batik.format.Kite9PNGTranscoder;
import org.kite9.diagram.batik.format.Kite9SVGTranscoder;
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
		
		if (file.endsWith("md")) {
			BufferedReader br = createBufferedReader(f);
			process(br, f);
		} else {
			processGeneratedImage(file);
		}
		
	}

	public static BufferedReader createBufferedReader(File f) throws FileNotFoundException {
		return new BufferedReader(new FileReader(f));
	}

	private static void process(BufferedReader br, File origin) throws Exception {
		String line = br.readLine();
		while (line != null) {
			if (line.trim().contains("(images/generated/")) {
				processGeneratedImage(line);
				System.out.println(line);
			}
			line = br.readLine();
		}
	}

	private static void processGeneratedImage(String line) throws Exception {
		
		try {
			String imagePath;
			try {
				imagePath = line.substring(line.lastIndexOf("(")+1, line.lastIndexOf("-400dpi.png)"));
			} catch (Exception e) {
				imagePath = line.substring(line.lastIndexOf("{")+1, line.lastIndexOf("-400dpi.png}"));
			}
			String outputPath1 = "../website.wiki/"+imagePath+".png";
			String outputPath2 = "../website.wiki/"+imagePath+"-400dpi.png";
			String outputPath3 = "../website.wiki/"+imagePath+".svg";

			
			// check if we have a template
			TranscoderInput in1 = null;
			TranscoderInput in2 = null;
			TranscoderInput in3 = null;

			
			File sourceFile = new File("../website.wiki/src/"+imagePath+".xml");
			if (sourceFile.exists()) {
				// a pre-existing file
				in1 = new TranscoderInput(new FileReader(sourceFile));
				in2 = new TranscoderInput(new FileReader(sourceFile));
				in3 = new TranscoderInput(new FileReader(sourceFile));
				
			} else {
				// create one
				String str = RepositoryHelp.stream(ImagePreprocessor.class.getResourceAsStream("icon-template.svg"));
				String name = line.substring(line.lastIndexOf("/")+1, line.lastIndexOf("-risk-400dpi.png"));
				str = str.replaceAll("\\$\\{TYPE\\}", name);
				in1 = new TranscoderInput(new StringReader(str));
				in2 = new TranscoderInput(new StringReader(str));
				in3 = new TranscoderInput(new StringReader(str));

			}

			File kite9Dir = new File("kite9/somefile.svg");
			in1.setURI(kite9Dir.toURI().toString());
			in2.setURI(kite9Dir.toURI().toString());
			in3.setURI(kite9Dir.toURI().toString());

			
			TranscoderOutput out = new TranscoderOutput(new FileOutputStream(new File(outputPath1)));
			Kite9PNGTranscoder transcoder = new Kite9PNGTranscoder();
			transcoder.transcode(in1, out);
			System.out.println("Wrote: "+outputPath1);
			
			TranscoderOutput out2 = new TranscoderOutput(new FileOutputStream(new File(outputPath2)));
			transcoder = new Kite9PNGTranscoder();
			transcoder.addTranscodingHint(Kite9PNGTranscoder.KEY_PIXEL_UNIT_TO_MILLIMETER, .0635f);	// 400dpi
			transcoder.transcode(in2, out2);
			System.out.println("Wrote: "+outputPath2);
			
			TranscoderOutput out3 = new TranscoderOutput(new FileOutputStream(new File(outputPath3)));
			Kite9SVGTranscoder transcoder3 = new Kite9SVGTranscoder();
			transcoder3.transcode(in3, out3);
			System.out.println("Wrote: "+outputPath3);


		} catch (Exception e) {
			throw new Exception("Couldn't generate: "+line, e);
		}
	}
}
