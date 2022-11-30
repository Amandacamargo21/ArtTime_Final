using Microsoft.AspNetCore.Mvc;
using ArtTime.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ArtTime.AgendamentoController
{
    [ApiController]
    [Route("api/agendamento")]
    public class AgendamentoController : ControllerBase
    {
        private readonly DataContext _context;
        public AgendamentoController(DataContext context) =>
            _context = context;

        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Agendamento agendamento)
        {
            {
                _context.Agendamento.Add(agendamento);
                _context.SaveChanges();
                return Created("", agendamento);
            }
        }


        [HttpGet]
        [Route("listar")]
        public IActionResult Listar()
        {
            var agendamentos = _context.Agendamento
            .Include(agendamento => agendamento.Cliente)
            .Include(agendamento => agendamento.Artista)
            .ToList();

            return Ok(agendamentos);
        }
    }
}