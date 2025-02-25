package back.services;

import back.repository.produtoRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class produtoService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private produtoRepository repository;
}
