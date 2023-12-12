package Terminal1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Terminal1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Пассажир
 */
@Entity(name = "IISTerminal1Пассажир")
@Table(schema = "public", name = "Пассажир")
public class Passazhir {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "KlassBileta")
    @Convert("KlassBileta")
    @Column(name = "КлассБилета", length = 16, unique = true, nullable = false)
    private UUID _klassbiletaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "KlassBileta", insertable = false, updatable = false)
    private KlassBileta klassbileta;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kody")
    @Convert("Kody")
    @Column(name = "Коды", length = 16, unique = true, nullable = false)
    private UUID _kodyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kody", insertable = false, updatable = false)
    private Kody kody;


    public Passazhir() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }


}