package container.teste.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import container.teste.conteiner.Conteiner;
import container.teste.conteiner.ConteinerRepository;
import container.teste.conteiner.DadosConteiner;

@RestController
@RequestMapping("/conteiners")
public class ConteinerController {
    
    @Autowired
    private ConteinerRepository repository;

    @PostMapping
    @Transactional
    public void cadastrar(@RequestBody DadosConteiner dados){
        repository.save(new Conteiner(dados));
    }

    @GetMapping
    public List<DadosConteiner> listar(){
        return repository.findAll().stream().map(DadosConteiner::new).toList();
    }

    @PutMapping
    @Transactional
    public void atualizar(@RequestBody DadosConteiner dados){
        var conteiner = repository.getReferenceById(dados.nConteiner());

        conteiner.atualizarInformacoes(dados);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void excluir(@PathVariable String id){
        repository.deleteById(id);
    }
    

}
