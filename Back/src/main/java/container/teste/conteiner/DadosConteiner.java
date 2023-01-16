package container.teste.conteiner;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record DadosConteiner(
    @NotNull
    Long idCliente, 

    @NotBlank
    @Pattern(regexp = "/([A-Z]{4})(\\d{7})/")
    String nConteiner, 

    @NotBlank
    String tipo,   
    
    @NotNull
    boolean status, 

    @NotNull
    Categoria categoria) {
    
    public DadosConteiner(Conteiner conteiner){
        this(conteiner.getIdCliente(), conteiner.getNConteiner(), conteiner.getTipo(), conteiner.isStatus(), conteiner.getCategoria());
    }
}
