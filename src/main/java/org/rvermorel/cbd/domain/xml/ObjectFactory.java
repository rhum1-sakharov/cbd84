

package org.rvermorel.cbd.domain.xml;

import java.math.BigInteger;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.bind.annotation.adapters.CollapsedStringAdapter;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the org.rvermorel.cbd.domain.xml package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _TypeLicence_QNAME = new QName("", "typeLicence");
    private final static QName _Licence_QNAME = new QName("", "licence");
    private final static QName _PointOfficielActuel_QNAME = new QName("", "pointOfficielActuel");
    private final static QName _Instance_QNAME = new QName("", "instance");
    private final static QName _PointOfficiel_QNAME = new QName("", "pointOfficiel");
    private final static QName _PointPromotion_QNAME = new QName("", "pointPromotion");
    private final static QName _PointPromotionActuel_QNAME = new QName("", "pointPromotionActuel");
    private final static QName _PointCumulActuel_QNAME = new QName("", "pointCumulActuel");
    private final static QName _Nom_QNAME = new QName("", "nom");
    private final static QName _Prenom_QNAME = new QName("", "prenom");
    private final static QName _PointCumul_QNAME = new QName("", "pointCumul");
    private final static QName _Civilite_QNAME = new QName("", "civilite");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: org.rvermorel.cbd.domain.xml
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link Joueur }
     * 
     */
    public Joueur createJoueur() {
        return new Joueur();
    }

    /**
     * Create an instance of {@link Resultat }
     * 
     */
    public Resultat createResultat() {
        return new Resultat();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "", name = "typeLicence")
    public JAXBElement<String> createTypeLicence(String value) {
        return new JAXBElement<String>(_TypeLicence_QNAME, String.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link BigInteger }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "", name = "licence")
    public JAXBElement<BigInteger> createLicence(BigInteger value) {
        return new JAXBElement<BigInteger>(_Licence_QNAME, BigInteger.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link BigInteger }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "", name = "pointOfficielActuel")
    public JAXBElement<BigInteger> createPointOfficielActuel(BigInteger value) {
        return new JAXBElement<BigInteger>(_PointOfficielActuel_QNAME, BigInteger.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "", name = "instance")
    public JAXBElement<String> createInstance(String value) {
        return new JAXBElement<String>(_Instance_QNAME, String.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link BigInteger }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "", name = "pointOfficiel")
    public JAXBElement<BigInteger> createPointOfficiel(BigInteger value) {
        return new JAXBElement<BigInteger>(_PointOfficiel_QNAME, BigInteger.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link BigInteger }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "", name = "pointPromotion")
    public JAXBElement<BigInteger> createPointPromotion(BigInteger value) {
        return new JAXBElement<BigInteger>(_PointPromotion_QNAME, BigInteger.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link BigInteger }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "", name = "pointPromotionActuel")
    public JAXBElement<BigInteger> createPointPromotionActuel(BigInteger value) {
        return new JAXBElement<BigInteger>(_PointPromotionActuel_QNAME, BigInteger.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link BigInteger }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "", name = "pointCumulActuel")
    public JAXBElement<BigInteger> createPointCumulActuel(BigInteger value) {
        return new JAXBElement<BigInteger>(_PointCumulActuel_QNAME, BigInteger.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "", name = "nom")
    public JAXBElement<String> createNom(String value) {
        return new JAXBElement<String>(_Nom_QNAME, String.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "", name = "prenom")
    public JAXBElement<String> createPrenom(String value) {
        return new JAXBElement<String>(_Prenom_QNAME, String.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link BigInteger }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "", name = "pointCumul")
    public JAXBElement<BigInteger> createPointCumul(BigInteger value) {
        return new JAXBElement<BigInteger>(_PointCumul_QNAME, BigInteger.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "", name = "civilite")
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    public JAXBElement<String> createCivilite(String value) {
        return new JAXBElement<String>(_Civilite_QNAME, String.class, null, value);
    }

}
