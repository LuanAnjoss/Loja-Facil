
terraform {
  required_version = ">= 1.0"
}

provider "local" {}

resource "local_file" "infra_info" {
  filename = "${path.module}/infra.txt"
  content  = "Infraestrutura da Loja Facil gerenciada pelo Terraform."
}
