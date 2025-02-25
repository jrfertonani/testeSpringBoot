package back.resources;

import back.model.DTO.produtosDTO;
import back.model.entity.Produtos;
import back.services.produtoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/produtos")
public class produtoRecource {

    @Autowired
    public ModelMapper mapper;

    @Autowired
    public produtoService service;

    @PostMapping
    public ResponseEntity<produtosDTO> create(@RequestBody produtosDTO DTO){
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(service.save(DTO)).toUri();
        return ResponseEntity.created(uri).body(DTO);
    }

    @GetMapping
    public ResponseEntity<List<Produtos>> getAll(){
        return ResponseEntity.ok().body(
                service.getAll()
                        .stream().map(x -> mapper.map(
                                x, Produtos.class)
                        ).toList()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<produtosDTO> getId(@PathVariable Long id){
        return ResponseEntity.ok().body(
                mapper.map(service.getId(id), produtosDTO.class)
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<produtosDTO> update(@PathVariable Long id,
                                              @RequestBody produtosDTO DTO) {
        DTO.setId(id);
        Produtos obj = service.update(id, DTO);
        return ResponseEntity.ok().body(DTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<produtosDTO> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
