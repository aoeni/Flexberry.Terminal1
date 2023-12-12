package Terminal1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Terminal1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Рейс
 */
@Entity(name = "IISTerminal1Рейс")
@Table(schema = "public", name = "Рейс")
public class Rejs {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Куда")
    private String куда;

    @Column(name = "ОтКуда")
    private String откуда;

    @Column(name = "ВремяОтправ")
    private String времяотправ;

    @Column(name = "НачПосад")
    private String начпосад;

    @Column(name = "КонецПосад")
    private String конецпосад;

    @Column(name = "Выход")
    private String выход;

    @OneToMany(mappedBy = "rejs", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<InfBron> infbrons;


    public Rejs() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getКуда() {
      return куда;
    }

    public void setКуда(String куда) {
      this.куда = куда;
    }

    public String getОтКуда() {
      return откуда;
    }

    public void setОтКуда(String откуда) {
      this.откуда = откуда;
    }

    public String getВремяОтправ() {
      return времяотправ;
    }

    public void setВремяОтправ(String времяотправ) {
      this.времяотправ = времяотправ;
    }

    public String getНачПосад() {
      return начпосад;
    }

    public void setНачПосад(String начпосад) {
      this.начпосад = начпосад;
    }

    public String getКонецПосад() {
      return конецпосад;
    }

    public void setКонецПосад(String конецпосад) {
      this.конецпосад = конецпосад;
    }

    public String getВыход() {
      return выход;
    }

    public void setВыход(String выход) {
      this.выход = выход;
    }


}