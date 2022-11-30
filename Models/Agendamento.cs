using System.Runtime.CompilerServices;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ArtTime.Models
{

    public class Agendamento
    {
        public Agendamento() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public string localDaTattoo { get; set; }
        public string dataAgendamento { get; set; }
        public int artistaId { get; set; }
        public Artista Artista { get; set; }
        public int clienteId { get; set; }
        public Cliente Cliente { get; set; }
        public DateTime CriadoEm { get; set; }

        public Agendamento(DateTime CriadoEm, string localDaTattoo, string dataAgendamento, int artistaId, int clienteId)
        {
            this.CriadoEm = CriadoEm;
            this.localDaTattoo = localDaTattoo;
            this.dataAgendamento = dataAgendamento;
            this.artistaId = artistaId;
            this.clienteId = clienteId;
        }
    }
}