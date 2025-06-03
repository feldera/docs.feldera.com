FROM ghcr.io/astral-sh/uv:0.7.9 AS uv

FROM node:24.1.0-bookworm-slim
COPY --from=uv /uv /uvx /bin/

RUN apt-get update

# Fix locale
ENV LC_ALL=en_US.UTF-8
ENV LANG=en_US
RUN apt-get install -y locales
RUN printf '%s\n' LANG=en_US LC_ALL=en_US.UTF-8 >/etc/default/locale
RUN echo en_US.UTF-8 UTF-8 >>/etc/locale.gen
RUN locale-gen

RUN apt install -y git