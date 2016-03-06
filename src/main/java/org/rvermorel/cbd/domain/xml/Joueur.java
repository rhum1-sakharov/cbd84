//
// Ce fichier a été généré par l'implémentation de référence JavaTM Architecture for XML Binding (JAXB), v2.2.8-b130911.1802 
// Voir <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Toute modification apportée à ce fichier sera perdue lors de la recompilation du schéma source. 
// Généré le : 2016.03.06 à 10:47:16 AM CET 
//


package org.rvermorel.cbd.domain.xml;

import java.math.BigInteger;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.adapters.CollapsedStringAdapter;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;


/**
 * <p>Classe Java pour anonymous complex type.
 * 
 * <p>Le fragment de schéma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element ref="{}civilite"/>
 *         &lt;element ref="{}nom"/>
 *         &lt;element ref="{}prenom"/>
 *         &lt;element ref="{}instance"/>
 *         &lt;element ref="{}licence"/>
 *         &lt;element ref="{}typeLicence"/>
 *         &lt;element ref="{}pointCumul"/>
 *         &lt;element ref="{}pointOfficiel"/>
 *         &lt;element ref="{}pointPromotion"/>
 *         &lt;element ref="{}pointCumulActuel"/>
 *         &lt;element ref="{}pointOfficielActuel"/>
 *         &lt;element ref="{}pointPromotionActuel"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "civilite",
    "nom",
    "prenom",
    "instance",
    "licence",
    "typeLicence",
    "pointCumul",
    "pointOfficiel",
    "pointPromotion",
    "pointCumulActuel",
    "pointOfficielActuel",
    "pointPromotionActuel"
})
@XmlRootElement(name = "joueur")
public class Joueur {

    @XmlElement(required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    @XmlSchemaType(name = "NCName")
    protected String civilite;
    @XmlElement(required = true)
    protected String nom;
    @XmlElement(required = true)
    protected String prenom;
    @XmlElement(required = true)
    protected String instance;
    @XmlElement(required = true)
    protected BigInteger licence;
    @XmlElement(required = true)
    protected String typeLicence;
    @XmlElement(required = true)
    protected BigInteger pointCumul;
    @XmlElement(required = true)
    protected BigInteger pointOfficiel;
    @XmlElement(required = true)
    protected BigInteger pointPromotion;
    @XmlElement(required = true)
    protected BigInteger pointCumulActuel;
    @XmlElement(required = true)
    protected BigInteger pointOfficielActuel;
    @XmlElement(required = true)
    protected BigInteger pointPromotionActuel;

    /**
     * Obtient la valeur de la propriété civilite.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCivilite() {
        return civilite;
    }

    /**
     * Définit la valeur de la propriété civilite.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCivilite(String value) {
        this.civilite = value;
    }

    /**
     * Obtient la valeur de la propriété nom.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNom() {
        return nom;
    }

    /**
     * Définit la valeur de la propriété nom.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNom(String value) {
        this.nom = value;
    }

    /**
     * Obtient la valeur de la propriété prenom.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrenom() {
        return prenom;
    }

    /**
     * Définit la valeur de la propriété prenom.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrenom(String value) {
        this.prenom = value;
    }

    /**
     * Obtient la valeur de la propriété instance.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInstance() {
        return instance;
    }

    /**
     * Définit la valeur de la propriété instance.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInstance(String value) {
        this.instance = value;
    }

    /**
     * Obtient la valeur de la propriété licence.
     * 
     * @return
     *     possible object is
     *     {@link BigInteger }
     *     
     */
    public BigInteger getLicence() {
        return licence;
    }

    /**
     * Définit la valeur de la propriété licence.
     * 
     * @param value
     *     allowed object is
     *     {@link BigInteger }
     *     
     */
    public void setLicence(BigInteger value) {
        this.licence = value;
    }

    /**
     * Obtient la valeur de la propriété typeLicence.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTypeLicence() {
        return typeLicence;
    }

    /**
     * Définit la valeur de la propriété typeLicence.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTypeLicence(String value) {
        this.typeLicence = value;
    }

    /**
     * Obtient la valeur de la propriété pointCumul.
     * 
     * @return
     *     possible object is
     *     {@link BigInteger }
     *     
     */
    public BigInteger getPointCumul() {
        return pointCumul;
    }

    /**
     * Définit la valeur de la propriété pointCumul.
     * 
     * @param value
     *     allowed object is
     *     {@link BigInteger }
     *     
     */
    public void setPointCumul(BigInteger value) {
        this.pointCumul = value;
    }

    /**
     * Obtient la valeur de la propriété pointOfficiel.
     * 
     * @return
     *     possible object is
     *     {@link BigInteger }
     *     
     */
    public BigInteger getPointOfficiel() {
        return pointOfficiel;
    }

    /**
     * Définit la valeur de la propriété pointOfficiel.
     * 
     * @param value
     *     allowed object is
     *     {@link BigInteger }
     *     
     */
    public void setPointOfficiel(BigInteger value) {
        this.pointOfficiel = value;
    }

    /**
     * Obtient la valeur de la propriété pointPromotion.
     * 
     * @return
     *     possible object is
     *     {@link BigInteger }
     *     
     */
    public BigInteger getPointPromotion() {
        return pointPromotion;
    }

    /**
     * Définit la valeur de la propriété pointPromotion.
     * 
     * @param value
     *     allowed object is
     *     {@link BigInteger }
     *     
     */
    public void setPointPromotion(BigInteger value) {
        this.pointPromotion = value;
    }

    /**
     * Obtient la valeur de la propriété pointCumulActuel.
     * 
     * @return
     *     possible object is
     *     {@link BigInteger }
     *     
     */
    public BigInteger getPointCumulActuel() {
        return pointCumulActuel;
    }

    /**
     * Définit la valeur de la propriété pointCumulActuel.
     * 
     * @param value
     *     allowed object is
     *     {@link BigInteger }
     *     
     */
    public void setPointCumulActuel(BigInteger value) {
        this.pointCumulActuel = value;
    }

    /**
     * Obtient la valeur de la propriété pointOfficielActuel.
     * 
     * @return
     *     possible object is
     *     {@link BigInteger }
     *     
     */
    public BigInteger getPointOfficielActuel() {
        return pointOfficielActuel;
    }

    /**
     * Définit la valeur de la propriété pointOfficielActuel.
     * 
     * @param value
     *     allowed object is
     *     {@link BigInteger }
     *     
     */
    public void setPointOfficielActuel(BigInteger value) {
        this.pointOfficielActuel = value;
    }

    /**
     * Obtient la valeur de la propriété pointPromotionActuel.
     * 
     * @return
     *     possible object is
     *     {@link BigInteger }
     *     
     */
    public BigInteger getPointPromotionActuel() {
        return pointPromotionActuel;
    }

    /**
     * Définit la valeur de la propriété pointPromotionActuel.
     * 
     * @param value
     *     allowed object is
     *     {@link BigInteger }
     *     
     */
    public void setPointPromotionActuel(BigInteger value) {
        this.pointPromotionActuel = value;
    }

}
