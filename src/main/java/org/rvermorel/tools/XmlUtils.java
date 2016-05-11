package org.rvermorel.tools;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URL;

import javax.xml.XMLConstants;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;
import javax.xml.transform.stream.StreamSource;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;
import javax.xml.validation.Validator;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.xml.sax.SAXException;

@SuppressWarnings("restriction")
public class XmlUtils {

	private static final Logger LOG = LoggerFactory.getLogger(XmlUtils.class);
	public static final String ENCODING = "UTF-8";

	private XmlUtils() {
	}

	public static <T> Object unmarshall(Class<T> c, String xml, URL xsd) {
		try {

			JAXBContext jaxbContext = JAXBContext.newInstance(c);
			XMLInputFactory inputFactory = XMLInputFactory.newInstance();
			InputStream in = new ByteArrayInputStream(xml.getBytes(ENCODING));
			XMLStreamReader eventReader = inputFactory.createXMLStreamReader(in);
			Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
			unmarshaller.setEventHandler(new javax.xml.bind.helpers.DefaultValidationEventHandler());
			return unmarshaller.unmarshal(eventReader);
		} catch (JAXBException e) {
			LOG.error(e.getMessage(), e);
		} catch (XMLStreamException e) {
			LOG.error(e.getMessage(), e);
		} catch (UnsupportedEncodingException e) {
			LOG.error(e.getMessage(), e);
		}

		return null;
	}

	public static <T> T unmarshall(Class<T> c, String xml) {
		try {

			JAXBContext jaxbContext = JAXBContext.newInstance(c);
			XMLInputFactory inputFactory = XMLInputFactory.newInstance();
			InputStream in = new ByteArrayInputStream(xml.getBytes(ENCODING));
			XMLStreamReader eventReader = inputFactory.createXMLStreamReader(in);
			Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
			unmarshaller.setEventHandler(new javax.xml.bind.helpers.DefaultValidationEventHandler());
			JAXBElement<T> root = unmarshaller.unmarshal(eventReader, c);

			return root.getValue();

		} catch (JAXBException e) {
			LOG.error(e.getMessage(), e);
		} catch (XMLStreamException e) {
			LOG.error(e.getMessage(), e);
		} catch (UnsupportedEncodingException e) {
			LOG.error(e.getMessage(), e);
		}

		return null;
	}

	public static <T> T unmarshall(Class<T> c, InputStream in) {
		try {

			JAXBContext jaxbContext = JAXBContext.newInstance(c);
			XMLInputFactory inputFactory = XMLInputFactory.newInstance();
			XMLStreamReader eventReader = inputFactory.createXMLStreamReader(in);
			Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
			//unmarshaller.setEventHandler(new javax.xml.bind.helpers.DefaultValidationEventHandler());
			JAXBElement<T> root = unmarshaller.unmarshal(eventReader, c);

			return root.getValue();

		} catch (JAXBException e) {
			LOG.error(e.getMessage(), e);
		} catch (XMLStreamException e) {
			LOG.error(e.getMessage(), e);
		}

		return null;
	}

	public static <T> String marshall(T obj) {
		return marshall(obj, true);
	}

	public static <T> String marshall(T obj, boolean xmlDeclaration) {
		JAXBContext jaxbContext;
		String s = "";
		try {
			jaxbContext = JAXBContext.newInstance(obj.getClass());
			Marshaller marshaller = jaxbContext.createMarshaller();
			marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
			ByteArrayOutputStream output = new ByteArrayOutputStream();
			marshaller.marshal(obj, output);

			s = output.toString(ENCODING);
		} catch (JAXBException e) {
			LOG.error(e.getMessage(), e);
		} catch (UnsupportedEncodingException e) {
			LOG.error(e.getMessage(), e);
		}
		return s;
	}

	public static String getTagValue(String xml, String tag) {
		String value = "";
		try {
			DocumentBuilderFactory builderFactory = DocumentBuilderFactory.newInstance();
			builderFactory.setNamespaceAware(true);
			DocumentBuilder builder = builderFactory.newDocumentBuilder();
			Document xmlDocument = builder.parse(new ByteArrayInputStream(xml.getBytes(ENCODING)));
			XPath xPath = XPathFactory.newInstance().newXPath();
			value = xPath.compile("//" + tag).evaluate(xmlDocument);
		} catch (ParserConfigurationException e) {
			LOG.error(String.format("Unable to find the tag %s !", tag), e);
		} catch (SAXException e) {
			LOG.error(String.format("Unable to find the tag %s !", tag), e);
		} catch (IOException e) {
			LOG.error(String.format("Unable to find the tag %s !", tag), e);
		} catch (XPathExpressionException e) {
			LOG.error(String.format("Unable to find the tag %s !", tag), e);
		}

		return value;
	}
	


}
