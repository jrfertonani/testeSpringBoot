package back.model.resources;

import back.model.entity.Produtos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface produtoResource extends JpaRepository<Produtos, Long> {
}
