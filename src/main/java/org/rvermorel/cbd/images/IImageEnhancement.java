package org.rvermorel.cbd.images;

import java.io.IOException;

public interface IImageEnhancement {

	public byte[] resizeImg(byte[] bytes, int width) throws IOException;
	
}
