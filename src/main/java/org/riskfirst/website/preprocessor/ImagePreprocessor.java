package org.riskfirst.website.preprocessor;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.StringReader;
import java.nio.channels.FileChannel;
import java.util.Properties;

import org.apache.batik.transcoder.TranscoderException;
import org.apache.batik.transcoder.TranscoderInput;
import org.apache.batik.transcoder.TranscoderOutput;
import org.apache.commons.io.IOUtils;
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
				imagePath = line.substring(line.lastIndexOf("(")+1, line.lastIndexOf(".png)"));
			} catch (Exception e) {
				imagePath = line.substring(line.lastIndexOf("{")+1, line.lastIndexOf(".png}"));
			}

			String outputPath1 = "../website.wiki/"+imagePath+".png";
			String outputPath2 = "../website.wiki/"+imagePath+"-400dpi.png";
			String outputPath3 = "../website.wiki/"+imagePath+".svg";

			
			File sourceFile = new File("../website.wiki/src/"+imagePath+".xml");
			if (sourceFile.exists()) {
				TranscoderInput in1 = new TranscoderInput(new FileReader(sourceFile));
				TranscoderInput in2 = new TranscoderInput(new FileReader(sourceFile));
				TranscoderInput in3 = new TranscoderInput(new FileReader(sourceFile));
				createDifferentImageVersions(outputPath1, outputPath2, outputPath3, in1, in2, in3);
			} 
		} catch (Exception e) {
			throw new Exception("Couldn't generate: "+line, e);
		}
	}

	public static void createDifferentImageVersions(String outputPath1, String outputPath2, String outputPath3, TranscoderInput in1, TranscoderInput in2, TranscoderInput in3)
			throws TranscoderException, IOException {
		File kite9Dir = new File("kite9/somefile.svg");
		in1.setURI(kite9Dir.toURI().toString());
		in2.setURI(kite9Dir.toURI().toString());
		in3.setURI(kite9Dir.toURI().toString());
		
		File outputFile1 = new File(outputPath1);
		ensureDirectory(outputFile1.getParentFile());
		TranscoderOutput out = new TranscoderOutput(new FileOutputStream(outputFile1));
		Kite9PNGTranscoder transcoder = new Kite9PNGTranscoder();
		transcoder.transcode(in1, out);
		System.out.println("Wrote: "+outputPath1);
		
		try {
			TranscoderOutput out2 = new TranscoderOutput(new FileOutputStream(new File(outputPath2)));
			transcoder = new Kite9PNGTranscoder();
			transcoder.addTranscodingHint(Kite9PNGTranscoder.KEY_PIXEL_UNIT_TO_MILLIMETER, .0635f);	// 400dpi
			transcoder.transcode(in2, out2);
			System.out.println("Wrote: "+outputPath2);
		} catch (OutOfMemoryError oome) {
			// in this case, copy the original
			copyFile(new File(outputPath2), outputFile1);
		}
		
		TranscoderOutput out3 = new TranscoderOutput(new FileOutputStream(new File(outputPath3)));
		Kite9SVGTranscoder transcoder3 = new Kite9SVGTranscoder();
		transcoder3.transcode(in3, out3);
		System.out.println("Wrote: "+outputPath3);
	}

	public static void copyFile(File dest, File sourceFile) throws FileNotFoundException, IOException {
		FileChannel source = new FileInputStream(sourceFile).getChannel();
		FileChannel destination = new FileOutputStream(dest).getChannel();
		destination.transferFrom(source, 0, source.size());
		source.close();
		destination.close();
	}

	public static void ensureDirectory(File d) throws FileNotFoundException, IOException {
		d.mkdirs();
		copyFile(new File(d, "risk.css"), new File("./kite9/risk.css"));
	}
}
