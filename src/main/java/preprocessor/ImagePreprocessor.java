package preprocessor;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.StringReader;

import org.apache.batik.transcoder.Transcoder;
import org.apache.batik.transcoder.TranscoderInput;
import org.apache.batik.transcoder.TranscoderOutput;
import org.kite9.diagram.batik.format.Kite9PNGTranscoder;
import org.kite9.diagram.batik.format.Kite9SVGTranscoder;
import org.kite9.framework.common.RepositoryHelp;

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
		
		BufferedReader br = createBufferedReader(f);
		process(br, f);
	}

	public static BufferedReader createBufferedReader(File f) throws FileNotFoundException {
		return new BufferedReader(new FileReader(f));
	}

	private static void process(BufferedReader br, File origin) throws Exception {
		String line = br.readLine();
		while (line != null) {
			if (line.trim().contains("(images/generated/")) {
				processGeneratedImage(br, origin, line);
				System.out.println(line);
			}
			line = br.readLine();
		}
	}

	private static void processGeneratedImage(BufferedReader br, File origin, String line) throws Exception {
		String str = RepositoryHelp.stream(ImagePreprocessor.class.getResourceAsStream("icon-template.svg"));
		String path = "../website.wiki/"+line.substring(line.lastIndexOf("(")+1, line.lastIndexOf(")"));
		String name = line.substring(line.lastIndexOf("/")+1, line.lastIndexOf("-risk."));
		str = str.replaceAll("\\$\\{TYPE\\}", name);
		TranscoderOutput out = new TranscoderOutput(new FileOutputStream(new File(path)));
		TranscoderInput in = new TranscoderInput(new StringReader(str));
		File kite9Dir = new File("kite9/somefile.svg");
		in.setURI(kite9Dir.toURI().toString());
		Transcoder transcoder = new Kite9PNGTranscoder();
		//Transcoder transcoder = new Kite9SVGTranscoder();
		
		transcoder.transcode(in, out);
		System.out.println("Wrote: "+path);
	}

	private static void processIncludes(BufferedReader br, File origin) throws Exception {
		String line = br.readLine().trim();
		while (!line.equals("```")) {
			if (!line.startsWith("#")) {
				File f = new File(origin.getParentFile(), line);
				String title = "# " + line.substring(line.lastIndexOf("/")+1).replace("-", " ");
				title = title.replace(".md", "");
				System.out.println("\\newpage");
				if (!line.contains("book")) {
					System.out.println(title);
				}
				process(createBufferedReader(f), f);
			}
			line = br.readLine().trim();
		}
	}
}
