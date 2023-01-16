package container.teste.cliente;

public record DadosListagemCliente(Long id, String nome) {

    public DadosListagemCliente(Cliente cliente){
        this(cliente.getId(), cliente.getNome());
    }
    
}
