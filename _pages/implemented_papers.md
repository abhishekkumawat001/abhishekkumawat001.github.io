---
layout: page
permalink: /implemented-papers/
title: implemented papers
description: Research papers I've implemented from scratch - my journey from paper to code.
nav: true
nav_order: 2
---

A collection of influential research papers I've implemented from scratch to deeply understand the underlying concepts and architectures.

---

### Transformers & Attention

<div class="card mt-3">
  <div class="card-body">
    <h5 class="card-title"><strong>Attention Is All You Need</strong></h5>
    <h6 class="card-subtitle mb-2 text-muted">Vaswani et al., 2017 | NeurIPS</h6>
    <p class="card-text">
      Implemented the complete Transformer architecture from scratch including:
    </p>
    <ul>
      <li>Multi-Head Self-Attention mechanism</li>
      <li>Positional Encoding (sinusoidal)</li>
      <li>Encoder-Decoder architecture</li>
      <li>Layer Normalization & Residual Connections</li>
    </ul>
    <p>
      <strong>Tech Stack:</strong> <code>PyTorch</code> <code>NumPy</code>
    </p>
    <a href="https://arxiv.org/abs/1706.03762" class="card-link" target="_blank">Paper</a>
    <a href="https://github.com/abhishekkumawat001" class="card-link" target="_blank">Code</a>
  </div>
</div>

---

### Language Models

<div class="card mt-3">
  <div class="card-body">
    <h5 class="card-title"><strong>GPT: Improving Language Understanding by Generative Pre-Training</strong></h5>
    <h6 class="card-subtitle mb-2 text-muted">Radford et al., 2018 | OpenAI</h6>
    <p class="card-text">
      Implemented decoder-only transformer for language modeling:
    </p>
    <ul>
      <li>Causal (masked) self-attention</li>
      <li>Byte-Pair Encoding (BPE) tokenization</li>
      <li>Autoregressive text generation</li>
      <li>Temperature-based sampling</li>
    </ul>
    <p>
      <strong>Tech Stack:</strong> <code>PyTorch</code> <code>Hugging Face</code>
    </p>
    <a href="https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf" class="card-link" target="_blank">Paper</a>
    <a href="https://github.com/abhishekkumawat001" class="card-link" target="_blank">Code</a>
  </div>
</div>

---

<p class="text-muted text-center mt-4">
  <em>More implementations coming soon...</em>
</p>
