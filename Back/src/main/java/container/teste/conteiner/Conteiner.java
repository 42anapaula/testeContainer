package container.teste.conteiner;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "conteiners")
@Entity(name = "conteiner")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "nConteiner")
public class Conteiner {

    public Conteiner(DadosConteiner dados){
        this.idCliente = dados.idCliente();
        this.nConteiner = dados.nConteiner();
        this.tipo = dados.tipo();
        this.status = dados.status();
        this.categoria = dados.categoria();
    }
    
    private Long idCliente;
    @Id 
    private String nConteiner;
    private String tipo;
    private boolean status;
    private Categoria categoria;

    public void atualizarInformacoes(DadosConteiner dados) {
        if(dados.idCliente() != null){
            this.idCliente = dados.idCliente();
        }
        if(dados.nConteiner() != null){
            this.nConteiner = dados.nConteiner();
        }
        if(dados.tipo() != null){
            this.tipo = dados.tipo();
        }
        if(dados.categoria() != null){
            this.categoria = dados.categoria();
        }
        this.status = dados.status();
    }
}
