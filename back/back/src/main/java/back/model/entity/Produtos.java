package back.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Produtos implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String descricao;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate validade;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate cadastro;

    @Column(precision = 13, scale = 2)
    private BigDecimal preco;

    @Column(nullable = false)
    private Boolean ativo = true;
}
