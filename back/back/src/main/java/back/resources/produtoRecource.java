package back.resources;

import back.services.produtoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/produtos")
public class produtoRecource {

    @Autowired
    public ModelMapper mapper;

    @Autowired
    public produtoService service;

    

}
