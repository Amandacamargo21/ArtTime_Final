using Microsoft.AspNetCore.Mvc;
using ArtTime.Models;
using System.Collections.Generic;
using System.Linq;


namespace ArtTime.ArtistaController
{
    [Route("api/artista")]
    [ApiController]
    public class ArtistaController : ControllerBase
    {
        private readonly DataContext _context;

        public ArtistaController(DataContext context) =>
            _context = context;

        [HttpGet]
        [Route("listar")]
        public IActionResult Listar() =>
            Ok(_context.Artista.ToList());

        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Artista artista)
        {
            _context.Artista.Add(artista);
            _context.SaveChanges();
            return Created("", artista);
        }

        [Route("deletar/{id}")]
        [HttpDelete]

        public IActionResult Deletar([FromRoute] int id)
        {
            Artista artista = _context.Artista.Find(id);
            if (artista != null)
            {
                _context.Artista.Remove(artista);
                _context.SaveChanges();
                return Ok(artista);
            }
            return NotFound();
        }

        // PATCH: /api/artista/alterar
        [Route("alterar")]
        [HttpPatch]
        public IActionResult Alterar([FromBody] Artista artista)
        {
            _context.Artista.Update(artista);
            _context.SaveChanges();
            return Ok(artista);
        }


        [Route("buscar/{id}")]
        [HttpGet]
        public IActionResult Buscar([FromRoute] int id)
        {
            Artista artista =
                _context.Artista.Find(id);
            return artista != null ? Ok(artista) : NotFound();
        }
    }
}