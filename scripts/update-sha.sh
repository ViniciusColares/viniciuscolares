#!/bin/sh

# Obter o SHA do commit atual
SHA=$(git rev-parse HEAD)

# Verificar se o .env.local existe, criar se não existir
if [ ! -f .env.local ]; then
  touch .env.local
fi

# Remover a linha existente com NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
sed -i '/NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA/d' .env.local

# Adicionar o novo SHA ao .env.local
echo "NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA=$SHA" >> .env.local

echo "Atualizado NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA com o SHA: $SHA"
