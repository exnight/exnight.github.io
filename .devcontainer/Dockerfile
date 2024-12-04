FROM mcr.microsoft.com/devcontainers/typescript-node:22

RUN LAZYGIT_VERSION=$(curl -s "https://api.github.com/repos/jesseduffield/lazygit/releases/latest" | \grep -Po '"tag_name": *"v\K[^"]*') &&\
  curl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/download/v${LAZYGIT_VERSION}/lazygit_${LAZYGIT_VERSION}_Linux_x86_64.tar.gz" &&\
  tar xf lazygit.tar.gz lazygit &&\
  sudo install lazygit -D -t /usr/local/bin/ &&\
  echo "alias lg='lazygit'" >> ~/.bash_aliases

ENV ASTRO_TELEMETRY_DISABLED=1
