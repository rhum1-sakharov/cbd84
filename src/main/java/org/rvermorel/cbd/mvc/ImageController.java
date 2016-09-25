package org.rvermorel.cbd.mvc;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.CbdFiles;
import org.rvermorel.cbd.jpa.CbdFileRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.*;

@RestController
@RequestMapping(value = "/images")
public class ImageController {

    private static final Logger LOG = LoggerFactory.getLogger(ImageController.class);

    @Autowired
    private IDatastore idatastore;

    @Autowired
    private CbdFileRepository cbdFilesRepo;

    @RequestMapping(value = "/get2/{type}/{imgExtension}/{id}", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<byte[]> downloadUserAvatarImage(@PathVariable String id, @PathVariable String imgExtension,
                                                                       @PathVariable String type, HttpServletResponse response) throws IOException {
        String filename = type;
        if (type.equals(IDatastore.TYPE_CBDFILES)) {
            CbdFiles c = cbdFilesRepo.findOne(Long.valueOf(id));
            filename = c.getLabel();
        }

        byte[] img = idatastore.getContent(id, imgExtension, type);

        return ResponseEntity.ok()
                .contentLength(img.length)
                .contentType(MediaType.IMAGE_JPEG)
                .header("Content-Disposition", "inline;filename=\"banniere-sport-boules-diffusion-officielle.jpg\"")
                               .body(img);
    }

    @RequestMapping(value = "/get/{type}/{imgExtension}/{id}", method = {RequestMethod.GET}, produces = "*/*")
    public ResponseEntity<byte[]> getImage(@PathVariable String id, @PathVariable String imgExtension,
                                           @PathVariable String type, HttpServletResponse response) {
        // http://localhost:8080/cbd/images/feeds/jpg/3
        byte[] img = null;
        HttpHeaders headers = new HttpHeaders();


        String filename = type;
        if (type.equals(IDatastore.TYPE_CBDFILES)) {
            CbdFiles c = cbdFilesRepo.findOne(Long.valueOf(id));
            filename = c.getLabel();
        }
        try {
            img = idatastore.getContent(id, imgExtension, type);
            if (imgExtension.equalsIgnoreCase("jpg")) {

                headers.set("Content-Type","image/jpeg");
                /*headers.set("Accept-Ranges", "bytes");*/
                headers.setDate("Date",System.currentTimeMillis());
			/*	headers.set("Last-Modified", "Sun, 26 Jun 2016 16:50:13 GMT");*/
                headers.set("Content-Length", String.valueOf(img.length));

            } else if (imgExtension.equalsIgnoreCase("pdf")) {
                headers.set("Content-Type", "application/pdf");
                headers.set("Content-Disposition", String.format("attachment; filename=\"%s.pdf\"", filename));
            } else if (imgExtension.equalsIgnoreCase("xls")) {
                headers.set("Content-Type", "application/vnd.ms-excel");
                headers.set("Content-Disposition", String.format("attachment; filename=\"%s.xls\"", filename));
            }

        } catch (IOException e) {
            LOG.error(e.getMessage());
        }

        return new ResponseEntity<byte[]>(img, headers, HttpStatus.OK);
    }

}
