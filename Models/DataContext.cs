using Microsoft.EntityFrameworkCore;

namespace ArtTime.Models
{
    //Classe que reprenta o banco de dados dentro da aplicação
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Artista> Artista { get; set; }
        public DbSet<Agendamento> Agendamento { get; set; }
        public DbSet<Cliente> Cliente { get; set; }
    }
}