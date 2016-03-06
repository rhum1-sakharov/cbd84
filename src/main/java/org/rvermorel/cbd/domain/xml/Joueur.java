//
// Ce fichier a �t� g�n�r� par l'impl�mentation de r�f�rence JavaTM Architecture for XML Binding (JAXB), v2.2.8-b130911.1802 
// Voir <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Toute modification apport�e � ce fichier sera perdue lors de la recompilation du sch�ma source. 
// G�n�r� le : 2016.03.06 � 10:47:16 AM CET 
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
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
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
     * Obtient la valeur de la propri�t� civilite.
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
     * D�finit la valeur de la propri�t� civilite.
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
     * Obtient la valeur de la propri�t� nom.
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
     * D�finit la valeur de la propri�t� nom.
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
     * Obtient la valeur de la propri�t� prenom.
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
     * D�finit la valeur de la propri�t� prenom.
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
     * Obtient la valeur de la propri�t� instance.
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
     * D�finit la valeur de la propri�t� instance.
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
     * Obtient la valeur de la propri�t� licence.
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
     * D�finit la valeur de la propri�t� licence.
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
     * Obtient la valeur de la propri�t� typeLicence.
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
     * D�finit la valeur de la propri�t� typeLicence.
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
     * Obtient la valeur de la propri�t� pointCumul.
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
     * D�finit la valeur de la propri�t� pointCumul.
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
     * Obtient la valeur de la propri�t� pointOfficiel.
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
     * D�finit la valeur de la propri�t� pointOfficiel.
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
     * Obtient la valeur de la propri�t� pointPromotion.
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
     * D�finit la valeur de la propri�t� pointPromotion.
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
     * Obtient la valeur de la propri�t� pointCumulActuel.
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
     * D�finit la valeur de la propri�t� pointCumulActuel.
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
     * Obtient la valeur de la propri�t� pointOfficielActuel.
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
     * D�finit la valeur de la propri�t� pointOfficielActuel.
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
     * Obtient la valeur de la propri�t� pointPromotionActuel.
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
     * D�finit la valeur de la propri�t� pointPromotionActuel.
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
