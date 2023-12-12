package Terminal1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Terminal1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Коды
 */
@Entity(name = "IISTerminal1Коды")
@Table(schema = "public", name = "Коды")
public class Kody {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодБрони")
    private String кодброни;


    public Kody() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКодБрони() {
      return кодброни;
    }

    public void setКодБрони(String кодброни) {
      this.кодброни = кодброни;
    }


}