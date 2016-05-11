package org.rvermorel.cbd.mvc;

import junit.framework.TestCase;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.xml.Resultat;
import org.rvermorel.tools.XmlUtils;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;

import static org.junit.Assert.*;

/**
 * Created by romai on 11/05/2016.
 */
public class RankingControllerTest {
    @Before
    public void setUp() throws Exception {

    }

    @After
    public void tearDown() throws Exception {

    }

    @Test
    public void displaySortedPartners() throws Exception {
        InputStream in = new FileInputStream(new File("./src/test/java/org/rvermorel/cbd/mvc/57330e760a31d.xml"));
        Resultat res = XmlUtils.unmarshall(Resultat.class, in);
        TestCase.assertNotNull(res);
    }

}