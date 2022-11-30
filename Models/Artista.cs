using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ArtTime.Models
{
    public class Artista
    {
        public Artista() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public string nome { get; set; }
        public string cpf { get; set; }
        public string dataNascimento { get; set; }
        public DateTime CriadoEm { get; set; }

        public Artista(string nome, string cpf, string dataNascimento)
        {
            this.nome = nome;
            this.cpf = cpf;
            this.dataNascimento = dataNascimento;
        }
    }
}