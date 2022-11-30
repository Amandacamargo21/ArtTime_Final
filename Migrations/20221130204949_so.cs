using Microsoft.EntityFrameworkCore.Migrations;

namespace ArtTime.Migrations
{
    public partial class so : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Agendamentos_Artistas_artistaId",
                table: "Agendamentos");

            migrationBuilder.DropForeignKey(
                name: "FK_Agendamentos_Clientes_clienteId",
                table: "Agendamentos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Clientes",
                table: "Clientes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Artistas",
                table: "Artistas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Agendamentos",
                table: "Agendamentos");

            migrationBuilder.RenameTable(
                name: "Clientes",
                newName: "Cliente");

            migrationBuilder.RenameTable(
                name: "Artistas",
                newName: "Artista");

            migrationBuilder.RenameTable(
                name: "Agendamentos",
                newName: "Agendamento");

            migrationBuilder.RenameIndex(
                name: "IX_Agendamentos_clienteId",
                table: "Agendamento",
                newName: "IX_Agendamento_clienteId");

            migrationBuilder.RenameIndex(
                name: "IX_Agendamentos_artistaId",
                table: "Agendamento",
                newName: "IX_Agendamento_artistaId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Cliente",
                table: "Cliente",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Artista",
                table: "Artista",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Agendamento",
                table: "Agendamento",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Agendamento_Artista_artistaId",
                table: "Agendamento",
                column: "artistaId",
                principalTable: "Artista",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Agendamento_Cliente_clienteId",
                table: "Agendamento",
                column: "clienteId",
                principalTable: "Cliente",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Agendamento_Artista_artistaId",
                table: "Agendamento");

            migrationBuilder.DropForeignKey(
                name: "FK_Agendamento_Cliente_clienteId",
                table: "Agendamento");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Cliente",
                table: "Cliente");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Artista",
                table: "Artista");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Agendamento",
                table: "Agendamento");

            migrationBuilder.RenameTable(
                name: "Cliente",
                newName: "Clientes");

            migrationBuilder.RenameTable(
                name: "Artista",
                newName: "Artistas");

            migrationBuilder.RenameTable(
                name: "Agendamento",
                newName: "Agendamentos");

            migrationBuilder.RenameIndex(
                name: "IX_Agendamento_clienteId",
                table: "Agendamentos",
                newName: "IX_Agendamentos_clienteId");

            migrationBuilder.RenameIndex(
                name: "IX_Agendamento_artistaId",
                table: "Agendamentos",
                newName: "IX_Agendamentos_artistaId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Clientes",
                table: "Clientes",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Artistas",
                table: "Artistas",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Agendamentos",
                table: "Agendamentos",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Agendamentos_Artistas_artistaId",
                table: "Agendamentos",
                column: "artistaId",
                principalTable: "Artistas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Agendamentos_Clientes_clienteId",
                table: "Agendamentos",
                column: "clienteId",
                principalTable: "Clientes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
