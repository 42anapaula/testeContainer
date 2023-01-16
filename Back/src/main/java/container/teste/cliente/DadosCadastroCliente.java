package container.teste.cliente;

import jakarta.validation.constraints.NotBlank;

public record DadosCadastroCliente(@NotBlank String nome) {
    
}
