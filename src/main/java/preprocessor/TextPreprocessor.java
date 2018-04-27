package preprocessor;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

/**
 * We're bound to need preprocessing of some kind, let's do it here.
 * 
 * @author robmoffat
 *
 */
public class TextPreprocessor {

	public static void main(String[] args) throws IOException {
		String file = args[0];
		File f = new File(file);
		
		BufferedReader br = createBufferedReader(f);
		process(br, f);
	}

	public static BufferedReader createBufferedReader(File f) throws FileNotFoundException {
		return new BufferedReader(new FileReader(f));
	}

	private static void process(BufferedReader br, File origin) throws IOException {
		String line = br.readLine();
		while (line != null) {
			if (line.trim().equals("```include")) {
				processIncludes(br, origin);
			} else {
				System.out.println(line);
			}
			line = br.readLine();
		}
	}

	private static void processIncludes(BufferedReader br, File origin) throws IOException {
		String line = br.readLine().trim();
		while (!line.equals("```")) {
			if (!line.startsWith("#")) {
				File f = new File(origin.getParentFile(), line);
				process(createBufferedReader(f), f);
			}
			line = br.readLine().trim();
		}
	}
}
