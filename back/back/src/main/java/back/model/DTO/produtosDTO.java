package back.model.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class produtosDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private String descricao;
    private LocalDate validade;
    private LocalDate cadastro;
    private BigDecimal preco;
    private Boolean ativo;
}

