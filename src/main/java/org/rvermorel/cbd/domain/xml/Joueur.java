


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
    protected String civilite="";
    @XmlElement(required = true)
    protected String nom="";
    @XmlElement(required = true)
    protected String prenom;
    @XmlElement(required = true)
    protected String instance="";
    @XmlElement(required = true)
    protected BigInteger licence= BigInteger.ZERO;;
    @XmlElement(required = true)
    protected String typeLicence ="";
    @XmlElement(required = true)
    protected BigInteger pointCumul= BigInteger.ZERO;;
    @XmlElement(required = true)
    protected BigInteger pointOfficiel = BigInteger.ZERO;
    @XmlElement(required = true)
    protected BigInteger pointPromotion= BigInteger.ZERO;
    @XmlElement(required = true)
    protected BigInteger pointCumulActuel= BigInteger.ZERO;
    @XmlElement(required = true)
    protected BigInteger pointOfficielActuel= BigInteger.ZERO;
    @XmlElement(required = true)
    protected BigInteger pointPromotionActuel= BigInteger.ZERO;

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

    
    public void setPointPromotionActuel(BigInteger value) {
        this.pointPromotionActuel = value;
    }

}
