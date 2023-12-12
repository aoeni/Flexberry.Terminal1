package Terminal1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Terminal1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ИнфБронь
 */
@Entity(name = "IISTerminal1ИнфБронь")
@Table(schema = "public", name = "ИнфБронь")
public class InfBron {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Passazhir")
    @Convert("Passazhir")
    @Column(name = "Пассажир", length = 16, unique = true, nullable = false)
    private UUID _passazhirid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Passazhir", insertable = false, updatable = false)
    private Passazhir passazhir;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Rejs")
    @Convert("Rejs")
    @Column(name = "Рейс", length = 16, unique = true, nullable = false)
    private UUID _rejsid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Rejs", insertable = false, updatable = false)
    private Rejs rejs;


    public InfBron() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}