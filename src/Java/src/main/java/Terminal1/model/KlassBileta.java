package Terminal1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Terminal1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: КлассБилета
 */
@Entity(name = "IISTerminal1КлассБилета")
@Table(schema = "public", name = "КлассБилета")
public class KlassBileta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Класс")
    private String класс;

    @Column(name = "Место")
    private String место;


    public KlassBileta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКласс() {
      return класс;
    }

    public void setКласс(String класс) {
      this.класс = класс;
    }

    public String getМесто() {
      return место;
    }

    public void setМесто(String место) {
      this.место = место;
    }


}