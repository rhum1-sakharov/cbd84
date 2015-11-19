package org.rvermorel.cbd.images;

import static org.imgscalr.Scalr.OP_ANTIALIAS;
import static org.imgscalr.Scalr.OP_BRIGHTER;
import static org.imgscalr.Scalr.resize;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.imgscalr.Scalr.Method;
import org.springframework.stereotype.Service;

@Service
public class ImageEnhancementImpl implements IImageEnhancement {

	//private static final Logger LOG = LoggerFactory.getLogger(ImageEnhancementImpl.class);

	@Override
	public byte[] resizeImg(byte[] bytes, int width) throws IOException {
		ByteArrayInputStream bais = new ByteArrayInputStream(bytes);
		ByteArrayOutputStream baos = new ByteArrayOutputStream();

		BufferedImage bi = ImageIO.read(bais);
		BufferedImage newImg = resize(bi, Method.SPEED, 256, OP_ANTIALIAS, OP_BRIGHTER);

		ImageIO.write(newImg, "jpg", baos);
		
		return baos.toByteArray();

	}

}
