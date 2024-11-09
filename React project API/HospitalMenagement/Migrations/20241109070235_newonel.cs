using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HospitalMenagement.Migrations
{
    /// <inheritdoc />
    public partial class newonel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Contact_number",
                table: "Appointments",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Contact_number",
                table: "Appointments");
        }
    }
}
