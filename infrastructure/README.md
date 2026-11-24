
# Prática 4 - Infraestrutura como Código e Orquestração

## Projeto
Loja Fácil

## 1. Objetivo
Implementar conceitos de Infraestrutura como Código (IaC), automação de ambiente e orquestração de contêineres utilizando Terraform, Ansible, Docker e Kubernetes.

## 2. Terraform
Foi utilizado o Terraform para representar a infraestrutura por meio de código.

O arquivo `terraform/main.tf` utiliza o provider Local para criar um arquivo de texto que representa a infraestrutura do projeto.

Comandos utilizados:

```bash
terraform init
terraform plan
terraform apply
```

## 3. Ansible
Foi utilizado o Ansible para automatizar a preparação do ambiente.

O playbook `ansible/playbook.yml` atualiza a lista de pacotes e verifica a instalação do curl no ambiente Ubuntu.

Comando utilizado:

```bash
sudo ansible-playbook playbook.yml
```

## 4. Kubernetes
A aplicação Loja Fácil foi executada em um cluster Kubernetes local disponibilizado pelo Docker Desktop.

Foram criados os seguintes manifestos:

- `deployment.yaml`: gerencia os Pods da aplicação.
- `service.yaml`: disponibiliza o acesso à aplicação.
- `configmap.yaml`: armazena a configuração da porta da aplicação.

Comando utilizado:

```bash
kubectl apply -f infrastructure/kubernetes/
```

## 5. Escalabilidade
Foi realizada uma simulação de escalabilidade horizontal, aumentando manualmente a quantidade de réplicas da aplicação:

- 1 réplica inicial.
- 3 réplicas.
- 10 réplicas.

Comando utilizado:

```bash
kubectl scale deployment loja-facil --replicas=3
```

Para chegar a 10 réplicas, o mesmo comando foi utilizado alterando o valor para 10.

## 6. Self-Healing
Foi excluído manualmente um Pod para demonstrar o mecanismo de autorrecuperação do Kubernetes.

O Deployment identificou a ausência de uma réplica e criou automaticamente um novo Pod, mantendo a quantidade desejada de 10 réplicas.

## 7. Auto-Scaling
O auto-scaling foi estudado conceitualmente. Nesta prática, o aumento de réplicas foi realizado manualmente por meio do comando `kubectl scale`, não tendo sido configurado um escalonador automático.

## 8. Conclusão
A prática permitiu compreender como Terraform, Ansible e Kubernetes podem ser utilizados para representar infraestrutura, automatizar a preparação de ambientes e gerenciar aplicações conteinerizadas.

Também foram demonstrados os conceitos de escalabilidade horizontal e autorrecuperação utilizando um cluster Kubernetes local.
