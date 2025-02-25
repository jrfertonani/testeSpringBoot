package back.services;

import back._config.Exeptions.serviceExceptions.ObjectNotFoundException;
import back.model.DTO.produtosDTO;
import back.model.entity.Produtos;
import back.repository.produtoRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class produtoService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private produtoRepository repository;

    public Produtos save(produtosDTO DTO){
        return repository.save(
                mapper.map(DTO, Produtos.class)
        );
    }

    public List<Produtos> getAll(){
        return repository.findAll();
    };

    public Produtos getId(Long id) {
        return mapper.map(
                repository.findById(id).orElseThrow(
                        () -> new ObjectNotFoundException("ID not found :" + id)
                ), Produtos.class);
    }

    public Produtos update(Long id, produtosDTO DTO){
        getId(id);
        return repository.save(mapper.map(DTO, Produtos.class));
    }

    public void delete(Long id){
        getId(id);
        repository.deleteById(id);
    }
}

